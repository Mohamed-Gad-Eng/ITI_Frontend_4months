import { useSelector, useDispatch } from "react-redux";
import {FavoriteCard} from "../../components/Card";
import { removeFavorite } from "../../store/slices/favorite";


export default function Favorites() {
  const favorite = useSelector(state => state.favorite.favorite);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-gray-100">

      <div className="max-w-7xl mx-auto px-4 pt-8">
        <h1 className="text-3xl font-bold text-gray-900">Your Favorites ❤️</h1>
        <p className="text-gray-600 mt-1">Movies you saved to watch later</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {favorite.length === 0 ? (
          <div className="text-center text-gray-500 py-20">
            No favorites yet !!
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {favorite.map(item => (
              <FavoriteCard
                key={item.id}
                item={item}
                onDelete={() => dispatch(removeFavorite(item.id))}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
