import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import Poll from './Poll'
import PollStatistic from './PollStatistic'
import PageNotFound from './PageNotFound'

class QuestionDetails extends Component {
    render() {
        const { question, isAnswered } = this.props

        if (question === null) {
            return <PageNotFound />
        }
        
        if (isAnswered) {
            return (
                <div>
                    <PollStatistic id={question.id} />
                </div>
            )
        } else {
            return (
                <div>
                    <Poll id={question.id} />
                </div>
            )
        }
    }
}

function mapStateToProps({authedUser, questions, users}, props) {
    const { id } = props.match.params
    const question = questions[id]

    const answeredQuestions = Object.keys(users[authedUser].answers)
    return {
        isAnswered: answeredQuestions.includes(id),
        question: formatQuestion(question, authedUser)
    }
}

export default connect(mapStateToProps)(QuestionDetails)