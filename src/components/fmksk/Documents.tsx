import Icon from "@/components/ui/icon";

const docs = [
  { icon: "FileCheck", title: "Свидетельство о регистрации" },
  { icon: "BookOpen", title: "Устав организации" },
  { icon: "Lock", title: "Политика конфиденциальности" },
  { icon: "UserCheck", title: "Согласие на обработку персональных данных" },
  { icon: "ClipboardList", title: "Положения и регламенты мероприятий" },
  { icon: "FileText", title: "Формы заявок и анкет" },
];

export default function Documents() {
  return (
    <section id="documents" className="bg-black py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-4">
          <span className="text-red-500 text-xs uppercase tracking-[0.2em] font-semibold">
            Официальные материалы
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black uppercase text-white mb-12">
          ДОКУМЕНТЫ
          <br />И РЕГЛАМЕНТЫ
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <p className="text-white/55 text-sm leading-relaxed mb-8">
              Официальные документы, положения, формы заявок, регламенты и иные материалы
              предоставляются по запросу.
            </p>
            <div className="space-y-2">
              {docs.map((d) => (
                <div
                  key={d.title}
                  className="flex items-center gap-4 py-4 px-5 border border-white/8 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] transition-all cursor-pointer group"
                >
                  <Icon
                    name={d.icon}
                    size={18}
                    className="text-red-400/70 group-hover:text-red-400 shrink-0 transition-colors"
                  />
                  <span className="text-white/70 group-hover:text-white text-sm transition-colors">
                    {d.title}
                  </span>
                  <Icon
                    name="ChevronRight"
                    size={14}
                    className="text-white/20 group-hover:text-white/50 ml-auto transition-colors"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="border border-red-600/30 bg-red-950/20 p-7">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-red-500" />
              <h3 className="text-white font-black uppercase text-sm tracking-widest">
                Запросить документы
              </h3>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-8">
              Если вам необходимы официальные документы федерации, направьте запрос через
              форму или на электронную почту.
            </p>
            <div className="space-y-3">
              <button
                onClick={() => {
                  const el = document.querySelector("#contacts");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 text-sm uppercase tracking-wide transition-colors"
              >
                Запросить документы
              </button>
              <a
                href="mailto:accounting-dep@groupgrand.ru"
                className="flex items-center justify-center gap-2 w-full border border-white/20 hover:border-white/40 text-white/70 hover:text-white py-3.5 text-sm transition-colors"
              >
                <Icon name="Mail" size={14} />
                accounting-dep@groupgrand.ru
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
