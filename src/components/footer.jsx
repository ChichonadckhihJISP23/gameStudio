import React from "react";
import '../style/components/footer.css'
import { useNavigate } from "react-router-dom";

const Footer = function(){
    return(
       <div className="footerWrap"> 
           <div className="footerText">
                <b><p>
                        LeamineGames <br/>
                    All rights received 2024©️
                </p></b>
            </div>
       </div>
    )
}
export default Footer