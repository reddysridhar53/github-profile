import {
    GET_USER_DETAILS,
    GET_USER_DETAILS_SUCCESS,
    GET_USER_DETAILS_FAILURE,
    GET_USER_FOLLOWERS,
    GET_USER_FOLLOWERS_SUCCESS,
    GET_USER_FOLLOWERS_FAILURE,
    GET_USER_REPOS,
    GET_USER_REPOS_SUCCESS,
    GET_USER_REPOS_FAILURE,
    GET_USER_REPO_COMMITS,
    GET_USER_REPO_COMMITS_SUCCESS,
    GET_USER_REPO_COMMITS_FAILURE,
} from "../actionTypes";

const defaultState = {
    userDetails: {},
    fetchingUserDetails: false,
    fetchUserDetailssError: '',
    fetchingUserFollowers: false,
    userFollowers: [],
    fetchUserFollowersError: '',
    fetchingUserContribution: false,
    userContribution: {},
    fetchingUserContributionError: false,
    fetchingUserRepos: false,
    userRepos: {},
    fetchingUserReposError: '',
    fetchingCommits: false,
    commits: [],
    fetchingCommitsError: '',
}

const parseJson = (data) => {
    if(data && JSON.parse(data)) {
        return JSON.parse(data);
    }
    return new Error('Something is wrong with the JSON Format: ');
}

export default (state = defaultState, { type, payload }) => {
    switch (type) {
        case GET_USER_DETAILS: {
            return {
                ...state,
                fetchingUserDetails: true,
            }
        }
        case GET_USER_DETAILS_SUCCESS: {
            return {
                ...state,
                userDetails: parseJson(payload),
                fetchingUserDetails: false,
            }
        }
        case GET_USER_DETAILS_FAILURE: {
            return {
                ...state,
                error: payload,
                fetchingUserDetails: false,
            }
        }
        case GET_USER_FOLLOWERS: {
            return {
                ...state,
                fetchingUserFollowers: true,
            }
        }
        case GET_USER_FOLLOWERS_SUCCESS: {
            const followersData = payload.map(data => parseJson(data));

            return {
                ...state,
                userFollowers: followersData,
                fetchingUserFollowers: false,
            }
        }
        case GET_USER_FOLLOWERS_FAILURE: {
            return {
                ...state,
                fetchUserFollowersError: payload,
                fetchingUserFollowers: false,
            }
        }
        case GET_USER_REPOS: {
            return {
                ...state,
                fetchingUserRepos: true,
            }
        }
        case GET_USER_REPOS_SUCCESS: {
            return {
                ...state,
                userRepos: parseJson(payload),
                fetchingUserRepos: false,
            }
        }
        case GET_USER_REPOS_FAILURE: {
            return {
                ...state,
                fetchingUserReposError: payload,
                fetchingUserRepos: false,
            }
        }
        case GET_USER_REPO_COMMITS: {
            return {
                ...state,
                fetchingCommits: true,
            }
        }
        case GET_USER_REPO_COMMITS_SUCCESS: {
            return {
                ...state,
                commits: parseJson(payload),
                fetchingCommits: false,
            }
        }
        case GET_USER_REPO_COMMITS_FAILURE: {
            return {
                ...state,
                fetchingCommitsError: payload,
                fetchingCommits: false,
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}