import { AuthState, AuthPayloadType } from "../../types/types";

export const initialState: AuthState = {
    user: null,
    session: null,
    error: false,
    fetching: false
}

const authReducer = (state: AuthState, action: AuthPayloadType): AuthState => {
    const { payload, type } = action;

    switch (type) {
        case "LOGIN_SUCCESS":
            return {
                ...state,
                fetching: false,
                error: false,
                user: payload?.user,
                session: payload?.session
            };
        case "LOGIN_FAILED":
            return {
                ...state,
                fetching: false,
                error: true
            };
        case "LOGIN_LOADING":
            return {
                ...state,
                fetching: true,
                error: false,
            };
        case "LOGOUT":
            return {
                ...state,
                user: null,
                session: null,
                fetching: false,
                error: false,
            };
        default:
            return state;
    }
}

export default authReducer;