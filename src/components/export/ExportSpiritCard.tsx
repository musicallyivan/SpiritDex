import type { Spirit } from "../../models/Spirit";
import { useCollectionStore } from "../../store/useCollectionStore";
import { getRarityStyle } from "../../utils/getRarityStyle";
import { getElementBackground } from "../../utils/getElementBackground";
import { getSpiritVariantImage } from "../../utils/getSpiritVariantImage";

interface Props {

  spirit: Spirit;

}


export default function ExportSpiritCard({
  spirit
}: Props) {


  const userSpirit =
    useCollectionStore(
      state => state.collection[spirit.id]
    );


  const level =
    userSpirit?.level ?? 1;


  const favorite =
    userSpirit?.favorite ?? false;


  const lost =
    userSpirit?.lost ?? false;


  const mastery =
    userSpirit?.level === 5 &&
    (userSpirit?.mastery ?? 0) >= 20;


  const variant =
    userSpirit?.variant ?? "Normal";


  const rarity =
    getRarityStyle(
      spirit.rarity
    );


  const element =
    getElementBackground(
      spirit.element
    );
  

  const image =
    getSpiritVariantImage(
      spirit,
      variant
    );

    
  return (

    <div

      className={`
        relative
        rounded-xl
        border-2
        ${rarity}

        bg-gradient-to-br
        ${element}

        p-2

      `}

    >

      <img

        src={
          image
        }

        alt={
          spirit.name
        }

        className="
          aspect-square
          object-contain
          w-full
        "

      />


      <p className="
        text-center
        text-xs
        font-bold
        mt-2
      ">

        {spirit.name}

      </p>

      <p className="
        text-center
        text-[10px]
        opacity-70
        ">
        ⭐ {level}
      </p>
      
      <p className="
        text-center
        text-[10px]
        opacity-70
        ">
        {spirit.variant}
        </p>
        
        {
          favorite && (

            <span className="
            absolute
            top-1
            left-1
            ">
              ❤️
            </span>

          )
        }


        {
          mastery && (

            <span className="
            absolute
            top-1
            right-1
            ">
              👑
            </span>

          )
        }


        {
          lost && (

            <span className="
            absolute
            bottom-1
            right-1
            ">
              💀
            </span>

          )
        }

    </div>

  );

}