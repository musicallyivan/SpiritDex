import { useFilterStore } from "../../store/useFilterStore";


export default function SpiritFilters() {

  const {
    search,
    setSearch,
    setFilter

  } = useFilterStore();


  return (

    <div className="mb-8 space-y-4">


      <input

        value={search}

        onChange={(e) =>
          setSearch(e.target.value)
        }

        placeholder="🔍 Buscar espíritu..."

        className="
        w-full
        bg-slate-900
        border
        border-slate-700
        rounded-xl
        p-3
        "

      />


      <div className="flex gap-3 flex-wrap">


        <button
          onClick={() => setFilter("all")}
          className="bg-slate-800 px-4 py-2 rounded-lg"
        >
          Todos
        </button>


        <button
          onClick={() => setFilter("owned")}
          className="bg-green-700 px-4 py-2 rounded-lg"
        >
          ✔ Tengo
        </button>


        <button
          onClick={() => setFilter("lost")}
          className="bg-red-700 px-4 py-2 rounded-lg"
        >
          💀 Perdidos
        </button>


        <button
          onClick={() => setFilter("mastery")}
          className="bg-yellow-600 px-4 py-2 rounded-lg"
        >
          👑 Maestría
        </button>


      </div>


    </div>

  );

}