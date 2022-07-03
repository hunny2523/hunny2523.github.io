import axios from "axios";

export default async (dispatch)=>{
    dispatch({type:"REMINDER_BEGIN"})
    try {
      let checkIfRemindersExists=JSON.parse(localStorage.getItem("reminders"));
      if(checkIfRemindersExists){
        dispatch({type:"GET_REMINDERS",payload:checkIfRemindersExists});
        console.log("exists")
      }
      else{
        checkIfRemindersExists=[];
        localStorage.setItem("reminders",JSON.stringify(checkIfRemindersExists));
        console.log("Not exists")
      }
  } catch (err) {
    console.log(err);
    dispatch({type:"REMINDER_FAILURE",payload:err.response.data})
  }
}