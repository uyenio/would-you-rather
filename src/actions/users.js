import { saveQuestionAnswer, saveUser } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
import { setAuthedUser } from '../actions/authedUser'
import { SAVE_USER_ANSWER, RECEIVE_USERS } from "../config/constants";

export function saveUserAnswer (info) {
    return {
        type: SAVE_USER_ANSWER,
        authedUser: info.authedUser,
        qid: info.qid,
        answer: info.answer
    }
}

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}