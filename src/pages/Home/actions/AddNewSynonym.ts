import {
	ADD_NEW_SYNONYM_FAIL,
	ADD_NEW_SYNONYM,
	ADD_NEW_SYNONYM_SUCCESS,
} from '../constants'
import {
	IAddNewSynonym,
	IAddNewSynonymFail,
	IAddNewSynonymSuccess,
} from '../interfaces/IAddNewSynonym'

export function addNewSynonym(word: string, synonym: string): IAddNewSynonym {
	return {
		type: ADD_NEW_SYNONYM,
		payload: {
			word,
			synonym,
		},
	}
}

export function addNewSynonymSuccess(): IAddNewSynonymSuccess {
	return {
		type: ADD_NEW_SYNONYM_SUCCESS,
	}
}

export function addNewSynonymFail(error: any): IAddNewSynonymFail {
	return {
		type: ADD_NEW_SYNONYM_FAIL,
		payload: error,
	}
}
