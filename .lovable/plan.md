# Identidade Visual — Surepair

Aplicar direção minimalista/editorial suíça de alto contraste sobre a landing page, com fundo escuro, tipografia leve e destaques em gradiente esmeralda. Como a página ainda não existe (`src/routes/index.tsx` é placeholder), construo a landing junto com a identidade.

## 1. Tipografia

- Carregar Inter (300, 400, 500, 600) via `<link>` no `head()` do `src/routes/__root.tsx` (preconnect + stylesheet do Google Fonts).
- Em `src/styles.css`, definir `--font-sans: "Inter", sans-serif` em `@theme` e aplicar no `body`:
  - `font-weight: 300` padrão
  - `-webkit-font-smoothing: antialiased`
- Regra global para `h1, h2, h3, h4`: `font-weight: 300; letter-spacing: -0.02em; line-height: 1.05`.

## 2. Cores e tema (dark)

- Adicionar classe `dark` no `<html>` do `RootShell` (tema escuro fixo na landing).
- Sobrescrever tokens shadcn em `.dark` no `src/styles.css` usando os slates do Tailwind convertidos para oklch:
  - `--background` → slate-950
  - `--card`, `--popover` → slate-900
  - `--foreground` → slate-50
  - `--muted-foreground` → slate-400
  - `--border` → slate-800 / branco 8%
  - `--primary` → emerald-400
- Adicionar tokens custom:
  - `--gradient-cta: linear-gradient(135deg, oklch(emerald-400) 0%, oklch(teal-300) 100%)`
  - `--gradient-text: linear-gradient(90deg, emerald-400, teal-300)`
- Aba/rota `/blueprint` (nova) usa fundo `slate-100` com texto `slate-900` — variante "light minimalista".

## 3. Ícones Lucide

- Regra global em `src/styles.css`:
  ```css
  svg.lucide { stroke-width: 1.25; }
  ```
  (a lib aplica a classe `lucide` em todo ícone).

## 4. Framer Motion — Scroll Reveal

- Instalar `framer-motion`.
- Criar `src/components/motion/Reveal.tsx`: wrapper client-only usando `motion.div` + `whileInView`:
  - `initial={{ opacity: 0, y: 30 }}`
  - `whileInView={{ opacity: 1, y: 0 }}`
  - `viewport={{ once: true, margin: "-80px" }}`
  - `transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}`
  - Prop opcional `delay` para stagger.
- Envolver cada seção da landing (Hero, PainPoints, Solution, BentoGrid, Testimonials, Pricing, FAQ, CTA) em `<Reveal>`.

## 5. Estrutura da landing (dark, minimal editorial)

Arquivos em `src/components/landing/`:

- `Nav.tsx` — nav fixa translúcida, logo Surepair, links, CTA gradiente.
- `Hero.tsx` — headline gigante font-light com tracking negativo, uma palavra em `bg-clip-text` gradiente esmeralda; sub em `text-slate-400`; CTA primário gradiente + secundário outline.
- `PainPoints.tsx` — 3 dores em grid, ícones Lucide finos.
- `Solution.tsx` — split screen: texto + mock visual.
- `BentoGrid.tsx` — 6 células assimétricas destacando diferenciais (certificação, preço fixo, prazo, garantia, catálogo, matching). Badges "Recomendado"/"Novo" com classes `inline-flex flex-wrap gap-2` para empilhar no mobile.
- `Testimonials.tsx` — 3 depoimentos de donos de PME.
- `Pricing.tsx` — 3 planos/demandas; tag "Recomendado" no card do meio empilha acima do título no mobile (`flex-col sm:flex-row`, `gap-2`, `flex-wrap`).
- `Faq.tsx` — accordion shadcn.
- `Cta.tsx` — banner final gradiente.
- `Footer.tsx`.

Página `src/routes/index.tsx` monta as seções, cada uma dentro de `<Reveal>`.

## 6. Rota Blueprint (leve)

- `src/routes/blueprint.tsx` — placeholder com fundo `bg-slate-100 text-slate-900`, seguindo o item 2 do brief. Conteúdo curto ("Blueprint em breve") por enquanto — o usuário pode iterar depois.

## 7. Detalhes de badges/tags

Classes padrão para tags do tipo "Calculadora de ROI"/"Recomendado":
```
inline-flex items-center gap-1.5 rounded-full px-3 py-1
text-[11px] uppercase tracking-[0.14em] font-medium
bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/20
```
Container do header do card: `flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 flex-wrap` para nunca desalinhar no mobile.

## 8. SEO / head

Atualizar `head()` do root: título "Surepair — IA sob medida para pequenos negócios", description PT-BR, og:title/description, twitter card. Sem `og:image` (a hospedagem injeta screenshot).

## Arquivos afetados

- `src/routes/__root.tsx` (head + `<link>` Inter + `<html class="dark">`)
- `src/routes/index.tsx` (composição da landing)
- `src/routes/blueprint.tsx` (novo, tema claro)
- `src/styles.css` (tokens dark, Inter, tracking, regra Lucide, gradientes)
- `src/components/motion/Reveal.tsx` (novo)
- `src/components/landing/*.tsx` (novos)
- `package.json` (`framer-motion`)
