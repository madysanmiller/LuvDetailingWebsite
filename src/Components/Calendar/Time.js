import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";

// const time = [
//   "08:00am",
//   "09:00am",
//   "10:00am",
//   "11:00am",
//   "12:00pm",
//   "1:00pm",
//   "2:00pm",
//   "3:00pm",
//   "4:00pm"
// ];

// function Times(props) {
//   const [event, setEvent] = useState(null);
//   const [info, setInfo] = useState(false);

//   function displayInfo(e) {
//     setInfo(true);
//     setEvent(e.target.innerText);
//   }

//   return (
//     <div className="times">
//       {time.map((times) => {
//         return (
//           <div>
//             <button onClick={(e) => displayInfo(e)}> {times} </button>
//           </div>
//         );
//       })}
//       <div style={{color:'white'}}>
//         {info
//           ? `Your appointment is set to ${event} ${props.date.toDateString()}`
//           : null}
//       </div>
//     </div>
//   );
// }

// export default Times;