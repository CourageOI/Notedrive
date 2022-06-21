import axios from "axios";
import {
  ALL_NOTES_FAIL,
  ALL_NOTES_REQUEST,
  ALL_NOTES_SUCCESS,
  CREATE_NOTE_FAIL,
  CREATE_NOTE_REQUEST,
  CREATE_NOTE_SUCCESS,
  UPDATE_NOTE_REQUEST,
  UPDATE_NOTE_SUCCESS,
  UPDATE_NOTE_FAIL,
  FETCH_NOTE_REQUEST,
  FETCH_NOTE_SUCCESS,
  FETCH_NOTE_FAIL,
} from "../constants/noteConstants";

export const AllNotes = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ALL_NOTES_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/notes`, config);

    dispatch({ type: ALL_NOTES_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: ALL_NOTES_FAIL,
      payload: message,
    });
  }
};

export const CreateNoteAction =
  (title, content, category) => async (dispatch, getState) => {
    try {
      dispatch({ type: CREATE_NOTE_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = axios.post(
        "api/notes/create",
        { title, content, category },
        config
      );

      dispatch({ type: CREATE_NOTE_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: CREATE_NOTE_FAIL,
        payload: message,
      });
    }
  };
export const fetchNoteAction = () => (dispatch, getState) => {
  try {
    dispatch({
      type: FETCH_NOTE_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = axios.get(`api/notes/${userInfo.id}`, config);
    dispatch({ type: FETCH_NOTE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: FETCH_NOTE_FAIL,
      payload: message,
    });
  }
};
export const UpdateNoteAction =
  (id, title, content, category) => async (dispatch, getState) => {
    try {
      dispatch({ type: UPDATE_NOTE_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.put(
        `/api/notes/${id}`,
        { title, content, category },
        config
      );

      dispatch({ type: UPDATE_NOTE_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: UPDATE_NOTE_FAIL,
        payload: message,
      });
    }
  };
