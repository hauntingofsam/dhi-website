import React from "react";
import { useState } from "react";
import img1 from "../assets/offerrings-1.jpg"
import img2 from "../assets/offerings-2.jpg"
import img3 from "../assets/offerings-3.jpg"
import "../CSS/Offerings.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoIosArrowDroprightCircle } from "react-icons/io";
const offerings=[
    {
        heading:"Oracle Support & Services ",
        services:[
            "Audit Services",
            "Implementation",
            "System Support",
            "Enhancements",
            "Add-on modules Development",

        ]
    },
    {
        heading:"SAP Support & Services",
        services:[
            "Audit Services",
            "Implementation",
            "System Support",
            "Enhancements",
            "Add-on modules Development",

        ],


    },
    {
        heading:"Salesforce",
        services:[
            "Audit Services",
            "Implementation",
            "System Support",
            "Enhancements",
            "Add-on modules Development",

        ]
    },
    
]
const emergingofferings=[
    {heading:"Artificial Intelligence",
     services:[
        "Generative AI",
        "Large Language Models",
        "Deep Learning",
        "Prompt Engineering",
        "AI bots"
     ],
    },
    {
      heading:"Emerging Technologies",
      services:[
        "IOT",
        "Blockchain",
        "AR/VR",
        "Cognitive technologies",
        "Drones",
      ],
    },
    {
        heading:"Smart Factory",
        services:[
            "Strategy and Roadmap",
            "IIOT Integration",
            "Predictive Maintenance",
            "Digital Twin",
            "Edge Computing"
        ],
    }
]
const digitalofferings=[
    {
        heading:"Weather Insights",
        services:[
            "Monitoring disruptive weather conditions",
            "Sending alerts",
            "Predicting potential impacts",
            "Insights",
            "Measure & Report"
        ]
    },
    {
        heading:"Sustainability & ESG",
        services:[
            "ESG Consultancy",
            "ESG Roadmap",
            "IBM Envizi Implementation",
            "ESG Marketing",
            "IBM ESG Support",
        ]
    },
    {
        heading:"Enterprise Asset Management",
        services:[
            "ESG Consultancy",
            "ESG Roadmap",
            "IBM Envizi Implementation",
            "ESG Marketing",
            "IBM ESG Support",

        ],
    },
    {
        heading:"IOT",
        services:[
            "ESG Consultancy",
            "ESG Roadmap",
            "IBM Envizi Implementation",
            "ESG Marketing",
            "IBM ESG Support",
        ],
    },
    
]
const Offerings=()=>{
    // AOS.init({
    //     offset:300,
    //     anchorPlacement: 'center'
        
    // });
    const [currentOfferingIndex, setCurrentOfferingIndex] = useState(0);
    const [currentDigitalIndex, setCurrentDigitalIndex] = useState(0);
    const [currentEmergingIndex, setCurrentEmergingIndex] = useState(0);
    
    // const goToSlide = (offeringIndex) => {
    //     setCurrentIndex(offeringIndex);
    // };
    return(
        <div className="bg-gray-500 pb-[15vh]">
            <div className="text-4xl text-white py-5 ml-[5vw]">
                Our Offerings

            </div>
            <p className="text-lg text-white ml-[5vw] mb-8">
            We provide expert advisory services, application development, managed services and analytics as a service.
            </p>
            < div className="flex flex-col md:flex-row   mt-20 mb-40 gap-6">
            
                    
                
                <div className="flip-card h-[300px] md:w-[40vw] w-[90%] bg-transparent mx-[5%] ">
                <div className="flipcard-inner ">
                    <div className="flipcard-front bg-indigo-900 rounded-lg">
                            <img src={img1} className="rounded-full mx-auto mt-4"/>
                            <p className="text-2xl text-white text-center mx-2 mt-4">
                                Business Support Services
                            </p>

                    </div>
                    <div className="flipcard-back rounded-lg py-auto bg-indigo-700 pt-[20%]">
                        <div className="text-lg text-white text-center">
                        {/* <p className="my-8 h-[100px]"> */}
                        We help our clients to identify business requirements, creation of RFPs, technical evaluation of solutions & bids, business case creation, and managing PMO for our client's projects.

                        {/* </p>  */}

                        </div>

                    </div>

                </div>

                </div>
                    
                <div className=" flex flex-col  ">
                <div className="flex flex-row  md:w-[40vw] w-[80%] gap-2 mx-[10%] md:mx-0">
                    {/* <div   className=" md:w-[330px] w-[90vw] bg-blue-950 sm:mr-20 ml-auto rounded-lg ">
                        <p className="text-xl text-white text-center  py-6">
                            Oracle

                        </p>

                    </div> */}
                    {/* <div   className="  md:w-[330px] w-[90vw] bg-blue-950 sm:ml-20 mr-auto rounded-lg ">
                        <p className="text-xl text-white text-center py-6">
                            SAP

                        </p>

                    </div> */}
                    {/* <div  className="md:w-[330px] w-[90vw] bg-blue-950 sm:mr-20 ml-auto rounded-lg">
                        <p className="text-xl text-white text-center py-6">
                            Salesforce

                        </p>

                    </div> */}
                    {offerings.map((offering,offeringIndex)=>(
                    <div
                    key={offeringIndex}
                    onClick={() => {setCurrentOfferingIndex(offeringIndex)}}
                    
                    className={
                        offeringIndex==currentOfferingIndex ? ("h-[80px] w-[30vw] md:w-[12vw] bg-purple-700 text-white  drop-shadow-md  px-2  hover:cursor-pointer flex flex-col justify-center text-sm"):("h-[80px] w-[30vw] md:w-[12vw] bg-white drop-shadow-md border-gray-700  px-2 hover:cursor-pointer flex flex-col justify-center text-sm")
                    }
                    >
                       <div className="">
                       {offerings[offeringIndex].heading}
                        </div>
                    </div>


                    ))}
                    
                    

                </div>
                <div className="flex flex-col  md:w-[40vw] w-[80%]  mx-[10%] md:mx-0">
                {offerings[currentOfferingIndex].services.map((el)=>(
                        <div
                        key={el}
                        className="flex flex-row gap-2 mt-2 "
                        > 
                            <div className="h-[30px] w-[30px]">
                            <IoIosArrowDroprightCircle className="text-purple-700 bg-slate-50 rounded-full m-[3px] " size={24}/>

                            </div>
                            
                            
                            <p className="text-lg text-white transition-all ease-out duration-700 hover:ml-4">
                                {el}
                            </p>

                            
                        </div>
                            
                            
                        
                ))}
                    

                </div>

                </div>
                

            </div>
            < div className="flex flex-col md:flex-row   mt-20 mb-40 gap-6">
            
                    
                
                <div className="flip-card h-[300px] md:w-[40vw] w-[90%] bg-transparent mx-[5%]">
                <div className="flipcard-inner ">
                    <div className="flipcard-front bg-indigo-900 rounded-lg">
                            <img src={img2} className="rounded-full mx-auto mt-4"/>
                            <p className="text-2xl text-white text-center mx-2 mt-4">
                            Digital Transformations
                            </p>

                    </div>
                    <div className="flipcard-back rounded-lg py-auto bg-indigo-700 pt-[20%]">
                        <div className="text-lg text-white text-center">
                        {/* <p className="my-8 h-[100px]"> */}
                        We design & build customized digital applications and also leverage our ready-to-use “accelerators” across IIoT, Vision Analytics, AI/ML, AR/VR, and Track & Trace domains
                        {/* </p>  */}

                        </div>

                    </div>

                </div>

                </div>
                    
                <div className=" flex flex-col  ">
                <div className="flex flex-row flex-wrap md:w-[40vw] w-[80%] gap-1 mx-[10%] md:mx-0">
                    {/* <div   className=" md:w-[330px] w-[90vw] bg-blue-950 sm:mr-20 ml-auto rounded-lg ">
                        <p className="text-xl text-white text-center  py-6">
                            Oracle

                        </p>

                    </div> */}
                    {/* <div   className="  md:w-[330px] w-[90vw] bg-blue-950 sm:ml-20 mr-auto rounded-lg ">
                        <p className="text-xl text-white text-center py-6">
                            SAP

                        </p>

                    </div> */}
                    {/* <div  className="md:w-[330px] w-[90vw] bg-blue-950 sm:mr-20 ml-auto rounded-lg">
                        <p className="text-xl text-white text-center py-6">
                            Salesforce

                        </p>

                    </div> */}
                    {digitalofferings.map((offering,offeringIndex)=>(
                    <div
                    key={offeringIndex}
                    onClick={() => {setCurrentDigitalIndex(offeringIndex)}}
                    
                    className={
                        offeringIndex==currentDigitalIndex ? ("h-[80px] w-[30vw] md:w-[12vw] bg-purple-700 text-white  drop-shadow-md  px-2  hover:cursor-pointer flex flex-col justify-center text-sm"):("h-[80px] w-[30vw] md:w-[12vw] bg-white drop-shadow-md border-gray-700  px-2 hover:cursor-pointer flex flex-col justify-center text-sm")
                    }
                    >
                       <div className="">
                       {digitalofferings[offeringIndex].heading}
                        </div>
                    </div>


                    ))}
                    
                    

                </div>
                <div className="flex flex-col  md:w-[40vw] w-[80%]  mx-[10%] md:mx-0">
                {digitalofferings[currentDigitalIndex]?.services.map((el)=>(
                        <div
                        key={el}
                        className="flex flex-row gap-2 mt-2 "
                        > 
                            <div className="h-[30px] w-[30px]">
                            <IoIosArrowDroprightCircle className="text-purple-700 m-[3px] bg-slate-50 rounded-full" size={24}/>

                            </div>
                            
                            
                            <p className="text-lg text-white transition-all ease-out duration-700 hover:ml-4">
                                {el}
                            </p>

                            
                        </div>
                            
                            
                        
                ))}
                    

                </div>

                </div>
                

            </div>
            < div className="flex flex-col md:flex-row   mt-20 mb-40 gap-6">
            
                    
                
                <div className="flip-card h-[300px] md:w-[40vw] w-[90%] bg-transparent mx-[5%]">
                <div className="flipcard-inner ">
                    <div className="flipcard-front bg-indigo-900 rounded-lg">
                            <img src={img3} className="rounded-full mx-auto mt-4"/>
                            <p className="text-2xl text-white text-center mx-2 mt-4">
                            Emerging Technologies
                            </p>

                    </div>
                    <div className="flipcard-back rounded-lg py-auto bg-indigo-700 pt-[20%]">
                        <div className="text-lg text-white text-center">
                        {/* <p className="my-8 h-[100px]"> */}
                        We design & build customized digital applications and also leverage our ready-to-use “accelerators” across IIoT, Vision Analytics, AI/ML, AR/VR, and Track & Trace domains
                        {/* </p>  */}

                        </div>

                    </div>

                </div>

                </div>
                    
                <div className=" flex flex-col  ">
                <div className="flex flex-row  md:w-[40vw] w-[80%] gap-1 mx-[10%] md:mx-0">
                    {/* <div   className=" md:w-[330px] w-[90vw] bg-blue-950 sm:mr-20 ml-auto rounded-lg ">
                        <p className="text-xl text-white text-center  py-6">
                            Oracle

                        </p>

                    </div> */}
                    {/* <div   className="  md:w-[330px] w-[90vw] bg-blue-950 sm:ml-20 mr-auto rounded-lg ">
                        <p className="text-xl text-white text-center py-6">
                            SAP

                        </p>

                    </div> */}
                    {/* <div  className="md:w-[330px] w-[90vw] bg-blue-950 sm:mr-20 ml-auto rounded-lg">
                        <p className="text-xl text-white text-center py-6">
                            Salesforce

                        </p>

                    </div> */}
                    {emergingofferings.map((offering,offeringIndex)=>(
                    <div
                    key={offeringIndex}
                    onClick={() => {setCurrentEmergingIndex(offeringIndex)}}
                    
                    className={
                        offeringIndex==currentEmergingIndex ? ("h-[80px] w-[30vw] md:w-[12vw] bg-purple-700 text-white  drop-shadow-md  px-2  hover:cursor-pointer flex flex-col justify-center text-sm"):("h-[80px] w-[30vw] md:w-[12vw] bg-white drop-shadow-md border-gray-700  px-2 hover:cursor-pointer flex flex-col justify-center text-sm")
                    }
                    >
                       <div className="">
                       {emergingofferings[offeringIndex].heading}
                        </div>
                    </div>


                    ))}
                    
                    

                </div>
                <div className="flex flex-col  md:w-[40vw] w-[80%]  mx-[10%] md:mx-0">
                {emergingofferings[currentEmergingIndex]?.services.map((el)=>(
                        <div
                        key={el}
                        className="flex flex-row gap-2 mt-2"
                        > 
                            <div className="h-[30px] w-[30px]">
                            <IoIosArrowDroprightCircle className="text-purple-700 m-[3px] bg-slate-50 rounded-full" size={24}/>

                            </div>
                            
                            
                            <p className="text-lg text-white transition-all ease-out duration-700 hover:ml-4">
                                {el}
                            </p>

                            
                        </div>
                            
                            
                        
                ))}
                    

                </div>

                </div>
                

            </div>
            {/* < div className="flex flex-col md:flex-row w-[90vw] mx-auto my-40 gap-8 ">
            <div className="flip-card h-[300px] md:w-[700px] w-[90vw] bg-transparent">
                <div className="flipcard-inner">
                    <div className="flipcard-front  bg-purple-700 rounded-lg">
                            <img src={img2} className="rounded-full mx-auto mt-4"/>
                            <p className="text-2xl text-white text-center mx-2 mt-4">
                                Digital Transformations
                            </p>

                    </div>
                    <div className="flipcard-back bg-indigo-700 rounded-lg py-auto">
                        <p className="text-lg text-white text-center py-24  px-4">
                        We design & build customized digital applications and also leverage our ready-to-use “accelerators” across IIoT, Vision Analytics, AI/ML, AR/VR, and Track & Trace domains

                        </p>

                    </div>

                </div>

                </div>
            
                    
                
                    
                
                <div className="flex flex-col w-[90vw] gap-6 my-auto md:px-14">
                    <div  className=" md:w-[330px] w-[90vw] bg-blue-950 sm:ml-4  mr-auto  rounded-lg">
                        <p className="text-xl text-white text-center  py-6">
                            Weather

                        </p>

                    </div>
                    <div  className=" md:w-[330px] w-[90vw] bg-blue-950 sm:mr-4 ml-auto rounded-lg ">
                        <p className="text-xl text-white text-center py-6">
                            Envizi/ESG

                        </p>

                    </div>
                    <div   className=" md:w-[330px] w-[90vw] bg-blue-950 sm:ml-4 mr-auto rounded-lg">
                        <p className="text-xl text-white text-center py-6">
                            Maximo-MAS

                        </p>

                    </div>
                    <div   className=" md:w-[330px] w-[90vw] bg-blue-950 sm:mr-4 ml-auto rounded-lg">
                        <p className="text-xl text-white text-center py-6">
                            IOT

                        </p>

                    </div>

                </div>

            </div>
            < div className="flex flex-col md:flex-row w-[90vw] mx-auto mb-20 gap-8 ">
            <div className="flip-card h-[300px] md:w-[700px] w-[90vw] bg-transparent rounded-lg">
                <div className="flipcard-inner">
                    <div className="flipcard-front bg-sky-600 rounded-lg">
                            <img src={img3} className="rounded-full mx-auto mt-4"/>
                            <p className="text-2xl text-white text-center mx-2 mt-4">
                                Innovation with AI
                            </p>

                    </div>
                    <div className="flipcard-back bg-indigo-700 rounded-lg py-auto">
                        <p className="text-lg text-white text-center py-24  px-4">
                        We provide systems integration services for IT/OT applications, managed services, staff augmentation, and IT/OT infrastructure set-up for both cloud and on-premises.

                        </p>

                    </div>

                </div>

                </div>
            
                    
                
                    
                
                <div className="flex flex-col w-[90vw] gap-6 my-auto md:px-14">
                    <div  className=" md:w-[330px] w-[90vw] bg-blue-950 sm:ml-4  mr-auto  rounded-lg">
                        <p className="text-xl text-white text-center  py-6">
                            Gen AI

                        </p>

                    </div>
                    <div  className=" md:w-[330px] w-[90vw] bg-blue-950 sm:mr-4 ml-auto rounded-lg ">
                        <p className="text-xl text-white text-center py-6">
                            AI Chat Bot

                        </p>

                    </div>
                    <div className=" md:w-[330px] w-[90vw] bg-blue-950 sm:ml-4 mr-auto rounded-lg">
                        <p className="text-xl text-white text-center py-6">
                            AI Automations

                        </p>

                    </div>
                    <div  className=" md:w-[330px] w-[90vw] bg-blue-950 sm:mr-4 ml-auto rounded-lg">
                        <p className="text-xl text-white text-center py-6">
                            AI Vision

                        </p>

                    </div>

                </div>

            </div> */}


        </div>
    )
}
export default Offerings;