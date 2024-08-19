
import { Box, Snackbar, TextField, Stack } from '@mui/material'
import MuiAlert from '@mui/material/Alert';
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
  const subject = language === 'Es' ? 'Asunto' : 'Subject';
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
    subject: '',
    message: '',
    nombre: '',
    correo: '',
    asunto: '',
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
      // setLoading(false)
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
  // const [loading, setLoading] = useState(false);

  // const handleLoading = (touched) => {
  //   console.log(Object.keys(touched).length);

  //   if (Object.keys(touched).length !== 0) {
  //     setTimeout(()=> {
  //       setLoading(true)
  //     },300)
  //   }
  // }
  /* END LOADING */

  /* BOTTON SEND */
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  /* END BOTTON SEND */

  return (
    <>
      <div className='w-full'>
        <h2 className='font-condensed font-black tracking-widest visible text-5xl dark:text-white text-center py-9'>
          {contact}
          <span className='w-14 h-[2px] bg-tertiary m-auto block rounded-full'></span>
        </h2>
        <div className='md:flex md:w-full md:h-full md:justify-evenly'>
          {/* CONTENT TEXT */}
          <div className='hidden md:block'>
            <div className='w-full md:h-full m-auto max-w-[550px] my-3 md:flex md:items-center'>
              <p className='font-condensed font-black tracking-widest xl:text-8xl sm:text-6xl l bg-gradient-to-r from-primary via-secondary to-tertiary text-transparent bg-clip-text text-center py-2'>
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
                <div className='w-auto'>
                  <div className='rounded-lg   dark:outline dark:outline-1 dark:outline-tertiary w-full h-full m-auto max-w-[500px] md:min-w-[350px] md:h-auto md:max-w-[550px] flex-col p-5'>
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

                      {/* SUBJECT */}
                      <TextField
                        type='text'
                        id='subject' 
                        name='subject'
                        value={values.subject} 
                        label={subject}
                        helperText={touched.subject && (language === 'Es' ? errors.asunto : errors.subject)}
                        error={touched.subject && errors.subject  }
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
                      {/* <LoadingButton 
                        type='submit'
                        variant="outlined"
                        loading={loading}
                        onClick={() => handleLoading(touched)}
                        fullWidth
                        style={{ marginTop: '20px' }}
                      >
                        {send}
                      </LoadingButton> */}
                      <button
                        type='submit'
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave} 
                        className={`w-full my-4 bg-transparent relative overflow-hidden px-4 py-2 rounded-full font-condensed font-black tracking-widest text-xl shadow-2xl text-black dark:text-white transition duration-1000 ease-in-out ${hovered? 'outline outline-1 outline-secondary dark:outline-tertiary': 'outline-none'}`}
                      >
                        <span className={`bg-gradient-to-r from-primary via-secondary to-tertiary absolute h-full left-0 bottom-0 transition-width duration-300 ease-in-out z-[-1] ${hovered? 'w-0': 'w-full'}`}></span>
                        {send}
                      </button>

                      {/* SOCIAL MEDIA */}
                      <div className='w-full flex justify-start mt-2'>

                        {/* LINKEDIN */}
                        <a 
                          href="https://www.linkedin.com/in/fran-galeano/" 
                          rel="noopener noreferrer" 
                          target="_blank"
                          className='mx-2' 
                        >
                            <i className="bi bi-linkedin text-xl dark:text-[#828282] text-[#828282]"></i>
                        </a>
                       {/* INSTAGRAM */}
                        <a 
                          href="https://www.linkedin.com/in/fran-galeano/" 
                          rel="noopener noreferrer" 
                          target="_blank"
                          className='mx-2'
                        >
                          <i className="bi bi-instagram text-xl dark:text-white"></i>
                        </a>
                       {/* WHATSAPP */}
                        <WhatsappButton />
                        {/* GITHUB */}
                        <a 
                          href="https://github.com/fg-francogaleano" 
                          rel="noopener noreferrer" 
                          target="_blank"
                          className='mx-2'
                        >
                          <i className="bi bi-github text-xl dark:text-white"></i>
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
