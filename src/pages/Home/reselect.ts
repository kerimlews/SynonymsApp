import { createSelector } from 'reselect'

const homeReducer = (state: any) => state.home

export const selectHome = () =>
	createSelector(homeReducer, (substate: any) => substate)

export const selectHomeIsLoadingAdd = () =>
	createSelector(selectHome(), (substate: any) => ({
		isLoading: substate.isLoadingAdd,
	}))

export const selectHomeIsLoadingSearch = () =>
	createSelector(selectHome(), (substate: any) => ({
		isLoading: substate.isLoadingSearch,
	}))

export const selectHomeSynonyms = () =>
	createSelector(selectHome(), (substate: any) => ({
		synonyms: substate.synonyms,
	}))

export const selectHomeError = () =>
	createSelector(selectHome(), (substate: any) => ({ error: substate.error }))
