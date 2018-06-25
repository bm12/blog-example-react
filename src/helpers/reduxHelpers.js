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