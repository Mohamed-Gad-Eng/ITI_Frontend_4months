import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/slices/favorite";
import { useEffect, useState } from "react";
import { filmsAction } from "../store/slices/films";


export function useFilm() {
    const [currentPage, setCurrentPage] = useState(1);
    const favorite = useSelector((state) => state.favorite.favorite)
    const filmsState = useSelector((state) => state.films.films)
    const dispatch = useDispatch()

    const toggleFavorite = (film) => {
        const exists = favorite.some(item => item.id === film.id);

        if (exists) {
            dispatch(removeFavorite(film.id));
        } else {
            dispatch(addFavorite(film));
        }
    };

    useEffect(() => {
        // getFilms(currentPage)
        dispatch(filmsAction(currentPage))
    }, [currentPage])

    return [toggleFavorite, favorite, filmsState, currentPage, setCurrentPage]
}



    //Old Logic 

    // const handleAddition = (film) => {
    //     dispatch(addFavorite(film))
    // }
    // const handleDelete = (film) => {
    //     dispatch(removeFavorite(film))
    // }

    
    // Before using thunk hooks to make the film global array
        
    // const [films, setFilms] = useState([])
    // const getFilms = async (page) => {
    //     try {
    //         dispatch(filmsAction(page))        //page passing
    //         // const res = await getAllFilms(page)
    //         // setFilms(res.data.results)
    //         // setTotalPages(res.data.total_pages)
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }