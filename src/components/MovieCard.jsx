function MovieCard(props) {
    let movieTitle = props.movieTitle;
    let moviePoster = props.moviePoster;
    let movieOverview = props.movieOverview;
    let movieRating = props.movieRating;
   
    return (
        <div className="card-container">
            <img src={moviePoster} alt="" className="poster" />
            <div className="overlay">
                <div className="title">{movieTitle}</div>
                <div className="overview">{movieOverview}</div>
                <div className="rating">❤ {movieRating}</div>
            </div>

        </div>
    )
}

export default MovieCard;