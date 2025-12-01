import { createContext, useEffect, useState } from "react";

export const FavouritesContext = createContext()

export const FavouritesProvider = ({children}) => {

    const [favourites, setFavourites] = useState([])
    const storeFavourites = localStorage.getItem("favourites")
    useEffect(() => {
        if(storeFavourites) {
        setFavourites(JSON.parse(storeFavourites))
    }
    },[])
    useEffect(() => {
        localStorage.setItem("favourites", JSON.stringify(favourites))
    }, [favourites])
    

    const addToFavourites = (movie) => {
        setFavourites((prev) => {
            if(!prev.find((fav) => (
                fav.imdbID === movie.imdbID
            
            ))) {
                return [...prev, movie]
            }
            return prev
        })
    }

    const removeFavourites = (id) => {
        setFavourites((prev) =>(prev.filter((movie) => (movie.imdbID != id))))
    }
    return (
        <FavouritesContext.Provider value={{favourites, addToFavourites, removeFavourites}}>
            {children}
        </FavouritesContext.Provider>
    )
}