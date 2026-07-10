import { useMemo, useState } from "react";
import { Calculator, TrendingUp, Clock } from "lucide-react";

const brl = (n: number) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

interface SliderRowProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  display: string;
}

function SliderRow({ label, value, min, max, step, onChange, display }: SliderRowProps) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-baseline justify-between mb-2">
        <label className="text-[11px] uppercase tracking-[0.14em] text-slate-400 font-medium">
          {label}
        </label>
        <span className="text-sm text-emerald-300 tabular-nums font-medium">{display}</span>
      </div>
      <div className="relative h-1.5 rounded-full bg-white/5">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-cta"
          style={{ width: `${pct}%` }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          aria-label={label}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-emerald-300 ring-2 ring-emerald-400/30 shadow-[0_0_12px_rgba(52,211,153,0.6)] pointer-events-none"
          style={{ left: `calc(${pct}% - 8px)` }}
        />
      </div>
    </div>
  );
}

const AUTOMATION_STEPS = [0.2, 0.5, 0.8];

export function RoiCalculator() {
  const [tasks, setTasks] = useState(20);
  const [hourly, setHourly] = useState(60);
  const [autoIdx, setAutoIdx] = useState(1);

  const auto = AUTOMATION_STEPS[autoIdx];

  const { monthly, payback, setup } = useMemo(() => {
    const weeklyCost = tasks * hourly * 1.5;
    const monthly = weeklyCost * 4.33 * auto;
    const setup = 2400 + tasks * 40;
    const payback = monthly > 0 ? setup / monthly : Infinity;
    return { monthly, payback, setup };
  }, [tasks, hourly, auto]);

  const paybackLabel =
    payback < 1 ? "Menos de 1 mês" : `${payback.toFixed(1).replace(".", ",")} meses`;

  return (
    <div className="rounded-2xl bg-slate-900/60 ring-1 ring-white/10 backdrop-blur p-6 md:p-7 text-left">
      <div className="flex items-center gap-2 mb-6">
        <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.14em] font-medium bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/20">
          <Calculator className="h-3 w-3" />
          Calculadora de ROI
        </span>
      </div>

      <div className="space-y-6">
        <SliderRow
          label="Tarefas manuais por semana"
          value={tasks}
          min={1}
          max={100}
          step={1}
          onChange={setTasks}
          display={`${tasks} tarefas`}
        />
        <SliderRow
          label="Custo por hora operacional"
          value={hourly}
          min={15}
          max={250}
          step={5}
          onChange={setHourly}
          display={brl(hourly)}
        />
        <div>
          <div className="flex items-baseline justify-between mb-2">
            <label className="text-[11px] uppercase tracking-[0.14em] text-slate-400 font-medium">
              Grau de automatização por IA
            </label>
            <span className="text-sm text-emerald-300 tabular-nums font-medium">
              {Math.round(auto * 100)}%
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {AUTOMATION_STEPS.map((v, i) => (
              <button
                key={v}
                type="button"
                onClick={() => setAutoIdx(i)}
                className={`px-3 py-2 rounded-lg text-sm transition ring-1 ${
                  i === autoIdx
                    ? "bg-gradient-cta text-slate-950 ring-transparent font-medium"
                    : "bg-white/5 text-slate-300 ring-white/10 hover:bg-white/10"
                }`}
              >
                {Math.round(v * 100)}%
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="rounded-xl p-4 bg-gradient-to-br from-emerald-400/15 to-teal-300/5 ring-1 ring-emerald-400/20">
          <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.14em] text-emerald-300/80">
            <TrendingUp className="h-3 w-3" />
            Economia mensal
          </div>
          <div className="mt-2 text-3xl md:text-4xl text-gradient-emerald tabular-nums">
            {brl(monthly)}
          </div>
        </div>
        <div className="rounded-xl p-4 bg-white/5 ring-1 ring-white/10">
          <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.14em] text-slate-400">
            <Clock className="h-3 w-3" />
            Prazo de retorno
          </div>
          <div className="mt-2 text-3xl md:text-4xl text-slate-50 tabular-nums">
            {paybackLabel}
          </div>
        </div>
      </div>

      <p className="mt-4 text-[11px] text-slate-500 leading-relaxed">
        Setup estimado: <span className="text-slate-300">{brl(setup)}</span>. Estimativas para
        orientação inicial — o escopo final é definido na proposta.
      </p>
    </div>
  );
}
