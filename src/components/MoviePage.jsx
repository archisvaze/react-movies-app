import { useParams } from 'react-router-dom';

function MoviePage(props) {

    let { movieID } = useParams();
    
    console.log(movieID)
    return (
        <h1>{movieID}</h1>
    )
}

export default MoviePage;