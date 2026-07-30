import { spirits } from "../../data/spirits";
import { useCollectionStore } from "../../store/useCollectionStore";
import { useExportStore } from "../../store/useExportStore";
import ExportStats from "./ExportStats";
import { useExportSizeStore } from "../../store/useExportSizeStore";
import { useExportFilterStore } from "../../store/useExportFilterStore";
import ExportSpiritCard from "./ExportSpiritCard";

export default function ExportCard() {

  const { title, background, showStats } = useExportStore();
  const size = useExportSizeStore(state => state.size);
  const filter = useExportFilterStore(state => state.filter);

  const collection =
    useCollectionStore(
      state => state.collection
    );


  const variantCount =
    Object.values(collection)
    .filter(
      spirit =>
        spirit.owned &&
        spirit.variant &&
        spirit.variant !== "Normal"
    )
    .length;


  const date =
    new Date()
    .toLocaleDateString();


  const exportedSpirits =
    spirits.filter((spirit) => {

      const user =
        collection[spirit.id];


      if (filter === "owned")
        return user?.owned === true;


      if (filter === "mastery")
        return (
          user?.level === 5 &&
          user?.mastery >= 20
        );


      if (filter === "favorite")
        return user?.favorite === true;


      if (filter === "lost")
        return user?.lost === true;


      return true;

    });


  return (

    <div
      id="export-area"

      className={`
      p-8
      rounded-xl

      ${
      size === "square"

      ? "w-[1080px] aspect-square"

      : size === "landscape"

      ? "w-[1920px] aspect-video"

      : "w-[1080px] aspect-[9/16]"

      }

      ${
      background === "dark"
      ? "bg-slate-950 text-white"
      : "bg-white text-black"
      }

      `}
      >

      <div className="mb-6">

      <h1 className="
      text-5xl
      font-bold
      ">
      {title}
      </h1>


      <p className="
      opacity-70
      mt-2
      ">
      📅 {date}
      </p>


      <p className="
      opacity-70
      ">
      ✨ Variantes: {variantCount}
      </p>


      </div>

      
      {
        showStats && (
          <ExportStats />
        )
      }


      <div className="
        grid
        grid-cols-8
        gap-4
      ">

        {
          exportedSpirits.map(spirit => (

            <ExportSpiritCard

              key={spirit.id}

              spirit={spirit}

            />

          ))
        }

      </div>


    </div>

  );

}