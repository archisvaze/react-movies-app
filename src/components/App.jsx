import { useEffect } from "react";
import { useState } from "react";
import MovieCard from "./MovieCard";
import LoadingScreen from "./LoadingScreen";
import { Link } from 'react-router-dom';




function App(props) {
    //difining variables
    let movieTitle = ""
    let moviePoster = ""
    let movieOverview = ""
    let movieRating = ""

    let movieID = ""


    let [moviesArr, setMoviesArr] = useState([]);
    let [loading, setLoading] = useState(true);



    //get popular movies


    let posterPath = "http://image.tmdb.org/t/p/w500";
    // let searchUrl = "https://api.themoviedb.org/3/search/movie?api_key=14fafe6d7792756ff3a9c32c527eae57&query="

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000)
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=14fafe6d7792756ff3a9c32c527eae57")
            .then(response => response.json())
            .then(data => setMoviesArr(data.results))
    }, [])

    function Search(movieName) {
        console.log(movieName);
        setLoading(true)
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=14fafe6d7792756ff3a9c32c527eae57&query=${movieName}`)
            .then(response => response.json())
            .then(data => setMoviesArr(data.results))
        setTimeout(() => {
            setLoading(false)
        }, 2000)


    }

    return (

        <>
            {loading === false ? (

                <div className="main-container">
                    <div className="header">
                        <div className="header-title">Movie Time</div>
                        <div className="search-container">
                            <input onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    Search(e.target.value);
                                    e.target.blur()
                                    e.preventDefault();
                                }
                            }}
                                placeholder="Search for a movie" className="search-input" type="text" />
                        </div>
                    </div>
                    <div className="container">
                        {moviesArr.map(arr => {
                            movieTitle = arr.original_title;
                            moviePoster = posterPath + arr.poster_path;
                            movieOverview = arr.overview;
                            movieRating = arr.vote_average;
                            movieID = arr.id;
                            if (arr.poster_path) {
                                return (
                                    <Link key={movieID} to={`/${movieID}`} >
                                        <MovieCard key={movieID} movieTitle={movieTitle} moviePoster={moviePoster} movieOverview={movieOverview} movieRating={movieRating}
                                            movieID={movieID} />
                                    </Link>
                                )
                            } else return (<span key={movieID}></span>)
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

