import ACTIONS from "./Actions";

const Reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.REMOVE_NAV:
      return {
        ...state,
        nav: payload,
      };
    default:
      return state;
  }
};

export default Reducer;
