export type AnyFunction = (...args: any[]) => any

export interface IStringMap<T> {
	[key: string]: T
}

export type Action<T extends string = string, P = void> = P extends void
	? Readonly<{ type: T }>
	: Readonly<{ type: T; payload: P }>

export type ActionsUnion<A extends IStringMap<AnyFunction>> = ReturnType<A[keyof A]>

export type ActionsOfType<
	ActionUnion,
	ActionType extends string
> = ActionUnion extends Action<ActionType> ? ActionUnion : never

export function createAction<T extends string>(type: T): Action<T>

export function createAction<T extends string, P>(type: T, payload: P): Action<T, P>

export function createAction<T extends string, P>(type: T, payload?: P) {
	return payload === undefined ? { type } : { type, payload }
}
