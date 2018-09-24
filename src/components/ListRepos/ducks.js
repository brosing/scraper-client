import { SERVER_URL } from '../../config';

// CONSTANT
const FETCH_REPOS_START = 'FETCH_REPOS_START';
const FETCH_REPOS_FINISH = 'FETCH_REPOS_FINISH';
const FETCH_REPOS_ERROR = 'FETCH_REPOS_ERROR';


// ACTIONS
function fetchReposStart(sorter) {
  return { type: FETCH_REPOS_START, payload: sorter };
}
function fetchReposFinish(json) {
  return { type: FETCH_REPOS_FINISH, payload: json };
}
function fetchReposError(err) {
  return { type: FETCH_REPOS_ERROR, payload: err };
}

// THUNKS
export function fetchRepos(sorter = 'today') {
  return async function (dispatch) {
    dispatch(fetchReposStart(sorter));

    try {
      const response = await fetch(`${SERVER_URL}?since=${sorter}`);
      const json = await response.json();
      return dispatch(fetchReposFinish(json));
    } catch (error) {
      return dispatch(fetchReposError(error));
    }
  };
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
        sortBy: action.payload,
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
