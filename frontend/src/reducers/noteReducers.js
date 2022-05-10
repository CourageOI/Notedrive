const {
  ALL_NOTES_REQUEST,
  ALL_NOTES_SUCCESS,
  ALL_NOTES_FAIL,
  CREATE_NOTE_REQUEST,
  CREATE_NOTE_SUCCESS,
  CREATE_NOTE_FAIL,
  UPDATE_NOTE_REQUEST,
  UPDATE_NOTE_SUCCESS,
  UPDATE_NOTE_FAIL,
  FETCH_NOTE_REQUEST,
  FETCH_NOTE_SUCCESS,
  FETCH_NOTE_FAIL,
} = require("../constants/noteConstants");

export const AllNotesReducer = (state = { notes: [] }, action) => {
  switch (action.type) {
    case ALL_NOTES_REQUEST:
      return { loading: true };

    case ALL_NOTES_SUCCESS:
      return { loading: false, notes: action.payload };

    case ALL_NOTES_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const FetchNoteReducer = (state = { notes: [] }, action) => {
  switch (action.type) {
    case FETCH_NOTE_REQUEST:
      return { loading: true };

    case FETCH_NOTE_SUCCESS:
      return { loading: false, notes: action.payload };

    case FETCH_NOTE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const CreateNoteReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_NOTE_REQUEST:
      return { loading: true };

    case CREATE_NOTE_SUCCESS:
      return { loading: false, sucess: true };

    case CREATE_NOTE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const UpdateNoteReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_NOTE_REQUEST:
      return { loading: true };

    case UPDATE_NOTE_SUCCESS:
      return { loading: false, success: true };

    case UPDATE_NOTE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};
