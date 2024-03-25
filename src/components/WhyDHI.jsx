import React from "react";
import bulb from "../assets/bulb-popup.gif"
import medal from "../assets/medal.gif"
import books from "../assets/books.gif"
import flag from "../assets/flag.gif"
import target from "../assets/target.gif"
import img2 from "../assets/capab-2.jpg"
import img3 from "../assets/capab-3.jpg"
import img5 from "../assets/capab-5.jpg"
import img6 from "../assets/capab-6.jpg"
import img7 from "../assets/capab-7.jpg"
import img8 from "../assets/capab-8.jpg"
import img1 from "../assets/capab-1.jpg"
import {Swiper,SwiperSlide} from "swiper/react";
import { RxChevronLeft,RxChevronRight } from "react-icons/rx";
import {Navigation,EffectCoverflow,Pagination, EffectCards} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../assets/IBM_Partner.jpg"
// import "../CSS/WhyDhi.css"
import  { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
const slides = [
    {
      url: img1,
      heading:"IBM silver partner",
      text:"Awarded as IBM silver partner for the year 2023"
    },
    {
      url: img2 ,
      heading:"IBM HQ1 Emerging Partner",
      text:"Awarded as IBM silver partner for the year 2023"
    },
    { 
        url:img3 ,
        heading:"Silicon India",
        text:"Awarded as one the 10 best AI startups of 2023"
    },

    
    
];

const WhyDhi=()=>{
   
    const [currentIndex, setCurrentIndex] = useState(0);

   const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
    
    
    return(
        <div className="bg-black">
            <p className="text-white text-3xl text-center pt-4">
                Why DHI.AI

            </p>
            <div className="flex flex-col md:flex-row w-[90vw] mx-auto my-20 gap-6 flex-wrap justify-center">
                <div className="border-white border-2 border-dotted md:w-[25vw] w-[90vw] flex flex-col md:flex-row px-2 py-2">
                    
                    <img src={bulb} className="h-[80px] w-[80px] mx-auto my-auto"/>
                
                    <span className="text-white text-lg mx-auto my-auto ">
                    Nimble and innovation driven start-up, with passion to excel

                    </span>

                    
                    

                </div>
                <div className="border-white border-2 border-dotted md:w-[25vw] w-[90vw] flex flex-col md:flex-row px-2 py-2">
                    
                    <img src={medal} className="h-[80px] w-[80px] my-auto mx-auto"/>
                    
                    <span className="text-white text-lg my-auto mx-auto">
                    Best-in-Class development team

                    </span>

                    
                    

                </div>
                <div className="border-white border-2 border-dotted md:w-[25vw]  w-[90vw] flex flex-col md:flex-row px-2 py-2">
                    
                    <img src={books} className="h-[80px] w-[80px] mx-auto my-auto"/>
                    
                    <span className="text-white text-lg mx-auto my-auto">
                    Consulting led approach to problem solving

                    </span>

                    
                    

                </div>

            </div>
            <div className="flex flex-col md:flex-row w-[90vw] mx-auto my-20 gap-6 flex-wrap justify-center">
                <div className="border-white border-2 border-dotted md:w-[40vw] w-[90vw] flex flex-col md:flex-row px-2 py-2">
                
                    <img src={flag} className="h-[80px] w-[80px] mx-auto my-auto"/>
                    
                    <span className="text-white text-lg mx-auto my-auto">
                    Decades of IT and Consulting experience in global blue-chip

                    </span>

                </div>
                <div className="border-white border-2 border-dotted md:w-[40vw] w-[90vw] flex flex-col md:flex-row px-2 py-2">
                
                    <img src={target} className="h-[80px] w-[80px] mx-auto my-auto"/>
                    
                    <span className="text-white text-lg mx-auto my-auto">
                    Ensuring success through the lifecycle of our engagements - from concept to launch and future scale-ups

                    </span>

                </div>

            </div>
            <div className="text-white text-3xl text-center mt-4">
                Awards and Accolades

            </div>
            <div className='md:max-w-[40vw] h-[500px] w-[90vw] m-auto py-16 px-4 relative group transition transform'>
                <div
                    // style={{ backgroundImage: `` }}
                    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 bg-indigo-700 py-4 px-2'
                >
                    <img src={slides[currentIndex].url} className="mx-auto "/>
                    <div className="mt-2 text-2xl text-white text-center px-4">
                        {slides[currentIndex].heading}

                    </div>
                    <div className="mt-2 text-[1rem] text-white text-center px-4">
                        {slides[currentIndex].text}

                    </div>
                </div>
                {/* Left Arrow */}
                <div className='block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>
                {/* Right Arrow */}
                <div className='block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>
                <div className='flex top-4 justify-center py-2'>
                    {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className='text-2xl cursor-pointer'
                    >
                        <RxDotFilled />
                    </div>
                    ))}
                </div>
            </div>


            
            <div className="text-white text-3xl text-center mt-4">
                Our Partners
            </div>
            

            

        </div>
    )
}
export default WhyDhi;