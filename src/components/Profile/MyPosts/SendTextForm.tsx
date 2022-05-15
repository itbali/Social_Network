import React from "react";
import {Field, Form, Formik} from "formik";
import * as Yup from 'yup';

type SendTextFormPropsType = {
    onSubmitButtonClick: (title: string) => void
    submitButtonName: string
    type: "input" | "select" | "textarea"
}
const MessageSendValidationSchema = Yup.object().shape({
    message: Yup.string()
        .min(2, 'Минимум 2 символа!')
        .max(100, 'Максимум 100 символов')
        .required('Обязательно'),
});

export const SendTextForm = (props: SendTextFormPropsType) => {

    return (
        <Formik
            initialValues={{
                message: ''
            }}
            validationSchema={MessageSendValidationSchema}
            onSubmit={(values, actions) => {
                props.onSubmitButtonClick(values.message);
                actions.resetForm({})
            }}
        >
            {({errors, touched}) => (
                <Form>
                    <Field
                        as={props.type}
                        id={"message"}
                        name={"message"}
                    />
                    {errors.message && touched.message && <div>{errors.message}</div>}
                    <div>
                        <button type={"submit"}>{props.submitButtonName}
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    )
        ;
};
