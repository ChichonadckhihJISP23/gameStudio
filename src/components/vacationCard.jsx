import React from "react";
import '../style/components/vacationCard.css'

const VacationCard = function({card_desc}){
    return(
       <div className="vacationCardWrap"> 
           
           <div className="vacationCardDesc">
                <p className="vacationCardDesc__text"><b>{card_desc}</b></p>
           </div>
           
           <div className="vacationCardButtonWrap">
                <div className="vacationCardButton">
                    <p className="VacationCardButton__text">
                        <b>Откликнуться</b>
                    </p>
                </div>
           </div>
       </div>
    )
}
export default VacationCard