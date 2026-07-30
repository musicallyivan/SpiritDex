export const CATEGORIES = [
  "Elemento",
  "Especial",
  "Evento",
  "Limitado"
] as const;

export type Category = typeof CATEGORIES[number];