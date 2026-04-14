import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer id="contact" className="bg-zinc-900 text-white border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Bike" size={22} className="text-white" />
              </div>
              <div>
                <div className="text-lg font-bold leading-none">ФМКСК</div>
                <div className="text-xs text-white/50 leading-none mt-0.5">Краснодарский край</div>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              НКО «Краснодарская краевая общественная организация "Федерация мотоциклетного и квадроциклетного спорта"»
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/50 hover:text-primary transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-white/50 hover:text-primary transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
              <a href="https://vk.com" className="text-white/50 hover:text-primary transition-colors">
                <Icon name="MessageSquare" size={20} />
              </a>
            </div>
          </div>

          {/* Disciplines */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Дисциплины</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Мотокросс</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Квадроциклы (ATV)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Супермото</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Эндуро</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Суперкросс</a></li>
            </ul>
          </div>

          {/* Organization */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Организация</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><a href="#about" className="hover:text-white transition-colors">О федерации</a></li>
              <li><a href="#events" className="hover:text-white transition-colors">Соревнования</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Вступить в ФМКСК</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Документы</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Новости</a></li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Контакты</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-2">
                <Icon name="MapPin" size={14} className="text-primary mt-0.5 shrink-0" />
                <span>353460, Краснодарский Край, г. Геленджик, ул. Тельмана, д. 146, пом. 3</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={14} className="text-primary shrink-0" />
                <a href="tel:+79384444529" className="hover:text-white transition-colors">8-938-4444-529</a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={14} className="text-primary shrink-0" />
                <a href="mailto:accounting-dep@groupgrand.ru" className="hover:text-white transition-colors text-xs">accounting-dep@groupgrand.ru</a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="User" size={14} className="text-primary mt-0.5 shrink-0" />
                <span>Президент: Петросян Альберт Тигранович</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Requisites */}
        <div className="pt-8 border-t border-zinc-800 grid md:grid-cols-2 gap-4 text-xs text-white/40">
          <div className="space-y-1">
            <div>ИНН: 2304081083 · КПП: 230401001 · ОГРН: 1232300040950 от 14.07.2023</div>
            <div>Юридический адрес: 353460, Краснодарский Край, г. Геленджик, ул. Тельмана, д. 146, пом. 3</div>
          </div>
          <div className="md:text-right">
            <div>© 2025 НКО «ФМКСК». Все права защищены.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
