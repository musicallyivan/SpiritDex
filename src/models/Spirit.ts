import type { Variant } from "../constants/variants";
import type { Element } from "../constants/elements";
import type { Rarity } from "../constants/rarities";
import type { Category } from "../constants/categories";


export interface Spirit {

  id: string;

  name: string;


  images: {

    normal: string;

    oro?: string;

    galaxia?: string;

    gominola?: string;

    gema?: string;

    cubo?: string;

    cuac?: string;

    holografico?: string;

  };


  variant: Variant;

  element: Element;

  rarity: Rarity;

  category: Category;


  description: string;

  season: string;

  available: boolean;


  obtainMethod: string;


  maxLevel: 5;

  maxMastery: number;


  order: number;

}