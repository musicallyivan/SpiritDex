import type { UserSpirit } from "../models/UserSpirit";

export function exportCollection(
  collection: Record<string, UserSpirit>
) {
  const blob = new Blob(
    [JSON.stringify(collection, null, 2)],
    {
      type: "application/json"
    }
  );

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");

  a.href = url;
  a.download = "spiritdex-backup.json";

  a.click();

  URL.revokeObjectURL(url);
}

export function importCollection(
  file: File
): Promise<Record<string, UserSpirit>> {

  return new Promise((resolve, reject) => {

    const reader = new FileReader();

    reader.onload = () => {

      try {

        const data =
          JSON.parse(
            reader.result as string
          );


        if (
          typeof data !== "object" ||
          data === null
        ) {
          throw new Error();
        }


        resolve(data);

      } catch {

        reject("Archivo no válido");

      }

    };

    reader.onerror = reject;

    reader.readAsText(file);

  });

}