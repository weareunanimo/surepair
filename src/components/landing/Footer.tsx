import { Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-slate-300">
          <Sparkles className="h-5 w-5 text-emerald-400" />
          <span className="tracking-tight">Surepair</span>
        </div>
        <div className="flex items-center gap-6 text-xs text-slate-500 font-light">
          <Link to="/blueprint" className="hover:text-slate-200 transition">
            Blueprint editorial
          </Link>
          <span>
            © {new Date().getFullYear()} Surepair. IA sob medida para pequenos negócios.
          </span>
        </div>
      </div>
    </footer>
  );
}

