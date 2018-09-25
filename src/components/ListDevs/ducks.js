// CONSTANT
export const FETCH_DEVS_START = 'FETCH_DEVS_START';
const FETCH_DEVS_FINISH = 'FETCH_DEVS_FINISH';
const FETCH_DEVS_ERROR = 'FETCH_DEVS_ERROR';


// ACTIONS
export function fetchDevs(sorter) {
  return { type: FETCH_DEVS_START, payload: sorter };
}
export function fetchDevsFinish(json) {
  return { type: FETCH_DEVS_FINISH, payload: json };
}
export function fetchDevsError(err) {
  return { type: FETCH_DEVS_ERROR, payload: err };
}


// INITIAL STATE
const initialState = {
  devs: [],
  sortBy: 'today',
  isLoading: false,
  isError: false,
  errorMsg: '',
};


// REDUCERS
export default function listDevsReducer(state = initialState, action) {
  // console.log(action.type)

  switch (action.type) {
    case FETCH_DEVS_START:
      return {
        ...state,
        isLoading: true,
        isError: false,
        sortBy: action.payload ? action.payload : state.sortBy,
      };

    case FETCH_DEVS_FINISH:
      return {
        ...state,
        isLoading: false,
        isError: false,
        devs: action.payload,
      };

    case FETCH_DEVS_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: `An error occurred: ${action.payload}`,
      };
    default:
      return state;
  }
}
