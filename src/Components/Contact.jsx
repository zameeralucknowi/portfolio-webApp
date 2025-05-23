// import React from 'react'

// const Contact = () => {
//   return (
//     <div name='contact' className='w-full h-[700px] bg-[#0a192f] flex justify-center items-center p-4'>
//         <form method='POST' action="https://getform.io/f/bqokzwqb" className='flex flex-col max-w-[600px] w-full'>
//             <div className='pb-8'>
//                 <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
//                 <p className='text-gray-300 py-4'> Submit the form below or shoot me an email - zameeralucknowi@gmail.com</p>
//             </div>
//             <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
//             <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
//             <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
//             <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center cursor-pointer '>Let's Collaborate</button>
//         </form>
//     </div>
//   )
// }

// export default Contact

import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Check if all fields are filled
  const isFormValid = formData.name && formData.email && formData.message;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div name='contact' className='w-full h-[700px] bg-[#0a192f] flex justify-center items-center p-4'>
      <form
        method='POST'
        action='https://getform.io/f/bqokzwqb'
        className='flex flex-col max-w-[600px] w-full'
      >
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>
            Submit the form below or shoot me an email - zameeralucknowi@gmail.com
          </p>
        </div>
        <input
          className='bg-[#ccd6f6] p-2'
          type='text'
          placeholder='Name'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
        <input
          className='my-4 p-2 bg-[#ccd6f6]'
          type='email'
          placeholder='Email'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          className='bg-[#ccd6f6] p-2'
          name='message'
          rows='10'
          placeholder='Message'
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button
          className={`text-white border-2 px-4 py-3 my-8 mx-auto flex items-center transition-all ${
            isFormValid
              ? 'hover:bg-pink-600 hover:border-pink-600 cursor-pointer'
              : 'opacity-50 cursor-not-allowed'
          }`}
          type='submit'
          disabled={!isFormValid}
        >
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
