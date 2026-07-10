import { Reveal } from "@/components/motion/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  { q: "O que é uma demanda pré-definida?", a: "É um escopo técnico já validado por engenheiros de IA, com preço fixo e prazo curto. Você contrata sem risco de escopo crescer." },
  { q: "Como vocês certificam os programadores?", a: "Fazemos triagem técnica em IA aplicada, revisão de portfólio e projeto prático. Menos de 8% dos candidatos são aprovados." },
  { q: "E se a entrega tiver problema?", a: "Garantia de 30 dias após aceite. Ajustes, bugs e retreino do modelo estão cobertos." },
  { q: "Posso pedir algo que não está no catálogo?", a: "Sim, pelo plano Sob Medida. Nosso time desenha o escopo antes de você aprovar o orçamento." },
];

export function Faq() {
  return (
    <section id="faq" className="py-28 px-6 border-t border-white/5">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.18em] text-emerald-300 mb-4">FAQ</p>
          <h2 className="text-4xl md:text-5xl">Perguntas frequentes.</h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {items.map((it) => (
              <AccordionItem key={it.q} value={it.q} className="border-white/8">
                <AccordionTrigger className="text-left font-light text-lg hover:no-underline">
                  {it.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-400 font-light leading-relaxed">
                  {it.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
