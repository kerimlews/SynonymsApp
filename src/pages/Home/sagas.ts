import { put, call, takeLatest, all } from 'redux-saga/effects'
import { IAddNewSynonymPayload } from './interfaces/IAddNewSynonym'
import { ISearchSynonymsPayload } from './interfaces/ISearchSynonyms'
import { ADD_NEW_SYNONYM, SEARCH_SYNONYMS } from './constants'
import { get, post } from 'utils/ajax'
import {
	searchSynonymsSuccess,
	searchSynonymsFail,
} from './actions/SearchSynonyms'
import {
	addNewSynonymSuccess,
	addNewSynonymFail,
} from './actions/AddNewSynonym'

const addNewSynonymRequest = (data: IAddNewSynonymPayload) => post('add', data)
const searchSynonymsRequest = (word: string) => get(`search/${word}`)

function* addNewSynonym({ payload }: any) {
	try {
		yield call(addNewSynonymRequest, { ...payload })
		yield put(addNewSynonymSuccess())
	} catch (error) {
		yield put(addNewSynonymFail(error))
	}
}

function* searchSynonyms({ payload }: any) {
	try {
		const result = yield call(searchSynonymsRequest, payload.word)
		yield put(searchSynonymsSuccess(result))
	} catch (error) {
		yield put(searchSynonymsFail(error))
	}
}

export default function* watchUser() {
	yield all([
		takeLatest(ADD_NEW_SYNONYM, addNewSynonym),
		takeLatest(SEARCH_SYNONYMS, searchSynonyms),
	])
}
