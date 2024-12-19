import { createContext, useContext, useState } from "react";

// create context
const MovieContext=createContext();

export const useMovieContext=()=>useContext(MovieContext)

//Provider
export const MovieProvider=({children})=>{
    
    //Write all states here
    const [favourite,setFavourite]=useState([]);


    // Add fav
    const addToFavourite=(movie)=>{   
        setFavourite((prev)=>[...prev,movie])
    }

    // Delete fav
    const deleteFromFavourite=(movieId)=>{
        favourite.filter((movie)=> movieId !== movie.id)
        //setFavourite((prev)=>prev.filter((movie)=> movieId !== movie.id))
    }

    // Is Favourite
    const isFavourite=(movieId)=>{
        return favourite.some((movie)=>movie.id === movieId)
    }

    const value={
        addToFavourite,
        deleteFromFavourite,
        isFavourite,
        favourite
    }
    // Check if this is fav

    return <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
}