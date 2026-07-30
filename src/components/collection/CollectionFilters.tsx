import { useFilterStore } from "../../store/useFilterStore";
import { ELEMENTS } from "../../constants/elements";
import { RARITIES } from "../../constants/rarities";

export default function CollectionFilters() {

  const {
    search,
    filter,
    element,
    rarity,
    sort,
    setSearch,
    setElement,
    setRarity,
    setFilter,
    setSort
  } = useFilterStore();

  return (

    <div className="flex flex-wrap gap-4 mb-8">

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="🔎 Buscar espíritu..."
        className="bg-slate-800 rounded-lg px-4 py-2 w-64"
      />

      <select
        value={filter}
        onChange={(e) =>
          setFilter(
            e.target.value as
              | "all"
              | "owned"
              | "lost"
              | "mastery"
          )
        }
        className="bg-slate-800 rounded-lg px-4 py-2"
      >
        <option value="all">Todos</option>
        <option value="owned">Conseguidos</option>
        <option value="lost">Perdidos</option>
        <option value="mastery">Maestría</option>
      </select>
      
      <select
        value={element}
        onChange={(e) => setElement(e.target.value)}
        className="bg-slate-800 rounded-lg px-4 py-2"
      >
        <option>Todos</option>

        {ELEMENTS.map((item) => (
          <option key={item}>
            {item}
          </option>
        ))}

      </select>

      <select
        value={rarity}
        onChange={(e) => setRarity(e.target.value)}
        className="bg-slate-800 rounded-lg px-4 py-2"
      >
        <option>Todas</option>

        {RARITIES.map((item) => (
          <option key={item}>
            {item}
          </option>
        ))}

      </select>

      <select

      value={sort}

      onChange={(e) =>
        setSort(
          e.target.value as
          | "name"
          | "level"
          | "mastery"
          | "rarity"
          | "element"
        )
      }

      className="
      bg-slate-800
      rounded-lg
      px-4
      py-2
      "

      >

      <option value="name">
      🔤 Nombre
      </option>

      <option value="level">
      ⭐ Nivel
      </option>

      <option value="mastery">
      👑 Maestría
      </option>

      <option value="rarity">
      🎨 Rareza
      </option>

      <option value="element">
      🌎 Elemento
      </option>


      </select>

      <button

      onClick={() =>
        setFilter("all")
      }

      className="
      bg-slate-800
      rounded-lg
      px-4
      py-2
      "

      >
      📚 Todos

      </button>


      <button

      onClick={() =>
        setFilter("owned")
      }

      className="
      bg-slate-800
      rounded-lg
      px-4
      py-2
      "

      >
      ✅ Poseídos

      </button>


      <button

      onClick={() =>
        setFilter("lost")
      }

      className="
      bg-slate-800
      rounded-lg
      px-4
      py-2
      "

      >
      💀 Perdidos

      </button>


      <button

      onClick={() =>
        setFilter("mastery")
      }

      className="
      bg-slate-800
      rounded-lg
      px-4
      py-2
      "

      >
      👑 Maestría

      </button>

      <button

        onClick={() =>
          setFilter("favorite")
        }

        className="
        bg-slate-800
        rounded-lg
        px-4
        py-2
        "

      >
        ❤️ Favoritos

      </button>

    </div>

  );

}