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