
import axios from "axios";

export default (body) => async (dispatch) => {
    console.log(body)
    dispatch({ type: "UPDATE_REMINDER_BEGIN" });
    try {
        // const res = await axios.put(`reminders/updateReminder/${body.id}`,body);
        let data=JSON.parse(localStorage.getItem("reminders"));
        data=data.map((reminder)=>{
            if(reminder.id===body.id){
                return {...reminder,name:body.name,time:body.time,desc:body.desc}
            }
            return reminder
        })
        localStorage.setItem("reminders",JSON.stringify(data));
        await dispatch({ type: "UPDATE_REMINDER", payload: body })
    } catch (error) {
        console.log(error);
        dispatch({ type: "UPDATE_REMINDER_FAILURE", payload: error.response.data })
    }
};