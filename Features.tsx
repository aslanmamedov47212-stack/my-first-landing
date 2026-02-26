import { Dumbbell, Apple, TrendingUp, Users } from 'lucide-react';

const features = [
  {
    icon: Dumbbell,
    title: 'Персональные тренировки',
    description: 'Индивидуальные программы тренировок, адаптированные под ваши цели и уровень подготовки',
  },
  {
    icon: Apple,
    title: 'Планы питания',
    description: 'Сбалансированные рационы от профессиональных диетологов для достижения лучших результатов',
  },
  {
    icon: TrendingUp,
    title: 'Отслеживание прогресса',
    description: 'Детальная аналитика вашего прогресса с графиками и статистикой тренировок',
  },
  {
    icon: Users,
    title: 'Сообщество',
    description: 'Присоединяйтесь к тысячам людей, которые уже достигли своих целей вместе с нами',
  },
];

export function Features() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Всё для достижения ваших целей
          </h2>
          <p className="text-xl text-gray-600">
            Комплексный подход к здоровью и фитнесу
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
