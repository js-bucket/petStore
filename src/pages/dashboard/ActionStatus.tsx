import { Status } from "../../types/types";

export const ActionStatus = ({status, setPetStatus} : {status: Status, setPetStatus: React.Dispatch<React.SetStateAction<Status>>}) => {

    const shouldDisplyAvailable = status === Status.PENDING || status === Status.SOLD;
    const shouldDisplyPending = status === Status.AVAILABLE || status === Status.SOLD;
    const shouldDisplySold = status === Status.AVAILABLE || status === Status.PENDING;

    return (
        <div>
            {
                shouldDisplyAvailable && 
                    <div>
                        <label>Mark as Available</label>
                        <input 
                            type="radio" 
                            name="status" 
                            onChange={()=>setPetStatus(Status.AVAILABLE)}
                        />
                    </div> 
            }

            {
                shouldDisplyPending && 
                    <div>
                        <label>Mark as Pending</label>
                        <input 
                            type="radio" 
                            name="status" 
                            onChange={()=>setPetStatus(Status.PENDING)}
                        />
                    </div> 
            }

            {
                shouldDisplySold && 
                    <div>
                        <label>Mark as Sold</label>
                        <input 
                            type="radio" 
                            name="status" 
                            onChange={()=>setPetStatus(Status.SOLD)}
                        />
                    </div> 
            }
        </div>
    )
};