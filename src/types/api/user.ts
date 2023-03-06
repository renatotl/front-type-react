export interface User {
    name: string;
    password: string;
    passwordConfirm: string;
    image: string;
  }

    
  export interface UserUpdate {
    user: User;
    id: string;
  }
  
  // propriedades que a api dos da
  export interface UserResponse {
    id: string;
    name: string;
    password: string;
    image: string;
    updatedAt?: string;
    createdAt?: string;
  }