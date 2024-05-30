import React from "react";
const Values=()=>{
    return(
        <div className="flex flex-col md:flex-row gap-2 mx-[5vw] my-5 " id="values">
            
            <div className="grid grid-rows-2 gap-2 w-[90vw] md:w-[44vw]">
                <div className="row-span-1 grid grid-cols-5 gap-2">
                    <div className="col-span-2  bg-violet-800 pb-5 pt-5 px-4 rounded-lg flex flex-col justify-center gap-8 ">
                        
                        <div className="text-4xl font-bold">
                            Our Purpose
                        </div>
                        <div>
                        To enable positive and lasting change for our global customers through innovative IT solutions.
                        
                        </div>

                        
                    </div>
                    <div className="col-span-3  bg-violet-800 pb-10 pt-5 px-8 rounded-lg flex flex-col justify-center gap-8">
                        <div className="text-4xl font-bold">
                        Our Mission
                        </div>
                        <div>
                        To catalyze significant and enduring enhancements in our clients' performance through the cultivation of trust and mutual respect, fostering a culture of excellence.
                        
                        </div>
                        

                    </div>


                </div>
                <div className="row-span-1  bg-violet-800 pb-10 pt-5 px-8 rounded-lg flex flex-col justify-center gap-8">
                        <div className="text-4xl font-bold">
                        Our Values
                        </div>
                        <div>
                        Uphold uncompromising professional standards, drive significant performance improvements for our clients, and foster an environment of continuous learning for exceptional talent.
                        
                        </div>

                </div>
            </div>
            <div className="grid grid-rows-5 gap-2 w-[90vw] md:w-[44vw]">
                <div className="row-span-3 bg-violet-800 pb-10 pt-5 px-8 rounded-lg flex flex-col justify-center gap-8 ">
                    <div className="text-4xl font-bold">
                    Our Governance
                    </div>
                    <div>
                    We uphold the highest professional and ethical standards throughout our organization, guided by our dynamic leadership team and globally benchmarked company policies and code-of-conduct. This ensures integrity and accountability across our business value chain.
                    </div>
                    

                </div>
                <div className="row-span-2  bg-violet-800 pb-10 pt-5 px-8 rounded-lg flex flex-col justify-center gap-8 ">
                    <div className="text-4xl font-bold">
                    Our Aspiration
                    </div>
                    <div>
                    To partner with dynamic organizations experiencing rapid growth, while championing sustainability, inclusion, and economic prosperity as integral pillars of our collaborative journey.
                    </div>
                    


                </div>
            </div>
            

        </div>
    )
};
export default Values;