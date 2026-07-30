import type { Spirit } from "../../models/Spirit";
import { useCollectionStore } from "../../store/useCollectionStore";
import { VARIANTS } from "../../constants/variants";

interface Props {

  spirit: Spirit;

  onClose: () => void;

}


export default function SpiritEditor({
  spirit,
  onClose
}: Props) {


  const data =
    useCollectionStore(
      state =>
        state.collection[spirit.id]
    );


  const updateSpirit =
    useCollectionStore(
      state =>
        state.updateSpirit
    );


  const level =
    data?.level ?? 1;


  const favorite =
    data?.favorite ?? false;


  const lost =
    data?.lost ?? false;

  const variant =
    data?.variant ?? "Normal";
  
  const mastery =
    data?.mastery ?? 0;

  const LEVELS = [1, 2, 3, 4, 5] as const;

  
  function changeLevel(
    value: 1 | 2 | 3 | 4 | 5
  ) {

    updateSpirit(
      spirit.id,
      {
        level: value
      }
    );

  }
  
  function toggleFavorite(){

    updateSpirit(
      spirit.id,
      {
        favorite: !favorite
      }
    );

  }


  function toggleLost(){

    updateSpirit(
      spirit.id,
      {
        lost: !lost
      }
    );

  }


  function changeVariant(
    value: typeof VARIANTS[number]
  ){

    updateSpirit(
      spirit.id,
      {
        variant: value
      }
    );

  }

  function changeMastery(
    amount:number
  ){

    const newMastery =
      Math.min(
        20,
        mastery + amount
      );


    updateSpirit(
      spirit.id,
      {
        mastery: newMastery
      }
    );

  }

  return (

    <div
      onClick={onClose}
      className="
      fixed
      inset-0
      bg-black/70
      flex
      items-center
      justify-center
      z-50
      "
    >


      <div
        onClick={(e) => e.stopPropagation()}
        className="
        bg-slate-900
        rounded-2xl
        p-6
        w-[400px]
        "
      >


        <h2 className="
        text-3xl
        font-bold
        mb-5
        ">
          {spirit.name}
        </h2>



        <p>
          Nivel:
        </p>


        <div className="
        flex
        gap-2
        my-3
        ">

        {
          LEVELS.map(number => (

            <button

            key={number}

            onClick={(e) => {
              e.stopPropagation();
              changeLevel(number);
            }}

            className={`
              text-2xl

              ${
                level >= number
                ? "text-yellow-400"
                : "text-slate-600"
              }

            `}

            >
              ⭐

            </button>

          ))
        }

        </div>

        <div className="
        mt-4
        ">

        <p className="mb-2 text-sm">
        👑 Maestría {mastery}/20
        </p>


        <div className="
        w-full
        h-3
        bg-slate-700
        rounded-full
        overflow-hidden
        ">

        <div
        className="
        h-full
        bg-yellow-400
        transition-all
        "
        style={{
          width: `${(mastery / 20) * 100}%`
        }}
        />

        </div>

        <div className="
        flex
        gap-3
        mt-3
        ">

        <button

        onClick={() =>
          changeMastery(1)
        }

        className="
        bg-slate-700
        px-3
        py-1
        rounded-lg
        "
        >

        +1

        </button>


        <button

        onClick={() =>
          changeMastery(5)
        }

        className="
        bg-slate-700
        px-3
        py-1
        rounded-lg
        "
        >

        +5

        </button>

        </div>

        </div>
        <div className="
          flex
          gap-3
          mt-5
        ">

          <button

          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite();
          }}

          className="
          bg-slate-700
          px-4
          py-2
          rounded-lg
          "
          >

            {
              favorite
              ? "❤️ Favorito"
              : "🤍 Favorito"
            }

          </button>


          <button

          onClick={(e) => {
            e.stopPropagation();
            toggleLost();
          }}

          className="
          bg-slate-700
          px-4
          py-2
          rounded-lg
          "
          >

            {
              lost
              ? "💀 Perdido"
              : "✅ Conseguido"
            }

          </button>

        </div>

        <div className="
          mt-5
        ">

        <p className="mb-2">
          Variante:
        </p>


        <select

        value={variant}

        onChange={(e) =>
          changeVariant(
            e.target.value as typeof VARIANTS[number]
          )
        }

        className="
        bg-slate-700
        px-4
        py-2
        rounded-lg
        "

        >

        {
          VARIANTS.map((item) => (

            <option
              key={item}
              value={item}
            >
              {item}
            </option>

          ))
        }

        </select>

        </div>
        
        <button

        onClick={onClose}

        className="
        bg-slate-700
        px-4
        py-2
        rounded-lg
        mt-5
        "
        >

        Cerrar

        </button>



      </div>


    </div>

  );
};