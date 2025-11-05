import { BookOpen, Flame, Droplets, KeyRound, Feather } from 'lucide-react';

const topics = [
  {
    icon: Flame,
    title: 'Подходы Старых Мастеров',
    subtitle: 'Сибирская Школа',
    description:
      'Традиции и методы работы. Магия церковной свечи, практика и путь мастера.',
    items: [
      'Подходы Старых Мастеров 1–4',
      'Магия церковной свечи и метод',
      'Подарки от Магистра',
      'Разные ветви и направления',
    ],
  },
  {
    icon: Droplets,
    title: 'Магия крови',
    subtitle: 'Кровь как источник силы',
    description:
      'Сакральная природа крови в ритуале. Сила, ограничения и ответственность.',
    items: ['Источники силы', 'Охрана и обеты', 'Этика применения'],
  },
  {
    icon: KeyRound,
    title: 'Ключи к мастерству',
    subtitle: 'Практика и дисциплина',
    description:
      'Аскеза во время работы, лечебные письма, структуры практики и фиксация результата.',
    items: ['Аскеза', 'Лечебные письма', 'Фиксация и отчёты'],
  },
  {
    icon: BookOpen,
    title: 'Теория и основы',
    subtitle: 'Учение и разбор',
    description:
      'Теоретические принципы, толкования и свидетельства мастеров.',
    items: ['Сон Богородицы', 'Свидетельство Н. В. Гоголя', 'Удар Неба'],
  },
  {
    icon: Feather,
    title: 'Молитвы и гимны',
    subtitle: 'Посвящения',
    description:
      'Молитва Гекате и другие обращения. Уважение к Силе и Слову.',
    items: ['Молитва Гекате', 'Благословения', 'Песнопения'],
  },
];

export default function Topics() {
  return (
    <section id="topics" className="relative bg-zinc-950 py-14 text-zinc-100">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">Разделы</h2>
            <p className="mt-1 text-sm text-zinc-400">
              Живые направления Учения, к которым можно обратиться уже сейчас
            </p>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((t, i) => (
            <article
              key={i}
              className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-gradient-to-b from-zinc-900/60 to-zinc-900 p-5 transition hover:border-fuchsia-500/40 hover:shadow-[0_0_40px_-10px_rgba(217,70,239,0.35)]"
            >
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-zinc-800/80 p-2 text-fuchsia-300">
                  <t.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium leading-tight">
                    {t.title}
                    <span className="block text-sm text-zinc-400">{t.subtitle}</span>
                  </h3>
                </div>
              </div>
              <p className="mt-3 text-sm text-zinc-300">{t.description}</p>
              <ul className="mt-3 space-y-2 text-sm text-zinc-400">
                {t.items.map((it, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400/70" />
                    {it}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
