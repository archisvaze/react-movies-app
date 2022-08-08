import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { addToWatchlist } from "../slices/mySlice";

function MovieCard(props) {
    let state = useSelector(state => state.myState);
    let dispatch = useDispatch();

    let posterPath = "http://image.tmdb.org/t/p/w500";
    let movie = props.movie;
    let movieTitle = movie.original_title;
    let moviePoster = posterPath + movie.poster_path;
    let movieOverview = movie.overview;
    let movieRating = movie.vote_average;
    const [showWatchlist_button, setshowWatchlist_button] = useState(true)
    useEffect(() => {
        for (let obj of state.watchlist) {
            if (obj.id === movie.id) {
                setshowWatchlist_button(false)
            }
        }
        // eslint-disable-next-line
    }, [state.watchlist])

    return (
        <div className="card-container">
            <img src={moviePoster} alt="" className="poster" />
            <div className="overlay">
                <div className="title">{movieTitle}</div>
                <div className="overview">{movieOverview}</div>
                <div className="rating">❤ {movieRating}</div>
                <button style={{ display: showWatchlist_button === true ? "flex" : "none" }} onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation();
                    dispatch(addToWatchlist(movie))
                }} className="add">Add to Watchlist</button>

            </div>

        </div>
    )
}

export default MovieCard;