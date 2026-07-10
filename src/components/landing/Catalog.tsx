import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { demands } from "@/data/demands";
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
            <p className="text-xs uppercase tracking-[0.18em] text-emerald-300 mb-4">Catálogo</p>
            <h2 className="text-4xl md:text-5xl">Demandas pré-definidas.<br />Preço fixo.</h2>
            <p className="mt-6 text-slate-400 font-light">
              Cada demanda tem escopo técnico validado por engenheiros de IA sêniores.
              Clique para ver detalhes.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {demands.map((d, i) => (
            <Reveal key={d.slug} delay={i * 0.06}>
              <Dialog open={selected === d.slug} onOpenChange={(o) => setSelected(o ? d.slug : null)}>
                <DialogTrigger asChild>
                  <button className="group text-left w-full rounded-2xl border border-white/8 bg-slate-900/40 p-8 hover:border-emerald-400/40 hover:bg-slate-900/70 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 flex-wrap">
                      <h3 className="text-xl">{d.title}</h3>
                      {d.tag && (
                        <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.14em] font-medium bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/20 self-start">
                          {d.tag}
                        </span>
                      )}
                    </div>
                    <p className="mt-4 text-slate-400 text-sm font-light leading-relaxed">{d.desc}</p>
                    <div className="mt-8 flex items-center justify-between">
                      <span className="text-2xl font-light">{d.price}</span>
                      <ArrowUpRight className="h-5 w-5 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="font-light text-2xl tracking-tight">{d.title}</DialogTitle>
                    <DialogDescription className="font-light">{d.desc}</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 text-sm text-slate-300 font-light">
                    <p><span className="text-slate-500">Preço:</span> {d.price}</p>
                    <p><span className="text-slate-500">Prazo:</span> 7 a 14 dias úteis</p>
                    <p><span className="text-slate-500">Garantia:</span> 30 dias após entrega</p>
                    <a
                      href="#cta"
                      onClick={() => setSelected(null)}
                      className="mt-4 inline-flex items-center gap-2 bg-gradient-cta text-slate-950 px-5 py-2.5 rounded-full text-sm font-medium"
                    >
                      Solicitar orçamento
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
