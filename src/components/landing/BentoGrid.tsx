import { Reveal } from "@/components/motion/Reveal";
import { benefits } from "@/data/content";

export function BentoGrid() {
  return (
    <section id="beneficios" className="py-28 px-6 border-t border-white/5">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.18em] text-emerald-300 mb-4">
              Diferenciais
            </p>
            <h2 className="text-4xl md:text-5xl">
              Cada entrega vem com{" "}
              <span className="text-gradient-emerald">contrato, garantia e código seu.</span>
            </h2>
          </div>
        </Reveal>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
          {benefits.map((b, i) => (
            <Reveal key={b.slug} delay={i * 0.05} className="h-full">
              <article className="flex flex-col h-full rounded-2xl border border-white/8 bg-slate-900/40 p-8 hover:border-emerald-400/30 transition-colors">
                <div className="flex items-center gap-3">
                  <b.icon className="h-6 w-6 text-emerald-400 shrink-0" />
                  <h3 className="text-lg">{b.title}</h3>
                </div>
                <p className="mt-4 text-slate-300 text-sm font-light leading-relaxed">
                  {b.description}
                </p>
                <p className="mt-auto pt-4 border-t border-white/5 text-[12px] text-emerald-300/90 font-light leading-relaxed">
                  → {b.guarantee}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
