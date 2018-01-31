import environments from './environments.json';

export default (function() {
    if(process.env.NODE_ENV === 'development'){
        return environments['development']
    } else if(process.env.NODE_ENV === 'production'){
        return environments['production']
    }
})()