import {
    SEARCH_USERS,
    SEARCH_USERS_SUCCESS,
    SEARCH_USERS_FAILURE
} from '../actionTypes';
import _ from 'lodash';

const defaultState = {
    users: {
        list: [],
        searchTerm: '',
        error: '',
    },
    searchingUsers: false,
}

const parseJson = (data) => {
    if(data && JSON.parse(data)) {
        return JSON.parse(data);
    }
    return new Error('Something is wrong with the JSON Format: ');
}

export default (state = defaultState, { type, payload }) => {

    switch (type) {
        case SEARCH_USERS: {
            const { users } = state;

            return {
                ...state,
                users: {
                    ...users,
                    searchTerm: payload,
                },
                searchingUsers: true,
            }
        }
        case SEARCH_USERS_SUCCESS: {
            const { users, users: { searchTerm } } = state;
            const data = parseJson(payload);

            return {
                ...state,
                users: {
                    ...users,
                    list: _.get(data, 'items', []),
                    searchTerm: searchTerm,
                },
                searchingUsers: false,
            }
        }
        case SEARCH_USERS_FAILURE: {
            const { users } = state;

            return {
                ...state,
                users: {
                    ...users,
                    error: payload,
                    searchTerm: payload,
                },
                searchingUsers: false,
            }
        }
        default:
            return {
                ...state
            }
    }
}