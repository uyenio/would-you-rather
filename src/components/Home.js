import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import QuestionDetails from './QuestionDetails'

class Home extends Component {
    render() {
        return (
            <div>
                <h3 className='center'>Hello, {this.props.authedUser}!</h3>
                <ul className='home-list'> 
                    {this.props.questionIds.map((id) => (
                        <li key={id}>
                             <Question id={id}/>
                        </li>
                    ))}
                </ul>
            </div>    
        )
    }
}

function mapStateToProps ({questions, authedUser}) {
    return {
        questionIds: Object.keys(questions)
            .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
        authedUser
    }
}

export default connect(mapStateToProps)(Home)