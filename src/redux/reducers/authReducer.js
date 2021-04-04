import axios from "../../utils/fetchUtil";
import { REQUEST, SUCCESS, FAILURE } from "../../utils/actionTypeUtil";
import { ACCESS_TOKEN, API_BASE_URL, EMAIL_IDENTITY } from "../../constants";

const token = localStorage.getItem(ACCESS_TOKEN); 

export const ACTION_TYPES = {
  LOGIN: "LOGIN",
  GET_CURRENT_USER: "GET_CURRENT_USER",
  LOGOUT: "LOGOUT",
};

const initialState = {
  isAuthenticated: false,
  account: null,
};

export const loginSuccess = (token) => {
  return { type: SUCCESS(ACTION_TYPES.LOGIN), payload: token };
};

export const loginFailure = () => {
  return { type: FAILURE(ACTION_TYPES.LOGIN), payload: token };
};

export const getCurrentAccount = () => {
  return (dispatch) => ({
    type: REQUEST(ACTION_TYPES.GET_CURRENT_USER),
    payload: axios
      .get(`/user/me`)
      .then((response) => {
        dispatch({ type: "STOP_SHOW_LOADING" });
        dispatch(getCurrentAccountSuccess(response));
      })
      .catch((err) => {
        dispatch({ type: "STOP_SHOW_LOADING" });
        dispatch(getCurrentAccountFailed());
      }),
  });
};

export const getCurrentAccountSuccess = (payload) => {
  return {
    type: SUCCESS(ACTION_TYPES.GET_CURRENT_USER),
    payload: payload,
  };
};

export const getCurrentAccountFailed = () => {
  return {
    type: FAILURE(ACTION_TYPES.GET_CURRENT_USER),
  };
};

export const logout = () => {
  return {
    type: ACTION_TYPES.LOGOUT,
  };
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.LOGIN):
      return { ...state };
    case FAILURE(ACTION_TYPES.LOGIN):
      return { ...state };
    case SUCCESS(ACTION_TYPES.LOGIN):
      localStorage.setItem(ACCESS_TOKEN, action.payload);
      return { ...state, isAuthenticated: true };

    case REQUEST(ACTION_TYPES.GET_CURRENT_USER):
      return { ...state };
    case FAILURE(ACTION_TYPES.GET_CURRENT_USER):
      localStorage.removeItem(ACCESS_TOKEN);
      return { ...state, isAuthenticated: false, account: null };
    case SUCCESS(ACTION_TYPES.GET_CURRENT_USER):
      return { ...state, isAuthenticated: true, account: action.payload };
      
    case ACTION_TYPES.LOGOUT:
      localStorage.removeItem(ACCESS_TOKEN);
      return { ...state, isAuthenticated: false, account: null };
    default:
      return {
        ...state,
      };
  }
};

export default authReducer;
