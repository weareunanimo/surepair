import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock3,
  ShieldCheck,
  Sparkles,
  Tag,
} from "lucide-react";
import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";
import { Reveal } from "@/components/motion/Reveal";
import { solutions, benefits, faq } from "@/data/content";

export const Route = createFileRoute("/servicos/$slug")({
  loader: ({ params }) => {
    const solution = solutions.find((s) => s.slug === params.slug);
    if (!solution) throw notFound();
    return { solution };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Serviço não encontrado · Surepair" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { solution } = loaderData;
    const title = `${solution.title} · Surepair`;
    const description = solution.tagline;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
    };
  },
  notFoundComponent: ServiceNotFound,
  component: ServiceDetail,
});

function ServiceNotFound() {
  const { slug } = Route.useParams();
  return (
    <div className="min-h-screen bg-slate-950 text-foreground">
      <Nav />
      <main className="pt-40 px-6 pb-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.18em] text-emerald-300 mb-4">
            404
          </p>
          <h1 className="text-4xl md:text-5xl">Escopo não encontrado</h1>
          <p className="mt-6 text-slate-400 font-light">
            O serviço <code className="text-slate-300">{slug}</code> não faz parte
            do catálogo atual. Veja todas as demandas disponíveis abaixo.
          </p>
          <Link
            to="/"
            hash="catalogo"
            className="mt-10 inline-flex items-center gap-2 bg-gradient-cta text-slate-950 px-6 py-3 rounded-full text-sm font-medium"
          >
            Ver catálogo completo
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function ServiceDetail() {
  const { slug } = Route.useParams();
  const solution = solutions.find((s) => s.slug === slug)!;
  const related = solutions.filter((s) => s.slug !== solution.slug).slice(0, 3);
  const highlightedBenefits = benefits.slice(0, 4);
  const relatedFaq = faq.slice(0, 4);

  return (
    <div className="min-h-screen bg-slate-950 text-foreground">
      <Nav />

      <main className="pt-32">
        {/* Breadcrumb + Hero */}
        <section className="px-6 pt-8 pb-20">
          <div className="mx-auto max-w-5xl">
            <Link
              to="/"
              hash="catalogo"
              className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-200 transition"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar ao catálogo
            </Link>

            <Reveal>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.14em] font-medium bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/20">
                  <solution.icon className="h-3 w-3" />
                  Escopo fechado
                </span>
                {solution.tag && (
                  <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.14em] font-medium bg-white/5 text-slate-300 ring-1 ring-white/10">
                    <Tag className="h-3 w-3" />
                    {solution.tag}
                  </span>
                )}
              </div>

              <h1 className="mt-6 text-4xl md:text-6xl tracking-tight">
                {solution.title}
              </h1>
              <p className="mt-6 text-xl md:text-2xl text-slate-300 font-light max-w-3xl">
                {solution.tagline}
              </p>
              <p className="mt-6 text-slate-400 font-light max-w-3xl leading-relaxed">
                {solution.description}
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <Link
                  to="/"
                  hash="match"
                  className="bg-gradient-cta text-slate-950 px-6 py-3 rounded-full text-sm font-medium inline-flex items-center gap-2 hover:opacity-90 transition"
                >
                  Simular match para este escopo
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/blueprint"
                  className="px-6 py-3 rounded-full text-sm text-slate-300 ring-1 ring-white/10 hover:bg-white/5 transition"
                >
                  Ver blueprint técnico
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Key facts */}
        <section className="px-6 border-t border-white/5 py-14">
          <div className="mx-auto max-w-5xl grid sm:grid-cols-3 gap-4">
            <FactCard
              icon={<Sparkles className="h-4 w-4 text-emerald-300" />}
              label="Preço fixo"
              value={solution.price}
              note="Sem hora extra"
            />
            <FactCard
              icon={<Clock3 className="h-4 w-4 text-emerald-300" />}
              label="Prazo contratual"
              value={solution.timeline}
              note="Multa por atraso"
            />
            <FactCard
              icon={<ShieldCheck className="h-4 w-4 text-emerald-300" />}
              label="Garantia"
              value="30 dias"
              note="Reembolso total se não passar no aceite"
            />
          </div>
        </section>

        {/* Deliverables */}
        <section className="px-6 border-t border-white/5 py-24">
          <div className="mx-auto max-w-5xl grid lg:grid-cols-[1fr_1.2fr] gap-12">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-300 mb-4">
                O que está incluído
              </p>
              <h2 className="text-3xl md:text-4xl">
                Entregáveis técnicos assinados no contrato.
              </h2>
              <p className="mt-5 text-slate-400 font-light">
                Todos os itens abaixo têm critério de aceite objetivo. Se um
                deles não passar, o projeto não é considerado entregue.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <ol className="space-y-3">
                {solution.deliverables.map((d, i) => (
                  <li
                    key={d.label}
                    className="flex gap-4 rounded-xl bg-slate-900/40 ring-1 ring-white/8 p-5"
                  >
                    <div className="h-8 w-8 rounded-full bg-emerald-400/10 ring-1 ring-emerald-400/20 flex items-center justify-center text-emerald-300 text-sm tabular-nums shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <div className="text-slate-100">{d.label}</div>
                      <p className="mt-1 text-sm text-slate-400 font-light leading-relaxed">
                        {d.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </section>

        {/* Ideal for + Stack */}
        <section className="px-6 border-t border-white/5 py-24">
          <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-6">
            <Reveal>
              <div className="rounded-2xl bg-slate-900/40 ring-1 ring-white/8 p-8 h-full">
                <p className="text-[11px] uppercase tracking-[0.18em] text-emerald-300 font-medium">
                  Ideal para
                </p>
                <h3 className="mt-3 text-2xl">Setores atendidos</h3>
                <div className="mt-6 flex flex-wrap gap-2">
                  {solution.idealFor.map((i) => (
                    <span
                      key={i}
                      className="text-sm px-3 py-1.5 rounded-full bg-white/5 text-slate-200 ring-1 ring-white/10"
                    >
                      {i}
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-sm text-slate-400 font-light leading-relaxed">
                  Seu setor não está listado? Pedimos adaptação sem custo se o
                  escopo comportar.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-2xl bg-slate-900/40 ring-1 ring-white/8 p-8 h-full">
                <p className="text-[11px] uppercase tracking-[0.18em] text-emerald-300 font-medium">
                  Stack de referência
                </p>
                <h3 className="mt-3 text-2xl">Ferramentas usadas</h3>
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {solution.stack.map((s) => (
                    <code
                      key={s}
                      className="text-[12px] px-2.5 py-1 rounded-md bg-slate-950 text-emerald-200 ring-1 ring-emerald-400/20 font-mono"
                    >
                      {s}
                    </code>
                  ))}
                </div>
                <p className="mt-6 text-sm text-slate-400 font-light leading-relaxed">
                  Podemos substituir por equivalentes se sua empresa já usa
                  outra ferramenta. Combinado antes de assinar.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Outcome banner */}
        <section className="px-6 border-t border-white/5 py-24">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <div className="rounded-2xl bg-gradient-to-br from-emerald-400/15 to-teal-300/5 ring-1 ring-emerald-400/20 p-10 text-center">
                <p className="text-[11px] uppercase tracking-[0.18em] text-emerald-300 font-medium">
                  Resultado esperado
                </p>
                <h2 className="mt-4 text-2xl md:text-3xl font-light leading-snug max-w-3xl mx-auto text-slate-50">
                  {solution.outcome}
                </h2>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Process */}
        <section className="px-6 border-t border-white/5 py-24">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-300 mb-4">
                Do briefing à entrega
              </p>
              <h2 className="text-3xl md:text-4xl max-w-2xl">
                Como este projeto acontece na prática.
              </h2>
            </Reveal>

            <div className="mt-14 grid md:grid-cols-4 gap-4">
              {[
                {
                  n: "01",
                  t: "Briefing",
                  d: "30 min por vídeo. Alinhamos objetivo, base de dados e integrações.",
                },
                {
                  n: "02",
                  t: "Match",
                  d: "Você recebe até 3 devs certificados compatíveis e escolhe.",
                },
                {
                  n: "03",
                  t: "Execução",
                  d: "Checkpoints em dias fixos, código no seu GitHub desde o commit 1.",
                },
                {
                  n: "04",
                  t: "Aceite + garantia",
                  d: "Rodada de testes, treinamento gravado e 30 dias de suporte.",
                },
              ].map((s, i) => (
                <Reveal key={s.n} delay={i * 0.05}>
                  <div className="rounded-2xl bg-slate-900/40 ring-1 ring-white/8 p-6 h-full">
                    <div className="text-emerald-300 text-sm tabular-nums">
                      {s.n}
                    </div>
                    <div className="mt-4 text-lg text-slate-100">{s.t}</div>
                    <p className="mt-2 text-sm text-slate-400 font-light leading-relaxed">
                      {s.d}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Guarantees */}
        <section className="px-6 border-t border-white/5 py-24">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-300 mb-4">
                O que vem no contrato
              </p>
              <h2 className="text-3xl md:text-4xl max-w-2xl">
                Garantias que você assina antes de pagar.
              </h2>
            </Reveal>
            <div className="mt-12 grid md:grid-cols-2 gap-3">
              {highlightedBenefits.map((b, i) => (
                <Reveal key={b.slug} delay={i * 0.04}>
                  <div className="rounded-xl bg-slate-900/40 ring-1 ring-white/8 p-5">
                    <div className="flex items-center gap-3">
                      <b.icon className="h-5 w-5 text-emerald-400" />
                      <div className="text-slate-100">{b.title}</div>
                    </div>
                    <p className="mt-2 text-sm text-slate-400 font-light leading-relaxed">
                      {b.description}
                    </p>
                    <p className="mt-2 text-[12px] text-emerald-300/90 font-light">
                      → {b.guarantee}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Mini FAQ */}
        <section className="px-6 border-t border-white/5 py-24">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-300 mb-4">
                Dúvidas comuns
              </p>
              <h2 className="text-3xl md:text-4xl">
                Antes de você perguntar.
              </h2>
            </Reveal>
            <div className="mt-10 space-y-3">
              {relatedFaq.map((f, i) => (
                <Reveal key={f.slug} delay={i * 0.05}>
                  <div className="rounded-xl bg-slate-900/40 ring-1 ring-white/8 p-6">
                    <div className="text-slate-100">{f.question}</div>
                    <p className="mt-2 text-sm text-slate-400 font-light leading-relaxed">
                      {f.answer}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                to="/"
                hash="faq"
                className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-slate-100 transition"
              >
                Ver todas as perguntas
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="px-6 border-t border-white/5 py-24">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-300 mb-4">
                Outros escopos
              </p>
              <h2 className="text-3xl md:text-4xl max-w-2xl">
                Combine com outra demanda do catálogo.
              </h2>
            </Reveal>
            <div className="mt-12 grid md:grid-cols-3 gap-4">
              {related.map((r, i) => (
                <Reveal key={r.slug} delay={i * 0.05}>
                  <Link
                    to="/servicos/$slug"
                    params={{ slug: r.slug }}
                    className="group block h-full rounded-2xl border border-white/8 bg-slate-900/40 p-6 hover:border-emerald-400/40 hover:bg-slate-900/70 transition"
                  >
                    <div className="flex items-center gap-3">
                      <r.icon className="h-5 w-5 text-emerald-400" />
                      <div className="text-lg text-slate-100">{r.title}</div>
                    </div>
                    <p className="mt-3 text-sm text-slate-400 font-light leading-relaxed">
                      {r.tagline}
                    </p>
                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-slate-200 tabular-nums">
                        {r.price}
                      </span>
                      <ArrowRight className="h-4 w-4 text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-6 border-t border-white/5 py-32">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <h2 className="text-4xl md:text-5xl">
                Pronto para começar{" "}
                <span className="text-gradient-emerald">
                  {solution.title.toLowerCase()}
                </span>
                ?
              </h2>
              <p className="mt-6 text-slate-400 font-light">
                Preencha o simulador de match e receba 3 devs certificados
                compatíveis com este escopo em menos de 1 minuto.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  to="/"
                  hash="match"
                  className="bg-gradient-cta text-slate-950 px-6 py-3 rounded-full text-sm font-medium inline-flex items-center gap-2 hover:opacity-90 transition"
                >
                  Encontrar meu dev
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="mailto:contato@surepair.com"
                  className="px-6 py-3 rounded-full text-sm text-slate-300 ring-1 ring-white/10 hover:bg-white/5 transition inline-flex items-center gap-2"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  Falar com o time
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function FactCard({
  icon,
  label,
  value,
  note,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  note: string;
}) {
  return (
    <div className="rounded-2xl bg-slate-900/40 ring-1 ring-white/8 p-6">
      <div className="flex items-center gap-2">
        {icon}
        <span className="text-[11px] uppercase tracking-[0.14em] text-slate-400 font-medium">
          {label}
        </span>
      </div>
      <div className="mt-3 text-2xl md:text-3xl text-slate-50 tabular-nums">
        {value}
      </div>
      <div className="mt-1 text-[12px] text-slate-500 font-light">{note}</div>
    </div>
  );
}
