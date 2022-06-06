import React from 'react';
import LoginForm from "./LoginForm";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/authReducer";
import {useLocation, useNavigate} from "react-router";
import {RootStateType} from "../../redux/store";

const Login = () => {

  const navigate = useNavigate()
  const location: any = useLocation() // TODO ДИЧЬ! ПОЧИНИТЬ НА САППОРТЕ "ANY"

  const dispatch = useDispatch()
  const isAuth = useSelector<RootStateType, boolean>(state => state.Auth.data.isAuth)
  const responseMessage = useSelector<RootStateType, string>(state => state.Auth.messages[0])

  //if loggedIn then kick user to back page if it was or to profile page
  if (isAuth) {
    if (location.state?.from) {
      navigate(location.state.from)
    } else {
      navigate('/profile', {replace: true})
    }
  }

  const loginCallback = (email: string, pass: string, remember: boolean, setSubmitting: (isSubmition: boolean) => void, setStatus: (status: string) => void) => {
    dispatch(login(email, pass, remember, setSubmitting, setStatus))
  }


  return <div>
    <h3>Login</h3>
    <LoginForm callback={loginCallback} responseMessage={responseMessage}/>
  </div>
}


export default Login;
