import axios from "axios";

export default (newReminder) => (dispatch, user) => {


  return new Promise(async (resolve, reject) => {
    dispatch({ type: "ADD_REMINDER_BEGIN" });
    console.log(user)
    let reminderOfLocalStorage = JSON.parse(localStorage.getItem("reminders"));
    try {
      if (navigator.onLine) {
        if (reminderOfLocalStorage) {
          const date = new Date();
          // one signal to send notification
          const response = await axios
            .post(
              "https://onesignal.com/api/v1/notifications",
              {
                app_id: process.env.REACT_APP_APP_ID,
                contents: { en: `${newReminder.desc}` },
                headings: { en: `${newReminder.name}` },
                send_after: `${newReminder.time.slice(0, 10)} ${newReminder.time.slice(11, 16)}:00 GMT+0530`,
                // 2015-09-24 14:00:00 GMT-0700
                // send_after: `${date.toDateString()} ${newReminder.time}:00 GMT+0530 (India Standard Time)`,
                include_player_ids: [user]
              },
              {
                headers: {
                  Authorization:
                    process.env.REACT_APP_BASIC_AUTH_KEY,
                  "Content-Type": "application/json",
                },
              }
            )

          newReminder.id = response.data.id;
          reminderOfLocalStorage = reminderOfLocalStorage.concat(newReminder);
          await dispatch({ type: "ADD_REMINDER", payload: newReminder });
          localStorage.setItem("reminders", JSON.stringify(reminderOfLocalStorage));
          resolve();
        }
      }
      else {
        alert("you are offline Sorry")
      }
    } catch (error) {
      console.log(error.response.data);
      dispatch({ type: "ADD_REMINDER_FAILURE", payload: error.response.data });
      reject(error.response.data);
    }
  })
};
