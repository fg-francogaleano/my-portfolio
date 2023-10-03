import { Box, Button, TextField, } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import { Formik } from 'formik';
import validations from './validations';
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

function Contact({ language }) {
  const contact = language === 'Es' ? 'Contactame' : 'Contact';
  const name = language === 'Es' ? 'Nombre' : 'Name';
  const email = language === 'Es' ? 'Correo electrónico' : 'Email';
  const message = language === 'Es' ? 'Mesaje' : 'Message';
  const send = language === 'Es' ? 'Enviar' : 'Send';
  const text = language === 'Es' ? '¡Trabajaremos en equipo!' : 'Let is work as a team!';

  const initialValues = {
    name: '',
    email: '',
    message: '',
    nombre: '',
    correo: '',
    mensaje: ''
  }
  
  const refForm = useRef();

  const handlerSubmit = (values) => {
    console.log(refForm.current);
    const serviceId = 'service_rn3w3g9';
    const templateId = 'template_5vwro9e';
    const apiKey = 'pxGg36sd8xaftbeW3';

    emailjs.sendForm(serviceId, templateId, refForm.current, apiKey)
    .then(res => console.log(res.text))
    .catch(err => console.log(err))
  };

  return (
    <>
      <div className='border border-blue-500'>
        <h2 className='font-condensed font-black tracking-widest visible text-3xl dark:text-white text-center py-9'
        >
          {contact}
        </h2>
        <div className='md:flex md:w-full md:h-full md:justify-evenly'>
          {/* CONTENT TEXT */}
          <div className=''>
            <div className='w-full md:h-full m-auto max-w-[550px] my-3 md:flex md:items-center'>
              <p className='font-condensed font-black tracking-widest visible text-4xl dark:text-white text-center py-9'>
                {text}
              </p>
            </div>
          </div>

          {/* CONTENT FORM */}
          <Formik
            initialValues={initialValues}
            validate={(values, language) => validations(values, language)}
            onSubmit={(values, {resetForm}) => {
              resetForm();
              handlerSubmit(values)}}
          >
            {({ values, errors, touched ,handleSubmit , handleChange, handleBlur }) => (
              <>
                <div className='border border-green-700 rounded-lg'>
                  <div className='w-full h-full m-auto max-w-[500px] md:min-w-[350px] md:h-auto md:max-w-[550px] flex-col p-8'>
                    <Box
                      ref={refForm}
                      component="form"
                      onSubmit={handleSubmit}
                      sx={{ flexDirection: 'column' }}
                    >
                      {/* NAME */}
                      <TextField
                        type='text'
                        id='name' 
                        name='name'
                        value={values.name}
                        autoComplete='off'  
                        label={name}
                        helperText={touched.name && (language === 'Es' ? errors.nombre : errors.name)}
                        error={touched.name && errors.name}
                        onChange={handleChange}
                        onBlur={handleBlur} 
                        variant="outlined"
                        fullWidth
                      />
                      
                      {/* EMAIL */}
                      <TextField
                        type='email'
                        id='email' 
                        name='email'
                        value={values.email} 
                        label={email}
                        helperText={touched.email && (language === 'Es' ? errors.correo : errors.email)}
                        error={touched.email && errors.email}
                        onChange={handleChange}
                        onBlur={handleBlur} 
                        variant="filled"
                        fullWidth
                      />

                      {/* MESSAGE */}
                      <TextField
                        type='text'
                        id='message'
                        name='message'
                        value={values.message}                      
                        label={message}
                        helperText={touched.message && (language === 'Es' ? errors.mensaje : errors.message)}
                        error={touched.message && errors.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        multiline
                        rows={4}
                        variant="standard"
                        fullWidth
                      />

                      {/* SUBMIT */}
                      <Button 
                        type='submit'
                        endIcon={<SendIcon />}
                        fullWidth
                        variant="standard"
                      >
                        {send}
                      </Button>
                    </Box> 
                  </div>
                </div>
              </>
            )}
          </Formik>
        </div>
      </div>
    </>
  )
}

export default Contact
