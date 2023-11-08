import { Session, User, UserCredentials } from "../../types/types";
import {axiosClient} from '../../service/petstore';

export const loginSuccess = (payload : {user: User, session: Session}) => ({
    type: "LOGIN_SUCCESS",
    payload,
});

export const loginFailed = (payload: string) => ({
    type: "LOGIN_FAILED",
    payload,
});

export const loginLoading = () => ({
    type: "LOGIN_LOADING",
});

export const logoutSuccess = () => ({
    type: "LOGOUT",
});

export const doLogin = async (dispatch: React.Dispatch<any>, { user, password }: UserCredentials) => {
    dispatch(loginLoading());
    const LOGIN_URL = `user/login?username=${user}&password=${password}`;
    try {
        const response = await axiosClient.get(LOGIN_URL, {
            headers: { 'Accept' : 'application/json'}
        }); 
        const session = (response.data);
        return dispatch(loginSuccess({user, session}));
    } catch (error:any) { // shluld use the 'instanceof' operator within the catch block to catch differnet instances of error
        return dispatch(loginFailed(error.message));
    }
}