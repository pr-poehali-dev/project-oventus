const facts = [
  { value: "10+", label: "дисциплин и направлений" },
  { value: "2023", label: "год регистрации" },
  { value: "Краснодарский", label: "край — территория деятельности" },
];

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://cdn.poehali.dev/projects/00b47664-9b61-477f-b290-1cdc7c6cfd77/files/f71388ee-5fdf-43eb-86af-bd47d199f170.jpg)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pb-16 md:pb-24 pt-32 w-full">
        <p className="text-red-400 text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-4">
          Краснодарский край • ОГРН 1232300040950
        </p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-none mb-6 text-white">
          ФЕДЕРАЦИЯ
          <br />
          <span className="text-red-500">МОТОЦИКЛЕТНОГО</span>
          <br />И КВАДРОЦИКЛЕТНОГО
          <br />СПОРТА
          <br />
          <span className="text-red-400 text-3xl md:text-5xl lg:text-6xl">КРАСНОДАРСКОГО КРАЯ</span>
        </h1>

        <p className="text-white/70 text-sm md:text-base max-w-2xl mb-10 leading-relaxed">
          Краевая общественная организация, развивающая мотоциклетный и квадроциклетный спорт,
          детско-юношеские направления, спортивную инфраструктуру, культуру безопасного вождения
          и систему официальных мероприятий в Краснодарском крае.
        </p>

        <div className="flex flex-wrap gap-3 mb-14">
          <button
            onClick={() => scrollTo("#contacts")}
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-7 py-3.5 text-sm uppercase tracking-widest transition-colors"
          >
            Стать участником
          </button>
          <button
            onClick={() => scrollTo("#calendar")}
            className="border border-white/40 hover:border-white/80 text-white font-semibold px-7 py-3.5 text-sm uppercase tracking-widest transition-colors hover:bg-white/10"
          >
            Календарь мероприятий
          </button>
          <button
            onClick={() => scrollTo("#partners")}
            className="border border-red-600/60 hover:border-red-500 text-red-400 hover:text-red-300 font-semibold px-7 py-3.5 text-sm uppercase tracking-widest transition-colors hover:bg-red-600/10"
          >
            Стать партнёром
          </button>
        </div>

        <div className="flex flex-wrap gap-8 md:gap-12 border-t border-white/10 pt-8">
          {facts.map((f) => (
            <div key={f.value}>
              <div className="text-3xl md:text-4xl font-black text-white mb-1">{f.value}</div>
              <div className="text-white/50 text-xs uppercase tracking-wider">{f.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
