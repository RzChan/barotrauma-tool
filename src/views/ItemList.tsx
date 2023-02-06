import React from 'react';
import { contextData } from 'store/ContextStore';
import ItemBox from 'component/ItemBox';
import { Input } from 'reactstrap';
import { Item } from 'data/item';

const ItemList = () =>
{
	const store = React.useContext(contextData);
	const onClick = store.itemInfoBox.open;
	const [items, setItems] = React.useState<Item[]>([]);
	const [search, setSearch] = React.useState("");
	const uiLang = store.database.ui;

	React.useEffect(() =>
	{
		setItems(store.database.items.filter(item => item.name_locale.indexOf(search) > -1 && !item.hidden));
	}, [store.database.items, search]);

	const filter = (e: React.ChangeEvent<HTMLInputElement>) =>
	{
		const text = e.currentTarget.value;
		setSearch(text);
	}

	return <div className="container-fluid" style={{ maxWidth: "1280px" }}>
		<div className="border-bottom border-dark mb-3" style={{ fontSize: "24px" }}>{uiLang["in game items"]}</div>
		<Input onChange={filter} placeholder={uiLang["search(placeholder)"]} />
		<div className="d-flex p-2" style={{ flexWrap: "wrap", justifyContent:"flex-start", background: "rgb(220, 221, 223)" }}>
			{
				items.map((item, i) => <ItemBox key={i} style={{ flex: "0 0 80px" }} itemStack={{ id: item.id, amount: 1 }} onClick={onClick} />)
			}
		</div>
	</div>;
}

export default ItemList;