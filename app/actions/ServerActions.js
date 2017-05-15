import AppDispatcher from '../AppDispatcher';
import {ActionTypes} from '../Constants';

let ServerActions = {
    receiveWatchList(watchList){
        AppDispatcher.dispatch({
            actionType: ActionTypes.RECEIVE_WATCH_LIST,
            watchList
        });
    }
};

export default ServerActions;