import { createSlice } from "@reduxjs/toolkit";
let localWatchlist = [];

if (localStorage.getItem("watchlist") === null) {
    localWatchlist = [];
}
else {
    localWatchlist = JSON.parse(localStorage.getItem("watchlist"));
}

let initialState = {};
initialState = { watchlist: localWatchlist, movies: [], loading: false };

const mySlice = createSlice({
    name: "mySlice",
    initialState: initialState,
    reducers: {
        addToWatchlist: (state, action) => {
            let count = 0;
            for (let obj of state.watchlist) {
                if (obj.id === action.payload.id) {
                    count++;
                }
            }
            if (count === 0) {
                state.watchlist.push(action.payload)
                localStorage.setItem("watchlist", JSON.stringify(state.watchlist))
            }
        },
        removeFromWatchlist: (state, action) => {
            for (let i in state.watchlist) {
                if (state.watchlist[i].id === action.payload) {
                    state.watchlist.splice(i, 1)
                }
            }
            localStorage.setItem("watchlist", JSON.stringify(state.watchlist))
        },
        setMovies: (state, action) => {
            state.movies = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },



    }

})


export const { addToWatchlist, removeFromWatchlist, setMovies, setLoading } = mySlice.actions;
export default mySlice.reducer;