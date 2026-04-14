import Icon from "@/components/ui/icon";

const projects = [
  {
    icon: "Trophy",
    title: "Соревновательная деятельность",
    text: "Организация и поддержка официальных стартов краевого, межрегионального и всероссийского уровней.",
  },
  {
    icon: "Star",
    title: "Детские программы",
    text: "Развитие детских секций, системы тренировок и официальных соревнований для юных спортсменов.",
  },
  {
    icon: "Building2",
    title: "Инфраструктурные инициативы",
    text: "Содействие созданию современных трасс, площадок и тренировочных зон в крае.",
  },
  {
    icon: "Shield",
    title: "Безопасность и обучение",
    text: "Формирование культуры грамотного и безопасного управления мотоциклом и квадроциклом.",
  },
  {
    icon: "Route",
    title: "Туризм и событийное развитие",
    text: "Развитие спортивного туризма, брендовых маршрутов и событийных форматов для региона.",
  },
];

export default function Projects() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="projects" className="relative py-20 md:py-28 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://cdn.poehali.dev/projects/00b47664-9b61-477f-b290-1cdc7c6cfd77/files/be16e7e2-aa5e-4801-b063-dd429d110d0d.jpg)`,
        }}
      />
      <div className="absolute inset-0 bg-black/85" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-4">
          <span className="text-red-500 text-xs uppercase tracking-[0.2em] font-semibold">
            Деятельность
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <h2 className="text-3xl md:text-5xl font-black uppercase text-white">
            ПРОЕКТЫ
            <br />ОРГАНИЗАЦИИ
          </h2>
          <p className="text-white/55 text-sm max-w-md leading-relaxed">
            Организация участвует в развитии спортивных и организационных проектов, направленных
            на формирование современной среды для мотоциклетного и квадроциклетного спорта
            в Краснодарском крае.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`border border-white/10 bg-white/[0.04] backdrop-blur-sm p-7 hover:border-red-600/40 hover:bg-white/[0.08] transition-all duration-300 ${
                i === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="w-12 h-12 bg-red-600/15 border border-red-600/20 flex items-center justify-center mb-5">
                <Icon name={p.icon} size={22} className="text-red-400" />
              </div>
              <h3 className="text-white font-bold text-sm uppercase tracking-wide mb-3">
                {p.title}
              </h3>
              <p className="text-white/55 text-sm leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>

        <div>
          <button
            onClick={() => scrollTo("#contacts")}
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-sm uppercase tracking-widest transition-colors"
          >
            Связаться по проектам
          </button>
        </div>
      </div>
    </section>
  );
}