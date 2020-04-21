import {FIRST_SEARCH} from "./actions";
const initialState = {
    firstSearchDone:false,
};
const reducer = (state=initialState, action)=>{
  switch(action.type){
      case FIRST_SEARCH:
          return {
              firstSearchDone:action.payload
          };
      default: return state
  }
};
export default reducer