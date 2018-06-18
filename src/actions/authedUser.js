import { SET_AUTHED_USER } from "../config/constants";

export function setAuthedUser (id) {
    return {
        type: SET_AUTHED_USER,
        id,
    }
}