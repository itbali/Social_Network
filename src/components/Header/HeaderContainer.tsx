import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {SetAuthUserData} from "../../redux/AuthReducer";
import {ProfileType, SetUserProfile} from "../../redux/ProfileReducer";
import {RootStateType} from "../../redux/redux-store";
import {samuraiApi} from "../../api/api";

type HeaderComponentType = {
    id: number | null
    isAuth: boolean
    login: string
    ava: string
    SetAuthUserData: (id: number, login: string, email: string) => void
    SetUserProfile: (profile: ProfileType) => void
}

class HeaderContainer extends React.Component<HeaderComponentType> {
    componentDidMount() {
        samuraiApi.authCheck()
            .then((response) => {
                if (response.resultCode === 0) {
                    let {id, login, email} = response.data
                    this.props.SetAuthUserData(id, login, email)
                }
            })
            .then(data => {
                axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.id}`)
                    .then(r => {
                        this.props.SetUserProfile(r.data)
                    })
            })
    }

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
export default connect(MapStateToProps, {SetAuthUserData, SetUserProfile})(HeaderContainer)
