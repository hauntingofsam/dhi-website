import React from "react";
import { IoMdClose } from "react-icons/io";
const Form=()=>{
    return(
        <div >
            <div className=" z-[5] inset-0  bg-black bg-opacity-40 backdrop-blur-lg">
            <div className="md:w-[70vw] w-[90vw] flex flex-col md:flex-row z-10  my-auto mx-auto ">
                <div className="w-[90vw] md:w-[35vw] bg-indigo-700 text-white h-[450px] text-center px-4 my-auto">
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
                <div className="w-[90vw] md:w-[35vw] h-[450px] bg-white text-center px-4 my-auto">
                <button><IoMdClose size={25} className="text-black fixed mr-2"/></button>
                    <p className="my-4 text-2xl text-gray-900 font-semibold">
                    Book a Demo

                    </p>
                    <p className="my-4 text-sm">
                    Enter your information to register for the demo.

                    </p>
                    <form >
                        <input type="label" placeholder="Name" required className="w-[300px] h-[50px] mt-2">

                        </input>
                        <input type="label" placeholder="Company Name" required className="w-[300px] h-[50px] mt-2">

                        </input>
                        <input type="email" placeholder="Work Email" required className="w-[300px] h-[50px] mt-2">

                        </input>
                        <input type="label" placeholder="Phone" required className="w-[300px] h-[50px] mt-2">

                        </input>
                        <input type="label" placeholder="Tell us about your requirement" required className="w-[300px] h-[80px] mt-2 border-none">

                        </input>

                    </form>

                </div>

            </div>
            </div>
            
            
            
            
            

            
        </div>
        
            

            
        
            

        
    )
}
export default Form;