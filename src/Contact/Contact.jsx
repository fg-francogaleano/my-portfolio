import { Box, Snackbar, TextField, Stack } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { Formik } from "formik";
import validations from "./validations";
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import WhatsappButton from "../WhatsappButton/WhatsappButton";
import { motion } from "framer-motion";
import Button from "../Button/Button";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Contact({ language }) {
  /* TEXT */
  const contact = language === "Es" ? "Contáctame" : "Contact me";
  const name = language === "Es" ? "Nombre" : "Name";
  const email = language === "Es" ? "Correo electrónico" : "Email";
  const subject = language === "Es" ? "Asunto" : "Subject";
  const message = language === "Es" ? "Mesaje" : "Message";
  const send = language === "Es" ? "Enviar" : "Submit";
  const text =
    language === "Es" ? "¡Trabajemos en equipo!" : "We work as a team!";
  const alertSuccess =
    language === "Es"
      ? "Mensaje enviado con éxito"
      : "Message sent succesfully";
  const alertError =
    language === "Es"
      ? "Ocurrió un error vuelva a intertar"
      : "An error occurred, try again";
  /* END TEXT */

  /* FORM */
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
    nombre: "",
    correo: "",
    asunto: "",
    mensaje: "",
  };

  const refForm = useRef();

  const handlerSubmit = () => {
    const serviceId = "service_rn3w3g9";
    const templateId = "template_5vwro9e";
    const apiKey = "pxGg36sd8xaftbeW3";

    emailjs
      .sendForm(serviceId, templateId, refForm.current, apiKey)
      .then((res) => {
        console.log(res.text);
        handleClick();
        // setLoading(false)
      })
      .catch((err) => {
        console.log(err);
        handleClick();
        setSuccess(false);
        setTimeout(() => {
          setSuccess(true);
        }, 6000);
      });
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
    if (reason === "clickaway") {
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

  /* END BOTTON SEND */

  return (
    <>
      <div className="w-full">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -50 },
          }}
          className="font-condensed font-semibold tracking-wide visible md:text-5xl text-4xl dark:text-white text-center py-9"
        >
          {contact}
        </motion.h2>
        <div className="md:flex md:w-full md:h-full md:justify-evenly">
          {/* CONTENT TEXT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -50 },
            }}
            className="hidden md:block"
          >
            <div className="w-full md:h-full m-auto max-w-[550px] md:flex md:items-center flex-1">
              <p className="font-condensed font-black tracking-widest xl:text-7xl sm:text-5xl l bg-gradient-to-r from-primary via-secondary to-tertiary text-transparent bg-clip-text text-center py-2">
                {text}
              </p>
            </div>
          </motion.div>

          {/* CONTENT FORM */}
          <Formik
            initialValues={initialValues}
            validate={(values, language) => validations(values, language)}
            onSubmit={(values, { resetForm }) => {
              resetForm();
              handlerSubmit(values);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleSubmit,
              handleChange,
              handleBlur,
            }) => (
              <div className="w-full flex justify-center flex-1">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  variants={{
                    visible: { opacity: 1, x: 0 },
                    hidden: { opacity: 0, x: 50 },
                  }}
                  className="m-auto rounded-lg outline outline-1 outline-tertiary p-5 shadow-2xl"
                >
                  <div className="h-full m-auto max-w-[350px] md:min-w-[300px] md:h-auto md:max-w-[380px] flex-col p-5 ">
                    <Box ref={refForm} component="form" onSubmit={handleSubmit}>
                      {/* NAME */}
                      <TextField
                        type="text"
                        id="name"
                        name="name"
                        value={values.name}
                        autoComplete="off"
                        label={name}
                        helperText={
                          touched.name &&
                          (language === "Es" ? errors.nombre : errors.name)
                        }
                        error={touched.name && errors.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        variant="standard"
                        required
                        fullWidth
                        margin="normal"
                      />

                      {/* EMAIL */}
                      <TextField
                        type="email"
                        id="email"
                        name="email"
                        value={values.email}
                        label={email}
                        helperText={
                          touched.email &&
                          (language === "Es" ? errors.correo : errors.email)
                        }
                        error={touched.email && errors.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        variant="standard"
                        required
                        fullWidth
                        margin="normal"
                      />

                      {/* SUBJECT */}
                      <TextField
                        type="text"
                        id="subject"
                        name="subject"
                        value={values.subject}
                        label={subject}
                        helperText={
                          touched.subject &&
                          (language === "Es" ? errors.asunto : errors.subject)
                        }
                        error={touched.subject && errors.subject}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        variant="standard"
                        required
                        fullWidth
                        margin="normal"
                      />

                      {/* MESSAGE */}
                      <TextField
                        type="text"
                        id="message"
                        name="message"
                        value={values.message}
                        label={message}
                        helperText={
                          touched.message &&
                          (language === "Es" ? errors.mensaje : errors.message)
                        }
                        error={touched.message && errors.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        multiline
                        rows={4}
                        variant="standard"
                        required
                        fullWidth
                        margin="normal"
                      />
                      <div className="mt-4">
                        <Button childen={send} type={"submit"} />
                      </div>

                      {/* SOCIAL MEDIA */}
                      <div className="w-full flex justify-start mt-2">
                        {/* LINKEDIN */}
                        <a
                          href="https://www.linkedin.com/in/fran-galeano/"
                          rel="noopener noreferrer"
                          target="_blank"
                          className="mx-2"
                        >
                          <i className="bi bi-linkedin text-xl dark:text-white"></i>
                        </a>
                        {/* INSTAGRAM */}
                        <a
                          href="https://www.linkedin.com/in/fran-galeano/"
                          rel="noopener noreferrer"
                          target="_blank"
                          className="mx-2"
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
                          className="mx-2"
                        >
                          <i className="bi bi-github text-xl dark:text-white"></i>
                        </a>
                      </div>
                    </Box>
                  </div>

                  <Stack spacing={2} sx={{ width: "100%" }}>
                    <Snackbar
                      open={open}
                      autoHideDuration={6000}
                      onClose={handleClose}
                    >
                      <Alert
                        onClose={handleClose}
                        severity={success ? "success" : "error"}
                        sx={{ width: "100%" }}
                      >
                        {success ? alertSuccess : alertError}
                      </Alert>
                    </Snackbar>
                  </Stack>
                </motion.div>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default Contact;
