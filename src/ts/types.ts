import { Url } from "url";

export type FormInputs = {
  email: string;
  phone: string;
  city: string;
  postal: string;
  name: string;
  address: string;
};

export interface IItemImages {
  images: string[] | null;
}

export interface IItemAbout {
  id: number;
  title: string;
  price: number;
  desc: string[];
  mainImage: string;
  secondImage: string;
  code: string;
  size: string[] | number[];
}

export interface IItem extends IItemImages, IItemAbout{}
