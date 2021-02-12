import React, {useState, useEffect} from 'react'
import {Row, Col, Card, ListGroup, ListGroupItem} from 'react-bootstrap';

function PopularMovies() {
    
    const [movieData, setMovieData] = useState();
    
    useEffect(
        ()=>{
          getMovieData();
        },[]
      );

      const URL ="https://api.themoviedb.org/3/movie/popular?api_key=4cbc973cc51b293b011be7fd914a7e24&language=en-US";
    function getMovieData(){
      fetch(URL)
        .then(response => response.json())
        .then(result => setMovieData(result.results))
        .catch(error => console.log('error', error));
    }
    function displayMovies (){
        if(movieData && movieData[0].title){
            return(
                movieData.map(item => 
                            (
                                <Col className="col-md-3 col-sm-12 mt-5">
                                <Card className="card">
                                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text >
                                            {item.overview}
                                        </Card.Text>
                                        <hr />
                                        <ul className="text-left">
                                            <li><span>Popularity:</span>{item.popularity}</li>
                                            <li><span>Vote: </span>{item.vote_average}</li>
                                            <li><span>Release Date:</span> {item.release_date} </li>
                                        </ul>
                                    </Card.Body>
                                   
                                </Card>
                            </Col>
                            )
                        )
            )
        }
    }

    
    return (
        <>
        <Row className="mt-5 mx-auto">
            <Col className="col-sm-12">
            <h2>Popular Movies</h2>
            </Col>
            {displayMovies()}
        </Row>
        </>
    )
}

export default PopularMovies
