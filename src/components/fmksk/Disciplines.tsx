import Icon from "@/components/ui/icon";

const disciplines = [
  {
    num: "01",
    icon: "Mountain",
    title: "Эндуро",
    text: "Официальная дисциплина с проведением зачётных стартов на природных трассах края.",
  },
  {
    num: "02",
    icon: "Compass",
    title: "Тур-эндуро / Adventure",
    text: "Маршрутные и приключенческие форматы для любителей дальних поездок и бездорожья.",
  },
  {
    num: "03",
    icon: "Trophy",
    title: "Эндуро-контест",
    text: "Соревновательный формат для демонстрации мастерства управления мотоциклом на технических секциях.",
  },
  {
    num: "04",
    icon: "Route",
    title: "Мототуризм",
    text: "Развитие туристских маршрутов и событийных форматов на территории Краснодарского края.",
  },
  {
    num: "05",
    icon: "RotateCcw",
    title: "Мотоджимхана",
    text: "Точностное пилотирование на размеченных трассах — дисциплина для оттачивания мастерства.",
  },
  {
    num: "06",
    icon: "Zap",
    title: "Квадроциклетный спорт",
    text: "Соревнования и события для пилотов квадроциклов и внедорожной техники.",
  },
  {
    num: "07",
    icon: "Star",
    title: "Детско-юношеский спорт",
    text: "Специализированные программы и старты для детей и подростков под руководством тренеров.",
  },
  {
    num: "08",
    icon: "Calendar",
    title: "Официальные мероприятия",
    text: "Организация и поддержка официальных соревнований краевого и межрегионального уровней.",
  },
  {
    num: "09",
    icon: "Building",
    title: "Инфраструктурные проекты",
    text: "Содействие строительству трасс, площадок и тренировочных объектов.",
  },
  {
    num: "10",
    icon: "Handshake",
    title: "Партнёрское взаимодействие",
    text: "Координация с органами власти, клубами, брендами и общественными организациями.",
  },
];

export default function Disciplines() {
  return (
    <section id="disciplines" className="bg-zinc-950 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-4">
          <span className="text-red-500 text-xs uppercase tracking-[0.2em] font-semibold">
            Виды спорта
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <h2 className="text-3xl md:text-5xl font-black uppercase text-white">
            ДИСЦИПЛИНЫ
            <br />И НАПРАВЛЕНИЯ
          </h2>
          <p className="text-white/50 text-sm max-w-sm leading-relaxed">
            Федерация охватывает ключевые дисциплины мотоциклетного и квадроциклетного спорта,
            а также смежные направления развития отрасли.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-px bg-white/5">
          {disciplines.map((d) => (
            <div
              key={d.num}
              className="bg-zinc-950 p-6 hover:bg-white/[0.04] transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-red-600/40 text-xs font-bold uppercase tracking-widest group-hover:text-red-500 transition-colors">
                  {d.num}
                </span>
                <Icon name={d.icon} size={18} className="text-red-500/60 group-hover:text-red-400 transition-colors" />
              </div>
              <h3 className="text-white font-bold text-sm uppercase leading-tight mb-3">
                {d.title}
              </h3>
              <p className="text-white/45 text-xs leading-relaxed">{d.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
