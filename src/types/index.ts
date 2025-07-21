export interface ProductCardProps {
  name: string;
  price: number;
  size?: string;
  description?: string;
  image?: string;
  featured?: boolean;
  category?: 'acai' | 'milkshake' | 'sorvete';
}

export interface CTAButtonProps {
  text: string;
  product: string;
  size?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  fullWidth?: boolean;
}

export interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight';
  delay?: number;
  className?: string;
}

export interface TestimonialProps {
  name: string;
  rating: number;
  comment: string;
  avatar?: string;
}

export interface AcompanhamentoProps {
  name: string;
  extraPrice?: number;
}