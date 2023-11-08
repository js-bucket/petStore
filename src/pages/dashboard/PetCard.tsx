import { SyntheticEvent } from "react";
import { PetType } from "../../types/types";
import { PetDetails } from "./PetDetails"

export const PetCard = ({ pet }: {pet: PetType}) => {
    const addDefaultSrc = (e: SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.src= "https://irko-ingur.ru/thumb/2/CjW1zeDt5rlzue4SyUFFMQ/r/d/iork.jpg";
    }
    const img = pet.photoUrls ? pet.photoUrls[0] : 'https://irko-ingur.ru/thumb/2/CjW1zeDt5rlzue4SyUFFMQ/r/d/iork.jpg';

    return (
        <>
            <img 
                width="100px" 
                height="100px" 
                src={img} 
                onError={(e) => addDefaultSrc(e)} 
            />
            <div className="pet-details">
                <PetDetails 
                    status={pet.status} 
                    id={pet.id} 
                    name={pet.name} 
                    imgUrl={img}
                />
            </div>
        </>
    )
};