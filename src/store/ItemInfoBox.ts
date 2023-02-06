import { GetStore } from 'store/ContextStore';


export interface ItemInfoBoxState
{
	isOpen: boolean;
	itemId: string | null;
	setItemId: (itemId: string) => void;
	open: (itemId: string) => void;
	close: () => void;
}

const getStore: GetStore = (setState, getState) =>
{
	const setItemId = (itemId: string) =>
	{
		setState(prev => ({ ...prev, itemInfoBox: { ...prev.itemInfoBox, itemId } }));
	}

	const open = (itemId: string) =>
	{
		setState(prev => ({ ...prev, itemInfoBox: { ...prev.itemInfoBox, itemId, isOpen: true } }));
	}

	const close = () =>
	{
		setState(prev => ({ ...prev, itemInfoBox: { ...prev.itemInfoBox, isOpen: false } }));
	}

	return {
		itemInfoBox: {
			isOpen: false,
			itemId: null,
			setItemId,
			open,
			close
		} as ItemInfoBoxState
	}
}

export default getStore;