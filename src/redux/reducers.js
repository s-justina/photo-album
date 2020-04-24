import {FETCH_DATA, FIRST_SEARCH} from "./actions";
const initialState = {
    firstSearchDone:false,
    catImages: [],
};
const reducer = (state=initialState, action)=>{
  switch(action.type){
      case FIRST_SEARCH:
          return {
              ...state,
              firstSearchDone:action.payload
          };
      case FETCH_DATA:
          console.log('3', action)
          return {
              ...state,
            catImages: action.payload
          };
      default: return state

  }
};
export default reducer