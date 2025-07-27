import mongoose from "mongoose";
import { ANNUALINCOME, AREATYPE, CASTE, GENDER, MARITALSTATUS, RELIGION, STATE } from "../constants/userDetail.constants.js";

const userDetailSchema = new mongoose.Schema({
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
    default:MARITALSTATUS.SINGLE,
    required:true
  },state:{
    type:String,
    enum:STATE,
    default:STATE.TAMIL_NADU,
    required:true
  },areaType:{
    type:String,
    enum:AREATYPE,
    default:AREATYPE.RURAL,
    required:true
  },caste:{
    type:String,
    enum:CASTE,
    default:CASTE.GENERAL,
    required:true
  },religion:{
    type:String,
    enum:RELIGION,
    default:RELIGION.HINDU,
    required:true
  },educationQualification:{
    type:String,
    enum:[],
    required:true
  },student:{
    type:Boolean,
    required:true,
  },farmer:{
    type:Boolean,
    required:true
  },startUp:{
    type:Boolean,
    required:true
  },disability:{
    type:Boolean,
    required:true
  },exServiceMan:{
    type:Boolean,
    required:true
  },sportsMan:{
    type:Boolean,
    required:true
  },annualIncome:{
    type:String,
    enum:ANNUALINCOME,
    default:ANNUALINCOME.LESSTHAN_10K,
    required:true
  }
});
