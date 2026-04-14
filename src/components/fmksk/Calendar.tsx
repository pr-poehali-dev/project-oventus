import { useState } from "react";
import Icon from "@/components/ui/icon";

const statusFilters = ["Все", "Организуем", "Участвуем", "Планируем"];
const disciplineFilters = ["Все дисциплины", "Эндуро", "Тур-эндуро", "Квадроциклы", "Детские", "Прочее"];

const events = [
  {
    date: "Май 2026",
    title: "Краевой старт по эндуро",
    location: "Краснодарский край",
    status: "Организуем",
    discipline: "Эндуро",
    description: "Официальный зачётный старт краевого уровня для участников всех возрастных групп.",
  },
  {
    date: "Июнь 2026",
    title: "Тур-приключение по Черноморскому побережью",
    location: "Геленджик — Туапсе",
    status: "Организуем",
    discipline: "Тур-эндуро",
    description: "Маршрутный тур по горным дорогам и побережью Краснодарского края.",
  },
  {
    date: "Июль 2026",
    title: "Детские старты ФМКСК",
    location: "Геленджик",
    status: "Организуем",
    discipline: "Детские",
    description: "Соревнования для юных спортсменов в возрасте от 5 до 16 лет.",
  },
  {
    date: "Август 2026",
    title: "Чемпионат по квадроциклам",
    location: "Краснодарский край",
    status: "Участвуем",
    discipline: "Квадроциклы",
    description: "Краевые соревнования по квадроциклетному спорту на внедорожных трассах.",
  },
  {
    date: "Сентябрь 2026",
    title: "Эндуро-контест осень",
    location: "Краснодарский край",
    status: "Планируем",
    discipline: "Эндуро",
    description: "Технические секции и зачётные прохождения для опытных пилотов.",
  },
  {
    date: "Октябрь 2026",
    title: "Мотоджимхана — открытый кубок",
    location: "Геленджик",
    status: "Планируем",
    discipline: "Прочее",
    description: "Открытый кубок по точностному пилотированию для всех желающих.",
  },
];

const statusColors: Record<string, string> = {
  Организуем: "bg-red-600/20 text-red-400 border-red-600/30",
  Участвуем: "bg-blue-600/20 text-blue-400 border-blue-600/30",
  Планируем: "bg-white/10 text-white/50 border-white/20",
};

export default function Calendar() {
  const [activeStatus, setActiveStatus] = useState("Все");
  const [activeDiscipline, setActiveDiscipline] = useState("Все дисциплины");

  const filtered = events.filter((e) => {
    const matchStatus = activeStatus === "Все" || e.status === activeStatus;
    const matchDisc = activeDiscipline === "Все дисциплины" || e.discipline === activeDiscipline;
    return matchStatus && matchDisc;
  });

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="calendar" className="bg-black py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-4">
          <span className="text-red-500 text-xs uppercase tracking-[0.2em] font-semibold">
            Мероприятия
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <h2 className="text-3xl md:text-5xl font-black uppercase text-white">
            КАЛЕНДАРНЫЙ
            <br />ПЛАН
          </h2>
          <p className="text-white/50 text-sm max-w-xs leading-relaxed">
            Формируется и дополняется по мере утверждения. Подайте заявку на участие.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-5">
          {statusFilters.map((s) => (
            <button
              key={s}
              onClick={() => setActiveStatus(s)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wide border transition-colors ${
                activeStatus === s
                  ? "bg-red-600 border-red-600 text-white"
                  : "border-white/15 text-white/50 hover:border-white/40 hover:text-white/80"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mb-10">
          {disciplineFilters.map((d) => (
            <button
              key={d}
              onClick={() => setActiveDiscipline(d)}
              className={`px-4 py-2 text-xs font-medium transition-colors rounded-sm ${
                activeDiscipline === d
                  ? "bg-white/10 text-white"
                  : "text-white/40 hover:text-white/70"
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {filtered.length === 0 && (
            <div className="col-span-3 text-center py-16 text-white/30 text-sm">
              Нет мероприятий по выбранным фильтрам
            </div>
          )}
          {filtered.map((e) => (
            <div
              key={e.title}
              className="border border-white/8 bg-white/[0.02] p-6 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-white/40 text-xs uppercase tracking-wide">{e.date}</span>
                <span
                  className={`text-xs px-2.5 py-1 border font-medium ${statusColors[e.status]}`}
                >
                  {e.status}
                </span>
              </div>
              <h3 className="text-white font-bold text-sm uppercase mb-2 leading-tight">
                {e.title}
              </h3>
              <div className="flex items-center gap-1.5 mb-3">
                <Icon name="MapPin" size={12} className="text-red-500/70" />
                <span className="text-white/40 text-xs">{e.location}</span>
              </div>
              <p className="text-white/45 text-xs leading-relaxed mb-5">{e.description}</p>
              <button
                onClick={() => scrollTo("#contacts")}
                className="w-full border border-red-600/40 text-red-400 hover:bg-red-600 hover:text-white text-xs font-semibold uppercase tracking-wide py-2.5 transition-colors"
              >
                Подать заявку
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}