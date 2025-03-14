// animations.ts
export type PetType = "cat" | "dog" | "dragon" | "alien";
export type ActionType =
  | "idle"
  | "eating"
  | "snack"
  | "feast"
  | "bath"
  | "playing_ball"
  | "playing_chase"
  | "playing_puzzle"
  | "sleeping"
  | "sick"
  | "banana_eating";

// Cat animations
export const catAnimations: Record<ActionType, string[]> = {
  idle: [
    `
     /\\_/\\
    ( o.o )
     > ^ <
   `,
    `
     /\\_/\\
    ( -.- )
     > ^ <
   `,
    `
     /\\_/\\
    ( o.o )
      > ^
   `,
    `
     /\\_/\\
    ( -.- )
     > ^ <
   `,
    `
     /\\_/\\
    ( o.o )
     > ^ <
   `,
  ],

  eating: [
    `
    /\\_/\\
   ( o.o )
   (>^🍎<)
   `,
    `
    /\\_/\\
   ( -.- )
   (>^🍎<)
   `,
    `
    /\\_/\\
   ( o.o )
   (>^🍎<)
   `,
    `
    /\\_/\\
   ( -.- )
   (>^🍎<)
   `,
    `
   🎉/\\_/\\🎉
  ( o.o )
  (>^❤️<)
  `,
  ],

  feast: [
    `
    /\\_/\\
   ( o.o )
   (>^🍗<)
   `,
    `
    /\\_/\\
   ( -.- )
   (>^🍗<)
   `,
    `
    /\\_/\\
   ( o.o )
   (>^🍗<)
   `,
    `
   🎉/\\_/\\🎉
  ( o.o )
  (>^❤️<)
  `,
    `
   🎉/\\_/\\🎉
  ( -.- )
  (>^❤️<)
  `,
  ],

  snack: [
    `
    /\\_/\\
   ( o.o )
   (>^🍪<)
   `,
    `
    /\\_/\\
   ( -.- )
   (>^🍪<)
   `,
    `
    /\\_/\\
   ( o.o )
   (>^🍪<)
   `,
    `
    /\\_/\\
   ( -.- )
   (>^🍪<)
   `,
    `
   /\\_/\\
  ( o.o )
  (>^   ^<)
  `,
  ],

  bath: [
    `
     /\\_/\\
    ( o.o )
    > ^ <  o
     \\___/ oo
  `,
    `
     /\\_/\\
    ( -.- )
    > ^ < o
     \\___/oo
  `,
    `
     /\\_/\\
    ( o.o )
     > ^ <o
     \\___/ oo
  `,
    `
     /\\_/\\
    ( -.- )
     > ^ <o
     \\___/oo
  `,
    `
     /\\_/\\
    ( o.o )
     > ^ <  o
     \\___/ o
  `,
  ],

  playing_ball: [
    `
   /\\_/\\
  ( o.o )
   >⚽<
  `,
    `
     /\\_/\\
    ( o.o )
     >⚽<
  `,
    `
       /\\_/\\
      ( o.o )
       >⚽<
  `,
    `
        /\\_/\\
       ( o.o )
        >⚽<
  `,
    `
          /\\_/\\
         ( o.o )
          >⚽<
  `,
  ],

  playing_chase: [
    `
   /\\_/\\
  ( o.o )
   >🏃<
  `,
    `
     /\\_/\\
    ( o.o )
     >🏃<
  `,
    `
             /\\_/\\
            ( o.o )
             >🏃<
  `,
    `
          /\\_/\\
         ( o.o )
          >🏃<
  `,
    `
        /\\_/\\
       ( o.o )
        >🏃<
  `,
  ],

  playing_puzzle: [
    `
     /\\_/\\
    ( o.o )
     >🧩<
   `,
    `
     /\\_/\\
    ( -.- )
     >🧩<
   `,
    `
     /\\_/\\
    ( o.o )
     >🧩<
   `,
    `
     /\\_/\\
    (😮.😮)
     >🧩<
   `,
    `
     /\\_/\\
    (😀.😀)
     >🧩<
   `,
  ],

  sleeping: [
    `
     /\\_/\\
    ( -.- )
     > ^ <
     💤
   `,
    `
     /\\_/\\
    ( -.- )
     > ^ <
      💤
   `,
    `
     /\\_/\\
    ( -.- )
     > ^ <
       💤
   `,
    `
     /\\_/\\
    ( -.- )
     > ^ <
        💤
   `,
    `
     /\\_/\\
    ( -.- )
     > ^ <
     💤
   `,
  ],

  sick: [
    `
     /\\_/\\
    ( o.o )
     > ^ <
   💉`,
    `
     /\\_/\\
    ( -.- )
     >   <
   💉`,
    `
     /\\_/\\
    ( T.T )
     > ^ <
   💉`,
    `
     /\\_/\\
    ( -.- )
     >   <
   💉`,
    `
     /\\_/\\
    ( T.T )
     > ^ <
   💉`,
  ],

  banana_eating: [
    `
     /\\_/\\
    ( o.o )
     > ^ <
      🍌
   `,
    `
     /\\_/\\
    ( o.o )
     >🍌<
   `,
    `
     /\\_/\\
    ( -.- )
     >🍌<
   `,
    `
     /\\_/\\
    ( o.o )
     >🍌<
   `,
    `
     /\\_/\\
    ( -.- )
     >🍌<
   `,
  ],
};

// Dog animations
export const dogAnimations: Record<ActionType, string[]> = {
  idle: [
    `
  /^\\___/^\\
 /  o   o  \\
 V    V    V
  \\  ___  /
   \\/   \\/
    `,
    `
  /^\\___/^\\
 /  -   -  \\
 V    V    V
  \\  ___  /
   \\/   \\/
    `,
    `
  /^\\___/^\\
 /  o   o  \\
 V    V    V
  \\  ___  /
   \\/   \\/
    `,
    `
  /^\\___/^\\
 /  -   -  \\
 V    V    V
  \\  ___  /
   \\/   \\/
    `,
    `
  /^\\___/^\\
 /  o   o  \\
 V    V    V
  \\  ___  /
   \\/   \\/
    `,
  ],

  eating: [
    `
  /^\\___/^\\
 /  o   o  \\
 V   🍎   V
  \\  ___  /
   \\/   \\/
    `,
    `
  /^\\___/^\\
 /  -   -  \\
 V   🍎   V
  \\  ___  /
   \\/   \\/
    `,
    `
  /^\\___/^\\
 /  o   o  \\
 V   🍎   V
  \\  ___  /
   \\/   \\/
    `,
    `
  /^\\___/^\\
 /  -   -  \\
 V   🍎   V
  \\  ___  /
   \\/   \\/
    `,
    `
  /^\\___/^\\
 /  😋  😋 \\
 V   🍎   V
  \\  ___  /
   \\/   \\/
    `,
  ],

  snack: [
    `
  /^\\___/^\\
 /  o   o  \\
 V   🍪   V
  \\  ___  /
   \\/   \\/
    `,
    `
  /^\\___/^\\
 /  -   -  \\
 V   🍪   V
  \\  ___  /
   \\/   \\/
    `,
    `
  /^\\___/^\\
 /  o   o  \\
 V   🍪   V
  \\  ___  /
   \\/   \\/
    `,
    `
  /^\\___/^\\
 /  -   -  \\
 V   🍪   V
  \\  ___  /
   \\/   \\/
    `,
    `
  /^\\___/^\\
 /  😋  😋 \\
 V   🍪   V
  \\  ___  /
   \\/   \\/
    `,
  ],

  feast: [
    `
  /^\\___/^\\
 /  o   o  \\
 V   🍗   V
  \\  ___  /
   \\/   \\/
    `,
    `
  /^\\___/^\\
 /  -   -  \\
 V   🍗   V
  \\  ___  /
   \\/   \\/
    `,
    `
  /^\\___/^\\
 /  o   o  \\
 V   🍗   V
  \\  ___  /
   \\/   \\/
    `,
    `
  /^\\___/^\\
 /  -   -  \\
 V   🍗   V
  \\  ___  /
   \\/   \\/
    `,
    `
  /^\\___/^\\
 /  😋  😋 \\
 V   🍗   V
  \\  ___  /
   \\/   \\/
    `,
  ],

  bath: [
    `
  /^\\___/^\\  o
 /  o   o  \\
 V    V    V o
  \\  ___  /
   \\/   \\/
    `,
    `
  /^\\___/^\\
 /  -   -  \\ o
 V    V    V
  \\  ___  / o
   \\/   \\/
    `,
    `
  /^\\___/^\\  o
 /  o   o  \\
 V    V    V o
  \\  ___  /
   \\/   \\/
    `,
    `
  /^\\___/^\\
 /  -   -  \\ o
 V    V    V
  \\  ___  / o
   \\/   \\/
    `,
    `
  /^\\___/^\\
 /  o   o  \\ o
 V    V    V
  \\  ___  /
   \\/   \\/
    `,
  ],

  playing_ball: [
    `
  /^\\___/^\\
 /  o   o  \\
 V    V    V
  \\  ___  /
   \\/   \\/
      ⚽
    `,
    `
  /^\\___/^\\
 /  o   o  \\
 V    V    V
  \\  ___  /
   \\/   \\/
    ⚽
    `,
    `
  /^\\___/^\\
 /  o   o  \\
 V    V    V  ⚽
  \\  ___  /
   \\/   \\/

    `,
    `
  /^\\___/^\\
 /  o   o  \\  ⚽
 V    V    V
  \\  ___  /
   \\/   \\/

    `,
    `
  /^\\___/^\\  ⚽
 /  o   o  \\
 V    V    V
  \\  ___  /
   \\/   \\/

    `,
  ],

  playing_chase: [
    `
  /^\\___/^\\
 /  o   o  \\
 V    V    V
  \\  ___  /
   \\/   \\/
      🏃
    `,
    `
  /^\\___/^\\
 /  o   o  \\
 V    V    V
  \\  ___  /
   \\/   \\/
    🏃
    `,
    `
  /^\\___/^\\
 /  o   o  \\
 V    V    V  🏃
  \\  ___  /
   \\/   \\/

    `,
    `
  /^\\___/^\\
 /  o   o  \\  🏃
 V    V    V
  \\  ___  /
   \\/   \\/

    `,
    `
  /^\\___/^\\  🏃
 /  o   o  \\
 V    V    V
  \\  ___  /
   \\/   \\/

    `,
  ],

  playing_puzzle: [
    `
  /^\\___/^\\
 /  o   o  \\
 V    V    V
  \\  ___  /
   \\/   \\/
      🧩
    `,
    `
  /^\\___/^\\
 /  -   -  \\
 V    V    V
  \\  ___  /
   \\/   \\/
    🧩
    `,
    `
  /^\\___/^\\
 /  o   o  \\
 V    V    V  🧩
  \\  ___  /
   \\/   \\/

    `,
    `
  /^\\___/^\\
 /  😮  😮 \\
 V    V    V
  \\  ___  /
   \\/   \\/
    🧩
    `,
    `
  /^\\___/^\\
 /  😀  😀 \\
 V    V    V
  \\  ___  /
   \\/   \\/
    🧩
    `,
  ],

  sleeping: [
    `
  /^\\___/^\\
 /  -   -  \\
 V    V    V
  \\  ___  /
   \\/   \\/
    💤
    `,
    `
  /^\\___/^\\
 /  -   -  \\
 V    V    V
  \\  ___  /
   \\/   \\/
     💤
    `,
    `
  /^\\___/^\\
 /  -   -  \\
 V    V    V
  \\  ___  /
   \\/   \\/
      💤
    `,
    `
  /^\\___/^\\
 /  -   -  \\
 V    V    V
  \\  ___  /
   \\/   \\/
       💤
    `,
    `
  /^\\___/^\\
 /  -   -  \\
 V    V    V
  \\  ___  /
   \\/   \\/
    💤
    `,
  ],

  sick: [
    `
  /^\\___/^\\
 /  o   o  \\
 V    V    V
  \\  ___  /
   \\/   \\/
    🤒
    `,
    `
  /^\\___/^\\
 /  -   -  \\
 V    V    V
  \\  ___  /
   \\/   \\/
    🤒
    `,
    `
  /^\\___/^\\
 /  T   T  \\
 V    V    V
  \\  ___  /
   \\/   \\/
    🤒
    `,
    `
  /^\\___/^\\
 /  -   -  \\
 V    V    V
  \\  ___  /
   \\/   \\/
    💉
    `,
    `
  /^\\___/^\\
 /  T   T  \\
 V    V    V
  \\  ___  /
   \\/   \\/
    💉
    `,
  ],

  banana_eating: [
    `
  /^\\___/^\\
 /  o   o  \\
 V    V    V
  \\  ___  /
   \\/   \\/
    🍌
    `,
    `
  /^\\___/^\\
 /  o   o  \\
 V   🍌   V
  \\  ___  /
   \\/   \\/

    `,
    `
  /^\\___/^\\
 /  -   -  \\
 V   🍌   V
  \\  ___  /
   \\/   \\/

    `,
    `
  /^\\___/^\\
 /  o   o  \\
 V   🍌   V
  \\  ___  /
   \\/   \\/

    `,
    `
  /^\\___/^\\
 /  -   -  \\
 V   🍌   V
  \\  ___  /
   \\/   \\/

    `,
  ],
};

// Dragon animations
export const dragonAnimations: Record<ActionType, string[]> = {
  idle: [
    `
    /\\
   /  \\
  / ^^ \\
 /      \\
/        \\
    `,
    `
    /\\
   /  \\
  / -- \\
 /      \\
/        \\
    `,
    `
    /\\
   /  \\
  / ^^ \\
 /      \\
/        \\
    `,
    `
    /\\
   /  \\
  / -- \\
 /      \\
/        \\
    `,
    `
    /\\
   /  \\
  / ^^ \\
 /      \\
/        \\
    `,
  ],

  eating: [
    `
    /\\
   /  \\
  / ^^ \\  🔥
 /      \\
/        \\
    `,
    `
    /\\
   /  \\
  / -- \\   🔥
 /      \\
/        \\
    `,
    `
    /\\
   /  \\
  / ^^ \\    🔥
 /      \\
/        \\
    `,
    `
    /\\
   /  \\
  / -- \\     🔥
 /      \\
/        \\
    `,
    `
    /\\
   /  \\
  / ^^ \\      🔥
 /      \\
/        \\
    `,
  ],

  snack: [
    `
    /\\
   /  \\
  / ^^ \\  🍪
 /      \\
/        \\
    `,
    `
    /\\
   /  \\
  / -- \\   🍪
 /      \\
/        \\
    `,
    `
    /\\
   /  \\
  / ^^ \\    🍪
 /      \\
/        \\
    `,
    `
    /\\
   /  \\
  / -- \\     🍪
 /      \\
/        \\
    `,
    `
    /\\
   /  \\
  / ^^ \\
 /      \\
/        \\
    `,
  ],

  feast: [
    `
    /\\
   /  \\
  / ^^ \\  🔥🍗
 /      \\
/        \\
    `,
    `
    /\\
   /  \\
  / -- \\   🔥🍗
 /      \\
/        \\
    `,
    `
    /\\
   /  \\
  / ^^ \\    🔥🍗
 /      \\
/        \\
    `,
    `
    /\\
   /  \\
  / -- \\     🔥
 /      \\
/        \\
    `,
    `
    /\\
   /  \\
  / ^^ \\      🔥
 /      \\
/        \\
    `,
  ],

  bath: [
    `
    /\\      o
   /  \\   o
  / ^^ \\
 /      \\
/        \\
    `,
    `
    /\\     o
   /  \\  o
  / -- \\
 /      \\
/        \\
    `,
    `
    /\\    o
   /  \\ o
  / ^^ \\
 /      \\
/        \\
    `,
    `
    /\\   o
   /  \\o
  / -- \\
 /      \\
/        \\
    `,
    `
    /\\  o
   /  \\
  / ^^ \\
 /      \\
/        \\
    `,
  ],

  playing_ball: [
    `
    /\\
   /  \\
  / ^^ \\
 /      \\
/        \\
    ⚽
    `,
    `
    /\\
   /  \\
  / ^^ \\
 /      \\   ⚽
/        \\

    `,
    `
    /\\
   /  \\
  / ^^ \\     ⚽
 /      \\
/        \\

    `,
    `
    /\\
   /  \\        ⚽
  / ^^ \\
 /      \\
/        \\

    `,
    `
    /\\
   /  \\
  / ^^ \\
 /      \\
/        \\
    ⚽
    `,
  ],

  playing_chase: [
    `
    /\\
   /  \\
  / ^^ \\
 /      \\
/        \\
    🏃
    `,
    `
    /\\
   /  \\
  / ^^ \\
 /      \\   🏃
/        \\

    `,
    `
    /\\
   /  \\
  / ^^ \\     🏃
 /      \\
/        \\

    `,
    `
    /\\
   /  \\        🏃
  / ^^ \\
 /      \\
/        \\

    `,
    `
    /\\           🏃
   /  \\
  / ^^ \\
 /      \\
/        \\

    `,
  ],

  playing_puzzle: [
    `
    /\\
   /  \\
  / ^^ \\
 /      \\
/        \\
    🧩
    `,
    `
    /\\
   /  \\
  / -- \\
 /      \\   🧩
/        \\

    `,
    `
    /\\
   /  \\
  / ^^ \\     🧩
 /      \\
/        \\

    `,
    `
    /\\
   /  \\
  / -- \\
 /      \\
/        \\
    🧩
    `,
    `
    /\\
   /  \\
  / ^^ \\
 /      \\
/        \\
    🧩
    `,
  ],

  sleeping: [
    `
    /\\
   /  \\
  / -- \\
 /      \\
/        \\
    💤
    `,
    `
    /\\
   /  \\
  / -- \\
 /      \\
/        \\
     💤
    `,
    `
    /\\
   /  \\
  / -- \\
 /      \\
/        \\
      💤
    `,
    `
    /\\
   /  \\
  / -- \\
 /      \\
/        \\
     💤
    `,
    `
    /\\
   /  \\
  / -- \\
 /      \\
/        \\
    💤
    `,
  ],

  sick: [
    `
    /\\
   /  \\
  / xx \\
 /      \\
/        \\
    🤒
    `,
    `
    /\\
   /  \\
  / -- \\
 /      \\
/        \\
    🤒
    `,
    `
    /\\
   /  \\
  / xx \\
 /      \\
/        \\
    💉
    `,
    `
    /\\
   /  \\
  / -- \\
 /      \\
/        \\
    💉
    `,
    `
    /\\
   /  \\
  / xx \\
 /      \\
/        \\
    🤒
    `,
  ],

  banana_eating: [
    `
    /\\
   /  \\
  / ^^ \\  🍌
 /      \\
/        \\

    `,
    `
    /\\
   /  \\
  / -- \\   🍌
 /      \\
/        \\

    `,
    `
    /\\
   /  \\
  / ^^ \\    🍌
 /      \\
/        \\

    `,
    `
    /\\
   /  \\
  / -- \\     🍌
 /      \\
/        \\

    `,
    `
    /\\
   /  \\
  / ^^ \\
 /      \\
/        \\

    `,
  ],
};

// Alien animations
export const alienAnimations: Record<ActionType, string[]> = {
  idle: [
    `
   _____
  /     \\
 | o   o |
 |   v   |
  \\_____/
    `,
    `
   _____
  /     \\
 | -   - |
 |   v   |
  \\_____/
    `,
    `
   _____
  /     \\
 | o   o |
 |   v   |
  \\_____/
    `,
    `
   _____
  /     \\
 | -   - |
 |   v   |
  \\_____/
    `,
    `
   _____
  /     \\
 | o   o |
 |   v   |
  \\_____/
    `,
  ],

  feast: [
    `
   _____
  /     \\
 | o   o |
 |  🍗   |
  \\_____/
    `,
    `
   _____
  /     \\
 | -   - |
 |  🍗   |
  \\_____/
    `,
    `
   _____
  /     \\
 | o   o |
 |  🍗   |
  \\_____/
    `,
    `
   _____
  /     \\
 | -   - |
 |  🍗   |
  \\_____/
    `,
    `
   _____
  /     \\
 | 😋  😋 |
 |  🍗   |
  \\_____/
    `,
  ],

  eating: [
    `
   _____
  /     \\
 | o   o |
 |  🍎   |
  \\_____/
    `,
    `
   _____
  /     \\
 | -   - |
 |  🍎   |
  \\_____/
    `,
    `
   _____
  /     \\
 | o   o |
 |  🍎   |
  \\_____/
    `,
    `
   _____
  /     \\
 | -   - |
 |  🍎   |
  \\_____/
    `,
    `
   _____
  /     \\
 | 😋  😋 |
 |  🍎   |
  \\_____/
    `,
  ],

  snack: [
    `
   _____
  /     \\
 | o   o |
 |  🍪   |
  \\_____/
    `,
    `
   _____
  /     \\
 | -   - |
 |  🍪   |
  \\_____/
    `,
    `
   _____
  /     \\
 | o   o |
 |  🍪   |
  \\_____/
    `,
    `
   _____
  /     \\
 | -   - |
 |  🍪   |
  \\_____/
    `,
    `
   _____
  /     \\
 | 😋  😋 |
 |  🍪   |
  \\_____/
    `,
  ],

  bath: [
    `
   _____   o
  /     \\ o
 | o   o |
 |   v   |
  \\_____/
    `,
    `
   _____  o
  /     \\
 | -   - | o
 |   v   |
  \\_____/
    `,
    `
   _____ o
  /     \\
 | o   o |
 |   v   | o
  \\_____/
    `,
    `
   _____
  /     \\ o
 | -   - |
 |   v   | o
  \\_____/
    `,
    `
   _____
  /     \\
 | o   o | o
 |   v   |
  \\_____/ o
    `,
  ],

  playing_ball: [
    `
   _____
  /     \\
 | o   o |
 |   v   |
  \\_____/
    ⚽
    `,
    `
   _____
  /     \\
 | o   o |
 |   v   |
  \\_____/ ⚽

    `,
    `
   _____
  /     \\
 | o   o | ⚽
 |   v   |
  \\_____/

    `,
    `
   _____
  /     \\ ⚽
 | o   o |
 |   v   |
  \\_____/

    `,
    `
   _____ ⚽
  /     \\
 | o   o |
 |   v   |
  \\_____/

    `,
  ],

  playing_chase: [
    `
   _____
  /     \\
 | o   o |
 |   v   |
  \\_____/
    🏃
    `,
    `
   _____
  /     \\
 | o   o |
 |   v   |
  \\_____/ 🏃

    `,
    `
   _____
  /     \\
 | o   o | 🏃
 |   v   |
  \\_____/

    `,
    `
   _____
  /     \\ 🏃
 | o   o |
 |   v   |
  \\_____/

    `,
    `
   _____ 🏃
  /     \\
 | o   o |
 |   v   |
  \\_____/

    `,
  ],

  playing_puzzle: [
    `
   _____
  /     \\
 | o   o |
 |   v   |
  \\_____/
    🧩
    `,
    `
   _____
  /     \\
 | -   - |
 |   v   |
  \\_____/
    🧩
    `,
    `
   _____
  /     \\
 | o   o |
 |   v   |
  \\_____/
   🧩
    `,
    `
   _____
  /     \\
 | 😮 😮 |
 |   v   |
  \\_____/
    🧩
    `,
    `
   _____
  /     \\
 | 😀 😀 |
 |   v   |
  \\_____/
    🧩
    `,
  ],

  sleeping: [
    `
   _____
  /     \\
 | -   - |
 |   v   |
  \\_____/
    💤
    `,
    `
   _____
  /     \\
 | -   - |
 |   v   |
  \\_____/
     💤
    `,
    `
   _____
  /     \\
 | -   - |
 |   v   |
  \\_____/
      💤
    `,
    `
   _____
  /     \\
 | -   - |
 |   v   |
  \\_____/
     💤
    `,
    `
   _____
  /     \\
 | -   - |
 |   v   |
  \\_____/
    💤
    `,
  ],

  sick: [
    `
   _____
  /     \\
 | x   x |
 |   v   |
  \\_____/
    🤒
    `,
    `
   _____
  /     \\
 | -   - |
 |   v   |
  \\_____/
    🤒
    `,
    `
   _____
  /     \\
 | x   x |
 |   v   |
  \\_____/
    💉
    `,
    `
   _____
  /     \\
 | -   - |
 |   v   |
  \\_____/
    💉
    `,
    `
   _____
  /     \\
 | x   x |
 |   v   |
  \\_____/
    🤒
    `,
  ],

  banana_eating: [
    `
   _____
  /     \\
 | o   o |
 |   v   |
  \\_____/
    🍌
    `,
    `
   _____
  /     \\
 | o   o |
 |  🍌   |
  \\_____/

    `,
    `
   _____
  /     \\
 | -   - |
 |  🍌   |
  \\_____/

    `,
    `
   _____
  /     \\
 | o   o |
 |  🍌   |
  \\_____/

    `,
    `
   _____
  /     \\
 | -   - |
 |  🍌   |
  \\_____/

    `,
  ],
};
