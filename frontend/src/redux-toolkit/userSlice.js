import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: '',
    email: '',
    name: '',
    role: '',
    phone: '',
    address: '',
    images: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        fetchUser: (state, action) => {
            Object.assign(state, action.payload)
        },
        logout: (state) => {
            Object.assign(state, initialState)
        }
    }
})

export const { fetchUser, logout } = userSlice.actions
export default userSlice.reducer
