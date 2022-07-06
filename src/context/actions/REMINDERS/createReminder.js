


export default (body)=>async (dispatch) => {
    function generateUUID() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
          var r = Math.random() * 16 | 0; var v = c === "x" ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      };
      body.id=generateUUID();
    dispatch({ type: "ADD_REMINDER_BEGIN" });
    
    try {    
        let data=JSON.parse(localStorage.getItem("reminders"));
        if(data){
            data=data.concat(body);
            console.log(data)
            localStorage.setItem("reminders",JSON.stringify(data));
            await dispatch({ type: "ADD_REMINDER", payload: body })
        }

        console.log("it's completed")
    } catch (error) {
        console.log(error);
        dispatch({ type: "ADD_REMINDER_FAILURE", payload: error.response.data })
    }
};