import {Navigate, Outlet, useLocation} from "react-router";
import {useSelector} from "react-redux";
import {RootStateType} from "./redux/store";

const useAuth = () => {
    return useSelector<RootStateType, boolean>(state => state.Auth.data.isAuth)
}

const ProtectedRoute = () => {
    const location = useLocation()
    const isAuth = useAuth()
    return (
        isAuth ? <Outlet/> : <Navigate to={'/login'} replace state={{from: location}}/>
    );
};

export default ProtectedRoute;
