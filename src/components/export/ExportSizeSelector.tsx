import { useExportSizeStore } from "../../store/useExportSizeStore";


export default function ExportSizeSelector() {


  const {
    size,
    setSize

  } = useExportSizeStore();


  return (

    <div className="
      flex
      gap-3
      flex-wrap
      mb-6
    ">


      <button

        onClick={() =>
          setSize("square")
        }

        className={`
          px-4
          py-2
          rounded-lg

          ${
            size === "square"
            ? "bg-cyan-500"
            : "bg-slate-800"
          }
        `}

      >
        ⬜ Cuadrado
      </button>



      <button

        onClick={() =>
          setSize("landscape")
        }

        className={`
          px-4
          py-2
          rounded-lg

          ${
            size === "landscape"
            ? "bg-cyan-500"
            : "bg-slate-800"
          }
        `}

      >
        ▭ Horizontal
      </button>



      <button

        onClick={() =>
          setSize("portrait")
        }

        className={`
          px-4
          py-2
          rounded-lg

          ${
            size === "portrait"
            ? "bg-cyan-500"
            : "bg-slate-800"
          }
        `}

      >
        📱 Vertical
      </button>


    </div>

  );

}