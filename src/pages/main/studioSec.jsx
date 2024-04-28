import React from "react";
import '../../style/main/studioSec.css'
import { useNavigate } from "react-router-dom";

const StudioSec = function(){
    return(
       <div className="studioSecWrap"> 
           <div className="studioSec__Head">
                <p className="studioSec__Head-text"><b>Наша студия</b></p>
           </div>

           <div className="studioSec__Desc">
                <p className="studioSec__Desc-text"><b>Наша студия прошла путь от Хобби одной девушки, до успешной студии разработки игр 26 апреля 2020 года и начала существовать наша студия что старается радовать вас самыми разными играми
                    Подробнее о студии вы можете узнать на странице “О студии”</b>
                </p>
           </div>
       </div>
    )
}
export default StudioSec