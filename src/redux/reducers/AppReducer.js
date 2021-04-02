export const ACTION_TYPES = {
  CHANGING_NAVBAR_ROUTE: "CHANGING_NAVBAR_ROUTE",
  CHANGED_NAVBAR_ROUTE: "CHANGED_NAVBAR_ROUTE",
  SHOW_LOGIN_MODAL: "SHOW_LOGIN_MODAL",
  CLOSE_LOGIN_MODAL: "CLOSE_LOGIN_MODAL",
};

export const setShowLoginModal = () => {
  return {
    type: ACTION_TYPES.SHOW_LOGIN_MODAL,
  };
};

export const setCloseLoginModal = () => ({ type: ACTION_TYPES.CLOSE_LOGIN_MODAL });

const initState = {
  loading: false,
  loginModalShow: false,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION_TYPES.CHANGING_NAVBAR_ROUTE:
      return {
        ...state,
        loading: true,
      };
    case ACTION_TYPES.CHANGED_NAVBAR_ROUTE:
      return {
        ...state,
        loading: false,
      };
    case ACTION_TYPES.SHOW_LOGIN_MODAL:
      return {
        ...state,
        loginModalShow: true,
      };
    case ACTION_TYPES.CLOSE_LOGIN_MODAL:
      return {
        ...state,
        loginModalShow: false,
      };
    default:
      return { ...state };
  }
};

export default reducer;
