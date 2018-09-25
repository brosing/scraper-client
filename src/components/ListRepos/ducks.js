// CONSTANT
export const FETCH_REPOS_START = 'FETCH_REPOS_START';
const FETCH_REPOS_FINISH = 'FETCH_REPOS_FINISH';
const FETCH_REPOS_ERROR = 'FETCH_REPOS_ERROR';


// ACTIONS
export function fetchRepos(sorter) {
  return { type: FETCH_REPOS_START, payload: sorter };
}
export function fetchReposFinish(json) {
  return { type: FETCH_REPOS_FINISH, payload: json };
}
export function fetchReposError(err) {
  return { type: FETCH_REPOS_ERROR, payload: err };
}


// INITIAL STATE
const initialState = {
  repos: [],
  sortBy: 'today',
  isLoading: false,
  isError: false,
  errorMsg: '',
};


// REDUCERS
export default function listReposReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_REPOS_START:
      return {
        ...state,
        isLoading: true,
        isError: false,
        sortBy: action.payload ? action.payload : state.sortBy,
      };
    case FETCH_REPOS_FINISH:
      return {
        ...state,
        isLoading: false,
        isError: false,
        repos: action.payload,
      };
    case FETCH_REPOS_ERROR:
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
