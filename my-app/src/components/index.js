import React from 'react'
import *  as Yup from 'yup'
import { Formik, Form, Field } from 'formik'

const dadosVazios = [{
  nome: '',
  sobrenome: '',
  email: ''
}]

const validaEFunciona = Yup.object().shape({
  dadosVazios: Yup.array().of(
    Yup.object().shape({
      nome: Yup.string().required('Required'),
      sobrenome: Yup.string().required('Required'),
      email: Yup.string().email('Email inválido').required('Required')
    })
  )
})

export const aaa = () => (
  <>
    <h1>Funciona por favor</h1>
    <Formik
      initialValues = {{
        dadosVazios
      }}
      validationSchema={validaEFunciona}
      onSubmit = { values => {
        console.log(values)
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name='nome' />
          { touched.nome && errors.nome && <div>{ errors.name }</div> }
          <Field name='sobrenome' />
          { touched.sobrenome && errors.sobrenome && <div>{ errors.sobrenome }</div> }
          <Field name='email' />
          { touched.email && errors.email && <div>{ errors.email }</div> }

          <button type='submit'>Funciona</button>
        </Form>
      )}
      </Formik>
  </>
)
