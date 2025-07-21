'use client';

import { motion } from 'framer-motion';
import { 
  Clock, 
  Star, 
  Heart, 
  Shield, 
  Truck, 
  Users,
  Award
} from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';

export default function WhyChooseSection() {
  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Açaí Fresquinho e Natural",
      description: "Preparado na hora com açaí 100% natural, sem conservantes ou aditivos artificiais.",
      color: "text-red-500"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Mais de 10 Acompanhamentos",
      description: "Variedade incrível de acompanhamentos para você montar seu açaí do jeito perfeito.",
      color: "text-yellow-500"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Entrega Rápida",
      description: "Entregamos em até 30 minutos na região, sempre fresquinho e na temperatura ideal.",
      color: "text-blue-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Qualidade Garantida",
      description: "Ingredientes selecionados e o melhor açaí da região. Satisfação garantida!",
      color: "text-purple-500"
    }
  ];

  const testimonials = [
    {
      name: "Mariana Silva",
      rating: 5,
      comment: "Melhor açaí da região! Sempre fresquinho e os acompanhamentos são deliciosos. Já virei cliente fiel!",
      avatar: "👩‍💼"
    },
    {
      name: "João Santos",
      rating: 5,
      comment: "Entrega super rápida e o açaí chega perfeito. O tamanho médio é mais que suficiente para duas pessoas.",
      avatar: "👨‍🔧"
    },
    {
      name: "Ana Costa",
      rating: 5,
      comment: "Amo a variedade de acompanhamentos! Sempre consigo montar um açaí diferente. Recomendo demais!",
      avatar: "👩‍🎓"
    },
    {
      name: "Carlos Oliveira",
      rating: 5,
      comment: "Preço justo e qualidade excelente. O milkshake de Nutella é simplesmente incrível!",
      avatar: "👨‍💼"
    }
  ];

  const statsData = [
    { number: "1000+", label: "Clientes Satisfeitos", icon: <Users className="w-6 h-6" /> },
    { number: "4.9", label: "Avaliação Média", icon: <Star className="w-6 h-6" /> },
    { number: "30min", label: "Entrega Máxima", icon: <Truck className="w-6 h-6" /> },
    { number: "100%", label: "Açaí Natural", icon: <Shield className="w-6 h-6" /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Why Choose Us */}
        <AnimatedSection animation="slideUp" className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-acai-purple-100 px-4 py-2 rounded-full mb-6">
              <Heart className="text-acai-purple-600" size={20} />
              <span className="text-acai-purple-700 font-semibold">Por Que Escolher</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-acai-purple-700 mb-4">
              Por Que Escolher o Açaí Blessed?
            </h2>
            
            <p className="text-lg text-acai-purple-600 max-w-3xl mx-auto">
              Não é só açaí, é uma experiência completa de sabor, qualidade e atendimento
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-white to-acai-cream-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-acai-cream-200 text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md mb-4 ${feature.color}`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-poppins font-bold text-acai-purple-700 mb-3">
                  {feature.title}
                </h3>
                <p className="text-acai-purple-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>

        {/* Stats Section */}
        <AnimatedSection animation="slideUp" className="mb-20">
          <div className="bg-gradient-primary rounded-3xl p-8 md:p-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {statsData.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="text-center text-white"
                >
                  <div className="flex justify-center mb-2 opacity-80">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base opacity-90">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Testimonials */}
        <AnimatedSection animation="slideUp">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full mb-6">
              <Star className="text-yellow-600" size={20} />
              <span className="text-yellow-700 font-semibold">Depoimentos</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-acai-purple-700 mb-4">
              O Que Nossos Clientes Dizem
            </h2>
            
            <p className="text-lg text-acai-purple-600 max-w-2xl mx-auto">
              A opinião de quem já experimentou o melhor açaí da região
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-acai-cream-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-acai-cream-200"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-poppins font-bold text-acai-purple-700">
                      {testimonial.name}
                    </h4>
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-acai-purple-600 leading-relaxed italic">
                  &ldquo;{testimonial.comment}&rdquo;
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}