
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

    GET_USER_CONTRIBUTION,
    GET_USER_CONTRIBUTION_SUCCESS,
    GET_USER_CONTRIBUTION_FAILURE,
} from "../actionTypes";
import * as gitApi from '../api/index';

export function getUserDetails() {
    return {
        type: GET_USER_DETAILS,
    }
}

export function getUserDetailsSuccess(payload) {
    return {
        type: GET_USER_DETAILS_SUCCESS,
        payload,
    }
}

export function getUserDetailsFailure(payload) {
    return {
        type: GET_USER_DETAILS_FAILURE,
        payload,
    }
}

export function getUserFollowers() {
    return {
        type: GET_USER_FOLLOWERS,
    }
}

export function getUserFollowersSuccess(payload) {
    return {
        type: GET_USER_FOLLOWERS_SUCCESS,
        payload,
    }
}

export function getUserFollowersFailure(payload) {
    return {
        type: GET_USER_FOLLOWERS_FAILURE,
        payload,
    }
}

export function getUserRepos() {
    return {
        type: GET_USER_REPOS,
    }
}

export function getUserReposSuccess(payload) {
    return {
        type: GET_USER_REPOS_SUCCESS,
        payload,
    }
}

export function getUserReposFailure(payload) {
    return {
        type: GET_USER_REPOS_FAILURE,
        payload,
    }
}

export function getUserRepoCommits() {
    return {
        type: GET_USER_REPO_COMMITS,
    }
}

export function getUserRepoCommitsSuccess(payload) {
    return {
        type: GET_USER_REPO_COMMITS_SUCCESS,
        payload,
    }
}

export function getUserRepoCommitsFailure(payload) {
    return {
        type: GET_USER_REPO_COMMITS_FAILURE,
        payload,
    }
}

export function getUserContribution() {
    return {
        type: GET_USER_CONTRIBUTION,
    }
}

export function getUserContributionSuccess(payload) {
    return {
        type: GET_USER_CONTRIBUTION_SUCCESS,
        payload,
    }
}

export function getUserContributionFailure(payload) {
    return {
        type: GET_USER_CONTRIBUTION_FAILURE,
        payload,
    }
}

export function fetchUserDetails(userName) {
    return dispatch => {
        dispatch(getUserDetails(userName));
        return gitApi.getUserDetails(userName)
        .then(response => {
            dispatch(getUserDetailsSuccess(response));
        })
        .catch(error => dispatch(getUserDetailsFailure(error)));
    };
}

export function fetchUserFollowers(userName) {
    return dispatch => {
        dispatch(getUserFollowers(userName));
        return gitApi.getUserFollowers(userName)
        .then(response => {
            const followers = JSON.parse(response);
            return gitApi.getUserFollowersDetails(followers)
        })
        .then(response => {
            dispatch(getUserFollowersSuccess(response));
        })
        .catch(error => dispatch(getUserFollowersFailure(error)));
    };
}

export function fetchUserRepos(userName) {
    return dispatch => {
        dispatch(getUserRepos(userName));
        return gitApi.getUserRepos(userName)
        .then(response => {
            dispatch(getUserReposSuccess(response));
        })
        .catch(error => dispatch(getUserReposFailure(error)));
    };
}

export function fetchUserContribution(userName) {
    return dispatch => {
        dispatch(getUserContribution(userName));
        return gitApi.getUserContribution(userName)
        .then(response => {
            dispatch(getUserContributionSuccess(response));
        })
        .catch(error => dispatch(getUserContributionFailure(error)));
    };
}

export function fetchUserRepoCommits({userName, repoName}) {
    return dispatch => {
        dispatch(getUserRepoCommits(userName));
        return gitApi.getUserRepoCommits(repoName)
        .then(response => {
            dispatch(getUserRepoCommitsSuccess(response));
        })
        .catch(error => dispatch(getUserRepoCommitsFailure(error)));
    };
}