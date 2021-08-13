import mongoose from 'mongoose'
const Schema = mongoose.Schema

const RoomSchema = new Schema({
	adults: {
		type: Number,
		required: true
	},
	children: {
		type: Number,
		required: true
	},
	created: {
		type: Date,
		default: Date.now
	}
})

export default mongoose.models.Room || mongoose.model("Room", RoomSchema)