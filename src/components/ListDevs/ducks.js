// CONSTANT
const FETCH_DEVS_START = 'FETCH_DEVS_START';
const FETCH_DEVS_FINISH = 'FETCH_DEVS_FINISH';
const FETCH_DEVS_ERROR = 'FETCH_DEVS_ERROR';

const URL = 'https://githubtrends-scrapper.herokuapp.com/devs';

// THUNKS
export function fetchDevs(sorter = 'today') { 
  return async function(dispatch) {
    dispatch(fetchDevsStart(sorter));
    
    try {
      const response = await fetch(`${URL}?since=${sorter}`)
      const json = await response.json()
      return dispatch(fetchDevsFinish(json))
    } catch (error) {
      return dispatch(fetchDevsError(error))
    }
  }
}

// ACTIONS
function fetchDevsStart(sorter) {
  return { type: FETCH_DEVS_START, payload: sorter }
}
function fetchDevsFinish(json) {
  return { type: FETCH_DEVS_FINISH, payload: json }
}
function fetchDevsError(err) {
  return { type: FETCH_DEVS_ERROR, payload: err }
}

// INITIAL STATE
const initialState = {
  devs: [],
  sortBy: 'today',
  isLoading: false,
  isError: false,
  errorMsg: '',
}

// REDUCERS
export default function listDevsReducer(state = initialState, action) {
  // console.log(action.type)

  switch(action.type) {
    case FETCH_DEVS_START:
      return {
        ...state,
        isLoading: true,
        isError: false,
        sortBy: action.payload,
      }

    case FETCH_DEVS_FINISH:
      return {
        ...state,
        isLoading: false,
        isError: false,
        devs: action.payload,
      }

    case FETCH_DEVS_ERROR:
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