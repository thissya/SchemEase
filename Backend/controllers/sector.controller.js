import { createSectorDTO, getSectorBySectorNameDTO, updateSectorDTO } from "../dtos/sector.dto.js";
import { handleCreateSector, handleDeleteSectorBySectorId, handleGetAllSector, handleGetSectorBySectorId, handleGetSectorBySectorName, handleUpdateSectorBySectorId } from "../services/sector.service.js";


export async function createSector(req,res,next){
    try{
        const data = new createSectorDTO(req.body);
        console.log("Sector Data in controller :",data);

        const response = await handleCreateSector(data);
        return res.status(response.statusCode).json(response);
    }catch(err){
        next(err);
    }
}

export async function getAllSector(req,res,next){
    try {
        const response = await handleGetAllSector();
        return res.status(response.statusCode).json(response);
    } catch (err) {
        next(err);
    }
}

export async function getSectorBySectorName(req,res,next){
    try {
        const data = new getSectorBySectorNameDTO(req.body);
        console.log(data);
        const response = await handleGetSectorBySectorName(data);
        return res.status(response.statusCode).json(response);
    } catch (error) {
        next(error);
    }
}

// completed upto this
export async function getSectorBySectorId(req,res,next){
    try {
        const data = new updateSectorDTO(req.body);
        const response = await handleGetSectorBySectorId(data);
        return res.status(response.statusCode).json(response);
    } catch (error) {
        next(error);
    }
}

export async function updateSectorBySectorId(req,res,next){
    try {
        const data = new updateSectorDTO(req.body);
        const response = await handleUpdateSectorBySectorId(data);
        return res.status(response.statusCode).json(response);
    } catch (error) {
        next(error);
    }
}

export async function deleteSectorBySectorId(req,res,next){
    try {
        const data = Object.assign({},req.body);
        const response = await handleDeleteSectorBySectorId(data);
        return res.status(response.statusCode).json(response);
    } catch (error) {
        next(error);
    }
}