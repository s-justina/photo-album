export const FIRST_SEARCH = "FIRST_SEARCH";


export const firstSearch = ()=>{
    console.log('dziala')
  return {
      type: FIRST_SEARCH,
      payload: true,
  }
};