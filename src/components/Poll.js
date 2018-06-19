import React, { Component } from 'react'
import { connect } from 'react-redux'
import TiTickOutline from 'react-icons/lib/ti/tick-outline'
import TiTick from 'react-icons/lib/ti/tick'
import { handleVote } from '../actions/shared'
import { formatQuestion } from '../utils/helpers'
import Nav from './Nav'
import User from './User'

class Poll extends Component {
    state = {
       isOptionOneSelected: false,
       isOptionTwoSelected: false
    }

    handleVote = (e, optionType) => {
        e.preventDefault();

        this.setState(() => ({
            isOptionOneSelected: (optionType === 'optionOne'),
            isOptionTwoSelected: (optionType === 'optionTwo')
          }))

        const { question, authedUser } = this.props;

        this.props.handleVote({
            authedUser,
            qid: question.id,
            answer: optionType
        });
    }

    render() {
        const { question } = this.props
        const { isOptionOneSelected, isOptionTwoSelected } = this.state

        if (question === null) {
            return <p> This question doesn't exist</p>
        }

        const {
            optionOne, optionTwo, author
        } = question

        return (
            <div>
                <Nav />
                <div className='question'>
                    <User id={author}/>
                    Would you rather 
                    <div className='question-info'>
                        <button className='tick-button' onClick={(e) => this.handleVote(e, 'optionOne')}>
                            {isOptionOneSelected === true 
                                ? <TiTick color='#0xe11e' className='question-icon'/>
                                : <TiTickOutline className='question-icon' />
                            }
                            {optionOne.text}
                        </button>
                        or
                        <button className='tick-button' onClick={(e) => this.handleVote(e, 'optionTwo')}>
                            {isOptionTwoSelected === true 
                                ? <TiTick color='#0xe11e' className='question-icon'/>
                                : <TiTickOutline className='question-icon' />
                            }
                            {optionTwo.text}
                        </button>
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

export default connect(mapStateToProps, {handleVote})(Poll)

