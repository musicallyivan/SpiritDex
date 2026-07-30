import { spirits } from "../../data/spirits";
import { useCollectionStore } from "../../store/useCollectionStore";


export default function ExportStats() {


  const collection =
    useCollectionStore(
      state => state.collection
    );


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
    spirits.length === 0
      ? 0
      : Math.round(
        (owned / spirits.length) * 100
      );


  return (

    <div className="
      grid
      grid-cols-5
      gap-4
      mb-8
      bg-slate-800
      rounded-xl
      p-4
      text-center
    ">


      <div>
        🌀
        <br />
        {owned}/{spirits.length}
      </div>


      <div>
        📈
        <br />
        {progress}%
      </div>


      <div>
        👑
        <br />
        {mastery}
      </div>


      <div>
        💀
        <br />
        {lost}
      </div>


      <div>
        ❤️
        <br />
        {favorite}
      </div>

    </div>

  );

}