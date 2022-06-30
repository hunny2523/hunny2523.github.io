


export default (reminders)=>(dispatch) => {
try {
  const time = reminders.map((reminder) => {
    return reminder.time;
  })
  console.log(time);
  dispatch({type:"SET_TIME",payload:time})
  
} catch (error) {
  console.log(error);
}

  // const date = new Date();
  // const currentTime = date.toLocaleTimeString(('it-IT'))
  // console.log("current time" + currentTime);

  // useEffect(() => {
  //   var timer = setInterval(() => setAlert(), 1000)
  //   return function cleanup() {
  //     clearInterval(timer)
  //   }
  // });

  // const setAlert = () => {

  //   time.map((time) => {
  //     if (time === currentTime) {
  //       console.log("time" + time)
  //       alert("its time")
  //     }
  //   })
  // }
}
