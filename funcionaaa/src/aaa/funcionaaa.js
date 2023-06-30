import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const initialValues = {
  dadosVazios: [{
    nome: '',
    sobrenome: '',
    email: ''
  }]
};

const validaEFunciona = Yup.object().shape({
  dadosVazios: Yup.array().of(
    Yup.object().shape({
      nome: Yup.string().required('Required'),
      sobrenome: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email').required('Required')
    })
  )
});

// validaEFunciona.validateAt('data', initialValues)
//     .then(() => {
//         console.log('deu certooooooooo')
//     })
//     .catch((error) => {
//         console.log('Deu ruim')
//     })

export const Funciona = () => (
  <>
    <h1>Funciona por favor</h1>
    <Formik
      initialValues={initialValues}
      validationSchema={validaEFunciona}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name='dadosVazios[0].nome' />
          <ErrorMessage name='dadosVazios[0].nome' component='div' />

          <Field name='dadosVazios[0].sobrenome' />
          <ErrorMessage name='dadosVazios[0].sobrenome' component='div' />

          <Field name='dadosVazios[0].email' />
          <ErrorMessage name='dadosVazios[0].email' component='div' />

          <button type='submit'>Funciona</button>
        </Form>
      )}
    </Formik>
  </>
);
