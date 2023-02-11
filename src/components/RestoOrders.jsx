import "./RestoOrders.css";
import { useState } from "react";
function RestoOrders(props) {
  const [label,setLabel] =useState(props.accept);
  function handleClick(event){
    if(label==="Accepted"){
      setLabel("Accept");
    }
    else{
      setLabel("Accepted");
    }
  }
  return (
    <div >
    <table>
      <tbody>
        <tr>
          <td>{props.name}</td>
          <td>{props.orderId}</td>
          <td><span className="text-wrap">{props.status}</span></td>
          <td><button onClick={handleClick} style={{backgroundColor: label==="Accepted" ? 'green' : 'red'}}>{label}</button></td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}

export default RestoOrders;