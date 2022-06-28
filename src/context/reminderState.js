// import axios from "axios";
// import { useState } from "react";
// import reminderContext from "./remindContext";

// const reminderState = (props) => {
    
//     const initial_reminder = []
//     const [reminders, setreminders] = useState(initial_reminder);
//     console.log(reminders)

//     const user=localStorage.getItem("user");
//     const userId=user._id;

//     // create new reminder
//     const newReminder = async ({name,time,desc}) => {
//         const details={name,time,desc,userId};
//         const res = await axios.post("/reminders/createReminder",details);
//         const reminder = await res.json();
//         setreminders(reminders.concat(reminder))
//     }

//     return (
//         <reminderContext.Provider value={{ reminders, newReminder }}>
//             {props.children}
//         </reminderContext.Provider>
//     )
// }
// export default reminderState;