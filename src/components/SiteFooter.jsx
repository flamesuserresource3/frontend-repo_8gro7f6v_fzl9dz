export default function SiteFooter() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 py-8 text-zinc-400">
      <div className="mx-auto max-w-6xl px-6 text-sm">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p>
            © 2025 Мастерство от Магистра ΙΠΣΙΣΙΜΥΣA. Все права защищены. Практика — выше слов.
          </p>
          <nav className="flex gap-4">
            <a href="#topics" className="hover:text-zinc-200">Разделы</a>
            <a href="#" className="hover:text-zinc-200">Правила</a>
            <a href="#" className="hover:text-zinc-200">Связаться</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
