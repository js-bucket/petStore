
export const fetchPetsSuccess = (payload: {data: Array<{}>, status: string}) => {
    return ({
    type: "FETCH_PETS_SUCCESS",
    payload,
})};

export const fetchPetsFailed = (payload: string) => {
    return ({
        type: "FETCH_PETS_ERROR",
        payload,
})};

export const fetchPetsLoading = () => ({
    type: "FETCH_PETS_LOADING",
});

export const updatePetsSuccess = (payload: any) => {
    return ({
    type: "UPDATE_PETS_SUCCESS",
    payload,
})};

export const updatePetsFailed = (payload: string) => ({
    type: "UPDATE_PETS_ERROR",
    payload,
});

export const updatePetsLoading = () => ({
    type: "UPDATE_PETS_STARTING",
});

export const reset = () => ({
    type: ""
});

export const updateErrorState = () => ({
    type: "UPDATE_ERROR_STATE"
});

export const petsActions = {
    fetchPetsFailed,
    fetchPetsLoading,
    fetchPetsSuccess,
    updatePetsFailed,
    updatePetsLoading,
    updatePetsSuccess,
    reset,
    updateErrorState
}
