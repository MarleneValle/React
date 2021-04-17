import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Select Author');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory(); 

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog) 
        }).then(() => {
            console.log('New post added');
            setIsPending(false);
            // history.go(1);
            history.push('/')
        });
    }

    return ( 
        <div className="create">
            <h2>Add a New Post</h2>
            <form onSubmit={ handleSubmit }>
                <label>Title:</label>
                <input
                type="text"
                required
                value={ title }
                onChange={(e) => setTitle(e.target.value)}
                />
                <label>Body:</label>
                <textarea cols="30" rows="10"
                required
                value={ body }
                onChange={(e) => setBody(e.target.value)}
                >
                </textarea>
                <label>Author:</label>
                <select
                required
                value={ author }
                onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Select Author">Select Author</option>
                    <option value="Marlene">Marlene</option>
                    <option value="Jesper">Jesper</option>
                    <option value="Martina">Martina</option>
                </select>
               { !isPending &&  <button>Add Post</button>}
               { isPending &&  <button disabled>Adding Post...</button>}
            </form>
        </div>
     );
}
 
export default Create;