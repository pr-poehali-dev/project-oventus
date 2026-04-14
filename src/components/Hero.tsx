import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-zinc-900 to-zinc-800">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.poehali.dev/projects/00b47664-9b61-477f-b290-1cdc7c6cfd77/files/b4a21e16-5ff0-47db-8167-c778ee6c26be.jpg"
          alt="Мотоциклетный спорт"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-zinc-900/90" />
      </div>

      {/* Red accent line top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-primary z-20" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center py-32">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
            <Icon name="MapPin" size={14} className="text-primary" />
            <span className="text-white/90">Краснодарский край · с 2023 года</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-balance text-white">
            Федерация
            <span className="block font-bold mt-2 text-primary">мотоспорта</span>
            <span className="block text-3xl md:text-4xl font-light mt-3 text-white/80">Краснодарского края</span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto text-balance leading-relaxed">
            Развиваем мотоциклетный и квадроциклетный спорт на Кубани. Объединяем спортсменов, проводим соревнования, поддерживаем чемпионов
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 rounded-full px-8 h-14 text-base group"
            >
              Вступить в федерацию
              <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base border-2 border-white/30 text-white hover:bg-white/10 bg-transparent">
              Ближайшие соревнования
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 md:gap-16 max-w-3xl mx-auto mt-24 pt-16 border-t border-white/20">
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-light text-white">2023</div>
            <div className="text-sm text-white/60">Год основания</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-light text-white">ОГРН</div>
            <div className="text-sm text-white/60">Официальная НКО</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-light text-white">Кубань</div>
            <div className="text-sm text-white/60">Регион деятельности</div>
          </div>
        </div>
      </div>
    </section>
  )
}
