import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore ,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import { max } from 'moment';

const reducer = (state={ count: 0 ,maxCount:0}, action) => {
    const count = state.count
    const maxCount=state.maxCount
    switch (action.type) {
      case 'INCREMENT':
        return {
          count: count + action.payload,
          maxCount: maxCount > count + action.payload ? maxCount : count + action.payload
        }
      case 'DECREASE':
        return {
          count: count - action.payload,
          maxCount: maxCount
        }
      default:
        return state
    }
};

const store = createStore(reducer,applyMiddleware(thunk));

/* const handleClick = (e) => {
  debugger;
} */

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App
        count={store.getState().count}
        maxCount={store.getState().maxCount}
        store={store}
      />
    </Provider>,
    document.getElementById('root')
  );
};

render();
store.subscribe(render);
