import MainLayout from "../../components/layout/MainLayout";
import CollectionStats from "../../components/dashboard/CollectionStats";

export default function Home() {
  return (
    <MainLayout>

      <h1 className="text-5xl font-bold">
        Inicio
      </h1>

      <p className="text-slate-400 mt-2">
        Bienvenido a SpiritDex
      </p>

      <CollectionStats />

    </MainLayout>
  );
}