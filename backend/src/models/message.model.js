import mongoose, { Schema } from "mongoose";

const messageSchema = new Schema(
  {
    senderId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiverId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    message: {
      type: String,
    },
    isRead: {
      type: Boolean,
      default: false,
    },
    picture: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Message = mongoose.model("Message", messageSchema);
