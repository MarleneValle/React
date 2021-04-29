import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true)
    const [error, setError] =useState(null)

    const handleDelete = (id) => {
        const newBlogs = data.filter(blog => blog.id !== id)
        setData(newBlogs);
    }

    useEffect(() =>{
        const abortCont = new AbortController();


            fetch( url, { signal: abortCont.signal })
                .then(res => {
                    if(!res.ok){
                        throw Error('Could not fech the data for that resource')    
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    if(err.name === 'AbortError') { 
                        console.log('Fetch aborted')
                    } else {
                        setIsPending(false);
                        setError(err.message);
                    }
                });

        return () => abortCont.abort();
        
    }, [url]);

    return { data, isPending, error, handleDelete}
}

export default useFetch;