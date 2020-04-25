import ls from "local-storage";
import {ADD_FAVOURITES} from "../redux/actions";

export const loadFavouriteImages = () => {
    const data = ls.get('FavouriteImages');

    if (!data) {
        return []
    } else {
        return data
    }
}

export const saveFavouriteImages = (catImage, type) => {
    let data = loadFavouriteImages();
    if(type === ADD_FAVOURITES){
        data = [...data, catImage];
    } else {
        data = data.filter(img => img.src !== catImage.src)
    }

    ls.set('FavouriteImages', data);

}