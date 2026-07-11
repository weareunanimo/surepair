import { Reveal } from "@/components/motion/Reveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const quotes = [
  {
    q: "Contratei um chatbot em 10 dias. Custou metade do orçamento anterior.",
    a: "Marina S.",
    r: "Padaria da Vila",
  },
  {
    q: "Finalmente alguém entregou. Sem enrolação, escopo claro do começo ao fim.",
    a: "Rafael T.",
    r: "Studio Marena",
  },
  {
    q: "A certificação faz diferença. Notamos a qualidade no primeiro dia.",
    a: "Camila P.",
    r: "Clínica NovaVida",
  },
  {
    q: "Reduzimos em 70% o tempo de resposta no WhatsApp. Vendas subiram no mesmo mês.",
    a: "Bruno L.",
    r: "Imobiliária Horizonte",
  },
  {
    q: "Escopo travado no contrato. Zero surpresa no preço, zero atraso.",
    a: "Patrícia M.",
    r: "Advocacia Ribeiro",
  },
  {
    q: "O código veio documentado em português. Meu time interno assumiu sem dor.",
    a: "Eduardo F.",
    r: "Loja Vinté",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-28 px-6 border-t border-white/5">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.18em] text-emerald-300 mb-4">
            Depoimentos
          </p>
          <h2 className="text-4xl md:text-5xl max-w-2xl">
            Pequenos negócios, resultados grandes.
          </h2>
        </Reveal>

        <Reveal>
          <Carousel
            opts={{ align: "start", loop: true }}
            className="mt-16"
          >
            <CarouselContent className="-ml-6">
              {quotes.map((t) => (
                <CarouselItem
                  key={t.a}
                  className="pl-6 md:basis-1/2 lg:basis-1/3"
                >
                  <figure className="rounded-2xl border border-white/8 bg-slate-900/40 p-8 h-full flex flex-col">
                    <blockquote className="text-slate-200 text-lg font-light leading-relaxed">
                      "{t.q}"
                    </blockquote>
                    <figcaption className="mt-8 text-sm">
                      <div className="text-foreground">{t.a}</div>
                      <div className="text-slate-500">{t.r}</div>
                    </figcaption>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-8 flex justify-end gap-2">
              <CarouselPrevious className="static translate-y-0 border-white/10 bg-slate-900/60 text-foreground hover:bg-slate-800" />
              <CarouselNext className="static translate-y-0 border-white/10 bg-slate-900/60 text-foreground hover:bg-slate-800" />
            </div>
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}
