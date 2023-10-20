// import { ref, object, SchemaOf, string, number } from "yup";
// import {
//     ForgotPasswordTypes,
//     LoginTypes,
//     RegisterTypes,
//     ResetPasswordTypes,
//     SignUpCompleteStepTypes,
//     SignUpPhoneStepTypes,
//     UpdateProfileTypes,
//     VerifyEmailVerificationCodeTypes,
// } from "../@types";

// import { strings } from "../local/i18n";

// const phone = string()
//     .max(13, strings("thePhoneNumberMustBeExactly13Digits"))
//     .required(strings("thePhoneNumberIsARequiredField"));

// const password = string()
//     .min(6, strings("thePasswordMustBeExactly8Characters"))
//     .required(strings("thePasswordIsARequiredField"));

// const name = string().max(40).required(strings("theNameIsARequiredField"));

// const email = string()
//     .email(strings("TheEmailAddressMustBeAValidEmailAddress"))
//     .required(strings("theEmailAddressIsARequiredField"));

// export let loginValidation: SchemaOf<LoginTypes> = object().shape({
//     mobile: phone,
//     password: password,
// });

// export let resetPasswordValidation: SchemaOf<ResetPasswordTypes> =
//     object().shape({
//         mobile: phone,
//         password: password,
//         code: string().optional(),
//         confirmPassword: string()
//             .oneOf(
//                 [ref("password"), null],
//                 strings("theConfirmPasswordIsNotMatchingWithTheNewPassword"),
//             )
//             .required(strings("theConfirmPasswordIsARequiredField")),
//     });

// export let forgotPasswordValidation: SchemaOf<ForgotPasswordTypes> =
//     object().shape({
//         mobile: phone,
//     });

// export let signupPhoneStepValidation: SchemaOf<SignUpPhoneStepTypes> =
//     object().shape({
//         mobile: phone,
//     });

// export let signUpCompleteStepValidation: SchemaOf<SignUpCompleteStepTypes> =
//     object().shape({
//         mobile: phone,
//         firstName: string().required(strings("pleaseTypeFirstName")),
//         lastName: string().required(strings("pleaseTypeLastName")),
//         email: email,
//         password: password,
//         username: string().required(strings("pleaseTypeUserName")),
//     });

// export let registerValidation: SchemaOf<RegisterTypes> = object().shape({
//     application_id: number().optional(),
//     city_id: string().required(strings("pleaseSelectTheCity")),
//     email: email,
//     first_name: string().required(strings("enterTheFirstName")),
//     last_name: string().required(strings("enterTheLastName")),
//     lang_id: number().optional(),
//     password: password,
//     password_confirmation: string()
//         .oneOf(
//             [ref("password"), null],
//             strings("theConfirmPasswordIsNotMatchingWithTheNewPassword"),
//         )
//         .required(strings("confirmPasswordIsARequiredField")),
// });

// export let updateProfileValidation: SchemaOf<UpdateProfileTypes> =
//     object().shape({
//         application_id: number().optional(),
//         city_id: string().required(strings("pleaseSelectTheCity")),
//         email: email,
//         first_name: string().required(strings("enterTheFirstName")),
//         last_name: string().required(strings("enterTheLastName")),
//         lang_id: number().optional(),
//         mobile: phone,
//         full_name: string().optional(),
//         photo: string().optional(),
//         birthdate: string().optional(),
//         gender_id: string().optional(),
//     });

// export const verifyEmailVerificationCodeValidation: SchemaOf<VerifyEmailVerificationCodeTypes> =
//     object().shape({
//         email: email,
//         email_verification_code: string().required("sd"),
//     });
