import { useState } from 'react';
import { Calculator, Laptop, Monitor } from 'lucide-react';

type Answer = {
  question: string;
  laptopPoints: number;
  pcPoints: number;
};

const questions: Answer[] = [
  {
    question: 'Как часто вам нужно работать вне дома/офиса?',
    laptopPoints: 0,
    pcPoints: 0,
  },
  {
    question: 'Какие задачи вы выполняете чаще всего?',
    laptopPoints: 0,
    pcPoints: 0,
  },
  {
    question: 'Насколько важна максимальная производительность?',
    laptopPoints: 0,
    pcPoints: 0,
  },
  {
    question: 'Какой у вас бюджет?',
    laptopPoints: 0,
    pcPoints: 0,
  },
  {
    question: 'Планируете ли вы апгрейдить компьютер?',
    laptopPoints: 0,
    pcPoints: 0,
  },
];

const options = [
  [
    { text: 'Почти никогда, работаю дома', laptop: 0, pc: 3 },
    { text: 'Иногда, 1-2 раза в неделю', laptop: 2, pc: 1 },
    { text: 'Часто, работаю в разных местах', laptop: 3, pc: 0 },
  ],
  [
    { text: 'Веб-серфинг, документы, видео', laptop: 2, pc: 2 },
    { text: 'Фото/видео монтаж, дизайн', laptop: 1, pc: 3 },
    { text: 'Игры, 3D-рендеринг, стримы', laptop: 0, pc: 3 },
  ],
  [
    { text: 'Не важна, хватит среднего', laptop: 2, pc: 1 },
    { text: 'Важна, но не критична', laptop: 1, pc: 2 },
    { text: 'Критически важна', laptop: 0, pc: 3 },
  ],
  [
    { text: 'До 50 000 руб', laptop: 2, pc: 2 },
    { text: '50 000 - 100 000 руб', laptop: 2, pc: 3 },
    { text: 'Более 100 000 руб', laptop: 1, pc: 3 },
  ],
  [
    { text: 'Нет, буду покупать новый', laptop: 2, pc: 1 },
    { text: 'Возможно, через пару лет', laptop: 1, pc: 2 },
    { text: 'Да, планирую регулярный апгрейд', laptop: 0, pc: 3 },
  ],
];

export function ChoiceCalculator() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [laptopScore, setLaptopScore] = useState(0);
  const [pcScore, setPcScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (laptop: number, pc: number) => {
    setLaptopScore(prev => prev + laptop);
    setPcScore(prev => prev + pc);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setLaptopScore(0);
    setPcScore(0);
    setShowResult(false);
  };

  const getRecommendation = () => {
    if (laptopScore > pcScore) {
      return {
        device: 'Ноутбук',
        icon: Laptop,
        color: 'blue',
        description: 'Вам больше подойдёт ноутбук! Портативность и универсальность — ваш выбор.',
      };
    } else if (pcScore > laptopScore) {
      return {
        device: 'Стационарный ПК',
        icon: Monitor,
        color: 'purple',
        description: 'Вам больше подойдёт стационарный ПК! Мощность и возможности апгрейда — ваши приоритеты.',
      };
    } else {
      return {
        device: 'Оба варианта',
        icon: Calculator,
        color: 'green',
        description: 'Оба варианта одинаково хороши для вас! Выбирайте по ситуации.',
      };
    }
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calculator className="w-10 h-10 text-blue-600" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Калькулятор выбора
            </h2>
          </div>
          <p className="text-xl text-gray-600">
            Ответьте на вопросы и узнайте, что вам подходит больше
          </p>
        </div>

        {!showResult ? (
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-xl p-8">
            {/* Progress bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Вопрос {currentQuestion + 1} из {questions.length}</span>
                <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question */}
            <h3 className="text-2xl font-bold mb-6">
              {questions[currentQuestion].question}
            </h3>

            {/* Options */}
            <div className="space-y-4">
              {options[currentQuestion].map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.laptop, option.pc)}
                  className="w-full p-4 bg-white hover:bg-blue-50 border-2 border-gray-200 hover:border-blue-400 rounded-xl text-left transition-all duration-200 font-medium"
                >
                  {option.text}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-xl p-8 text-center">
            {/* Result */}
            <div className="mb-8">
              <div className={`w-24 h-24 mx-auto mb-6 bg-${getRecommendation().color}-100 rounded-full flex items-center justify-center`}>
                {(() => {
                  const Icon = getRecommendation().icon;
                  return <Icon className={`w-12 h-12 text-${getRecommendation().color}-600`} />;
                })()}
              </div>
              <h3 className="text-3xl font-bold mb-4">
                Ваш выбор: {getRecommendation().device}
              </h3>
              <p className="text-xl text-gray-600 mb-8">
                {getRecommendation().description}
              </p>
            </div>

            {/* Scores */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6">
                <div className="text-sm text-gray-600 mb-2">Ноутбук</div>
                <div className="text-4xl font-bold text-blue-600">{laptopScore}</div>
                <div className="text-sm text-gray-500">баллов</div>
              </div>
              <div className="bg-white rounded-xl p-6">
                <div className="text-sm text-gray-600 mb-2">ПК</div>
                <div className="text-4xl font-bold text-purple-600">{pcScore}</div>
                <div className="text-sm text-gray-500">баллов</div>
              </div>
            </div>

            <button
              onClick={resetQuiz}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold transition-all"
            >
              Пройти заново
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
