import { useExportFilterStore } from "../../store/useExportFilterStore";


export default function ExportFilterSelector() {


  const {
    filter,
    setFilter

  } = useExportFilterStore();


  const options = [
    {
      id: "all",
      name: "🌐 Todos"
    },
    {
      id: "owned",
      name: "✔ Conseguidos"
    },
    {
      id: "mastery",
      name: "👑 Maestrías"
    },
    {
      id: "favorite",
      name: "❤️ Favoritos"
    },
    {
      id: "lost",
      name: "💀 Perdidos"
    }
  ];


  return (

    <div className="
      flex
      gap-3
      flex-wrap
      mb-6
    ">


      {
        options.map(option => (

          <button

            key={option.id}

            onClick={() =>
              setFilter(
                option.id as any
              )
            }

            className={`
              px-4
              py-2
              rounded-lg

              ${
                filter === option.id
                ? "bg-cyan-500"
                : "bg-slate-800"
              }
            `}

          >

            {option.name}

          </button>

        ))
      }


    </div>

  );

}