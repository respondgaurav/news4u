import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux'; 
import { Provider } from 'react-redux'; 
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import About from './components/about';
import HeadlinesContainer from './containers/headlines_container';
import Preferences from './containers/preferences';
import rootReducer from './reducers/root_reducer';
import NavBar from './components/navbar';
import Logout from './containers/logout';

import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
    <Router>
      <React.Fragment>
        <NavBar />
        <Route exact path="/" component={App} />
        <Route exact path="/about" component={About} />
        <Route exact path='/headlines' component={HeadlinesContainer} />
        <Route path='/users/:id/edit' component={Preferences} />
        <Route path='/users/:id/logout' component={Logout} /> 
      </React.Fragment>   
    </Router>
    </Provider>,
  document.getElementById('root')
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
