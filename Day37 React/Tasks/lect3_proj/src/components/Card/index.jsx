import { useNavigate } from "react-router"
import { HiOutlineHeart, HiHeart, HiTrash } from "react-icons/hi";


export default function HomeCard({ item, toggleFavorite, isFavorite }) {

    const navigate = useNavigate()
    // const [liked, setLiked] = useState(false);

    const navigateToDetails = (id) => {
        navigate(`/film-details/${id}`)
    }

    return (<>

        <div onClick={() => { navigateToDetails(item.id) }}
            className="bg-white border border-gray-200 rounded-2xl shadow hover:shadow-lg transition cursor-pointer overflow-hidden flex flex-col">
            <div className="relative aspect-16/10 w-full">
                <img
                    className="w-full h-full object-cover"
                    src={"https://image.tmdb.org/t/p/w500" + item.backdrop_path}
                    alt={item.name}
                />

                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        // setLiked(like => !like);
                        toggleFavorite(item);
                    }}
                    className="absolute top-2 right-2 text-2xl bg-white/80 p-1.5 rounded-full hover:bg-white transition">

                    {isFavorite ? (<HiHeart className="text-red-500" />) : (<HiOutlineHeart className="text-red-600" />)}
                </button>
            </div>
            <div className="p-4 text-center flex flex-col gap-2">
                <h2 className="text-lg font-semibold text-gray-900 line-clamp-1">
                    {item.title}
                </h2>

                <div className="flex justify-center">
                    <span className="px-3 py-1 text-sm rounded-full bg-green-600 text-white">
                        {item.vote_average}
                    </span>
                </div>

                <p className="text-gray-500 text-sm">
                    {item.release_date}
                </p>
            </div>
        </div>


    </>)
}

export function FavoriteCard({ item, onDelete }) {

    const navigate = useNavigate()

    const navigateToDetails = (id) => {
        navigate(`/film-details/${id}`)
    }

  return (
    <div onClick={() => { navigateToDetails(item.id) }}
    className="bg-white border border-gray-200 rounded-2xl shadow hover:shadow-lg transition overflow-hidden flex flex-col">

      {/* Image */}
      <div className="relative aspect-16/10 w-full">
        <img
          className="w-full h-full object-cover"
          src={"https://image.tmdb.org/t/p/w500" + item.backdrop_path}
          alt={item.title}
        />

        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          className="absolute top-2 left-2 text-xl bg-white/80 p-2 rounded-full hover:bg-white transition"
        >
          <HiTrash className="text-red-600" />
        </button>
      </div>

      <div className="p-4 text-center flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-gray-900 line-clamp-1">
          {item.title}
        </h2>

        <div className="flex justify-center">
          <span className="px-3 py-1 text-sm rounded-full bg-green-600 text-white">
            {item.vote_average}
          </span>
        </div>

        <p className="text-gray-500 text-sm">
          {item.release_date}
        </p>
      </div>
    </div>
  );
}
