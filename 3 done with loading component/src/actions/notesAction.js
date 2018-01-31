import { GET_NOTES, NOTES_STATUS } from '../actionTypes';
import { database } from '../firebase';

export function getNotes() {
    return dispatch => {
        // as soon as this function fires show loading to true
        dispatch({
            type: NOTES_STATUS,
            payload: true
        });
        database.on(
            'value',
            snapshot => {
                dispatch({
                    type: GET_NOTES,
                    payload: snapshot.val()
                });
                // once notes are received show loading to false
                dispatch({
                    type: NOTES_STATUS,
                    payload: false
                });
                // wait until something changes and try again
            },
            () => {
                dispatch({
                    type: NOTES_STATUS,
                    payload: -1
                });
            }
        );
    };
}

export function saveNote(note) {
    return disptch => database.push(note);
}

export function deleteNote(id) {
    return dispatch => database.child(id).remove();
}
