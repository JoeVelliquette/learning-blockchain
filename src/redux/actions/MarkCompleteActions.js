import {
    MARK_RESOURCE_COMPLETE,
    MARK_INTRODUCTION_COMPLETE,
    MARK_WRAP_UP_COMPLETE,
    CLOSE_INTRO
} from "./types";

export const markResourceComplete = (id) => dispatch => {
    dispatch({
        type: MARK_RESOURCE_COMPLETE,
        payload: {
            id: id
        }
    });
};

export const markIntroductionComplete = (id) => dispatch => {
    dispatch({
        type: MARK_INTRODUCTION_COMPLETE,
        payload: {
            id: id
        }
    });
};

export const markWrapUpComplete = (id) => dispatch => {
    dispatch({
        type: MARK_WRAP_UP_COMPLETE,
        payload: {
            id: id
        }
    });
};

export const markIntroParagraphComplete = () => dispatch => {
    dispatch({
        type: CLOSE_INTRO,
        payload: {}
    });
};
