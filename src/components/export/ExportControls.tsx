import { useExportStore } from "../../store/useExportStore";


export default function ExportControls(){

const {
 title,
 setTitle,
 setBackground,
 showStats,
 toggleStats

}=useExportStore();


return (

<div className="
bg-slate-900
p-5
rounded-xl
space-y-4
">


<input

value={title}

onChange={(e)=>
 setTitle(e.target.value)
}

className="
w-full
bg-slate-800
p-3
rounded-lg
"

placeholder="Título"

/>


<div className="flex gap-3">


<button

onClick={() =>
 setBackground("dark")
}

className="
bg-slate-700
px-4
py-2
rounded-lg
"

>
🌑 Oscuro
</button>


<button

onClick={() =>
 setBackground("light")
}

className="
bg-white
text-black
px-4
py-2
rounded-lg
"

>
☀️ Claro
</button>


</div>


<button

onClick={toggleStats}

className="
bg-cyan-600
px-4
py-2
rounded-lg
"

>

{showStats
? "Ocultar estadísticas"
: "Mostrar estadísticas"}

</button>


</div>

);

}