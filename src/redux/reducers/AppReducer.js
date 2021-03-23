const ACTION_TYPES = {
  CHANGING_NAVBAR_ROUTE: "CHANGING_NAVBAR_ROUTE",
  CHANGED_NAVBAR_ROUTE: "CHANGED_NAVBAR_ROUTE",
};

const initState = {
  loading: false,
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
    default:
      return { ...state };
  }
};

export default reducer;
