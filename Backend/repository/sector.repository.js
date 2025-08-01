import { SectorModel } from "../models/sector.model.js";


export async function createSectorRepo(data){
    const newSector = new SectorModel(data);
    return await newSector.save();
}

export async function getAllSectorRepo(){
    return await SectorModel.find();
}

export async function getSectorBySectorIdRepo(sectorId){
    return await SectorModel.findById(sectorId);
}

export async function getSectorBySectorNameRepo(sectorName){
    return await SectorModel.find({sectorName:{$regex:new RegExp(sectorName,'i')}});
}

export async function updateSectorBySectorIdRepo(sectorId,data){
    return await SectorModel.findByIdAndUpdate(
        sectorId,
        {$set:data},
        {new:true}
    );
}

export async function deleteSectorBySectorIdRepo(sectorId){
    return await SectorModel.findByIdAndDelete(sectorId);
}

//not used in Application
export async function deleteSectorBySectorNameRepo(sectorName){
    return await SectorModel.findOneAndDelete({sectorName:sectorName});
}