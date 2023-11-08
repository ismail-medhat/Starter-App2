import * as Yup from 'yup';

// start login user validation schema
const loginValidationSchema = Yup.object({
  email: Yup.string().required('This field is required'),
  password: Yup.string()
    .required('This field is required')
    .min(4, 'password should at least 4 char'),
});

export {loginValidationSchema};
