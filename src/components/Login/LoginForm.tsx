import React from 'react';
import {Field, Form, Formik} from "formik";
import * as Yup from 'yup';

type LoginPropsType = {
  callback: (email: string, pass: string, remember: boolean, setSubmitting: (isSubmition: boolean) => void, setStatus: (status: string) => void) => void
  responseMessage: string
}

const LoginValidationSchema = Yup.object().shape({
  login: Yup.string()
    .email('Неверный email')
    .required('Обязательно'),
  password: Yup.string()
    .min(2, 'Минимум 2 символа!')
    .required('Обязательно')
});

const LoginForm = (props: LoginPropsType) => {

  return (
    <Formik
      initialValues={{
        login: '',
        password: '',
        remember: false,
      }}
      onSubmit={(values, actions) => {
        actions.setStatus(null)
        props.callback(values.login, values.password, values.remember, actions.setSubmitting, actions.setStatus)
        actions.resetForm({})
        actions.setSubmitting(true)
      }}

      validationSchema={LoginValidationSchema}
    >
      {
        ({status, isSubmitting, touched, errors}) => (

          <Form>
            <div>
              <label htmlFor="login">Login</label>
              <Field name="login" id={"login"}/>
              {errors.login && touched.login && <div>{errors.login}</div>}
            </div>
            <div>
              <label htmlFor="password">Pass</label>
              <Field type="password" name="password"/>
              {errors.password && touched.password && <div>{errors.password}</div>}
            </div>
            <div>
              <label htmlFor="remember">Remember Me</label>
              <Field type="checkbox" name="remember"/>
            </div>
            {status && <div>{status}</div>}
            <div>
              <button type="submit" name="submit" disabled={isSubmitting}>Login</button>
            </div>
          </Form>
        )
      }
    </Formik>
  )
}

export default LoginForm;
