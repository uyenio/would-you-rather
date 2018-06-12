import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion, formatDate } from '../utils/helpers'
import TiTickOutline from 'react-icons/lib/ti/tick-outline'
import TiTick from 'react-icons/lib/ti/tick'
import User from './User'
import { handleVote } from '../actions/shared'

class Poll extends Component {
    state = {
       isOptionOneSelected: false,
       isOptionTwoSelected: false
    }

    handleOptionOneVote = (e) => {
        e.preventDefault();
        this.state.isOptionOneSelected = true;
        const { dispatch, question, authedUser } = this.props;

        dispatch(handleVote({
            authedUser,
            qid: question.id,
            answer: 'optionOne'
        }));
    }

    handleOptionTwoVote = (e) => {
        e.preventDefault();
        this.state.isOptionTwoSelected = true;
        const { dispatch, question, authedUser } = this.props;

        dispatch(handleVote({
            authedUser,
            qid: question.id,
            answer: 'optionTwo'
        }));
    }

    render() {
        const { question } = this.props
        const { isOptionOneSelected, isOptionTwoSelected } = this.state

        if (question === null) {
            return <p> This question doesn't exist</p>
        }

        const {
            timestamp, optionOne, optionTwo, id, author
        } = question

        return (
            <div className='question'>
                <User id={author}/>
                Would you rather 
                <div className='question-info'>
                    <button className='tick-button' onClick={this.handleOptionOneVote}>
                        {isOptionOneSelected === true 
                            ? <TiTick color='#0xe11e' className='question-icon'/>
                            : <TiTickOutline className='question-icon' />
                        }
                        {optionOne.text}
                    </button>
                    or
                    <button className='tick-button' onClick={this.handleOptionTwoVote}>
                        {isOptionTwoSelected === true 
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

function mapStateToProps({authedUser, questions}, {id}) {
    const question = questions[id]

    return {
        authedUser,
        question: formatQuestion(question, authedUser)
    }
}

export default connect(mapStateToProps)(Poll)

