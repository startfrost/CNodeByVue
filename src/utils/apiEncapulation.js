import requestService from './requestService.js'

const getTopicItems = params => {
    return requestService({
        url: "/topics",
        method: "get",
        params: params
    });
}

export {
    getTopicItems
}