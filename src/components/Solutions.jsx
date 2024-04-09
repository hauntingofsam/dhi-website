import React from "react";
// import img1 from "../assets/offerrings-1.jpg"
import img2 from "../assets/capab-2.jpg"
import img3 from "../assets/capab-3.jpg"
import img5 from "../assets/capab-5.jpg"
import img6 from "../assets/capab-6.jpg"
import img7 from "../assets/capab-7.jpg"
import img8 from "../assets/capab-8.jpg"
import img1 from "../assets/capab-1.jpg"
import {Swiper,SwiperSlide} from "swiper/react";
import { RxChevronLeft,RxChevronRight } from "react-icons/rx";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Navigation,EffectCoverflow,Pagination} from "swiper/modules";
import "../CSS/Capabilities.css"
// import "../CSS/Offerings.css"
const Solutions=()=>{
    return(
        <div className="bg-white">
            <div className="text-4xl text-gray-900 py-5 ml-[5vw] ">
                Our Solutions
        </div>
        <p className="mr-[5vw] ml-[5vw] text-lg">
        We solve complex operational problems for our customers in the IT-OT convergence space by bridging the technology & process gaps, enabled by cutting edge digital technologies such as internet of things, artificial intelligence, machine learning, computer vision, RFID/beacons, location based services, sensors and devices.

        </p>
        <div className="text-4xl text-center mt-5">
        DHI DTWIN-360® - DIGITAL PLATFORM

        </div>
        <div className="cont">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >
                <SwiperSlide className="bg-indigo-700 w-[300px] text-center  ">
                    <img src={img1} className="mx-auto my-5"/>
                    <p className="text-white text-2xl mt-4">EIP</p>
                    <p className="text-white text-lg mt-2">
                        Business Platform

                    </p>
                    <p className="text-white mt-5">
                        <ul className="space-y-2">
                            <li>People</li>
                            <li>Processes</li>
                            <li>Data</li>
                        </ul>


                    </p>

                </SwiperSlide>
                <SwiperSlide className="bg-indigo-700 w-[300px] text-center">
                    <img src={img2} className="mx-auto my-5"/>
                    <p className="text-white text-2xl mt-4">ESG for Enterprise</p>
                    <p className="text-white mt-5 px-4">
                    ESG for Enterprise powered by IBM Maximo Monitor and Envizi and Weather Insights


                    </p>
                    

                </SwiperSlide>
                <SwiperSlide className="bg-indigo-700 w-[300px] text-center">
                    <img src={img3} className="mx-auto my-5"/>
                    <p className="text-white text-2xl mt-4">
                        Worker Safety

                    </p>
                    <p className="text-white mt-5 px-4">
                    Worker Safety Solution powered by IBM Worker Safety, Maximo Monitor and Flight Planner



                    </p>
                    

                </SwiperSlide>
                <SwiperSlide className="bg-indigo-700 w-[300px] text-center">
                    <img src={img1} className="mx-auto my-5"/>
                    <p className="text-white text-2xl mt-4">
                        Smart Products

                    </p>
                    <p className="text-white mt-5 px-4">
                    Smarter Products for the Enterprise powered by IBM Maximo Monitor




                    </p>


                    

                </SwiperSlide>
                <SwiperSlide className="bg-indigo-700 w-[300px] text-center">
                    <img src={img5} className="mx-auto my-5"/>
                    <p className="text-white text-2xl mt-4">
                        Smart Factory

                    </p>
                    <p className="text-white mt-5 px-4">
                    Smart Factory powered by IBM Maximo Monitor, Telit DeviceWise, Maximo Predict





                    </p>
                    

                </SwiperSlide>
                <SwiperSlide className="bg-indigo-700 w-[300px] text-center">
                    <img src={img6} className="mx-auto my-5"/>
                    <p className="text-white text-2xl mt-4">
                        Digital Twin

                    </p>
                    <p className="text-white mt-5 px-4">
                    Digital Twin for Enterprise powered by IBM Maximo Monitor and Predict, Weather Insights






                    </p>

                    

                </SwiperSlide>
                <SwiperSlide className="bg-indigo-700 w-[300px] text-center">
                    <img src={img7} className="mx-auto my-5"/>
                    <p className="text-white text-2xl mt-4">
                        Weather Insights

                    </p>
                    <p className="text-white mt-5 px-4">
                    Weather Insights for Business with Integration to IOT Platform


                    </p>
                    

                </SwiperSlide>
                <SwiperSlide className="bg-indigo-700 w-[300px] text-center">
                    <img src={img8} className="mx-auto my-5"/>
                    <p className="text-white text-2xl mt-4">
                        Flight Planner

                    </p>
                    <p className="text-white mt-5 px-4">
                    Drone Flight Planning and Management powered by IBM Weather with GIS Integration with SAP/Maximo Connectors


                    </p>
                    

                </SwiperSlide >
                <SwiperSlide className="bg-indigo-700 w-[300px] text-center">
                    <img src={img8} className="mx-auto my-5"/>
                    <p className="text-white text-2xl mt-4">
                        Visual Insights

                    </p>
                    <p className="text-white mt-5 px-4">
                    Powered by IBM Maximo Visual Insights



                    </p>
                    

                </SwiperSlide >
                <div className="slider-controller">
                    <div className="swiper-button-prev slider-arrow  ">
                        <RxChevronLeft name="arrow-back"/>

                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <RxChevronRight  name="arrow-next"/>

                    </div>
                    <div className="swiper-pagination">



                    </div>

                </div>

            </Swiper>

        </div>

        </div>
    
        

    );
}
export default Solutions;