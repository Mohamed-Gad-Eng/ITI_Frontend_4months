import { use, useEffect, useState } from "react"
import { useParams } from "react-router"
import { getFilmById } from "../../services/films.api"
import FilmDetails from "../../components/Detail"




export default function Details(){
    const {id} = useParams()

    const [film, setFilm] = useState({})

    useEffect(() => {
        getFilmById(id).then((res) => {
            setFilm(res.data)
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    return(<>
        <div className="flex justify-center">
            <FilmDetails item={film}/>
        </div>
    </>)
}
