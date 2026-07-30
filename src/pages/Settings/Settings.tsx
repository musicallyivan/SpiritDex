import MainLayout from "../../components/layout/MainLayout";
import { useRef } from "react";
import { exportCollection, importCollection } from "../../utils/backup";
import { useCollectionStore } from "../../store/useCollectionStore";

export default function Settings() {

  const inputRef = useRef<HTMLInputElement>(null);

  const collection = useCollectionStore(state => state.collection);
  const setCollection = useCollectionStore(state => state.setCollection);

  async function handleImport(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0];

    if (!file) return;

    try {
      const data = await importCollection(file);
      setCollection(data);
      alert("Colección importada correctamente.");
    } catch {
      alert("El archivo no es válido.");
    }
  }

  function resetCollection() {
    if (!confirm("¿Seguro que quieres borrar toda la colección?")) {
      return;
    }

    setCollection({});
  }

  return (
    <MainLayout>

      <h1 className="text-5xl font-bold mb-8">
        Ajustes
      </h1>

      <div className="space-y-4">

        <button
          onClick={() => exportCollection(collection)}
          className="bg-cyan-600 px-4 py-2 rounded-lg"
        >
          💾 Exportar colección
        </button>

        <button
          onClick={() => inputRef.current?.click()}
          className="bg-green-600 px-4 py-2 rounded-lg"
        >
          📂 Importar colección
        </button>

        <button
          onClick={resetCollection}
          className="bg-red-600 px-4 py-2 rounded-lg"
        >
          🗑 Reiniciar colección
        </button>

        <input
          ref={inputRef}
          type="file"
          accept=".json"
          hidden
          onChange={handleImport}
        />

      </div>

    </MainLayout>
  );
}