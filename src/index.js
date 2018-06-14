import React from 'react'
import ReactDOM from 'react-dom'
import { GoogleLogin } from 'react-google-login';
import './index.css'
import App from './components/App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'

const store = createStore(reducer, middleware)

const responseGoogle = (response) => {
    console.log(response);
  }

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
 document.getElementById('root')
)
