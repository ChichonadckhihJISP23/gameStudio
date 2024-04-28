import React from "react";
import '../../style/main/gamesSec.css'
import { useNavigate } from "react-router-dom";

const GamesSec = function(){
    return(
       <div className="gameSecWrap"> 
            <div className="gameSecHead">
                <p className="gameSecHead__text"><b>Наши игры</b></p>
            </div>

            <div className="gameSec__wrap-items">
                <div className="gameSec__item-1" id="item_1">
                    <p className="gameSec__item-head">Little Misfortune</p>
                    <p className="gameSec__item-text">Доступно: Steam, Epic Store</p>
                </div>

                <div className="gameSec__item-2" id="item_2">
                    <p className="gameSec__item-head">Sally Face</p>
                    <p className="gameSec__item-text">Доступно: Steam, Epic Store</p>
                </div>

                <div className="gameSec__item-3" id="item_3">
                    <p className="gameSec__item-head">Fran Bow</p>
                    <p className="gameSec__item-text">Доступно: Steam, Epic Store</p>
                </div>
            </div>
       </div>
    )
}
export default GamesSec