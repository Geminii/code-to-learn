import { Viewport } from "@/utils/viewport";

export type Level = "easy" | "medium" | "hard";

export type GameStatus = "initial" | "started" | "playing" | "ended";

export type BulletsGameType = {
  level: Level;
  score: number;
  configuration?: BulletsGameConfigurationType;
};

export type BulletsGameConfigurationType = {
  nbBullets: number;
  activeBullets: number[];
  disabledBullets: number[];
};

export const INITIAL_NB_BULLETS = 144;

export const NB_BULLETS_BY_LEVEL: Record<Level, number> = {
  easy: 3,
  medium: 12,
  hard: 24,
};

export const INITIAL_VIEWPORT_BULLETS: Record<Viewport, number> = {
  mobile: 45,
  tablet: 115,
  desktop: 155,
};

export const INITIAL_LEVELS: Level[] = ["easy", "medium", "hard"];

export const generateRandomBullets = (
  totalBullets: number,
  nbDesiredBullets: number,
  excludedBullets: number[] = []
) => {
  const randomBullets: number[] = [];

  while (randomBullets.length < nbDesiredBullets) {
    const randomNumber = Math.floor(Math.random() * totalBullets);
    if (
      !randomBullets.includes(randomNumber) &&
      !excludedBullets.includes(randomNumber)
    ) {
      randomBullets.push(randomNumber);
    }
  }

  return randomBullets;
};
