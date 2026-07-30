export const VARIANTS = [
  "Normal",
  "Oro",
  "Gominola",
  "Galaxia",
  "Gema",
  "Cubo",
  "Cuac",
  "Holografico"
] as const;

export type Variant = typeof VARIANTS[number];