import React from "react";
import '../../style/main/mainSection.css'
import { useNavigate } from "react-router-dom";

const MainSection = function(){
    return(
       <div className="MainSectionWrap"> 
            <div className="MainSection__text-wrap">
                <p className="MainSection__head-text"><b>Создаем новые миры</b></p>
                <p className="MainSection__desc-text"><b>Присоединяйтесь к нам и окунитесь в захватывающий мир наших игр!</b></p>
            </div>
       </div>
    )
}
export default MainSection