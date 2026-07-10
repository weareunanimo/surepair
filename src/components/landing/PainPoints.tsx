import { AlertTriangle, Clock, Wallet } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

const pains = [
  { icon: Wallet, title: "Orçamentos inflados", desc: "Freelancers cobram por hora, o escopo cresce e o preço triplica." },
  { icon: Clock, title: "Prazo que nunca chega", desc: "Projetos travam entre revisões, dependências e falta de foco." },
  { icon: AlertTriangle, title: "Ninguém garante nada", desc: "Sem certificação, sem processo, sem responsabilidade pela entrega." },
];

export function PainPoints() {
  return (
    <section className="py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.18em] text-emerald-300 mb-4">O problema</p>
            <h2 className="text-4xl md:text-5xl">
              Contratar IA hoje é caro,<br />lento e cheio de risco.
            </h2>
          </div>
        </Reveal>
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {pains.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div className="rounded-2xl border border-white/8 bg-slate-900/40 p-8 h-full">
                <p.icon className="h-6 w-6 text-emerald-400" />
                <h3 className="mt-6 text-xl">{p.title}</h3>
                <p className="mt-3 text-slate-400 text-sm leading-relaxed font-light">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
