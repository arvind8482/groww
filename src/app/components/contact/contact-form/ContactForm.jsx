'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateContact = (contact) => {
    const re = /^\d{10}$/;
    return re.test(String(contact));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setStatus('Please enter a valid email address.');
      return;
    }

    if (!validateContact(formData.contact)) {
      setStatus('Please enter a valid 10-digit contact number.');
      return;
    }

    setStatus('Submitting...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Thank you for your message!');
        setFormData({
          name: '',
          email: '',
          contact: '',
          subject: '',
          message: '',
        }); // Clear form
      } else {
        setStatus('Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again.');
    }
  };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col xl:flex-row xl:space-x-6'>
          <div className='w-full xl:w-1/2'>
            <div className='bg-secondary rounded-md px-6 py-4 flex space-x-6 items-center mb-4'>
              <Image src='/images/form-icon-name.png' width={17} height={17} alt='' />
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                className='w-full p-2 border-0 outline-0 rounded bg-transparent'
                placeholder='Enter Your Name'
                required
              />
            </div>
          </div>
          <div className='w-full xl:w-1/2'>
            <div className='bg-secondary rounded-md px-6 py-4 flex space-x-6 items-center mb-4'>
              <Image src='/images/form-icon-email.png' width={21} height={17} alt='' />
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='w-full p-2 border-0 outline-0 rounded bg-transparent'
                placeholder='Please Enter Email ID'
                required
              />
            </div>
          </div>
        </div>
        <div className='flex flex-col xl:flex-row xl:space-x-6'>
          <div className='w-full xl:w-1/2'>
            <div className='bg-secondary rounded-md px-6 py-4 flex space-x-6 items-center mb-4'>
              <Image src='/images/form-icon-contact.png' width={20} height={20} alt='' />
              <input
                type='text'
                id='contact'
                name='contact'
                value={formData.contact}
                onChange={handleChange}
                className='w-full p-2 border-0 outline-0 rounded bg-transparent'
                placeholder='Enter Your Contact Number'
                required
              />
            </div>
          </div>
          <div className='w-full xl:w-1/2'>
            <div className='bg-secondary rounded-md px-6 py-4 flex space-x-6 items-center mb-4'>
              <Image src='/images/form-icon-subject.png' width={15} height={17} alt='' />
              <input
                type='text'
                id='subject'
                name='subject'
                value={formData.subject}
                onChange={handleChange}
                className='w-full p-2 border-0 outline-0 rounded bg-transparent'
                placeholder='Please Enter Your Subject'
                required
              />
            </div>
          </div>
        </div>

        <div className='mb-4'>
          <div className='bg-secondary rounded-md px-6 py-4 flex space-x-6 items-start mb-4'>
            <Image src='/images/form-icon-message.png' width={19} height={19} className='mt-4' alt='' />
            <textarea
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              className='w-full p-2 border-0 outline-0 rounded bg-transparent'
              rows='6' defaultValue="Please Enter Your Message"
              required
            >
              
            </textarea>
          </div>
        </div>
        <div className='flex justify-center xl:justify-start'>
        <button
          type='submit'
          className='text-xl rounded-full font-semibold px-7  border border-2 border-primary py-2 text-primary hover:border-btn-hover hover:bg-btn-hover hover:text-white'
        >
          Send Message
        </button>
        </div>
      </form>
      {status && <p className='mt-4 text-center'>{status}</p>}
    </>
  );
};

export default ContactForm;
