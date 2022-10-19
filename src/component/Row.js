import React, { useEffect, useState } from 'react'
import '../styles/Row.css'
import axios from "../axios"

function Row({ title, fetchUrl, bigRow = false }) {
    const [movies, setMovies] = useState([]);
    const img_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        axios.get(fetchUrl)
            .then(res => {
                setMovies(res.data.results);
            })
            .catch(e => {
                console.log(e)
            })

    }, [fetchUrl]);

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row__images'>
                {movies.map((movie) =>
                    ((bigRow && movie.poster_path) ||
                        (!bigRow && movie.backdrop_path)) && (
                        <img
                            className={`row__image ${bigRow && "row__imageBig"}`}
                            // siempre que se representan muchos datos es recomendable agregarle la key para indentificar
                            key={movie.id}
                            src={`${img_url}${bigRow ? movie.poster_path : movie.backdrop_path
                                }`} alt={movie.name} />
                    )


                )};
            </div>

        </div>
    )
}

export default Row

