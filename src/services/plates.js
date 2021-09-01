import { ActionCreators } from "../app/platesReducer";
import * as axios from 'axios';

const axiosInstance= axios.create({
    baseURL: 'https://localhost:44325/Plates',
})



export const GetPlates = async (dispatch) => {
    try {
        // API Call
        const {data} = await axiosInstance.get();
        dispatch(ActionCreators.setPlates(data));
    }
    catch {
        console.log('Get Error!!');
    }
}


export const NewPlate = async (dispatch, plate) => {
    try {
        const {data} = await axiosInstance.post('', plate);
        dispatch(ActionCreators.newPlate(data));
    } catch {
        console.log('Add Error');

    }
}
export const EditPlate = async (dispatch, plate) => {
    try {
        //Api Call
        await axiosInstance.put('', plate);
        dispatch(ActionCreators.editPlate(plate));
    } catch {
        console.log('Add Error');

    }
}

export const DeletePlate = async(dispatch, plate) =>{
    try {
        await axiosInstance.delete('', {data: {...plate}});
        dispatch(ActionCreators.deletePlate(plate));
    } catch  {
        console.log('error!');
    }
}