'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Clock, MapPin } from 'lucide-react';
import CTAButton from '../ui/CTAButton';
import AnimatedSection from '../ui/AnimatedSection';

export default function FinalCTASection() {
  const urgencyFeatures = [
    {
      icon: <Clock className="w-5 h-5" />,
      text: "Entrega em até 30 minutos"
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      text: "Atendimento via WhatsApp"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      text: "Entregamos na região CSA"
    }
  ];

  const floatingAnimation = {
    y: [0, -15, 0],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: [0.4, 0, 0.2, 1] as const
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: [0.4, 0, 0.2, 1] as const
    }
  };

  return (
    <section className="relative py-20 bg-gradient-primary overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-acai-orange-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <AnimatedSection animation="slideRight">
            <div className="text-white">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/30"
              >
                <MessageCircle size={16} />
                <span className="font-medium">Peça Agora</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold mb-6 leading-tight"
              >
                Está com Água na Boca?
                <br />
                <span className="text-acai-light-orange-300">
                  Faça Seu Pedido Agora!
                </span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed"
              >
                Não perca mais tempo! Seu açaí fresquinho, cremoso e com os 
                acompanhamentos que você mais ama está a um clique de distância.
              </motion.p>

              {/* Features List */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="space-y-3 mb-8"
              >
                {urgencyFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="flex items-center gap-3 text-white/90"
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm">
                      {feature.icon}
                    </div>
                    <span className="font-medium">{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.div animate={pulseAnimation}>
                  <CTAButton
                    text="Quero Meu Açaí Agora!"
                    product="Açaí Blessed - Pedido Final"
                    variant="secondary"
                    className="text-lg px-8 py-4 bg-white text-acai-purple-700 hover:bg-acai-cream-100 shadow-2xl"
                  />
                </motion.div>
                
                <motion.a
                  href="tel:11974440966"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-acai-purple-700 transition-all duration-300"
                >
                  📞 (11) 97444-0966
                </motion.a>
              </motion.div>

              {/* Social Proof */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="mt-8 pt-6 border-t border-white/20"
              >
                <p className="text-white/80 text-sm">
                  ⭐ Mais de 1000 clientes satisfeitos • 4.9/5 estrelas
                </p>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Visual Element */}
          <AnimatedSection animation="slideLeft">
            <div className="relative">
              <motion.div
                animate={floatingAnimation}
                className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">🍇</div>
                  <h3 className="text-2xl font-poppins font-bold text-white mb-2">
                    Açaí Blessed
                  </h3>
                  <p className="text-white/80 mb-6">
                    O melhor açaí da região, agora mais perto de você!
                  </p>
                  
                  <div className="bg-white/20 rounded-xl p-4 mb-4">
                    <div className="text-white/90 text-sm mb-2">Horário de funcionamento:</div>
                    <div className="text-white font-semibold">
                      Seg-Dom: 14:00 - 22:00
                    </div>
                  </div>

                  <div className="text-acai-light-orange-300 font-medium">
                    @acaiblessedcsa
                  </div>
                </div>

                {/* Floating Emojis */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, -15, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 0.5
                  }}
                  className="absolute -top-4 -right-4 bg-white/20 backdrop-blur-sm rounded-full p-3"
                >
                  <span className="text-2xl">🥥</span>
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 15, 0],
                    rotate: [0, 10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: 1
                  }}
                  className="absolute -bottom-2 -left-4 bg-white/20 backdrop-blur-sm rounded-full p-3"
                >
                  <span className="text-2xl">🍓</span>
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    x: [0, 10, 0],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    delay: 1.5
                  }}
                  className="absolute top-1/2 -left-6 bg-white/20 backdrop-blur-sm rounded-full p-2"
                >
                  <span className="text-xl">🍌</span>
                </motion.div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}