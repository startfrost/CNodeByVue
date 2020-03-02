import requestService from './requestService.js'

const getTopicItems = params => {
    return requestService({
        url: "/topics",
        method: "get",
        params: params
    });
}

const getTopic = id => {
    return requestService({
       url: "topic/" + id,
       method: "get", 
    });
}

export {
    getTopicItems,
    getTopic
}