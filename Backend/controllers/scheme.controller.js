import { createSchemaDTO, getSchemeBySchemeIdDTO, getSchemeBySchemeNameDTO, updateSchemeDTO } from "../dtos/scheme.dto.js";
import { handleCreateScheme, handleDeleteSchemeBySchemeId, handleGetAllScheme, handleGetSchemeByName, handleGetSchemeBySchemeId, handleGetSchemeBySectorId, handleUpdateSchemeBySchemeId } from "../services/scheme.service.js";
import { isAppError } from "../utils/error.js";
import { GeneralResponce } from "../utils/generalResponse.js";


export async function createScheme(req,res,next){
    try {
        const data = new createSchemaDTO(req.body);
        const response = await handleCreateScheme(data);
        return res.status(response.statusCode).json(response);
    } catch (error) {
        next(error);
    }
}

export async function getAllScheme(req,res,next){
    try {
        // console.log("Entered into the Scheme Controller :");
        // console.log("In controller : "+response);
        const response = await handleGetAllScheme();
        return res.status(response.statusCode).json(response);
    } catch (error) {
        next(error);
    }
}

export async function getSchemeBySchemeId(req,res,next){
    try {
        const data = new getSchemeBySchemeIdDTO(req.body);
        const response = await handleGetSchemeBySchemeId(data);
        return res.status(response.statusCode).json(response);
    } catch (error) {
        next(error);
    }
}

export async function getSchemeBySectorId(req,res,next){
    try {
        const data = new  getSchemeBySchemeIdDTO(req.body);
        const response = await handleGetSchemeBySectorId(data);
        return res.status(response.statusCode).json(response);
    } catch (error) {
        next(error);
    }
}

export async function getSchemeBySchemeName(req,res,next){
    try {
        const data = new getSchemeBySchemeNameDTO(req.body);
        const response = await handleGetSchemeByName(data);
        return res.status(response.statusCode).json(response);
    } catch (error) {
        next(error);
    }
}

export async function updateSchemeBySchemeId(req,res,next){
    try {
        const data = new updateSchemeDTO(req.body);
        const response = await handleUpdateSchemeBySchemeId(data);
        return res.status(response.statusCode).json(response);
    } catch (error) {
        next(error);
    }
}

export async function deleteSchemeBySchemeId(req,res,next){
    try {
        const data = new getSchemeBySchemeIdDTO(req.body);
        const response = await handleDeleteSchemeBySchemeId(data);
        return res.status(response.statusCode).json(response);
    } catch (error) {
        next(error);
    }
}
 