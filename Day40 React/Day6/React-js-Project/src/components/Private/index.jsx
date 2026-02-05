import { useSelector } from "react-redux"
import { Navigate } from "react-router"

export default function Private({ children }) {
    const isLoggedin = useSelector((state) => state.isLoggedin.isLoggedin)
    if (isLoggedin) {

        return <>{children}</>
    } else {
        return <Navigate to='/login' />
    }

}
