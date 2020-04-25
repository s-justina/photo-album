import axios from "axios";

export const FIRST_SEARCH = "FIRST_SEARCH";
export const FETCH_DATA = 'FETCH_DATA';
export const ADD_FAVOURITES = 'ADD_FAVOURITES';
export const REMOVE_FAVOURITES = 'REMOVE_FAVOURITES';

export const firstSearch = () => {
    return {
        type: FIRST_SEARCH,
        payload: true,
    }
};
export const fetchData = (url) => {
    return dispatch => {
        axios.get(url)
            .then(response => {
                const catImages = response.data.hits.map(hit => {
                    return {
                        src: hit.previewURL,
                        height: 1,
                        width: 1,
                        tags: hit.tags,
                        likes: hit.likes,
                    }
                });
                dispatch(dispatchData(catImages));
            }).catch(e => console.warn('Error: ',e))
    }
};
export const dispatchData = (catImages) => {
    return {
        type: FETCH_DATA,
        payload: catImages
    }
};

export const addToFavourites = (catImage)=>{
    return {
        type: ADD_FAVOURITES,
        payload: catImage,
    }
};

export const removeFromFavourites = (catImage)=>{
    return {
        type: REMOVE_FAVOURITES,
        payload: catImage,
    }
};