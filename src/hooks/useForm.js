import { useState } from 'react';
import helpHttp from '../components/helpers/helpHttp'

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoaging] = useState(false);
  const [response, setResponse] = useState(null);

  //Asignate values a campos form
  const handleChange = (e) => {
    //Destructuramos
    const{name, value} = e.target;

    setForm({
      ...form,
      [name]:value
    })
  }

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));

    if(Object.keys(errors).length === 0) {
      alert("Enviando formulario")
      setLoaging(true)
      helpHttp()
        .post("htpps://formsubmit.co/ajax/yaormu@gmail.com", {
          body: form,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          }
        })
        .then((res) => {
          setLoaging(false)
          setResponse(true)
          setForm(initialForm)
          setTimeout(() => setResponse(false), 2000)
        })
    } else {
      return
    }
  }


  return {
      form, 
      errors, 
      loading, 
      response, 
      handleChange, 
      handleBlur, 
      handleSubmit
  }
};
