import axios from "axios";

export default async (dispatch) => {
  dispatch({ type: "REMINDER_BEGIN" })
  try {
    let checkIfRemindersExists = JSON.parse(localStorage.getItem("reminders"));
    if (checkIfRemindersExists) {
      dispatch({ type: "GET_REMINDERS", payload: checkIfRemindersExists });

    }
    else {
      checkIfRemindersExists = [];
      localStorage.setItem("reminders", JSON.stringify(checkIfRemindersExists));
      dispatch({ type: "GET_REMINDERS", payload: [] });
    }
  } catch (err) {
    console.log(err.response.data);
    dispatch({ type: "REMINDER_FAILURE", payload: err.response.data })
  }
}