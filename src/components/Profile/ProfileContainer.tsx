import React, {useEffect} from 'react'
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, ProfileType, updateStatus,} from "../../redux/profileReducer";
import {RootStateType} from "../../redux/store";
import {
    NavigateFunction, Params,
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import {compose} from "redux";

export type ProfileContainerType = {
    getUserProfile: (userID: string) => void
    getStatus: (userID: string) => void
    updateStatus: (status: string) => void
    profile: ProfileType
    status: string
    router: {
        location: Location,
        navigate: NavigateFunction,
        params: Params,
    }
}

class ProfileContainer extends React.Component<ProfileContainerType> {

    componentDidMount() {
        let userID = this.props.router.params.userId
        if (!userID) {
            userID = '23016'
        }
        this.props.getUserProfile(userID)
        this.props.getStatus(userID)
    }

    render() {
        return (
            <Profile
                GetUserProfile={this.props.getUserProfile}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}/>
        )
    }
}

const mapStateToProps = (state: RootStateType) => ({
    profile: state.ProfilePage.profile,
    status: state.ProfilePage.status,
})

function withRouter(Component: any) {
    function ComponentWithRouterProp(props: any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)
