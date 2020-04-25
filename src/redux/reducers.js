import {ADD_FAVOURITES, FETCH_DATA, FIRST_SEARCH, REMOVE_FAVOURITES} from "./actions";
import ls from "local-storage";
import {saveFavouriteImages} from "../Utils/Functions";

const initialState = {
    firstSearchDone: false,
    catImages: [],
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FIRST_SEARCH:
            return {
                ...state,
                firstSearchDone: action.payload
            };
        case FETCH_DATA:
            return {
                ...state,
                catImages: action.payload
            };
        case ADD_FAVOURITES:
        case REMOVE_FAVOURITES:
            state.catImages.forEach(catImage => {
                if(catImage.src === action.payload.src){
                    catImage.isFavourite = action.type === ADD_FAVOURITES;
                }
            });
            saveFavouriteImages(action.payload, action.type);
            return {
                ...state,
                catImages: [...state.catImages],
            };
        default:
            return state

    }
};
export default reducer