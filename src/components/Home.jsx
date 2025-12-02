import { useContext, useEffect, useState } from 'react';
import './style.css'
import { FavouritesContext } from '../context/FavouriteContext';

function Home(props) {

    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState('')
    const [searchData, setSearchData] = useState([])
    const [showMovie, setShowMovie] = useState(false)

    const {addToFavourites, removeFavourites, favourites} = useContext(FavouritesContext)
    
    
    const isFavourite = (id) => (
        favourites.find((movie) => (movie.imdbID === id))
    )
    
    const searchMovie = (prop) => {
        setSearch(prop)
    }

    useEffect(()=>{
        fetch('https://www.omdbapi.com/?s=mission impossible&apikey=61c5cb5b')
        .then((res) => res.json()).then((data) => {
            setMovies(data.Search)
        })
    },[])

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?s=${search}&apikey=61c5cb5b`)
        .then((res) => (res.json().then((Data) => {
            setSearchData(Data.Search || [])
        })))
    },[showMovie])


    return (
        <> 
            <div className='w-full'>
                <div className='bg-black/90 min-h-100 justify-center flex flex-col gap-4 items-center'>
                    <div className='absolute min-h-100 top-0 bg-gradient-to-b from-black to-transparent w-full'></div>
                    <h1 className='text-4xl lg:text-6xl text-white z-10 p-6'>Search For Your Favourite Movie</h1>
                    <div className=' z-10'>
                        
                        <form action=""
                            onSubmit={(e) => {
                                e.preventDefault()
                                setShowMovie(search)}}
                            className='lg:w-2xl overflow-hidden flex '
                        >
                            <input type="text" className='bg-white text-xl w-full px-2'
                                value={search}
                                onChange={(e) => {searchMovie(e.target.value)}}
                            placeholder='movie, category' />
                            <button type='submit' className='bg-red-600 text-white outline-0 shrink-0 p-2 lg:p-4 cursor-pointer'>Search</button>
                        </form>
                    </div>
                </div>
                <div className='bg-black/90 max-h-min '>
                    <div className='py-2 flex flex-col gap-2'>
                        {(showMovie) && (<div className='px-4 text-white text-xl'><span>Search Results</span></div>)}
                        <div className='flex gap-2 px-4 overflow-x-auto scrollbar-hide'>
                            
                            
                            {searchData.map((movie) => (
                            (<div key={`${movie.imdbID}`} className='relative'><img src={movie.Poster} alt="" className='min-w-40 lg:min-w-60 max-h-60 lg:max-h-80 rounded-lg peer ' />
                                <button className="absolute bottom-0 flex flex-col items-center justify-center rounded-lg cursor-context-menu bg-gradient-to-t from-black to-transparent p-4 w-full mt-2 text-sm font-semibold text-white">
                                    <p>{movie.Title}</p>
                                    {isFavourite(movie.imdbID)? (
                                        <p onClick={() => removeFavourites(movie.imdbID)} className='bg-black/70 backdrop-blur-4xl w-full text-center p-2 cursor-pointer rounded'>Remove</p>
                                    ):(
                                        <div 
                                            onClick={() => addToFavourites(movie)}
                                            className='bg-black/70 backdrop-blur-4xl  w-full text-center p-2 cursor-pointer rounded'>Add to favourites
                                        </div>
                                        )
                                    }
                                    
                                </button>
                            </div>)
                            ))}
                        </div>
                    </div>
                    <div className='py-2 flex flex-col gap-2'>
                        <div className='px-4 text-white text-xl'>
                            <span>Try these movies</span>
                        </div>
                        <div className=' overflow-x-auto flex items-center scrollbar-hide'>
                            <div className='flex gap-2 px-4'>
                            {movies.map((movie, index) => (
                            (<div key={`${movie.imdbID}-${index}`} className='relative'><img src={movie.Poster} alt="" className='min-w-40 lg:min-w-60 max-h-60 lg:max-h-80 rounded-lg peer ' />
                                <div className="absolute bottom-0 flex flex-col items-center justify-center rounded-lg cursor-context-menu bg-gradient-to-t from-black to-transparent p-4 w-full mt-2 text-sm font-semibold text-white">
                                    <p>{movie.Title}</p>
                                    {isFavourite(movie.imdbID)? (
                                        <p onClick={() => removeFavourites(movie.imdbID)} className='bg-black/70 backdrop-blur-4xl w-full text-center p-2 cursor-pointer rounded'>Remove</p>
                                    ):(
                                        <div 
                                            onClick={() => addToFavourites(movie)}
                                            className='bg-black/70 backdrop-blur-4xl  w-full text-center p-2 cursor-pointer rounded'>Add to favourites
                                        </div>
                                        )
                                    }
                                    
                                </div>
                            </div>)
                            ))}
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div> 
        </>
    );
}

export default Home;