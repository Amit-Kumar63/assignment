import React from 'react'
import { FiPlus } from "react-icons/fi";

const Dasboard = () => {
  return (
    <main className='flex items-center justify-center px-28 min-h-screen bg-gradient-to-r from-[#373E44] to-[#191B1F] text-white font-poppins'>
      <div className='h-full w-full bg-black'></div> 
      <div className='h-full w-[770px]'>
        <div className='bg-[#363C43] py-5 px-4 overflow-hidden rounded-[18.89px]'>
        <div className='bg-[#0A0A0A] p-[5px] pr-3 flex items-center justify-between rounded-[16px]'>
            <button className='py-[10px] px-6 font-medium text-[18px] leading-[16.12px] text-[#fff] text-nowrap bg-[#28292F] rounded-[16px] shadow-[-8.43px_-16.87px_50.6px_-16.87px_rgb(72, 91, 113)]'>About Me</button>
            <button className='py-[10px] px-6 font-medium text-[18px] leading-[16.12px] text-[#A3ADB2] rounded-[16px]'>Experiences</button>
            <button className='py-[10px] px-6 font-medium text-[18px] leading-[16.12px] text-[#A3ADB2] rounded-[16px]'>Recommended</button>
          </div>
          <div className='pt-8'>
            <p className='font-plus-jakarta text-[#969696] font-normal text-[20px] leading-[25.2px]'>Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.</p>
            <p className='pt-8 font-plus-jakarta text-[#969696] font-normal text-[20px] leading-[25.2px]'>I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...</p>
          </div>
        </div>
          <div className='bg-[#363C43] w-full mt-20 px-4 py-3 overflow-hidden rounded-[18.89px]'>
          <div className='flex items-center w-full justify-between '>
            <button className='bg-[#171717] text-white font-medium text-[20px] leading-[30px] py-[10px] px-6 rounded-[20px]'>Gallery</button>
            <div className='flex items-center gap-9'>
            <button className='flex items-center bg-white bg-opacity-[3%] font-plus-jakarta font-extrabold py-3 px-4 rounded-[104px]'><FiPlus/> ADD IMAGE</button> 
            <div className='flex items-center gap-5'>
              <button className='w-12 h-12 rounded-full bg-[#101213] flex items-center justify-center'><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.40222 8.37645H15.5967" stroke="#6F787C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.40222 15.3765L1.40222 8.37646L8.40222 1.37646" stroke="#6F787C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</button>
              <button className='w-12 h-12 rounded-full bg-[#101213] flex items-center justify-center'>
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.5968 8.37648L1.40236 8.37648" stroke="#6F787C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.5968 1.37646L15.5968 8.37646L8.5968 15.3765" stroke="#6F787C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
              </button>
            </div>
              </div>            
          </div>
          <div className='flex items-center justify-between pt-9'>
            <img src="Rectangle.png" alt="rectangle" className='w-[150px] h-[139px]'/>
            <img src="Rectangle.png" alt="rectangle" className='w-[150px] h-[139px]'/>
            <img src="Rectangle.png" alt="rectangle" className='w-[150px] h-[139px]'/>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Dasboard