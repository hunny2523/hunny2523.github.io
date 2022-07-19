
export default (body) => async (dispatch) => {
    function generateUUID() {
        return "xxxxxxxx-xxxx-x4xx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0; var v = c === "x" ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    body.id = generateUUID();
    dispatch({ type: "ADD_TASK_BEGIN" });

    try {
        let data = JSON.parse(localStorage.getItem("task"));
        if (data) {
            data = data.concat(body);
            localStorage.setItem("task", JSON.stringify(data));
            await dispatch({ type: "ADD_TASK", payload: body })
        }
    } catch (error) {
        console.log(error.response.data);
        dispatch({ type: "ADD_TASK_FAILURE", payload: error.response.data })
    }
};