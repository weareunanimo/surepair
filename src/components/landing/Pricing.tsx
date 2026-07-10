import { Check } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

const tiers = [
  {
    name: "Único",
    price: "R$ 1.800",
    desc: "Uma demanda pré-definida do catálogo.",
    features: ["Escopo fechado", "Preço fixo", "30 dias de garantia"],
  },
  {
    name: "Crescimento",
    price: "R$ 4.900",
    desc: "Três demandas por trimestre, prioridade no matching.",
    features: ["3 demandas /trimestre", "PM dedicado", "Prazo prioritário", "Suporte via WhatsApp"],
    tag: "Recomendado",
  },
  {
    name: "Sob medida",
    price: "Sob consulta",
    desc: "Projeto custom validado por engenheiro sênior.",
    features: ["Escopo personalizado", "Time dedicado", "SLA mensal"],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-28 px-6 border-t border-white/5">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.18em] text-emerald-300 mb-4">Planos</p>
          <h2 className="text-4xl md:text-5xl max-w-2xl">Escolha como quer trabalhar com IA.</h2>
        </Reveal>
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div
                className={`rounded-2xl p-8 h-full flex flex-col border ${
                  t.tag ? "border-emerald-400/40 bg-slate-900/70" : "border-white/8 bg-slate-900/40"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 flex-wrap">
                  <h3 className="text-xl">{t.name}</h3>
                  {t.tag && (
                    <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.14em] font-medium bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/20 self-start">
                      {t.tag}
                    </span>
                  )}
                </div>
                <p className="mt-3 text-slate-400 text-sm font-light">{t.desc}</p>
                <div className="mt-8 text-4xl font-light tracking-tight">{t.price}</div>
                <ul className="mt-8 space-y-3 text-sm text-slate-300 font-light flex-1">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#cta"
                  className={`mt-8 inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm transition ${
                    t.tag
                      ? "bg-gradient-cta text-slate-950 font-medium hover:opacity-90"
                      : "ring-1 ring-white/10 hover:bg-white/5 text-slate-200"
                  }`}
                >
                  Começar
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
