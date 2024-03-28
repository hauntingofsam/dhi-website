import React, { useState } from "react";
import { IoLogoYoutube, IoMdClose } from "react-icons/io";
import demo from "../assets/video-player.png"
import expert from "../assets/customer-service.png"
import { IoLogoFacebook, IoMdMail } from "react-icons/io";
import { RxInstagramLogo, RxLinkedinLogo, RxTwitterLogo } from "react-icons/rx";
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
            {/* <button className="px-4 py-2 border-gray-900 border-2 ml-[52vw] mr-[5vw]" 
            onClick={()=>setshowModal(true)}>
                    Book a Demo

            </button> */}
            {/* {showModal && 
                <div className=" z-10 inset-0 fixed bg-black bg-opacity-40 backdrop-blur-lg overflow-scroll md:overflow-hidden">
                    <div className="md:w-[70vw] w-[90vw] flex flex-col md:flex-row  my-auto mx-auto top-16 relative">
                        <div className="w-[90vw] md:w-[35vw] bg-indigo-700 text-white h-[450px] text-center px-4 py-8">
                            <p className="my-4 text-2xl">
                            Talk to the experts

                            </p>
                            <p className="my-4 text-sm">
                            Contact us for a free consultation and to see how predefined solutions and services can help businesses like yours.

                            </p>
                            <p className="my-4 text-sm font-bold">
                            We will help you achieve your vision

                            </p>

                        </div>
                        <div className="w-[90vw] md:w-[35vw] h-[450px] bg-white text-center px-4 my-auto relative">
                            <button onClick={()=>{setshowModal(false)}} className="absolute top-5 right-12"><IoMdClose size={25} className="text-black fixed mr-2"/></button>
                            <p className="my-4 text-2xl text-gray-900 font-semibold">
                            Book a Demo

                            </p>
                            <p className="my-4 text-sm">
                            Enter your information to register for the demo.

                            </p>
                            <form className="flex flex-col mx-auto w-[270px]">
                                <input type="text" placeholder="Name" required className="w-full h-[35px] mt-2 p-2"/>
                                <input type="text" placeholder="Company Name" required className="w-full h-[35px] mt-2 p-2"/>
                                <input type="email" placeholder="Work Email" required className="w-full h-[35px] mt-2 p-2" />
                                <input type="text" placeholder="Phone" required className="w-full h-[35px] mt-2 p-2"/>
                                <textarea name="" id="" placeholder="Tell us about your requirement" rows="3" className="w-full mt-2 p-2"></textarea>
                                <button type="submit" className="px-4 py-2 bg-slate-300 rounded-lg mx-4 mt-2">Submit</button>
                            </form>

                        </div>

                    </div>
                </div>
            } */}
            
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
                <a href="https://twitter.com/DHIdigitalAI" target="blank"><RxTwitterLogo className="text-black h-[80px] w-[80px]" /></a>
                
                

            </div>
            <div className="flex flex-row justify-center md:w-[400px] w-[90vw]   gap-10">
                <a href="https://www.youtube.com/channel/UCWOgG2Acttg7-QEeOU3-nNQ" target="blank"><IoLogoYoutube className="text-black h-[80px] w-[80px]" /></a>
                <a href="https://www.linkedin.com/company/dhidigital/mycompany/" target="blank"><RxLinkedinLogo className="text-black h-[80px] w-[80px]" /></a>
                
                

                

            </div>
            

            </div>

            
            
        </div>
        
    );
}
export default ContactUs;