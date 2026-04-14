import Icon from "@/components/ui/icon";

const cards = [
  {
    icon: "Award",
    title: "Официальный статус",
    text: "Зарегистрированная краевая организация",
  },
  {
    icon: "Map",
    title: "Региональный масштаб",
    text: "Работа по всему Краснодарскому краю",
  },
  {
    icon: "Users",
    title: "Детско-юношеский спорт",
    text: "Поддержка программ с раннего возраста",
  },
  {
    icon: "TrendingUp",
    title: "Системное развитие",
    text: "Соревнования, проекты, взаимодействие, безопасность",
  },
];

const missionItems = [
  "Развитие массового и официального спорта",
  "Поддержка детско-юношеских программ",
  "Развитие культуры безопасного управления техникой",
  "Содействие спортивной инфраструктуре",
  "Взаимодействие с государственными и общественными структурами",
];

export default function About() {
  return (
    <section id="about" className="bg-black py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-4">
          <span className="text-red-500 text-xs uppercase tracking-[0.2em] font-semibold">
            О нас
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black uppercase text-white mb-12">
          О ФЕДЕРАЦИИ
        </h2>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <div className="space-y-5 text-white/65 text-sm md:text-base leading-relaxed mb-10">
              <p>
                Краснодарская краевая общественная организация «Федерация мотоциклетного и
                квадроциклетного спорта» (НКО «ФМКСК») зарегистрирована 14.07.2023 для системного
                развития мотоциклетного и квадроциклетного спорта на территории Краснодарского края.
              </p>
              <p>
                Организация объединяет спортсменов, тренеров, организаторов соревнований,
                спортивные сообщества, партнеров и представителей профильной инфраструктуры.
                Федерация содействует развитию официальных дисциплин, календарных мероприятий,
                детско-юношеского спорта, культуры безопасности и взаимодействию с органами власти.
              </p>
              <p>
                Приоритетные направления: развитие спортивной среды в регионе, поддержка
                официальных соревнований, развитие детского спорта, повышение уровня безопасности,
                создание инфраструктуры, координация клубов и событийное развитие территории.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {cards.map((c) => (
                <div
                  key={c.title}
                  className="border border-white/10 bg-white/[0.03] p-5 hover:border-red-600/40 hover:bg-white/[0.06] transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-red-600/20 flex items-center justify-center mb-4">
                    <Icon name={c.icon} size={20} className="text-red-400" />
                  </div>
                  <h3 className="text-white font-bold text-sm uppercase tracking-wide mb-1">
                    {c.title}
                  </h3>
                  <p className="text-white/50 text-sm">{c.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-red-600/30 bg-red-950/20 p-7">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-red-500" />
              <h3 className="text-white font-black uppercase text-sm tracking-widest">
                Миссия федерации
              </h3>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Создание устойчивой системы развития мотоциклетного и квадроциклетного спорта в
              Краснодарском крае — от детских программ и локальных стартов до межрегиональных и
              всероссийских мероприятий.
            </p>
            <ul className="space-y-3">
              {missionItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 shrink-0" />
                  <span className="text-white/65 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
