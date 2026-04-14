import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const events = [
  {
    title: "Краевой чемпионат по мотокроссу",
    date: "Лето 2025",
    participants: "до 100 участников",
    rating: "5.0",
    reviews: "Открыта регистрация",
    image: "https://cdn.poehali.dev/projects/00b47664-9b61-477f-b290-1cdc7c6cfd77/files/0a8d8284-fc12-437c-a6d4-4c8c5f15165f.jpg",
    highlights: ["Мотокросс", "MX1", "MX2", "Юниоры"],
    price: "Участие бесплатно",
  },
  {
    title: "Открытый кубок по квадроциклам",
    date: "Осень 2025",
    participants: "до 60 участников",
    rating: "4.9",
    reviews: "Скоро открытие",
    image: "https://cdn.poehali.dev/projects/00b47664-9b61-477f-b290-1cdc7c6cfd77/files/07cdd719-2797-44ee-b865-635ac72eab64.jpg",
    highlights: ["ATV Sport", "ATV Utility", "Юниоры", "Открытый класс"],
    price: "Взнос уточняется",
  },
  {
    title: "Эндуро-экспедиция по Кубани",
    date: "Весна 2025",
    participants: "до 40 участников",
    rating: "4.8",
    reviews: "Готовится",
    image: "https://cdn.poehali.dev/projects/00b47664-9b61-477f-b290-1cdc7c6cfd77/files/2d8f4577-8cc9-49e6-a403-334e223ff018.jpg",
    highlights: ["Эндуро", "Геленджик", "Горная трасса", "2 дня"],
    price: "Регистрация открыта",
  },
]

export function PopularPackages() {
  return (
    <section id="events" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
            Ближайшие <span className="font-semibold text-primary">соревнования</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Официальные старты под эгидой ФМКСК — зарегистрируйся и прими участие в чемпионате
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 bg-card hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />

                {/* Status Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <Icon name="Star" size={14} className="fill-primary text-primary" />
                  <span className="text-xs font-semibold">{event.rating}</span>
                  <span className="text-xs text-muted-foreground">· {event.reviews}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">{event.title}</h3>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1.5">
                      <Icon name="Calendar" size={16} />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Icon name="Users" size={16} />
                      <span>{event.participants}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {event.highlights.map((highlight, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-muted rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Участие</div>
                    <div className="text-lg font-semibold text-primary">{event.price}</div>
                  </div>
                  <Button className="bg-primary text-white hover:bg-primary/90 rounded-full">
                    Зарегистрироваться
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
