import { ItemStack, getItemById } from './item';
import Recipe from './recipe';

interface UncraftingRecipeDef
{
	/** 原料 */
	source: ItemStack;
	/** 產品 */
	product?: ItemStack[];
	/** 分解時間 (秒) */
	time: number;
	/** 是否與合成配方相同 */
	sameAsCrafting: boolean;
}

export interface UncraftingRecipe
{
	/** 原料 */
	source: ItemStack;
	/** 產品 */
	product: ItemStack[];
	/** 分解時間 (秒) */
	time: number;
	/** 是否與合成配方相同 */
	sameAsCrafting: boolean;
}


const recipe: UncraftingRecipeDef[] = [
	{ source: { id: "welding_tool", amount: 1 }, time: 10, sameAsCrafting: true },
	{ source: { id: "plasma_cutter", amount: 1 }, time: 10, sameAsCrafting: true },
	{ source: { id: "screwdriver", amount: 1 }, time: 10, sameAsCrafting: true },
	{ source: { id: "wrench", amount: 1 }, time: 10, sameAsCrafting: true },
	{ source: { id: "crowbar", amount: 1 }, time: 10, sameAsCrafting: true },

	// 獨立配方
	{
		source: { id: "adrenaline_gland", amount: 1 },
		product: [{ id: "adrenaline", amount: 4 }],
		time: 10, sameAsCrafting: false
	},
	{
		source: { id: "swim_bladder", amount: 1 },
		product: [{ id: "stabilozine", amount: 2 }, { id: "saline", amount: 1 }],
		time: 10, sameAsCrafting: false
	},




	// 礦物
	{
		source: { id: "amblygonite", amount: 1 },
		product: [{ id: "lithium", amount: 1 }, { id: "aluminium", amount: 1 }, { id: "sodium", amount: 1 }],
		time: -1, sameAsCrafting: false
	},
	{
		source: { id: "aragonite", amount: 1 },
		product: [{ id: "calcium", amount: 1 }],
		time: -1, sameAsCrafting: false
	},
	{
		source: { id: "bornite", amount: 1 },
		product: [{ id: "organic_fiber", amount: 1 }],
		time: -1, sameAsCrafting: false
	},
	{
		source: { id: "brockite", amount: 1 },
		product: [{ id: "phosphorus", amount: 1 }, { id: "thorium", amount: 1 }],
		time: -1, sameAsCrafting: false
	},
	{
		source: { id: "cassiterite", amount: 1 },
		product: [{ id: "tin", amount: 3 }],
		time: -1, sameAsCrafting: false
	},
	{
		source: { id: "chalcopyrite", amount: 1 },
		product: [{ id: "copper", amount: 1 }],
		time: -1, sameAsCrafting: false
	},
	{
		source: { id: "chamosite", amount: 1 },
		product: [{ id: "iron", amount: 2 }, { id: "aluminium", amount: 2 }],
		time: -1, sameAsCrafting: false
	},
	{
		source: { id: "chrysoprase", amount: 1 },
		product: [{ id: "silicon", amount: 1 }],
		time: -1, sameAsCrafting: false
	},
	{
		source: { id: "diamond", amount: 1 },
		product: [{ id: "carbon", amount: 3 }],
		time: -1, sameAsCrafting: false
	},
	{
		source: { id: "esperite", amount: 1 },
		product: [{ id: "zinc", amount: 1 }, { id: "lead", amount: 1 }],
		time: -1, sameAsCrafting: false
	},
	{
		source: { id: "galena", amount: 1 },
		product: [{ id: "lead", amount: 3 }],
		time: -1, sameAsCrafting: false
	},
	{
		source: { id: "graphite", amount: 1 },
		product: [{ id: "carbon", amount: 2 }],
		time: -1, sameAsCrafting: false
	},
	{
		source: { id: "hydroxyapatite", amount: 1 },
		product: [{ id: "calcium", amount: 1 }, { id: "phosphorus", amount: 2 }],
		time: -1, sameAsCrafting: false
	},
	{
		source: { id: "ilmenite", amount: 1 },
		product: [{ id: "titanium", amount: 1 }],
		time: -1, sameAsCrafting: false
	},
	{
		source: { id: "iron_ore", amount: 1 },
		product: [{ id: "iron", amount: 4 }],
		time: -1, sameAsCrafting: false
	},
	{
		source: { id: "langbeinite", amount: 1 },
		product: [{ id: "potassium", amount: 1 }, { id: "magnesium", amount: 2 }],
		time: -1, sameAsCrafting: false
	},
	{
		source: { id: "lazulite", amount: 1 },
		product: [{ id: "phosphorus", amount: 1 }, { id: "iron", amount: 1 }],
		time: -1, sameAsCrafting: false
	},
	{
		source: { id: "polyhalite", amount: 1 },
		product: [{ id: "potassium", amount: 1 }, { id: "calcium", amount: 1 }],
		time: -1, sameAsCrafting: false
	},
	{
		source: { id: "pyromorphite", amount: 1 },
		product: [{ id: "chlorine", amount: 2 }],
		time: -1, sameAsCrafting: false
	},
	{
		source: { id: "quartz", amount: 1 },
		product: [{ id: "silicon", amount: 2 }],
		time: -1, sameAsCrafting: false
	},
	{
		source: { id: "sphalerite", amount: 1 },
		product: [{ id: "zinc", amount: 3 }],
		time: -1, sameAsCrafting: false
	},
	{
		source: { id: "stannite", amount: 1 },
		product: [{ id: "copper", amount: 1 }, { id: "iron", amount: 1 }, { id: "tin", amount: 1 }],
		time: -1, sameAsCrafting: false
	},
	{
		source: { id: "sylvite", amount: 1 },
		product: [{ id: "sodium", amount: 1 }, { id: "potassium", amount: 1 }],
		time: -1, sameAsCrafting: false
	},
	{
		source: { id: "thorianite", amount: 1 },
		product: [{ id: "thorium", amount: 2 }],
		time: -1, sameAsCrafting: false
	},
	{
		source: { id: "titanite", amount: 1 },
		product: [{ id: "titanium", amount: 3 }, { id: "iron", amount: 1 }],
		time: -1, sameAsCrafting: false
	},
	{
		source: { id: "triphylite", amount: 1 },
		product: [{ id: "lithium", amount: 1 }],
		time: -1, sameAsCrafting: false
	},
	{
		source: { id: "uranium_ore", amount: 1 },
		product: [{ id: "uranium", amount: 3 }],
		time: 5, sameAsCrafting: false
	},





	// 外星物品
	{
		source: { id: "alien_trinket", amount: 1 },
		product: [{ id: "oxygenite_shard", amount: 1 }],
		time: -1, sameAsCrafting: false
	},
	{
		source: { id: "alien_curio", amount: 1 },
		product: [{ id: "sulphurite_shard", amount: 1 }],
		time: -1, sameAsCrafting: false
	},
	{
		source: { id: "alien_ornament", amount: 1 },
		product: [{ id: "physicorium_bar", amount: 1 }],
		time: -1, sameAsCrafting: false
	},
	{
		source: { id: "sky_alien_artifact", amount: 1 },
		product: [{ id: "steel_bar", amount: 1 }, { id: "oxygenite_shard", amount: 3 }],
		time: 30, sameAsCrafting: false
	},
	{
		source: { id: "thermal_alien_artifact", amount: 1 },
		product: [{ id: "steel_bar", amount: 1 }, { id: "incendium_bar", amount: 3 }],
		time: 30, sameAsCrafting: false
	},
	{
		source: { id: "faraday_alien_artifact", amount: 1 },
		product: [{ id: "steel_bar", amount: 1 }, { id: "fulgurium_bar", amount: 3 }],
		time: 30, sameAsCrafting: false
	},
	{
		source: { id: "nasonov_alien_artifact", amount: 1 },
		product: [{ id: "steel_bar", amount: 1 }, { id: "physicorium_bar", amount: 3 }],
		time: 30, sameAsCrafting: false
	},
	{
		source: { id: "psychosis_alien_artifact", amount: 1 },
		product: [{ id: "steel_bar", amount: 1 }, { id: "dementonite_bar", amount: 3 }],
		time: 30, sameAsCrafting: false
	},
	{
		source: { id: "mudraptor_egg", amount: 1 },
		product: [{ id: "alien_blood", amount: 1 }],
		time: -1, sameAsCrafting: false
	},
	{
		source: { id: "ancient_weapon", amount: 1 },
		product: [{ id: "steel_bar", amount: 2 }, { id: "fulgurium_bar", amount: 1 }],
		time: 20, sameAsCrafting: false
	},








	// 植物
	{
		source: { id: "aquatic_poppy", amount: 1 },
		product: [{ id: "opium", amount: 3 }],
		time: -1, sameAsCrafting: false
	},
	{
		source: { id: "slime_bacteria", amount: 1 },
		product: [{ id: "broad_spectrum_antibiotics", amount: 3 }],
		time: -1, sameAsCrafting: false
	},
	{
		source: { id: "sea_yeast_shroom", amount: 1 },
		product: [{ id: "ethanol", amount: 3 }],
		time: -1, sameAsCrafting: false
	},
	{
		source: { id: "fiber_plant", amount: 1 },
		product: [{ id: "organic_fiber", amount: 3 }],
		time: -1, sameAsCrafting: false
	},
	{
		source: { id: "elastin_plant", amount: 1 },
		product: [{ id: "elastin", amount: 3 }],
		time: -1, sameAsCrafting: false
	},
]

const finalRecipe: UncraftingRecipe[] = recipe.map(unrecipe => 
{
	if (!unrecipe.sameAsCrafting)
	{
		return unrecipe as UncraftingRecipe;
	}

	const fullRecipe = [...Recipe.fabricatorRecipe, ...Recipe.medicalfabricatorRecipe];
	let product: ItemStack[] = [];
	const craftingRecipe = fullRecipe.find(item => item.product.id === unrecipe.source.id);
	if (craftingRecipe)
	{
		product = craftingRecipe.material;
	}

	return { ...unrecipe, product };
});

const checker = (target: UncraftingRecipe[]) =>
{
	target.forEach((recipe, index) => 
	{
		const product = recipe.source;
		const itemData = getItemById(product.id);
		if (itemData === undefined)
			console.error(`No source item '${product.id}' found in uncrafting recipe[${index}]`);

		recipe.product.forEach(material => 
		{
			if (getItemById(material.id) === undefined)
				if (product)
					console.error(`No product item '${material.id}' found in uncrafting recipe '${product.id}'`);
				else
					console.error(`No product item '${material.id}' found in uncrafting recipe[${index}]`);
		});
	});
}
checker(finalRecipe);

export default finalRecipe;