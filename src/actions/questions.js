import { showLoading, hideLoading } from 'react-redux-loading'
import { ADD_VOTE, ADD_QUESTION, RECEIVE_QUESTIONS } from "../config/constants";
import { saveQuestion } from '../utils/api'

export  function addVote (info) {
    return {
      type: ADD_VOTE,
      authedUser: info.authedUser,
      qid: info.qid,
      answer: info.answer
    }
  }

function addQuestion (question) {
    return {
        type: ADD_QUESTION,
        question,
    }
}

export function handleAddQuestion (optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { authedUser } = getState()

        dispatch(showLoading())

        return saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser
        })
            .then((question) => dispatch(addQuestion(question)))
            .then(() => dispatch(hideLoading()))
    }
}

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}