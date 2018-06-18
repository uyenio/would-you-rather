import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import QuestionDetails from './QuestionDetails'
import { setAuthedUser } from "../actions/authedUser";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Nav from './Nav'

class Home extends Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }
    
    handleLogout() {
        const { dispatch } = this.props
        dispatch(setAuthedUser(null))
        this.props.history.push("/");
    }

    render() {
        return (
            <div>
                <button onClick={this.handleLogout}> 
                    Log out
                </button>
                <Nav />
                <Tabs>
                    <TabList>
                        <Tab>Unanswered</Tab>
                        <Tab>Answered</Tab>
                    </TabList>
                
                    <TabPanel>
                        <div>
                            <ul className='home-list'> 
                                {this.props.unAnsweredQuestionIds.map((id) => (
                                    <li key={id}>
                                        <Question id={id}/>
                                    </li>
                                ))}
                            </ul>
                        </div> 
                    </TabPanel>
                    <TabPanel>
                        <div>
                            <ul className='home-list'> 
                                {this.props.answeredQuestionIds.map((id) => (
                                    <li key={id}>
                                        <Question id={id}/>
                                    </li>
                                ))}
                            </ul>
                        </div> 
                    </TabPanel>
                </Tabs> 
            </div>
        )
    }
}

function mapStateToProps ({questions, users, authedUser}) {
    var answeredQuestionIds = Object.keys(users[authedUser].answers);
    var unAnsweredQuestionIds = Object.keys(questions).filter(q => !answeredQuestionIds.includes(q));
    return {
        answeredQuestionIds: answeredQuestionIds
                                .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
        unAnsweredQuestionIds: unAnsweredQuestionIds
                                .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(Home)