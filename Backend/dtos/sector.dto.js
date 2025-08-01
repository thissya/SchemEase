import yup from 'yup';

export const createSectorSchema = yup.object({
    sectorName:yup
    .string()
    .required("Sector Name is Required"),

    description:yup
    .string()
    .required("Description is Required")
    .min(10,"Description must be alteast 10 characters")
});

export const updateSectorSchema = yup.object({
    sectorName:yup
    .string()
    .optional(),

    description:yup
    .string()
    .optional(),
}); 

export const getSectorBySectorNameSchema =yup.object({
    sectorName:yup
    .string()
    .required("Sector Name is Required")
});


export class createSectorDTO{
    constructor(data){
        Object.assign(this,data);
    }
    validate(){
        return createSectorSchema.validate(this,{abortEarly:false});
    }
}

export class updateSectorDTO{
    constructor(data){
        Object.assign(this,data);
    }

    validate(){
        return updateSectorSchema.validate(this,{abortEarly:false});
    }
}

export class getSectorBySectorNameDTO{
    constructor(data){
        Object.assign(this,data);
    }

    validate(){
        return getSectorBySectorNameSchema.validate(this,{abortEarly:false});
    }
}
