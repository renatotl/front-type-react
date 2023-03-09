import { User, UserResponse } from "./user";

export interface Profile {
    title: string;
    imageURL: string;
    userId?: string;
    
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