import { spirits } from "../../data/spirits";
import { useCollectionStore } from "../../store/useCollectionStore";


export default function CollectionStats() {


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


  const mastery =
    Object.values(collection)
      .filter(
        spirit =>
          spirit.level === 5 &&
          spirit.mastery >= 20
      )
      .length;


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


  const progress =
    total === 0
      ? 0
      : Math.round(
          (owned / total) * 100
        );


  return (

    <div className="
      grid
      grid-cols-1
      md:grid-cols-2
      xl:grid-cols-5
      gap-4
      mt-8
    ">


      <StatCard
        title="Espíritus"
        value={`${owned}/${total}`}
        icon="🌀"
      />


      <StatCard
        title="Progreso"
        value={`${progress}%`}
        icon="📈"
      />


      <StatCard
        title="Maestrías"
        value={mastery}
        icon="👑"
      />


      <StatCard
        title="Perdidos"
        value={lost}
        icon="💀"
      />


      <StatCard
        title="Favoritos"
        value={favorite}
        icon="❤️"
      />


    </div>
    
  );

}



function StatCard({
  title,
  value,
  icon
}: {
  title: string;
  value: string | number;
  icon: string;
}) {


  return (

    <div className="
      bg-slate-900
      border
      border-slate-700
      rounded-2xl
      p-5
    ">

      <div className="text-3xl">
        {icon}
      </div>


      <p className="
        text-slate-400
        mt-3
      ">
        {title}
      </p>


      <p className="
        text-3xl
        font-bold
      ">
        {value}
      </p>


    </div>

  );

}