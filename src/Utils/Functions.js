import ls from "local-storage";

export const loadFavouriteImages = () => {
    const data = ls.get('FavouriteImages');
    if (!data) {
        return []
    } else {
        return data
    }
}