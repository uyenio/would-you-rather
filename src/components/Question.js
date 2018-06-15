import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import { Link, withRouter } from 'react-router-dom'

class Question extends Component {
    goToQuestionDetails = (e, id) => {
        e.preventDefault()
        this.props.history.push('/app/questions/${id}')
    }

    render() {
        const { question } = this.props

        if (question === null) {
            return <p> This question doesn't exist</p>
        }

        const {
            timestamp, optionOne, optionTwo, id
        } = question

        return (
            
            <Link to={`/app/questions/${id}`} className='question'>
                <span onClick={(e) => this.goToQuestionDetails(e, this.props.id)}>
                    Would you rather {optionOne.text} or {optionTwo.text}?
                </span>
            </Link>

        )
    }
}

function mapStateToProps({authedUser, users, questions}, {id}) {
    const question = questions[id]

    return {
        authedUser,
        question: formatQuestion(question, authedUser)
    }
}

export default withRouter(connect(mapStateToProps)(Question))