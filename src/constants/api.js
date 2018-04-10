export const FETCH_PUBLIC_REPOS = 'https://api.github.com/repositories'

export const FETCH_PUBLIC_REPOS_STARS = (owner, reponame) => {
    return `https://api.github.com/repos/${owner}/${reponame}`;
}

export const FETCH_SEARCH_DATA = (searchString) => {
    return `https://api.github.com/search/repositories?q=${searchString}`;
}

export const FILTER_DATA = (filter) => {
    return `https://api.github.com/search/repositories?q=all+language:assembly&sort=${filter}&order=desc`;
}