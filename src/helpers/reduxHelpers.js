import { createAction, handleActions } from "redux-actions";
/**
 * Creates and returns an action with three states:
 *     REQUESTED, SUCCESS, FAILURE;
 * @param {string} actionName
 * @returns {Array} An array containing the actionRequest, actionSuccess, and actionFailure,
 * in that order.
 */
export const createAsyncActions = (actionName) => {
    const actionNameUpper = actionName.toUpperCase();
    const actionRequest = createAction(`${actionNameUpper}_REQUESTED`);
    const actionSuccess = createAction(`${actionNameUpper}_SUCCESS`);
    const actionFailure = createAction(`${actionNameUpper}_FAILURE`);

    return [
        actionRequest,
        actionSuccess,
        actionFailure,
    ];
};

const returnRequested = () => 'requested';
const returnFailed = () => 'failed';
const returnSuccessed = () => 'successed';

/**
 * A ActionsMap
 * @typedef {Object} ActionsMap
 * @property {*} actionRequest on this action be sets state 'requested'
 * @property {*} actionSuccess on this action be sets state 'successed'
 * @property {*} actionFailure on this action be sets state 'failed'
 */
/**
 * Creates and returns a reducer that handle action and changes its state on:
 *     'requested', 'successed', 'failed' and initialState: 'none'.
 * @param {ActionsMap} actions object with actions
 * @param {String} [initialState="none"] will be 'none' by default
 * @returns {*} reducer that handle action and changes it's state.
 */
export const asyncActionsStateReducer = ({ actionRequest, actionSuccess, actionFailure }, initialState = 'none') => {
    return handleActions({
        [actionRequest]: returnRequested,
        [actionFailure]: returnFailed,
        [actionSuccess]: returnSuccessed,
    }, initialState);
};