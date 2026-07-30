import { spirits } from "../../data/spirits";
import { useCollectionStore } from "../../store/useCollectionStore";


export default function RecentSpirits(){

  const collection =
    useCollectionStore(
      state => state.collection
    );


  const recent =
    Object.values(collection)
      .filter(
        spirit => spirit.updatedAt
      )
      .sort(
        (a,b) =>
          new Date(b.updatedAt!).getTime()
          -
          new Date(a.updatedAt!).getTime()
      )
      .slice(0,5);



  return (

    <div className="
    mt-8
    bg-slate-900
    border
    border-slate-700
    rounded-2xl
    p-6
    ">

      <h2 className="
      text-2xl
      font-bold
      mb-4
      ">
        🕒 Últimos modificados
      </h2>


      <div className="
      flex
      flex-col
      gap-3
      ">

      {
        recent.map((item)=>(

          <p
          key={item.spiritId}
          className="
          text-slate-300
          "
          >

            {
              spirits.find(
                s => s.id === item.spiritId
              )?.name
            }

            {" "}
            ⭐ {item.level}

          </p>

        ))
      }

      {
        recent.length === 0 && (

          <p className="text-slate-500">
            Todavía no has modificado espíritus.
          </p>

        )
      }

      </div>


    </div>

  );

}