import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/blueprint")({
  head: () => ({
    meta: [
      { title: "Blueprint · Surepair" },
      { name: "description", content: "Blueprint técnico das demandas Surepair." },
    ],
  }),
  component: Blueprint,
});

function Blueprint() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition">
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </Link>
        <h1 className="mt-10 text-5xl md:text-6xl text-slate-900">Blueprint</h1>
        <p className="mt-6 text-slate-600 font-light max-w-2xl text-lg">
          Documentação técnica das demandas pré-definidas Surepair. Escopo, arquitetura de referência
          e critérios de aceite para cada projeto.
        </p>
        <div className="mt-16 rounded-2xl border border-slate-200 bg-white p-10">
          <p className="text-sm uppercase tracking-[0.18em] text-slate-400">Em preparação</p>
          <p className="mt-4 text-slate-700 font-light">
            Os blueprints estão sendo compilados pelos engenheiros. Volte em breve.
          </p>
        </div>
      </div>
    </div>
  );
}
