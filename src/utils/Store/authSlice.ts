import { createSlice } from '@reduxjs/toolkit';


const initialState ={
	data:null,
	isLoggedIn:false
}

const authSlice= createSlice({
	name: 'auth',
	initialState,
	reducers :{
		login:(state,action)=>{
			state.data=action.payload;
			state.isLoggedIn=true;
		},
		logout:(state)=>{
			state.data=null;
			state.isLoggedIn=false;
		}
	}
})

const {actions,reducer} =authSlice;
export const save =actions;
export default reducer; 
