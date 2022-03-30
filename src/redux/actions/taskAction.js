import { ActionTypes } from "../constants/taskConstant";

export const fetchTasks = () => {
    return { type: ActionTypes.FETCH_TASKS};
}

export const createTasks = (payload) => {
    return {type: ActionTypes.CREATE_TASKS, payload}; 
};

export const changeStatus = (payload) => {
    return {type: ActionTypes.CHANGE_STATUS, payload}; 
};

export const deleteTask = (payload) => {
    return {type: ActionTypes.DELETE_TASK, payload}; 
};

