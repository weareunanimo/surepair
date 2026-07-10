import { Reveal } from "@/components/motion/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/data/content";

export function Faq() {
  return (
    <section id="faq" className="py-28 px-6 border-t border-white/5">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.18em] text-emerald-300 mb-4">
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl">Perguntas frequentes.</h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {faq.map((it) => (
              <AccordionItem
                key={it.slug}
                value={it.slug}
                className="border-white/8"
              >
                <AccordionTrigger className="text-left font-light text-lg hover:no-underline">
                  {it.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-400 font-light leading-relaxed">
                  {it.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
