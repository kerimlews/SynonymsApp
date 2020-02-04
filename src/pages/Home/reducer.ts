import {
	ADD_NEW_SYNONYM,
	ADD_NEW_SYNONYM_FAIL,
	ADD_NEW_SYNONYM_SUCCESS,
	SEARCH_SYNONYMS,
	SEARCH_SYNONYMS_FAIL,
	SEARCH_SYNONYMS_SUCCESS,
} from './constants'

const initialState: IState = {
	isLoadingAdd: false,
	isLoadingSearch: false,
	synonyms: [],
	error: null,
}

export default (state: IState = initialState, action: any) => {
	switch (action.type) {
		// ADD_NEW_sYNONYM
		case ADD_NEW_SYNONYM:
			return { ...state, isLoadingAdd: true, error: null }
		case ADD_NEW_SYNONYM_SUCCESS:
			return { ...state, isLoadingAdd: false, error: null }
		case ADD_NEW_SYNONYM_FAIL:
			return { ...state, isLoadingAdd: false, error: action.payload }

		// SEARCH_SYNONYMS
		case SEARCH_SYNONYMS:
			return { ...state, isLoadingSearch: true, error: null }
		case SEARCH_SYNONYMS_SUCCESS:
			return {
				...state,
				isLoadingSearch: false,
				synonyms: action.payload,
			}
		case SEARCH_SYNONYMS_FAIL:
			return { ...state, isLoadingSearch: false, error: action.payload }
		default:
			return state
	}
}
