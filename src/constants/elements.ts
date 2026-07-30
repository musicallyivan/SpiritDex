export const ELEMENTS = [
  "Agua",
  "Fuego",
  "Tierra",
  "Aire",
  "Pescado",
  "Pato",
  "Fantasma",
  "Demonio",
  "Rey",
  "Aura",
  "Futbolista",
  "Sueño",
  "Punk",
  "Jefe",
  "Siete",
  "Batman",
  "Parca",
  "Punto cero",
  "Cacahuete",
  "Vini Jr.",
  "Pollo"
] as const;

export type Element = typeof ELEMENTS[number];