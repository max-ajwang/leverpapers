import mongoose from 'mongoose';
import {
  ORDER_STATUS,
  PAPER_TYPE,
  ORDER_SORT_BY,
  EDUCATION_LEVEL,
  SUBJECT,
  CITATION_STYLE,
  LANGUAGE,
} from '../utils/constants.js';

const OrderSchema = new mongoose.Schema(
  {
    paperType: {
      type: String,
      enum: Object.values(PAPER_TYPE),
      default: PAPER_TYPE.ESSAY,
    },

    educationLevel: {
      type: String,
      maxlength: 50,
      enum: Object.values(EDUCATION_LEVEL),
      default: EDUCATION_LEVEL.COLLEGE,
    },

    subject: {
      type: String,
      maxlength: 50,
      enum: Object.values(SUBJECT),
      default: SUBJECT.PSYCHOLOGY,
    },

    topic: {
      type: String,
      maxlength: 500,
    },

    pages: {
      type: Number,
    },

    sources: {
      type: Number,
    },

    citationStyle: {
      type: String,
      maxlength: 50,
      enum: Object.values(CITATION_STYLE),
      default: CITATION_STYLE.APA_7TH_EDITION,
    },

    language: {
      type: String,
      maxlength: 20,
      enum: Object.values(LANGUAGE),
      default: LANGUAGE.ENGLISH_US,
    },

    orderStatus: {
      type: String,
      enum: Object.values(ORDER_STATUS),
      default: ORDER_STATUS.BIDDING,
    },

    deadlineDate: {
      type: Date,
    },

    //Text input, instructions:{ }
    //upload files fileupUpload: { }
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

export default mongoose.model('Order', OrderSchema);
