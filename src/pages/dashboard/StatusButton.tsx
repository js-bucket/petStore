import usePets from "../../hooks/usePets";
import { Status } from "../../types/types";

export const StatusButton = ({setPage}: {setPage: (arg: number)=>void}) => {
    const {getPets, petsState } = usePets();

    const handleStatus = (status: Status) => {
        setPage(0);
        getPets(status);
    }
    
    return (
        <div className="status-button-action">
            <button 
                className={petsState.petStatus === Status.AVAILABLE ? 'active-btn': 'btn'} 
                onClick={() => handleStatus(Status.AVAILABLE)}>
                    Available
            </button>
            <button 
                className={petsState.petStatus === Status.PENDING ? 'active-btn': 'btn'} 
                onClick={() => handleStatus(Status.PENDING)}>
                    Pending
            </button>
            <button 
                className={petsState.petStatus === Status.SOLD ? 'active-btn': 'btn'} 
                onClick={() => handleStatus(Status.SOLD)}>
                    Sold
            </button>
        </div>
    )
}