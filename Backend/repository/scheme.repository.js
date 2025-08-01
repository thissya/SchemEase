import { SchemeModel } from "../models/scheme.model.js";


export async function createSchemeRepo(data){
    const newScheme = new SchemeModel(data);
    return await newScheme.save();
}

export async function getAllSchemeRepo(){
    return await SchemeModel.find({});
}

export async function getSchemeBySchemeIdRepo(schemeId){
    return await SchemeModel.findById(schemeId);
}

export async function getSchemeByNameRepo(schemeName){
    return await SchemeModel.find({schemeName:{$regex:new RegExp(schemeName,'i')}});
}

export async function getSchemeBySectorIdRepo(sectorId){
    return await SchemeModel.find({sectorId:sectorId});
}

export async function updateSchemeBySchemeIdRepo(data){
    return await SchemeModel.findByIdAndUpdate(
        data.schemeId,
        {$set:data},
        {new:true}
    );
}

export async function deleteSchemeBySchemeIdRepo(schemeId){
    return await SchemeModel.findByIdAndDelete(schemeId);
}