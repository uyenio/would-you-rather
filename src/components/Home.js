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
                        {this.props.questionIds.map((id) => (
                            <li key={id}>
                                <Question id={id}/>
                            </li>
                        ))}
                    </ul>
                </div> 
            </TabPanel>
            <TabPanel>
                Content 2
            </TabPanel>
          </Tabs> 
        )
    }
}

function mapStateToProps ({questions}) {
    return {
        questionIds: Object.keys(questions)
            .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(Home)