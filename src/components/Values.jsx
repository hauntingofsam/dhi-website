import React from "react";
const Values=()=>{
    return(
        <div>
            <div className="w-[90vw] mx-[5vw] grid md:grid-cols-5 grid-rows-5 gap-2">
                <div className="grid md:grid-rows-5 grid-cols-5 md:col-span-2 row-span-2 gap-2">
                    <div className="md:row-span-3 col-span-3 bg-purple-400">

                    </div>
                    <div className="md:row-span-2 col-span-2 bg-purple-400">

                    </div>

                </div>
                <div className="grid md:grid-rows-2 grid-cols-2 md:col-span-3 row-span-3 gap-2">
                    <div className="grid md:grid-cols-2  grid-rows-2 md:row-span-1 col-span-1 gap-2">
                        <div className="bg-purple-200 md:col-span-1 row-span-1">

                        </div>
                        <div className="bg-purple-200 md:col-span-1 row-span-1">

                        </div>

                    </div>
                    <div className="md:row-span-1 col-span-1 bg-purple-400">

                    </div>

                </div>

            </div>
        

        </div>
    )
};
export default Values;