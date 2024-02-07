import { createSlice } from "@reduxjs/toolkit";
export const Slices = createSlice({
	name: "SlicesData",
	initialState: {
		val: 122,
	},
	reducers: {
		increment: (state) =>{
            state.val++;
        },
		decrement: (state)=>{
            state.val--;
        },
	},
});
export const { increment, decrement } = Slices.actions;
export default Slices.reducer;
