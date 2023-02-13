import { useEffect, useState } from "react"
import { getTopRatedMovieDetails, getTrendingBannerDetails } from "../common/APIs";
import { MovieThumbnail } from "../components/MoveThumbnail";
import { TrendingBanner } from "../components/TrendingBanner"

export const Home = () => {

    const [trendingMovieDetails, setTrendingMovieDetails] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);

    useEffect(() => {
        getTrendingBannerDetails().then((result) => setTrendingMovieDetails(result));
        getTopRatedMovieDetails().then((result) => setTopRatedMovies(result));
    }, []);

    return <div>
        <TrendingBanner bannerData={trendingMovieDetails} />
        <MovieThumbnail heading={'Top Rated'} movieData={topRatedMovies} />
    </div>
}