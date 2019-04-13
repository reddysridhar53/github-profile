import * as config from '../config';

export const searchUsers = (query) => {
    let options = {};

    options.url = `${config.API_URL}search/users?q=${query}`;
    options.method = 'GET';
    return makeRequest(options);
}

export const getUserDetails = (userName) => {
    let options = {};

    options.url = `${config.API_URL}users/${userName}`;
    options.method = 'GET';
    return makeRequest(options);
}

export const getUserFollowers = (userName) => {
    let options = {};

    options.url = `${config.API_URL}users/${userName}/followers`;
    options.method = 'GET';
    return makeRequest(options);
}

export const getUserRepos = (userName) => {
    let options = {};

    options.url = `${config.API_URL}users/${userName}/repos`;
    options.method = 'GET';
    return makeRequest(options);
}

export const getUserContribution = (userName) => {
    let options = {};

    options.url = `${config.API_URL}users/${userName}/repos`;
    options.method = 'GET';
    return makeRequest(options);
}

export const getUserRepoCommits = (repoName) => {
    let options = {};

    options.url = `${config.API_URL}repos/${repoName}/commits`;
    options.method = 'GET';
    return makeRequest(options);
}

export const getUserFollowersDetails = (followers) => {
    followers = followers.map( follower => {
        return {
            method: 'GET',
            url: follower.url
        }
    })
    const followersPromises = followers.map( resident => makeRequest(resident) );
    return Promise.all(followersPromises);
}

const makeRequest = (options) => {
    return new Promise( (resolve, reject) => {
        let xhttp = undefined;

        if ('XMLHttpRequest' in window) {
            xhttp = new XMLHttpRequest();
        }
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                resolve(this.responseText)
            }
        };
        xhttp.open(options.method, options.url, true);
        xhttp.send();
    })
}