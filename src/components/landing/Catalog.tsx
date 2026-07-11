import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/motion/Reveal";
import { solutions } from "@/data/content";

export function Catalog() {
  return (
    <section id="catalogo" className="py-28 px-6 border-t border-white/5">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.18em] text-emerald-300 mb-4">
              Catálogo
            </p>
            <h2 className="text-4xl md:text-5xl">
              Escopos fechados.
              <br />
              Preço travado.
            </h2>
            <p className="mt-6 text-slate-400 font-light">
              Cada demanda tem entregáveis, stack e critérios de aceite validados por
              engenheiros de IA sêniores. Clique para ver a página completa.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {solutions.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.06} className="h-full">
              <Link
                to="/servicos/$slug"
                params={{ slug: s.slug }}
                preload="intent"
                className="group relative flex h-full flex-col text-left w-full rounded-2xl border border-white/8 bg-slate-900/40 p-8 hover:border-emerald-400/40 hover:bg-slate-900/70 transition-all"
              >
                {s.tag && (
                  <span className="absolute -top-3 right-6 z-10 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.14em] font-medium bg-emerald-400/15 text-emerald-300 ring-1 ring-emerald-400/30 backdrop-blur">
                    {s.tag}
                  </span>
                )}
                <div className="flex items-center gap-3">
                  <s.icon className="h-5 w-5 text-emerald-400" />
                  <h3 className="text-xl">{s.title}</h3>
                </div>
                <p className="mt-4 text-slate-400 text-sm font-light leading-relaxed">
                  {s.tagline}
                </p>
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {s.idealFor.slice(0, 3).map((i2) => (
                    <span
                      key={i2}
                      className="text-[11px] px-2 py-0.5 rounded-md bg-white/5 text-slate-400 ring-1 ring-white/10"
                    >
                      {i2}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-8 flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-light">{s.price}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      {s.timeline}
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
