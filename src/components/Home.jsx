import React from "react";
import video from "../assets/15439670-uhd_3840_2160_30fps.mp4"
import "../CSS/Home.css"
import About from "./About";
import "./Footer.jsx"
import img2 from "../assets/capab-1.jpg"
import img3 from "../assets/capab-3.jpg"
import ibm from "../assets/capab-2.jpg"
import silicon from "../assets/capab-3.jpg"
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
const slides = [
    {
      url: ibm,
      heading:"Headline text",
      text:"Text",
      link:"#",
    },
    {
      url: img2 ,
      heading:"Headline text",
      text:"Text",
      link:"#",
    },
    { 
        url:silicon ,
        heading:"Headline Text",
        text:" Text ",
        link:"#",
    },

    
    
];

const Home=()=>{
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
        
           <div>
           <div className="main">
                
               <div className="overlay">
               <video src={video} autoPlay loop muted className="videoBg"/>
               <div className="content flex flex-col md:flex-row">
                <div className="h-[80px] mx-[5vw] py-[50vh] ">
                    <a href="/about" className="text-xl text-white bg-blue-950 py-2 px-2 rounded-sm border-[1px] border-white no-underline" >
                        Explore our offerings

                    </a>

                </div>
                
                    
                    

               </div>
               {/* <Footer/> */}

               </div>
               
               
               

            </div>
            <div className="bg-white bg-opacity-30 ">
                <div className="text-4xl  h-[100px] text-center pt-5 text-white">
                    <p >Explore our Youtube Page</p>

                </div>
            <div className='md:max-w-[40vw] h-[500px] w-[90vw] m-auto py-16 px-4 relative group transition transform'>
                <div
                    // style={{ backgroundImage: `` }}
                    className='w-full h-full rounded-2xl bg-center bg-cover duration-500 py-4 px-2'
                >   <a href={slides[currentIndex].link} target="_blank">
                    <img src={slides[currentIndex].url} className="mx-auto h-[150px] w-[150px] rounded-full" /></a>
                    <div className="mt-1 text-2xl text-white text-center px-4">
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
                        className='text-2xl cursor-pointer '
                    >
                        <RxDotFilled />
                    </div>
                    ))}
                </div>
            </div>
            </div>

            
        </div>



           

            
        
    )
}
export default Home;