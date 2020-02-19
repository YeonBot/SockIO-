import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
	{
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		name: { type: String, required: true }
	},
	{
		timestamps: true
	}
);
mongoose.set('useCreateIndex',true);
export default mongoose.model('User',userSchema);
