

export default async (dispatch) => {
  dispatch({ type: "TASK_BEGIN" })
  try {
    let checkIfTasksExists = JSON.parse(localStorage.getItem("task"));
    if (checkIfTasksExists) {
      dispatch({ type: "GET_TASK", payload: checkIfTasksExists });

    }
    else {
      checkIfTasksExists = [];
      localStorage.setItem("task", JSON.stringify(checkIfTasksExists));
      dispatch({ type: "GET_TASK", payload: [] });

    }
  } catch (err) {
    console.log(err.response.data);
    dispatch({ type: "TASK_FAILURE", payload: err.response.data })
  }
}