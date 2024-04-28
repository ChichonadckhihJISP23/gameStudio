import React from "react";
import MainSection from "../main/mainSection";
import AboutOrigin from "./aboutOrigin";
import FirstProject from "./firstProject";
import NextProject from "./nextProject";
import StudioNow from "./studioNow";

const OurStudioPage = function(){
    return(
        <>
            <MainSection/>
            <AboutOrigin/>
            <FirstProject/>
            <NextProject/>
            <StudioNow/>
       </>
    )
}

export default OurStudioPage