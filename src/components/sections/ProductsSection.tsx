'use client';

import { motion } from 'framer-motion';
import ProductCard from '../ui/ProductCard';
import AnimatedSection from '../ui/AnimatedSection';

export default function ProductsSection() {
  const acaiProducts = [
    {
      name: "Açaí Mini",
      price: 12.00,
      size: "200ml",
      description: "Perfeito para quem quer matar a vontade! Inclui 5 acompanhamentos.",
      category: 'acai' as const
    },
    {
      name: "Açaí Pequeno",
      price: 16.00,
      size: "300ml",
      description: "Ideal para um lanche da tarde. Inclui 5 acompanhamentos.",
      category: 'acai' as const
    },
    {
      name: "Açaí Médio",
      price: 24.00,
      size: "500ml",
      description: "Mais pedido! Perfeito para compartilhar. Inclui 5 acompanhamentos.",
      featured: true,
      category: 'acai' as const
    },
    {
      name: "Açaí Grande",
      price: 35.00,
      size: "700ml",
      description: "Para quem não quer brincadeira! Inclui 5 acompanhamentos.",
      category: 'acai' as const
    }
  ];

  const milkshakeProducts = [
    {
      name: "Milkshake de Chocolate",
      price: 16.00,
      size: "300ml",
      description: "Cremoso e irresistível, feito com chocolate de qualidade.",
      category: 'milkshake' as const
    },
    {
      name: "Milkshake de Morango",
      price: 16.00,
      size: "500ml",
      description: "Refrescante e saboroso, com morangos selecionados.",
      category: 'milkshake' as const
    },
    {
      name: "Milkshake de Nutella",
      price: 20.00,
      size: "300ml",
      description: "O favorito da galera! Cremosidade única da Nutella.",
      featured: true,
      category: 'milkshake' as const
    },
    {
      name: "Milkshake Confete",
      price: 40.00,
      description: "Especial e colorido, uma festa de sabores!",
      category: 'milkshake' as const
    }
  ];

  const sorveteProducts = [
    {
      name: "Sorvete no Palito",
      price: 2.50,
      description: "Clássico e refrescante para qualquer hora.",
      category: 'sorvete' as const
    },
    {
      name: "Sorvete na Casquinha",
      price: 6.00,
      description: "Crocante por fora, cremoso por dentro.",
      category: 'sorvete' as const
    },
    {
      name: "Sorvete no Cascão",
      price: 8.00,
      description: "O cascão que todo mundo ama, com muito sorvete.",
      category: 'sorvete' as const
    },
    {
      name: "Sorvete no Pote",
      price: 6.00,
      size: "250ml",
      description: "Leve para casa ou consuma aqui mesmo.",
      category: 'sorvete' as const
    }
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

  const sectionHeaderVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-acai-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Açaí Section */}
        <AnimatedSection animation="slideUp" className="mb-20">
          <div id="acai" className="text-center mb-16">
            <motion.div
              variants={sectionHeaderVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-acai-purple-100 px-4 py-2 rounded-full mb-6"
            >
              <span className="text-2xl">🍇</span>
              <span className="text-acai-purple-700 font-semibold">Açaí Fresquinho</span>
            </motion.div>
            
            <motion.h2
              variants={sectionHeaderVariants}
              className="text-3xl md:text-4xl font-poppins font-bold text-acai-purple-700 mb-4"
            >
              Açaí no Copo e na Tigela
            </motion.h2>
            
            <motion.p
              variants={sectionHeaderVariants}
              className="text-lg text-acai-purple-600 max-w-2xl mx-auto mb-4"
            >
              Todos os tamanhos incluem <strong>5 acompanhamentos à sua escolha</strong>
            </motion.p>
            
            <motion.p
              variants={sectionHeaderVariants}
              className="text-sm text-acai-orange-600 font-medium"
            >
              Acompanhamentos extras: R$ 2,00 cada
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {acaiProducts.map((product, index) => (
              <motion.div
                key={product.name}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      duration: 0.6,
                      delay: index * 0.1
                    }
                  }
                }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>

        {/* Milkshakes Section */}
        <AnimatedSection animation="slideUp" className="mb-20">
          <div id="milkshakes" className="text-center mb-16">
            <motion.div
              variants={sectionHeaderVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-acai-orange-100 px-4 py-2 rounded-full mb-6"
            >
              <span className="text-2xl">🥤</span>
              <span className="text-acai-orange-700 font-semibold">Milkshakes Especiais</span>
            </motion.div>
            
            <motion.h2
              variants={sectionHeaderVariants}
              className="text-3xl md:text-4xl font-poppins font-bold text-acai-purple-700 mb-4"
            >
              Milkshakes Irresistíveis
            </motion.h2>
            
            <motion.p
              variants={sectionHeaderVariants}
              className="text-lg text-acai-purple-600 max-w-2xl mx-auto"
            >
              Cremosos, saborosos e feitos na hora para você
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {milkshakeProducts.map((product, index) => (
              <motion.div
                key={product.name}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      duration: 0.6,
                      delay: index * 0.1
                    }
                  }
                }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>

        {/* Sorvetes Section */}
        <AnimatedSection animation="slideUp">
          <div id="sorvetes" className="text-center mb-16">
            <motion.div
              variants={sectionHeaderVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-6"
            >
              <span className="text-2xl">🍦</span>
              <span className="text-blue-700 font-semibold">Sorvetes Gelados</span>
            </motion.div>
            
            <motion.h2
              variants={sectionHeaderVariants}
              className="text-3xl md:text-4xl font-poppins font-bold text-acai-purple-700 mb-4"
            >
              Sorvetes para Toda Família
            </motion.h2>
            
            <motion.p
              variants={sectionHeaderVariants}
              className="text-lg text-acai-purple-600 max-w-2xl mx-auto"
            >
              Do clássico palito ao pote generoso, temos o sorvete ideal para você
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {sorveteProducts.map((product, index) => (
              <motion.div
                key={product.name}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      duration: 0.6,
                      delay: index * 0.1
                    }
                  }
                }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}