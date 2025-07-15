import { ACTION_TYPE } from '../action-type';

export const setProjectData = (data) => {
    return {
        type: ACTION_TYPE.SET_PROJECT_DATA,
        payload: data,
    };
};