import axios from "axios";

export const FIRST_SEARCH = "FIRST_SEARCH";
export const FETCH_DATA = 'FETCH_DATA';
export const ADD_FAVOURITES = 'ADD_FAVOURITES';
export const REMOVE_FAVOURITES = 'REMOVE_FAVOURITES';
export const SHOW_SPINNER = 'SHOW_SPINNER';
export const HIDE_SPINNER = 'HIDE_SPINNER';

export const firstSearch = () => {
    return {
        type: FIRST_SEARCH,
        payload: true,
    }
};
export const fetchData = (url) => {
    return dispatch => {
        dispatch(showSpinner());
        axios.get(url)
            .then(response => {
                const catImages = response.data.hits.map(hit => {
                    return {
                        src: hit.largeImageURL,
                        height: 1,
                        width: 1,
                        tags: hit.tags,
                        likes: hit.likes,
                    }
                });
                dispatch(dispatchData(catImages));
                dispatch(hideSpinner());
            }).catch(e => {
                alert('Network error: Could not fetch images data!. Please try again.');
                console.warn('Error: ',e)
        })
    }
};
export const dispatchData = (catImages) => {
    return {
        type: FETCH_DATA,
        payload: catImages
    }
};
export const showSpinner = () => {
    return {
        type: SHOW_SPINNER,
        payload: true,
    }
};export const hideSpinner = () => {
    return {
        type: HIDE_SPINNER,
        payload: false,
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