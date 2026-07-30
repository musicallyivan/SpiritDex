import type { Element } from "../constants/elements";

export function getElementBackground(
  element: Element
) {

  switch (element) {

    case "Agua":
      return "from-blue-600/40";

    case "Fuego":
      return "from-red-600/40";

    case "Tierra":
      return "from-green-600/40";

    case "Aire":
      return "from-sky-500/40";

    case "Pescado":
      return "from-cyan-500/40";

    case "Pato":
      return "from-yellow-400/40";

    case "Fantasma":
      return "from-purple-600/40";

    case "Demonio":
      return "from-red-900/40";

    case "Rey":
      return "from-amber-500/40";

    case "Aura":
      return "from-pink-500/40";

    case "Futbolista":
      return "from-green-500/40";

    case "Sueño":
      return "from-indigo-500/40";

    case "Punk":
      return "from-fuchsia-600/40";

    case "Jefe":
      return "from-orange-600/40";

    case "Siete":
      return "from-violet-500/40";

    case "Batman":
      return "from-slate-800/40";

    case "Parca":
      return "from-gray-700/40";

    case "Punto cero":
      return "from-cyan-400/40";

    case "Cacahuete":
      return "from-amber-700/40";

    case "Vini Jr.":
      return "from-lime-500/40";

    case "Pollo":
      return "from-orange-400/40";

    default:
      return "from-slate-700/40";

  }

}