import Recipes, { Recipe } from './recipe';
import UnRecipes, { UncraftingRecipe } from './uncrafting-recipe';

interface GroupARecipe extends Recipe
{
	craftingStation: "fabricator" | "medical fabricator";
}

interface GroupBRecipe extends UncraftingRecipe
{
	craftingStation: "deconstructor";
}

export type GroupRecipe = GroupARecipe | GroupBRecipe;

type CraftingStation = GroupRecipe["craftingStation"];

const fullRecipes: GroupRecipe[] = [
	...Recipes.fabricatorRecipe.map<GroupRecipe>(item => ({ ...item, craftingStation: "fabricator" })),
	...Recipes.medicalfabricatorRecipe.map<GroupRecipe>(item => ({ ...item, craftingStation: "medical fabricator" })),
	...UnRecipes.map<GroupRecipe>(item => ({ ...item, craftingStation: "deconstructor" })),
];

const craftingstationIcon = (craftingStation: CraftingStation) =>
{
	switch(craftingStation)
	{
		case "fabricator":
			return "img/hammer-icon.png";
		case "medical fabricator":
			return "img/medical-icon.png";
		case "deconstructor":
			return "img/recycle-icon.png";
	}
}

export { fullRecipes, craftingstationIcon };