import React from "react";
import { useState } from "react";
import oil from "../assets/oil.png"
import transport from "../assets/Transport.png"
import { RxThickArrowLeft } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
const industries=[
    {
        heading:"Oil & Gas",
        usecases:[
            "Online condition monitoring and predictive maintenance of critical rotary equipment",
            "Online tracking and management of tanker fleet",
            "Vision analytics to detect unsafe acts and intrusions",
            "Online spare parts tracking and utilization analytics"

        ],
        bodyimg:oil,
        tech:[
            "IIOT, AI/ML, location, RFID, computer vision, mobility",
        ],
        benefits:[
            "Higher plant uptime & lower maintenance cost",
            "Optimized tanker fleet utilization",
            "Avoidance of obsolescence optimized parts inventory",
            "Enhanced safety of workers and facilities",
        ],
        

    },

    {
        heading:"Transportation & Logistics",
        usecases:[
            "Fleet tracking, route optimization, anomaly detection",
            "Consignment tracking from source to consumption",
            "Condition monitoring and spares management of fleet",
            "Inventory tracking within stockyards & warehouses",
        ],
        bodyimg:transport,
        tech:[
            "IoT, telematics, beacons, computer vision, RFID, AI/ML, mobility"
        ],
        benefits:[
            "Optimized fleet and accurate delivery predictions",
            "Improved consignment quality",
            "Lower cost of operations",
            "Reduced wastage"
        ]
    },
    {
        heading:"Power Generation, Distribution, & Renewables",

    },
    {
        heading:"Manufacturing",
    },
    {   
        heading:"Healthcare",
        body:"H",

    },
    {
        heading:"Banking & Insurance",
    },
    {
        heading:"Retail & eCommerce",
    },
];
        

const Industries=()=>{
    const [currentIndex, setCurrentIndex] = useState(0);
    const goToSlide = (industryIndex) => {
        setCurrentIndex(industryIndex);
    };
        


    
    return(
        <div className="bg-white">
            <div className="text-4xl text-gray-900 ml-[10vw]">
                Industries

            </div>
            <div className="flex flex-col md:flex-row flex-wrap justify-center ml-[5vw] mr-[5vw] mt-10 ">
                
                {industries.map((industry,industryIndex)=>(
                    <div
                    key={industryIndex}
                    onClick={() => goToSlide(industryIndex)}
                    
                    className="h-[120px] w-[90vw] md:w-[140px] bg-white border-l-[0.5px] border-gray-700 text-center  px-2"
                    >
                       {industries[industryIndex].heading}
                    </div>


                ))}
            
            
            
            </div>
            <div className="flex flex-col md:flex-row justify-around ml-[5vw] mr-[5vw] mt-10 gap-6">
                <div className="w-[90vw] md:w-[450px] my-auto">
                    <img src={industries[currentIndex].bodyimg}/>

                </div>
                <div className="w-[90vw] md:w-[500px]">
                    <div className="text-3xl text-gray-900 ">
                        Use Cases:

                    </div>
                    {industries[currentIndex].usecases.map((el)=>(
                        <div
                        key={el}
                        className="flex flex-row flex-wrap gap-2 mt-2"
                        > 
                            
                            <TiTick className="text-green-600 w-[30px] h-[30px]" />
                            <p>
                                {el}
                            </p>

                            
                        </div>
                            
                            
                        
                    ))}
                    <div className="text-3xl text-gray-900 mt-10 ">
                        Technologies Used:

                    </div>
                    {industries[currentIndex].tech.map((el)=>(
                        <div
                        key={el}
                        className="flex flex-row flex-wrap gap-2 mt-2"
                        > 
                            
                            <TiTick className="text-green-600 w-[30px] h-[30px]" />
                            <p>
                                {el}
                            </p>

                            
                        </div>
                            
                            
                        
                    ))}
                    <div className="text-3xl text-gray-900 mt-10 ">
                    Benefits Derived:

                    </div>
                    {industries[currentIndex].benefits.map((el)=>(
                        <div
                        key={el}
                        className="flex flex-row flex-wrap gap-2 mt-2"
                        > 
                            
                            <TiTick className="text-green-600 w-[30px] h-[30px]" />
                            <p>
                                {el}
                            </p>

                            
                        </div>
                            
                            
                        
                    ))}

                </div>
                
            </div>


        </div>
    )
};
export default Industries;