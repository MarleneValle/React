import { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';

function App() {
  const [movieName, setMovieName] = useState('');
  const [review, setReview] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [newReview, setNewReview] = useState('');

  useEffect(() => {
    Axios.get('http://localhost:3001/api/get').then((response) =>{
      setMovieList(response.data)
    })
  }, [])

  const submitReview = () => {
    Axios.post('http://localhost:3001/api/insert',{
      movieName: movieName,
      movieReview: review,
    });
    
    setMovieList([
        ...movieList,
        { movieName: movieName, movieReview: review },
      ]);
  };

  const deleteReview = (id) => {
    Axios.delete(`http://localhost:3001/api/delete/${id}`).then((response) => {
      setMovieList(
        movieList.filter((val) => {
          return val.id != id;
        })
      );

    });
  };

  const updateReview = (id) => {
    Axios.put('http://localhost:3001/api/update', {
      id: id,
      movieReview: newReview,
    }).then (
      (response) => {
        setMovieList(movieList.map((val) => {
          return val.id==id ? {id: val.id, movieName: val.movieName, movieReview: newReview} : val
        }))
      }
    )
  };


  return (
    <div className="App"> 
    <h1>CRUD application</h1>
      <div className="form">
        <label htmlFor="">Movie Name</label>
        <input
        type="text"
        name="movieName"
        onChange= {(e) =>{
          setMovieName(e.target.value);
        }}/>
        <label htmlFor="">Review</label>
        <input
        type="text"
        name="review"
        onChange= {(e) =>{
          setReview(e.target.value);
        }}/>

        <button onClick={submitReview}>Submit</button>

        {movieList.map((val, key) => {
          return (
            <div className='card'>
              <h1>{val.movieName}</h1>
              <p>{val.movieReview}</p>

              <button onClick={() => {deleteReview(val.id)}}>Delete</button>
              <input
              type="text"
              id='updateInput'
              onChange={(e) => {
                setNewReview(e.target.value); 
              }}/>
              <button onClick={() => {updateReview(val.id);}}>Update</button>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
