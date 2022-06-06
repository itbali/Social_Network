import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/authReducer";
import {RootStateType} from "../../redux/store";

type HeaderComponentType = {
    id: number | null
    isAuth: boolean
    login: string
    ava: string
    getUserAuthData: () => void
}

class HeaderContainer extends React.Component<HeaderComponentType> {
    // componentDidMount() {
    //     this.props.getUserAuthData()
    // }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const MapStateToProps = (state: RootStateType) => ({
    id: state.Auth.data.id,
    isAuth: state.Auth.data.isAuth,
    login: state.Auth.data.login,
    ava: state.ProfilePage.profile.photos.small,
})
export default connect(MapStateToProps, {getUserAuthData: getAuthUserData})(HeaderContainer)
