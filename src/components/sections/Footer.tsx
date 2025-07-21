'use client';

import { motion } from 'framer-motion';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Instagram, 
  MessageCircle,
  Star,
  Heart
} from 'lucide-react';

export default function Footer() {
  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Telefone",
      info: "(11) 97444-0966",
      link: "tel:11974440966"
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      title: "WhatsApp",
      info: "(11) 97444-0966",
      link: "https://wa.me/5511974440966"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      title: "Instagram",
      info: "@acaiblessedcsa",
      link: "https://instagram.com/acaiblessedcsa"
    }
  ];

  const businessInfo = [
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Horário de Funcionamento",
      info: "Segunda a Domingo: 14:00 - 22:00"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Área de Entrega",
      info: "Região CSA e arredores"
    }
  ];

  const quickLinks = [
    { name: "Açaí", href: "#acai" },
    { name: "Milkshakes", href: "#milkshakes" },
    { name: "Sorvetes", href: "#sorvetes" },
    { name: "Acompanhamentos", href: "#acompanhamentos" },
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
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="bg-acai-purple-800 text-white">
      {/* Main Footer Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-poppins font-bold mb-3">
                Açaí Blessed
              </h3>
              <p className="text-acai-purple-200 leading-relaxed">
                O melhor açaí da região, fresquinho e com os acompanhamentos 
                que você mais ama. Qualidade e sabor em cada tigela!
              </p>
            </div>

            <div className="flex items-center gap-2 text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-current" />
              ))}
              <span className="text-white/80 text-sm ml-2">4.9/5 - 1000+ avaliações</span>
            </div>

            <div className="flex items-center gap-2 text-acai-purple-200">
              <Heart size={16} className="text-red-400" />
              <span className="text-sm">Feito com amor desde 2023</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-poppins font-bold mb-6">Menu</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-acai-purple-200 hover:text-white transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-acai-orange-400 rounded-full"></span>
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-poppins font-bold mb-6">Contato</h4>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => (
                <li key={index}>
                  <motion.a
                    href={contact.link}
                    target={contact.link.startsWith('http') ? '_blank' : undefined}
                    rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-3 text-acai-purple-200 hover:text-white transition-colors duration-200 group"
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-acai-purple-700 group-hover:bg-acai-orange-500 transition-colors duration-200">
                      {contact.icon}
                    </div>
                    <div>
                      <div className="text-sm text-acai-purple-300">{contact.title}</div>
                      <div className="font-medium">{contact.info}</div>
                    </div>
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Business Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-poppins font-bold mb-6">Informações</h4>
            <ul className="space-y-4">
              {businessInfo.map((info, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-acai-purple-700 text-acai-orange-400 flex-shrink-0 mt-1">
                    {info.icon}
                  </div>
                  <div>
                    <div className="font-medium text-white mb-1">{info.title}</div>
                    <div className="text-acai-purple-200 text-sm leading-relaxed">
                      {info.info}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 bg-acai-purple-700 rounded-lg">
              <div className="text-acai-orange-400 font-semibold mb-2">
                🚀 Entrega Rápida
              </div>
              <div className="text-sm text-acai-purple-200">
                Seu açaí chega em até 30 minutos, sempre fresquinho e na temperatura ideal!
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="border-t border-acai-purple-700"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-acai-purple-300 text-sm">
              © 2024 Açaí Blessed. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center gap-6">
              <a 
                href="https://wa.me/5511974440966" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-acai-purple-300 hover:text-white text-sm transition-colors duration-200"
              >
                Política de Privacidade
              </a>
              <a 
                href="https://wa.me/5511974440966" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-acai-purple-300 hover:text-white text-sm transition-colors duration-200"
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}