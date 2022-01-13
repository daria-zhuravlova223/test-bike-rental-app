import mongoose from 'mongoose';

const bikeSchema = mongoose.Schema({
    name: String,
    type: String,
    price: Number,
    status: String
});

const Bike = mongoose.model('Bike', bikeSchema);

export default Bike;