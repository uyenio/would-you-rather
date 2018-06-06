import React, { Component } from 'react'
import { handleAddQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'

class NewQuestion extends Component {
    state = {
        optionOneText: '',
        optionTwoText: '',
        toHome: false,
    }

    handleOptionOneChange = (e) => {
        const optionOneText = e.target.value
        
        this.setState(() => ({
            optionOneText
        }))
    }

    handleOptionTwoChange = (e) => {
        const optionTwoText = e.target.value
        
        this.setState(() => ({
            optionTwoText
        }))
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
                <h3 className='center'>Compose New Question</h3> 
                <form className='new-question' onSubmit={this.handleSubmit}>
                    Would you rather
                    <input placeholder='Option 01' value={optionOneText} onChange={this.handleOptionOneChange}/>
                    or 
                    <input placeholder='Option 02' value={optionTwoText} onChange={this.handleOptionTwoChange}/>
                    ?
                    <button className='btn' 
                            type='submit'
                            disabled={optionOneText === '' && optionTwoText === ''}>
                        Submit
                    </button>
                </form>

            </div>
        )
    }
}

export default NewQuestion