import React from "react";
import '../../style/vacation/firstVacation.css'
import VacationCard from "../../components/vacationCard";

const FirstVacation = function(){
    return(
       <div className="firstVacationWrap"> 
           <div className="firstVacationWrap__Head">
                <p className="firstVacation__Head-text"><b>Вакансии</b></p>
           </div>

           <div className="firstVacation__CallAction">
                <p className="firstVacation__CallAction-text"><b>Unity / Unreal Developer</b></p>
           </div>

            <div className="firstVacationCard__wrap">
                <VacationCard card_desc={" Developer C# (WPF/Xamarin/Unity) в офис в Павлодар от 150 000 до 450 000р на рукиТребуемый опыт работы: 1–3 года Полная занятость, полный день Возможно временное оформление: договор услуг, подряда, ГПХ, самозанятые, ИП"}/>
            </div>
       </div>
    )
}
export default FirstVacation