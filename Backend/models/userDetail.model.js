import mongoose from "mongoose";
import {
  ANNUALINCOME,
  AREATYPE,
  CASTE,
  EDUCATIONALQUALIFICATION,
  GENDER,
  MARITALSTATUS,
  RELIGION,
  STATE,
} from "../constants/userDetail.constants.js";
import { SCHEMA_CONST } from "../constants/schema.constants.js";


const userDetailSchema = new mongoose.Schema({
    userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: SCHEMA_CONST.USER, 
    required: true,
    unique: true, 
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    enum: GENDER,
    default: GENDER.MALE,
    required: true,
  },
  maritalStatus: {
    type: String,
    enum: MARITALSTATUS,
    default: MARITALSTATUS.SINGLE,
    required: true,
  },
  state: {
    type: String,
    enum: STATE,
    default: STATE.TAMIL_NADU,
    required: true,
  },
  areaType: {
    type: String,
    enum: AREATYPE,
    default: AREATYPE.RURAL,
    required: true,
  },
  caste: {
    type: String,
    enum: CASTE,
    default: CASTE.GENERAL,
    required: true,
  },
  religion: {
    type: String,
    enum: RELIGION,
    default: RELIGION.HINDU,
    required: true,
  },
  educationalQualification: {
    type: String,
    enum: EDUCATIONALQUALIFICATION,
    required: true,
  },
  student: {
    type: Boolean,
    required: true,
  },
  farmer: {
    type: Boolean,
    required: true,
  },
  startUp: {
    type: Boolean,
    required: true,
  },
  disability: {
    type: Boolean,
    required: true,
  },
  exServiceMan: {
    type: Boolean,
    required: true,
  },
  sportsMan: {
    type: Boolean,
    required: true,
  },
  annualIncome: {
    type: String,
    enum: ANNUALINCOME,
    default: ANNUALINCOME.LESSTHAN_10K,
    required: true,
  },
});

export const userDetailModel = mongoose.model(SCHEMA_CONST.USERDETAILS,userDetailSchema);