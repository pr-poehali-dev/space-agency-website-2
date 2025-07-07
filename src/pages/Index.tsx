import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Заявка отправлена:", formData);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-hidden relative font-roboto">
      {/* Animated Stars Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Rocket" size={32} className="text-blue-400" />
              <h1 className="text-2xl font-bold font-exo bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                КОСМОС АГЕНТСТВО
              </h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#about"
                className="hover:text-blue-400 transition-colors"
              >
                О нас
              </a>
              <a
                href="#services"
                className="hover:text-blue-400 transition-colors"
              >
                Услуги
              </a>
              <a
                href="#achievements"
                className="hover:text-blue-400 transition-colors"
              >
                Достижения
              </a>
              <a
                href="#contact"
                className="hover:text-blue-400 transition-colors"
              >
                Контакты
              </a>
            </div>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
              Заказать запуск
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold font-exo mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-fade-in">
              ПОКОРЯЕМ КОСМОС
            </h2>
            <p
              className="text-xl md:text-2xl text-slate-300 mb-8 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              Ваш надежный партнер в космических технологиях. Запуски спутников,
              исследования и инновации.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-lg px-8 py-4 rounded-full shadow-lg shadow-blue-500/25"
              >
                <Icon name="Rocket" className="mr-2" />
                Запустить проект
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 text-lg px-8 py-4 rounded-full"
              >
                <Icon name="Play" className="mr-2" />
                Смотреть видео
              </Button>
            </div>
          </div>
        </div>
        {/* Floating holographic elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse" />
        <div
          className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              О НАС
            </h3>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              Мы — команда экспертов, которая делает космос доступным. Более 10
              лет опыта в космических технологиях, сотни успешных запусков и
              постоянное стремление к инновациям.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "Target",
                  title: "Точность",
                  desc: "99.7% успешных запусков",
                },
                {
                  icon: "Shield",
                  title: "Надежность",
                  desc: "Сертифицированные технологии",
                },
                {
                  icon: "Zap",
                  title: "Инновации",
                  desc: "Передовые разработки",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Icon name={item.icon} size={24} className="text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-blue-400">
                    {item.title}
                  </h4>
                  <p className="text-slate-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            НАШИ УСЛУГИ
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "Satellite",
                title: "Запуск спутников",
                desc: "Выведение на орбиту коммерческих и научных спутников",
                price: "от 2M$",
              },
              {
                icon: "Telescope",
                title: "Исследования",
                desc: "Космические миссии и научные эксперименты",
                price: "от 5M$",
              },
              {
                icon: "Cpu",
                title: "Технологии",
                desc: "Разработка космических систем и компонентов",
                price: "от 1M$",
              },
              {
                icon: "Users",
                title: "Консалтинг",
                desc: "Экспертная поддержка космических проектов",
                price: "от 50K$",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 group"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Icon
                      name={service.icon}
                      size={24}
                      className="text-white"
                    />
                  </div>
                  <CardTitle className="text-xl text-blue-400">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-slate-300 mb-4">{service.desc}</p>
                  <div className="text-2xl font-bold text-purple-400 mb-4">
                    {service.price}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                    Узнать больше
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 relative">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            ДОСТИЖЕНИЯ
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "247", label: "Успешных запусков", icon: "Rocket" },
              { number: "15+", label: "Лет опыта", icon: "Calendar" },
              { number: "50+", label: "Стран-партнеров", icon: "Globe" },
              { number: "99.7%", label: "Надежность", icon: "Award" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Icon name={stat.icon} size={24} className="text-white" />
                </div>
                <div className="text-4xl font-bold text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              СВЯЗАТЬСЯ С НАМИ
            </h3>
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-center text-2xl text-blue-400">
                  Запросить консультацию
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Расскажите о вашем проекте"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={4}
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-lg py-3"
                  >
                    <Icon name="Send" className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Rocket" size={24} className="text-blue-400" />
                <h4 className="text-xl font-bold">КОСМОС АГЕНТСТВО</h4>
              </div>
              <p className="text-slate-400">
                Ваш надежный партнер в освоении космоса
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400">
                Контакты
              </h4>
              <div className="space-y-2 text-slate-400">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@space-agency.ru</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, Космический проспект, 1</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400">
                Социальные сети
              </h4>
              <div className="flex space-x-4">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-slate-600 hover:bg-slate-800"
                >
                  <Icon name="MessageCircle" size={16} />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-slate-600 hover:bg-slate-800"
                >
                  <Icon name="Send" size={16} />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-400">
            <p>© 2024 Космос Агентство. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
