import HomeCard from "../../components/Card";
import Pagination from "../../components/Pagination";
import { useFilm } from "../../hooks/useFilm";




export default function Films() {


    const [toggleFavorite, favorite, filmsState, currentPage, setCurrentPage] = useFilm()

    return (
        <div className="min-h-screen bg-gray-100">

            <div className="max-w-7xl mx-auto px-4 pt-8">
                <h1 className="text-3xl font-bold text-gray-900">Popular Movies</h1>
                <p className="text-gray-600 mt-1">Browse trending films and add your favorites</p>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filmsState.results.map((item) => (
                        <HomeCard
                            key={item.id}
                            item={item}
                            toggleFavorite={toggleFavorite}
                            isFavorite={favorite.some(fav => fav.id === item.id)}
                        />
                    ))}
                </div>
            </div>


            {/* Pagination */}
            <div className="pb-10">
                <Pagination
                    currentPage={currentPage}
                    totalPages={filmsState.total_pages}
                    onPageChange={setCurrentPage}
                />
            </div>
        </div>
    );

}