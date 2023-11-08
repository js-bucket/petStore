export type AuthState = {
    user: User,
    session: Session,
    error: boolean,
    fetching: boolean
}

export type UserCredentials = {
    user: string,
    password: string,
}

export type User = string | null | undefined;

export type Session = number | null | undefined;

export type AuthPayloadType = {
    type: string,
    payload?: AuthState   
};

export type PetsActionType = {
    type: string,
    payload?: any
};

export type LoginFunctionType = (credentials: UserCredentials) => Promise<void>;

export type AuthContextType = {
    state: AuthState,
    login: LoginFunctionType,
    logout: ()=>void,
}

export type PetsState = {
    pets: Array<{}>,
    fetchError: boolean,
    updateError: boolean,
    loading: boolean,
    updating: boolean,
    updatedPet: Array<{}>,
    petStatus: string,
}

export type PetsContextType = {
    getPets: (status?: Status) => Promise<void>,
    updatePets: (status: string, name: string, petId: number) => Promise<void>,
    petsState: PetsState,
    reset: () => void,
    updateErrorInState: () => void,
}

export enum Status {
    PENDING = 'pending',
    SOLD = 'sold',
    AVAILABLE = 'available',
}

export type PetDetailType = {
    status: Status, 
    id: number, 
    name : string, 
    imgUrl: string
}

export type PetType  = Pet | any;

export type Pet = {
    id: number,
    name: string,
    status: Status,
    photoUrls: Array<string>,
}
