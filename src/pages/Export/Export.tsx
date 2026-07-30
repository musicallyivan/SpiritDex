import MainLayout from "../../components/layout/MainLayout";
import ExportCard from "../../components/export/ExportCard";
import ExportButton from "../../components/export/ExportButton";
import ExportSizeSelector from "../../components/export/ExportSizeSelector";
import ExportControls from "../../components/export/ExportControls";
import ExportFilterSelector from "../../components/export/ExportFilterSelector";

export default function Export() {


return (

<MainLayout>


<h1 className="text-5xl font-bold">
Exportar
</h1>


<div className="mt-8">

<ExportControls />

<ExportSizeSelector />

<ExportFilterSelector />

<ExportButton />

</div>


<div className="mt-8">

<ExportCard />

</div>


</MainLayout>

);

}