import React, { useEffect, useState } from 'react';
import { Card, Image } from 'semantic-ui-react';
import { getMoviesDetail } from '../services/MovieServices';
import { useParams } from 'react-router';

const MovieDetail = ({ movieId }) => {
  const [movieDetail, setMovieDetail] = useState(null);
  const params = useParams();

  useEffect(() => {
    // Fetch movie details when the component mounts
    getMoviesDetail(params.id)
      .then((data) => {
        setMovieDetail(data);
      })
      .catch((error) => {
        console.error('Error fetching movie details:', error);
      });
  }, [movieId]);

  if (!movieDetail) {
    return <div>Loading...</div>;
  }

  return (
    <Card>
      <Image src={movieDetail.moviePoster} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{movieDetail.movieName}</Card.Header>
        <Card.Meta>{movieDetail.movieGenre}</Card.Meta>
        <Card.Description>{movieDetail.movieDescription}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default MovieDetail;
