
import { Box, Snackbar, TextField, Stack } from '@mui/material'
import MuiAlert from '@mui/material/Alert';
import LoadingButton from '@mui/lab/LoadingButton';
import { Formik } from 'formik';
import validations from './validations';
import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import WhatsappButton from '../WhatsappButton/WhatsappButton'

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Contact({ language }) {
  /* TEXT */
  const contact = language === 'Es' ? 'Contáctame' : 'Contact me';
  const name = language === 'Es' ? 'Nombre' : 'Name';
  const email = language === 'Es' ? 'Correo electrónico' : 'Email';
  const message = language === 'Es' ? 'Mesaje' : 'Message';
  const send = language === 'Es' ? 'Enviar' : 'Submit';
  const text = language === 'Es' ? '¡Trabajemos en equipo!' : 'We work as a team!';
  const alertSuccess = language === 'Es' ? 'Mensaje enviado con éxito' : 'Message sent succesfully';
  const alertError = language === 'Es' ? 'Ocurrió un error vuelva a intertar' : 'An error occurred, try again';
  /* END TEXT */

/* FORM */
  const initialValues = {
    name: '',
    email: '',
    message: '',
    nombre: '',
    correo: '',
    mensaje: ''
  }
  
  const refForm = useRef();

  const handlerSubmit = () => {
    const serviceId = 'service_rn3w3g9';
    const templateId = 'template_5vwro9e';
    const apiKey = 'pxGg36sd8xaftbeW3';

    emailjs.sendForm(serviceId, templateId, refForm.current, apiKey)
    .then(res => {
      console.log(res.text)
      handleClick();
      setLoading(false)
    })
    .catch(err => {
      console.log(err)
      handleClick();
      setSuccess(false)
      setTimeout(()=>{
        setSuccess(true);
      }, 6000)
    })
    // setLoading(false)
  };
  /* END FORM */

  /* ALERT */
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(true);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  /* END ALERT */

  /* LOADING */
  const [loading, setLoading] = useState(false);

  const handleLoading = () => {
    setTimeout(()=> {
      setLoading(true)
    },300)
  }
  /* END LOADING */

  return (
    <>
      <div className='w-full'>
        <h2 className='font-condensed font-black tracking-widest visible text-3xl dark:text-white text-center py-20 md:my-10'>
          {contact}
        </h2>
        <div className='md:flex md:w-full md:h-full md:justify-evenly'>
          {/* CONTENT TEXT */}
          <div className='hidden md:block'>
            <div className='w-full md:h-full m-auto max-w-[550px] my-3 md:flex md:items-center'>
              <p className='font-condensed font-black tracking-widest text-4xl dark:text-white text-center py-9'>
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
                  <div className='w-full h-full m-auto max-w-[500px] md:min-w-[350px] md:h-auto md:max-w-[550px] flex-col p-5'>
                    <Box
                      ref={refForm}
                      component="form"
                      onSubmit={handleSubmit}
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
                        variant="standard"
                        required
                        fullWidth
                        margin='normal'
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
                        variant="standard"
                        required
                        fullWidth
                        margin='normal'
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
                        required
                        fullWidth
                        margin='normal'
                      />

                      {/* SUBMIT */}
                      <LoadingButton 
                        type='submit'
                        variant="outlined"
                        loading={loading}
                        onClick={handleLoading}
                        fullWidth
                        style={{ marginTop: '20px' }}
                      >
                        {send}
                      </LoadingButton>

                      {/* SOCIAL MEDIA */}
                      <div className='w-full flex justify-center mt-8'>

                        {/* LINKEDIN */}
                        <a 
                          href="https://www.linkedin.com/in/fran-galeano/" 
                          rel="noopener noreferrer" 
                          target="_blank" 
                        >
                            <i className="bi bi-linkedin text-2xl px-5 dark:text-white"></i>
                        </a>
                       {/* INSTAGRAM */}
                        <a 
                          href="https://www.linkedin.com/in/fran-galeano/" 
                          rel="noopener noreferrer" 
                          target="_blank"
                        >
                          <i className="bi bi-instagram text-2xl px-5 dark:text-white"></i>
                        </a>
                       {/* WHATSAPP */}
                        <WhatsappButton />
                        {/* GITHUB */}
                        <a 
                          href="https://github.com/fg-francogaleano" 
                          rel="noopener noreferrer" 
                          target="_blank"
                        >
                          <i className="bi bi-github text-2xl px-5 dark:text-white"></i>
                        </a>
                        
                      </div>
                    </Box> 
                  </div>
                  <Stack spacing={2} sx={{ width: '100%' }}>
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                      <Alert onClose={handleClose} severity={success ? 'success': 'error'} sx={{ width: '100%' }}>
                        {success ? alertSuccess : alertError}
                      </Alert>
                    </Snackbar>
                  </Stack>
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
