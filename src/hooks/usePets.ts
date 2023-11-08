import { useContext } from 'react';
import { PetsContext } from '../context/Pets/PetsContext';

const usePets = () => {
    const contextValue = useContext(PetsContext);
    if (contextValue === null) {
        throw Error("Context has not been Provided!");
    }
    return contextValue;
}

export default usePets;