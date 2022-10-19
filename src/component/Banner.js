import React, { useEffect, useState } from "react";
import "../styles/Banner.css"
import axios from "../axios"
import requests from "../Requests";

function Banner() {
    
    // Evito el desbordamiento de descrpcion de la pelicula con los caracteres que desee
    const stopText = (string, num) => {
        return string?.length > num ? string.substr(0, num - 1) + "..." : string;
    };

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        axios.get(requests.fetchNetflixOriginals)
            .then(res => {
                setMovie(
                    // Numero aleatorio para setear la pelicula aleatoria
                    res.data.results[
                    Math.floor(Math.random() * res.data.results.length - 1)
                    ]);
            })
            .catch(e => {
                console.log(e)
            })
    }, []);
    console.log(movie);
    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center",
            }}
        >
            <div className="banner__content">
                <h1 className="banner__title">{movie?.name || movie?.title || movie?.original_name}</h1>

                <h2 className="banner__description">{stopText(
                    movie?.overview, 152
                )}.</h2>
                <div className="banner__buttons">
                    <button className="banner__button-1">Play Episode</button>
                    <button className="banner__button-2">More info</button>
                </div>
            </div>

            <div className="banner--fadeButton" />

        </header>
    )
}
export default Banner 