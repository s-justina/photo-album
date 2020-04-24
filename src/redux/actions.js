import axios from "axios";

export const FIRST_SEARCH = "FIRST_SEARCH";
export const FETCH_DATA = 'FETCH_DATA';

export const firstSearch = () => {
    return {
        type: FIRST_SEARCH,
        payload: true,
    }
};
export const fetchData = (url) => {
    return dispatch => {
        console.log(url);
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
                console.log('2', catImages)
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