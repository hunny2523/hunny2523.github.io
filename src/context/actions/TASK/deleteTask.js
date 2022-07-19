

export default (id) => async (dispatch) => {

    dispatch({ type: "DELETE_TASK_BEGIN" });
    try {
        let data = JSON.parse(localStorage.getItem("task"));
        data = data.filter((task) => {
            if (task.id !== id) {
                return task;
            }
        })
        localStorage.setItem("task", JSON.stringify(data));
        await dispatch({ type: "DELETE_TASK", payload: id });

    } catch (error) {
        console.log(error);
        dispatch({ type: "DELETE_TASK_FAILURE", payload: error.response.data })
    }
};