import React from "react";
import { useState } from "react";
import logo1 from "../assets/client1.png"
import logo2 from "../assets/client2.png"
import logo3 from "../assets/client3.jpg"
import logo4 from "../assets/client4.png"
import logo5 from "../assets/client5.png"
import logo6 from "../assets/client6.png"
import logo7 from "../assets/client7.jpg"
import logo8 from "../assets/client8.png"
const customers=[
    {
        name:"IndiGrid",
        logo:logo1,
    },
    {
        name:"DeHaat",
        logo:logo2
    },
    {
        name:"Reliance Animation",
        logo:logo3,
    },
    {
        name:"Cropin",
        logo:logo4,
    },
    {
        name:"BSES",
        logo:logo5,
    },
    {
        name:"ITC Limited",
        logo:logo6,
    },
    {
        name:"Deepak Fertilisers",
        logo:logo7,

    },
    {
        name:"Avaada",
        logo:logo8,
    },
]
const Customers=()=>{
    return(
        <div className="bg-white">
            <div className="text-4xl text-gray-900 py-5 ml-[5vw] ">
                Our Customers
            </div>
            <div className="mt-10 text-xl text-gray-900 ml-[5vw]">
                Customers who have trusted us with delivering results

            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-[90vw] mx-[5vw] my-10 ">
                {customers.map((el)=>(
                    <div
                    key={el}
                    className="h-[140px] w-[140px] md:h-[170px] md:w-[170px] object-contain" 
                    >
                        <img src={el.logo}/>
                    </div>

                ))}
                
                

            </div>

        </div>
    )
};
export default Customers;