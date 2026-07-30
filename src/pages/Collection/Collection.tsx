import MainLayout from "../../components/layout/MainLayout";
import SpiritGrid from "../../components/sprites/SpiritGrid";
import ViewSelector from "../../components/sprites/ViewSelector";
import CollectionFilters from "../../components/collection/CollectionFilters";

export default function Collection() {

  return (

    <MainLayout>

      <h1 className="text-5xl font-bold">
        Colección
      </h1>

      <CollectionFilters />
      
      <p className="text-slate-400 mt-2 mb-8">
        Tus espíritus descubiertos.
      </p>


      <ViewSelector />

      <SpiritGrid />

    </MainLayout>

  );

}