import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from '../actions/shared'
import Home from './Home'
import NewQuestion from './NewQuestion'
import Nav from './Nav'
import QuestionDetails from './QuestionDetails'

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
            <Nav />
            {this.props.loading === true 
              ? null
              : <div>
                  <Route path='/' exact component={Home}/>
                  <Route path='/questions/:id' component={QuestionDetails}/>
                  <Route path='/new' component={NewQuestion} />
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

export default connect()(App)