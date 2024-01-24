import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        contnet: null,
        userVideo: null,
        userPlaylist: null,
    },
    reducers: {
        addComment: (state, action) => {
            state.userComment = action.payload;
        },
        addUser: (state, action) => {
            state.user = action.payload;
        },
        addVideo: (state, action) => {
            state.userVideo = action.payload;
        },
        addUserPlaylist: (state, action) => {
            state.userPlaylist = action.payload;
        }
    }
})

export const { addComment , addUser, addVideo, addUserPlaylist} = userSlice.actions;

export default userSlice.reducer;