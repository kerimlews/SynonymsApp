import {
	SEARCH_SYNONYMS,
	SEARCH_SYNONYMS_SUCCESS,
	SEARCH_SYNONYMS_FAIL,
} from '../constants'
import {
	ISearchSynonyms,
	ISearchSynonymsFail,
	ISearchSynonymsSuccess,
} from '../interfaces/ISearchSynonyms'

export function searchSynonyms(word: string): ISearchSynonyms {
	console.log(word)
	return {
		type: SEARCH_SYNONYMS,
		payload: {
			word,
		},
	}
}

export function searchSynonymsSuccess(data: string[]): ISearchSynonymsSuccess {
	return {
		type: SEARCH_SYNONYMS_SUCCESS,
		payload: data,
	}
}

export function searchSynonymsFail(error: any): ISearchSynonymsFail {
	return {
		type: SEARCH_SYNONYMS_FAIL,
		payload: error,
	}
}
