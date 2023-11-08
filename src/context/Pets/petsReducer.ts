import { PetsActionType, PetsState, Status } from "../../types/types";

export const initialPetState = {
    pets: [],
    fetchError: false,
    updateError: false,
    loading: false,
    updating: false,
    updatedPet: [],
    petStatus: Status.AVAILABLE,
}

export const petsReducer = (state: PetsState, action: PetsActionType) => {
    const { payload, type } = action;

    switch(type) {
        case "FETCH_PETS_LOADING":
            return {
                ...state,
                loading: true,
            };
        case "FETCH_PETS_SUCCESS":
            return {
                ...state,
                loading: false,
                fetchError: false,
                pets: payload.data,
                petStatus: payload.status,
            };
        case "FETCH_PETS_ERROR": 
            return {
                ...state,
                fetchError: true,
                loading: false,
            };
        case "UPDATE_PETS_STARTING": 
            return {
                ...state,
                fetchError: false,
                updating: true,
                loading: false,
                updateError: false,
            }
        case "UPDATE_PETS_ERROR": 
            return {
                ...state,
                fetchError: false,
                updating: false,
                loading: false,
                updateError: true,
            }
        case "UPDATE_PETS_SUCCESS": 
            return {
                ...state,
                fetchError: false,
                updating: false,
                loading: false,
                updateError: false,
                updatedPet: payload.data,
            }
        case "UPDATE_ERROR_STATE":
            return {
                ...state,
                updateError: false,
            }
        default:
            return state;
    }
}