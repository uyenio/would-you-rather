import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from '../actions/shared'
import Home from './Home'
import NewQuestion from './NewQuestion'
import Nav from './Nav'
import QuestionDetails from './QuestionDetails'
import Leaderboard from './Leaderboard'
import Login from './Login'
import PageNotFound from './PageNotFound'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
        <Router>
          <Fragment>
            <LoadingBar />
            <div className='container'>
              {this.props.loading === true 
                ? <Login />
                : <div>
                    <Switch>
                      <Route path="/login" component={Login}/>
                      <Route path='/' exact component={Home}/>
                      <Route path='/questions/:id' component={QuestionDetails}/>
                      <Route path='/add' component={NewQuestion} />
                      <Route path='/leaderboard' component={Leaderboard} />
                      <Route component={PageNotFound} />
                    </Switch>
                  </div>
              }
            </div>
          </Fragment>
        </Router>
    )
  }
}

function mapStateToProps ( { authedUser } ) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)