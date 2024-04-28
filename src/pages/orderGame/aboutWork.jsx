import React from "react";
import '../../style/orderGame/aboutWork.css'
import { useNavigate } from "react-router-dom";

const AboutWork = function(){
    return(
       <div className="aboutWorkWrap"> 
           <div className="aboutWork__Head">
                <p className="aboutWork__Head-text"><b>Как мы работаем</b></p>
           </div>

           <div className="aboutWork__Desc">
                <p className="aboutWork__Desc-text"><b>Разработка приложений и игр для мобильных устройств состоит из нескольких этапов. Если у заказчика нет готовой документации, мы начинаем первый этап с написания подробного ТЗ и концепт документа, в котором согласовываем все нюансы будущего проекта. После подготовки прототипов всех экранов художники прорабатывают дизайн, UX и UI. И лишь после согласования всех правок по дизайну, наступает этап — программирование. После составления дорожной карты проекта выбирается игровой движок, строится архитектура проекта, сервера, устройство базы данных и административной панели для гибкого управления.<br/>

                                                        Наша компания профессионально создает приложения и игры на:<br/>
                                                        Unity 3D / C#<br/>
                                                        Unreal Engine 4 / C++<br/>
                                                        Android Studio<br/>
                                                        Swift<br/>
                                                        React Native<br/>
                                                        WebGL</b>
                </p>
           </div>
       </div>
    )
}
export default AboutWork