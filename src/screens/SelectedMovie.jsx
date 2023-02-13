import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getMovieDetailsByMovieID } from "../common/APIs";
import { APIs, API_KEY, BASE_URL, IMAGE_BASE_URL } from "../common/constants";
import { dotSVG, playButtonSVG } from "../common/svg";

export const SelectedMovie = (props) => {

    let params = useParams();

    const [movieData, setMovieData] = useState(undefined);

    useEffect(() => {
        getMovieDetailsByMovieID(params.id);
    }, []);

    const getMovieDetailsByMovieID = async function (id) {
        return await fetch(BASE_URL + APIs.getMovieByID + id + '?' + new URLSearchParams({
            api_key: API_KEY
        })).then((response) => {
            return response.json();
        }).then((data) => {
            console.log({ data });
            setMovieData(data);
        });
    }

    const convertMinsToHrsMins = (mins) => {
        let h = Math.floor(mins / 60);
        let m = mins % 60;
        h = h < 10 ? '' + h : h;
        m = m < 10 ? '' + m : m;
        return `${h}h ${m}min`;
    }

    const playBtnHandler = () => {
        console.log("play btn clicked");
    }

    return <div className="selected-movie-container">

        <div className="movie-details">
            <span className="movie-name">{movieData?.original_title}</span>

            <div className="movie-addition-info">
                <span className="movie-runtime">{movieData?.release_date.split('-')[0]}</span>
                {dotSVG}
                <span className="movie-runtime">{convertMinsToHrsMins(movieData?.runtime)}</span>

                <span className="">English</span>
            </div>

            <span className="movie-description">{movieData?.overview}</span>

            <span className="play-btn" onClick={playBtnHandler}>{playButtonSVG}</span>


        </div>

        <div className="movie-banner">
            <img src={IMAGE_BASE_URL + movieData?.backdrop_path} />
        </div>

    </div>
}