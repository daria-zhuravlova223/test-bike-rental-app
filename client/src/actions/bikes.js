import * as api from '../api';


export const getBikes = () => async (dispatch) => {
    try {
        const { data } = await api.fetchBikes();

        dispatch({ type: 'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const createBike = (bike) => async (dispatch) =>{
    try {
        const { data } =  await api.createBike(bike);

        dispatch({ type: 'CREATE', payload: data })
    } catch (error) {
        console.log(error);
    }
}

export const updateBikeStatus = (id, bike) => async (dispatch) => {
    try {
       const { data } = await api.updateBikeStatus(id, bike);
       dispatch({ type: 'UPDATE', payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const deleteBike = (id) => async (dispatch) => {
    try {
        await api.deleteBike(id);
        dispatch({ type: 'DELETE', payload: id })
    } catch (error) {
        console.log(error);
    }
}