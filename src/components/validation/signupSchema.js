import * as yup from 'yup'

const signSchema = yup.object().shape({
    username: yup
    .string()
    .required('Username is required')
    .min(7, 'Username must be at least 7 character'),
    email: yup
    .string()
    .email('This must be a valid email'),
    // .required('Please enter your email'),
    password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    // .matches(
    //     /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
    //   "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    // ),
})
export default signSchema