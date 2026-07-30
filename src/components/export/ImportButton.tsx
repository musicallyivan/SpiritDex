import { useCollectionStore } from "../../store/useCollectionStore";


export default function ImportButton(){

  const setCollection =
    useCollectionStore(
      state => state.setCollection
    );


  function importCollection(
    event: React.ChangeEvent<HTMLInputElement>
  ){

    const file =
      event.target.files?.[0];


    if(!file)
      return;


    const reader =
      new FileReader();


    reader.onload = () => {

      try {

        const data =
          JSON.parse(
            reader.result as string
          );


        setCollection(data);


        alert(
          "Colección importada correctamente ✅"
        );


      } catch {

        alert(
          "Archivo inválido ❌"
        );

      }

    };


    reader.readAsText(file);

  }



  return (

    <label

    className="
    bg-green-500
    text-black
    font-bold
    px-5
    py-3
    rounded-xl
    cursor-pointer
    "

    >

      📂 Importar colección


      <input

      type="file"

      accept=".json"

      onChange={importCollection}

      className="hidden"

      />

    </label>

  );

}