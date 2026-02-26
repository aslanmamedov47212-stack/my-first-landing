import { Check, X } from 'lucide-react';

const comparisons = [
  {
    category: 'Производительность',
    laptop: {
      pros: ['Достаточно для большинства задач', 'Современные процессоры'],
      cons: ['Ограниченное охлаждение', 'Нельзя апгрейдить процессор'],
      rating: 7,
    },
    pc: {
      pros: ['Максимальная мощность', 'Лучшее охлаждение', 'Полный апгрейд'],
      cons: ['Требует места'],
      rating: 10,
    },
  },
  {
    category: 'Портативность',
    laptop: {
      pros: ['Работа в любом месте', 'Встроенная батарея', 'Компактный'],
      cons: ['Ограниченное время работы'],
      rating: 10,
    },
    pc: {
      pros: [],
      cons: ['Стационарный', 'Требует отдельный монитор', 'Много проводов'],
      rating: 2,
    },
  },
  {
    category: 'Цена/качество',
    laptop: {
      pros: ['Всё в одном корпусе'],
      cons: ['Дороже за ту же мощность', 'Дорогой ремонт'],
      rating: 6,
    },
    pc: {
      pros: ['Больше мощности за те же деньги', 'Дешевле апгрейд'],
      cons: ['Нужны периферия и монитор'],
      rating: 9,
    },
  },
  {
    category: 'Апгрейд и ремонт',
    laptop: {
      pros: ['Гарантия производителя'],
      cons: ['Сложно апгрейдить', 'Дорогие запчасти', 'Часто нужен сервис'],
      rating: 4,
    },
    pc: {
      pros: ['Легко апгрейдить', 'Доступные комплектующие', 'Можно чинить самому'],
      cons: [],
      rating: 10,
    },
  },
  {
    category: 'Эргономика',
    laptop: {
      pros: ['Компактный'],
      cons: ['Маленький экран', 'Не лучшая клавиатура', 'Неудобная посадка'],
      rating: 5,
    },
    pc: {
      pros: ['Большой монитор', 'Удобная клавиатура', 'Правильная посадка'],
      cons: ['Занимает место'],
      rating: 9,
    },
  },
];

export function DetailedComparison() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Детальное сравнение
          </h2>
          <p className="text-xl text-gray-600">
            Разбираем по категориям: плюсы, минусы и оценка
          </p>
        </div>

        <div className="space-y-8">
          {comparisons.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
                <h3 className="text-2xl font-bold text-white">{item.category}</h3>
              </div>
              
              <div className="grid md:grid-cols-2 divide-x divide-gray-200">
                {/* Laptop */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-xl font-bold">Ноутбук</h4>
                    <div className="flex items-center gap-2">
                      <div className="text-2xl font-bold text-blue-600">{item.laptop.rating}</div>
                      <div className="text-gray-400">/10</div>
                    </div>
                  </div>
                  
                  {item.laptop.pros.length > 0 && (
                    <div className="mb-4">
                      <div className="font-semibold text-green-600 mb-2">Плюсы:</div>
                      <ul className="space-y-2">
                        {item.laptop.pros.map((pro, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {item.laptop.cons.length > 0 && (
                    <div>
                      <div className="font-semibold text-red-600 mb-2">Минусы:</div>
                      <ul className="space-y-2">
                        {item.laptop.cons.map((con, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {/* Rating bar */}
                  <div className="mt-6">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-600 rounded-full transition-all"
                        style={{ width: `${item.laptop.rating * 10}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* PC */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-xl font-bold">Стационарный ПК</h4>
                    <div className="flex items-center gap-2">
                      <div className="text-2xl font-bold text-purple-600">{item.pc.rating}</div>
                      <div className="text-gray-400">/10</div>
                    </div>
                  </div>
                  
                  {item.pc.pros.length > 0 && (
                    <div className="mb-4">
                      <div className="font-semibold text-green-600 mb-2">Плюсы:</div>
                      <ul className="space-y-2">
                        {item.pc.pros.map((pro, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {item.pc.cons.length > 0 && (
                    <div>
                      <div className="font-semibold text-red-600 mb-2">Минусы:</div>
                      <ul className="space-y-2">
                        {item.pc.cons.map((con, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {/* Rating bar */}
                  <div className="mt-6">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-purple-600 rounded-full transition-all"
                        style={{ width: `${item.pc.rating * 10}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
