import React from "react";
import img1 from "../assets/About-1st.png"
const Card=({item})=>{
    return(
        <div>
            <img src={item.image}/>
            <p>
                {item.content}
            </p>


        </div>
    )
}
export default Card;