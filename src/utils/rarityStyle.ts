import type { Rarity } from "../constants/rarities";


export function getRarityStyle(
  rarity: Rarity
) {

  switch (rarity) {

    case "Mitico":
      return "border-red-500 shadow-red-500/50";

    case "Legendario":
      return "border-yellow-400 shadow-yellow-400/50";

    case "Epico":
      return "border-purple-500 shadow-purple-500/50";

    case "Raro":
      return "border-blue-500 shadow-blue-500/50";

    default:
      return "border-slate-700";

  }

}