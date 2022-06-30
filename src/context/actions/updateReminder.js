
import axios from "axios";

export default (body) => async (dispatch) => {
    console.log(body)
    dispatch({ type: "UPDATE_REMINDER_BEGIN" });
    try {
        console.log(body.id);
        const res = await axios.put(`reminders/updateReminder/${body.id}`,body);
        await dispatch({ type: "UPDATE_REMINDER", payload: body })
    } catch (error) {
        console.log(error);
        dispatch({ type: "UPDATE_REMINDER_FAILURE", payload: error.response.data })
    }
};