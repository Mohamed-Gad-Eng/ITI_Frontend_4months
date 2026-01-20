export default function Home({ user }) {
    return (<>

        <div key={user.id} className="w-xs bg-white border border-gray-200 rounded-2xl shadow-md p-6 my-4 mx-auto flex flex-col items-center text-center">
            <div className="w-28 h-24 rounded-full  border-2 border-gray-300">
                <img className="w-full h-full object-cover rounded-full" src={user.image} alt={user.name} />
            </div>
            <h2 className="mt-4 text-xl font-semibold text-gray-900">{user.firstName + user.lastName}</h2>
            <span className = {`mt-3 px-4 py-1 text-sm rounded-full ${(user.gender == "male") ? "bg-green-600" : "bg-red-600"} text-white capitalize`} >
                {user.gender}
            </span>
            <p className="text-gray-500 text-sm mt-1">
                {user.email}
            </p>
        </div>


    </>)
}
