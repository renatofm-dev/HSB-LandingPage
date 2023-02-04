import React, { useState } from 'react';
import {
  FormColumn,
  FormWrapper,
  FormInput,
  FormSection,
  FormRow,
  FormLabel,
  FormInputRow,
  FormMessage,
  FormButton,
  FormTitle,
  TextArea,
  FormCaptcha,
} from './ContactStyles';
import { Container } from '../../globalStyles';
import validateForm from '../Form/validateForm';
import Map from '../Map/Map';
import emailjs from '@emailjs/browser'
import ReCAPTCHA from 'react-google-recaptcha';




const Contact = () => {

  const captchaKey = process.env.REACT_APP_HSB_KEY_GOOGLE_CAPTCHA;
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('')
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const onChange = () => { };

  const handleSubmit = (e) => {
    e.preventDefault();
    const resultError = validateForm({ name, email });

    if (resultError !== null) {
      setError(resultError);
      return;
    }
    setName('');
    setEmail('');
    setError(null);
    setSuccess('Mensagem Enviada com Sucesso');
    setMessage('');

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    }

    emailjs.send(
      "service_ligue1e",
      "template_t2xkf58",
      templateParams,
      "etxF_wGCPf3jjFzFh"
    )
      .then((response) => {
        console.log("email enviado com sucesso", response.status, response.text)
      }, (error) => {
        console.log("ERROR", error)
      })


  };

  const messageVariants = {
    hidden: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
  };

  const formData = [
    { label: 'Name', value: name, onChange: (e) => setName(e.target.value), type: 'text' },
    { label: 'Email', value: email, onChange: (e) => setEmail(e.target.value), type: 'email' },


  ];
  return (
    <>
      <FormSection>
        <Container>
          <FormRow>
            <FormColumn small>
              <FormTitle>Fale Conosco</FormTitle>
              <FormWrapper onSubmit={handleSubmit}>
                {formData.map((el, index) => (
                  <FormInputRow key={index}>
                    <FormLabel>{el.label}</FormLabel>
                    <FormInput
                      type={el.type}
                      placeholder={`Informe o seu ${el.label.toLocaleLowerCase()}`}
                      value={el.value}
                      onChange={el.onChange}
                    />
                  </FormInputRow>
                ))}

                <TextArea
                  className='textarea'
                  placeholder='Digite sua Mensagem'
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                />

                <FormCaptcha>
                  <ReCAPTCHA
                    sitekey= {captchaKey}
                    onChange={onChange}
                  />
                </FormCaptcha>

                <FormButton type="submit"> Enviar </FormButton>
              </FormWrapper>
              {error && (
                <FormMessage
                  variants={messageVariants}
                  initial="hidden"
                  animate="animate"
                  error
                >
                  {error}
                </FormMessage>
              )}
              {success && (
                <FormMessage
                  variants={messageVariants}
                  initial="hidden"
                  animate="animate"
                >
                  {success}
                </FormMessage>
              )}
            </FormColumn>
          </FormRow>
        </Container>
      </FormSection>
      <Map />
    </>
  );
};

export default Contact;
