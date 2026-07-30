import { toPng } from "html-to-image";


export default function ExportButton() {


  async function exportImage() {

    const element =
      document.getElementById(
        "export-area"
      );


    if (!element)
      return;


    const image =
      await toPng(element);


    const link =
      document.createElement("a");


    link.download =
      "spiritdex.png";


    link.href =
      image;


    link.click();

  }


  return (

    <button

      onClick={exportImage}

      className="
        bg-cyan-500
        px-5
        py-3
        rounded-xl
        font-bold
      "

    >

      📤 Exportar imagen

    </button>

  );

}