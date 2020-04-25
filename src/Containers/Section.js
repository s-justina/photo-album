import {addToFavourites, firstSearch, removeFromFavourites} from "../redux/actions";
import {connect} from "react-redux";
import Section from "../Components/Section/Section";

const mapStateToProps = (state) => {
    return {
        firstSearchDone: state.firstSearchDone, // (1)
        catImages: state.catImages,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        firstSearch: () => dispatch(firstSearch()),
        addToFavourites: (catImage) => dispatch(addToFavourites(catImage)),
        removeFromFavourites: (catImage) => dispatch(removeFromFavourites(catImage)),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Section); // (3)
