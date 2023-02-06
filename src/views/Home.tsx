import React from 'react';

import { fullRecipes, GroupRecipe, craftingstationIcon } from 'data';
import { contextData } from 'store/ContextStore';

import { Input, Label, FormGroup } from 'reactstrap';
import ItemBox from 'component/ItemBox';

const Home = () =>
{
	const store = React.useContext(contextData);
	const uiLang = store.database.ui;
	const getItemById = store.database.getItemById;
	const [fabricatorList, setFabricatorList] = React.useState<GroupRecipe[]>([]);
	const [search, setSearch] = React.useState("");
	const [enableFabricator, setEnableFabricator] = React.useState(true);
	const [enableMedical, setEnableMedical] = React.useState(true);
	const [enableDestructor, setEnableDestructor] = React.useState(true);


	React.useEffect(() =>
	{
		if (!store.database.ready)
			return;

		const keyword = search;
		const filteredList = fullRecipes.filter(item =>
		{
			if (!enableFabricator && item.craftingStation === "fabricator") return false;
			if (!enableMedical && item.craftingStation === "medical fabricator") return false;
			if (!enableDestructor && item.craftingStation === "deconstructor") return false;
			if (search === "") return true;

			switch (item.craftingStation)
			{
				case "fabricator":
				case "medical fabricator":
					{
						const product = getItemById(item.product.id);
						const match1 = product.name.toLowerCase().indexOf(keyword) > - 1 ||
							product.name_locale.toLowerCase().indexOf(keyword) > -1;

						if (match1) return true;

						const match2 = item.material.some(item =>
						{
							const _item = getItemById(item.id);
							return _item.name.toLowerCase().indexOf(keyword) > - 1 || _item.name_locale.toLowerCase().indexOf(keyword) > -1;
						})
						return match2;
					}
				case "deconstructor":
					{
						const source = getItemById(item.source.id);
						const match1 = source.name.toLowerCase().indexOf(keyword) > - 1 ||
							source.name_locale.toLowerCase().indexOf(keyword) > -1;

						if (match1) return true;

						const match2 = item.product.some(item =>
						{
							const _item = getItemById(item.id);
							return _item.name.toLowerCase().indexOf(keyword) > - 1 || _item.name_locale.toLowerCase().indexOf(keyword) > -1;
						})
						return match2;
					}
			}
		});
		setFabricatorList(filteredList);
	}, [search, enableFabricator, enableMedical, enableDestructor, store.database.ready]);

	const onSelectItem = store.itemInfoBox.open;

	const fabFilter = (e: React.ChangeEvent<HTMLInputElement>) =>
	{
		setSearch(e.currentTarget.value);
	}

	if (!store.database.ready)
		return null;

	return <div>
		<div className="container-fluid" style={{ maxWidth: "1280px" }}>
			<div className="m-2 p-2" style={{ background: "#dcdddf", position: "relative", overflow: "hidden" }}>
				<div style={{ position: "absolute", top: "-10px", right: "40px", zIndex: 0 }}>
					<img src="img/machine/fabricator.png" alt="" style={{ width: "160px", opacity: 0.5 }} />
				</div>
				<div className="py-2" style={{ position: "relative", zIndex: 1 }}>
					<div className="border-bottom border-dark mb-2 w3-large" style={{ marginTop: "60px" }}>
						{uiLang["recipe"]}
					</div>
					<Input onChange={fabFilter} placeholder={uiLang["search(placeholder)"]} />
					<div>
						<FormGroup check inline>
							<Label check>
								<Input type="checkbox" checked={enableFabricator}
									onChange={() => setEnableFabricator(prev => !prev)} />
								<img className="mr-1" src={craftingstationIcon("fabricator")} style={{ width: "18px" }} />
								{uiLang["fabricator recipe"]}
							</Label>
						</FormGroup>
						<FormGroup check inline>
							<Label check>
								<Input type="checkbox" checked={enableMedical}
									onChange={() => setEnableMedical(prev => !prev)} />
								<img className="mr-1" src={craftingstationIcon("medical fabricator")} style={{ width: "18px" }} />
								{uiLang["medical fabricator recipe"]}
							</Label>
						</FormGroup>
						<FormGroup check inline>
							<Label check>
								<Input type="checkbox" checked={enableDestructor}
									onChange={() => setEnableDestructor(prev => !prev)} />
									<img className="mr-1" src={craftingstationIcon("deconstructor")} style={{ width: "18px" }} />
								{uiLang["deconstructor recipe"]}
							</Label>
						</FormGroup>
					</div>
				</div>
				<table className="w3-table w3-border w3-bordered w3-striped vertical-center" style={{ position: "relative", zIndex: 1 }} >
					<thead>
						<tr className="w3-indigo">
							<th className="w3-center">
								{uiLang["product"]}
								<div>({uiLang["item"]})</div>
							</th>
							<th>{uiLang["material"]}
								<div>({uiLang["deconstruct material"]})</div>
							</th>
							<th>{uiLang["crafting time"]}
								<div>({uiLang["deconstruct time"]})</div>
							</th>
							<th>{uiLang["require skill"]}</th>
							<th>{uiLang["crafting station"]}</th>
						</tr>
					</thead>
					<tbody>
						{
							fabricatorList.map((item, index) =>
							{
								switch (item.craftingStation)
								{
									case "fabricator":
									case "medical fabricator":
										{
											const product = item.product;
											const materials = item.material;

											return <tr key={index}>
												<td style={{ width: "120px" }}>
													<ItemBox itemStack={product} style={{ width: "100%" }} onClick={onSelectItem} />
												</td>
												<td >
													{materials.map((item, index) => <ItemBox key={index} itemStack={item} onClick={onSelectItem} />)}
												</td>
												<td >
													<i className="fa fa-clock-o w3-large px-2" aria-hidden="true" />
													{item.time} {uiLang["second(s)"]}
												</td>
												<td>
													{item.requireSkill.map((item, index) => <div key={index}>{uiLang[item.skill]} {uiLang["level"]} {item.level}</div>)}
												</td>
												<td>
													<img className="mr-2" src={craftingstationIcon(item.craftingStation)} style={{ width: "24px" }} />
													{uiLang[item.craftingStation]}
												</td>
											</tr>;
										}
									case "deconstructor":
										{
											const source = item.source;
											const products = item.product;

											return <tr key={index}>
												<td style={{ width: "120px" }}>
													<ItemBox itemStack={source} style={{ width: "100%" }} onClick={onSelectItem} />
												</td>
												<td >
													{products.map((item, index) => <ItemBox key={index} itemStack={item} onClick={onSelectItem} />)}
												</td>
												<td >
													<i className="fa fa-clock-o w3-large px-2" aria-hidden="true" />
													{item.time === -1 ? "?" : <>{item.time} {uiLang["second(s)"]} </>}
												</td>
												<td>
													-
												</td>
												<td>
													<img className="mr-2" src={craftingstationIcon(item.craftingStation)} style={{ width: "24px" }} />
													{uiLang[item.craftingStation]}
												</td>
											</tr>;
										}
								}
							})
						}
					</tbody>
				</table>
			</div>
		</div>
	</div>;
}

export default Home;
