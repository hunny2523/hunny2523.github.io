

export default async (dispatch)=>{
    dispatch({type:"TASK_BEGIN"})
    try {
      let checkIfTasksExists=JSON.parse(localStorage.getItem("task"));
      if(checkIfTasksExists){
        dispatch({type:"GET_TASK",payload:checkIfTasksExists});
        console.log("exists")
      }
      else{
        checkIfTasksExists=[];
        localStorage.setItem("task",JSON.stringify(checkIfTasksExists));
        dispatch({type:"GET_TASK",payload:[]});
        console.log("Not exists")
      }
  } catch (err) {
    console.log(err);
    dispatch({type:"TASK_FAILURE",payload:err.response.data})
  }
}