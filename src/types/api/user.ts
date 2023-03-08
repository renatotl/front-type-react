export interface User {
    name: string;
    email: string;
    cpf: string;
    password: string;
    role?: boolean;
  }

    
  export interface UserUpdate {
    user: User;
    id: string;
  }
  
  // propriedades que a api dos da
  export interface UserResponse {
    id: string;
    name: string;
    email: string;
    cpf: string;
    role: boolean;
    createdAt?: string;
    updatedAt?: string;
  }