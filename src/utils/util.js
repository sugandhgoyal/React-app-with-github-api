
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
 * For all POST api's, Call this function.
 * @param api_url String contains api to be called
 * @param body Object contains the data to be sent in the POST request.
 * @returns {Promise<any> | * | Promise | Promise.<T>}
 */
export const postCallApi = (api_url, body) => {
    return fetch(api_url, {
        method:'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })
        .then((res) => res.json())
        .then(data => {
            return Promise.resolve(data);
        })
        .catch(error =>{
            return Promise.reject(error);
        });

}