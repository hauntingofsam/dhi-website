import React from "react";
import Card from "./Card";
import img1 from "../assets/About-1st.png"
import img2 from "../assets/About-2nd.png"
import img3 from  "../assets/About-3rd.png"
import img4 from "../assets/About-4th.png"
import img5 from "../assets/About-5th.png"
import img6 from "../assets/About-6th.png"
const About=()=>{
    const data=[
        {
            "image":"../assets/About-1st.png",
            "content":"DHI.AI is a digital start-up headquartered in New Delhi, with presence in Mumbai, Kolkata, Pune and Bangalore."
        }
    ]

    
    return(
        <div className="bg-slate-100 ">
            <div className="text-4xl text-gray-900 py-5 ml-[10vw]">
                About US

            </div>
            <div className="flex flex-col md:flex-row w-[90vw] mx-auto ">
                <div className="bg-white h-[330px] lg:w-[450px] w-[90vw] drop-shadow-lg">
                    <img src={img1} className="ml-8 mt-4"/>
                    <p className="ml-8 mt-4 mr-8 text-lg">
                    DHI.AI is a digital start-up headquartered in New Delhi, with presence in Mumbai, Kolkata, Pune and Bangalore.
                    </p>

                </div>
                <div className="bg-slate-100 h-[330px] lg:w-[450px] w-[90vw] drop-shadow-lg hover:bg-white">
                    <img src={img2} className="ml-8 mt-4"/>
                    <p className="ml-8 mt-4 mr-8 text-lg"> 
                    We serve global clients across retail, banking, insurance, healthcare, manufacturing, and energy & utilities industries. 
                    </p>

                </div>
                <div className="bg-white h-[330px] lg:w-[450px] w-[90vw] drop-shadow-lg">
                    <img src={img3} className="ml-8 mt-4"/>
                    <p className="ml-8 mt-4 mr-8 text-lg">
                    We provide expert advisory services, application development, staff augmentation, managed services and analytics as a service.
                    </p>

                </div>

            </div>
            <div className="flex flex-col md:flex-row w-[90vw] mx-auto ">
                <div className="hover:bg-white  bg-slate-100 h-[330px] lg:w-[450px] w-[90vw] drop-shadow-lg">
                    <img src={img4} className="ml-8 mt-4"/>
                    <p className="ml-8 mt-4 mr-8 text-lg">
                    We specialize in IoT, Industry 4.0, artificial intelligence, machine learning, computer vision, track & trace, marketing & branding, and analytics.
                    </p>

                </div>
                <div className=" h-[330px] lg:w-[450px] w-[90vw] drop-shadow-lg bg-white">
                    <img src={img5} className="ml-8 mt-4"/>
                    <p className="ml-8 mt-4 mr-8 text-lg"> 
                    Backed by industry veterans from IBM, SAP, Accenture and Cisco
                    </p>

                </div>
                <div className="bg-slate-100 hover:bg-white h-[330px] lg:w-[450px] w-[90vw] drop-shadow-lg">
                    <img src={img6} className="ml-8 mt-4"/>
                    <p className="ml-8 mt-4 mr-8 text-lg">
                    Strategic alliances to deliver comprehensive digital and IoT solutions
                    </p>

                </div>

            </div>
            
            
        </div>
    )
}
export default About;