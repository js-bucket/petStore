import { ActionStatus } from "./ActionStatus";
import usePets from "../../hooks/usePets";
import { SyntheticEvent, useState } from "react";
import { PetDetailType } from "../../types/types";

export const PetDetails = ({status, id, name, imgUrl}: PetDetailType) => {
    const [ petName, setPetName ] = useState(name);
    const [ petStatus, setPetStatus ] = useState(status);
    const [ isEdit, setIsEdit ] = useState(false);

    const { updatePets, getPets, petsState, updateErrorInState } = usePets();

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        updatePets(petStatus, petName, id).then(() => {
            setIsEdit(false);
            getPets(petStatus);
        })
    };

    const addDefaultSrc = (e: SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.src= "https://irko-ingur.ru/thumb/2/CjW1zeDt5rlzue4SyUFFMQ/r/d/iork.jpg";
    }

    const handleModalClose = () => {
        setIsEdit(false);
        updateErrorInState();
    }

    return (
        <>
            {
                isEdit && (
                    <div id="modal" style={{display:`${isEdit ? 'block' : 'none'}`}}>
                        
                        <div className="modal-content">
                        { petsState.updateError && <p style={{color: "red"}}>Error Occured! Please try again or close</p>}
                        { petsState.updating && <p>Updating...</p>}
                           <div className="modal-form">
                                <img 
                                    width="100px" 
                                    height="100px" 
                                    src={imgUrl} 
                                    alt={name}
                                    onError={(e) => addDefaultSrc(e)} 
                                />
                                <form onSubmit={handleSubmit}>
                                    <label htmlFor="petStatus">Name 
                                        <input 
                                            id="petStatus" 
                                            value={petName} 
                                            onChange={(e) => setPetName(e.target.value)}
                                        />
                                    </label>
                                    <ActionStatus 
                                        status={status} 
                                        setPetStatus={setPetStatus}
                                    />
                                    <button>Done</button>
                                </form>
                            </div>
                            <button 
                                onClick={()=>handleModalClose()} 
                                className="modal-close">Close</button>
                        </div>
                    </div>     
                )
            }
            <p>{name}</p>
            <p>{status}</p>
            <button onClick={()=>setIsEdit(!isEdit)}>Edit</button>
        </>
    )
}