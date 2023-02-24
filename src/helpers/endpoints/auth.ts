import { endpoint } from 'helpers/endpoints';

// baseurl que tem o endereço da api
export const auth = {
    auth: () => `${endpoint.baseUrl}/auth`,
};