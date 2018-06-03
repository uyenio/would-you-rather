import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion, formatDate } from '../utils/helpers'
import TiTickOutline from 'react-icons/lib/ti/tick-outline'
import TiTick from 'react-icons/lib/ti/tick'

class QuestionDetails extends Component {
    handleVote = (e, id) => {
        e.preventDefault()
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
            <div className='question'>
                Would you rather 
                <div className='question-info'>
                    <button className='tick-button' onClick={this.handleVote}>
                        {true === true 
                            ? <TiTick color='#0xe11e' className='question-icon'/>
                            : <TiTickOutline className='question-icon' />
                        }
                        {optionOne.text}
                    </button>
                    or
                    <button className='tick-button' onClick={this.handleVote}>
                        {true === true 
                            ? <TiTick color='#0xe11e' className='question-icon'/>
                            : <TiTickOutline className='question-icon' />
                        }
                        {optionTwo.text}
                    </button>
                </div>
            </div>
        )
    }
}

function mapStateToProps({authedUser, users, questions}, {id}) {
    const question = questions[id]

    return {
        authedUser,
        question: formatQuestion(question, users[question.author], authedUser)
    }
}

export default connect(mapStateToProps)(QuestionDetails)