import { Reveal } from "@/components/motion/Reveal";

const steps = [
  { n: "01", title: "Escolha uma demanda", desc: "Selecione no catálogo o que seu negócio precisa. Escopo e preço já definidos." },
  { n: "02", title: "Matching certificado", desc: "Alocamos um programador de IA aprovado no nosso processo técnico." },
  { n: "03", title: "Entrega garantida", desc: "Prazo curto, revisão inclusa, garantia de funcionamento por 30 dias." },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-28 px-6 border-t border-white/5">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 flex-wrap">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-300 mb-4">Como funciona</p>
              <h2 className="text-4xl md:text-5xl max-w-xl">Três passos, sem surpresas.</h2>
            </div>
            <p className="text-slate-400 max-w-sm font-light">
              Processo padronizado para que você saiba exatamente o que vai receber,
              quando e por quanto.
            </p>
          </div>
        </Reveal>
        <div className="mt-16 grid md:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <div className="bg-slate-950 p-10 h-full">
                <span className="text-sm text-emerald-400 tabular-nums">{s.n}</span>
                <h3 className="mt-6 text-2xl">{s.title}</h3>
                <p className="mt-4 text-slate-400 text-sm leading-relaxed font-light">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
