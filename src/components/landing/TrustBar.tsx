import { Reveal } from "@/components/motion/Reveal";

export function TrustBar() {
  const items = ["Padaria da Vila", "Studio Marena", "Ateliê 12", "Clínica NovaVida", "Café Radical", "Óptica Lupa"];
  return (
    <Reveal className="border-y border-white/5 py-10 px-6">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-xs uppercase tracking-[0.18em] text-slate-500 mb-6">
          Negócios que já automatizaram com Surepair
        </p>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-slate-400 text-sm">
          {items.map((i) => (
            <span key={i} className="font-light">{i}</span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
