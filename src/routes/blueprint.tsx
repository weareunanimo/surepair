import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Check, Copy } from "lucide-react";
import {
  pains,
  solutions,
  benefits,
  faq,
  marketingFramework,
} from "@/data/content";

export const Route = createFileRoute("/blueprint")({
  head: () => ({
    meta: [
      { title: "Blueprint · Surepair" },
      {
        name: "description",
        content:
          "Blueprint editorial da Surepair: copy, framework PAS e especificações técnicas de cada bloco da landing page.",
      },
    ],
  }),
  component: Blueprint,
});

function useCopy() {
  const [copied, setCopied] = useState<string | null>(null);
  const copy = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(id);
      setTimeout(() => setCopied((c) => (c === id ? null : c)), 1600);
    } catch {
      /* no-op */
    }
  };
  return { copied, copy };
}

function CopyButton({ id, text }: { id: string; text: string }) {
  const { copied, copy } = useCopy();
  const active = copied === id;
  return (
    <button
      type="button"
      onClick={() => copy(id, text)}
      className={`inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.14em] font-medium px-2.5 py-1 rounded-md ring-1 transition ${
        active
          ? "bg-emerald-500 text-white ring-emerald-500"
          : "bg-white text-slate-600 ring-slate-200 hover:bg-slate-50"
      }`}
      aria-label="Copiar texto"
    >
      {active ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
      {active ? "Copiado" : "Copiar"}
    </button>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <header className="mb-8">
      <p className="text-[11px] uppercase tracking-[0.18em] text-emerald-700 font-medium">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl md:text-4xl text-slate-900">{title}</h2>
      <p className="mt-3 text-slate-600 font-light max-w-2xl">{description}</p>
    </header>
  );
}

function Blueprint() {
  const painCopy = pains
    .map(
      (p) =>
        `${p.title}\n${p.description}\n\nNo freelance: ${p.freelancerReality}\nNa Surepair: ${p.surepairFix}`,
    )
    .join("\n\n---\n\n");

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="mx-auto max-w-5xl px-6 py-16">
        {/* Header */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para a landing
        </Link>

        <h1 className="mt-10 text-5xl md:text-6xl text-slate-900">Blueprint</h1>
        <p className="mt-5 text-slate-600 font-light max-w-2xl text-lg">
          Documento editorial e técnico da landing page Surepair. Copy pronto para
          revisão, framework de marketing utilizado (PAS) e especificações de cada
          bloco — para desenvolvedores e redatores trabalharem em paralelo.
        </p>

        {/* Framework PAS */}
        <section className="mt-16">
          <SectionHeader
            eyebrow="Fórmula de marketing"
            title="Framework PAS — Problema · Agitação · Solução"
            description="Toda a landing segue esta estrutura clássica de copywriting persuasivo. Cada bloco cumpre um papel específico na jornada do lead."
          />
          <div className="grid md:grid-cols-3 gap-4">
            {marketingFramework.map((f) => (
              <article
                key={f.slug}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-emerald-500 text-white flex items-center justify-center font-medium">
                    {f.step}
                  </div>
                  <div>
                    <div className="text-lg text-slate-900">{f.label}</div>
                    <div className="text-[11px] uppercase tracking-[0.14em] text-slate-400">
                      {f.landingSection}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-slate-600 font-light leading-relaxed">
                  {f.purpose}
                </p>
                <div className="mt-4 text-[11px] font-mono text-slate-500 bg-slate-50 rounded px-2 py-1">
                  {f.dataSource}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Dor */}
        <section className="mt-20">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 flex-wrap mb-8">
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-emerald-700 font-medium">
                Bloco 1 · Dor
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl text-slate-900">
                Cards comparativos freelance × Surepair
              </h2>
              <p className="mt-3 text-slate-600 font-light max-w-2xl">
                Origem: <span className="font-mono text-xs">src/data/content.ts → pains[]</span>. Renderizado em{" "}
                <span className="font-mono text-xs">landing/PainPoints.tsx</span>.
              </p>
            </div>
            <CopyButton id="all-pains" text={painCopy} />
          </div>

          <div className="space-y-4">
            {pains.map((p) => (
              <article
                key={p.slug}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 flex-wrap px-6 py-4 border-b border-slate-100 bg-slate-50/60">
                  <div className="flex items-center gap-3">
                    <p.icon className="h-5 w-5 text-emerald-600" />
                    <h3 className="text-lg text-slate-900">{p.title}</h3>
                    <code className="text-[11px] text-slate-400">{p.slug}</code>
                  </div>
                  <CopyButton
                    id={`pain-${p.slug}`}
                    text={`${p.title}\n\n${p.description}\n\nNo freelance genérico: ${p.freelancerReality}\n\nNa Surepair: ${p.surepairFix}`}
                  />
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-slate-700 font-light leading-relaxed">
                    {p.description}
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="rounded-lg bg-red-50 ring-1 ring-red-100 p-4">
                      <div className="text-[10px] uppercase tracking-[0.14em] text-red-600 font-medium mb-1">
                        No freelance genérico
                      </div>
                      <p className="text-sm text-slate-700 font-light">
                        {p.freelancerReality}
                      </p>
                    </div>
                    <div className="rounded-lg bg-emerald-50 ring-1 ring-emerald-100 p-4">
                      <div className="text-[10px] uppercase tracking-[0.14em] text-emerald-700 font-medium mb-1">
                        Na Surepair
                      </div>
                      <p className="text-sm text-slate-700 font-light">
                        {p.surepairFix}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Solução */}
        <section className="mt-20">
          <SectionHeader
            eyebrow="Bloco 2 · Solução"
            title="Escopos fechados para pequenos negócios"
            description="Cada escopo é uma demanda pré-desenhada com entregáveis, stack, prazo e preço fixo. Fonte: src/data/content.ts → solutions[]. Renderizado em landing/Catalog.tsx."
          />
          <div className="space-y-5">
            {solutions.map((s) => (
              <article
                key={s.slug}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 flex-wrap px-6 py-4 border-b border-slate-100 bg-slate-50/60">
                  <div className="flex items-center gap-3 flex-wrap">
                    <s.icon className="h-5 w-5 text-emerald-600" />
                    <h3 className="text-lg text-slate-900">{s.title}</h3>
                    {s.tag && (
                      <span className="inline-flex items-center rounded-full px-2 py-0.5 text-[10px] uppercase tracking-[0.14em] font-medium bg-emerald-100 text-emerald-700">
                        {s.tag}
                      </span>
                    )}
                    <code className="text-[11px] text-slate-400">{s.slug}</code>
                  </div>
                  <CopyButton
                    id={`sol-${s.slug}`}
                    text={`${s.title}\n${s.tagline}\n\n${s.description}\n\nEntregáveis:\n${s.deliverables
                      .map((d) => `- ${d.label}: ${d.description}`)
                      .join("\n")}\n\nStack: ${s.stack.join(
                      ", ",
                    )}\nPrazo: ${s.timeline}\nPreço: ${s.price}\nResultado: ${s.outcome}`}
                  />
                </div>

                <div className="p-6 grid md:grid-cols-[1.4fr_1fr] gap-6">
                  <div className="space-y-4">
                    <p className="italic text-slate-500 font-light">{s.tagline}</p>
                    <p className="text-slate-700 font-light leading-relaxed">
                      {s.description}
                    </p>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.14em] text-slate-500 font-medium mb-2">
                        Entregáveis
                      </div>
                      <ul className="space-y-2">
                        {s.deliverables.map((d) => (
                          <li key={d.label} className="text-sm text-slate-700 font-light">
                            <span className="text-slate-900">{d.label}</span> —{" "}
                            <span className="text-slate-500">{d.description}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-lg bg-emerald-50 ring-1 ring-emerald-100 p-3">
                      <div className="text-[10px] uppercase tracking-[0.14em] text-emerald-700 mb-1 font-medium">
                        Resultado esperado
                      </div>
                      <p className="text-sm text-slate-700 font-light">{s.outcome}</p>
                    </div>
                  </div>

                  <aside className="space-y-3 text-sm">
                    <SpecRow label="Preço" value={s.price} />
                    <SpecRow label="Prazo" value={s.timeline} />
                    <SpecRow label="Ideal para" value={s.idealFor.join(" · ")} />
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.14em] text-slate-500 font-medium mb-1.5">
                        Stack de referência
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {s.stack.map((t) => (
                          <code
                            key={t}
                            className="text-[11px] px-2 py-0.5 rounded bg-slate-900 text-slate-100"
                          >
                            {t}
                          </code>
                        ))}
                      </div>
                    </div>
                  </aside>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Benefícios */}
        <section className="mt-20">
          <SectionHeader
            eyebrow="Bloco 3 · Benefícios"
            title="Bento grid de prova e segurança"
            description="Blocos que sustentam a promessa: segurança jurídica, escopo fechado, certificação, documentação e reembolso. Fonte: src/data/content.ts → benefits[]. Renderizado em landing/BentoGrid.tsx."
          />
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((b) => (
              <article
                key={b.slug}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <b.icon className="h-5 w-5 text-emerald-600" />
                    <h3 className="text-lg text-slate-900">{b.title}</h3>
                  </div>
                  <CopyButton
                    id={`ben-${b.slug}`}
                    text={`${b.title}\n${b.description}\n\nCláusula: ${b.guarantee}`}
                  />
                </div>
                <p className="mt-3 text-sm text-slate-700 font-light leading-relaxed">
                  {b.description}
                </p>
                <p className="mt-3 pt-3 border-t border-slate-100 text-[12px] text-emerald-700 font-medium">
                  Cláusula: <span className="font-light text-slate-700">{b.guarantee}</span>
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-20 mb-20">
          <SectionHeader
            eyebrow="Bloco 4 · FAQ"
            title="Objeções finais respondidas"
            description="Perguntas categorizadas para ataque objetivo às últimas dúvidas do lead. Fonte: src/data/content.ts → faq[]. Renderizado em landing/Faq.tsx."
          />
          <div className="rounded-2xl border border-slate-200 bg-white divide-y divide-slate-100 overflow-hidden">
            {faq.map((it) => (
              <div key={it.slug} className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 flex-wrap">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="inline-flex items-center rounded-full px-2 py-0.5 text-[10px] uppercase tracking-[0.14em] font-medium bg-slate-900 text-slate-100">
                        {it.category}
                      </span>
                      <code className="text-[11px] text-slate-400">{it.slug}</code>
                    </div>
                    <h3 className="mt-2 text-lg text-slate-900">{it.question}</h3>
                  </div>
                  <CopyButton
                    id={`faq-${it.slug}`}
                    text={`P: ${it.question}\nR: ${it.answer}`}
                  />
                </div>
                <p className="mt-3 text-slate-700 font-light leading-relaxed">
                  {it.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        <footer className="border-t border-slate-200 pt-8 text-sm text-slate-500 font-light">
          Editar o conteúdo desta página:{" "}
          <code className="text-slate-700">src/data/content.ts</code>. As alterações
          refletem automaticamente na landing e neste blueprint.
        </footer>
      </div>
    </div>
  );
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-3 border-b border-slate-100 pb-2">
      <span className="text-[10px] uppercase tracking-[0.14em] text-slate-500 font-medium">
        {label}
      </span>
      <span className="text-sm text-slate-800 text-right">{value}</span>
    </div>
  );
}
