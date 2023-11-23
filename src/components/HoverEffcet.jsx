import React from 'react'
import autumnPoolside from '../assets/images/png/autumn-poolside.jpg'
import rainy from '../assets/images/png/rainy.jpg'
import flower from '../assets/images/png/share_flower_fullsize.jpg'

const HoverEffcet = () => {
  return (
    <>
    <div className="min-h-screen bg-[#10111A]">
        <div className="container py-12 mx-auto px-3">
            <div className="flex justify-center items-center flex-wrap lg:h-[160px]">
                <div className='h-full xl:w-1/3 sm:w-1/2 min-w-[190px] max-h-[300px] transition-all duration-300 lg:flex-1 sm:hover:flex-[2] xl:hover:flex-[3] hover:flex flex-col w-full p-3 flex'>
                  <div className='sm:flex gap-2 w-full  bg-white/5 backdrop-blur-md group p-4 border rounded-lg overflow-hidden'>
                    <img src={autumnPoolside} alt="autumn-poolside" className="w-full max-w-[200px] object-cover h-full max-h-[125px]" />
                    <p className='text-white invisible h-0 group-hover:h-[50px] group-hover:visible transition-[height] duration-300 text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, esse.</p>
                  </div>
                </div>
                <div className='h-full xl:w-1/3 sm:w-1/2 min-w-[190px] max-h-[300px] transition-all duration-300 lg:flex-1 sm:hover:flex-[2] xl:hover:flex-[3] hover:flex flex-col w-full p-3 flex'>
                  <div className='sm:flex gap-2 w-full  bg-white/5 backdrop-blur-md group p-4 border rounded-lg overflow-hidden'>
                    <img src={rainy} alt="autumn-poolside" className="w-full max-w-[200px] object-cover h-full max-h-[125px]" />
                    <p className='text-white invisible h-0 group-hover:h-[50px] group-hover:visible transition-[height] duration-300 text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, esse.</p>
                  </div>
                </div>
                <div className='h-full xl:w-1/3 sm:w-1/2 min-w-[190px] max-h-[300px] transition-all duration-300 lg:flex-1 sm:hover:flex-[2] xl:hover:flex-[3] hover:flex flex-col w-full p-3 flex'>
                  <div className='sm:flex gap-2 w-full  bg-white/5 backdrop-blur-md group p-4 border rounded-lg overflow-hidden'>
                    <img src={flower} alt="autumn-poolside" className="w-full max-w-[200px] object-cover h-full max-h-[125px]" />
                    <p className='text-white invisible h-0 group-hover:h-[50px] group-hover:visible transition-[height] text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, esse.</p>
                  </div>
                </div>
                <div className='h-full xl:w-1/3 sm:w-1/2 min-w-[190px] max-h-[300px] transition-all duration-300 lg:flex-1 sm:hover:flex-[2] xl:hover:flex-[3] hover:flex flex-col w-full p-3 flex'>
                  <div className='sm:flex gap-2 w-full  bg-white/5 backdrop-blur-md group p-4 border rounded-lg overflow-hidden'>
                    <img src={autumnPoolside} alt="autumn-poolside" className="w-full max-w-[200px] object-cover h-full max-h-[125px]" />
                    <p className='text-white invisible h-0 group-hover:h-[50px] group-hover:visible transition-[height] text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, esse.</p>
                  </div>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default HoverEffcet