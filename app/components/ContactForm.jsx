// ContactForm.jsx
import React, { useState,useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

const theme = createTheme();

const useStyles = () => ({
  // Your styling here...
});

const ContactForm = () => {
  const [status, setStatus] = useState('');
  const [emailText, setEmailText] = useState('');
  const [messageText, setMessageText] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true); // New state for email validation
  const [isVisible, setIsVisible] = useState(true);

  const classes = useStyles();

  const validateEmail = (email) => {
    // Simple email validation (you can replace this with a more robust validation)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the email before submitting
    if (!validateEmail(emailText)) {
      setIsValidEmail(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailText, message: messageText }),
      });

      if (response.ok) {
        setStatus('SUCCESS');
        setEmailText('');
        setMessageText('');
        document.getElementById('contact-form').reset();

        // Set isVisible to true after a successful submission
        setIsVisible(true);

        // Reset isVisible to false after a delay (3 seconds in this example)
        setTimeout(() => {
          setIsVisible(false);
        }, 3000);

        // Reset email validation state
        setIsValidEmail(true);
      } else {
        console.error(error);
        setStatus('ERROR');
      }
    } catch (error) {
      console.error(error);
      setStatus('ERROR');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <motion.div
      variants={fadeIn('up',0.5)} initial="hidden"
      whileInView={'show'} viewport={{once:false, amount:0.7}}
      id='contact' className='py-20'>
        <h2 className='text-center text-white mt-20 text-5xl md:text-4xl lg:text-2xl font-extrabold'>Contactar</h2>
        <div className="contact-form-wrapper">
          <form
            id="contact-form"
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <TextField
              id="email"
              label="Email"
              placeholder="Email"
              value={emailText}
              onChange={(event) => {
                const input = event.target.value;
                setEmailText(input);
                setIsValidEmail(true); // Reset email validation state
              }}
              className={classes.email}
              error={!isValidEmail && emailText !== ''}
              helperText={emailText !== '' && !isValidEmail && 'Insira um email válido'}
              variant="outlined"
            />
            <TextField
              id="message"
              label="Mensagem"
              placeholder="Mensagem"
              value={messageText}
              onChange={(event) => setMessageText(event.target.value)}
              className={classes.message}
              multiline
              rows={5}
              variant="outlined"
            />
            <Button
              id="submit"
              label="Enviar"
              variant="contained"
              className={classes.submit}
              disabled={status === 'PENDING'}
              onClick={handleSubmit}
            >
              Enviar
            </Button>
            {status === 'SUCCESS' ? (
              <motion.p
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1.2 : 0.8 }}
                transition={{ duration: 1, delay: 0.3 }}
                exit={{ opacity: 0, scale: 0 }}
                className="email-success mt-4"
              >
                Obrigado. Mensagem enviada com sucesso!
              </motion.p>
            ) : (
              status === 'ERROR' && <p className='mt-4 '>Ooops! Erro no formulário. Tenta de novo</p>
            )}
          </form>
        </div>
      </motion.div>
    </ThemeProvider>
  );
};


export default ContactForm;
