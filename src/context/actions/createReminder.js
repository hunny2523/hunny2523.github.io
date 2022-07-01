
import axios from "axios";

export default (body)=>async (dispatch) => {
    const userData=JSON.parse(localStorage.getItem("user"));
      const id=userData._id
    body.user=id;
    dispatch({ type: "ADD_REMINDER_BEGIN" });
    try {
        const res = await axios.post(`reminders/createReminder/`,body);
        await dispatch({ type: "ADD_REMINDER", payload: res.data })
    } catch (error) {
        console.log(error);
        dispatch({ type: "ADD_REMINDER_FAILURE", payload: error.response.data })
    }
};