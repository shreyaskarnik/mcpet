#!/usr/bin/env node

/**
 * MCPet: A nostalgic virtual pet experience for the AI age!
 * This MCP server lets you adopt, nurture, and play with your very own digital companion
 * that evolves based on your care. Feed them, clean them, play games together,
 * and watch them grow from a baby to an adult.
 */

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import fs from "fs/promises";
import path from "path";
import {
  getEatingAnimation,
  getPlayingAnimation,
  getIdleAnimation,
  getSleepingAnimation,
  getBathAnimation,
  getSickAnimation,
} from "./animation-utils.js";

// File to store pet data
const dataDir = process.env.PET_DATA_DIR || process.cwd();
const PET_DATA_FILE = path.join(dataDir, "virtual-pet-data.json");

// Type definitions
type PetStage = "baby" | "child" | "teen" | "adult";
type PetType = "cat" | "dog" | "dragon" | "alien";
type PetStats = {
  hunger: number;
  happiness: number;
  health: number;
  energy: number;
  cleanliness: number;
};

/**
 * Type definition for a pet object.
 */
type Pet = {
  name: string;
  type: PetType;
  created: number;
  lastInteraction: number;
  stats: PetStats;
  age: number;
  stage: PetStage;
};

// Default pet structure
const DEFAULT_PET: Pet = {
  name: "",
  type: "cat",
  created: 0,
  lastInteraction: 0,
  stats: {
    hunger: 50,
    happiness: 50,
    health: 50,
    energy: 50,
    cleanliness: 50,
  },
  age: 0,
  stage: "baby", // baby, child, teen, adult
};

// Pet data in memory
let pet: Pet | null = null;

/**
 * Create an MCP server with capabilities for tools.
 */
const server = new Server(
  {
    name: "MCPet",
    version: "0.1.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

/**
 * Helper functions for pet management
 */

/**
 * Load the pet data from the filesystem.
 */
async function loadPet() {
  try {
    const data = await fs.readFile(PET_DATA_FILE, "utf8");
    pet = JSON.parse(data);
    updatePetStats(); // Update stats based on time passed
  } catch (error) {
    // No pet exists yet
    pet = null;
  }
}

/**
 * Save the pet data to the filesystem.
 */
async function savePet() {
  if (pet) {
    pet.lastInteraction = Date.now();
    try {
      await fs.writeFile(PET_DATA_FILE, JSON.stringify(pet, null, 2), "utf8");
    } catch (error) {
      console.error(`Failed to save pet data: ${error}`);
      // Continue without saving - this will make the pet stateless
      // but at least it won't crash
    }
  }
}

/**
 * Update pet stats based on time passed since last interaction.
 */
function updatePetStats() {
  if (!pet) return;

  // Calculate time passed since last interaction
  const now = Date.now();
  const hoursPassed = (now - pet.lastInteraction) / (1000 * 60 * 60);

  // Update stats based on time (pets get hungrier, dirtier, and less happy over time)
  pet.stats.hunger = Math.max(0, pet.stats.hunger - hoursPassed * 5);
  pet.stats.happiness = Math.max(0, pet.stats.happiness - hoursPassed * 3);
  pet.stats.cleanliness = Math.max(0, pet.stats.cleanliness - hoursPassed * 4);
  pet.stats.energy = Math.min(100, pet.stats.energy + hoursPassed * 2); // Gain energy when left alone

  // Health decreases if hunger or cleanliness is very low
  if (pet.stats.hunger < 20 || pet.stats.cleanliness < 20) {
    pet.stats.health = Math.max(0, pet.stats.health - hoursPassed * 2);
  }

  // Age increases over time
  pet.age += hoursPassed / 24; // Age in days

  // Check for evolution based on age
  if (pet.age > 10 && pet.stage === "baby") {
    pet.stage = "child";
  } else if (pet.age > 20 && pet.stage === "child") {
    pet.stage = "teen";
  } else if (pet.age > 30 && pet.stage === "teen") {
    pet.stage = "adult";
  }
}

/**
 * Generate a text description of the pet's current status.
 */
function getStatusDescription() {
  if (!pet) {
    return "You don't have a pet yet! Create one first.";
  }

  const { hunger, happiness, health, energy, cleanliness } = pet.stats;
  let statusDescription = `${pet.name} is a ${pet.stage} ${pet.type}.\n`;

  // Add descriptions based on stats
  if (hunger < 20) {
    statusDescription += "🍽️ Very hungry! Needs food immediately!\n";
  } else if (hunger < 50) {
    statusDescription += "🍽️ Getting hungry.\n";
  } else {
    statusDescription += "🍽️ Well fed.\n";
  }

  if (happiness < 20) {
    statusDescription += "😢 Very sad! Needs fun activities!\n";
  } else if (happiness < 50) {
    statusDescription += "😐 Could use some playtime.\n";
  } else {
    statusDescription += "😊 Happy and content.\n";
  }

  if (cleanliness < 20) {
    statusDescription += "🛁 Very dirty! Needs cleaning!\n";
  } else if (cleanliness < 50) {
    statusDescription += "🛁 Getting dirty.\n";
  } else {
    statusDescription += "✨ Clean and fresh.\n";
  }

  if (energy < 20) {
    statusDescription += "💤 Exhausted! Needs rest!\n";
  } else if (energy < 50) {
    statusDescription += "💤 Getting tired.\n";
  } else {
    statusDescription += "⚡ Energetic and active.\n";
  }

  if (health < 20) {
    statusDescription += "🏥 Very sick! Needs medicine and care!\n";
  } else if (health < 50) {
    statusDescription += "🏥 Not feeling well.\n";
  } else {
    statusDescription += "❤️ Healthy.\n";
  }

  return statusDescription;
}

/**
 * Handler that lists available tools.
 * Exposes tools for interacting with the virtual pet.
 */
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "create_pet",
        description: "Create a new virtual pet",
        inputSchema: {
          type: "object",
          properties: {
            name: {
              type: "string",
              description: "Name for your new pet",
            },
            type: {
              type: "string",
              enum: ["cat", "dog", "dragon", "alien"],
              description: "Type of pet: cat, dog, dragon, or alien",
            },
          },
          required: ["name", "type"],
        },
      },
      {
        name: "check_pet",
        description: "Check on your virtual pet's status",
        inputSchema: {
          type: "object",
          properties: {},
          required: [],
        },
      },
      {
        name: "feed_pet",
        description: "Feed your virtual pet",
        inputSchema: {
          type: "object",
          properties: {
            food: {
              type: "string",
              enum: ["snack", "meal", "feast"],
              description: "Type of food: snack, meal, or feast",
            },
          },
          required: ["food"],
        },
      },
      {
        name: "play_with_pet",
        description: "Play with your virtual pet",
        inputSchema: {
          type: "object",
          properties: {
            activity: {
              type: "string",
              enum: ["ball", "chase", "puzzle"],
              description: "Type of play activity: ball, chase, or puzzle",
            },
          },
          required: ["activity"],
        },
      },
      {
        name: "clean_pet",
        description: "Clean your virtual pet",
        inputSchema: {
          type: "object",
          properties: {},
          required: [],
        },
      },
      {
        name: "put_to_bed",
        description: "Put your virtual pet to sleep to restore energy",
        inputSchema: {
          type: "object",
          properties: {},
          required: [],
        },
      },
    ],
  };
});

/**
 * Handler for tool execution.
 * Processes different pet-related tools.
 */
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  switch (request.params.name) {
    case "create_pet": {
      const name = String(request.params.arguments?.name);
      const type = String(request.params.arguments?.type) as PetType;

      if (!name || !type) {
        return {
          isError: true,
          content: [
            {
              type: "text",
              text: "Name and type are required to create a pet.",
            },
          ],
        };
      }

      if (!["cat", "dog", "dragon", "alien"].includes(type)) {
        return {
          isError: true,
          content: [
            {
              type: "text",
              text: "Pet type must be one of: cat, dog, dragon, alien.",
            },
          ],
        };
      }

      // Create a new pet
      pet = {
        ...DEFAULT_PET,
        name,
        type,
        created: Date.now(),
        lastInteraction: Date.now(),
      };

      await savePet();

      // Get an idle animation for the new pet
      const animation = getIdleAnimation(pet.type);

      return {
        content: [
          {
            type: "text",
            text: `Congratulations! You've created a new ${type} named ${name}!\n\n${animation}\n\nMake sure to take good care of your new friend!`,
          },
        ],
      };
    }

    case "check_pet": {
      if (!pet) {
        return {
          content: [
            {
              type: "text",
              text: "You don't have a pet yet! Use the create_pet tool to create one.",
            },
          ],
        };
      }

      updatePetStats();
      await savePet();

      // Get the idle animation for status check
      const animation = getIdleAnimation(pet.type);

      return {
        content: [
          {
            type: "text",
            text: `${animation}\n\n${getStatusDescription()}\n\nAge: ${pet.age.toFixed(
              1
            )} days`,
          },
        ],
      };
    }

    case "feed_pet": {
      if (!pet) {
        return {
          content: [
            {
              type: "text",
              text: "You don't have a pet yet! Use the create_pet tool to create one.",
            },
          ],
        };
      }

      const food = String(request.params.arguments?.food);

      if (!["snack", "meal", "feast"].includes(food)) {
        return {
          isError: true,
          content: [
            {
              type: "text",
              text: "Food type must be one of: snack, meal, feast.",
            },
          ],
        };
      }

      updatePetStats();

      // Different foods provide different amounts of satiety
      let hungerIncrease = 0;
      let healthChange = 0;
      let response = "";

      if (food === "snack") {
        hungerIncrease = 10;
        healthChange = 0;
        response = `${pet.name} enjoys the small snack. Not very filling, but tasty!`;
      } else if (food === "meal") {
        hungerIncrease = 30;
        healthChange = 5;
        response = `${pet.name} happily eats the nutritious meal and feels satisfied.`;
      } else if (food === "feast") {
        hungerIncrease = 60;
        healthChange = -5; // Too much food is unhealthy
        response = `${pet.name} devours the enormous feast! Almost too much food!`;
      }

      pet.stats.hunger = Math.min(100, pet.stats.hunger + hungerIncrease);
      pet.stats.health = Math.min(
        100,
        Math.max(0, pet.stats.health + healthChange)
      );

      await savePet();

      // Get appropriate animation for the food type
      const animation = getEatingAnimation(pet.type, food);

      return {
        content: [
          {
            type: "text",
            text: `${response}\n\n${animation}\n\nHunger: ${pet.stats.hunger.toFixed(
              0
            )}/100\nHealth: ${pet.stats.health.toFixed(0)}/100`,
          },
        ],
      };
    }

    case "play_with_pet": {
      if (!pet) {
        return {
          content: [
            {
              type: "text",
              text: "You don't have a pet yet! Use the create_pet tool to create one.",
            },
          ],
        };
      }

      const activity = String(request.params.arguments?.activity);

      if (!["ball", "chase", "puzzle"].includes(activity)) {
        return {
          isError: true,
          content: [
            {
              type: "text",
              text: "Activity type must be one of: ball, chase, puzzle.",
            },
          ],
        };
      }

      updatePetStats();

      let happinessIncrease = 0;
      let energyDecrease = 0;
      let response = "";

      if (activity === "ball") {
        happinessIncrease = 20;
        energyDecrease = 10;
        response = `${pet.name} chases the ball with excitement! Good exercise!`;
      } else if (activity === "chase") {
        happinessIncrease = 30;
        energyDecrease = 25;
        response = `You and ${pet.name} play an energetic game of chase! So much fun!`;
      } else if (activity === "puzzle") {
        happinessIncrease = 15;
        energyDecrease = 5;
        response = `${pet.name} enjoys the mental stimulation of solving puzzles!`;
      }

      pet.stats.happiness = Math.min(
        100,
        pet.stats.happiness + happinessIncrease
      );
      pet.stats.energy = Math.max(0, pet.stats.energy - energyDecrease);

      await savePet();

      // Get appropriate animation for the activity type
      const animation = getPlayingAnimation(pet.type, activity);

      return {
        content: [
          {
            type: "text",
            text: `${response}\n\n${animation}\n\nHappiness: ${pet.stats.happiness.toFixed(
              0
            )}/100\nEnergy: ${pet.stats.energy.toFixed(0)}/100`,
          },
        ],
      };
    }

    case "clean_pet": {
      if (!pet) {
        return {
          content: [
            {
              type: "text",
              text: "You don't have a pet yet! Use the create_pet tool to create one.",
            },
          ],
        };
      }

      updatePetStats();

      // Cleaning fully restores cleanliness
      pet.stats.cleanliness = 100;

      // Get the bath animation
      const animation = getBathAnimation(pet.type);

      // But can affect happiness depending on pet type
      if (pet.type === "cat") {
        pet.stats.happiness = Math.max(0, pet.stats.happiness - 10);
        pet.stats.health = Math.min(100, pet.stats.health + 5);

        await savePet();

        return {
          content: [
            {
              type: "text",
              text: `${
                pet.name
              } tolerates the bath with mild annoyance but is now clean and fresh!\n\n${animation}\n\nCleanliness: ${pet.stats.cleanliness.toFixed(
                0
              )}/100\nHappiness: ${pet.stats.happiness.toFixed(0)}/100`,
            },
          ],
        };
      } else if (pet.type === "dog") {
        pet.stats.happiness = Math.min(100, pet.stats.happiness + 5);
        pet.stats.health = Math.min(100, pet.stats.health + 5);

        await savePet();

        return {
          content: [
            {
              type: "text",
              text: `${
                pet.name
              } enjoys splashing in the bath and is now clean and fresh!\n\n${animation}\n\nCleanliness: ${pet.stats.cleanliness.toFixed(
                0
              )}/100\nHappiness: ${pet.stats.happiness.toFixed(0)}/100`,
            },
          ],
        };
      } else {
        pet.stats.health = Math.min(100, pet.stats.health + 5);

        await savePet();

        return {
          content: [
            {
              type: "text",
              text: `${
                pet.name
              } is now clean and fresh!\n\n${animation}\n\nCleanliness: ${pet.stats.cleanliness.toFixed(
                0
              )}/100\nHealth: ${pet.stats.health.toFixed(0)}/100`,
            },
          ],
        };
      }
    }

    case "put_to_bed": {
      if (!pet) {
        return {
          content: [
            {
              type: "text",
              text: "You don't have a pet yet! Use the create_pet tool to create one.",
            },
          ],
        };
      }

      updatePetStats();

      // Sleeping fully restores energy and improves health
      pet.stats.energy = 100;
      pet.stats.health = Math.min(100, pet.stats.health + 10);

      await savePet();

      // Get the sleeping animation
      const animation = getSleepingAnimation(pet.type);

      return {
        content: [
          {
            type: "text",
            text: `${
              pet.name
            } gets a good night's sleep and wakes up refreshed!\n\n${animation}\n\nEnergy: ${pet.stats.energy.toFixed(
              0
            )}/100\nHealth: ${pet.stats.health.toFixed(0)}/100`,
          },
        ],
      };
    }

    default:
      return {
        isError: true,
        content: [
          {
            type: "text",
            text: `Unknown tool: ${request.params.name}`,
          },
        ],
      };
  }
});

/**
 * Start the server using stdio transport.
 * This allows the server to communicate via standard input/output streams.
 */
async function main() {
  // Initialize our pet data when server starts
  await loadPet().catch(console.error);

  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("MCPet Virtual Pet Server running on stdio");
}

main().catch((error) => {
  console.error("Server error:", error);
  process.exit(1);
});
