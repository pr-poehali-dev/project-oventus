import Icon from "@/components/ui/icon";

const cards = [
  {
    icon: "Shield",
    title: "Безопасность",
    text: "Все тренировки и старты проводятся с соблюдением норм безопасности и под наблюдением наставников.",
  },
  {
    icon: "Baby",
    title: "Программы с раннего возраста",
    text: "Направления для детей от 5 лет с постепенным освоением техники управления мотоциклом.",
  },
  {
    icon: "Flag",
    title: "Детские старты и тренировки",
    text: "Регулярные тренировочные выезды и официальные соревнования для юных спортсменов края.",
  },
  {
    icon: "Heart",
    title: "Семейный формат",
    text: "Мотоспорт как общее семейное увлечение — с заботой о безопасности и воспитательной ценности.",
  },
];

export default function Youth() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="youth" className="bg-zinc-950 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="mb-4">
              <span className="text-red-500 text-xs uppercase tracking-[0.2em] font-semibold">
                Молодёжный спорт
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-white mb-6 leading-tight">
              ДЕТСКО-ЮНОШЕСКИЙ
              <br />СПОРТ И БЕЗОПАСНОСТЬ
            </h2>
            <p className="text-white/60 text-sm leading-relaxed mb-10">
              Одним из ключевых приоритетов организации является развитие детско-юношеского
              мотоциклетного и квадроциклетного спорта. Задача направления — формирование
              безопасной, понятной и профессиональной среды, в которой дети могут начинать
              спортивный путь под руководством подготовленных наставников.
            </p>
            <button
              onClick={() => scrollTo("#contacts")}
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-sm uppercase tracking-widest transition-colors"
            >
              Записаться / отправить заявку
            </button>
          </div>

          <div>
            <div className="relative mb-8">
              <img
                src="https://cdn.poehali.dev/projects/00b47664-9b61-477f-b290-1cdc7c6cfd77/files/60005d71-2df0-40d6-8533-2da6af934dba.jpg"
                alt="Детский мотоспорт"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              {cards.map((c) => (
                <div
                  key={c.title}
                  className="border border-white/8 bg-white/[0.03] p-4 hover:border-red-600/30 transition-colors"
                >
                  <Icon name={c.icon} size={18} className="text-red-400 mb-3" />
                  <h3 className="text-white font-bold text-xs uppercase mb-2">{c.title}</h3>
                  <p className="text-white/45 text-xs leading-relaxed">{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}