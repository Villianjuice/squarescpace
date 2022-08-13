export type FormInputs = {
  email: string
  phone: string
  city: string
  postal: string
  name: string
  address: string
}

export interface IItemImages {
  images: string[]
}

export interface IItemAbout {
  id: string
  title: string
  price: number
  desc: string[]
  mainImage: string
  secondImage: string
  code: string
  sizes: string[]
}

export interface IItemCart {
  id: string
  title: string
  size: string
  code: string
  price: number
  mainImage: string
  count: number
}

export interface IItem extends IItemImages, IItemAbout {}
