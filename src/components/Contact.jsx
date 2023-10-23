import React from 'react';
import Title from './Title';

function Contact() {
  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        <form
          action="https://getform.io/f/5e430a48-a955-4788-a710-bdefc8d52afd"
          method="POST"
          className="flex flex-col w-full md:w-9/12"
        >
          <Title>Contact</Title>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparnet border-2 rounded-md focus:outline-none"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="my-2 p-2 bg-transparnet border-2 rounded-md focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            cols="30"
            rows="10"
            className="mb-4 p-2 bg-transparnet border-2 rounded-md focus:outline-none"
          />
          <button
            type="button"
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-cream bg-midnight border border-2 border-midnight hover:text-midnight hover:bg-cream dark:border-cream dark:bg-cream dark:text-midnight drop-shadow-md dark:hover:text-cream dark:hover:bg-midnight"
          >
            Work With Me
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact;
