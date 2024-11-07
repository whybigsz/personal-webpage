// ContactForm.jsx
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_x642q28', 'template_49yo6ir', form.current, '4Ore9w28disZ5L4Cx')
      .then((result) => {
        console.log('SUCCESS!', result.text);
      }, (error) => {
        console.log('FAILED...', error.text);
      });
  };


  return (
    <div className="w-full max-w-4xl mx-auto p-4 flex flex-col items-center mb-16">
      <h2 className="text-5xl text-white font-bold my-16">Contactar</h2>
      <form ref={form} onSubmit={sendEmail} id='contact-form' className="space-y-8 w-full">
        <div className="grid grid-cols-2 md:grid-cols-1 gap-8">
          <div>
            <Input
              type="text"
              placeholder="Nome"
              name="user_name"
              required
              className="w-full bg-zinc-800 text-white rounded-[24px] p-[2rem]"
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Email"
              name="user_email"
              required
              className="w-full bg-zinc-800 text-white rounded-[24px] p-[2rem]"
            />
          </div>
        </div>
        <div>
          <Textarea
            id='contact-message'
            placeholder="Mensagem"
            name="user_message"
            required
            className="w-full bg-zinc-800 text-white  rounded-[24px] min-h-[150px] p-[2rem]"
          />
        </div>
        <Button type="submit" className="w-full rounded-[16px] hover:scale-105 hover:bg-black/20  bg-rose-500 p-6 my-2 ">
          Enviar Mensagem
        </Button>
      </form>
    </div>
  );
};


export default ContactForm;
