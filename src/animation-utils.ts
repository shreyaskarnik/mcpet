// animation-utils.ts
import type { PetType, ActionType } from "./animations.js";
import {
  catAnimations,
  dogAnimations,
  dragonAnimations,
  alienAnimations,
} from "./animations.js";

/**
 * Get a random frame from the animation sequence for a pet type and action
 *
 * @param petType The type of pet (cat, dog, dragon, alien)
 * @param action The action the pet is performing
 * @returns A string containing an ASCII art frame
 */
export function getPetAnimation(petType: PetType, action: ActionType): string {
  if (!petType) return "";

  // Select animation set based on pet type
  let frames;
  switch (petType) {
    case "cat":
      frames = catAnimations;
      break;
    case "dog":
      frames = dogAnimations;
      break;
    case "dragon":
      frames = dragonAnimations;
      break;
    case "alien":
      frames = alienAnimations;
      break;
    default:
      frames = catAnimations; // Default to cat animations
  }

  // Get the specific animation for the action
  const animationFrames = frames[action] || frames.idle;

  // Return a random frame from the animation
  const randomIndex = Math.floor(Math.random() * animationFrames.length);
  return animationFrames[randomIndex];
}

/**
 * Get an eating animation based on the food type
 *
 * @param petType The type of pet
 * @param food The type of food (snack, meal, feast)
 * @returns A string containing an ASCII art frame of the pet eating
 */
export function getEatingAnimation(petType: PetType, food: string): string {
  switch (food) {
    case "snack":
      return getPetAnimation(petType, "snack");
    case "meal":
      return getPetAnimation(petType, "eating");
    case "feast":
      return getPetAnimation(petType, "feast");
    default:
      return getPetAnimation(petType, "eating");
  }
}

/**
 * Get a playing animation based on the activity type
 *
 * @param petType The type of pet
 * @param activity The type of play activity (ball, chase, puzzle)
 * @returns A string containing an ASCII art frame of the pet playing
 */
export function getPlayingAnimation(
  petType: PetType,
  activity: string
): string {
  switch (activity) {
    case "ball":
      return getPetAnimation(petType, "playing_ball");
    case "chase":
      return getPetAnimation(petType, "playing_chase");
    case "puzzle":
      return getPetAnimation(petType, "playing_puzzle");
    default:
      return getPetAnimation(petType, "playing_ball");
  }
}

/**
 * Get the default animation for a pet (idle state)
 *
 * @param petType The type of pet
 * @returns A string containing an ASCII art frame of the pet in idle state
 */
export function getIdleAnimation(petType: PetType): string {
  return getPetAnimation(petType, "idle");
}

/**
 * Get a sleeping animation for a pet
 *
 * @param petType The type of pet
 * @returns A string containing an ASCII art frame of the pet sleeping
 */
export function getSleepingAnimation(petType: PetType): string {
  return getPetAnimation(petType, "sleeping");
}

/**
 * Get a bathing animation for a pet
 *
 * @param petType The type of pet
 * @returns A string containing an ASCII art frame of the pet taking a bath
 */
export function getBathAnimation(petType: PetType): string {
  return getPetAnimation(petType, "bath");
}

/**
 * Get a sick animation for a pet
 *
 * @param petType The type of pet
 * @returns A string containing an ASCII art frame of the pet being sick
 */
export function getSickAnimation(petType: PetType): string {
  return getPetAnimation(petType, "sick");
}
