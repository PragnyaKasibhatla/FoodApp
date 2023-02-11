import React from "react";
import {useState} from "react";
import RestoMenu from "./RestoMenu";
import Orders from "./Orders";
function RestoDashboard(){
    const [isMenuClicked,setIsMenu] = useState();
    const [isOrdersClicked,setIsOrdersClicked] = useState();
    function handleMenuClick(){
        setIsMenu(true);
        setIsOrdersClicked(false);
    }

    function handleOrdersClick(){
        setIsMenu(false);
        setIsOrdersClicked(true);
    }

return <div>
            <h1>This is RestoDashboard</h1>
            <div className="sidenav">
            <div style={{'position':"absolute","top":"175px"}}> 
                <button onClick={handleMenuClick}>Menu</button>
                <button onClick={handleOrdersClick}>Orders</button>
            </div>
            </div>
            {isMenuClicked ? 
                <div>
                    <RestoMenu key="1" id="1" item="Golgappa" img="https://img.freepik.com/premium-photo/panipuri-shot-golgappa-shots-different-flavours-water-served-small-glasses-with-stuffed-puri-indian-starter-snack_466689-80519.jpg?w=2000"/>
                    <RestoMenu key="2" id="2" item="SamosaChaat" img="https://www.whiskaffair.com/wp-content/uploads/2021/04/Samosa-Chaat-2-3.jpg"/>
                </div>
            : null}
            {isOrdersClicked && <Orders/>}
        </div>
}

export default RestoDashboard;