// Define action types
export const ADD = 'ADD';
export const REMOVE = 'REMOVE';
export const CHECK = 'CHECK';
export const EDIT = 'EDIT';

export const add = sample => {
    return {
        type: ADD,
        payload : sample
    };
};

export const remove = sample => dispatch => {
    dispatch({
        type: REMOVE,
        payload: sample
    });
};

export const check = sample => dispatch => {
    dispatch({
        type: CHECK,
        payload: sample
    });
};

export const edit = sample => dispatch => {
    dispatch({
        type: EDIT,
        payload: sample
    });
};
