import { useState } from "react";
import Icon from "@/components/ui/icon";

const contactBtns = [
  { label: "Стать участником", action: "member" },
  { label: "Стать партнёром", action: "partner" },
  { label: "Подать заявку на мероприятие", action: "event" },
  { label: "Задать вопрос", action: "question" },
  { label: "Связаться по проектам", action: "projects" },
];

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    agree: false,
    subject: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubject = (action: string) => {
    const labels: Record<string, string> = {
      member: "Стать участником",
      partner: "Стать партнёром",
      event: "Заявка на мероприятие",
      question: "Вопрос",
      projects: "Связаться по проектам",
    };
    setFormData((p) => ({ ...p, subject: labels[action] || "", message: labels[action] + ": " }));
    const el = document.querySelector("#contact-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agree) return;
    setSent(true);
  };

  return (
    <section id="contacts" className="bg-black py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-4">
          <span className="text-red-500 text-xs uppercase tracking-[0.2em] font-semibold">
            Связь
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black uppercase text-white mb-12">
          КОНТАКТЫ И
          <br />ОБРАТНАЯ СВЯЗЬ
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 bg-red-600/15 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon name="MapPin" size={16} className="text-red-400" />
                </div>
                <div>
                  <div className="text-white/40 text-xs uppercase tracking-wide mb-1">
                    Юридический адрес
                  </div>
                  <div className="text-white/80 text-sm leading-relaxed">
                    353460, Россия, Краснодарский край, г. Геленджик,
                    <br />
                    ул. Тельмана, д. 146, помещ. 3
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 bg-red-600/15 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon name="Building" size={16} className="text-red-400" />
                </div>
                <div>
                  <div className="text-white/40 text-xs uppercase tracking-wide mb-1">
                    Фактический адрес
                  </div>
                  <div className="text-white/80 text-sm">
                    Краснодарский край, Г.О. Город-курорт Геленджик
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 bg-red-600/15 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon name="Mail" size={16} className="text-red-400" />
                </div>
                <div>
                  <div className="text-white/40 text-xs uppercase tracking-wide mb-1">
                    E-mail
                  </div>
                  <a
                    href="mailto:accounting-dep@groupgrand.ru"
                    className="text-white/80 text-sm hover:text-red-400 transition-colors"
                  >
                    accounting-dep@groupgrand.ru
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 bg-red-600/15 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon name="Phone" size={16} className="text-red-400" />
                </div>
                <div>
                  <div className="text-white/40 text-xs uppercase tracking-wide mb-1">
                    Телефон
                  </div>
                  <a
                    href="tel:+79384444529"
                    className="text-white/80 text-sm hover:text-red-400 transition-colors"
                  >
                    8-938-4444-529
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 bg-red-600/15 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon name="User" size={16} className="text-red-400" />
                </div>
                <div>
                  <div className="text-white/40 text-xs uppercase tracking-wide mb-1">
                    Президент
                  </div>
                  <div className="text-white/80 text-sm">
                    Петросян Альберт Тигранович
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-white/8 bg-white/[0.02] p-5 mb-8">
              <div className="text-white/40 text-xs uppercase tracking-widest mb-3">Реквизиты</div>
              <div className="space-y-1.5 text-sm text-white/55">
                <div>ОГРН: 1232300040950 от 14.07.2023</div>
                <div>ИНН: 2304081083</div>
                <div>КПП: 230401001</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {contactBtns.map((b) => (
                <button
                  key={b.action}
                  onClick={() => handleSubject(b.action)}
                  className="border border-white/15 hover:border-red-600/50 text-white/60 hover:text-white text-xs py-2 px-4 uppercase tracking-wide transition-colors hover:bg-red-600/10"
                >
                  {b.label}
                </button>
              ))}
            </div>
          </div>

          <div id="contact-form">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-6 bg-red-500" />
              <h3 className="text-white font-black uppercase text-sm tracking-widest">
                Написать нам
              </h3>
            </div>

            {sent ? (
              <div className="border border-red-600/30 bg-red-950/20 p-8 text-center">
                <Icon name="CheckCircle" size={40} className="text-red-400 mx-auto mb-4" />
                <div className="text-white font-bold text-lg mb-2">Заявка отправлена</div>
                <div className="text-white/50 text-sm">
                  Мы свяжемся с вами в ближайшее время.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Имя"
                  value={formData.name}
                  onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                  required
                  className="w-full bg-white/[0.04] border border-white/10 focus:border-red-600/50 text-white placeholder-white/30 px-4 py-3 text-sm outline-none transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
                  className="w-full bg-white/[0.04] border border-white/10 focus:border-red-600/50 text-white placeholder-white/30 px-4 py-3 text-sm outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                  required
                  className="w-full bg-white/[0.04] border border-white/10 focus:border-red-600/50 text-white placeholder-white/30 px-4 py-3 text-sm outline-none transition-colors"
                />
                <textarea
                  placeholder="Сообщение"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                  required
                  className="w-full bg-white/[0.04] border border-white/10 focus:border-red-600/50 text-white placeholder-white/30 px-4 py-3 text-sm outline-none transition-colors resize-none"
                />
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div
                    className={`w-4 h-4 border shrink-0 mt-0.5 flex items-center justify-center transition-colors ${
                      formData.agree
                        ? "bg-red-600 border-red-600"
                        : "border-white/25 group-hover:border-white/50"
                    }`}
                    onClick={() => setFormData((p) => ({ ...p, agree: !p.agree }))}
                  >
                    {formData.agree && <Icon name="Check" size={10} className="text-white" />}
                  </div>
                  <span className="text-white/45 text-xs leading-relaxed">
                    Я согласен на обработку персональных данных в соответствии с Политикой
                    конфиденциальности
                  </span>
                </label>
                <button
                  type="submit"
                  disabled={!formData.agree}
                  className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-900/50 disabled:cursor-not-allowed text-white font-bold py-4 text-sm uppercase tracking-widest transition-colors"
                >
                  Отправить заявку
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
