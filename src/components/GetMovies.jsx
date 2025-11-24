import React, { useEffect, useState } from 'react';

function GetMovies(props) {

    const [movies, setMovies] = useState([])
    const [count, setCount] = useState(0)

    

    useEffect(() =>  {
        fetch('https://www.omdbapi.com/?s=batman&apikey=61c5cb5b')
        .then((res) => res.json())
        .then((data) => {console.log(data)
            if (data.Search){
                setMovies(data.Search)
            }})
    })

    
    return (
        <div className='min-h-screen text-white '>
            <div className='p-4 '>
                <h1 className='text-xl'>Batman movies</h1>
                <div className='flex flex-nowrap gap-1.5 py-4 overflow-x-auto scrollbar-hide'>
                    {movies.map((movie, index) => (
                        <div key={`${movie.imdbID}-${index}`}
                            
                            className={`relative`}
                        >
                            <img src={movie.Poster}
                            alt=""
                            className='max-w-40 rounded-lg transition-all duration-100 peer'
                        />  
                    
                            <p className="absolute bottom-0 rounded-lg cursor-pointer bg-gradient-to-t from-black to-transparent p-4 w-full mt-2 text-sm font-semibold text-white opacity-0 peer-hover:opacity-100 transition-opacity duration-300">
                                {movie.Title}
                            </p>
                        </div> 
                    ))}
                </div>
                
            </div>
            
        </div>
        
    );
}

export default GetMovies;