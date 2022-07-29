import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About myself</p>
            </div>

            <p className='text-xl mt-20'>
            My name is Eduard and I’m Ukrainian. I started to discover a world of coding this year. I’m ready to work hard and develop my skills. Unfortunately, I haven’t had an opportunity to work in this field yet. I have started to study programming since the war in Ukraine began because I recognised the importance of being able to work remotely. So, being highly motivated I started my self-study. I also had an online course in HTML, CSS and JS. Although I didn’t work in IT sphere, I managed to create some projects myself. I created a website based on the model from Figma with the help of HTML and CSS. I also have an experience of working with API on Vanilla JS. I started to learn React and work with it successfully. All my projects I push in Github, so you may get acquainted with them. 
            </p>

            <br/>

            <p className='text-xl'>
            In my opinion, my biggest achievement is my career. After being graduated from university, I worked as a police officer, but still had big ambitions. So, I managed to open my own business. Unfortunately, because of russian invasion and occupation of my hometown it was a little destroyed, but I managed to revive my business and started to move in a new direction. My aim is to reach new heights in coding and build a successful career in this field.            
            </p>
        </div>
    </div>
  )
}

export default About;