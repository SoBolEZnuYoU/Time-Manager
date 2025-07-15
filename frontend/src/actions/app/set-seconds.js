import { ACTION_TYPE } from "../action-type";

export const setSeconds = (seconds) => ({
    type: ACTION_TYPE.SET_SECONDS,
    payload: seconds
})