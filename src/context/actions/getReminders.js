import axios from "axios";

export default async (dispatch)=>{
    dispatch({type:"REMINDER_BEGIN"})
    try {
      const userData=JSON.parse(localStorage.getItem("user"));
      const id=userData._id
    const res=await axios.get(`reminders/getAllReminder/${id}`);
    dispatch({type:"GET_REMINDERS",payload:res.data});
  } catch (err) {
    console.log(err);
    dispatch({type:"REMINDER_FAILURE",payload:err.response.data})
  }
}