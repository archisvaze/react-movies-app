import { useEffect } from "react";
import MovieCard from "./MovieCard";
import LoadingScreen from "./LoadingScreen";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/exports";
import { setLoading, setMovies } from "../slices/mySlice";
import { useNavigate } from "react-router-dom";




function App(props) {
    const state = useSelector(state => state.myState);
    const dispatch = useDispatch();
    let navigate = useNavigate();
    useEffect(() => {
        dispatch(setLoading(true));
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=14fafe6d7792756ff3a9c32c527eae57")
            .then(response => response.json())
            .then(data => {
                dispatch(setLoading(false));
                dispatch(setMovies(data.results));
            })

// eslint-disable-next-line
    }, [])

    function Search(movieName) {
        dispatch(setLoading(true));
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=14fafe6d7792756ff3a9c32c527eae57&query=${movieName}`)
            .then(response => response.json())
            .then(data => {
                dispatch(setLoading(false));
                dispatch(setMovies(data.results))
            })

    }

    return (

        <>
            {state.loading === false ? (

                <div className="main-container">
                    <div className="header">
                        <div className="header-title">
                            <span className="l1">M</span> <span className="l2">O</span> <span className="l3">V</span> <span className="l4">I</span> <span className="l5">E</span> <span className="l6">S</span>
                        </div>
                        <div className="search-container">
                            <input onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    Search(e.target.value);
                                    e.target.blur()
                                    e.preventDefault();
                                }
                            }}
                                placeholder="Search for a movie" className="search-input" type="text" />
                            <button onClick={() => navigate("/watchlist")} className="watchlist-btn">Watchlist</button>
                        </div>

                    </div>
                    <div className="container">
                        {state.movies.map(movie => {
                            if (movie.poster_path) {
                                return (
                                    <Link key={movie.id} to={`/${movie.id}`} >
                                        <MovieCard key={movie.id}
                                            movie={movie} />
                                    </Link>
                                )
                            } else return (<span key={movie.id}></span>)
                        })}
                    </div>
                </div>

            ) : (
                <LoadingScreen />
            )
            }

        </>



    )


}

export default App;

