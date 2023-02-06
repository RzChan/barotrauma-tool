import React from 'react';
import { contextData } from 'store/ContextStore';
import ItemInfoBox from 'component/ItemInfoBox';

const ItemInfoBoxGlobal = () =>
{
	const store = React.useContext(contextData);
	const itemId = store.itemInfoBox.itemId;

	if (!itemId)
		return null;

	return <ItemInfoBox itemId={itemId} onClick={store.itemInfoBox.setItemId} />;
}

export default ItemInfoBoxGlobal;