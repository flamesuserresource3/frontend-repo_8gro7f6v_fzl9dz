import { Star, MessageSquare } from 'lucide-react';

export default function Featured() {
  return (
    <section className="bg-gradient-to-b from-zinc-950 to-zinc-900 py-14 text-zinc-100">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-6 flex items-center gap-2">
          <Star className="h-5 w-5 text-amber-300" />
          <h2 className="text-xl font-semibold">Избранные темы и сообщения</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
            <h3 className="text-lg font-medium">Сон Богородицы на Дом</h3>
            <p className="mt-2 text-sm text-zinc-300">
              Текст для защиты дома и рода. Ритуальная схема применения и
              сопровождение огнём свечи.
            </p>
            <div className="mt-3 flex items-center gap-2 text-xs text-zinc-400">
              <MessageSquare className="h-4 w-4" />
              МаринаМарина • перейти к последнему сообщению
            </div>
          </article>

          <article className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
            <h3 className="text-lg font-medium">Молитва Гекате</h3>
            <p className="mt-2 text-sm text-zinc-300">
              Призыв Владычице Перекрёстков. Тишина, меры и благодарности в
              окончании обряда.
            </p>
            <div className="mt-3 flex items-center gap-2 text-xs text-zinc-400">
              <MessageSquare className="h-4 w-4" />
              Rima • перейти к последнему сообщению
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
