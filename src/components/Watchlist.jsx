import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import MovieCard from './MovieCard';
import { useNavigate } from 'react-router-dom';
import { removeFromWatchlist } from '../slices/mySlice';


export default function Watchlist() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let state = useSelector(state => state.myState)
  return (
    <div className='main-container'>
      <div className="header">
        <div className="header-title">
          <span className="l1">Watch</span> <span className="l2">List</span>
        </div>

        <button onClick={() => navigate("/")} className="watchlist-btn">Home</button>
      </div>
      <div className="container">
        {state.watchlist.length === 0 && <h1>No movies to watch yet...</h1>}
        {state.watchlist.map(movie => <div key={movie.id} className="watclist-card-container">
          <MovieCard  movie={movie} />
          <button onClick={(e)=>{
             e.preventDefault()
             e.stopPropagation();
             dispatch(removeFromWatchlist(movie.id))

          }} className="remove">X</button>
        </div>)}
      </div>

    </div>
  )
}
