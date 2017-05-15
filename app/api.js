import {post} from 'jquery';
import ServerAction from './actions/ServerActions';

let api = {
    fetchWatchList(){
        post('/graphql', {
            query: ' TODO '
        }).done(resp => {
            ServerAction.receiveStocks(resp.data.watchList);
        });
    }
};

export default api;