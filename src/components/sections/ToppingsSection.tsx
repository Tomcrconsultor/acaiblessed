'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import CTAButton from '../ui/CTAButton';

export default function ToppingsSection() {
  const includedToppings = [
    { name: "Chocolate", emoji: "🍫" },
    { name: "Caramelo", emoji: "🍯" },
    { name: "Leite Condensado", emoji: "🥛" },
    { name: "Leite em Pó", emoji: "🥛" },
    { name: "Paçoca", emoji: "🥜" },
    { name: "Granola", emoji: "🌾" },
    { name: "Sucrilhos", emoji: "🥣" },
    { name: "Guarilhos", emoji: "🥣" },
    { name: "Granulado", emoji: "🍭" },
  ];

  const premiumToppings = [
    { name: "Nutella", emoji: "🍫", extraPrice: 2 },
    { name: "Confete Especial", emoji: "🎉", extraPrice: 38 }, // Total R$40 - R$2 = R$38 extra
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="acompanhamentos" className="py-20 bg-gradient-to-br from-acai-purple-50 to-acai-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedSection animation="slideUp" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-6 shadow-lg">
            <Sparkles className="text-acai-orange-500" size={20} />
            <span className="text-acai-purple-700 font-semibold">Acompanhamentos Deliciosos</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-acai-purple-700 mb-4">
            Monte Seu Açaí do Jeito que Você Ama
          </h2>
          
          <p className="text-lg text-acai-purple-600 max-w-3xl mx-auto">
            Todos os nossos açaís já incluem <strong>5 acompanhamentos à sua escolha</strong>. 
            Quer mais? Adicione quantos quiser por apenas R$ 2,00 cada!
          </p>
        </AnimatedSection>

        {/* Included Toppings */}
        <AnimatedSection animation="slideUp" className="mb-16">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-acai-cream-200">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full mb-4">
                <span className="text-green-600 font-semibold">✓ Inclusos no seu açaí</span>
              </div>
              <h3 className="text-2xl font-poppins font-bold text-acai-purple-700 mb-2">
                Acompanhamentos Inclusos
              </h3>
              <p className="text-acai-purple-600">
                Escolha 5 entre essas opções deliciosas
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
            >
              {includedToppings.map((topping, index) => (
                <motion.div
                  key={topping.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-acai-cream-100 to-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all duration-300 border border-acai-cream-200"
                >
                  <div className="text-3xl mb-2">{topping.emoji}</div>
                  <div className="font-medium text-acai-purple-700 text-sm">
                    {topping.name}
                  </div>
                  <div className="text-green-600 text-xs font-semibold mt-1">
                    Incluso
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Premium Toppings */}
        <AnimatedSection animation="slideUp" className="mb-12">
          <div className="bg-gradient-to-br from-acai-orange-100 to-acai-light-orange-100 rounded-3xl p-8 shadow-xl border border-acai-orange-200">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-acai-orange-500 text-white px-4 py-2 rounded-full mb-4">
                <Sparkles size={16} />
                <span className="font-semibold">Opções Premium</span>
              </div>
              <h3 className="text-2xl font-poppins font-bold text-acai-purple-700 mb-2">
                Acompanhamentos Especiais
              </h3>
              <p className="text-acai-purple-600">
                Transforme seu açaí em uma experiência única
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto"
            >
              {premiumToppings.map((topping, index) => (
                <motion.div
                  key={topping.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -3 }}
                  className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-acai-orange-300"
                >
                  <div className="text-4xl mb-3">{topping.emoji}</div>
                  <div className="font-bold text-acai-purple-700 text-lg mb-2">
                    {topping.name}
                  </div>
                  <div className="text-acai-orange-600 text-lg font-semibold mb-3">
                    + R$ {topping.extraPrice.toFixed(2)}
                  </div>
                  {topping.name.includes('Confete') && (
                    <div className="text-sm text-acai-purple-600 bg-acai-purple-50 rounded-lg p-2">
                      Uma experiência colorida e única!
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Call to Action */}
        <AnimatedSection animation="slideUp" className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-poppins font-bold text-acai-purple-700 mb-4">
              Pronto para Montar Seu Açaí Perfeito?
            </h3>
            <p className="text-acai-purple-600 mb-6">
              Entre em contato conosco e conte quais acompanhamentos você quer no seu açaí!
            </p>
            <CTAButton
              text="Montar Meu Açaí Agora"
              product="Açaí personalizado com acompanhamentos"
              variant="primary"
              className="text-lg px-8 py-4"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}