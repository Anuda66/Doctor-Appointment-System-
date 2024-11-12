import React from 'react'
import { assets } from '../assets/assets'
function About() {
  return (
    <div>
      <div className='pt-10 text-2xl text-center text-gray-500 '>
        <p>ABOUT <span className='font-medium text-gray-700'>US</span></p>
      </div>
      <div className='flex flex-col my-10 md:flex-row gap-14'>
        <img className='w-full md:max-w-[360px]' src={assets.aboutImage} 
        alt="" />
        <div className='flex flex-col justify-center gap-6 text-sm text-gray-600 md:w-2/4'>
          <p>
            Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records
          </p>

          <p>
          Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.
          </p>

          <h3 className='font-semibold text-gray-800'>Our Vision</h3>

          <p>
          Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
          </p>
        </div>
      </div>
      <div className='my-4 text-xl'>
          <h2>WHY <span className='font-semibold text-gray-700'></span> CHOOSE US</h2>
      </div>
      <div className='flex flex-col my-10 mb-20 md:flex-row'>
          <div className='flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-16 text-[15px] hover:bg-green-500 hover:text-white cursor-pointer duration-700 '>
            <b>EFFICIENCY:</b>
            <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
          </div>
          <div className='flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-16 text-[15px] hover:bg-green-500 hover:text-white cursor-pointer duration-700 '>
            <b>CONVENIENCE:</b>
            <p>Access to a network of trusted healthcare professionals in your area.</p>
          </div>
          <div className='flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-16 text-[15px] hover:bg-green-500 hover:text-white cursor-pointer duration-700 '>
            <b>PERSONALIZATION:</b>
            <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
          </div>
        </div>
    </div>
  )
}

export default About