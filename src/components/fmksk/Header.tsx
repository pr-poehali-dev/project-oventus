import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const navItems = [
  { label: "О федерации", href: "#about" },
  { label: "Дисциплины", href: "#disciplines" },
  { label: "Календарный план", href: "#calendar" },
  { label: "Проекты", href: "#projects" },
  { label: "Документы", href: "#documents" },
  { label: "Партнёрство", href: "#partners" },
  { label: "Контакты", href: "#contacts" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/95 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        <button onClick={() => scrollTo("#hero")} className="flex items-center gap-3 group">
          <img
            src="https://cdn.poehali.dev/projects/00b47664-9b61-477f-b290-1cdc7c6cfd77/bucket/210dec99-34aa-4cd1-b585-a480db679429.png"
            alt="ФМКСК"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </button>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-200 hover:text-red-400 uppercase tracking-wide"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center">
          <button
            onClick={() => scrollTo("#contacts")}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2.5 text-sm uppercase tracking-wide transition-colors duration-200"
          >
            Вступить
          </button>
        </div>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <Icon name={mobileOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-black/98 backdrop-blur-md border-t border-white/10">
          <nav className="flex flex-col py-4 px-4">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="text-white/80 hover:text-white text-sm font-medium py-3 text-left uppercase tracking-wide border-b border-white/5 last:border-0"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contacts")}
              className="mt-4 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 text-sm uppercase tracking-wide transition-colors"
            >
              Вступить
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
