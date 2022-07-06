// import axios from "axios";
// import { useEffect } from "react";
// import { useContext } from "react";
// import { reminderContext } from "../context/reminderContext";


// const DeleteReminder =(id)=> {
//     const {dispatch} = useContext(reminderContext);
//     useEffect(async() => {
//         try {
//             const res = await axios.delete(`reminders/deleteReminder/${id}`);
//             console.log(res);
//             dispatch({type:"DELETE_REMINDER",payload:id})
//         } catch (err) {
//             console.log(err);
//             dispatch({ type: "REMINDER_FAILURE", payload: err.response.data })
//         }


//     },[])
//     return (
//         <div>{alert("deleted")}</div>
//     )


// }
//     export default DeleteReminder;



import axios from "axios";


export default (id) => async (dispatch) => {

    dispatch({ type: "DELETE_REMINDER_BEGIN" });
    try {
        console.log(id)
        let data=JSON.parse(localStorage.getItem("reminders"));
        data=data.filter((reminder)=>{
            if(reminder.id!==id){
                return reminder;
            }
        })
        localStorage.setItem("reminders",JSON.stringify(data));
        await dispatch({ type: "DELETE_REMINDER", payload: id });
   
    } catch (error) {
        console.log(error);
        dispatch({ type: "DELETE_REMINDER_FAILURE", payload: error.response.data })
    }
};