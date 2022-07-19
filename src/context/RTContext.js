import { useReducer } from "react";
import { createContext } from "react"

const INITIAL_STATE = {
    reminders: null,
    task: null,
    loading: false,
    error: null,
    user: null
}

export const reminderContext = createContext(INITIAL_STATE);

const reminderReducer = (state, action) => {
    switch (action.type) {
        case "SET_USER_ID":
            return {
                ...state,
                user: action.payload
            };
        case "REMINDER_BEGIN":
            return {
                ...state,
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
                ...state,
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
            let reminderOfLocalStorage = JSON.parse(localStorage.getItem("reminders"));
            reminderOfLocalStorage = reminderOfLocalStorage.filter((reminder) => {
                if (reminder.id !== action.payload) {
                    return reminder;
                }
            });
            localStorage.setItem("reminders", JSON.stringify(reminderOfLocalStorage));
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
        case "ADD_REMINDER_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload.errors
            };
        case "ADD_REMINDER_BEGIN":
            return {
                ...state,
                loading: false,
                error: null
            };
        case "ADD_REMINDER":
            return {
                ...state,
                reminders: [...state.reminders, action.payload],
                loading: false,
                error: null
            };
        case "ADD_TASK_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case "ADD_TASK_BEGIN":
            return {
                ...state,
                loading: false,
                error: null
            };
        case "ADD_TASK": {
            return {
                ...state,
                task: [...state.task, action.payload],
                loading: false,
                error: null
            }
        };
        case "TASK_BEGIN":
            return {
                ...state,
                task: null,
                loading: true,
                error: null
            };
        case "GET_TASK":
            return {
                ...state,
                task: action.payload,
                loading: false,
                error: null
            };
        case "TASK_FAILURE":
            return {
                ...state,
                task: null,
                loading: false,
                error: action.payload,
            };
        case "UPDATE_TASK_BEGIN":
            return {
                ...state,
                loading: false,
                error: null
            };
        case "UPDATE_TASK": {
            const updatedtasks =
                state.task.map((task) => {
                    if (action.payload.id === task.id) {
                        return { ...task, name: action.payload.name, time: action.payload.time, desc: action.payload.desc }
                    }
                    return task;
                })
            return {
                ...state,
                task: updatedtasks,
                error: null,
                loading: false
            }
        }
        case "UPDATE_TASK_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case "DELETE_TASK_BEGIN":
            return {
                ...state,
                loading: false,
                error: null
            };
        case "DELETE_TASK":
            return {
                ...state,
                task: state.task.filter((data) => { return action.payload !== data.id }),
                loading: false,
                error: null
            };
        case "DELETE_TASK_FAILURE":
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

    return (
        <reminderContext.Provider
            value={{
                reminders: state.reminders,
                task: state.task,
                loading: state.loading,
                error: state.error,
                user: state.user,
                // time:state.time,
                dispatch,
            }}
        >
            {children}
        </reminderContext.Provider>
    );
};