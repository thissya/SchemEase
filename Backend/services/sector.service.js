import { createSectorDTO, updateSectorSchema } from "../dtos/sector.dto.js";
import { createSectorRepo, deleteSectorBySectorIdRepo, getAllSectorRepo, getSectorBySectorIdRepo, getSectorBySectorNameRepo, updateSectorBySectorIdRepo } from "../repository/sector.repository.js";
import { AppError, InternalValidationError, isAppError } from "../utils/error.js";
import { GeneralResponce } from "../utils/generalResponse.js";


export async function handleCreateSector(data){
    try{
        const sectorData  = await createSectorRepo(data);
        const response = new GeneralResponce(
            true,
            sectorData,
            200,
            "Sector Created Successfully"
        );
        return response;
    }catch(err){
        if(isAppError(err)){
            throw err;
        }
        throw new AppError(500,"Error in Sector creation in Service");
    }
}


export async function handleGetAllSector(){
    try{
        const sectorDetails = await getAllSectorRepo();
        const response = new GeneralResponce(
            true,
            sectorDetails,
            200,
            "Sector Details fetched Successfully"
        );
        return response;
    }catch(err){
        if(isAppError(err)){
            throw err;
        }
        throw new AppError(500,"Error in Fetching Sector Details in sector service");
    }
}


export async function handleGetSectorBySectorId(data){
    try {
        const sector = await getSectorBySectorIdRepo(data.sectorId);
        const response = new GeneralResponce(
            true,
            sector,
            200,
            "Sector Fetched Successfully"
        );
        return response;
    } catch (error) {
        if(isAppError(error)){
            throw error;
        }
        throw new AppError(500,"Error in Fetching sector Detail in sector service");
    }
}


export async function handleGetSectorBySectorName(data){
    try {
        const sectorDetails = await getSectorBySectorNameRepo(data.sectorName);
        console.log(sectorDetails);
        const response = new GeneralResponce(
            true,
            sectorDetails,
            200,
            "Sector Details related to search Fetched Successfully"
        );
        return response;
    } catch (error) {
        if(isAppError(error)){
            throw error;
        }
        throw new AppError(500,"Error in Fetching sector details by name");
    }
}


export async function handleUpdateSectorBySectorId(data){
    try {
        const sectorId = data.sectorId;
        console.log("Entered into service layer");
        const updatedSectorData = await updateSectorBySectorIdRepo(sectorId,data);
        const response = new GeneralResponce(
            true,
            updatedSectorData,
            200,
            "Sector Data Updated Successfully"
        );    
        return response;
    } catch (error) {
        if(isAppError(error)){
            throw error;
        }
        throw new AppError(500,"Error in Updating Sector Data in sector service.");
    }
}

export async function handleDeleteSectorBySectorId(data){
    try {
        
        const sector = await deleteSectorBySectorIdRepo(data.sectorId);
        const response = new GeneralResponce(
            true,
            sector,
            200,
            "Sector Deleted Successfully"
        );
        return response;

    } catch (error) {
        
        if(isAppError(error)){
            throw error
        }
        throw new AppError(500,"Error in deleting sector document in sector service");
    }
}