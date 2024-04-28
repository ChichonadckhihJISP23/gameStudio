import React from "react";
import '../../style/main/vacationSec.css'
import { useNavigate } from "react-router-dom";

const VacationSec = function(){
    const navigate = useNavigate()
    return(
       <div className="vacationSecWrap"> 
           <div className="vacationSec__Head">
                <p className="vacationSec__Head-text"><b>Ищем талантов</b></p>
           </div>

           <div className="vacationSec__Desc">
                <p className="vacationSec__Desc-text"><b>Если ты креативный, продуктивный и способный программист,  UI/UX дизайнер, геймдизайнер,
                    то мы приглашаем тебя в нашу команду, посмотреть вакансии можно на странице с вакансиями</b>
                </p>
           </div>

           <div onClick={()=>navigate('/vacation')} className="vacationSec__Button"> 
                <p className="vacationSec_Button-text"><b>Откликнуться</b></p>
           </div>
       </div>
    )
}
export default VacationSec