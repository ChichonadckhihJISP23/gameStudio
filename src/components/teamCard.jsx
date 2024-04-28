import React from "react";
import '../../src/style/components/teamCard.css'
import { useNavigate } from "react-router-dom";

const TeamCard = function({team_name, team_desc, team_class}){
    return(
       <div className="teamCard"> 
            <div className={team_class}></div>
            <div className="teamCard__head"><b>{team_name}</b></div>
            <div className="teamCard__desc"><b>{team_desc}</b></div>
       </div>
    )
}
export default TeamCard