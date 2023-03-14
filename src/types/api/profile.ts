import { User, UserResponse } from "./user";

export interface Profile {
    title: string;
    imageURL: string;
    userId?: string;
    
  }
  
  export interface ProfileUpdate {
    title: string;
    imageURL: string;
    userId?: User | string | undefined;
    id?: string | undefined;
  }
  

  // resposta da api
  export interface ProfileResponse {
    id?: string;
    title?: string;
    imageURL?: string;
    userId?: User;
    createdAt?: string;
    updatedAt?: string;
    game?: []
    
  }