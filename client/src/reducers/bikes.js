/* eslint-disable import/no-anonymous-default-export */
export default (bikes = [], action) => {
    switch (action.type) {
        case 'UPDATE':
            return bikes.map((bike)=> bike._id === action.payload._id ? action.payload : bike);
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...bikes, action.payload];
        case 'DELETE':
            return bikes.filter((bike)=> bike._id !== action.payload);
        default:
            return bikes;
    }
}

// 