import * as React from 'react';
import { ItemStack } from 'data/item';
import classnames from 'classnames'
import { contextData } from 'store/ContextStore';

interface Props
{
	itemStack: ItemStack;
	style?: React.CSSProperties;
	onClick?: (itemId: string) => void;
}

const ItemBox = (props: Props) =>
{
	const store = React.useContext(contextData);
	const getItemById = store.database.getItemById;
	const style = props.style || {};
	const itemStack = props.itemStack;
	const item = getItemById(itemStack.id);
	const amount = itemStack.amount;
	const displayAmount = amount === 1 ? null : amount > 1 ? `${amount}x ` : `${Math.round(amount * 100)}%`;

	return <div className="d-inline-block px-1 w3-center"
		style={{ minWidth: "50px", maxWidth: "85px", ...style }}>
		<div className={classnames("d-inline-block", { "w3-button": !!props.onClick, "p-0": !!props.onClick })}
			onClick={() => props.onClick && props.onClick(props.itemStack.id)} style={{ width: "100%" }}>
			<div className="m-auto d-flex" style={{ width: "45px", height: "45px", justifyContent: "center", alignItems: "center" }}>
				<img className="item" alt={item.name} src={item.img_path} />
			</div>
			<div style={{ whiteSpace: "pre-wrap", overflow: "hidden", textOverflow: "ellipsis" }}>{displayAmount}{item.name_locale}</div>
		</div>
	</div>;
}

export default ItemBox;