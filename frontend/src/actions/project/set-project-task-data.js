import { ACTION_TYPE } from "../action-type"

export const setProjectTaskData = (data) => {
    return {
        type: ACTION_TYPE.SET_PROJECT_TASK_DATA,
        payload: data
    }
}