import { Typography, Paper } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { mergeClasses } from "@material-ui/styles";


import Bike from ".././Bike/Bike";


    

const RentList = () => {
    const bikes = useSelector((state) => state.bikes);
    const rentPrice =  bikes.length ? bikes.map(bike=>bike.status === 'rented' ? bike.price : 0).reduce((a,b)=>a+b): null;

    return (
        <>
        <Typography variant="h5">🤩Your rent (${rentPrice})</Typography>
        <Paper className={mergeClasses.paper}>
           {bikes.map((bike) => bike.status === 'rented' ? <Bike key={bike._id} bike={bike} /> : null)}
        </Paper>
        </>
    );
}

export default RentList;