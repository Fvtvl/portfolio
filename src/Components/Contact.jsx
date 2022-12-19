import React from 'react'
import ContactLinks from './ContactLinks'

const Contact = () => {

  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white pb-24'>

        <div className='flex flex-col p-4 pt-16 justify-center max-w-screen-lg mx-auto h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className='py-6'>Submit the form below to get in touch with me</p>
            </div>

            <div className='flex justify-center items-center'>
                <form action='https://getform.io/f/682cd769-4549-403b-9b81-e97d4629844a' method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input type='text' name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />

                    <input type='text' name='email' placeholder='Enter your email' className=' my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />

                    <textarea name='message' rows='10' placeholder='Enter your message' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>

                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-6 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's talk</button>
                </form>
            </div>
        <ContactLinks />

        </div>

    </div>
  )
}

export default Contact