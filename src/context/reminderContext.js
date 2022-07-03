// import { createContext } from "react";

// const reminderContext=createContext();
// export default reminderContext;
import { useReducer} from "react";
import { createContext } from "react"



const INITIAL_STATE = {
    reminders: null,
    loading: false,
    error: null,
}

export const reminderContext = createContext(INITIAL_STATE);

const reminderReducer = (state, action) => {
    console.log('action', action, 'state', state);
    switch (action.type) {
        case "REMINDER_BEGIN":
            return {
                reminders: null,
                loading: true,
                error: null
            };
        case "GET_REMINDERS":
            return {
                ...state,
                reminders: action.payload,
                loading: false,
                error: null
            };
        case "REMINDER_FAILURE":
            return {
                reminders: null,
                loading: false,
                error: action.payload,
            };
        case "DELETE_REMINDER_BEGIN":
            return {
                ...state,
                loading: false,
                error: null
            };
        case "DELETE_REMINDER":
            return {
                ...state,
                reminders: state.reminders.filter((data) => { return action.payload !== data.id }),
                loading: false,
                error: null
            };
        case "DELETE_REMINDER_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case "UPDATE_REMINDER_BEGIN":
            return {
                ...state,
                loading: false,
                error: null
            };
        case "UPDATE_REMINDER": {
            const updatedReminders =
                state.reminders.map((reminder) => {
                    if (action.payload.id === reminder.id) {
                        return { ...reminder, name: action.payload.name, time: action.payload.time, desc: action.payload.desc }
                    }
                    return reminder;
                })

            console.log(updatedReminders)
            return {
                reminders: updatedReminders,
                error: null,
                loading: false
            }
        }
        case "UPDATE_REMINDER_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        case "ADD_REMINDER_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case "ADD_REMINDER_BEGIN":
            return {
                ...state,
                loading: false,
                error: null
            };
        case "ADD_REMINDER": {
            return {
                reminders: [...state.reminders,action.payload],
                loading:false,
                error:null
            }
        }
        // case "SET_TIME":{
        //     return {
        //         ...state,
        //         time: action.payload,
        //         loading:false,
        //         error:null
        //     }
        // }
        default:
            return state;
    }
}

export const ReminderContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reminderReducer, INITIAL_STATE);

    return (
        <reminderContext.Provider
            value={{
                reminders: state.reminders,
                loading: state.loading,
                error: state.error,
                // time:state.time,
                dispatch,
            }}
        >
            {children}
        </reminderContext.Provider>
    );
};