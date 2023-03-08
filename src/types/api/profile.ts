import { User } from "./user";

export interface Profile {
    name: string;
    description: string;
    image: string;
    price: number;
  }
  
  export interface ProfileUpdate {
    product: string;
    id: string;
  }
  

  // resposta da api
  export interface ProfileResponse {
    id?: string;
    title: string;
    imageURL: string;
    userId?: User;
    createdAt?: string;
    updatedAt?: string;
    game?: []
    
  }