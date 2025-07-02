import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function CreativeHero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-creative-purple via-creative-magenta to-creative-orange animate-gradient-x relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-float">
          <h1 className="font-montserrat font-bold text-5xl md:text-7xl text-white mb-6 leading-tight">
            Создаем
            <span className="block bg-gradient-to-r from-creative-orange-light via-white to-creative-purple-light bg-clip-text text-transparent">
              Веб-Магию
            </span>
          </h1>
        </div>

        <p className="font-open-sans text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Превращаем ваши идеи в потрясающие веб-сайты. Креативный подход,
          современные технологии, впечатляющие результаты.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-white text-creative-purple hover:bg-creative-purple-light hover:text-creative-purple font-montserrat font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
          >
            <Icon name="Sparkles" className="mr-2" size={20} />
            Смотреть портфолио
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-creative-purple font-montserrat font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
          >
            <Icon name="MessageCircle" className="mr-2" size={20} />
            Обсудить проект
          </Button>
        </div>
      </div>

      {/* Декоративные элементы */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-creative-orange-light rounded-full opacity-60 animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-16 h-16 bg-creative-purple-light rounded-full opacity-60 animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/2 left-20 w-12 h-12 bg-white/30 rounded-full animate-float"
        style={{ animationDelay: "4s" }}
      ></div>
    </section>
  );
}
