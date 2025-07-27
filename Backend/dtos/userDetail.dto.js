import yup from 'yup'
import { AREATYPE, CASTE, EDUCATIONALQUALIFICATION, GENDER, MARITALSTATUS, RELIGION, STATE } from '../constants/userDetail.constants.js'

export const createUserDetailSchema = yup.object({
    dateOfBirth:yup
    .date()
    .max(new Date(),"Date of Birth should be in future")
    .required("Date Of Birth is Required"),

    gender:yup
    .string()
    .oneOf(Object.values(GENDER),"Invalid Gender")
    .required("Gender is required"),

    maritalStatus:yup
    .string()
    .oneOf(Object.values(MARITALSTATUS),"Invalid marital status")
    .required("Maritual status is required"),

    state:yup
    .string()
    .oneOf(Object.values(STATE),"Invalid State")
    .required("State is required"),

    areaType:yup
    .string()
    .oneOf(Object.values(AREATYPE),"Invalid Area Type")
    .required("Area Type is required"),

    caste:yup
    .string()
    .oneOf(Object.values(CASTE),"Invalid Caste")
    .required("Caste is Required"),

    religion:yup
    .string()
    .oneOf(Object.values(RELIGION),"Invalid Religion")
    .required("Religion is Required"),

    educationalQualification:yup
    .string()
    .oneOf(Object.values(EDUCATIONALQUALIFICATION),"Invalid Educational Qualification")
    .required("Educational Qualification is required"),

    student:yup
    .boolean()
    .required("student Detail is required"),

    farmer:yup
    .boolean()
    .required("farmer detail is required"),

    startUp: yup
    .boolean()
    .required("Startup status is required"),

    disability: yup
        .boolean()
        .required("Disability status is required"),

    exServiceMan: yup
        .boolean()
        .required("Ex-serviceman status is required"),

    sportsMan: yup
        .boolean()
        .required("Sportsman status is required"),

    annualIncome: yup
        .string()
        .oneOf(Object.values(ANNUALINCOME), "Invalid income range")
        .required("Annual income is required"),
})


export const updateUserDetailSchema = yup.object({
  dateOfBirth: yup
    .date()
    .max(new Date(), "Date of Birth cannot be in the future")
    .optional()
    .typeError("Invalid date format"),

  gender: yup
    .string()
    .oneOf(Object.values(GENDER), "Invalid Gender")
    .optional(),

  maritalStatus: yup
    .string()
    .oneOf(Object.values(MARITALSTATUS), "Invalid Marital Status")
    .optional(),

  state: yup
    .string()
    .oneOf(Object.values(STATE), "Invalid State")
    .optional(),

  areaType: yup
    .string()
    .oneOf(Object.values(AREATYPE), "Invalid Area Type")
    .optional(),

  caste: yup
    .string()
    .oneOf(Object.values(CASTE), "Invalid Caste")
    .optional(),

  religion: yup
    .string()
    .oneOf(Object.values(RELIGION), "Invalid Religion")
    .optional(),

  educationalQualification: yup
    .string()
    .oneOf(Object.values(EDUCATIONALQUALIFICATION), "Invalid Educational Qualification")
    .optional(),

  student: yup
    .boolean()
    .optional()
    .typeError("Student must be true or false"),

  farmer: yup
    .boolean()
    .optional()
    .typeError("Farmer must be true or false"),

  startUp: yup
    .boolean()
    .optional()
    .typeError("Startup must be true or false"),

  disability: yup
    .boolean()
    .optional()
    .typeError("Disability must be true or false"),

  exServiceMan: yup
    .boolean()
    .optional()
    .typeError("Ex-serviceman must be true or false"),

  sportsMan: yup
    .boolean()
    .optional()
    .typeError("Sportsman must be true or false"),

  annualIncome: yup
    .string()
    .oneOf(Object.values(ANNUALINCOME), "Invalid Income Range")
    .optional(),

  id: yup
    .string()
    .required("User ID is required")
    .matches(/^[0-9a-fA-F]{24}$/, "ID must be a valid MongoDB ObjectId")
});


export const getUserDetailByUserIdSchema = yup.object({
     id: yup
    .string()
    .required("User ID is required")
    .matches(/^[0-9a-fA-F]{24}$/, "ID must be a valid MongoDB ObjectId")
});

export class createUserDetailDTO{
    constructor(data){
        Object.assign(this,data);
    }
    validate(){
        return createUserDetailSchema.validate(this,{abortEarly:false});
    }
}

export class updateUserDetailDTO{
    constructor(data){
        Object.assign(this,data);
    }

    validate(){
        return updateUserDetailSchema.validate(this,{abortEarly:false});
    }
}

export class getUserDetailByUserIdDTO{
    constructor(data){
        Object.assign(this,data);
    }

    validate(){
        return 
    }
}