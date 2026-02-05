export default function FilmDetails({ item }) {

    const imageUrl = "https://image.tmdb.org/t/p/w500" + item.backdrop_path;

    return (
        <div className="min-h-screen mt bg-gray-900 text-white">

            <img
                src={imageUrl}
                alt={item.title}
                className="w-full h-[60vh] object-contain bg-black"
            />

            {/* Content below image */}
            <div className="max-w-5xl mx-auto p-8 space-y-6">
                <h1 className="text-4xl font-bold">{item.title}</h1>

                <p className="text-gray-300">{item.overview}</p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-4">
                    <Info label="Language" value={item.original_language?.toUpperCase()} />
                    <Info label="Release Date" value={item.release_date} />
                    <Info label="Popularity" value={item.popularity?.toFixed(1)} />
                    <Info label="Rating" value={`⭐ ${item.vote_average?.toFixed(1)}`} />
                    <Info label="Votes" value={item.vote_count} />
                </div>
            </div>
        </div>

    );
}


function Info({ label, value }) {
    return (
        <div className="bg-gray-800 p-5 rounded-xl">
            <p className="text-gray-400 text-sm">{label}</p>
            <p className="text-lg font-semibold">{value}</p>
        </div>
    );
}