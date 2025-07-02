import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const portfolioItems = [
  {
    title: "E-commerce для модного бренда",
    category: "Интернет-магазин",
    image: "/placeholder.svg",
    tech: ["React", "TypeScript", "Tailwind"],
    gradient: "from-creative-purple to-creative-magenta",
  },
  {
    title: "Корпоративный сайт IT-компании",
    category: "Корпоративный сайт",
    image: "/placeholder.svg",
    tech: ["Next.js", "Framer Motion", "Prisma"],
    gradient: "from-creative-magenta to-creative-orange",
  },
  {
    title: "Лендинг стартапа",
    category: "Landing Page",
    image: "/placeholder.svg",
    tech: ["Vue.js", "Nuxt", "GSAP"],
    gradient: "from-creative-orange to-creative-purple",
  },
];

export default function PortfolioSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-gray-800 mb-6">
            Наши кейсы
          </h2>
          <p className="font-open-sans text-lg text-gray-600 max-w-2xl mx-auto">
            Каждый проект — это уникальная история успеха наших клиентов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolioItems.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
            >
              <div
                className={`h-48 bg-gradient-to-br ${item.gradient} relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Icon
                      name="Image"
                      size={48}
                      className="mx-auto mb-2 opacity-60"
                    />
                    <p className="font-open-sans text-sm opacity-80">
                      Превью проекта
                    </p>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full font-open-sans text-sm">
                    {item.category}
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="font-montserrat font-semibold text-xl text-gray-800 mb-3">
                  {item.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-creative-purple-light text-creative-purple px-2 py-1 rounded-md font-open-sans text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="w-full group-hover:bg-creative-purple group-hover:text-white group-hover:border-creative-purple transition-all duration-300"
                >
                  <Icon name="ExternalLink" className="mr-2" size={16} />
                  Посмотреть проект
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-creative-purple hover:bg-creative-magenta font-montserrat font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
          >
            <Icon name="Grid" className="mr-2" size={20} />
            Смотреть все проекты
          </Button>
        </div>
      </div>
    </section>
  );
}
