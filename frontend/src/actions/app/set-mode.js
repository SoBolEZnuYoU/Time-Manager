import { ACTION_TYPE } from "../action-type";

export const setMode = (mode) => ({
    type: ACTION_TYPE.SET_MODE,
    payload: mode
})