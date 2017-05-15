import {post} from 'jquery';
import ServerAction from './actions/ServerActions';

let api = {
    fetchWatchList(){
        post('localhost:5000/graphql', {
            query: `allAapls(first: 10) {
    edges {
      node {
        date
        open
        high
        low
        close
        volume
        exdividend
        splitratio
        adjustedopen
        adjustedhigh
        adjustedlow
        adjustedclose
        adjustedvolume
      }
    }
  }`
        }).done(resp => {
            console.log(resp.data.allAapls);
            ServerAction.receiveStocks(resp.data.allAapls);
        });
    }
};

export default api;