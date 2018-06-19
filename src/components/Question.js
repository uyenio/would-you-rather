import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { formatQuestion } from '../utils/helpers'

class Question extends Component {
    goToQuestionDetails = (e, id) => {
        e.preventDefault()
        this.props.history.push('/questions/' + id)
    }

    render() {
        const { question } = this.props

        if (question === null) {
            return <p> This question doesn't exist</p>
        }

        const {
            optionOne, optionTwo, id
        } = question

        return (
            
            <Link to={'/questions/' + id} className='question'>
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