import axios from "axios";
// import { useToasts } from 'react-toast-notifications';

export default (id) => async (dispatch) => {
    // const { addToast } = useToasts();
    dispatch({ type: "DELETE_REMINDER_BEGIN" });
    try {

        const response = await axios
            .delete(
                `https://onesignal.com/api/v1/notifications/${id}?app_id=${process.env.REACT_APP_APP_ID}`,
                {
                    headers: {
                        Authorization: process.env.REACT_APP_BASIC_AUTH_KEY,
                        "Content-Type": "application/json",
                    },
                }
            )
        if (response.data.success) {
            // addToast('Deleted Successfully', { appearance: 'success', autoDismiss: true });

            await dispatch({ type: "DELETE_REMINDER", payload: id });
        }

    } catch (error) {
        console.log(error.response.data);
        dispatch({ type: "DELETE_REMINDER_FAILURE", payload: error.response.data })
    }
};