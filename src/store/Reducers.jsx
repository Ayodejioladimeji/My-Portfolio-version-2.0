import ACTIONS from "./Actions";

const Reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.REMOVE_NAV:
      return {
        ...state,
        nav: payload,
      };

    case ACTIONS.REMOVE_TAB:
      return {
        ...state,
        scroll: payload,
      };

    case ACTIONS.OPEN_MODAL:
      return {
        ...state,
        modal: payload,
      };

    case ACTIONS.LANGUAGE_OPEN_MODAL:
      return {
        ...state,
        language_open_modal: payload,
      };

    default:
      return state;
  }
};

export default Reducer;
