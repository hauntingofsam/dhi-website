import React from "react";
import logo from "../assets/DHI-logo-white.png"
const Footer=()=>{
    const d = new Date();
    let year = d.getFullYear();
    return(
        <div className=" h-[120px] bg-slate-900  w-[100%] ">
            <div className="flex md:flex-row md:gap-4 flex-col justify-between pt-4">
                <img src={logo} className="w-[120px] my-auto ml-8" />
                <p className="text-white my-auto mr-8">
                Copyright © {year} DHI.AI

                </p>

            </div>


        </div>
    )
}
export default Footer;