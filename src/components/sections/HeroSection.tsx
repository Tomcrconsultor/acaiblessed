'use client';

import { motion } from 'framer-motion';
import { Star, Clock, MapPin } from 'lucide-react';
import CTAButton from '../ui/CTAButton';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const
      }
    }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    rotate: [0, 5, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: [0.4, 0, 0.2, 1] as const
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-acai-orange-300/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-acai-purple-300/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-acai-light-orange-300/30 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-acai-orange-200"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-acai-purple-700 font-medium">
                Mais de 1000 clientes satisfeitos
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold leading-tight mb-6"
            >
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Açaí Blessed
              </span>
              <br />
              <span className="text-acai-purple-700">
                Monte do Seu Jeito
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-acai-purple-600 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              O melhor açaí da região, fresquinho e com os acompanhamentos que você mais ama!
            </motion.p>

            {/* Features */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8"
            >
              <div className="flex items-center gap-2 text-acai-purple-600">
                <Clock size={20} className="text-acai-orange-500" />
                <span className="font-medium">Entrega em 30min</span>
              </div>
              <div className="flex items-center gap-2 text-acai-purple-600">
                <MapPin size={20} className="text-acai-orange-500" />
                <span className="font-medium">Região CSA</span>
              </div>
              <div className="flex items-center gap-2 text-acai-purple-600">
                <Star size={20} className="text-acai-orange-500" />
                <span className="font-medium">+10 Acompanhamentos</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <CTAButton
                text="Faça Seu Pedido Agora"
                product="Açaí Blessed - Landing Page"
                variant="primary"
                className="text-lg px-8 py-4"
              />
              <motion.a
                href="#acai"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-acai-purple-600 text-acai-purple-600 font-semibold rounded-full hover:bg-acai-purple-50 transition-all duration-300"
              >
                Ver Cardápio
              </motion.a>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              variants={itemVariants}
              className="mt-8 pt-8 border-t border-acai-purple-200/30"
            >
              <p className="text-sm text-acai-purple-500 mb-4">
                Siga no Instagram para mais novidades:
              </p>
              <a
                href="https://instagram.com/acaiblessedcsa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-acai-purple-600 hover:text-acai-orange-500 font-medium transition-colors"
              >
                <span>@acaiblessedcsa</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            animate={floatingAnimation}
            className="relative"
          >
            <div className="relative">
              {/* Main Image Placeholder */}
              <div className="w-full max-w-lg mx-auto aspect-square bg-gradient-to-br from-acai-purple-100 to-acai-orange-100 rounded-3xl shadow-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🍇</div>
                  <h3 className="text-2xl font-poppins font-bold text-acai-purple-700 mb-2">
                    Açaí Fresquinho
                  </h3>
                  <p className="text-acai-purple-600">
                    Tigela de 500ml com 5 acompanhamentos
                  </p>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: 0.5
                }}
                className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg"
              >
                <span className="text-2xl">🥥</span>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  delay: 1
                }}
                className="absolute -bottom-2 -left-4 bg-white rounded-full p-4 shadow-lg"
              >
                <span className="text-2xl">🍓</span>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -15, 0],
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  delay: 1.5
                }}
                className="absolute top-1/2 -left-8 bg-white rounded-full p-3 shadow-lg"
              >
                <span className="text-xl">🍌</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-acai-purple-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
            className="w-1 h-3 bg-acai-purple-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}