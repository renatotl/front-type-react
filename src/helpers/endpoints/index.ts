import { auth } from './auth';
import { order } from './order';
import { profile } from './profile';
import { user } from './user';

export const endpoint = {
    baseUrl: "https://live-game-retro-production.up.railway.app",
    ...auth,// esparalhos todos os endpoints
    ...user,
    ...order,
    ...profile,
};

//Vamos centralizar os endpoints da nossa API.