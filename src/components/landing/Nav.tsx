import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-slate-950/60 border-b border-white/5">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-foreground">
          <Sparkles className="h-5 w-5 text-emerald-400" />
          <span className="text-base tracking-tight">Surepair</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-400">
          <a href="#como-funciona" className="hover:text-foreground transition">Como funciona</a>
          <a href="#catalogo" className="hover:text-foreground transition">Catálogo</a>
          <a href="#depoimentos" className="hover:text-foreground transition">Depoimentos</a>
          <a href="#faq" className="hover:text-foreground transition">FAQ</a>
        </nav>
        <a
          href="#cta"
          className="bg-gradient-cta text-slate-950 text-sm px-4 py-2 rounded-full font-medium hover:opacity-90 transition"
        >
          Contratar
        </a>
      </div>
    </header>
  );
}
