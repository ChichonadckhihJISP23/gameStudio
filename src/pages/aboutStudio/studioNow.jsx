import React from "react";
import '../../style/aboutStudio/studioNow.css'

const StudioNow = function(){
    return(
       <div className="studioNowWrap"> 
           <div className="studioNow__Head">
                <p className="studioNow__Head-text"><b>Студия сегодня</b></p>
           </div>

           <div className="studioNow__Desc">
                <p className="studioNow__Desc-text"><b>Сегодня студия разработки игр считается одной из лучших в индустрии, 
                    ее игры любят миллионы игроков по всему миру. 
                    Студия работает над новым проектом, таким как: 
                    Tiny Bunny.
                    Но для студии это только начало, ведь перед ними открываются новые 
                    горизонты и возможности для творчества. 
                    Их история еще далеко не завершена, и каждый новый проект – 
                    это шаг к новым вершинам в мире геймдева.</b>
                </p>
           </div>
       </div>
    )
}
export default StudioNow