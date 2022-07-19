


export default (body) => async (dispatch) => {
    dispatch({ type: "UPDATE_TASK_BEGIN" });
    try {
        let data = JSON.parse(localStorage.getItem("task"));
        data = data.map((task) => {
            if (task.id === body.id) {
                return { ...task, name: body.name, desc: body.desc }
            }
            return task
        })
        localStorage.setItem("task", JSON.stringify(data));
        await dispatch({ type: "UPDATE_TASK", payload: body })
    } catch (error) {
        console.log(error.response.data);
        dispatch({ type: "UPDATE_TASK_FAILURE", payload: error.response.data })
    }
};