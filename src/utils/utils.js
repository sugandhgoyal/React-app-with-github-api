
/**
 * For all GET api's, Call this function.
 * @param api_url String contains api to be called
 * @returns {Promise<any> | * | Promise | Promise.<T>}
 */
export const getCallApi = (api_url) => {
    return fetch(api_url)
        .then((res) => res.json())
        .then(data => {
            return Promise.resolve(data);
        })
        .catch((error) => {
            return Promise.reject(error);
        });

}
/**
 * For article search
 * @param {*} api_url 
 */
export const searchArticleApi = (api_url) => {
    return fetch(api_url)
        .then((res) => res.json())
        .then(data => {
            return Promise.resolve(data);
        })
        .catch((error) => {
            return Promise.reject(error);
        });

}

/**
 * @param api_url String contains api to be called
 * @returns {Promise<any> | * | Promise | Promise.<T>}
 * @argument api-url
 */

export const feedCallApi = (api_url, body) => {
    console.log("body",body);
    return fetch(api_url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })
        .then((res) => res.json())
        .then(data => {
            return Promise.resolve(data);
        })
        .catch((error) => {
            return Promise.reject(error);
        });

}
/**
 * @param api_url String contains api to be called
 * @returns {Promise<any> | * | Promise | Promise.<T>}
 * @argument api-url
 */

export const feedFilterApi = (api_url, body) => {
    return fetch(api_url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })
        .then((res) => res.json())
        .then(data => {
            return Promise.resolve(data);
        })
        .catch((error) => {
            return Promise.reject(error);
        });

}
/**
 * Function to delete a feed
 * @param api_url String contains the api to be called 
 * @returns {message deleted}
 */

export const feedDelete = (api_url) => {
    return fetch(api_url)
        .then((res) => res.json())
        .then(data => {
            return Promise.resolve(data);
        })
        .catch((error) => {
            return Promise.reject(error);
        });

}

/**
 * Function to update a feed
 * @param api_url String contains the api to be called 
 * @returns {message Successfull}
 */
export const feedUpdate = (api_url, body) => {
    return fetch(api_url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })
        .then((res) => res.json())
        .then(data => {
            return Promise.resolve(data);
        })
        .catch((error) => {
            return Promise.reject(error);
        });
}
/**
 * Function to return Image url
 * @param data
 * @returns {url}
 */
export const getImageUrl = (data) => {
    if (data && data.startsWith("http://so-images", 0)) {
        const urlArray = data.split('/');
        const publicID = urlArray[urlArray.length - 1];
        return `https://s-o.co.in:1304/media/imageSrc/1000/high/${publicID}`;
    }
    else
        return data;
}