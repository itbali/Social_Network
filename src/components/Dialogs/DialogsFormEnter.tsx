import React from 'react';
import {Field, Form, Formik} from "formik";
import * as Yup from 'yup';


type DialogsFormEnterType = {
    sendMessage: (text: string) => void
}
const MessageSendValidationSchema = Yup.object().shape({
    message: Yup.string()
        .min(2, 'Minimum 2 symbols!')
        .max(100, 'Max 100 symbols')
        .required('Required'),
});

const DialogsFormEnter = (props: DialogsFormEnterType) => {

    return (
        <Formik
            initialValues={{
                message: '',
            }}
            validationSchema={MessageSendValidationSchema}
            onSubmit={(values, {resetForm, setErrors}) => {
                props.sendMessage(values.message);
                resetForm({})
            }}
        >
            {({errors, touched}) => (
                <Form>
                    <Field id={'message'} name={'message'}/>
                    {errors.message && touched.message ? <div>{errors.message}</div> : null}
                    <button type={'submit'}>Send</button>
                </Form>)}
        </Formik>
    );
};

export default DialogsFormEnter;
