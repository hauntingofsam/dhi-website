import React, { useState } from "react";
import demo from "../assets/video-player.png"
import expert from "../assets/customer-service.png"
import { IoLogoFacebook, IoMdMail } from "react-icons/io";
import { RxInstagramLogo, RxLinkedinLogo, RxTwitterLogo } from "react-icons/rx";
import Form from "./Form.jsx"
const ContactUs=()=>{
    const [showModal,setshowModal]=useState(false);
    return(
        <div className="bg-white">
            
            <div className="text-4xl text-gray-900 text-center mt-10">
                How can we assist you?
                
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-x-10 gap-y-10 py-10 mx-[5vw]">
            <div className="flex flex-col md:flex-row md:w-[400px] w-[90vw]    gap-4">
                <img src={demo} className="h-[80px] w-[80px]" />
                <div>
                <p className="text-lg text-gray-900">
                Want to have a demo before making decision?


                </p>
                <p className="text-sm text-gray-900">
                Experience our solutions see how we make a difference

                </p>

                </div>
                

            </div>
            <div className="flex flex-col md:flex-row md:w-[400px] w-[90vw]   gap-4">
                <img src={expert} className="h-[80px] w-[80px]" />
                <div>
                <p className="text-lg text-gray-900">
                Looking for Expert Advise?


                </p>
                <p className="text-sm text-gray-900">
                Talk to our experts to learn about us and our products

                </p>

                </div>
                

                

            </div>
            

            </div>
            <button className="px-4 py-2 border-gray-900 border-2 ml-[52vw] mr-[5vw]" 
            onClick={()=>setshowModal(true)}>
                    Book a Demo

            </button>
            {showModal && <Form/>}
            
            <div className="bg-purple-700 text-white flex flex-col md:flex-row justify-around gap-y-10 py-10 mt-5"> 
            <div className="flex flex-col md:flex-row md:w-[400px] w-[90vw] mx-auto gap-4 justify-center">
                <IoMdMail size={30}/>
                <p className="text-lg">
                Write to us
                </p>

            </div>
            <div className="flex flex-col  md:w-[400px] w-[90vw] mx-auto gap-4 justify-center">
                <p className="text-sm">Feel free to reach out for any inquires at</p>
                <p className="text-lg">
                sales@dhi-digital.com
                </p>

            </div>

            </div>
            <div className="text-4xl text-gray-900 text-center mt-10">
                Social Media

            </div>
            <div className="flex flex-col md:flex-row justify-center gap-x-4 gap-y-10 py-10 ">
            <div className="flex flex-row  md:w-[400px] w-[90vw]  justify-center  gap-10">
                <IoLogoFacebook className="text-black h-[80px] w-[80px]" />
                <RxTwitterLogo className="text-black h-[80px] w-[80px]" />
                
                

            </div>
            <div className="flex flex-row justify-center md:w-[400px] w-[90vw]   gap-10">
                <RxInstagramLogo className="text-black h-[80px] w-[80px]" />
                <RxLinkedinLogo className="text-black h-[80px] w-[80px]" />
                
                

                

            </div>
            

            </div>

            
            
        </div>
        
    );
}
export default ContactUs;