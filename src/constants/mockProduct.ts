import { Product } from '../types'
import { productNikeImage } from './images'

export const mockProduct: Product = {
  id: '1',
  name: 'Tênis Nike Revolution 6 Next Nature Masculino',
  category: 'Casual',
  brand: 'Nike',
  ref: '38476171',
  rating: 4.7,
  reviews: 90,
  price: 219.0,
  originalPrice: 249.0,
  discount: 12,
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  sizes: [39, 40, 41, 42, 43],
  colors: [
    { label: 'vermelho', hex: '#ef4444' },
    { label: 'azul', hex: '#3b82f6' },
    { label: 'cinza', hex: '#6b7280' },
    { label: 'preto', hex: '#000000' },
  ],
  images: [
    {
      url: productNikeImage,
      altText: 'Tênis Nike Revolution 6',
    },
  ],
  thumbnails: [
    { url: productNikeImage, altText: 'Thumbnail 1', bgColor: 'bg-indigo-100' },
    { url: productNikeImage, altText: 'Thumbnail 2', bgColor: 'bg-amber-100' },
    { url: productNikeImage, altText: 'Thumbnail 3', bgColor: 'bg-red-100' },
  ],
}
