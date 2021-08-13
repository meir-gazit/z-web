import mongoose from "mongoose"
const Schema = mongoose.Schema
import Room from "./Room"

const LodgeOrderSchema = new Schema({
  rooms: {
    type: [Room],
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.models.LodgeOrder || mongoose.model("LodgeOrder", LodgeOrderSchema)
