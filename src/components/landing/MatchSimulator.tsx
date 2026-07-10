import { useState, type FormEvent } from "react";
import {
  Sparkles,
  ShieldCheck,
  Star,
  Loader2,
  ArrowRight,
  CheckCircle2,
  RotateCcw,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

type Industry =
  | "E-commerce"
  | "Imobiliária"
  | "Clínica"
  | "Advocacia"
  | "Varejo"
  | "Educação"
  | "Serviços";

type Budget = "1-3" | "3-8" | "8+";

type Goal =
  | "Automação de WhatsApp"
  | "IA para atendimento de leads"
  | "Extração de dados"
  | "Automação de back-office"
  | "Agente de vendas com IA";

interface FormState {
  name: string;
  email: string;
  phone: string;
  industry: Industry | "";
  budget: Budget | "";
  goal: Goal | "";
}

interface DevProfile {
  name: string;
  title: string;
  match: number;
  rating: number;
  reviews: number;
  skills: string[];
  scope: string;
}

const INDUSTRIES: Industry[] = [
  "E-commerce",
  "Imobiliária",
  "Clínica",
  "Advocacia",
  "Varejo",
  "Educação",
  "Serviços",
];

const GOALS: Goal[] = [
  "Automação de WhatsApp",
  "IA para atendimento de leads",
  "Extração de dados",
  "Automação de back-office",
  "Agente de vendas com IA",
];

const BUDGETS: { id: Budget; label: string }[] = [
  { id: "1-3", label: "R$ 1k – 3k" },
  { id: "3-8", label: "R$ 3k – 8k" },
  { id: "8+", label: "R$ 8k+" },
];

const BASE_SKILLS: Record<Goal, string[]> = {
  "Automação de WhatsApp": ["WhatsApp Cloud API", "n8n", "OpenAI", "Webhooks"],
  "IA para atendimento de leads": ["GPT-4o", "RAG", "CRM Integrations", "Zapier"],
  "Extração de dados": ["Python", "Playwright", "OCR", "Structured Output"],
  "Automação de back-office": ["Make", "Google Workspace", "APIs REST", "Zod"],
  "Agente de vendas com IA": ["LangChain", "Function calling", "Pinecone", "HubSpot"],
};

const INDUSTRY_SKILLS: Record<Industry, string> = {
  "E-commerce": "Shopify",
  Imobiliária: "CRM Imobiliário",
  Clínica: "Prontuário eletrônico",
  Advocacia: "Jurimetria",
  Varejo: "PDV / ERP",
  Educação: "LMS",
  Serviços: "Agendamento",
};

const BUDGET_SCOPE: Record<Budget, { deliverables: string; timeline: string }> = {
  "1-3": {
    deliverables: "MVP funcional com 1 fluxo automatizado ponta a ponta",
    timeline: "Entrega em até 10 dias",
  },
  "3-8": {
    deliverables: "3 fluxos integrados + painel de acompanhamento",
    timeline: "Entrega em até 21 dias",
  },
  "8+": {
    deliverables: "Solução completa com agentes multi-etapa, dashboards e SLA",
    timeline: "Entrega em até 45 dias",
  },
};

const DEV_POOL: Omit<DevProfile, "match" | "skills" | "scope">[] = [
  { name: "Thiago S.", title: "Especialista em LLMs", rating: 4.9, reviews: 68 },
  { name: "Marina R.", title: "Engenheira de Automação IA", rating: 4.8, reviews: 54 },
  { name: "Rafael M.", title: "Arquiteto de Agentes IA", rating: 5.0, reviews: 41 },
  { name: "Camila P.", title: "AI Solutions Engineer", rating: 4.9, reviews: 77 },
];

function generateMatches(form: FormState): DevProfile[] {
  const goal = form.goal as Goal;
  const industry = form.industry as Industry;
  const budget = form.budget as Budget;
  const scope = BUDGET_SCOPE[budget];
  const industrySkill = INDUSTRY_SKILLS[industry];
  const baseSkills = BASE_SKILLS[goal];

  const picks = [...DEV_POOL].sort(() => Math.random() - 0.5).slice(0, 3);
  const matches = [98, 94, 89];

  return picks.map((p, i) => ({
    ...p,
    match: matches[i],
    skills: [...baseSkills.slice(0, 3), industrySkill],
    scope: `${scope.deliverables} para ${industry.toLowerCase()}. ${scope.timeline}.`,
  }));
}

type Status = "idle" | "loading" | "results";

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  industry: "",
  budget: "",
  goal: "",
};

export function MatchSimulator() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState<DevProfile[]>([]);

  const canSubmit =
    form.name.trim().length > 1 &&
    /\S+@\S+\.\S+/.test(form.email) &&
    form.phone.trim().length >= 8 &&
    form.industry &&
    form.budget &&
    form.goal;

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setStatus("loading");
    setProgress(0);

    const start = Date.now();
    const duration = 2200;
    const tick = () => {
      const pct = Math.min(100, ((Date.now() - start) / duration) * 100);
      setProgress(pct);
      if (pct < 100) {
        requestAnimationFrame(tick);
      } else {
        setResults(generateMatches(form));
        setStatus("results");
      }
    };
    requestAnimationFrame(tick);
  };

  const reset = () => {
    setStatus("idle");
    setResults([]);
    setProgress(0);
  };

  return (
    <section id="match" className="py-32 px-6 border-t border-white/5">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.14em] font-medium bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/20">
              <Sparkles className="h-3 w-3" />
              Simulador de Match
            </span>
            <h2 className="mt-6 text-4xl md:text-5xl">
              Configure seu projeto e veja{" "}
              <span className="text-gradient-emerald">devs compatíveis</span> em segundos.
            </h2>
            <p className="mt-5 text-slate-400 font-light">
              Sem custo, sem compromisso. Descreva sua demanda e nosso motor de matching
              devolve perfis certificados prontos para começar.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-[1fr_1.1fr] gap-6">
          {/* Form */}
          <Reveal>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-slate-900/60 ring-1 ring-white/10 backdrop-blur p-6 md:p-7 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Nome">
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="Seu nome"
                    className="input"
                    required
                  />
                </Field>
                <Field label="E-mail">
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="voce@empresa.com"
                    className="input"
                    required
                  />
                </Field>
              </div>

              <Field label="Telefone / WhatsApp">
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  placeholder="(11) 99999-0000"
                  className="input"
                  required
                />
              </Field>

              <Field label="Ramo de atuação">
                <select
                  value={form.industry}
                  onChange={(e) => update("industry", e.target.value as Industry)}
                  className="input"
                  required
                >
                  <option value="">Selecione…</option>
                  {INDUSTRIES.map((i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Orçamento planejado">
                <div className="grid grid-cols-3 gap-2">
                  {BUDGETS.map((b) => (
                    <button
                      key={b.id}
                      type="button"
                      onClick={() => update("budget", b.id)}
                      className={`px-3 py-2 rounded-lg text-sm transition ring-1 ${
                        form.budget === b.id
                          ? "bg-gradient-cta text-slate-950 ring-transparent font-medium"
                          : "bg-white/5 text-slate-300 ring-white/10 hover:bg-white/10"
                      }`}
                    >
                      {b.label}
                    </button>
                  ))}
                </div>
              </Field>

              <Field label="Objetivo principal">
                <select
                  value={form.goal}
                  onChange={(e) => update("goal", e.target.value as Goal)}
                  className="input"
                  required
                >
                  <option value="">Selecione…</option>
                  {GOALS.map((g) => (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  ))}
                </select>
              </Field>

              <button
                type="submit"
                disabled={!canSubmit || status === "loading"}
                className="w-full mt-2 bg-gradient-cta text-slate-950 px-6 py-3 rounded-full text-sm font-medium inline-flex items-center justify-center gap-2 hover:opacity-90 transition disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Buscando correspondências…
                  </>
                ) : (
                  <>
                    Encontrar meus devs
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>

              <p className="text-[11px] text-slate-500 leading-relaxed">
                Ao enviar, você concorda em receber uma proposta personalizada. Não
                compartilhamos seus dados com terceiros.
              </p>
            </form>
          </Reveal>

          {/* Results panel */}
          <Reveal delay={0.1}>
            <div className="rounded-2xl bg-slate-900/40 ring-1 ring-white/10 backdrop-blur p-6 md:p-7 min-h-[520px] flex flex-col">
              {status === "idle" && <IdleState />}
              {status === "loading" && <LoadingState progress={progress} />}
              {status === "results" && (
                <ResultsState results={results} form={form} onReset={reset} />
              )}
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        .input {
          width: 100%;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 0.6rem;
          padding: 0.65rem 0.85rem;
          font-size: 0.875rem;
          color: rgb(241 245 249);
          transition: border-color .15s, background .15s;
        }
        .input:focus {
          outline: none;
          border-color: oklch(0.82 0.17 165);
          background: rgba(255,255,255,0.06);
        }
        .input::placeholder { color: rgb(100 116 139); }
        select.input option { background: rgb(15 23 42); color: rgb(241 245 249); }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-[11px] uppercase tracking-[0.14em] text-slate-400 font-medium mb-2">
        {label}
      </span>
      {children}
    </label>
  );
}

function IdleState() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
      <div className="h-14 w-14 rounded-full bg-emerald-400/10 ring-1 ring-emerald-400/20 flex items-center justify-center mb-5">
        <Sparkles className="h-6 w-6 text-emerald-300" />
      </div>
      <h3 className="text-xl text-slate-100">Aguardando seu briefing</h3>
      <p className="mt-3 text-sm text-slate-400 max-w-sm font-light">
        Preencha o formulário ao lado. Vamos cruzar seu perfil com nossa base de
        desenvolvedores certificados e mostrar os melhores matches.
      </p>
    </div>
  );
}

function LoadingState({ progress }: { progress: number }) {
  const steps = [
    "Analisando seu ramo de atuação",
    "Cruzando com perfis certificados",
    "Calculando compatibilidade técnica",
    "Preparando escopos sugeridos",
  ];
  const activeIdx = Math.min(steps.length - 1, Math.floor((progress / 100) * steps.length));

  return (
    <div className="flex-1 flex flex-col justify-center">
      <div className="text-center mb-8">
        <Loader2 className="h-8 w-8 text-emerald-300 animate-spin mx-auto mb-4" />
        <h3 className="text-xl text-slate-100">Buscando correspondências…</h3>
        <p className="mt-2 text-sm text-slate-400 font-light">
          Varremos {(1200 + Math.floor(progress * 3)).toLocaleString("pt-BR")} perfis certificados
        </p>
      </div>

      <div className="max-w-sm mx-auto w-full">
        <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
          <div
            className="h-full bg-gradient-cta transition-[width] duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-1 text-right text-[11px] text-slate-500 tabular-nums">
          {Math.round(progress)}%
        </div>

        <ul className="mt-6 space-y-2.5">
          {steps.map((s, i) => (
            <li
              key={s}
              className={`flex items-center gap-2.5 text-sm transition ${
                i < activeIdx
                  ? "text-slate-300"
                  : i === activeIdx
                    ? "text-emerald-300"
                    : "text-slate-600"
              }`}
            >
              {i < activeIdx ? (
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              ) : i === activeIdx ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <div className="h-4 w-4 rounded-full ring-1 ring-slate-700" />
              )}
              {s}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ResultsState({
  results,
  form,
  onReset,
}: {
  results: DevProfile[];
  form: FormState;
  onReset: () => void;
}) {
  return (
    <div className="flex-1">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 flex-wrap mb-5">
        <div>
          <div className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.14em] font-medium bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/20">
            <CheckCircle2 className="h-3 w-3" />
            {results.length} matches encontrados
          </div>
          <h3 className="mt-3 text-xl text-slate-100">
            Devs certificados para {form.industry.toLowerCase()}
          </h3>
        </div>
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-200 transition"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          Refazer simulação
        </button>
      </div>

      <div className="space-y-3">
        {results.map((dev) => (
          <DevCard key={dev.name} dev={dev} />
        ))}
      </div>
    </div>
  );
}

function DevCard({ dev }: { dev: DevProfile }) {
  return (
    <div className="rounded-xl bg-slate-950/40 ring-1 ring-white/10 p-5 hover:ring-emerald-400/30 transition">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 flex-wrap">
        <div className="flex items-start gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-cta flex items-center justify-center text-slate-950 font-medium text-sm shrink-0">
            {dev.name.charAt(0)}
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-slate-100 font-medium">{dev.name}</span>
              <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.14em] text-emerald-300 bg-emerald-400/10 ring-1 ring-emerald-400/20 rounded-full px-2 py-0.5">
                <ShieldCheck className="h-3 w-3" />
                Certificado
              </span>
            </div>
            <div className="text-sm text-slate-400 mt-0.5">{dev.title}</div>
            <div className="flex items-center gap-1 mt-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${
                    i < Math.round(dev.rating)
                      ? "fill-emerald-300 text-emerald-300"
                      : "text-slate-700"
                  }`}
                />
              ))}
              <span className="text-[11px] text-slate-500 ml-1">
                {dev.rating.toFixed(1)} · {dev.reviews} projetos
              </span>
            </div>
          </div>
        </div>
        <div className="text-right shrink-0">
          <div className="text-2xl text-gradient-emerald tabular-nums leading-none">
            {dev.match}%
          </div>
          <div className="text-[10px] uppercase tracking-[0.14em] text-slate-500 mt-1">
            Match
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 mt-4">
        {dev.skills.map((s) => (
          <span
            key={s}
            className="text-[11px] px-2 py-1 rounded-md bg-white/5 text-slate-300 ring-1 ring-white/10"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="mt-4 rounded-lg bg-white/[0.03] ring-1 ring-white/5 p-3">
        <div className="text-[10px] uppercase tracking-[0.14em] text-slate-500 mb-1">
          Escopo sugerido
        </div>
        <p className="text-sm text-slate-300 font-light">{dev.scope}</p>
      </div>

      <button
        type="button"
        className="mt-4 w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium bg-white/5 text-slate-100 ring-1 ring-white/10 hover:bg-white/10 transition"
      >
        Assinar escopo
        <ArrowRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
