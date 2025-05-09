import { createSlice } from "@reduxjs/toolkit";

// initialState:{isLoggedIn: false},
//     reducers :{
//         login : (state)=>{
//             state.isLoggedIn = true;
//         },
//         logout : (state)=>{
//             state.isLoggedIn = false;
//             state.role = "";
//             localStorage.clear();
//         }
//     }

const authSlice = createSlice({
    name:'auth',
    initialState: {
    isLoggedIn: localStorage.getItem('isLoggedIn') === 'true'
  },
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
      localStorage.setItem('isLoggedIn', 'true');
    },
    logout: (state) => {
      state.isLoggedIn = false;
      localStorage.removeItem('isLoggedIn');
    }
  }
    
})

export const authActions = authSlice.actions;
export default authSlice.reducer;