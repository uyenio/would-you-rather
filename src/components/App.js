import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from '../actions/shared'
import Home from './Home'
import NewQuestion from './NewQuestion'
import Nav from './Nav'
import QuestionDetails from './QuestionDetails'
import Leaderboard from './Leaderboard'
import Login from './Login'
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const muiTheme = getMuiTheme({
      appBar: {
          color: "#37517E",
          height: 50
      },
    });

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Router>
          <Fragment>
            <LoadingBar />
            <div className='container'>
              {this.props.loading === true 
                ? null
                : <div>
                    <Route path="/login" component={Login}/>
                    <Route path='/home' component={Home}/>
                    <Route path='/questions/:id' component={QuestionDetails}/>
                    <Route path='/add' component={NewQuestion} />
                    <Route path='/leaderboard' component={Leaderboard} />
                    <Redirect from="/" to="/login"/>
                  </div>
              }
            </div>
          </Fragment>
        </Router>
      </MuiThemeProvider>
    )
  }
}

function mapStateToProps ( { authedUser } ) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)