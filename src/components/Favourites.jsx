import { useContext } from 'react';
import { FavouritesContext } from '../context/FavouriteContext';

function Favourites(props) {
    const {removeFavourites,addToFavourites, favourites} = useContext(FavouritesContext)
    
    
    return (
        <div className='w-full'>
            <div className='min-h-100 bg-gradient-to-b from-black to-black/90 py-20 flex flex-col gap-4'>
                <h1 className='text-xl text-white px-4'>Your Favourites</h1>
                {favourites.length == 0? 
                    (<div className='text-gray-400 text-lg px-4'>No favourites yet</div>):
                    (<div className='flex px-4'>
                        {favourites.map((movie) => (
                            <div key={`${movie.imdbID}`} className='relative'><img src={movie.Poster} alt="" className='min-w-40 lg:min-w-60 max-h-60 lg:max-h-80 rounded-lg peer ' />
                                <div className="absolute bottom-0 flex flex-col items-center justify-center rounded-lg cursor-context-menu bg-gradient-to-t from-black to-transparent p-4 w-full mt-2 text-sm opacity-0 hover:opacity-100 peer-hover:opacity-100   font-semibold text-white">
                                    <p>{movie.Title}</p>
                                        <div 
                                            onClick={() => removeFavourites(movie.imdbID)}
                                            className='bg-black/70 backdrop-blur-4xl flex justify-center w-full p-2 cursor-pointer rounded'>Remove
                                        </div>
                                    
                                    
                                </div>
                            </div>
                        ))}
                    </div>)
                }
            </div>
        </div>
    );
}

export default Favourites