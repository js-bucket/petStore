import { useEffect, useState } from "react";
import usePets from "../../hooks/usePets"
import { StatusButton } from "./StatusButton";
import { Status } from "../../types/types";
import { PetCard } from "./PetCard";

const ITEMS_PER_PAGE = 10;

export const PetsDashBoard = () => {
    const { getPets, petsState } = usePets();
    const { pets } = petsState;
    const [page, setPage] = useState(0);

    const numberOfPages = pets && Math.ceil(pets.length/ITEMS_PER_PAGE);
    const startIndex = page * ITEMS_PER_PAGE;
    const lastIndex = (page + 1)*ITEMS_PER_PAGE;

    useEffect(() => {
        getPets(Status.AVAILABLE);
    }, []);

    const itemsPresent = () => {
        if (!pets.length) {
            return (
                <div>
                    No Items to dispaly!
                </div>
            )
        }
    }
  
    return (
        <>
             <StatusButton setPage={setPage}/>
             { itemsPresent() }
             {
                petsState.loading ? <div>Loading...</div> : (
                    <>
                    <div className="pets-container">
                        {
                            pets.length > 0 && (
                                pets.slice(startIndex, lastIndex).map((pet, i) => (
                                    <div className="petcard" key={i}>
                                        <PetCard pet={pet}/>
                                    </div>
                                ))
                            )
                        }
                    </div>
                    <div className="pagination">
                        {
                           Array(numberOfPages).fill(0).map((_, i)=> (
                                <button 
                                    key={i}
                                    onClick={()=>setPage(i)} 
                                    className={page === i ? 'active-btn' : 'btn'}>
                                        {i+1}
                                </button>
                           ))
                        }
                    </div>
                    </>
                )
             }
        </>
    )
}