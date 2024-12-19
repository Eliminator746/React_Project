import { createContext, useContext, useEffect, useState } from "react";

// create context
const MovieContext=createContext();

export const useMovieContext=()=>useContext(MovieContext)

//Provider
export const MovieProvider=({children})=>{
    
    //Write all states here
    const [favourite,setFavourite]=useState([]);

    // Store fav items in local storage

    // This logic makes sure when revisiting the page or on page reload saved favorites don't get lost
    useEffect(()=>{
        const storedFavs = localStorage.getItem("favourite")
        if(storedFavs)
            setFavourite(JSON.parse(storedFavs))

    },[])

    useEffect(()=>{
        localStorage.setItem("favourite",JSON.stringify(favourite))
    },[favourite])
    // Above logic makes sure favourite is again converted back to array, for further 

    // Add Favourite
    const addToFavourite=(movie)=>{   
        setFavourite((prev)=>[...prev,movie])
    }

    // Delete Favourite
    const deleteFromFavourite=(movieId)=>{

        // favourite.filter((movie)=> movieId !== movie.id)  --> this does not update the state in React,
        setFavourite((prev)=>prev.filter((movie)=> movieId !== movie.id))
    }

    // Is Favourite
    const isFavourite= (movieId) => {

        return favourite.some(movie=>movie.id === movieId)
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