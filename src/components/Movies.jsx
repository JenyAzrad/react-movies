import React from 'react';
import {Movie} from "./Movie";

function Movies(props) {

    const { movies = [] } = props

    return <div className="movies">
        {movies.length ? movies.map(movie => (
                <Movie key={movie.imdID} {...movie} />
            )) : <h4>Nothing not found</h4>
        }
    </div>
}
export {Movies}