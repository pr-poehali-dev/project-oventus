import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-xl border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Bike" size={22} className="text-white" />
            </div>
            <div>
              <div className="text-lg font-bold tracking-tight leading-none">ФМКСК</div>
              <div className="text-xs text-muted-foreground leading-none mt-0.5">Федерация мотоспорта</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <a
              href="#disciplines"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Дисциплины
            </a>
            <a
              href="#events"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Соревнования
            </a>
            <a href="#about" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
              О федерации
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Контакты
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
              Вступить в федерацию
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <Icon name="X" size={24} /> : <Icon name="Menu" size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="px-6 py-6 space-y-4">
            <a href="#disciplines" className="block text-base font-medium text-foreground/70 hover:text-foreground">
              Дисциплины
            </a>
            <a href="#events" className="block text-base font-medium text-foreground/70 hover:text-foreground">
              Соревнования
            </a>
            <a href="#about" className="block text-base font-medium text-foreground/70 hover:text-foreground">
              О федерации
            </a>
            <a href="#contact" className="block text-base font-medium text-foreground/70 hover:text-foreground">
              Контакты
            </a>
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
              Вступить в федерацию
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
