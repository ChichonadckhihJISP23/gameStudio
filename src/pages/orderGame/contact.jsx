import React from "react";
import '../../style/orderGame/contact.css'
import ContactCard from "../../components/contactCard";

const Contact = function(){
    return(
       <div className="contactWrap"> 
           <div className="contactWrap__Head">
                <p className="contact__Head-text"><b>Мечтали о своей игре?</b></p>
           </div>

           <div className="contact__CallAction">
                <p className="contact__CallAction-text"><b>Свяжитесь с нами!</b></p>
           </div>

           <div className="contactCardWrap">
                <ContactCard card_desc={"Наш офис:"} card_text={"Барнаул, улица 134"}/>
                <ContactCard card_desc={"Наш email:"} card_text={"LeamineGames@gmail.com"}/>
                <ContactCard card_desc={"Наш мобильный:"} card_text={"+7-(800)-888-08-08"}/>
           </div>
       </div>
    )
}
export default Contact