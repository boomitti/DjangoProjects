import { getMovies } from "../services/MovieServices";
import React, { useEffect, useState } from 'react';
import { Card, Image } from 'semantic-ui-react'

const Movie = () => {
    const [movies, setMovies] = useState([]);

  useEffect(() => {
    let mounted = true;
    getMovies()
        .then(data => {
        if(mounted) {
            setMovies(data)
        }
        })
    return () => mounted = false;
    }, [])

 return(
    <>
        <Card.Group itemsPerRow={3}>
            {movies.map((mov) =>
                <Card href={`/movies/${mov.movieId}`}>
                    <Image src={mov.moviePoster} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>{mov.movieName}</Card.Header>
                        <Card.Meta>{mov.movieGenre}</Card.Meta>
                    </Card.Content>
                </Card>
            )}
        </Card.Group>
    </>
  );
}

export default Movie;