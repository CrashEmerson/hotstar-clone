import { APIs, API_KEY, BASE_URL } from "./constants";


export const getTrendingBannerDetails = async function () {
    return await fetch(BASE_URL + APIs.getTrendingBannerByDay + '?' + new URLSearchParams({
        api_key: API_KEY
    })).then((response) => {
        return response.json();
    }).then((data) => { return data.results });
}


export const getTopRatedMovieDetails = async function () {
    return await fetch(BASE_URL + APIs.getTopRatedMovie + '?' + new URLSearchParams({
        api_key: API_KEY
    })).then((response) => {
        return response.json();
    }).then((data) => { return data.results });
}


// export const getMovieDetailsByMovieID = async function (id) {
//     return await fetch(BASE_URL + APIs.getMovieByID + id + '?' + new URLSearchParams({
//         api_key: API_KEY
//     })).then((response) => {
//         return response.json();
//     }).then((data) => { return data.results });
// }


// ?api_key=50b524a9940beb395abc6cada25a52f9&language=en-US&page=1