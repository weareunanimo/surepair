import { Reveal } from "@/components/motion/Reveal";

const quotes = [
  { q: "Contratei um chatbot em 10 dias. Custou metade do orçamento anterior.", a: "Marina S.", r: "Padaria da Vila" },
  { q: "Finalmente alguém entregou. Sem enrolação, escopo claro do começo ao fim.", a: "Rafael T.", r: "Studio Marena" },
  { q: "A certificação faz diferença. Notamos a qualidade no primeiro dia.", a: "Camila P.", r: "Clínica NovaVida" },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-28 px-6 border-t border-white/5">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.18em] text-emerald-300 mb-4">Depoimentos</p>
          <h2 className="text-4xl md:text-5xl max-w-2xl">Pequenos negócios, resultados grandes.</h2>
        </Reveal>
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {quotes.map((t, i) => (
            <Reveal key={t.a} delay={i * 0.1}>
              <figure className="rounded-2xl border border-white/8 bg-slate-900/40 p-8 h-full flex flex-col">
                <blockquote className="text-slate-200 text-lg font-light leading-relaxed">"{t.q}"</blockquote>
                <figcaption className="mt-8 text-sm">
                  <div className="text-foreground">{t.a}</div>
                  <div className="text-slate-500">{t.r}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
