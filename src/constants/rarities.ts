export const RARITIES = [
  "Raro",
  "Epico",
  "Legendario",
  "Mitico"
] as const;

export type Rarity = typeof RARITIES[number];