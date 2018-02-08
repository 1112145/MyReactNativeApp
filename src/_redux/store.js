import {
    createStore,
} from 'redux';


import reducer from './reducers';
import actions from './actions';

const store = createStore(reducer);

export default store;