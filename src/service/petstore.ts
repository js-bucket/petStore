import axios from 'axios';
import { getQueryParam } from '../utils/utils';

export const axiosClient =  axios.create({
    baseURL: 'https://petstore3.swagger.io/api/v3/',
});

export const getPetsByStatus = async (status = 'available') => {
    const FIND_BY_STATUS_URL = `pet/findByStatus?status=${status}`;
    try {
        const response = await axiosClient.get(FIND_BY_STATUS_URL, {
            headers: { 'Accept' : 'application/json'}
        });
        return response;
    } catch(error: any) {
        console.log(error.message);
    }
}

export const updatePet = async (status: string, name: string, petId: number) => {
    const queryParam = getQueryParam({ status, name});
    
    const UPDATE_PET_URL = `pet/${petId}?${queryParam}`;
    try {
        const response = await axiosClient.post(UPDATE_PET_URL, {
            headers: { 'Accept' : 'application/json'}
        });
        return response;
    } catch(error: any) {
        throw Error(error.message);
    }
}
