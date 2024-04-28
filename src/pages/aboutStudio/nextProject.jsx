import React from "react";
import '../../style/aboutStudio/nextProject.css'

const NextProject = function(){
    return(
       <div className="nextProjectWrap"> 
           <div className="nextProject__Head">
                <p className="nextProject__Head-text"><b>Последующие проекты</b></p>
           </div>

           <div className="nextProject__Desc">
                <p className="nextProject__Desc-text"><b>С каждым новым проектом студия становилась все более известной и 
                    уважаемой в игровой индустрии. Далее студия стала набирать штат.
                    Устоявшись на рынке, студия выпускает такие хиты как:
                    Эдна и Харви 2, Sally Face, Fran Bow
                    Их игры начали получать награды на различных игровых фестивалях 
                    в том числе на STEAM и Е3, а сообщество игроков жаждало 
                    новых проектов от этой талантливой команды. </b>
                </p>
           </div>
       </div>
    )
}
export default NextProject