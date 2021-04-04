export const ACTION_TYPES = {};

const initialState = {
  isAuthenticated: false,
  email: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "sad":
      return;
    default:
      return {
        ...state,
      };
  }
};

export default authReducer;
