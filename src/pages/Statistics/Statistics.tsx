import MainLayout from "../../components/layout/MainLayout";
import { spirits } from "../../data/spirits";
import { useCollectionStore } from "../../store/useCollectionStore";
import { getRarityStyle } from "../../utils/getRarityStyle";

export default function Statistics(){

  const collection =
    useCollectionStore(
      state => state.collection
    );


  const total =
    spirits.length;


  const owned =
    Object.values(collection)
    .filter(
      spirit => spirit.owned
    )
    .length;


  const missing =
    total - owned;


  const progress =
    total === 0
    ? 0
    : Math.round(
        (owned / total) * 100
      );

  const rarityStats = spirits.reduce(

    (acc, spirit) => {

      acc[spirit.rarity] =
        (acc[spirit.rarity] ?? 0) + 1;

      return acc;

    },

    {} as Record<string, number>

  );


  const elementStats = spirits.reduce(

    (acc, spirit) => {

      acc[spirit.element] =
        (acc[spirit.element] ?? 0) + 1;

      return acc;

    },

    {} as Record<string, number>

  );


  const variantStats =
    Object.values(collection)
    .filter(
      spirit => spirit.owned
    )
    .reduce(

      (acc, spirit) => {

        const variant =
          spirit.variant ?? "Normal";


        acc[variant] =
          (acc[variant] ?? 0) + 1;


        return acc;

      },

      {} as Record<string, number>

    );


  const lost =
    Object.values(collection)
    .filter(
      spirit => spirit.lost
    )
    .length;


  const favorite =
    Object.values(collection)
    .filter(
      spirit => spirit.favorite
    )
    .length;


  const mastery =
    Object.values(collection)
    .filter(
      spirit =>
        spirit.level === 5 &&
        spirit.mastery >= 20
    )
    .length;


  const variants =
    Object.values(collection)
    .filter(
      spirit => 
        spirit.owned &&
        spirit.variant &&
        spirit.variant !== "Normal"
    )
    .length;


  const recent =
    Object.entries(collection)
    .filter(
      ([, spirit]) =>
        spirit.updatedAt
    )
    .sort(
      ([, a], [, b]) =>
        new Date(b.updatedAt!).getTime() -
        new Date(a.updatedAt!).getTime()
    )
    .slice(0,5)
    .map(([id, data]) => {

      const spirit =
        spirits.find(
          item => item.id === id
        );


      return {
        data,
        spirit
      };

    });


  return (

    <MainLayout>

      <h1 className="
      text-5xl
      font-bold
      mb-8
      ">
        📊 Estadísticas
      </h1>

      <div className="
      grid
      grid-cols-2
      md:grid-cols-4
      gap-5
      mb-8
      ">


      <Stat
        title="Colección"
        value={`${owned}/${total}`}
      />


      <Stat
        title="❤️ Favoritos"
        value={favorite}
      />


      <Stat
        title="👑 Maestrías"
        value={mastery}
      />


      <Stat
        title="✨ Variantes"
        value={variants}
      />


      </div>

      <div className="
      bg-slate-900
      rounded-2xl
      p-6
      mb-8
      ">

      <h2 className="
      text-2xl
      font-bold
      mb-4
      ">
      🏆 Progreso de colección
      </h2>


      <div className="
      flex
      items-center
      justify-center
      ">

      <div className="
      relative
      w-40
      h-40
      rounded-full
      flex
      items-center
      justify-center
      bg-slate-800
      ">

      <div className="
      text-center
      ">

      <p className="
      text-4xl
      font-bold
      text-cyan-400
      ">
      {progress}%
      </p>


      <p className="
      text-sm
      text-slate-400
      ">
      completado
      </p>

      </div>

      </div>

      </div>


      <p className="
      text-center
      mt-5
      text-xl
      ">
      {owned} / {total} espíritus
      </p>


      <div className="
      w-full
      h-3
      bg-slate-700
      rounded-full
      mt-5
      overflow-hidden
      ">

      <div
      className="
      h-full
      bg-cyan-400
      transition-all
      "
      style={{
        width:`${progress}%`
      }}
      />

      </div>


      </div>

      <div className="
      bg-slate-900
      rounded-xl
      p-5
      mb-8
      ">

      <h2 className="
      text-2xl
      font-bold
      mb-4
      ">
      Pendiente 📖
      </h2>


      <p className="
      text-slate-400
      ">
      Espíritus que faltan por conseguir
      </p>


      <p className="
      text-4xl
      font-bold
      mt-2
      text-cyan-400
      ">
      {missing}
      </p>


      </div>

      <div className="
      bg-slate-900
      rounded-xl
      p-5
      mb-8
      ">

      <h2 className="
      text-2xl
      font-bold
      mb-4
      ">
      Rarezas
      </h2>


      <div className="
      grid
      grid-cols-2
      md:grid-cols-4
      gap-4
      ">

      {
        Object.entries(rarityStats)
        .map(([rarity, amount]) => (

          <div
          key={rarity}
          className={`
          rounded-lg
          p-4
          text-center
          border-2

          ${getRarityStyle(rarity as any)}

          `}
          >

            <p className="text-slate-400">
              {rarity}
            </p>

            <p className="
            text-3xl
            font-bold
            mt-2
            ">
              {amount}
            </p>


            <p className="
            text-sm
            text-slate-400
            mt-1
            ">
              {
                Math.round(
                  (amount / total) * 100
                )
              }%
            </p>

          </div>

        ))
      }

      </div>

      </div>

      <div className="
      bg-slate-900
      rounded-xl
      p-5
      mb-8
      ">

      <h2 className="
      text-2xl
      font-bold
      mb-4
      ">
      Elementos
      </h2>


      <div className="
      grid
      grid-cols-2
      md:grid-cols-4
      gap-4
      ">

      {
        Object.entries(elementStats)
        .map(([element, amount]) => (

          <div
          key={element}
          className="
          bg-slate-800
          rounded-lg
          p-4
          text-center
          "
          >

            <p className="text-slate-400">
              {element}
            </p>

            <p className="
            text-3xl
            font-bold
            mt-2
            ">
              {amount}
            </p>


            <p className="
            text-sm
            text-slate-400
            mt-1
            ">
              {
                Math.round(
                  (amount / total) * 100
                )
              }%
            </p>

          </div>

        ))
      }

      </div>

      </div>

      <div className="
      bg-slate-900
      rounded-xl
      p-5
      mb-8
      ">

      <h2 className="
      text-2xl
      font-bold
      mb-4
      ">
      Variantes ✨
      </h2>


      <div className="
      grid
      grid-cols-2
      md:grid-cols-4
      gap-4
      ">

      {
        Object.entries(variantStats)
        .map(([variant, amount]) => (

          <div
          key={variant}
          className="
          bg-slate-800
          rounded-lg
          p-4
          text-center
          "
          >

            <p className="text-slate-400">
              {variant}
            </p>

            <p className="
            text-3xl
            font-bold
            mt-2
            ">
              {amount}
            </p>

          </div>

        ))
      }

      </div>

      </div>

      <div className="
      grid
      grid-cols-2
      md:grid-cols-3
      gap-5
      ">


        <Stat
          title="Total"
          value={total}
        />


        <Stat
          title="Descubiertos"
          value={owned}
        />


        <Stat
          title="Perdidos"
          value={lost}
        />


        <Stat
          title="Favoritos"
          value={favorite}
        />


        <Stat
          title="Maestrías"
          value={mastery}
        />


      </div>

      <div className="
      bg-slate-900
      rounded-xl
      p-5
      mt-8
      ">

      <h2 className="
      text-2xl
      font-bold
      mb-4
      ">
      🕒 Actividad reciente
      </h2>


      <div className="
      flex
      flex-col
      gap-3
      ">

      {
        recent.map(({ data, spirit }) => (

          <div
          key={data.spiritId}
          className="
          bg-slate-800
          rounded-lg
          p-3
          flex
          justify-between
          "
          >

            <div>

              <p className="
              font-bold
              ">
                {spirit?.name ?? "Espíritu desconocido"}
              </p>


              <p className="
              text-sm
              text-slate-400
              mt-1
              ">
                ⭐ Nivel {data.level}
              </p>


              {
                data.variant &&
                data.variant !== "Normal" && (

                  <p className="
                  text-sm
                  text-yellow-400
                  ">
                    ✨ {data.variant}
                  </p>

                )
              }


              {
                data.favorite && (

                  <p className="
                  text-sm
                  ">
                    ❤️ Favorito
                  </p>

                )
              }


              {
                data.lost && (

                  <p className="
                  text-sm
                  text-red-400
                  ">
                    💀 Perdido
                  </p>

                )
              }


            </div>
          {
            data.favorite && (
              <span>
                ❤️
              </span>
            )
          }

          </div>

        ))
      }

      </div>

      </div>

    </MainLayout>

  );

}



function Stat({
  title,
  value
}:{
  title:string;
  value:string | number;
}){

  return (

    <div className="
    bg-slate-900
    rounded-xl
    p-5
    text-center
    ">

      <p className="
      text-slate-400
      ">
        {title}
      </p>

      <p className="
      text-4xl
      font-bold
      mt-2
      ">
        {value}
      </p>

    </div>

  );

}