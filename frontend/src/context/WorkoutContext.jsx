import { createContext } from "react";
import { useReducer } from "react";

export const WorkoutsContext = createContext()

export const workoutsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_WORKOUTS':
            console.log('Setting workouts state:', action.payload);
            return {
                workouts: action.payload
            }
        case 'CREATE_WORKOUT':
            console.log('Adding new workout:', action.payload);
            return {
                workouts: [action.payload, ...state.workouts]
            }
        case 'DELETE_WORKOUT' :
            return {
                workouts: state.workouts.filter((w) => w._id !== action.payload._id )
            }
        default:
            return state;
    }
}

export const WorkoutContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(workoutsReducer, {
        workouts: null
    })

    console.log('State:', state);

    return (
        <WorkoutsContext.Provider value={{ ...state, dispatch }}>
            { children }
        </WorkoutsContext.Provider>
    )
}