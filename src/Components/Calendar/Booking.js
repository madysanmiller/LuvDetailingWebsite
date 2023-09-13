import "../../App.css";
import { useState } from "react";
import Calendar from "react-calendar";
import Time from "./Time.js";

import "react-calendar/dist/Calendar.css";

// export default function App() {
//   const [date, setDate] = useState(new Date());
//   const [showTime, setShowTime] = useState(false);

//   return (
//     <div className="calendarApp2">
//       <h1 style={{color:'white'}} className="calHeader">Choose a Date and Time</h1>
//       <div>
//         <Calendar
//           onChange={setDate}
//           value={date}
//           onClickDay={() => setShowTime(true)}
//         />
//       </div>

//       {date.length > 0 ? (
//         <p>
//           <span>Start:</span>
//           {date[0].toDateString()}
//           &nbsp; &nbsp;
//           <span>End:</span>
//           {date[1].toDateString()}
//         </p>
//       ) : (
//         <p style={{color:'white'}}>
//           <span>Default selected date:</span>
//           {date.toDateString()}
//         </p>
//       )}
//       <Time showTime={showTime} date={date} />
//     </div>
//   );
// }
