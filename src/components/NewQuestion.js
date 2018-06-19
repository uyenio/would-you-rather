import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAddQuestion } from '../actions/questions'
import Nav from './Nav'

class NewQuestion extends Component {
    state = {
        optionOneText: '',
        optionTwoText: '',
        toHome: false,
    }

    handleChange = (e, optionType) => {
        const optionText = e.target.value
        if (optionType === 'optionOne') {
            this.setState(() => ({
                optionOneText: optionText
            }))
        } 

        if (optionType === 'optionTwo') {
            this.setState(() => ({
                optionTwoText: optionText
            }))
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { optionOneText, optionTwoText } = this.state
        const { dispatch, id } = this.props
        dispatch(handleAddQuestion(optionOneText, optionTwoText))

        this.setState(() => ({
            optionOneText: '',
            optionTwoText: '',
            toHome: id ? false : true,
        }))
    }

    render () {
        const { optionOneText, optionTwoText, toHome } = this.state

        if (toHome === true) {
            return <Redirect to='/' />
        }      

        return (
            <div>
                <Nav />
                <h3 className='center'>Compose New Question</h3> 
                <form className='new-question' onSubmit={this.handleSubmit}>
                    Would you rather
                    <input placeholder='Option 01' value={optionOneText} onChange={(e) => this.handleChange(e, 'optionOne')}/>
                    or 
                    <input placeholder='Option 02' value={optionTwoText} onChange={(e) => this.handleChange(e, 'optionTwo')}/>
                    ?
                    <button className='btn' 
                            type='submit'
                            disabled={optionOneText === '' || optionTwoText === ''}>
                        Submit
                    </button>
                </form>

            </div>
        )
    }
}

export default connect()(NewQuestion)