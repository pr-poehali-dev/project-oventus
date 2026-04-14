import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const disciplines = [
  {
    name: "Мотокросс",
    category: "Грунтовые трассы",
    image: "https://cdn.poehali.dev/projects/00b47664-9b61-477f-b290-1cdc7c6cfd77/files/0a8d8284-fc12-437c-a6d4-4c8c5f15165f.jpg",
    description: "Гонки на мотоциклах по пересечённой местности с трамплинами и препятствиями",
    level: "Все уровни",
  },
  {
    name: "Квадроциклы",
    category: "ATV-спорт",
    image: "https://cdn.poehali.dev/projects/00b47664-9b61-477f-b290-1cdc7c6cfd77/files/07cdd719-2797-44ee-b865-635ac72eab64.jpg",
    description: "Соревнования на квадроциклах по грунтовым трассам — скорость и мастерство",
    level: "Все уровни",
  },
  {
    name: "Супермото",
    category: "Смешанные трассы",
    image: "https://cdn.poehali.dev/projects/00b47664-9b61-477f-b290-1cdc7c6cfd77/files/1f9f72eb-2c06-4d59-be35-4e2d4a490050.jpg",
    description: "Гонки на асфальтовых и грунтовых секторах трассы — универсальная дисциплина",
    level: "Продвинутый",
  },
  {
    name: "Эндуро",
    category: "Внедорожный спорт",
    image: "https://cdn.poehali.dev/projects/00b47664-9b61-477f-b290-1cdc7c6cfd77/files/2d8f4577-8cc9-49e6-a403-334e223ff018.jpg",
    description: "Многодневные соревнования по природному бездорожью Краснодарского края",
    level: "Все уровни",
  },
  {
    name: "Суперкросс",
    category: "Закрытые арены",
    image: "https://cdn.poehali.dev/projects/00b47664-9b61-477f-b290-1cdc7c6cfd77/files/83bdba45-fe15-41d7-94fc-73cf636d4450.jpg",
    description: "Захватывающие гонки в закрытых аренах с искусственными препятствиями",
    level: "Профессионал",
  },
  {
    name: "Чемпионаты",
    category: "Официальные старты",
    image: "https://cdn.poehali.dev/projects/00b47664-9b61-477f-b290-1cdc7c6cfd77/files/cd53ff97-13dc-4551-8720-1cce94c88a21.jpg",
    description: "Краевые и региональные чемпионаты под эгидой федерации — путь к победе",
    level: "Все категории",
  },
]

export function FeaturedDestinations() {
  return (
    <section id="disciplines" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
            Наши <span className="font-semibold text-primary">дисциплины</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Мотоциклетный и квадроциклетный спорт во всём многообразии — найди свою дисциплину и стань частью федерации
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {disciplines.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 bg-card hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />

                {/* Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <Icon name="Tag" size={14} className="text-primary" />
                  <span className="text-xs font-medium">{item.category}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm font-semibold text-primary">{item.level}</span>
                  <Button variant="ghost" size="sm" className="group/btn text-foreground hover:text-primary">
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Button variant="outline" size="lg" className="rounded-full px-8 border-2 bg-transparent">
            Все дисциплины
          </Button>
        </div>
      </div>
    </section>
  )
}
