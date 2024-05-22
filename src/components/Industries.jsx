import React from "react";
import { useState } from "react";
import oil from "../assets/oil.png"
import power from "../assets/Power-e1654062846980.png"
import manufacture from "../assets/manufacture.png"
import transport from "../assets/Transport.png"
import healthcare from "../assets/Healthcare.png"
import banking from "../assets/banking.png"
import retail from "../assets/retail.png"
import { RxThickArrowLeft } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
const industries=[
    {
        heading:"Power Generation, Transmission, Distribution, & Renewables",
        usecases:[
            "Centralized monitoring & maintenance of critical assets",
            "Predictive maintenance of critical plant & machinery ",
            "Fleet availability and worker safety",
            "Vision analytics to detect unsafe acts and intrusions",
            "Balance useful life and utilization analytics",

        ],
        bodyimg:power,
        tech:[
            "IIOT, AI/ML, location, RFID, computer vision, mobility",
        ],
        benefits:[
            "Higher plant uptime & lower maintenance costs",
            "Optimized utilization of crew and fleet maintenance costs",
            "Faster crisis response management",
            "Avoidance of obsolescence & optimized parts inventory",
            "Enhanced safety of workers and facilities",
        ],
        

    },

    {
        heading:"Manufacturing",
        usecases:[
            "Online condition monitoring of critical plant & machinery",
            "Predictive & prescriptive maintenance",
            "Vision analytics for quality inspection and worker safety",
           " Energy monitoring & optimization; green energy initiatives",
            "WIP inventory tracking on the shop-floor",
        ],
        bodyimg:manufacture,
        tech:[
            "IIOT, AI/ML, RFID/Beacons, computer vision, mobility"
        ],
        benefits:[
            "Higher plant uptime & lower maintenance costs",
            "Enhanced quality control", 
            "Reduction in energy consumption",
            "Reduction of raw material wastage ",
            "Improved worker safety",
        ]
    },
    {
        heading:"Banking & Insurance",
        usecases: [
            "Monitoring of ATMs and other remote facilities",
            "Location tracking of leased and repossessed vehicles",
            "Monitoring of expensive leased plant & machinery",
            "Monitoring of in-transit high value insured products",
        ],
        bodyimg: banking,
        tech: [
            "IoT, location, computer vision, mobility"
        ],
        benefits: [
            "Higher availability of critical banking infra such as ATMs",
            "Enhanced safety of remote branches and ATM’s ",
           " Reduced risk of leased assets and in-transit goods",
            "Prediction models for customers’ propensity to default",
        ]


    },
    {
        heading:"Oil & Gas",
        usecases:[
            "Centralized monitoring & maintenance of critical assets",
            "Predictive maintenance of critical plant and machinery",
            "Online tracking and management of tanker fleet",
            "Vision analytics to detect unsafe acts and intrusions",
            "Centralized spare parts tracking and utilization analytics",
        ],
        bodyimg: oil,
        tech: [
            "IIOT, AI/ML, location, RFID, computer vision, mobility"
        ],
        benefits: [
            "Higher plant uptime & lower maintenance costs",
            "Optimized tanker fleet utilization",
            "Avoidance of obsolescence and optimized parts inventory",
            "Enhanced safety of workers and facilities",
        ]

    },
    
    {
        heading:"Transportation & Logistics",
        usecases:[
            "Fleet tracking, route optimization, anomaly detection",
            "Consignment tracking from source to consumption",
            "Condition monitoring and optimized maintenance of fleet",
            "Spare parts tracking and management",
        ],
        bodyimg: transport,
        tech: [
            "IoT, telematics, beacons, computer vision, RFID, AI/ML, mobility"
        ],
        benefits:[
            "Optimized fleet", 
            "Accurate delivery predictions",
            "Improved consignment quality",
            "Reduced wastage",
        ]
    },
    
];
        

const Industries=()=>{
    const [currentIndex, setCurrentIndex] = useState(0);
    const goToSlide = (industryIndex) => {
        setCurrentIndex(industryIndex);
    };
        


    
    return(
        <div className="bg-white">
            <div className="text-4xl text-gray-900 py-6 ml-[5vw]">
                Industries

            </div>
            <div className="flex flex-col md:flex-row flex-wrap justify-center ml-[5vw] mr-[5vw] mt-10 text-center ">
                
                {industries.map((industry,industryIndex)=>(
                    <div
                    key={industryIndex}
                    onClick={() => goToSlide(industryIndex)}
                    
                    className={
                        industryIndex==currentIndex ? ("h-[120px] w-[90vw] md:w-[160px] bg-purple-700 text-white  drop-shadow-md  px-2  hover:cursor-pointer flex flex-col justify-center"):("h-[120px] w-[90vw] md:w-[160px] bg-white drop-shadow-md border-gray-700  px-2 hover:cursor-pointer flex flex-col justify-center")
                    }
                    >
                       <div className="">
                       {industries[industryIndex].heading}
                        </div>
                    </div>


                ))}
            
            
            
            </div>
            <div className="flex flex-col md:flex-row justify-around ml-[5vw] mr-[5vw] mb-20 gap-6 mt-10">
                <div className="w-[90vw] md:w-[450px] my-auto">
                    <img src={industries[currentIndex].bodyimg}/>

                </div>
                <div className="w-[90vw] md:w-[500px]">
                    <div className="text-3xl text-gray-900 ">
                        Use Cases:

                    </div>
                    <div className="flex flex-col">
                    {industries[currentIndex].usecases.map((el)=>(
                        <div
                        key={el}
                        className="flex flex-row gap-2 mt-2"
                        > 
                            <div className="h-[30px] w-[30px]">
                            <TiTick className="text-green-600" size={30}/>

                            </div>
                            
                            <p>
                                {el}
                            </p>

                            
                        </div>
                            
                            
                        
                    ))}

                    </div>
                    
                    <div className="text-3xl text-gray-900 mt-10 ">
                        Technologies Used:

                    </div>
                    <div className="flex flex-col">
                    {industries[currentIndex].tech.map((el)=>(
                        <div
                        key={el}
                        className="flex flex-row gap-2 mt-2"
                        > 
                            <div className="w-[30px] h-[30px]">
                            <TiTick className="text-green-600 " size={30} />

                            </div>
                            
                            <p>
                                {el}
                            </p>

                            
                        </div>
                            
                            
                        
                    ))}

                    </div>
                    
                    <div className="text-3xl text-gray-900 mt-10 ">
                    Benefits Derived:

                    </div>
                    <div className="flex flex-col">
                    {industries[currentIndex].benefits.map((el)=>(
                        <div
                        key={el}
                        className="flex flex-row gap-2 mt-2"
                        > 
                            <div className="w-[30px] h-[30px]">
                            <TiTick className="text-green-600 " size={30}/>

                            </div>
                            
                            <p>
                                {el}
                            </p>

                            
                        </div>
                            
                            
                        
                    ))}

                    </div>
                    

                </div>
                
            </div>


        </div>
    )
};
export default Industries;