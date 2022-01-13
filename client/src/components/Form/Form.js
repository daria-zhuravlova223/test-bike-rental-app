import React, { useState } from "react";
import { TextField, Button, Typography, Paper, MenuItem } from '@material-ui/core';
import { mergeClasses } from "@material-ui/styles";
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { createBike } from "../../actions/bikes";


const Form = () => {
    const [bikeData, setBikeData] = useState({
        status: 'available', name: '', type: '', price: '', 
    });
    const classes = useStyles();
    const dispatch = useDispatch();

    const bikeTypes = [{label: 'Road', value: 'Road'}, {label: 'Mountain', value: 'Mountain'}, {label: 'City', value: 'City'}, {label: 'Hybrid', value: 'Hybrid'}]

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createBike(bikeData));
        setBikeData( {status: 'available', name: '', type:'', price: ''});
    }

    return (
        <Paper className={mergeClasses.paper}>
            <form autoComplete="off" noValidate className={`${classes.form} ${classes.root}`} onSubmit={handleSubmit}>
                <Typography variant="h5" className={classes.formTitle}>🤑Create new rent</Typography>
                <div class={classes.formInputs}>
                    <TextField
                    name="name"
                    variant="outlined"
                    label="Bike name"
                    fullWidth
                    value={bikeData.name}
                    onChange={(e) => setBikeData({ ...bikeData, name: e.target.value})}/>
                                   <TextField
                    select
                    name="type"
                    variant="outlined"
                    label="Bike type"
                    fullWidth
                    value={bikeData.type}
                    onChange={(e) => setBikeData({ ...bikeData, type: e.target.value })}>
                                {bikeTypes.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                  {option.label}
                                </MenuItem>))}
                                </TextField>
                    <TextField
                    name="price"
                    variant="outlined"
                    label="Rent price"
                    fullWidth
                    value={bikeData.price}
                    onChange={(e) => setBikeData({ ...bikeData, price: e.target.value })}/>
                    <Button className={classes.buttonSubmit} fullWidth variant="contained" size="large" color="primary" type="submit">Submit rent</Button>
                </div>
            </form>
        </Paper>
    );
}

export default Form;