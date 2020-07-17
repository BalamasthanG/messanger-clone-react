export const initialState = {
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "USER_ACTION":
      return { user: action.user };
      break;
    default:
      return state;
  }
};

export default reducer;
