import { spirits } from "../../data/spirits";
import SpiritCard from "./SpiritCard";

import { useCollectionStore } from "../../store/useCollectionStore";
import { useFilterStore } from "../../store/useFilterStore";
import { useViewStore } from "../../store/useViewStore";
import SpiritCollectionCard from "./SpiritCollectionCard";
import SpiritVariantTable from "./SpiritVariantTable";

export default function SpiritGrid() {


  const view = useViewStore(
      state => state.view
    );


  const collection =
    useCollectionStore(
      state => state.collection
    );


  const {
  search,
  filter,
  element,
  rarity,
  sort

} = useFilterStore();



  const filtered = spirits.filter((spirit) => {


    const user =
      collection[spirit.id];


    const matchesSearch =
      spirit.name
      .toLowerCase()
      .includes(
        search.toLowerCase()
      );
    
    const matchesElement =
      element === "Todos" ||
      spirit.element === element;

    const matchesRarity =
      rarity === "Todas" ||
      spirit.rarity === rarity;

    if (!matchesSearch)
      return false;

    if (!matchesElement)
      return false;

    if (!matchesRarity)
      return false;

    if (filter === "owned")
      return user?.owned;


    if (filter === "lost")
      return user?.lost;


    if (filter === "mastery")
      return (
        user?.level === 5 &&
        (user?.mastery ?? 0) >= 20
      );


    if (filter === "favorite")
      return user?.favorite;


    return true;

  });

  
    const sorted = [...filtered].sort((a, b) => {

    const userA =
      collection[a.id];

    const userB =
      collection[b.id];


    if (sort === "name") {
      return a.name.localeCompare(
        b.name
      );
    }


    if (sort === "level") {
      return (
        (userB?.level ?? 1) -
        (userA?.level ?? 1)
      );
    }


    if (sort === "mastery") {
      return (
        (userB?.mastery ?? 0) -
        (userA?.mastery ?? 0)
      );
    }


    if (sort === "rarity") {
      return a.rarity.localeCompare(
        b.rarity
      );
    }


    if (sort === "element") {
      return a.element.localeCompare(
        b.element
      );
    }


    return 0;

  });
  
    if (view === "table") {

      return (
        <SpiritVariantTable />
      );

    }

  return (

    <div
    className={`
    grid
    gap-6

    ${
    view === "modern"

    ?

    "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"

    :

    "grid-cols-3 sm:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9"

    }

    `}
    >


      {sorted.map((spirit) => (

        view === "modern"

        ?

        <SpiritCard
          key={spirit.id}
          spirit={spirit}
        />

        :

        <SpiritCollectionCard
          key={spirit.id}
          spirit={spirit}
        />

      ))}


    </div>

  );

}