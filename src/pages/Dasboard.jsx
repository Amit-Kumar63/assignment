import React, { useState } from 'react'
import { FiPlus } from "react-icons/fi";
import Sidebar from '../components/Sidebar';

const Dasboard = () => {
  const [title, setTitle] = useState('About Me')
  const [selectedImage, setSelectedImage] = useState(null)
  const handleTitle = (title) => {
    setTitle(title)
  }
  
  const handleImage = (event) => {
    const file = event.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  }
  
  return (
    <main className='flex items-center justify-center px-28 min-h-screen bg-gradient-to-r from-[#373E44] to-[#191B1F] text-white font-poppins'>
      <div className='h-full w-full bg-black'></div> 
      <div className='h-full w-[770px]'>
        <div className='bg-[#363C43] py-5 px-4 pr-6 overflow-hidden rounded-[18.89px] shadow-custom-2 flex gap-5'>
        <Sidebar />
        <div>
        <div className='bg-[#0A0A0A] p-[5px] pr-3 flex items-center justify-between rounded-[16px] shadow-inner-custom-1 h-fit'>
            <button className={`py-[10px] px-6 font-medium text-[18px] leading-[16.12px] text-[#fff] text-nowrap rounded-[16px] ${title === 'About Me' ? 'bg-[#363C43]' : ''}`} onClick={()=> handleTitle('About Me')}>About Me</button>
            <button className={`py-[10px] px-6 font-medium text-[18px] leading-[16.12px] text-[#A3ADB2] rounded-[16px] ${title === 'Experiences' ? 'bg-[#363C43]' : ''}`} onClick={()=> handleTitle('Experiences')}>Experiences</button>
            <button className={`py-[10px] px-6 font-medium text-[18px] leading-[16.12px] text-[#A3ADB2] rounded-[16px] ${title === 'Recommended' ? 'bg-[#363C43]' : ''}`} onClick={()=> handleTitle('Recommended')}>Recommended</button>
          </div>
          <div className='pt-8'>
            <p className='font-plus-jakarta text-[#969696] font-normal text-[18px] leading-[25.2px]'>Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.</p>
            <p className='pt-8 font-plus-jakarta text-[#969696] font-normal text-[18px] leading-[25.2px]'>I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...</p>
          </div>
        </div>
        <div className="relative after:absolute after:content-[' '] after:w-2 after:h-16 after:bg-custom-gradient after:shadow-custom-5 after:top-1/2 after:left-1/2 after:-translate-y-3/4"></div>
        </div>
          <div className='bg-[#363C43] w-full mt-20 px-4 py-5 pt-7 overflow-hidden rounded-[18.89px] shadow-custom-2 flex gap-5'>
          <Sidebar />
          <div>
          <div className='flex items-center w-full justify-between'>
            <button className='bg-[#171717] text-white font-medium text-[20px] leading-[30px] py-[10px] px-6 rounded-[20px]'>Gallery</button>
            <div className='flex items-center gap-9'>
              <label className='flex items-center bg-white bg-opacity-[3%] font-plus-jakarta font-extrabold py-3 px-4 rounded-[104px] shadow-combined-custom cursor-pointer' htmlFor='image'><FiPlus/> ADD IMAGE</label>
              <input type="file" id='image' className='hidden' onChange={handleImage}/>
            <div className='flex items-center gap-5'>
              <button className='w-12 h-12 rounded-full bg-[#101213] flex items-center justify-center shadow-custom-4'><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.40222 8.37645H15.5967" stroke="#6F787C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.40222 15.3765L1.40222 8.37646L8.40222 1.37646" stroke="#6F787C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</button>
              <button className='w-12 h-12 rounded-full bg-[#101213] flex items-center justify-center shadow-custom-4'>
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.5968 8.37648L1.40236 8.37648" stroke="#6F787C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.5968 1.37646L15.5968 8.37646L8.5968 15.3765" stroke="#6F787C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
              </button>
            </div>
              </div>            
          </div>
          <div className='w-full flex items-center justify-between pt-12 gap-9'>
            <img src={`${selectedImage ? selectedImage : "Rectangle.png"}`} alt="rectangle" className='w-[140px] h-[129px]'/>
            <img src={`${selectedImage ? selectedImage : "Rectangle.png"}`} alt="rectangle" className='w-[140px] h-[129px]'/>
            <img src={`${selectedImage ? selectedImage : "Rectangle.png"}`} className='w-[140px] h-[129px]'/>
          </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Dasboard