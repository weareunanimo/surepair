import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-slate-300">
          <Sparkles className="h-5 w-5 text-emerald-400" />
          <span className="tracking-tight">Surepair</span>
        </div>
        <p className="text-xs text-slate-500 font-light">
          © {new Date().getFullYear()} Surepair. IA sob medida para pequenos negócios.
        </p>
      </div>
    </footer>
  );
}
