import AppDispatcher from '../constants/dispatcher';
import Constants from '../constants/template';
import * as Data from '../data';

function initialise() {
    AppDispatcher.dispatch({
        actionType: Constants.INITIALISE,
        data: Data.items
    });
}

export default {
    initialise
};
