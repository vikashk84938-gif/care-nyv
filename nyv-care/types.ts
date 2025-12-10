export type Language = 'en' | 'hi' | 'de' | 'fr' | 'zh';

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}