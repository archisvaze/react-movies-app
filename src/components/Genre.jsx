function Genre(props) {
    let obj = props.genreObj;
    let genre = obj.name;

    return (
        <div className="genre">{genre}</div>
    )
}
export default Genre; 