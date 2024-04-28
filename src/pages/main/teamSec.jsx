import React from "react";
import '../../style/main/teamSec.css'
import { useNavigate } from "react-router-dom";
import TeamCard from "../../components/teamCard";

const TeamSec = function(){
    return(
       <div className="teamSecWrap"> 
            
            <div className="teamSecHead">
                <p className="teamSecHead__text"><b>Наша команда</b></p>
            </div>

            <div className="teamSecDesc">
                <p className="teamSecDesc__text">Мы - команда талантливых и креативных специалистов, 
                    которые создают увлекательные и захватывающие игры для всех возрастов и предпочтений.
                </p>
            </div>

            <div  className="teamSecCard__wrap">
                <TeamCard team_class={'team_1'} team_name={"Ян Непомнящий"} team_desc={"Исполнительный директор"}/>
                <TeamCard team_class={'team_2'} team_name={"Юлия Чихонадских"} team_desc={"Владелец студии"}/>
            </div >
       </div>
    )
}
export default TeamSec