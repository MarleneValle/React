import React, {useState}from 'react';
import axios from 'axios';
import './SearchBar.css'

const SearchBar = () => {

    const [photo, setPhoto] = useState('');
    const [clientId, setClientId] = useState('MtCA5r71LCBbjPzt6NzNq58vKkOtLHjhoFFZ0s6JOdw');
    const [result, setResult] = useState([]);


    function handleChange(event){
        setPhoto(event.target.value)
    }

    function handleSubmit(event){
        console.log(photo);
        const url= "https://api.unsplash.com/search/photos?page=1&query="+photo+"&client_id="+clientId;
        axios.get(url).then(response => {
            console.log(response);
            setResult(response.data.results )
        })
    }

    return (
        <div>
    <form className='flexContainer'>
        <label htmlFor="search">Search Image</label>
        <input 
        className='inputStyle'
        onChange={handleChange}
        type="text"
        name="photo"
        placeholder="Search pictures" />
    </form>     
        <button 
        onClick={handleSubmit}
        type="submit">Search
        </button>
    {result.map((photo)=>(
        <img src={photo.urls.small} />
    ))}            
  
</div>

    )
}

export default SearchBar
