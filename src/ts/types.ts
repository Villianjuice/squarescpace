export type FormInputs = {
  email: string,
  phone: string,
  city: string,
  postal: string,
  name: string,
  address: string,
}; 

export interface IItem {
  id: number;
  title: string,
  price: number,
  desc: string[],
  mainImage: string,
  secondImage: string,
  images: string[],
  code: string,
  size: string[] | number[]
}