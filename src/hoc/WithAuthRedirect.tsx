import React, {ComponentType} from 'react'
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {RootStateType} from "../redux/store";

type MapStatePropType = {
    isAuth: boolean
}

const mapStateToProps = (state: RootStateType): MapStatePropType => {
    return {
        isAuth: state.Auth.data.isAuth
    }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: MapStatePropType) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Navigate to={'/login'}/>
        return <Component {...restProps as T}/>
    }
    return connect(mapStateToProps)(RedirectComponent)
}
