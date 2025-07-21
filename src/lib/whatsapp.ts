export const whatsappNumber = "5511974440966";

export const generateWhatsAppLink = (product: string, size?: string): string => {
  const baseMessage = "Olá! Gostaria de fazer um pedido do Açaí Blessed:";
  let productMessage = `\n• ${product}`;
  
  if (size) {
    productMessage += ` - ${size}`;
  }
  
  const finalMessage = baseMessage + productMessage + "\n\nPoderia me informar os acompanhamentos disponíveis?";
  
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(finalMessage)}`;
};

export const generateCustomWhatsAppLink = (message: string): string => {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};