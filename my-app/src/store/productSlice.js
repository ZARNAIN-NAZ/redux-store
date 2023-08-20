const { createSlice } = require("@reduxjs/toolkit");
const STATUSES=Object.freeze({
    IDLE:'idle',
    ERROR:'error',
    LOADING:'loading'  
})
const productSlice = createSlice({
  name: "product",
  initialState: {
    data:[],
    status:STATUSES.IDLE,

  },
  reducers: {
    setProducts(state, action) {
      state.data(action.payload);
    },
   
    
  },
});
export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;

//thunk
export function fetchProducts(){
    return async function fetchProductThunk(dispatch ,getState){
        try{
const res= await fetch("https://fakestoreapi.com/products")
const data=await res.json()
dispatch(setProducts)
        }
        catch(err){

        }
    }
}
