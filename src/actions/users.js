import { saveQuestionAnswer, saveUser } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const SAVE_USER_ANSWER = 'SAVE_USER_ANSWER'
export const ADD_USER = 'ADD_USER'

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

export function addUser(user) {
    return {
        type: ADD_USER,
        user,
    }
}

export function handleAddUser (user) {
    return (dispatch, getState) => {
        const { authedUser } = getState()

        dispatch(showLoading())

        return saveUser(user)
            .then((user) => dispatch(addUser(user)))
            .then(() => dispatch(hideLoading()))
    }
}