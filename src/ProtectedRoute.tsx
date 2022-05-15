import {Navigate, Outlet, useLocation} from "react-router";
import Login from "./components/Login/Login";
import {useSelector} from "react-redux";
import {RootStateType} from "./redux/redux-store";

const useAuth = () => {

    let isAuth = useSelector<RootStateType, boolean>(state => state.Auth.data.isAuth)
    return isAuth
}

const ProtectedRoute = () => {
    const location = useLocation()
    const isAuth = useAuth()
    return (
        isAuth ? <Outlet/> : <Navigate to={'/login'} replace state={{from: location}}/>
    );
};

export default ProtectedRoute;
