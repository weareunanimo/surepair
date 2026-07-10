import { Reveal } from "@/components/motion/Reveal";
import { pains } from "@/data/content";

export function PainPoints() {
  return (
    <section id="problema" className="py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.18em] text-emerald-300 mb-4">
              O problema
            </p>
            <h2 className="text-4xl md:text-5xl">
              Contratar IA no freelance é caro,
              <br />
              lento e cheio de risco.
            </h2>
            <p className="mt-6 text-slate-400 font-light">
              Todo dono de PME que tentou automação com dev genérico já viveu ao
              menos um destes pesadelos. Nós construímos a Surepair para eliminá-los.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {pains.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <article className="rounded-2xl border border-white/8 bg-slate-900/40 p-8 h-full">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 flex-wrap">
                  <p.icon className="h-6 w-6 text-emerald-400" />
                  <h3 className="text-xl">{p.title}</h3>
                </div>
                <p className="mt-4 text-slate-300 text-sm leading-relaxed font-light">
                  {p.description}
                </p>

                <div className="mt-6 grid gap-3">
                  <div className="rounded-lg bg-red-500/5 ring-1 ring-red-500/15 p-4">
                    <div className="text-[10px] uppercase tracking-[0.14em] text-red-300/80 font-medium mb-1">
                      No freelance genérico
                    </div>
                    <p className="text-sm text-slate-300 font-light">
                      {p.freelancerReality}
                    </p>
                  </div>
                  <div className="rounded-lg bg-emerald-400/5 ring-1 ring-emerald-400/20 p-4">
                    <div className="text-[10px] uppercase tracking-[0.14em] text-emerald-300 font-medium mb-1">
                      Na Surepair
                    </div>
                    <p className="text-sm text-slate-300 font-light">{p.surepairFix}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
