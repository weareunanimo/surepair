import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

export function Cta() {
  return (
    <section id="cta" className="py-32 px-6 border-t border-white/5">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <h2 className="text-4xl md:text-6xl">
            Pronto para colocar IA<br />
            <span className="text-gradient-emerald">no seu negócio?</span>
          </h2>
          <p className="mt-8 text-slate-400 font-light max-w-xl mx-auto">
            Escolha uma demanda no catálogo, receba o matching de um programador certificado
            e tenha a entrega em até 14 dias.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#catalogo"
              className="bg-gradient-cta text-slate-950 px-6 py-3 rounded-full text-sm font-medium inline-flex items-center gap-2 hover:opacity-90 transition"
            >
              Ver catálogo
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="mailto:contato@surepair.com"
              className="px-6 py-3 rounded-full text-sm text-slate-300 ring-1 ring-white/10 hover:bg-white/5 transition"
            >
              Falar com o time
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
