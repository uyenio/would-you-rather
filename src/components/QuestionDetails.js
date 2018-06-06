import React, { Component } from 'react'
import { connect } from 'react-redux'
import Poll from './Poll'

class QuestionDetails extends Component {
    render() {
        const { id } = this.props
        return (
            <div>
                <Poll id={id} />
            </div>
        )
    }
}

function mapStateToProps ({authedUser}, props) {
    const { id } = props.match.params

    return {
        id
    }
}

export default connect(mapStateToProps)(QuestionDetails)