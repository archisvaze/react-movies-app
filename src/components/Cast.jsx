function Cast(props) {
    let castObj = props.castObj;
    let name = castObj.name;
    let profilePath = "http://image.tmdb.org/t/p/w500" + castObj.profile_path;
    return (
        <div className="cast">
            <img src={profilePath} alt="" className="profile-pic" />
            <div className="name">{name}</div>
        </div>
    )
}

export default Cast;