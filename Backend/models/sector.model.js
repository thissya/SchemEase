import mongoose from "mongoose";
import { SCHEMA_CONST } from "../constants/schema.constants.js";

const sectorScheme = new mongoose.Schema({
  sectorName: {
    type: String,
    unique:true,
    required: true,
  },
  description:{
    type:String,
    required:true, 
  }
});

export const SectorModel = mongoose.model(SCHEMA_CONST.SECTOR, sectorScheme);
