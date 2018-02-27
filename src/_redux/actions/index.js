export const ACTION_TYPE = {
    AUTH: 'AUTH',
}

const _auth = function(payload) {
    return {
        type: ACTION_TYPE.AUTH,
        payload
    }
}

export default {
    auth: _auth
}