import isEmptyLodash from 'lodash/isEmpty'
import isString from 'lodash/isString'

export function isEmpty(value: any): boolean {
	return isString(value) ? value.length > 0 : isEmptyLodash(value)
}
