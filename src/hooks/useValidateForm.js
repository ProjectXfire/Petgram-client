import { useState } from 'react'

export const useValidateForm = (e) => {
  const [valuesForm, setValuesForm] = useState({
    email: '',
    password: ''
  })
  const [messageEmptyField, setMessageEmptyField] = useState({})
  const [emptiesFields, setEmptiesField] = useState(false)

  const validateFields = () => {
    let errorFields = {}
    Object.keys(valuesForm).forEach(field => {
      if (!valuesForm[field]) {
        errorFields = {
          ...errorFields,
          [field]: `${field} is required`
        }
      } else {
        errorFields = {
          ...errorFields,
          [field]: ''
        }
      }
    })
    setMessageEmptyField(errorFields)
  }

  const handleFormValues = (e) => {
    setValuesForm({
      ...valuesForm,
      [e.target.name]: e.target.value
    })
    const checkEmptyField = Object.values(valuesForm).map(val => val.length && true)
    const validEmptyFiled = checkEmptyField.every(val => val === true)
    setEmptiesField(validEmptyFiled)
  }

  return [
    valuesForm,
    handleFormValues,
    validateFields,
    messageEmptyField,
    emptiesFields,
    setEmptiesField,
    setValuesForm]
}
