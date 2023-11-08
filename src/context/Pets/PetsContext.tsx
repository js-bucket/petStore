import { createContext, useReducer } from "react";
import { initialPetState, petsReducer } from "./petsReducer";
import { petsActions } from "./petsAction";
import { getPetsByStatus, updatePet } from "../../service/petstore";
import { PetsContextType, Status } from "../../types/types";

export const PetsContext = createContext<PetsContextType | null>(null);

export const PetsProvider = ({children} : {children: React.ReactNode}) => {
    const [ petsState, dispatch ] = useReducer(petsReducer, initialPetState);

    const getPets = async (status= Status.AVAILABLE) => {
        dispatch(petsActions.fetchPetsLoading());
        try {
            const response = await getPetsByStatus(status);
            const data = response?.data.slice(0, 99);
            const payload = {
                data,
                status
            }
            dispatch(petsActions.fetchPetsSuccess(payload));
        } catch (error: any) { // shluld use the 'instanceof' operator within the catch block to catch differnet instances of error
            dispatch(petsActions.fetchPetsFailed(error));
        }
    }
    
    const updatePets = async (status: string, name: string, petId:number) => {
        dispatch(petsActions.updatePetsLoading());
        try {
            const response = await updatePet(status, name, petId);
            dispatch(petsActions.updatePetsSuccess(response));
        } catch (error: any) { // shluld use the 'instanceof' operator within the catch block to catch differnet instances of error
            dispatch(petsActions.updatePetsFailed(error));
            throw new Error(error.message);
           
        }
    }

    const reset = () => {
        dispatch(petsActions.reset())
    }

    const updateErrorInState = () => {
        dispatch(petsActions.updateErrorState());
    }

    return (
        <PetsContext.Provider value={{getPets, updatePets, petsState, reset, updateErrorInState }}>
            {children}
        </PetsContext.Provider>
    )
}