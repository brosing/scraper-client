// HELPER REDUCER
export default function reducerFetch(reducerName) {
  // INIT STATE
  const initialState = {
    sortBy: 'today',
    isLoading: false,
    isError: false,
    errorMsg: '',
    [reducerName]: [],
  };

  return function switchCase(state = initialState, action) {
    const CASE_NAME = reducerName.toUpperCase();
    const { type, payload } = action;

    switch (type) {
      case `FETCH_${CASE_NAME}_START`:
        return {
          ...state,
          isLoading: true,
          isError: false,
          sortBy: payload || state.sortBy,
        };

      case `FETCH_${CASE_NAME}_FINISH`:
        return {
          ...state,
          isLoading: false,
          isError: false,
          [reducerName]: payload,
        };

      case `FETCH_${CASE_NAME}_ERROR`:
        return {
          ...state,
          isLoading: false,
          isError: true,
          errorMsg: `An error occurred: ${payload}`,
        };
      default:
        return state;
    }
  }
}