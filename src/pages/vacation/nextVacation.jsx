import React from "react";
import '../../style/vacation/nextVacation.css'
import VacationCard from "../../components/vacationCard";

const NextVacation = function(){
    return(
       <div className="nextVacationWrap"> 
           <div className="nextVacationWrap__Head">
                <p className="nextVacation__Head-text"><b>FrontEnd Developer</b></p>
           </div>
           
            <div className="nextVacationCard__wrap">
                <VacationCard card_desc={" Frontend-разработчик (JS, Vue.js / React.js) от 60 000 до 150 000 ₽ на руки Требуемый опыт работы: 1–3 года Полная занятость, гибкий график Возможно временное оформление: договор услуг, подряда, ГПХ, самозанятые, ИП"}/>
            </div>
       </div>
    )
}
export default NextVacation