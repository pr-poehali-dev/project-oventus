const navCol1 = [
  { label: "Об организации", href: "#about" },
  { label: "Дисциплины", href: "#disciplines" },
  { label: "Календарный план", href: "#calendar" },
  { label: "Проекты", href: "#projects" },
  { label: "Документы", href: "#documents" },
];

const navCol2 = [
  { label: "Партнёрство", href: "#partners" },
  { label: "Контакты", href: "#contacts" },
];

export default function SiteFooter() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-zinc-950 border-t border-white/8 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="https://cdn.poehali.dev/projects/00b47664-9b61-477f-b290-1cdc7c6cfd77/bucket/210dec99-34aa-4cd1-b585-a480db679429.png"
              alt="ФМКСК"
              className="h-12 w-auto object-contain mb-4"
            />
            <p className="text-white/40 text-xs leading-relaxed max-w-xs">
              Официальная краевая общественная организация по развитию мотоциклетного и
              квадроциклетного спорта в Краснодарском крае.
            </p>
          </div>

          <div>
            <div className="text-white/30 text-xs uppercase tracking-widest mb-4">Навигация</div>
            <ul className="space-y-3">
              {navCol1.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollTo(item.href)}
                    className="text-white/55 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-white/30 text-xs uppercase tracking-widest mb-4">Разделы</div>
            <ul className="space-y-3 mb-8">
              {navCol2.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollTo(item.href)}
                    className="text-white/55 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-white/30 text-xs uppercase tracking-widest mb-4">Контакты</div>
            <ul className="space-y-2.5 text-white/50 text-sm">
              <li>Краснодарский край, г. Геленджик</li>
              <li>
                <a
                  href="mailto:accounting-dep@groupgrand.ru"
                  className="hover:text-white transition-colors break-all"
                >
                  accounting-dep@groupgrand.ru
                </a>
              </li>
              <li>
                <a href="tel:+79384444529" className="hover:text-white transition-colors">
                  8-938-4444-529
                </a>
              </li>
              <li className="pt-2 border-t border-white/8">
                <div className="text-white/30 text-xs">ОГРН 1232300040950</div>
              </li>
              <li>
                <div className="text-white/30 text-xs">ИНН 2304081083</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white/25 text-xs">
            © 2023–2026 НКО «ФМКСК». ОГРН 1232300040950
          </div>
          <div className="flex gap-5">
            <button
              onClick={() => scrollTo("#documents")}
              className="text-white/30 hover:text-white/60 text-xs transition-colors"
            >
              Политика конфиденциальности
            </button>
            <button
              onClick={() => scrollTo("#documents")}
              className="text-white/30 hover:text-white/60 text-xs transition-colors"
            >
              Реквизиты
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}