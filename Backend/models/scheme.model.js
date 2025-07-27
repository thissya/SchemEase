import { SCHEMA_CONST } from "../constants/schema.constants.js";
import mongoose from "mongoose";

const schemeSchema = new mongoose.Schema({
  schemeName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  eligibility: {
    type: String,
    required: true,
  },
  document: {
    type: String,
    required: true,
  },
  steps: {
    type: String,
    required: true,
  },
  whereToApply: {
    type: String,
    required: true,
  },
  sectorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: SCHEMA_CONST.SECTOR,
  },
  keywords: {
    type: [String],
    required: true,
  },
});

export const SchemeModel = mongoose.model(SCHEMA_CONST.SCHEME, schemeSchema);
