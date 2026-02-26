import { useState } from 'react';
import { Laptop, Monitor, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export function ComparisonHero() {
  const [laptopVotes, setLaptopVotes] = useState(4567);
  const [pcVotes, setPcVotes] = useState(5234);
  const [userVote, setUserVote] = useState<'laptop' | 'pc' | null>(null);

  const totalVotes = laptopVotes + pcVotes;
  const laptopPercentage = ((laptopVotes / totalVotes) * 100).toFixed(1);
  const pcPercentage = ((pcVotes / totalVotes) * 100).toFixed(1);

  const handleVote = (choice: 'laptop' | 'pc') => {
    if (userVote) return; // Already voted
    
    setUserVote(choice);
    if (choice === 'laptop') {
      setLaptopVotes(prev => prev + 1);
    } else {
      setPcVotes(prev => prev + 1);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Ноутбук vs Стационарный ПК
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600"
          >
            Великий спор техномира. Сделайте свой выбор!
          </motion.p>
        </div>

        {/* Voting Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            onClick={() => handleVote('laptop')}
            className={`bg-white rounded-2xl shadow-xl p-8 cursor-pointer transition-all duration-300 ${
              userVote === 'laptop' 
                ? 'ring-4 ring-blue-500 scale-105' 
                : userVote === null 
                ? 'hover:shadow-2xl hover:scale-105' 
                : 'opacity-60'
            }`}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                <Laptop className="w-10 h-10 text-blue-600" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-center mb-4">Ноутбук</h2>
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">{laptopPercentage}%</div>
              <div className="text-gray-600">{laptopVotes.toLocaleString()} голосов</div>
            </div>
            {!userVote && (
              <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors">
                Голосовать за ноутбук
              </button>
            )}
            {userVote === 'laptop' && (
              <div className="w-full py-3 bg-green-500 text-white rounded-lg font-semibold text-center">
                ✓ Вы проголосовали
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            onClick={() => handleVote('pc')}
            className={`bg-white rounded-2xl shadow-xl p-8 cursor-pointer transition-all duration-300 ${
              userVote === 'pc' 
                ? 'ring-4 ring-purple-500 scale-105' 
                : userVote === null 
                ? 'hover:shadow-2xl hover:scale-105' 
                : 'opacity-60'
            }`}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center">
                <Monitor className="w-10 h-10 text-purple-600" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-center mb-4">Стационарный ПК</h2>
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-purple-600 mb-2">{pcPercentage}%</div>
              <div className="text-gray-600">{pcVotes.toLocaleString()} голосов</div>
            </div>
            {!userVote && (
              <button className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors">
                Голосовать за ПК
              </button>
            )}
            {userVote === 'pc' && (
              <div className="w-full py-3 bg-green-500 text-white rounded-lg font-semibold text-center">
                ✓ Вы проголосовали
              </div>
            )}
          </motion.div>
        </div>

        {/* Vote Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <div className="flex items-center gap-4 mb-4">
            <TrendingUp className="w-6 h-6 text-gray-600" />
            <span className="font-semibold text-gray-700">Результаты голосования</span>
          </div>
          <div className="relative h-12 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${laptopPercentage}%` }}
              transition={{ duration: 1, delay: 0.7 }}
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-end pr-4"
            >
              {parseFloat(laptopPercentage) > 15 && (
                <span className="text-white font-bold">{laptopPercentage}%</span>
              )}
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${pcPercentage}%` }}
              transition={{ duration: 1, delay: 0.7 }}
              className="absolute right-0 top-0 h-full bg-gradient-to-r from-purple-600 to-purple-500 flex items-center justify-start pl-4"
            >
              {parseFloat(pcPercentage) > 15 && (
                <span className="text-white font-bold">{pcPercentage}%</span>
              )}
            </motion.div>
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>Ноутбук</span>
            <span>ПК</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
