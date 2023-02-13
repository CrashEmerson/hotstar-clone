import { useNavigate } from "react-router-dom"
import { IMAGE_BASE_URL } from "../common/constants"
import { playButtonSVG } from "../common/svg";

export const MovieThumbnail = (props) => {

    let navigate = useNavigate();

    const getMovieId = (id) => {
        navigate(`/movie/${id}`)
    }

    return <div className="movie-thumbnail-container">

        <span className="movie-thumbnail-heading">{props.heading}</span>

        <div className="movie-thumbnail-item-holder">
            {props.movieData && props.movieData.map((item, index) => {
                return <div key={index} className="movie-thumbnail-item" onClick={() => getMovieId(item.id)}>
                    <img className="movie-poster" src={IMAGE_BASE_URL + item.poster_path} />

                    <div className="movie-details">
                        <span className="movie-name">{item.original_title}</span>
                        <span className="movie-description">{item.overview}</span>
                    </div>

                    <span className="movie-play-btn">
                        {playButtonSVG}
                    </span>

                    <div className="overlay"></div>

                </div>
            })}

        </div>

    </div>
}