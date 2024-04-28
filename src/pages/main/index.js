import React from "react";
import MainSection from "./mainSection";
import GamesSec from "./gamesSec";
import TeamSec from "./teamSec";
import StudioSec from "./studioSec";
import VacationSec from "./vacationSec";

const MainPage = function(){
    return(
        <>
            <MainSection/>
            <GamesSec/>
            <TeamSec/>
            <StudioSec/>
            <VacationSec/>
       </>
    )
}

export default MainPage