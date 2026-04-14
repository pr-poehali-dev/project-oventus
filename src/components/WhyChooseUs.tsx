import Icon from "@/components/ui/icon"

const features = [
  {
    icon: "Award",
    title: "Официальный статус",
    description: "Зарегистрированная НКО с 2023 года, ОГРН 1232300040950 — все соревнования проводятся официально",
  },
  {
    icon: "Shield",
    title: "Правовая защита",
    description: "Спортсмены и организаторы защищены юридическим статусом федерации при проведении мероприятий",
  },
  {
    icon: "Users",
    title: "Сообщество Кубани",
    description: "Объединяем мотоциклистов и квадроциклистов всего Краснодарского края в единое спортивное сообщество",
  },
  {
    icon: "Trophy",
    title: "Путь к чемпионству",
    description: "Помогаем спортсменам расти от любителей до профессионалов — регистрация, квалификации, чемпионаты",
  },
]

export function WhyChooseUs() {
  return (
    <section id="about" className="py-32 bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
            Почему вступают в <span className="font-semibold text-primary">ФМКСК</span>
          </h2>
          <p className="text-lg text-white/60 text-balance leading-relaxed">
            Мы создаём условия для развития мотоциклетного спорта на Кубани — от первых стартов до чемпионских титулов
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 text-primary mb-2">
                <Icon name={feature.icon} size={32} className="text-primary" fallback="Star" />
              </div>
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
