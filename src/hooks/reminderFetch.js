// import axios from "axios";
// import { useState } from "react";


// const reminderFetch = () => {
//     const initial_state = []
//     const [reminders, setReminders] = useState([]);
//     const [error, seterror] = useState(false);

//     const storageUser = localStorage.getItem("user");
//     const user = storageUser._id;

//     // create new reminder


//     const createNewReminder = async ({ name, time, desc }) => {
//         try {
//             const response = await axios.post("/reminders/createReminder", { name, time, desc, user })
//             const newReminder = await response.json();
//             setReminders(reminders.concat(newReminder));
//             console.log(reminders);
//         }
//         catch (error) {
//             seterror(error);
//         }
//     }

//     return { reminders, createNewReminder, error }


// }
// export default reminderFetch