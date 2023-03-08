import { endpoint } from 'helpers/endpoints';

export const profile = {
    createProfile: () => `${endpoint.baseUrl}/profile`,
    listProfiles: () => `${endpoint.baseUrl}/profile`,
    profileById: (id: string) => `${endpoint.baseUrl}/prodfile/${id}`,
};