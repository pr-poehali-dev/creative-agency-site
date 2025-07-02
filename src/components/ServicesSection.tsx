import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "Monitor",
    title: "Веб-дизайн",
    description:
      "Создаем уникальные и современные дизайны сайтов, которые привлекают внимание и конвертируют посетителей в клиентов.",
  },
  {
    icon: "Code",
    title: "Разработка",
    description:
      "Программируем быстрые, адаптивные и SEO-оптимизированные сайты на современных технологиях.",
  },
  {
    icon: "Smartphone",
    title: "Мобильная адаптация",
    description:
      "Обеспечиваем идеальное отображение сайта на всех устройствах — от смартфонов до больших экранов.",
  },
  {
    icon: "Zap",
    title: "Оптимизация",
    description:
      "Ускоряем загрузку сайта и улучшаем пользовательский опыт для максимальной эффективности.",
  },
  {
    icon: "Palette",
    title: "Брендинг",
    description:
      "Создаем визуальную айдентику, которая отражает уникальность вашего бренда и выделяет среди конкурентов.",
  },
  {
    icon: "Headphones",
    title: "Поддержка 24/7",
    description:
      "Обеспечиваем круглосуточную техническую поддержку и сопровождение ваших проектов.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-creative-purple-light/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-gray-800 mb-6">
            Наши услуги
          </h2>
          <p className="font-open-sans text-lg text-gray-600 max-w-2xl mx-auto">
            Полный спектр услуг для создания успешного веб-присутствия вашего
            бизнеса
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm"
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-creative-purple to-creative-magenta rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon
                    name={service.icon as any}
                    size={32}
                    className="text-white"
                  />
                </div>
                <CardTitle className="font-montserrat font-semibold text-xl text-gray-800 mb-2">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-open-sans text-gray-600 text-center leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
