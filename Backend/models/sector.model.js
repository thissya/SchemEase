import mongoose from "mongoose";
import { SCHEMA_CONST } from "../constants/schema.constants.js";

const sectorScheme = new mongoose.Schema({
  sectorName: {
    type: String,
    required: true,
  },
});

export const sectorModel = mongoose.model(SCHEMA_CONST.SECTOR, sectorScheme);
