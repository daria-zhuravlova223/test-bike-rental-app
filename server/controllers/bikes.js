import Bike from "../models/bike.js";
import mongoose from 'mongoose';

export const getBikes = async (req, res) => {
    try {
        const bikes = await Bike.find();


        res.status(200).json(bikes);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createBike = async (req, res) => {
    const bike = req.body;

    const newBike = new Bike(bike);

    try {
        await newBike.save();

        res.status(201).json(newBike);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

export const updateBikeStatus = async (req, res) => {
    const { id: _id } = req.params;
    const bike = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');
    const updatedBike = await Bike.findByIdAndUpdate(_id, bike, {new: true});
    res.json(updatedBike);
}

export const deleteBike = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');
    await Bike.findByIdAndRemove(id);
    res.json( { message: 'Bike deleted successfully' } );
}