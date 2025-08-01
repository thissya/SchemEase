import yup from 'yup';

export const createSchemeSchema = yup.object({
  schemeName: yup
    .string()
    .required("Scheme Name is required"),

  description: yup
    .string()
    .required("Description is required")
    .min(20, "Description must be at least 20 characters"),

  eligibility: yup
    .string()
    .required("Eligibility is required"),

  document: yup
    .string()
    .required("Documents which are required to apply should be entered"),

  steps: yup
    .string()
    .required("Steps to register are required"),

  whereToApply: yup
    .string()
    .required("Where to Apply field is missing"),

  sectorId: yup
    .string()
    .matches(/^[0-9a-fA-F]{24}$/, "Invalid sectorId format") // Valid MongoDB ObjectId
    .required("Sector ID is required"),

  keywords: yup
    .array()
    .of(yup.string().required("Keyword must be a string"))
    .min(1, "At least one keyword is required")
    .required("Keywords are required"),
});

export const updateSchemeSchema = yup.object({
  schemeName: yup
    .string(),

  description: yup
    .string()
    .min(20, "Description must be at least 20 characters"),

  eligibility: yup
    .string(),

  document: yup
    .string(),

  steps: yup
    .string(),

  whereToApply: yup
    .string(),

  sectorId: yup
    .string()
    .matches(/^[0-9a-fA-F]{24}$/, "Invalid sectorId format"),

  keywords: yup
    .array()
    .of(yup.string().required("Each keyword must be a non-empty string")),
});

export const getSchemeBySchemeIdSchema = yup.object({
  schemeId:yup
  .string()
  .required("SchemeId is Required")
  .matches(/^[0-9a-fA-F]{24}$/, "Invalid schemeId format"),
});

export const getSchemeBySectorIdScheme = yup.object({
  sectorId:yup
    .string()
    .matches(/^[0-9a-fA-F]{24}$/, "Invalid schemeId format")
    .required("sectorId is Required"),
});

export class createSchemaDTO{
    constructor(data){
        Object.assign(this,data);
    }

    validate(){
        return createSchemeSchema.validate(this,{abortEarly:false});
    }
}

export class updateSchemeDTO{
    constructor(data){
        Object.assign(this,data);
    }
    validate(){
        return updateSchemeSchema.validate(this,{abortEarly:false});
    }
}

export class getSchemeBySchemeIdDTO{
  constructor(data){
    Object.assign(this,data);
  }

  validate(){
    return getSchemeBySchemeIdSchema.validate(this,{abortEarly:false});
  }
}

export class getSchemeBySectorIdDTO{
  constructor(data){
    Object.assign(this,data);
  }
  validate(){
    return getSchemeBySectorIdScheme.validate(this,{abortEarly:false});
  }
}

export const getSchemeBySchemeNameSchema = yup.object({
  schemeName:yup
    .string()
    .required("Enter Scheme Name to Search"),
})

export class getSchemeBySchemeNameDTO{
  constructor(data){
    Object.assign(this,data);
  }
  validate(){
    return getSchemeBySchemeNameSchema.validate(this,{abortEarly:false});
  }
}

