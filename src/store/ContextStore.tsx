import * as React from 'react';
import { stores, ContextState } from './config';
export type { ContextState } from './config';

type StoreState = ContextState & InternalState;

const context = React.createContext<StoreState>({} as any);

type SetState = <K extends keyof StoreState>(
	state: ((prevState: Readonly<StoreState>, props: Readonly<any>) => (Pick<StoreState, K> | StoreState | null)) | (Pick<StoreState, K> | StoreState | null),
	callback?: () => void
) => void;

type GetState = () => StoreState;

export type GetStore = (setState: SetState, getState: GetState) => Partial<StoreState>;

interface InternalState
{
	/** 重新初始化 store 資料 */
	resetStore: (onFinish?: (newState: StoreState) => void) => void;
}



/**
 *  儲存共用狀態的元件
 * 
 *  將此元件包在App的外層，底下的子元件就可以透過Context取得共用資料
 */
class ContextStore extends React.Component<{}, StoreState>
{
	constructor(prop: {})
	{
		super(prop);

		// 將 store 初始化，加入 state
		const _setState = this.setState.bind(this);
		this.state = {} as any;
		stores.forEach((getStore) =>
		{
			let store = getStore(_setState as any, this.getState);
			this.state = { ...this.state, ...store };
		});
		this.state = { ...this.state, resetStore: this.resetStore };
	}

	/** 取得狀態 */
	public getState = () =>
	{
		return this.state;
	}

	/** 重置 store */
	public resetStore = (onFinish?: (newState: StoreState) => void) =>
	{
		const _setState = this.setState.bind(this);
		let newState = {} as any;
		stores.forEach((getStore) =>
		{
			let store = getStore(_setState as any, this.getState);
			newState = { ...newState, ...store };
		});
		newState = { ...newState, resetStore: this.resetStore };
		this.setState(newState, () => { if (onFinish) onFinish(this.state) });
	}

	public render()
	{
		return <context.Provider value={this.state}>
			{this.props.children}
		</context.Provider>
	}
}

export default ContextStore;
export { context as contextData }