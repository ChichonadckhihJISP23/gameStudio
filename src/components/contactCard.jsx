import React from "react";
import '../../src/style/components/contactCard.css'

const ContactCard = function({card_desc, card_text}){
    return(
       <div className="contactCard"> 
            <div className="contactCard__desc"><b>{card_desc}</b></div>
            <br/>
            <div className="contactCard__text"><b>{card_text}</b></div>
       </div>
    )
}
export default ContactCard