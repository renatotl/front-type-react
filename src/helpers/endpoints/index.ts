import { auth } from './auth';
import { order } from './order';
import { product } from './product';
import { user } from './user';

export const endpoint = {
    baseUrl: "ENDEREÇO DA API",
    ...auth,// esparalhos todos os endpoints
    ...user,
    ...order,
    ...product,
};

//Vamos centralizar os endpoints da nossa API.