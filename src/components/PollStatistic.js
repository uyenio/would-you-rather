import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import Nav from './Nav'

class PollStatistic extends Component {
    render() {
        const { question } = this.props
        if (question === null) {
            return <p> This question doesn't exist</p>
        }

        const {
            timestamp, optionOne, optionTwo, id, author
        } = question

        var totalVotes = optionOne.votes.length + optionTwo.votes.length
        return (
            <div>
                <Nav />
                <div>
                    Would you rather 
                    <div>
                        {optionOne.text}
                        - Votes: {optionOne.votes.length}
                        - Percentage: {Math.round((optionOne.votes.length / totalVotes) * 100)}%
                    </div>         
                        or
                    <div>
                        {optionTwo.text} 
                        - Votes: {optionTwo.votes.length}
                        - Percentage: {Math.round((optionTwo.votes.length / totalVotes) * 100)}%
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({authedUser, questions}, {id}) {
    const question = questions[id]

    return {
        authedUser,
        question: formatQuestion(question, authedUser)
    }
}

export default connect(mapStateToProps)(PollStatistic)