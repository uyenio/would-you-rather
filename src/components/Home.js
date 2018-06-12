import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import QuestionDetails from './QuestionDetails'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class Home extends Component {
    render() {
        return (
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