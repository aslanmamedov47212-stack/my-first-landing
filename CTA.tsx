import { Sparkles } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <Sparkles className="w-16 h-16" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Готовы начать свой путь к здоровью?
        </h2>
        <p className="text-xl mb-8 text-blue-100">
          Присоединяйтесь к тысячам людей, которые уже изменили свою жизнь. Первая неделя — бесплатно!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-semibold transition-colors">
            Начать прямо сейчас
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white/10 text-white rounded-lg font-semibold transition-colors">
            Связаться с нами
          </button>
        </div>
      </div>
    </section>
  );
}
