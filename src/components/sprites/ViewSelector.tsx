import { useViewStore } from "../../store/useViewStore";


export default function ViewSelector() {

  const {
    view,
    setView

  } = useViewStore();


  return (

    <div className="flex gap-3 mb-6">


      <button

        onClick={() =>
          setView("modern")
        }

        className={`
          px-4
          py-2
          rounded-lg

          ${
            view === "modern"
            ? "bg-cyan-500"
            : "bg-slate-800"
          }

        `}

      >
        🃏 Moderna

      </button>



      <button

        onClick={() =>
          setView("collection")
        }

        className={`
          px-4
          py-2
          rounded-lg

          ${
            view === "collection"
            ? "bg-cyan-500"
            : "bg-slate-800"
          }

        `}

      >
        📋 Colección

      </button>


      <button

        onClick={() =>
          setView("table")
        }

        className="
        bg-slate-700
        px-4
        py-2
        rounded-lg
        "

        >
        📊 Variantes
      </button>


    </div>

  );

}