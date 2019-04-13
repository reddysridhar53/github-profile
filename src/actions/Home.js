import {
    SEARCH_USERS,
    SEARCH_USERS_SUCCESS,
    SEARCH_USERS_FAILURE
} from "../actionTypes";
import * as gitApi from '../api/index';

export function searchUsers(payload) {
    return {
        type: SEARCH_USERS,
        payload,
    }
}

export function searchUsersSuccess(payload) {
    return {
        type: SEARCH_USERS_SUCCESS,
        payload,
    }
}

export function searchUsersFailure(payload) {
    return {
        type: SEARCH_USERS_FAILURE,
        payload,
    }
}

export function searchUsersData(query) {
    return dispatch => {
        dispatch(searchUsers(query));
        return gitApi.searchUsers(query)
            .then(res => {
                dispatch(searchUsersSuccess(res));
            })
            .catch(error => dispatch(searchUsersFailure(error)));
    };
}