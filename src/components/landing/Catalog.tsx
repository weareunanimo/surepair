import { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { solutions } from "@/data/content";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function Catalog() {
  const [selected, setSelected] = useState<string | null>(null);

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
              engenheiros de IA sêniores. Clique para ver detalhes.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {solutions.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.06}>
              <Dialog
                open={selected === s.slug}
                onOpenChange={(o) => setSelected(o ? s.slug : null)}
              >
                <DialogTrigger asChild>
                  <button className="group text-left w-full rounded-2xl border border-white/8 bg-slate-900/40 p-8 hover:border-emerald-400/40 hover:bg-slate-900/70 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 flex-wrap">
                      <div className="flex items-center gap-3">
                        <s.icon className="h-5 w-5 text-emerald-400" />
                        <h3 className="text-xl">{s.title}</h3>
                      </div>
                      {s.tag && (
                        <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.14em] font-medium bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/20 self-start">
                          {s.tag}
                        </span>
                      )}
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
                    <div className="mt-8 flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-light">{s.price}</div>
                        <div className="text-[11px] text-slate-500 mt-0.5">
                          {s.timeline}
                        </div>
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="font-light text-2xl tracking-tight">
                      {s.title}
                    </DialogTitle>
                    <DialogDescription className="font-light">
                      {s.description}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-5 text-sm text-slate-300 font-light">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.14em] text-slate-500 mb-2">
                        Entregáveis
                      </div>
                      <ul className="space-y-2">
                        {s.deliverables.map((d) => (
                          <li key={d.label} className="flex gap-2">
                            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>
                              <span className="text-slate-100">{d.label}</span> —{" "}
                              <span className="text-slate-400">{d.description}</span>
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-3">
                        <div className="text-[10px] uppercase tracking-[0.14em] text-slate-500">
                          Prazo
                        </div>
                        <div className="mt-1 text-slate-100">{s.timeline}</div>
                      </div>
                      <div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-3">
                        <div className="text-[10px] uppercase tracking-[0.14em] text-slate-500">
                          Preço fixo
                        </div>
                        <div className="mt-1 text-slate-100">{s.price}</div>
                      </div>
                    </div>
                    <div className="rounded-lg bg-emerald-400/5 ring-1 ring-emerald-400/20 p-4">
                      <div className="text-[10px] uppercase tracking-[0.14em] text-emerald-300 mb-1">
                        Resultado esperado
                      </div>
                      <p>{s.outcome}</p>
                    </div>
                    <a
                      href="#match"
                      onClick={() => setSelected(null)}
                      className="inline-flex items-center gap-2 bg-gradient-cta text-slate-950 px-5 py-2.5 rounded-full text-sm font-medium"
                    >
                      Simular match para este escopo
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </DialogContent>
              </Dialog>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
