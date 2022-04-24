import React from 'react'
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {ProfileType, SetUserProfile} from "../../redux/ProfileReducer";
import {RootStateType} from "../../redux/redux-store";
import {
    NavigateFunction, Params,
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import {samuraiApi} from "../../api/api";

export type ProfileContainerType = {
    SetUserProfile: (profile: ProfileType) => void
    profile: ProfileType
    router: {
        location: Location,
        navigate: NavigateFunction,
        params: Params,
    }
}


class ProfileContainer extends React.Component<ProfileContainerType> {

    componentDidMount() {

        samuraiApi.getProfile(this.props.router.params.userId)
            .then((data) => {
                this.props.SetUserProfile(data)
            })
    }

    render() {
        return (
            <Profile SetUserProfile={this.props.SetUserProfile} profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state: RootStateType) => ({
    profile: state.ProfilePage.profile
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

export default connect(mapStateToProps, {SetUserProfile})(withRouter(ProfileContainer));
// export default connect(mapStateToProps, {SetUserProfile})(ProfileContainer)
