import Icon from "@/components/ui/icon";

const opportunities = [
  { icon: "Flag", text: "Брендинг на мероприятиях" },
  { icon: "Megaphone", text: "Совместные PR- и медиапроекты" },
  { icon: "Star", text: "Поддержка детских и спортивных программ" },
  { icon: "Building2", text: "Участие в развитии инфраструктуры" },
  { icon: "Handshake", text: "Региональные партнерские форматы" },
];

const partnerTypes = [
  { icon: "Zap", label: "Бренды и бизнес" },
  { icon: "Building", label: "Государственные структуры" },
  { icon: "Users", label: "Общественные организации" },
  { icon: "Tv", label: "Медиа и СМИ" },
  { icon: "TrendingUp", label: "Инвесторы" },
  { icon: "Award", label: "Федерации и союзы" },
];

export default function Partners() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="partners" className="bg-zinc-950 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-4">
          <span className="text-red-500 text-xs uppercase tracking-[0.2em] font-semibold">
            Сотрудничество
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black uppercase text-white mb-12">
          ПАРТНЁРАМ
          <br />И СПОНСОРАМ
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
              {partnerTypes.map((p) => (
                <div
                  key={p.label}
                  className="border border-white/8 bg-white/[0.03] p-5 flex flex-col items-center text-center hover:border-red-600/30 hover:bg-white/[0.06] transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-red-600/15 flex items-center justify-center mb-3">
                    <Icon name={p.icon} size={18} className="text-red-400" />
                  </div>
                  <span className="text-white/60 text-xs leading-tight">{p.label}</span>
                </div>
              ))}
            </div>

            <div className="border border-white/8 bg-white/[0.02] p-6 text-center">
              <p className="text-white/40 text-xs uppercase tracking-widest">
                Логотипы партнёров размещаются по соглашению о сотрудничестве
              </p>
            </div>
          </div>

          <div>
            <p className="text-white/65 text-sm leading-relaxed mb-8">
              Федерация открыта к взаимодействию с бизнесом, профильными брендами,
              государственными структурами, общественными организациями, медиа и инвесторами.
            </p>

            <div className="space-y-3 mb-10">
              {opportunities.map((o) => (
                <div key={o.text} className="flex items-center gap-4 py-3 border-b border-white/6">
                  <div className="w-8 h-8 bg-red-600/15 flex items-center justify-center shrink-0">
                    <Icon name={o.icon} size={14} className="text-red-400" />
                  </div>
                  <span className="text-white/70 text-sm">{o.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => scrollTo("#contacts")}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-4 text-sm uppercase tracking-wide transition-colors"
              >
                Стать партнёром
              </button>
              <button
                onClick={() => scrollTo("#contacts")}
                className="flex-1 border border-white/20 hover:border-white/40 text-white/80 hover:text-white font-semibold py-4 text-sm uppercase tracking-wide transition-colors hover:bg-white/5"
              >
                Запросить презентацию
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
