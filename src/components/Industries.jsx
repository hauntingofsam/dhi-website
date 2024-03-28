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
        usecases: [
            "Online condition monitoring of critical plant & machinery in power generation, distribution and renewable energy",
            "Crew and maintenance fleet availability & safety",
            "Vision analytics to detect unsafe acts and intrusions",
            "Online spare parts tracking and utilization analytics"
        ],
        bodyimg: power,
        tech: [
            "IIOT, AI/ML, location, RFID, computer vision, mobility"
        ],
        benefits: [
            "Higher plant uptime & lower maintenance costs",
            "Optimized utilization of crew and maintenance fleet",
            "Faster crisis response management",
            "Avoidance of obsolescence & optimized parts inventory",
            "Enhanced safety of workers and facilities",
        ]


    },
    {
        heading:"Manufacturing",
        usecases:[
            "Online condition monitoring of critical plant & machinery",
            "Predictive & prescriptive maintenance",
            "Vision analytics for quality inspection and worker safety",
            "Energy monitoring & optimization; green energy initiatives",
            "WIP inventory tracking on the shop-floor"
        ],
        bodyimg: manufacture,
        tech: [
            "IIOT, AI/ML, RFID/Beacons, computer vision, mobility"
        ],
        benefits: [
            "Higher plant uptime & lower maintenance costs",
            "Enhanced quality control by use of AI/ML",
            "Reduction in energy bills",
            "Reduction of raw material wastage on the shop-floor",
            "Improved worker safety"
        ]

    },
    {   
        heading:"Healthcare",
        usecases:[
            "Energy monitoring of critical diagnostic equipment",
            "Online tracking of wheeled/shared diagnostic equipment",
            "Remote health monitoring of patients",
            "Hospital facilities locator app",
            "Patient loyalty programs"
        ],
        bodyimg: healthcare,
        tech:[
            "IoT, RFID, beacons, mobility, location, custom apps, AI/ML"
        ],
        benefits:[
            "Reduced energy bills",
            "Higher equipment uptime and audit trail for OEM support",
            "Improved patient service from shared diagnostic equipment",
            "Higher patient retention and share of wallet"
        ]


    },
    {
        heading:"Banking & Insurance",
        usecases:[
            "Location tracking of leased and repossessed vehicles",
            "Monitoring of expensive leased plant & machinery",
            "Monitoring of ATMs and other remote facilities",
            "Monitoring of in-transit high value insured products (I)"
        ],
        bodyimg: banking,
        tech: [
            "IoT, location, computer vision, Telematics, AI/ML, mobility"
        ],
        benefits:[
            "De-risk expensive leased vehicles and equipment payback",
            "Guarantee higher uptime of customer services",
            "De-risk and timely actions for loss of in-transit high-value consignments (I)"
        ]
    },
    {
        heading:"Retail & eCommerce",
        usecases: [
            "Location tracking of leased and repossessed vehicles",
'           "Monitoring of ATMs and other remote facilities',
            "Monitoring of ATMs and other remote facilities",
            "Monitoring of in-transit high value insured products (I)"

        ],
        bodyimg : retail,
        tech:[
            "IoT, location, computer vision, AI/ML, mobility"
        ],
        benefits: [
            "Lower energy bills",
            "Higher equipment uptime",
            "Enhanced customer insights, service levels and satisfaction",
            "Higher sales and profits"
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
            <div className="flex flex-col md:flex-row flex-wrap justify-center ml-[5vw] mr-[5vw] mt-10">
                
                {industries.map((industry,industryIndex)=>(
                    <div
                    key={industryIndex}
                    onClick={() => goToSlide(industryIndex)}
                    
                    className={
                        industryIndex==currentIndex ? ("h-[120px] w-[90vw] md:w-[160px] bg-purple-700 text-white border-l-[0.5px] drop-shadow-md text-center  px-2 hover:cursor-pointer"):("h-[120px] w-[90vw] md:w-[160px] bg-white drop-shadow-md border-gray-700 text-center  px-2 hover:cursor-pointer")
                    }
                    >
                       {industries[industryIndex].heading}
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