import React from "react";
import { Field ,FormikErrors } from "formik";

const Input = ({
    required,
    touched,
    errors,
    customHandleOnChange,
    className
}) => {
    let error = ''
    let nameSeparate = name.split('.')
    let handleOnChange = {}

    if(customHandleOnChange) {
        handleOnChange = {
            onChange: (e) => customHandleOnChange(e.target.value)
        }
    }

    if (errors && Array.isArray(nameSeparate) && errors[nameSeparate[0]]) {
        let separate = name.split('.')
        if (
            separate &&
            separate.length > 0 &&
            errors[separate[0]][separate[1]] &&
            touched[separate[0]] &&
            touched[separate[0]][separate[1]]
          ) {
            error = 'error';
          }
    }

    return (
        <Field
            name={name}
            className={`${error} ${className}`}
        />
    )
}

export default Input
 