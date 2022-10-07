import { Mock } from '@/domain'
import { createAction, ActionsUnion, Action } from '@/store'

export enum MockActionKeys {
	FETCH_MOCK_START = '[Mock] FETCH_MOCK_START',
	FETCH_MOCK_SUCCESS = '[Mock] FETCH_MOCK_SUCCESS',
	FETCH_MOCK_FALIED = '[Mock] FETCH_MOCK_FALIED'
}

export const MockActions = {
	fetchMock: (data: Mock): fetchMockAction => createAction(MockActionKeys.FETCH_MOCK_START, data),
	fetchMockSuccess: (Mock: Mock): fetchMockSuccessAction =>
		createAction(MockActionKeys.FETCH_MOCK_SUCCESS, Mock),
	fetchMockFalied: (error: Error): fetchMockFaliedAction =>
		createAction(MockActionKeys.FETCH_MOCK_FALIED, error)
}

export type MockActionUnion = ActionsUnion<typeof MockActions>

export type fetchMockAction = Action<MockActionKeys.FETCH_MOCK_START, Mock>

export type fetchMockSuccessAction = Action<MockActionKeys.FETCH_MOCK_SUCCESS, Mock>

export type fetchMockFaliedAction = Action<MockActionKeys.FETCH_MOCK_FALIED, Error>
