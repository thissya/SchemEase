import { createSchemeRepo, deleteSchemeBySchemeIdRepo, getAllSchemeRepo, getSchemeByNameRepo, getSchemeBySchemeIdRepo, getSchemeBySectorIdRepo, updateSchemeBySchemeIdRepo } from "../repository/scheme.repository.js";
import { AppError, isAppError } from "../utils/error.js";
import { GeneralResponce } from "../utils/generalResponse.js";

export async function handleCreateScheme(data){
    try {
        const scheme = await createSchemeRepo(data);
        const response = new GeneralResponce(
            true,
            scheme,
            200,
            "Schema created Successfully"
        );

        return response;
    } catch (error) {
        if(isAppError(error)){
            throw error;
        }
        throw new AppError(500,"Error Occured in create scheme service");
    }
}

export async function handleGetAllScheme(){
    try {
        const schemes = await getAllSchemeRepo();

        const response =  new GeneralResponce(
            true,
            schemes,
            200,
            "Schemes Fetched Successfully"
        )
        // console.log("In service layer :"+response.data);
        return response;

    } catch (error) {
        if(isAppError(error)){
            throw error;
        }
        throw new AppError(500,"Error in Fetching Schemes in service");
    }
}

export async function handleGetSchemeBySchemeId(data){
    try {
        console.log("Entered into Service layer :");
        const scheme = await getSchemeBySchemeIdRepo(data.schemeId);
        const response = new GeneralResponce(
            true,
            scheme,
            200,
            "Scheme Fetched Successfully"
        );
        return response;
    } catch (error) {
        if(isAppError(error)){
            throw error;
        }
        throw new AppError(500,"Error Occured in get Scheme by scheme id in service");
    }
}

export async function handleGetSchemeBySectorId(data){
    try {
        const schemes = await getSchemeBySectorIdRepo(data.sectorId);
        const response = new GeneralResponce(
            true,
            schemes,
            200,
            "Schemes related to sector id is fetched Successfully"
        );
        return response;
    } catch (error) {
        if(isAppError(error)){
            throw error;
        }
        throw new AppError(500,"Error Occured in fetching schemes by sectorId in service");
    }
}

export async function handleGetSchemeByName(data){
    try {
        const scheme = await getSchemeByNameRepo(data.schemeName);
        const response = new GeneralResponce(
            true,
            scheme,
            200,
            "Scheme Details Fetched Successfully By SchemeName"
        );
        
        return response;

    } catch (error) {
        if(isAppError(error)){
            throw error;
        }
        throw new AppError(500,"Error Occurred in fetching scheme by name ");
    }
}

export async function handleUpdateSchemeBySchemeId(data){
    try {
        console.log("Entered in service Scheme");
        const scheme = await updateSchemeBySchemeIdRepo(data);
        const response = new GeneralResponce(
            true,
            scheme,
            200,
            "Scheme Updated Successfully"
        );
        return response;
    } catch (error) {
        if(isAppError(error)){
            throw error;
        }
        throw new AppError(500,"Error Occurred in updating the Scheme details by scheme id in service");
    }
}

export async function handleDeleteSchemeBySchemeId(data){
    try {
        const scheme = await deleteSchemeBySchemeIdRepo(data.schemeId);
        
        const response = new GeneralResponce(
            true,
            scheme,
            200,
            "Scheme Deleted successfully"    
        );

        return response;

    } catch (error) {
        if(isAppError(error)){
            throw error;
        }
        throw new AppError(500,"Error Occurred in deleting Scheme");
    }
}