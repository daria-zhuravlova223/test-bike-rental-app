
import React from "react";
import { useSelector } from "react-redux";
import {Typography} from '@material-ui/core';


import Bike from ".././Bike/Bike";
    

const BikesList = () => {
    const bikes = useSelector((state) => state.bikes);
    const bikesNumber = bikes.filter((bike)=>bike.status === 'available').length;

    return (
        <>
            <Typography variant="h5">🚲Available bicycles ({bikesNumber})</Typography>
            {bikes.map((bike) => bike.status === 'available' ? <Bike key={bike._id} bike={bike} /> : null)}
        </>
    );
}

export default BikesList;