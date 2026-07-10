import { ArrowRight, Code2 } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { RoiCalculator } from "@/components/landing/RoiCalculator";

export function Hero() {
  return (
    <Reveal as="section" className="pt-32 md:pt-40 pb-24 px-6">
      <div className="mx-auto max-w-6xl grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
        <div className="text-center lg:text-left">
          <span className="inline-flex flex-wrap items-center gap-1.5 rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.14em] font-medium bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/20">
            Plataforma B2B · IA sob medida
          </span>
          <h1 className="mt-8 text-5xl md:text-6xl xl:text-7xl leading-[1.02]">
            IA para o seu negócio,
            <br />
            <span className="text-gradient-emerald">sem freelancer genérico.</span>
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 font-light">
            A Surepair conecta pequenos negócios a programadores de IA certificados através de
            demandas pré-definidas. Escopo claro, preço fixo, entrega garantida.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3">
            <a
              href="#catalogo"
              className="bg-gradient-cta text-slate-950 px-6 py-3 rounded-full text-sm font-medium inline-flex items-center gap-2 hover:opacity-90 transition"
            >
              Contratar uma demanda
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#programador"
              className="px-6 py-3 rounded-full text-sm font-normal text-slate-300 ring-1 ring-white/10 hover:bg-white/5 transition inline-flex items-center gap-2"
            >
              <Code2 className="h-4 w-4" />
              Sou programador de IA
            </a>
          </div>
        </div>

        <div className="w-full max-w-lg mx-auto lg:max-w-none">
          <RoiCalculator />
        </div>
      </div>
    </Reveal>
  );
}
