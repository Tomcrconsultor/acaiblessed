'use client';

import { motion } from 'framer-motion';
import { Star, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { ProductCardProps } from '@/types';
import CTAButton from './CTAButton';

export default function ProductCard({
  name,
  price,
  size,
  description,
  image,
  featured = false,
  category = 'acai'
}: ProductCardProps) {
  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  };

  const cardGradient = {
    acai: 'from-acai-purple-50 to-acai-cream-100',
    milkshake: 'from-acai-orange-50 to-acai-light-orange-100',
    sorvete: 'from-blue-50 to-cyan-100'
  };

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={`
        relative bg-gradient-to-br ${cardGradient[category]}
        rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300
        border border-white/50 backdrop-blur-sm
        ${featured ? 'ring-2 ring-acai-orange-500 ring-opacity-50' : ''}
      `}
    >
      {featured && (
        <div className="absolute -top-3 -right-3 bg-gradient-secondary text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
          <Sparkles size={14} />
          Destaque
        </div>
      )}
      
      <div className="flex flex-col h-full">
        {image && (
          <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 overflow-hidden relative">
            <Image 
              src={image} 
              alt={name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
          </div>
        )}
        
        <div className="flex-grow">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xl font-poppins font-bold text-acai-purple-700">
              {name}
            </h3>
            {size && (
              <span className="text-sm bg-white/70 px-2 py-1 rounded-full text-acai-purple-600 font-medium">
                {size}
              </span>
            )}
          </div>
          
          {description && (
            <p className="text-acai-purple-600 text-sm mb-3 leading-relaxed">
              {description}
            </p>
          )}
          
          <div className="flex items-center justify-between mb-4">
            <span className="text-2xl font-bold text-acai-purple-700">
              {formatPrice(price)}
            </span>
            
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
        </div>
        
        <CTAButton
          text="Peça Agora"
          product={name}
          size={size}
          variant="primary"
          fullWidth
        />
      </div>
    </motion.div>
  );
}