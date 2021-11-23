import { Navigate, useLocation } from "react-router"
import UseAuth from "../../UseHooks/UseAuth"



const PrivateRoute = ({children}) =>{
    const {user,loading} = UseAuth()
    const location = useLocation()

    if(loading) return ('Loading......')


    if(user.email){
        return children;
    }
    else{
        return <Navigate to="/login" state={{ from: location }} />;
    }

}

export default PrivateRoute;