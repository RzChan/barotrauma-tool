import React from 'react';
import ItemInfoBoxGlobal from './ItemInfoBoxGlobal';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { contextData } from 'store/ContextStore';

const ItemInfoBoxModalGlobal = () =>
{
	const store = React.useContext(contextData);
	const infoBox = store.itemInfoBox;

	return <Modal isOpen={infoBox.isOpen} style={{ maxWidth: "720px" }} toggle={infoBox.close} centered>
		<ModalHeader toggle={infoBox.close}>
		</ModalHeader>
		<ModalBody>
			<ItemInfoBoxGlobal />
		</ModalBody>
	</Modal>;
}

export default ItemInfoBoxModalGlobal;