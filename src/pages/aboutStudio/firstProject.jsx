import React from "react";
import '../../style/aboutStudio/firstProject.css'

const FirstProject = function(){
    return(
       <div className="firstProjectWrap"> 
           <div className="firstProject__Head">
                <p className="firstProject__Head-text"><b>Дебютный проект</b></p>
           </div>

           <div className="firstProject__Desc">
                <p className="firstProject__Desc-text"><b>Первый проект студии была Эдна и Харви: Взрыв мозга, 
                    которая несмотря на свои скромные размеры, 
                    получила признание игрового сообщества за свою 
                    оригинальность и качество. 
                    Этот успех вдохновил команду на новые творческие высоты.</b>
                </p>
           </div>
       </div>
    )
}
export default FirstProject