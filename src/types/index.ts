export type Image = {
  url: string
  altText: string
  bgColor?: string
}

export type Product = {
  id: string
  name: string
  category: string
  brand: string
  ref: string
  rating: number
  reviews: number
  price: number
  originalPrice: number
  discount?: number
  description: string
  sizes: number[]
  colors: {
    label: string
    hex: string
  }[]
  images: Image[]
  thumbnails: Image[]
}

export interface SimplifiedProduct {
  discount?: number
  title: string
  price: number
  originalPrice: number
  imageSrc: string
  altText: string
  id: string
}
