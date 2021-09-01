const initialState = {
    plates: [],
    
}

export const ActionTypes = {
    SET_PLATES: 'SET_PLATES',
    NEW_PLATE: 'NEW_PLATE',
    EDIT_PLATE: 'EDIT_PLATE',
    DELETE_PLATE: 'DELETE_PLATE',
}

export const ActionCreators = {
    setPlates: payload => ({ type: ActionTypes.SET_PLATES, payload }),
    newPlate: payload => ({ type: ActionTypes.NEW_PLATE, payload }),
    editPlate: payload => ({ type: ActionTypes.EDIT_PLATE, payload }),
    deletePlate: payload => ({ type: ActionTypes.DELETE_PLATE, payload }),
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_PLATES:
            return { ...state, plates: [...action.payload] };
        case ActionTypes.NEW_PLATE:
            return { ...state, plates: [action.payload, ...state.plates] };
        case ActionTypes.EDIT_PLATE:
            var plates = state.plates.map(plate => {
                if (plate.id === action.payload.id) {
                    plate = action.payload;
                }
                return plate;
            });
            return { ...state, plates: [...plates] };
        case ActionTypes.DELETE_PLATE:
             plates = state.plates.filter(plate => plate.id !== action.payload.id);
            return { ...state, plates: [...plates] };
        default:
            return state;
    }
}