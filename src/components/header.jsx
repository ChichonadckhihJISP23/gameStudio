import React, { useState } from "react";
import '../style/components/header.css'
import { Routes, Route, Link, useNavigate } from "react-router-dom";




const Header = function(){
    const navigate = useNavigate()
    const [isOpen, setOpen] = useState()
    
    function burgerCheck(isOpen){
        if(isOpen == true)
        {
            setOpen(false)
        }
        else
        {
            setOpen(true)
        }
    }

    function goHome(){
        navigate('/')
    }

    function disableMenu(isOpen)
    {
        setOpen(false)
    }

    return(
            <div className="HeaderWrap">
                <div className= {"HeaderMobileNavWrap" + (isOpen ? 'Active' : '')}>
                    
                    <div className="HeaderMobileNavLink">
                        <Link onClick={()=>setOpen(false)} to="/studio" className="HeaderMobileNavLink__text"> О студии </Link>
                    </div>

                    <div className="HeaderMobileNavLink">
                        <Link onClick={()=>setOpen(false)} to="/games" className="HeaderMobileNavLink__text"> Наши игры</Link>
                    </div>

                    <div className="HeaderMobileNavLink">
                        <Link onClick={()=>setOpen(false)} to="/order" className="HeaderMobileNavLink__text"> Заказать игру</Link>
                    </div>

                    <div className="HeaderMobileNavLink">
                        <Link onClick={()=>setOpen(false)} to="/vacation" className="HeaderMobileNavLink__text"> Вакансии</Link>
                    </div>

                </div>

                <div onClick= {()=>{
                        goHome() 
                        disableMenu()
                   }} className="HeaderLogo"><b>LeamineGames</b></div>
                <div className="HeaderNav">
                    <Link to="/studio" className="HeaderNav__Link">О студии</Link>
                    <Link to="/games" className="HeaderNav__Link">Наши игры</Link>
                    <Link to="/order" className="HeaderNav__Link">Заказать игру</Link>
                    <Link to="/vacation" className="HeaderNav__Link"> Вакансии</Link>
                    <div onClick={()=>{burgerCheck(isOpen)}} className="HeaderNav__Menu"></div>
                </div>
            </div>
            
    )
}
export default Header