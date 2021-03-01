export const SUBMIT_SIGNUP = "SUBMIT_SIGNUP";
export const SUBMIT_LOGIN = "SUBMIT_LOGIN"

export function submitSignup(signupData){
    return { type: SUBMIT_SIGNUP, payload: signupData};
}

export function submitLogin(loginData){
    return{ type: SUBMIT_LOGIN, payload: loginData};
}