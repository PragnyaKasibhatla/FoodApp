/* eslint-disable no-const-assign */
import React, { useState } from "react";
import "./RestoMenu.css";
import "./toggle.css";
function RestoMenu(props){
    const [isAvailable,setAvailability] = useState({[props.item]:true});
    function handleChange(event){
        if(isAvailable[props.item]){
        setAvailability(prevSate=>(
            {
                ...prevSate,
                [props.item]: false
            }
            )
        );
        }
        else{
            setAvailability(prevSate=>(
                {
                    ...prevSate,
                    [props.item]: true
                }
                )
            );

        } 
    }
    return <div>
    <dl className="dictionary">
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
        </span>
        <span>{props.item}</span>
      </dt>
      <dd><img alt={props.item} style={{"borderRadius":"50%","width":"200px","height":"200px"}} src={props.img}></img></dd>
      <dd>
        <label className="toggle">
            <input id="1" className="toggle-checkbox" type="checkbox" onChange={handleChange} defaultChecked></input>
                <div className="toggle-switch"></div>
                    <span className="toggle-label">{isAvailable[props.item] ? "Available" : "Unavilable"}</span>
            </label>
        </dd>
    </div>

    </dl>
    </div>
}

export default RestoMenu;