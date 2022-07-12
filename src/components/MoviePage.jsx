import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingScreen from "./LoadingScreen";
import Genre from './Genre';
import Cast from './Cast';
import youtubeIcon from '../youtube-icon2.png'

function MoviePage(props) {

    let { movieID } = useParams();

    let [movieObj, setMoviesObj] = useState([]);
    let [loading, setLoading] = useState(true);
    let [videoObj, setVideoObj] = useState([]);
    let [castArr, setCastArr] = useState([]);



    console.log(movieID)



    let posterPath = "http://image.tmdb.org/t/p/w500";
    let youtubePath = "https://www.youtube.com/e?v="


    useEffect(() => {

        setTimeout(() => setLoading(false), 1500)
        fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=14fafe6d7792756ff3a9c32c527eae57`)
            .then(response => response.json())
            .then(data => setMoviesObj(data))
        fetch(`https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=14fafe6d7792756ff3a9c32c527eae57`)
            .then(response => response.json())
            .then(data => setVideoObj(data))

        //get cast data

        fetch(`https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=14fafe6d7792756ff3a9c32c527eae57`)
            .then(res => res.json())
            .then(info => setCastArr(info.cast))

    }, [movieID])




    return (
        <>

            {loading === false ? (

                <div className="mp-main-container">
                    <img className="backdrop" src={posterPath + movieObj.backdrop_path} alt="" />
                    <div className="backdrop-overlay"></div>

                    <div className="movie-page-container">
                        <div className="mp-poster">
                            <img src={posterPath + movieObj.poster_path} alt="" />
                        </div>
                        <div className="mp-info">
                            <div className="mp-title">{movieObj.original_title}</div>
                            <div className="mp-tagline">{movieObj.tagline}</div>
                            <div className="mp-overview">{movieObj.overview}</div>
                            <div className="cast-container">

                                {castArr.slice(0, 4).map(castObj => {
                                    return (<Cast key={castObj.id} castObj={castObj} />)
                                })}
                            </div>
                            <div className="genre-container">
                                {movieObj.genres.map(genreObj => {
                                    return (<Genre key={genreObj.id} genreObj={genreObj} />)
                                })}
                            </div>


                            <a className='video' target="_blank" rel="noreferrer" href={youtubePath + videoObj.results[0].key}><img className='youtube-icon' src={youtubeIcon} alt="" /> Watch Trailer</a>



                        </div>
                    </div>
                </div>

            ) : (
                <LoadingScreen />
            )
            }

        </>


    )
}

export default MoviePage;