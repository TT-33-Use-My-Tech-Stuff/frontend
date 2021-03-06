import * as yup from 'yup'

const loginSchema = yup.object().shape({
    username: yup.string()
        // .email('Must be a valid Email address.')
        .required('Username is required.'),
    password: yup.string()
        .min(8, 'Password must be at least 8 characters long.')
        // .matches(
        //     /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        //     'Password must contain at least 8 characters, one uppercase, one number and one special case character.'
        // )
        .required('Password is required.')
})

export default loginSchema