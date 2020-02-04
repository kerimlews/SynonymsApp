import {
	ADD_NEW_SYNONYM,
	ADD_NEW_SYNONYM_SUCCESS,
	ADD_NEW_SYNONYM_FAIL,
} from '../constants'

export interface IAddNewSynonymPayload {
	word: string
	synonym: string
}

export interface IAddNewSynonym {
	type: typeof ADD_NEW_SYNONYM
	payload: IAddNewSynonymPayload
}

export interface IAddNewSynonymSuccess {
	type: typeof ADD_NEW_SYNONYM_SUCCESS
}

export interface IAddNewSynonymFail {
	type: typeof ADD_NEW_SYNONYM_FAIL
	payload: string
}
