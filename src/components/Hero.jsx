import { Sparkles, ScrollText } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-100">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="flex items-center gap-2 text-sm text-fuchsia-300/90">
          <Sparkles className="h-4 w-4" />
          <span>Практическая магия от Магистра ΙΠΣΙΣΙΜΥΣA</span>
        </div>
        <h1 className="mt-6 text-3xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Мастерство от Магистра
          <span className="block bg-gradient-to-r from-fuchsia-400 via-emerald-300 to-cyan-300 bg-clip-text text-transparent">
            ΙΠΣΙΣΙΜΥΣA
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-zinc-300">
          Подходы Старых Мастеров Сибирской Школы, сильные молитвы, техники и
          ключи для постижения. Живое знание, проверенное практикой и
          передаваемое из уст в уста.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#topics"
            className="inline-flex items-center gap-2 rounded-lg bg-fuchsia-500/90 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/20 transition hover:bg-fuchsia-500"
          >
            <ScrollText className="h-4 w-4" />
            Перейти к разделам
          </a>
          <span className="text-xs text-zinc-400">09 сен 2025, 13:12 • Тем: 271 • Сообщений: 2293</span>
        </div>
      </div>
    </section>
  );
}
