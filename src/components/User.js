import React, { Component } from 'react'
import { connect } from 'react-redux'

class User extends Component {
    render() {
        const { user } = this.props

        const {
            name, avatarURL, questions, answers
        } = user

        return(
            <div>
                <img src={avatarURL} alt={`Avatar of ${name}`} className='avatar'/>
                <div>
                    {name} - Questions: {questions.length} - Answers: {Object.keys(answers).length}
                </div>
            </div>
        )
    }
}

function mapStateToProps({users}, {id}) {
    const user = users[id]

    return {
        user
    }
}

export default connect(mapStateToProps)(User)