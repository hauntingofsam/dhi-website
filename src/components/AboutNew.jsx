import React from "react";
import logo from "../assets/About-1st.png"
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Values from "./Values";
const AboutNew=()=>{
    return(
        <div className="bg-white">
            <div className="who flex flex-col md:flex-row justify-between gap-6">
                <div className="md:w-[500px] w-[90vw] h-[400px] ml-[5vw] mr-[5vw]">
                    <p className="text-4xl mt-[10vw] font-bold">
                        Who we are

                    </p>
                    <p className="mt-20">
                    DHI.AI is a boutique Strategy Consulting, Systems Integration, and Data Analytics company headquartered in New Delhi. It has offices in Mumbai, Delhi, Bangalore, Pune and Kolkata.
                    </p>

                </div>
                <div className="md:w-[500px] w-[90vw] -md:h-[90vw] mr-[5vw]">
                    <img src={logo} className="md:w-[500px] w-[350px] md:h-[500px] h-[350px]"/>

                </div>

            </div>
            <div className="flex flex-col md:flex-row ml-[5vw] mr-[5vw] justify-between my-10 gap-y-12">
                <div className="flex md:flex-row flex-col md:w-[40vw]  w-[90vw] gap-8 gap-y-12">
                    <div className="flex flex-col items-start md:w-[40vw] " >
                        <p className="text-2xl text-bold">
                        Our people & leadership

                        </p>
                        <p className="mt-5">
                        DHI.AI has been set-up by senior executives from global information technology and consulting firms, with significant experience of working with Fortune 500 clients globally.


                        </p>
                        <Link to="/team" className="mt-8 flex flex-row gap-2 my-auto hover:text-blue-700 hover:gap-4 transition-all ease-out duration-700  text-[16px]">
                            <div>
                            Meet our Leadership

                            </div>
                            <div className=" text-blue-700 my-auto " size={30}>
                                <FaArrowRight/>

                            </div>
                            
                        </Link>
                   

                    </div>
                    <div className="flex flex-col items-start md:w-[40vw]">
                    <p className="text-2xl text-bold">
                    Purpose, mission & values
                    </p>
                    <p className="mt-5">
                    See the guiding principles that inform our long-term strategy as well as how we serve our clients.

                    </p>
                    <Link to="#" className="mt-8 flex flex-row gap-2 my-auto hover:text-blue-700 hover:gap-4 transition-all ease-out duration-700 text-[16px]">
                            <div>
                            Learn about <br/>
                            our values

                            </div>
                            <div className=" text-blue-700 my-auto " size={30}>
                                <FaArrowRight/>

                            </div>
                            
                        </Link>

                    </div>


                </div>
                <div className="flex md:flex-row flex-col md:w-[40vw]  w-[90vw] gap-8 gap-y-12 ">
                    <div className="flex flex-col items-start md:w-[40vw]">
                        <p className="text-2xl text-bold">
                        Our aspiration

                        </p>
                        <p className="mt-5">
                        DHI.AI aspires to be one of the most admired and innovative global companies in the sustainability and industry 4.0 solutions space.


                        </p>
                        <Link to="/solutions" className="mt-8 flex flex-row gap-2 my-auto hover:text-blue-700 hover:gap-4 transition-all ease-out duration-700  text-[16px]">
                            <div>
                            Explore our solutions

                            </div>
                            <div className=" text-blue-700 my-auto " size={30}>
                                <FaArrowRight/>

                            </div>
                            
                        </Link>
                        
                        
                   

                    </div>
                    <div className="flex flex-col items-start md:w-[40vw]">
                    <p className="text-2xl text-bold">
                    Our governance
                    </p>
                    <p className="mt-5">
                    We are a values-driven organization and work to meet the highest professional and ethical standards.

                    </p>
                    <Link to="#" className="mt-8 flex flex-row gap-2 my-auto hover:text-blue-700 hover:gap-3 transition-all ease-out duration-700  text-[16px]">
                            <div>
                            Learn about 
                            <br/>our governance

                            </div>
                            <div className=" text-blue-700 my-auto " size={30}>
                                <FaArrowRight/>

                            </div>
                            
                    </Link>

                    </div>


                </div>

            </div>
            <div className="what flex flex-col md:flex-row justify-between gap-6 mb-10">
                <div className="md:w-[500px] w-[90vw] -md:h-[90vw] mr-[5vw] py-14">
                    <img src={logo} className="md:w-[500px] w-[350px] md:h-[500px] h-[350px] "/>

                </div>
                <div className="md:w-[500px] w-[90vw]  ml-[5vw] mr-[5vw]">
                    <p className="text-4xl mt-[10vw] font-bold">
                        How we Work

                    </p>
                    <p className="mt-20">
                    DHI.AI helps to conceptualize, design, create, deploy and manage innovative technology solutions powered by internet-of-things, location-based technologies, artificial intelligence and machine learning for clients across several industries. This allows enterprises to automate data capture from diverse IT-OT systems and to build intelligent data models to monitor and predict business specific insights. 
                     <br /><br />
                    Additionally, our senior consultants are deeply knowledgeable about Sustainability, ESG, Sales & Distribution, Marketing, and Supply Chain domains across diverse enterprise systems such as IBM Maximo, IBM Envizi, IBM Weather, SAP, Oracle and Salesforce and help clients in their digital transformation journeys.

                    </p>
                    <Link to="/offerings"  className="mt-8 flex flex-row gap-2 my-auto hover:text-blue-700 hover:gap-3 transition-all ease-out duration-700  text-[16px] ">
                            <div>
                            Learn about 
                            our offerings

                            </div>
                            <div className=" text-blue-700 my-auto " size={30}>
                                <FaArrowRight/>

                            </div>
                            
                    </Link>

                </div>
                

            </div>
            <Values/>

        </div>
    )
};
export default AboutNew;