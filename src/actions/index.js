export const SUBMIT_SIGNUP = "SUBMIT_SIGNUP";

export function submitSignup(signupData){
    return { type: SUBMIT_SIGNUP, payload: signupData}
}