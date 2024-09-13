import React from 'react'
import heroImage from '../assets/heroImage.png'
import heroimage2 from '../assets/heroimage2.png'
import heroimage3 from '../assets/heroimage3.png' 


const HeroSection:React.FC = () => {
  return (
    <div className=" mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
     <section className="flex flex-col md:flex-row justify-between items-center py-20 px-10 bg-[#4C35DE] text-white">
        <div className="md:w-1/2 space-y-7">
        <h1 className="font-serif font-bold text-7xl">AI that builds a website for you.</h1>
        <>
        <p className='text-slate-400 text-2xl'>
            Get your business online in 30 seconds with the #1 AI website builder and marketing platform.
        </p>
        </>
        <div>
        <button className="  bg-[white] text-black text-xl font-semibold px-6 py-4 rounded-lg">Generate your website</button>
        <p className="font-medium ">Start for free. No credit card required.</p>
        </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 relative">
            <img src={heroImage} alt="Main hero image" className="w-4/6 mx-auto" />
            <img src={heroimage2} alt="Overlapping image left" className="absolute w-1/4 left-0 top-1/2 transform -translate-y-1/2" />
            <img src={heroimage3} alt="Overlapping image right" className="absolute w-1/4 right-0 top-1/3 transform -translate-y-1/2" />
        </div>
     </section>
      </div>
  )
}

export default HeroSection
