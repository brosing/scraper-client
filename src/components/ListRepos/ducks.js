// CONSTANT
const FETCH_REPOS_START = 'FETCH_REPOS_START';
const FETCH_REPOS_FINISH = 'FETCH_REPOS_FINISH';
const FETCH_REPOS_ERROR = 'FETCH_REPOS_ERROR';
// const FETCH_README_START = 'FETCH_README_START';
// const FETCH_README_ERROR = 'FETCH_README_ERROR';
// const FETCH_README_FINISH = 'FETCH_README_FINISH';

const URL = 'https://githubtrends-scrapper.herokuapp.com/';
// const RAW_URL = 'https://api.github.com/repos';

// THUNKS
export function fetchRepos(sorter) { 
  return async function(dispatch) {
    dispatch(fetchReposStart());

    try {
      const response = await fetch(`${URL}?since=${sorter}`)
      const json = await response.json()
      return dispatch(fetchReposFinish(json))
    } catch (error) {
      return dispatch(fetchReposError(error))
    }
  }
}

// export function fetchReadme(link) {
//   const URL_README = `${RAW_URL}${link}/readme`;

//   return async function(dispatch) {
//     dispatch(fetchReadmeStart());

//     try {
//       const response = await fetch(URL_README)
//       const json = await response.json()
//       console.log(json);

//       const content = window.atob(json.content)
//       return dispatch(fetchReadmeFinish(content))
//     } catch (error) {
//       return dispatch(fetchReadmeError(error))
//     }
//   }
// }


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
// function fetchReadmeStart() {
//   return { type: FETCH_README_START }
// }
// function fetchReadmeError(err) {
//   return { type: FETCH_README_ERROR, payload: err }
// }
// function fetchReadmeFinish(content) {
//   return { type: FETCH_README_FINISH, payload: content }
// }

// INITIAL STATE
const initialState = {
  repos: [],
  isLoading: false,
  isError: false,
  errorMsg: '',
}

// const initialStateReadme = {
//   content: '',
//   isLoading: false,
//   isError: false,
//   errorMsg: '',
// }

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

// export function readmeReducer(state = initialStateReadme, action) {
//   // console.log(action.type);

//   switch(action.type) {
//     case FETCH_README_START:
//       return {
//         ...state,
//         isLoading: true,
//         isError: false,
//       }

//     case FETCH_README_ERROR:
//       return {
//         ...state,
//         isLoading: false,
//         isError: true,
//         errorMsg: `An error occurred: ${action.payload}`,
//       }

//     case FETCH_README_FINISH:
//       return {
//         ...state,
//         isLoading: false,
//         isError: false,
//         content: action.payload,
//       }

//     default:
//       return state;
//   }
// }