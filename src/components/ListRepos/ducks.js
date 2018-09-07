// CONSTANT
const FETCH_REPOS_START = 'FETCH_REPOS_START';
const FETCH_REPOS_FINISH = 'FETCH_REPOS_FINISH';
const FETCH_REPOS_ERROR = 'FETCH_REPOS_ERROR';

const URL = 'http://localhost:8000/';

// THUNKS
export function fetchRepos() { 
  return async function(dispatch) {
    dispatch(fetchReposStart());

    try {
      const response = await fetch(URL)
      const json = await response.json()
      return dispatch(fetchReposFinish(json))
    } catch (error) {
      return dispatch(fetchReposError(error))
    }
  }
}

// ACTIONS
function fetchReposStart() {
  return { type: FETCH_REPOS_START }
}
function fetchReposFinish(json) {
  return { type: FETCH_REPOS_FINISH, payload: json }
}
function fetchReposError(err) {
  return { type: FETCH_REPOS_ERROR, payload: err }
}

// INITIAL STATE
const initialState = {
  repos: [],
  isLoading: false,
  isError: false,
  errorMsg: '',
}

// REDUCERS
export default function listReposReducer(state = initialState, action) {
  // console.log(action.type)

  switch(action.type) {
    case FETCH_REPOS_START:
      return {
        ...state,
        isLoading: true,
        isError: false,
      }

    case FETCH_REPOS_FINISH:
      return {
        ...state,
        isLoading: false,
        isError: false,
        repos: action.payload,
      }

    case FETCH_REPOS_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMsg: `An error occurred: ${action.payload}`,
      }
    default:
      return state;
  }
}