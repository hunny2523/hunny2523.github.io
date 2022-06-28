// import { createContext } from "react";

// const reminderContext=createContext();
// export default reminderContext;
import { useReducer,useEffect } from "react";
import { createContext } from "react"



const INITIAL_STATE = {
    reminders: [],
    loading: false,
    error: null
}

export const reminderContext = createContext(INITIAL_STATE);

const reminderReducer = (state, action) => {
    console.log('action', action);
    switch (action.type) {
        case "REMINDER_BEGIN":
            return {
                reminders: null ,
                loading: true,
                error: null
            };
        case "GET_REMINDERS":
            return {
                reminders: action.payload,
                loading: false,
                error: null
            };
        case "REMINDER_FAILURE":
            return {
                reminders: null,
                loading: false,
                error: action.payload
            };
        case "DELETE_REMINDER_BEGIN":
            return {
                ...state,
                loading: false,
                error: null
            };
        case "DELETE_REMINDER":
            return {
                reminders: state.reminders.filter((data)=>{return action.payload !==data._id}),
                loading: false,
                error: null
            };
        case "DELETE_REMINDER_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}

export const ReminderContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reminderReducer, INITIAL_STATE);
  
    // useEffect(() => {
    //   localStorage.setItem("user", JSON.stringify(state.user));
    // }, [state.user]);
  
    return (
      <reminderContext.Provider
        value={{
          reminders: state.reminders,
          loading: state.loading,
          error: state.error,
          dispatch,
        }}
      >
        {children}
      </reminderContext.Provider>
    );
  };