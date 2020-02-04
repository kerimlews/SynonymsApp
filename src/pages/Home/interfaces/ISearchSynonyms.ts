import {
	SEARCH_SYNONYMS,
	SEARCH_SYNONYMS_SUCCESS,
	SEARCH_SYNONYMS_FAIL,
} from '../constants'

export interface ISearchSynonymsPayload {
	word: string
}

export interface ISearchSynonyms {
	type: typeof SEARCH_SYNONYMS
	payload: ISearchSynonymsPayload
}

export interface ISearchSynonymsSuccess {
	type: typeof SEARCH_SYNONYMS_SUCCESS
	payload: string[]
}

export interface ISearchSynonymsFail {
	type: typeof SEARCH_SYNONYMS_FAIL
	payload: any
}
