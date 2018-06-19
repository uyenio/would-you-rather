import React, { Component } from 'react'
import { connect } from 'react-redux'
import TiTickOutline from 'react-icons/lib/ti/tick-outline'
import TiTick from 'react-icons/lib/ti/tick'
import { formatQuestion } from '../utils/helpers'
import Nav from './Nav'

class PollStatistic extends Component {
    render() {
        const { question, userSelectedOption } = this.props
        if (question === null) {
            return <p> This question doesn't exist</p>
        }

        const {
            optionOne, optionTwo
        } = question

        var totalVotes = optionOne.votes.length + optionTwo.votes.length

        return (
            <div>
                <Nav />
                <div>
                    Would you rather 
                    <div>
                    {userSelectedOption === 'optionOne' 
                                ? <TiTick color='#0xe11e' className='question-icon'/>
                                : <TiTickOutline className='question-icon' />
                            }

                        {optionOne.text}
                        - Votes: {optionOne.votes.length}
                        - Percentage: {Math.round((optionOne.votes.length / totalVotes) * 100)}%
                    </div>         
                        or
                    <div>
                    {userSelectedOption === 'optionTwo' 
                                ? <TiTick color='#0xe11e' className='question-icon'/>
                                : <TiTickOutline className='question-icon' />
                            }
                        {optionTwo.text} 
                        - Votes: {optionTwo.votes.length}
                        - Percentage: {Math.round((optionTwo.votes.length / totalVotes) * 100)}%
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({authedUser, questions, users}, {id}) {
    const question = questions[id]
    const user = users[authedUser]
    const userSelectedOption = user.answers[question.id]
 
    return {
        userSelectedOption,
        question: formatQuestion(question, authedUser)
    }
}

export default connect(mapStateToProps)(PollStatistic)