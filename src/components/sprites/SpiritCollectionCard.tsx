import type { Spirit } from "../../models/Spirit";
import { useCollectionStore } from "../../store/useCollectionStore";
import { getRarityStyle } from "../../utils/getRarityStyle";
import { useState } from "react";
import type { ComponentType } from "react";
import SpiritEditor from "./SpiritEditor";
import { getSpiritVariantImage } from "../../utils/getSpiritVariantImage";

const SpiritEditorComponent =
  SpiritEditor as unknown as ComponentType<{
    spirit: Spirit;
    onClose: () => void;
  }>;

interface Props {
  spirit: Spirit;
}


export default function SpiritCollectionCard({
  spirit
}: Props) {


  const [open,setOpen] =
    useState(false);


  const userSpirit =
    useCollectionStore(
      state => state.collection[spirit.id]
    );


  const level =
    userSpirit?.level ?? 1;


  const lost =
    userSpirit?.lost ?? false;

  const favorite =
    userSpirit?.favorite ?? false;

  const mastery =
    level === 5 &&
    (userSpirit?.mastery ?? 0) >= 20;

  const variant =
    userSpirit?.variant ?? "Normal";


  const image =
    getSpiritVariantImage(
      spirit,
      variant
    );
    
  const rarityStyle =
    getRarityStyle(
      spirit.rarity
    );


  return (

    <div
      onClick={() => setOpen(true)}
      className={`
      relative
      rounded-xl
      p-2
      bg-slate-900

      border-2

      ${rarityStyle}

      ${
        mastery
        ? "shadow-lg shadow-yellow-400"
        : ""
      }

      ${
        lost
        ? "opacity-40"
        : ""
      }

      cursor-pointer
      transition
      hover:scale-105

      `}
      >


      <div
        className="
          aspect-square
          bg-slate-800
          rounded-lg
          flex
          items-center
          justify-center
          text-xs
          text-slate-500
        "
      >
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


      <div className="
        text-center
        mt-2
      ">

        <p className="
          font-bold
          text-sm
        ">
          {spirit.name}
        </p>
        
        <p className="
          text-xs
          text-slate-400
          ">
          {spirit.element} · {spirit.rarity}
        </p>
        
        <p className="
          text-xs
          mt-1
        ">
          {"⭐".repeat(level)}
        </p>

        <div className="
          mt-2
        ">

        <div className="
          w-full
          h-1.5
          bg-slate-700
          rounded-full
          overflow-hidden
        ">

        <div
        className="
        h-full
        bg-yellow-400
        "
        style={{
          width: `${((userSpirit?.mastery ?? 0) / 20) * 100}%`
        }}
        />

        </div>

        <p className="
          text-xs
          text-yellow-400
          mt-1
        ">
          👑 {userSpirit?.mastery ?? 0}/20
        </p>

        </div>

        {
          variant !== "Normal" && (

            <p className="
              text-xs
              text-yellow-400
              mt-1
            ">
              ✨ {variant}
            </p>

          )
        }

      </div>
      

      {
        open && (

          <SpiritEditorComponent

            spirit={spirit}

            onClose={() =>
              setOpen(false)
            }

          />

        )
      }    

      {
        favorite && (

          <span
            className="
              absolute
              top-1
              left-1
            "
          >
            ❤️
          </span>

        )
      }

      {
        mastery && (

          <span
            className="
              absolute
              top-1
              right-1
              text-yellow-400
              text-xl
            "
          >
            👑
          </span>

        )
      }


      {
        lost && (

          <span
            className="
              absolute
              bottom-1
              right-1
            "
          >
            💀
          </span>

        )
      }


    </div>
    
  );

}