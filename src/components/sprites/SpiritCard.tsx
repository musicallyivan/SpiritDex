import type { Spirit } from "../../models/Spirit";
import { useCollectionStore } from "../../store/useCollectionStore";
import { getSpiritVariantImage } from "../../utils/getSpiritVariantImage";

interface Props {
  spirit: Spirit;
}


export default function SpiritCard({ spirit }: Props) {


  const userSpirit = useCollectionStore(
    state => state.collection[spirit.id]
  );


  const updateSpirit = useCollectionStore(
    state => state.updateSpirit
  );


  const level = userSpirit?.level ?? 1;

  const owned = userSpirit?.owned ?? false;

  const favorite = userSpirit?.favorite ?? false;

  const mastery = userSpirit?.mastery ?? 0;

  const lost = userSpirit?.lost ?? false;

  const image =
    getSpiritVariantImage(
      spirit,
      spirit.variant
    );

  const masteryPercent = 
    (mastery / spirit.maxMastery) * 100;

  const masteryMax = 
    mastery >= spirit.maxMastery;

  return (

    <div className="
      bg-slate-900
      border
      border-slate-700
      rounded-2xl
      p-4
      hover:border-cyan-400
      transition
    ">


      <div className="
        aspect-square
        bg-slate-800
        rounded-xl
        flex
        items-center
        justify-center
      ">
        <img
          src={image}
          alt={spirit.name}
          onError={(e) => {
            e.currentTarget.src =
              "/sprites/default.png";
          }}
          className="
            w-full
            h-full
            object-contain
          "
        />
      </div>


      <h2 className="text-xl font-bold mt-4">
        {spirit.name}
      </h2>


      <p className="text-slate-400">
        {spirit.variant}
      </p>


      <div className="mt-4">

        <p>
          Nivel: ⭐ {level}/5
        </p>


        <button

          onClick={() => {

            const newLevel = (level === 5
              ? 1
              : level + 1) as 1 | 2 | 3 | 4 | 5;


            updateSpirit(
              spirit.id,
              {
                level: newLevel,

                mastery: newLevel === 5
                  ? spirit.maxMastery
                  : 0
              }
            );

          }}

          className="
          mt-2
          bg-cyan-500
          px-3
          py-1
          rounded-lg
          "
        >
          Subir nivel
        </button>


      </div>
      
      <div className="mt-4">

        <div className="flex justify-between text-sm">

          <span>
            {level === 5
              ? "👑 Maestría"
              : "🔒 Maestría bloqueada"}
          </span>

          <span className={
            masteryMax
              ? "text-yellow-400"
              : "text-slate-400"
          }>
            {mastery}/{spirit.maxMastery}
          </span>

        </div>


        {level === 5 && (
          <div className="
            h-2
            bg-slate-700
            rounded-full
            mt-2
            overflow-hidden
          ">

            <div
              className="
                h-full
                bg-yellow-400
              "
              style={{
                width: `${masteryPercent}%`
              }}
            />

          </div>
        )}

      </div>

      <div className="mt-4 flex gap-3">


        <button

          onClick={() =>
            updateSpirit(
              spirit.id,
              {
                owned: !owned
              }
            )
          }

          className={`
          px-3 py-1 rounded-lg
          ${owned 
            ? "bg-green-500"
            : "bg-slate-700"}
          `}
        >
          {owned ? "✔ Tengo" : "No tengo"}
        </button>

        <button

          onClick={() =>
            updateSpirit(
              spirit.id,
              {
                lost: !lost
              }
            )
          }

          className={`
          px-3
          py-1
          rounded-lg

          ${lost
            ? "bg-red-500"
            : "bg-slate-700"
          }

          `}
          >

          💀 {lost ? "Perdido" : "Marcar perdido"}

        </button>


        <button

          onClick={() =>
            updateSpirit(
              spirit.id,
              {
                favorite: !favorite
              }
            )
          }

          className="
          bg-slate-700
          px-3
          py-1
          rounded-lg
          "
        >

          {favorite ? "❤️" : "🤍"}

        </button>


      </div>


    </div>

  );

}