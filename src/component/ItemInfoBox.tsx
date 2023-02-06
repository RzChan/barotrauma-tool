import * as React from 'react';
import { Item } from 'data/item';
import Recipes, { Recipe } from 'data/recipe';
import UncraftRecipes, { UncraftingRecipe } from 'data/uncrafting-recipe';
import ItemBox from './ItemBox';
import { contextData } from 'store/ContextStore';

export interface ItemInfoBoxProps
{
	itemId: string;
	onClick?: (itemId: string) => void;
}

const insertBetweenEvery = (array: Array<any>, func: (i: number) => JSX.Element) =>
{
	const newArray = [...array];
	const length = array.length;
	for (let i = 0; i < length - 1; i++)
	{
		newArray.splice(i * 2 + 1, 0, func(length + 1 + i));
	}

	return newArray;
}

const ItemInfoBox = (props: ItemInfoBoxProps) =>
{
	const store = React.useContext(contextData);
	const uiLang = store.database.ui;
	const getItemById = store.database.getItemById;
	const [item, setItem] = React.useState<Item>(getItemById(props.itemId));
	const [crafting, setCrafting] = React.useState<Recipe[]>([]);
	const [selfCrafting, setSelfCrafting] = React.useState<Recipe | null>(null);
	const [uncrafting, setUncrafting] = React.useState<UncraftingRecipe[]>([]);
	const [selfUncrafting, setSelfUncrafting] = React.useState<UncraftingRecipe | null>(null);


	React.useEffect(() =>
	{
		setItem(getItemById(props.itemId));

		// 用於製作配方
		const fabCrafting = Recipes.fabricatorRecipe.filter(item => item.material.some(item => item.id === props.itemId));
		const medCrafting = Recipes.medicalfabricatorRecipe.filter(item => item.material.some(item => item.id === props.itemId));
		setCrafting([...fabCrafting, ...medCrafting]);

		// 可從分解配方獲得
		const uncrafting = UncraftRecipes.filter(item => item.product.some(item => item.id === props.itemId));
		setUncrafting(uncrafting);

		// 此物品的製作配方
		const selfCraftFab = Recipes.fabricatorRecipe.find(item => item.product.id === props.itemId);
		const selfCraftMed = Recipes.medicalfabricatorRecipe.find(item => item.product.id === props.itemId);
		setSelfCrafting(selfCraftFab || selfCraftMed || null);

		// 此物品的分解配方
		const selfUncraft = UncraftRecipes.find(item => item.source.id === props.itemId);
		setSelfUncrafting(selfUncraft || null);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props.itemId]);

	const craftRecipeRender = (recipe: Recipe, key?: number) =>
	{
		return <div key={key} className="d-flex">
			{
				recipe.product.id === props.itemId ?
					<ItemBox itemStack={recipe.product} style={{ background: "#ffdb90" }} /> :
					<ItemBox itemStack={recipe.product} onClick={props.onClick} />
			}

			<i className="fa fa-arrow-left w3-large px-2" style={{ alignSelf: "center" }} aria-hidden="true" />
			{insertBetweenEvery(recipe.material.map((item, i) =>
			{
				if (item.id === props.itemId)
					return <ItemBox key={i} itemStack={item} style={{ background: "#ffdb90" }} />;
				else
					return <ItemBox key={i} itemStack={item} onClick={props.onClick} />;
			}),
				i => <i key={i} className="fa fa-plus w3-large px-2" style={{ alignSelf: "center" }} aria-hidden="true" />)}
		</div>;
	}

	const uncraftRecipeRender = (recipe: UncraftingRecipe, key?: number) =>
	{
		return <div key={key} className="d-flex">
			{
				recipe.source.id === props.itemId ?
					<ItemBox itemStack={recipe.source} style={{ background: "#ffdb90" }} /> :
					<ItemBox itemStack={recipe.source} onClick={props.onClick} />
			}
			<i className="fa fa-arrow-right w3-large px-2" style={{ alignSelf: "center" }} aria-hidden="true" />
			{insertBetweenEvery(recipe.product.map((item, i) =>
			{
				if (item.id === props.itemId)
					return <ItemBox key={i} itemStack={item} style={{ background: "#ffdb90" }} />;
				else
					return <ItemBox key={i} itemStack={item} onClick={props.onClick} />;
			}),
				i => <i key={i} className="fa fa-plus w3-large px-2" style={{ alignSelf: "center" }} aria-hidden="true" />)}
		</div>;
	}

	return <div className="d-flex py-3">
		<div className="d-flex" style={{ flex: "0 0 120px", justifyContent: "center", alignItems: "center", maxHeight: "80vh" }}>
			<img src={item.img_path} alt="" style={{ maxWidth: "80px", maxHeight: "80px" }} />
		</div>
		<div style={{ flex: "1 0 0" }}>
			<div className="mb-2" style={{ fontSize: "22px", fontWeight: "bold" }}>{item.name_locale}</div>
			<div className="border-bottom w3-large">
				{uiLang["in game description"]}
			</div>
			<div className="pl-4 mb-2">
				{item.desc}
			</div>
			{
				selfCrafting && <>
					<div className="border-bottom w3-large">
						{uiLang["crafting recipe"]}
					</div>
					<div className="pl-4 mb-2">
						{craftRecipeRender(selfCrafting)}
					</div>
				</>
			}
			{
				uncrafting.length > 0 && <>
					<div className="border-bottom w3-large">
						{uiLang["can obtain from deconstruct"]}
					</div>
					<div className="pl-4 mb-2">
						{uncrafting.map((item, i) => uncraftRecipeRender(item, i))}
					</div>
				</>
			}
			{
				crafting.length > 0 && <>
					<div className="border-bottom w3-large">
						{uiLang["can use to craft"]}
					</div>
					<div className="pl-4 mb-2">
						{crafting.map((item, i) => craftRecipeRender(item, i))}
					</div>
				</>
			}
			{
				selfUncrafting && <>
					<div className="border-bottom w3-large">
						{uiLang["deconstruct recipe"]}
					</div>
					<div className="pl-4 mb-2">
						{uncraftRecipeRender(selfUncrafting)}
					</div>
				</>
			}
		</div>

	</div>;
}

export default ItemInfoBox;