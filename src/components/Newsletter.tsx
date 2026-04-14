import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Icon from "@/components/ui/icon"

export function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  return (
    <section className="py-32 bg-primary text-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-balance text-white">
              Будьте <span className="font-semibold">в курсе событий</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto text-balance leading-relaxed">
              Подпишитесь на новости ФМКСК — анонсы соревнований, результаты чемпионатов и актуальная информация для спортсменов
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-3">
              <Input
                type="email"
                placeholder="Ваш email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 rounded-full border-2 border-white/30 bg-white/10 text-white placeholder:text-white/50 px-6 focus:border-white"
              />
              <Button
                type="submit"
                size="lg"
                className="bg-white text-primary hover:bg-white/90 rounded-full px-6 shrink-0 font-semibold"
              >
                <Icon name="Send" size={20} />
              </Button>
            </div>
          </form>

          <p className="text-xs text-white/60">
            Подписываясь, вы соглашаетесь с Политикой конфиденциальности ФМКСК
          </p>
        </div>
      </div>
    </section>
  )
}
