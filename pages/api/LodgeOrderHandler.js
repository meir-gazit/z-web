import connectDB from 'middleware/mongodb';
import LodgeOrder from 'models/LodgeOrder';

const LodgeOrderHandler = async ({ LodgeOrder }) => {
	try {
		var created = await LodgeOrder.save();
		return res.status(200).send(created);
	} catch (error) {
		return res.status(500).send(error.message);
	}
};

export default connectDB(LodgeOrderHandler);