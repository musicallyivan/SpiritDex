import type { Rarity } from "../constants/rarities";


export function getRarityStyle(
  rarity: Rarity
) {

  switch (rarity) {

    case "Raro":
      return "border-blue-400";


    case "Epico":
      return "border-purple-500";


    case "Legendario":
      return "border-orange-500";


    case "Mitico":
      return "border-yellow-400";


    default:
      return "border-slate-700";

  }

}