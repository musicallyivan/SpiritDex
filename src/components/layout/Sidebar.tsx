import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 p-6">

      <h1 className="text-3xl font-bold text-cyan-400">
        SpiritDex
      </h1>

      <nav className="mt-10 flex flex-col gap-3">

        <NavLink to="/" className="rounded-lg p-3 hover:bg-slate-800">
          🏠 Inicio
        </NavLink>

        <NavLink to="/collection" className="rounded-lg p-3 hover:bg-slate-800">
          📚 Colección
        </NavLink>

        <NavLink to="/statistics" className="rounded-lg p-3 hover:bg-slate-800">
          📊 Estadísticas
        </NavLink>

        <NavLink to="/export" className="rounded-lg p-3 hover:bg-slate-800">
          📤 Exportar
        </NavLink>

        <NavLink to="/settings" className="rounded-lg p-3 hover:bg-slate-800">
          ⚙ Ajustes
        </NavLink>

      </nav>

    </aside>
  );
}