import React, { useEffect } from 'react';
import {Container, Typography} from '@material-ui/core';
import Form from './components/Form/Form';
import { useDispatch } from 'react-redux';

import { getBikes } from './actions/bikes'
import BikesList from './components/BikesList/BikesList';
import useStyles from './styles';
import RentList from './components/RentList/RentList';

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getBikes());
    }, [dispatch]);

    return (
      <Container maxwidth="lg">
        <Typography className={classes.heading} variant='h4' align='center'>Awesome Bike Rental</Typography>
          <Form/>
          <RentList/>
          <BikesList/>
          
      </Container>
    );
}

export default App;