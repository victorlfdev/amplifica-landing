# Amplifica Landing Page

Landing page institucional da Amplifica, desenvolvida para posicionar a marca como parceira premium de audiovisual estratégico para eventos.

## Visão geral

O projeto foi construído para:

- comunicar a proposta de valor da Amplifica com clareza
- reforçar percepção de marca premium
- apresentar diferencial estratégico antes, durante e depois do evento
- converter visitantes em contatos qualificados

Mensagem central da marca:

> Transformamos experiências ao vivo em conteúdo, posicionamento e impacto duradouro.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Vercel Analytics

## Execução local

Instale as dependências:

```bash
npm install
```

Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

A aplicação ficará disponível em:

```bash
http://localhost:3000
```

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Estrutura principal

```text
app/
  layout.tsx
  page.tsx
  globals.css
  components/
    landing/
      header.tsx
      hero-section.tsx
      visual-proof-section.tsx
      about-section.tsx
      problem-section.tsx
      solutions-section.tsx
      strategic-differential-section.tsx
      audience-section.tsx
      final-cta-section.tsx
      footer.tsx
      content.ts
      reveal.tsx
      section-shell.tsx
public/
  images/
```

## Contatos da marca

- WhatsApp: `5511976589202`
- Instagram: `@amplifica.midias`
- E-mail: `amplifica@usd21.org`
- Domínio final: `https://amplificamidias.com.br`

## SEO e metadata

O projeto já inclui:

- metadata base para o domínio final
- Open Graph e Twitter Card
- favicon placeholder
- estrutura pronta para indexação

Se necessário, o domínio também pode ser sobrescrito por variável de ambiente:

```bash
NEXT_PUBLIC_SITE_URL=https://amplificamidias.com.br
```

## Deploy

Antes do deploy final, valide:

- links de contato
- comportamento responsivo em mobile, tablet e desktop
- crops das imagens da galeria
- funcionamento das metadata no domínio final

Build de produção:

```bash
npm run build
```

## Status

O projeto está estruturado como landing page premium pronta para apresentação e preparação de deploy, com foco em:

- posicionamento estratégico
- estética premium escura
- responsividade
- animações sutis
- contatos reais da marca
