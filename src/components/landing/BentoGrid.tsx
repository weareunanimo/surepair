import { BadgeCheck, Boxes, Clock3, ShieldCheck, Users, Zap } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

const cells = [
  { icon: BadgeCheck, title: "Programadores certificados", desc: "Aprovação técnica em IA aplicada.", span: "md:col-span-2" },
  { icon: ShieldCheck, title: "Garantia de 30 dias", desc: "Bugs? Ajustes? Cobertos." },
  { icon: Clock3, title: "Prazo curto", desc: "7 a 14 dias úteis." },
  { icon: Boxes, title: "Catálogo padronizado", desc: "Escopo técnico validado antes de você contratar.", span: "md:col-span-2" },
  { icon: Users, title: "Suporte humano", desc: "Um PM cuida do seu projeto." },
  { icon: Zap, title: "Preço fixo", desc: "Sem hora extra, sem surpresa." },
];

export function BentoGrid() {
  return (
    <section className="py-28 px-6 border-t border-white/5">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.18em] text-emerald-300 mb-4">Diferenciais</p>
            <h2 className="text-4xl md:text-5xl">O que muda com Surepair.</h2>
          </div>
        </Reveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
          {cells.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05} className={c.span}>
              <div className="rounded-2xl border border-white/8 bg-slate-900/40 p-8 h-full">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 flex-wrap">
                  <c.icon className="h-6 w-6 text-emerald-400" />
                  <h3 className="text-lg">{c.title}</h3>
                </div>
                <p className="mt-4 text-slate-400 text-sm font-light leading-relaxed">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
