'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { CTAButtonProps } from '@/types';
import { generateWhatsAppLink } from '@/lib/whatsapp';

export default function CTAButton({
  text,
  product,
  size,
  variant = 'primary',
  className = '',
  fullWidth = false
}: CTAButtonProps) {
  const handleClick = () => {
    const link = generateWhatsAppLink(product, size);
    window.open(link, '_blank');
  };

  const baseClasses = `
    inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full
    font-semibold text-base transition-all duration-300 transform
    hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4
    ${fullWidth ? 'w-full' : ''}
  `;

  const variantClasses = {
    primary: `
      bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:shadow-orange-500/25
      focus:ring-orange-300 shadow-lg hover:from-orange-600 hover:to-orange-700
    `,
    secondary: `
      bg-white text-purple-600 border-2 border-purple-600
      hover:bg-purple-50 hover:shadow-purple-500/25
      focus:ring-purple-300
    `
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      <MessageCircle size={20} />
      <span>{text}</span>
    </motion.button>
  );
}