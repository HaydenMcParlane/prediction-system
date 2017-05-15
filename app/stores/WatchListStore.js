import AppDispatcher from '../AppDispatcher';
import {ActionTypes} from '../Constants';
import {EventEmitter} from 'events';

let _watchList = [];

export class WatchListStore extends EventEmitter{
    constructor(props){
        super(props);

        AppDispatcher.register(action => {
            switch(action.actionType){
                case ActionTypes.RECEIVE_WATCH_LIST: {
                    _watchList = action.allAapls;
                    this.emit('change');
                    break;
                }
                default:{
                    // Do nothing
                }
            }
        });
    }

    getAll(){
        return _watchList;
    }
}

export default new WatchListStore();