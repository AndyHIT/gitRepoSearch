import { GET_REPO } from '../actions/action.js';

const reducer = (state=[], action) => {
	switch (action.type) {
		case GET_REPO:
			return {
				...state,
				result: action.result.items
			}
		default:
			return {...state}
	}
}

export default reducer