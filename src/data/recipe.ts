import { ItemStack, getItemById } from './item';

export interface Recipe
{
	/** 產品 */
	product: ItemStack;
	/** 材料 */
	material: ItemStack[];
	/** 製作時間 (秒) */
	time: number;
	/** 需求技能 */
	requireSkill: RequrieSkill[];
}

export interface RequrieSkill
{
	skill: string;
	level: number;
}

const fabricatorRecipe: Recipe[] = [
	/*
		===========================================================
		工具
		===========================================================
	*/

	// 焊接工具
	{
		product: { id: "welding_tool", amount: 1 },
		material: [{ id: "steel_bar", amount: 1 }, { id: "plastic", amount: 1 }],
		time: 20,
		requireSkill: [{ skill: "mechanical", level: 30 }]
	},
	// 切割工具
	{
		product: { id: "plasma_cutter", amount: 1 },
		material: [{ id: "steel_bar", amount: 1 }, { id: "plastic", amount: 1 }],
		time: 20,
		requireSkill: [{ skill: "mechanical", level: 30 }]
	},
	// 螺絲刀
	{
		product: { id: "screwdriver", amount: 1 },
		material: [{ id: "iron", amount: 1 }],
		time: 5,
		requireSkill: []
	},
	// 板手
	{
		product: { id: "wrench", amount: 1 },
		material: [{ id: "iron", amount: 1 }],
		time: 5,
		requireSkill: []
	},
	// 鐵撬
	{
		product: { id: "crowbar", amount: 1 },
		material: [{ id: "iron", amount: 1 }],
		time: 20,
		requireSkill: [{ skill: "mechanical", level: 30 }]
	},

	/*
		===========================================================
		裝備
		===========================================================
	*/

	// 水下推進器
	{
		product: { id: "underwater_scooter", amount: 1 },
		material: [{ id: "aluminium", amount: 2 }],
		time: 30,
		requireSkill: [{ skill: "mechanical", level: 30 }]
	},
	// 潛水面罩
	{
		product: { id: "diving_mask", amount: 1 },
		material: [{ id: "rubber", amount: 2 }, { id: "plastic", amount: 1 }],
		time: 20,
		requireSkill: [{ skill: "mechanical", level: 25 }]
	},
	// 潛水服
	{
		product: { id: "diving_suit", amount: 1 },
		material: [{ id: "rubber", amount: 2 }, { id: "titanium-aluminium_alloy", amount: 1 }],
		time: 30,
		requireSkill: [{ skill: "mechanical", level: 40 }]
	},
	// 手電筒
	{
		product: { id: "flashlight", amount: 1 },
		material: [{ id: "aluminium", amount: 1 }, { id: "light_component", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "mechanical", level: 25 }]
	},
	// 手持聲納
	{
		product: { id: "handheld_sonar", amount: 1 },
		material: [{ id: "fpga_circuit", amount: 1 }, { id: "plastic", amount: 1 }],
		time: 20,
		requireSkill: [{ skill: "mechanical", level: 30 }]
	},
	// 聲納信標
	{
		product: { id: "sonar_beacon", amount: 1 },
		material: [{ id: "fpga_circuit", amount: 1 }, { id: "plastic", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "mechanical", level: 30 }]
	},
	// 防彈頭盔
	{
		product: { id: "ballistic_helmet", amount: 1 },
		material: [{ id: "ballistic_fiber", amount: 1 }],
		time: 20,
		requireSkill: [{ skill: "weapons", level: 30 }]
	},
	// 炮手頭盔
	{
		product: { id: "gunner_helmet", amount: 1 },
		material: [{ id: "ballistic_fiber", amount: 1 }],
		time: 20,
		requireSkill: [{ skill: "weapons", level: 30 }]
	},
	// 防暴頭盔
	{
		product: { id: "riot_helmet", amount: 1 },
		material: [{ id: "ballistic_fiber", amount: 1 }],
		time: 20,
		requireSkill: [{ skill: "weapons", level: 30 }]
	},
	// 防彈衣
	{
		product: { id: "body_armor", amount: 1 },
		material: [{ id: "ballistic_fiber", amount: 2 }],
		time: 30,
		requireSkill: [{ skill: "weapons", level: 40 }]
	},
	// 手銬
	{
		product: { id: "handcuffs", amount: 1 },
		material: [{ id: "steel_bar", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "weapons", level: 20 }]
	},
	// 健康掃描器
	{
		product: { id: "health_scanner_hud", amount: 1 },
		material: [{ id: "fpga_circuit", amount: 1 }, { id: "plastic", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "mechanical", level: 30 }, { skill: "medical", level: 50 }]
	},
	// 耳機
	{
		product: { id: "headset", amount: 1 },
		material: [{ id: "fpga_circuit", amount: 1 }, { id: "plastic", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "mechanical", level: 30 }]
	},
	// 工具箱
	{
		product: { id: "toolbox", amount: 1 },
		material: [{ id: "steel_bar", amount: 1 }],
		time: 20,
		requireSkill: [{ skill: "mechanical", level: 20 }]
	},
	// 滅火器
	{
		product: { id: "fire_extinguisher", amount: 1 },
		material: [{ id: "aluminium", amount: 1 }, { id: "sodium", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "mechanical", level: 20 }]
	},
	// 照明彈
	{
		product: { id: "flare", amount: 1 },
		material: [{ id: "flash_powder", amount: 0.25 }, { id: "plastic", amount: 0.25 }],
		time: 5,
		requireSkill: []
	},

	/*
		===========================================================
		補給
		===========================================================
	*/

	// 電池
	{
		product: { id: "battery_cell", amount: 1 },
		material: [{ id: "zinc", amount: 1 }, { id: "lithium", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "electrical	", level: 25 }]
	},
	// 雷素電池
	{
		product: { id: "fulgurium_battery_cell", amount: 1 },
		material: [{ id: "zinc", amount: 1 }, { id: "fulgurium_bar", amount: 1 }],
		time: 15,
		requireSkill: [{ skill: "electrical	", level: 40 }]
	},
	// 氧氣瓶(空)
	{
		product: { id: "oxygen_tank_empty", amount: 1 },
		material: [{ id: "aluminium", amount: 1 }],
		time: 0,
		requireSkill: []
	},
	// 液氧罐
	{
		product: { id: "oxygenite_tank", amount: 1 },
		material: [{ id: "aluminium", amount: 1 }, { id: "liquid_oxygenite", amount: 2 }],
		time: 5,
		requireSkill: []
	},
	// 焊接油箱
	{
		product: { id: "welding_fuel_tank", amount: 1 },
		material: [{ id: "aluminium", amount: 1 }, { id: "ethanol", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "mechanical", level: 20 }]
	},
	// 燃素燃料罐
	{
		product: { id: "incendium_fuel_tank", amount: 1 },
		material: [{ id: "aluminium", amount: 1 }, { id: "incendium_bar", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "mechanical", level: 40 }]
	},
	// 鈾燃料棒
	{
		product: { id: "fuel_rod", amount: 1 },
		material: [{ id: "steel_bar", amount: 1 }, { id: "lead", amount: 1 }, { id: "uranium", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "mechanical", level: 25 }]
	},
	// 釷燃料棒
	{
		product: { id: "thorium_fuel_rod", amount: 1 },
		material: [{ id: "steel_bar", amount: 1 }, { id: "lead", amount: 1 }, { id: "thorium", amount: 1 }],
		time: 15,
		requireSkill: [{ skill: "mechanical", level: 60 }]
	},
	// 雷素燃料棒
	{
		product: { id: "fulgurium_fuel_rod", amount: 1 },
		material: [{ id: "steel_bar", amount: 1 }, { id: "lead", amount: 1 }, { id: "fulgurium_bar", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "mechanical", level: 40 }]
	},

	/*
		===========================================================
		武器
		===========================================================
	*/

	// 魚叉
	{
		product: { id: "spear", amount: 1 },
		material: [{ id: "steel_bar", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "weapons", level: 20 }]
	},
	// 爆炸魚叉
	{
		product: { id: "explosive_spear", amount: 1 },
		material: [{ id: "spear", amount: 1 }, { id: "c-4_block", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "weapons", level: 30 }]
	},
	// 剛素魚叉
	{
		product: { id: "physicorium_spear", amount: 1 },
		material: [{ id: "physicorium_bar", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "weapons", level: 30 }]
	},
	// 魚叉槍用的魚叉槍
	{
		product: { id: "harpoon_gun", amount: 1 },
		material: [{ id: "steel_bar", amount: 1 }, { id: "plastic", amount: 1 }],
		time: 20,
		requireSkill: [{ skill: "weapons", level: 30 }]
	},
	// 注射器槍
	{
		product: { id: "syringe_gun", amount: 1 },
		material: [{ id: "aluminium", amount: 1 }, { id: "plastic", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "medical", level: 50 }]
	},
	// 震撼手榴彈
	{
		product: { id: "stun_grenade", amount: 1 },
		material: [{ id: "iron", amount: 1 }, { id: "phosphorus", amount: 1 }, { id: "flash_powder", amount: 1 }],
		time: 20,
		requireSkill: [{ skill: "weapons", level: 30 }]
	},
	// EMP手榴彈
	{
		product: { id: "emp_grenade", amount: 1 },
		material: [{ id: "iron", amount: 1 }, { id: "copper", amount: 1 }, { id: "uex", amount: 1 }],
		time: 20,
		requireSkill: [{ skill: "weapons", level: 50 }]
	},
	// 破片手榴彈
	{
		product: { id: "frag_grenade", amount: 1 },
		material: [{ id: "iron", amount: 1 }, { id: "uex", amount: 1 }],
		time: 20,
		requireSkill: [{ skill: "weapons", level: 60 }]
	},
	// 燃素手榴彈
	{
		product: { id: "incendium_grenade", amount: 1 },
		material: [{ id: "iron", amount: 1 }, { id: "incendium_bar", amount: 1 }],
		time: 20,
		requireSkill: [{ skill: "weapons", level: 40 }]
	},
	// 電擊甩棍
	{
		product: { id: "stun_baton", amount: 1 },
		material: [{ id: "steel_bar", amount: 1 }, { id: "plastic", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "weapons", level: 30 }]
	},
	// 電擊槍
	{
		product: { id: "stun_gun", amount: 1 },
		material: [{ id: "steel_bar", amount: 1 }, { id: "plastic", amount: 1 }],
		time: 20,
		requireSkill: [{ skill: "weapons", level: 40 }]
	},
	// 電擊槍(電擊彈)
	{
		product: { id: "stun_gun_dart", amount: 1 },
		material: [{ id: "steel_bar", amount: 1 }, { id: "wire", amount: 1 }],
		time: 20,
		requireSkill: [{ skill: "weapons", level: 30 }]
	},
	// 潛水刀
	{
		product: { id: "diving_knife", amount: 1 },
		material: [{ id: "iron", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "weapons", level: 30 }]
	},
	// 40mm榴彈
	{
		product: { id: "40mm_grenade", amount: 1 },
		material: [{ id: "iron", amount: 1 }, { id: "uex", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "weapons", level: 30 }]
	},
	// 40mm震撼榴彈
	{
		product: { id: "40mm_stun_grenade", amount: 1 },
		material: [{ id: "iron", amount: 1 }, { id: "phosphorus", amount: 1 }, { id: "flash_powder", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "weapons", level: 30 }]
	},
	// UEX
	{
		product: { id: "uex", amount: 1 },
		material: [{ id: "sodium", amount: 1 }, { id: "phosphorus", amount: 1 }],
		time: 20,
		requireSkill: [{ skill: "weapons", level: 60 }]
	},
	// C-4炸藥
	{
		product: { id: "c-4_block", amount: 1 },
		material: [{ id: "uex", amount: 1 }, { id: "plastic", amount: 1 }],
		time: 20,
		requireSkill: [{ skill: "weapons", level: 70 }]
	},
	// IC-4炸藥
	{
		product: { id: "ic-4_block", amount: 1 },
		material: [{ id: "c-4_block", amount: 1 }, { id: "incendium_bar", amount: 1 }],
		time: 20,
		requireSkill: [{ skill: "weapons", level: 50 }]
	},
	// 電磁槍彈藥匣
	{
		product: { id: "coilgun_ammunition_box", amount: 1 },
		material: [{ id: "aluminium", amount: 1 }, { id: "steel_bar", amount: 1 }],
		time: 20,
		requireSkill: [{ skill: "weapons", level: 25 }]
	},
	// 剛素彈藥箱
	{
		product: { id: "physicorium_ammo_box", amount: 1 },
		material: [{ id: "aluminium", amount: 1 }, { id: "steel_bar", amount: 1 }, { id: "physicorium_bar", amount: 1 }],
		time: 20,
		requireSkill: [{ skill: "weapons", level: 40 }]
	},
	// 爆破彈藥箱
	{
		product: { id: "exploding_ammunition_box", amount: 1 },
		material: [{ id: "steel_bar", amount: 1 }, { id: "aluminium", amount: 1 }, { id: "uex", amount: 1 }],
		time: 20,
		requireSkill: [{ skill: "weapons", level: 50 }]
	},
	// 穿甲彈藥箱
	{
		product: { id: "piercing_ammunition_box", amount: 1 },
		material: [{ id: "aluminium", amount: 1 }, { id: "titanium", amount: 1 }],
		time: 20,
		requireSkill: [{ skill: "weapons", level: 30 }]
	},
	// 軌道炮炮彈
	{
		product: { id: "railgun_shell", amount: 1 },
		material: [{ id: "steel_bar", amount: 1 }],
		time: 20,
		requireSkill: [{ skill: "weapons", level: 25 }]
	},
	// 核彈
	{
		product: { id: "nuclear_shell", amount: 1 },
		material: [{ id: "steel_bar", amount: 1 }, { id: "uranium", amount: 1 }, { id: "uex", amount: 1 }],
		time: 30,
		requireSkill: [{ skill: "weapons", level: 40 }]
	},
	// 剛素炮彈
	{
		product: { id: "physicorium_railgun_shell", amount: 1 },
		material: [{ id: "physicorium_bar", amount: 1 }],
		time: 20,
		requireSkill: [{ skill: "weapons", level: 30 }]
	},
	// 深水炸彈
	{
		product: { id: "depth_charge_shell", amount: 1 },
		material: [{ id: "steel_bar", amount: 1 }, { id: "aluminium", amount: 1 }],
		time: 20,
		requireSkill: [{ skill: "weapons", level: 25 }]
	},
	// 核能深水炸彈
	{
		product: { id: "nuclear_depth_charge", amount: 1 },
		material: [{ id: "steel_bar", amount: 1 }, { id: "uranium", amount: 1 }, { id: "uex", amount: 1 }],
		time: 30,
		requireSkill: [{ skill: "weapons", level: 40 }]
	},
	// 深潛誘餌
	{
		product: { id: "depth_decoy_shell", amount: 1 },
		material: [{ id: "steel_bar", amount: 1 }, { id: "aluminium", amount: 1 }, { id: "sonar_beacon", amount: 1 }],
		time: 20,
		requireSkill: [{ skill: "weapons", level: 25 }]
	},
	// 核能深潛誘餌
	{
		product: { id: "nuclear_depth_decoy", amount: 1 },
		material: [{ id: "steel_bar", amount: 1 }, { id: "uranium", amount: 1 }, { id: "uex", amount: 1 }, { id: "sonar_beacon", amount: 1 }],
		time: 30,
		requireSkill: [{ skill: "weapons", level: 40 }]
	},

	/*
		===========================================================
		材料
		===========================================================
	*/
	// 鋼筋
	{
		product: { id: "steel_bar", amount: 1 },
		material: [{ id: "carbon", amount: 1 }, { id: "iron", amount: 1 }],
		time: 5,
		requireSkill: [{ skill: "mechanical", level: 20 }]
	},
	// 鈦鋁合金
	{
		product: { id: "titanium-aluminium_alloy", amount: 1 },
		material: [{ id: "titanium", amount: 1 }, { id: "aluminium", amount: 1 }],
		time: 5,
		requireSkill: [{ skill: "mechanical", level: 30 }]
	},
	// 塑膠
	{
		product: { id: "plastic", amount: 1 },
		material: [{ id: "silicon", amount: 1 }, { id: "carbon", amount: 1 }],
		time: 5,
		requireSkill: [{ skill: "mechanical", level: 30 }]
	},
	// 防彈纖維
	{
		product: { id: "ballistic_fiber", amount: 1 },
		material: [{ id: "plastic", amount: 1 }, { id: "titanium", amount: 1 }],
		time: 5,
		requireSkill: [{ skill: "mechanical", level: 40 }]
	},
	// 閃光粉
	{
		product: { id: "flash_powder", amount: 1 },
		material: [{ id: "magnesium", amount: 1 }, { id: "potassium", amount: 1 }],
		time: 5,
		requireSkill: [{ skill: "mechanical", level: 40 }]
	},



	/*
		===========================================================
		電器
		===========================================================
	*/
	// 紅色導線
	{
		product: { id: "red_wire", amount: 1 },
		material: [{ id: "copper", amount: 0.2 }, { id: "rubber", amount: 0.2 }],
		time: 5,
		requireSkill: []
	},
	// 藍色導線
	{
		product: { id: "blue_wire", amount: 1 },
		material: [{ id: "copper", amount: 0.2 }, { id: "rubber", amount: 0.2 }],
		time: 5,
		requireSkill: []
	},
	// 橘色導線
	{
		product: { id: "orange_wire", amount: 1 },
		material: [{ id: "copper", amount: 0.2 }, { id: "rubber", amount: 0.2 }],
		time: 5,
		requireSkill: []
	},
	// 綠色導線
	{
		product: { id: "green_wire", amount: 1 },
		material: [{ id: "copper", amount: 0.2 }, { id: "rubber", amount: 0.2 }],
		time: 5,
		requireSkill: []
	},
	// 黑色導線
	{
		product: { id: "black_wire", amount: 1 },
		material: [{ id: "copper", amount: 0.2 }, { id: "rubber", amount: 0.2 }],
		time: 5,
		requireSkill: []
	},
	// 棕色導線
	{
		product: { id: "brown_wire", amount: 1 },
		material: [{ id: "copper", amount: 0.2 }, { id: "rubber", amount: 0.2 }],
		time: 5,
		requireSkill: []
	},
	// FPGA電路
	{
		product: { id: "fpga_circuit", amount: 1 },
		material: [{ id: "copper", amount: 1 }, { id: "rubber", amount: 1 }],
		time: 5,
		requireSkill: [{ skill: "electrical	", level: 15 }]
	},
	// 與邏輯門
	{
		product: { id: "and_component", amount: 1 },
		material: [{ id: "fpga_circuit", amount: 1 }, { id: "tin", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "electrical	", level: 20 }]
	},
	// 等於組件
	{
		product: { id: "equals_component", amount: 1 },
		material: [{ id: "fpga_circuit", amount: 1 }, { id: "tin", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "electrical	", level: 20 }]
	},
	// 數值相比組件
	{
		product: { id: "greater_component", amount: 1 },
		material: [{ id: "fpga_circuit", amount: 1 }, { id: "tin", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "electrical	", level: 20 }]
	},
	// 數值相比組件
	{
		product: { id: "greater_component", amount: 1 },
		material: [{ id: "fpga_circuit", amount: 1 }, { id: "tin", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "electrical	", level: 20 }]
	},
	// 加法邏輯門
	{
		product: { id: "adder_component", amount: 1 },
		material: [{ id: "fpga_circuit", amount: 1 }, { id: "tin", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "electrical	", level: 20 }]
	},
	// 顏色元件
	{
		product: { id: "color_component", amount: 1 },
		material: [{ id: "fpga_circuit", amount: 1 }, { id: "tin", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "electrical	", level: 20 }]
	},
	// 減法組件
	{
		product: { id: "subtract_component", amount: 1 },
		material: [{ id: "fpga_circuit", amount: 1 }, { id: "tin", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "electrical	", level: 20 }]
	},
	// 乘法組件
	{
		product: { id: "multiply_component", amount: 1 },
		material: [{ id: "fpga_circuit", amount: 1 }, { id: "tin", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "electrical	", level: 20 }]
	},
	// 除法組件
	{
		product: { id: "divide_component", amount: 1 },
		material: [{ id: "fpga_circuit", amount: 1 }, { id: "tin", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "electrical	", level: 20 }]
	},
	// 或邏輯門
	{
		product: { id: "or_component", amount: 1 },
		material: [{ id: "fpga_circuit", amount: 1 }, { id: "tin", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "electrical	", level: 20 }]
	},
	// 異或組件
	{
		product: { id: "xor_component", amount: 1 },
		material: [{ id: "fpga_circuit", amount: 1 }, { id: "tin", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "electrical	", level: 20 }]
	},
	// 否邏輯門
	{
		product: { id: "not_component", amount: 1 },
		material: [{ id: "fpga_circuit", amount: 1 }, { id: "tin", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "electrical	", level: 20 }]
	},
	// 正弦元件
	{
		product: { id: "sin_component", amount: 1 },
		material: [{ id: "fpga_circuit", amount: 1 }, { id: "tin", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "electrical	", level: 20 }]
	},
	// 余弦元件
	{
		product: { id: "cos_component", amount: 1 },
		material: [{ id: "fpga_circuit", amount: 1 }, { id: "tin", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "electrical	", level: 20 }]
	},
	// 正切元件
	{
		product: { id: "tan_component", amount: 1 },
		material: [{ id: "fpga_circuit", amount: 1 }, { id: "tin", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "electrical	", level: 20 }]
	},
	// 角A正弦元件
	{
		product: { id: "asin_component", amount: 1 },
		material: [{ id: "fpga_circuit", amount: 1 }, { id: "tin", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "electrical	", level: 20 }]
	},
	// 角A余弦元件
	{
		product: { id: "acos_component", amount: 1 },
		material: [{ id: "fpga_circuit", amount: 1 }, { id: "tin", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "electrical	", level: 20 }]
	},
	// 角A正切元件
	{
		product: { id: "atan_component", amount: 1 },
		material: [{ id: "fpga_circuit", amount: 1 }, { id: "tin", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "electrical	", level: 20 }]
	},
	// 整元件
	{
		product: { id: "round_component", amount: 1 },
		material: [{ id: "fpga_circuit", amount: 1 }, { id: "tin", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "electrical	", level: 20 }]
	},
	// 上整元件
	{
		product: { id: "ceil_component", amount: 1 },
		material: [{ id: "fpga_circuit", amount: 1 }, { id: "tin", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "electrical	", level: 20 }]
	},
	// 下整元件
	{
		product: { id: "floor_component", amount: 1 },
		material: [{ id: "fpga_circuit", amount: 1 }, { id: "tin", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "electrical	", level: 20 }]
	},
	// 階乘元件
	{
		product: { id: "factorial_component", amount: 1 },
		material: [{ id: "fpga_circuit", amount: 1 }, { id: "tin", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "electrical	", level: 20 }]
	},
	// 絕對值元件
	{
		product: { id: "abs_component", amount: 1 },
		material: [{ id: "fpga_circuit", amount: 1 }, { id: "tin", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "electrical	", level: 20 }]
	},
	// 平方根元件
	{
		product: { id: "square_root_component", amount: 1 },
		material: [{ id: "fpga_circuit", amount: 1 }, { id: "tin", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "electrical	", level: 20 }]
	},
	// 模元件
	{
		product: { id: "modulo_component", amount: 1 },
		material: [{ id: "fpga_circuit", amount: 1 }, { id: "tin", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "electrical	", level: 20 }]
	},
	// 繼電邏輯門
	{
		product: { id: "relay_component", amount: 1 },
		material: [{ id: "fpga_circuit", amount: 1 }, { id: "tin", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "electrical	", level: 20 }]
	},
	// 延遲邏輯門
	{
		product: { id: "delay_component", amount: 1 },
		material: [{ id: "fpga_circuit", amount: 1 }, { id: "tin", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "electrical	", level: 20 }]
	},
	// 記憶體元件
	{
		product: { id: "memory_component", amount: 1 },
		material: [{ id: "fpga_circuit", amount: 1 }, { id: "tin", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "electrical	", level: 20 }]
	},
	// 信號檢查組件
	{
		product: { id: "signal_check_component", amount: 1 },
		material: [{ id: "fpga_circuit", amount: 1 }, { id: "tin", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "electrical	", level: 20 }]
	},
	// 規則運算式查找組件
	{
		product: { id: "regex_find_component", amount: 1 },
		material: [{ id: "fpga_circuit", amount: 1 }, { id: "tin", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "electrical	", level: 20 }]
	},
	// 振盪器
	{
		product: { id: "oscillator", amount: 1 },
		material: [{ id: "fpga_circuit", amount: 1 }, { id: "tin", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "electrical	", level: 20 }]
	},
	// Wifi組件
	{
		product: { id: "wifi_component", amount: 1 },
		material: [{ id: "fpga_circuit", amount: 1 }, { id: "tin", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "electrical	", level: 20 }]
	},
	// 光學元件
	{
		product: { id: "light_component", amount: 1 },
		material: [{ id: "fpga_circuit", amount: 1 }, { id: "phosphorus", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "electrical	", level: 20 }]
	},
	// 氧含量感測器
	{
		product: { id: "oxygen_detector", amount: 1 },
		material: [{ id: "fpga_circuit", amount: 1 }, { id: "silicon", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "electrical	", level: 30 }]
	},
	// 水感測器
	{
		product: { id: "water_detector", amount: 1 },
		material: [{ id: "fpga_circuit", amount: 1 }, { id: "silicon", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "electrical	", level: 30 }]
	},
	// 煙霧感測器
	{
		product: { id: "smoke_detector", amount: 1 },
		material: [{ id: "fpga_circuit", amount: 1 }, { id: "silicon", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "electrical	", level: 30 }]
	},
	// 位移感測器
	{
		product: { id: "motion_detector", amount: 1 },
		material: [{ id: "fpga_circuit", amount: 1 }, { id: "silicon", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "electrical	", level: 30 }]
	},
	// 應急警報器
	{
		product: { id: "emergency_siren", amount: 1 },
		material: [{ id: "fpga_circuit", amount: 1 }, { id: "steel_bar", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "electrical	", level: 30 }]
	},
	// 蜂鳴報警器
	{
		product: { id: "alarm_buzzer", amount: 1 },
		material: [{ id: "fpga_circuit", amount: 1 }, { id: "tin", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "electrical	", level: 30 }]
	},
	// 按鈕
	{
		product: { id: "button", amount: 1 },
		material: [{ id: "fpga_circuit", amount: 1 }, { id: "plastic", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "electrical	", level: 25 }]
	},
	// 開關
	{
		product: { id: "switch", amount: 1 },
		material: [{ id: "fpga_circuit", amount: 1 }, { id: "plastic", amount: 1 }],
		time: 10,
		requireSkill: []
	},
	// 控制杆
	{
		product: { id: "lever", amount: 1 },
		material: [{ id: "fpga_circuit", amount: 1 }, { id: "plastic", amount: 1 }],
		time: 10,
		requireSkill: [{ skill: "electrical	", level: 25 }]
	},



	/*
		===========================================================
		雜項
		===========================================================
	*/
	// 玩具錘子
	{
		product: { id: "toy_hammer", amount: 1 },
		material: [{ id: "bike_horn", amount: 1 }, { id: "plastic", amount: 1 }],
		time: 5,
		requireSkill: []
	},
];


const medicalfabricatorRecipe: Recipe[] = [
	// 活性纖維
	{
		product: { id: "bandage", amount: 1 },
		material: [{ id: "organic_fiber", amount: 1 }],
		time: 60,
		requireSkill: [{ skill: "medical", level: 5 }]
	},
	// 可塑人造皮膚
	{
		product: { id: "plastiseal", amount: 1 },
		material: [{ id: "bandage", amount: 1 }, { id: "elastin", amount: 1 }],
		time: 60,
		requireSkill: [{ skill: "medical", level: 16 }]
	},
	// 抗生素凝膠
	{
		product: { id: "antibiotic_glue", amount: 1 },
		material: [{ id: "stabilozine", amount: 1 }, { id: "broad_spectrum_antibiotics", amount: 1 }, { id: "elastin", amount: 1 }],
		time: 60,
		requireSkill: [{ skill: "medical", level: 48 }]
	},
	// 嗎啡
	{
		product: { id: "morphine", amount: 1 },
		material: [{ id: "opium", amount: 2 }],
		time: 60,
		requireSkill: [{ skill: "medical", level: 18 }]
	},
	// 芬太尼
	{
		product: { id: "fentanyl", amount: 1 },
		material: [{ id: "morphine", amount: 1 }, { id: "adrenaline", amount: 1 }, { id: "ethanol", amount: 1 }],
		time: 60,
		requireSkill: [{ skill: "medical", level: 50 }]
	},
	// 生理鹽水
	{
		product: { id: "saline", amount: 1 },
		material: [{ id: "sodium", amount: 1 }, { id: "chlorine", amount: 1 }],
		time: 60,
		requireSkill: [{ skill: "medical", level: 14 }]
	},
	// 血袋
	{
		product: { id: "blood_pack", amount: 1 },
		material: [{ id: "alien_blood", amount: 1 }, { id: "saline", amount: 1 }, { id: "stabilozine", amount: 1 }],
		time: 60,
		requireSkill: [{ skill: "medical", level: 31 }]
	},
	// 神效劑
	{
		product: { id: "deusizine", amount: 1 },
		material: [{ id: "antibiotic_glue", amount: 1 }, { id: "fentanyl", amount: 1 }, { id: "liquid_oxygenite", amount: 1 }],
		time: 60,
		requireSkill: [{ skill: "medical", level: 70 }]
	},
	// 液態氧礦
	{
		product: { id: "liquid_oxygenite", amount: 1 },
		material: [{ id: "tonic_liquid", amount: 1 }, { id: "stabilozine", amount: 1 }, { id: "oxygenite_shard", amount: 1 }],
		time: 60,
		requireSkill: [{ skill: "medical", level: 45 }]
	},
	// 皮蟲淨
	{
		product: { id: "calyxanide", amount: 1 },
		material: [{ id: "velonaceps_calyx_eggs", amount: 0.25 }, { id: "broad_spectrum_antibiotics", amount: 1 }, { id: "stabilozine", amount: 1 }],
		time: 60,
		requireSkill: [{ skill: "medical", level: 22 }]
	},
	// 氟呱啶醇
	{
		product: { id: "haloperidol", amount: 1 },
		material: [{ id: "lithium", amount: 1 }, { id: "carbon", amount: 1 }, { id: "chlorine", amount: 1 }],
		time: 60,
		requireSkill: [{ skill: "medical", level: 21 }]
	},
	// 烯丙羥嗎啡酮
	{
		product: { id: "naloxone", amount: 1 },
		material: [{ id: "morphine", amount: 1 }, { id: "stabilozine", amount: 1 }],
		time: 60,
		requireSkill: [{ skill: "medical", level: 23 }]
	},
	// 窒死毒劑解毒劑
	{
		product: { id: "morbusine_antidote", amount: 1 },
		material: [{ id: "morbusine", amount: 0.25 }, { id: "stabilozine", amount: 0.25 }],
		time: 60,
		requireSkill: [{ skill: "medical", level: 28 }]
	},
	// 氰化物解藥
	{
		product: { id: "cyanide_antidote", amount: 1 },
		material: [{ id: "cyanide", amount: 1 }, { id: "stabilozine", amount: 1 }],
		time: 60,
		requireSkill: [{ skill: "medical", level: 26 }]
	},
	// 升天解藥
	{
		product: { id: "sufforin_antidote", amount: 1 },
		material: [{ id: "sufforin", amount: 1 }, { id: "stabilozine", amount: 1 }],
		time: 60,
		requireSkill: [{ skill: "medical", level: 24 }]
	},
	// 譫妄解藥
	{
		product: { id: "deliriumine_antidote", amount: 1 },
		material: [{ id: "deliriumine", amount: 1 }, { id: "stabilozine", amount: 1 }],
		time: 60,
		requireSkill: [{ skill: "medical", level: 25 }]
	},
	// 消輻靈
	{
		product: { id: "antirad", amount: 1 },
		material: [{ id: "radiotoxin", amount: 1 }, { id: "stabilozine", amount: 1 }],
		time: 60,
		requireSkill: [{ skill: "medical", level: 35 }]
	},
	// 麻痹治癒劑
	{
		product: { id: "anapralyzant", amount: 1 },
		material: [{ id: "paralyzant", amount: 1 }, { id: "stabilozine", amount: 1 }],
		time: 60,
		requireSkill: [{ skill: "medical", level: 24 }]
	},
	// 內用輔液
	{
		product: { id: "tonic_liquid", amount: 1 },
		material: [{ id: "calcium", amount: 1 }, { id: "zinc", amount: 1 }, { id: "potassium", amount: 1 }],
		time: 90,
		requireSkill: [{ skill: "medical", level: 45 }]
	},
	// 興奮粉劑
	{
		product: { id: "methamphetamine", amount: 1 },
		material: [{ id: "phosphorus", amount: 1 }, { id: "chlorine", amount: 1 }, { id: "carbon", amount: 1 }],
		time: 90,
		requireSkill: [{ skill: "medical", level: 46 }]
	},
	// 合成代謝類固醇
	{
		product: { id: "anabolic_steroids", amount: 1 },
		material: [{ id: "tonic_liquid", amount: 1 }, { id: "fentanyl", amount: 1 }],
		time: 90,
		requireSkill: [{ skill: "medical", level: 47 }]
	},
	// 加速粉劑
	{
		product: { id: "hyperzine", amount: 1 },
		material: [{ id: "methamphetamine", amount: 1 }, { id: "anabolic_steroids", amount: 1 }],
		time: 90,
		requireSkill: [{ skill: "medical", level: 48 }]
	},
	// 窒死毒劑
	{
		product: { id: "morbusine", amount: 1 },
		material: [{ id: "sulphuric_acid", amount: 1 }, { id: "deusizine", amount: 2 }],
		time: 90,
		requireSkill: [{ skill: "medical", level: 58 }]
	},
	// 水合三氯乙醛
	{
		product: { id: "chloral_hydrate", amount: 1 },
		material: [{ id: "chlorine", amount: 1 }, { id: "ethanol", amount: 1 }],
		time: 90,
		requireSkill: [{ skill: "medical", level: 50 }]
	},
	// 氰化物毒劑
	{
		product: { id: "cyanide", amount: 1 },
		material: [{ id: "chloral_hydrate", amount: 1 }, { id: "sodium", amount: 1 }],
		time: 90,
		requireSkill: [{ skill: "medical", level: 54 }]
	},
	// 輻射毒劑
	{
		product: { id: "radiotoxin", amount: 1 },
		material: [{ id: "thorium", amount: 1 }, { id: "uranium", amount: 1 }],
		time: 90,
		requireSkill: [{ skill: "medical", level: 56 }]
	},
	// 升天毒劑
	{
		product: { id: "sufforin", amount: 1 },
		material: [{ id: "sulphuric_acid", amount: 1 }, { id: "flash_powder", amount: 1 }],
		time: 90,
		requireSkill: [{ skill: "medical", level: 60 }]
	},
	// 譫妄毒劑
	{
		product: { id: "deliriumine", amount: 1 },
		material: [{ id: "dementonite_bar", amount: 1 }],
		time: 90,
		requireSkill: [{ skill: "medical", level: 50 }]
	},
	// 麻痹劑
	{
		product: { id: "paralyzant", amount: 1 },
		material: [{ id: "chloral_hydrate", amount: 1 }, { id: "paralyxis", amount: 1 }],
		time: 60,
		requireSkill: [{ skill: "medical", level: 40 }]
	},
	// 疊氮化合物
	{
		product: { id: "compound_n", amount: 1 },
		material: [{ id: "aluminium", amount: 1 }, { id: "potassium", amount: 1 }, { id: "sulphuric_acid", amount: 1 }],
		time: 20,
		requireSkill: [{ skill: "medical", level: 60 }]
	},
	// 揮發性疊氮化合物
	{
		product: { id: "volatile_compound_n", amount: 1 },
		material: [{ id: "compound_n", amount: 1 }, { id: "flash_powder", amount: 1 }],
		time: 20,
		requireSkill: [{ skill: "medical", level: 40 }]
	},
	// 閃光粉
	{
		product: { id: "flash_powder", amount: 1 },
		material: [{ id: "magnesium", amount: 1 }, { id: "potassium", amount: 1 }],
		time: 5,
		requireSkill: []
	},
];

const checker = (target: Recipe[]) =>
{
	target.forEach((recipe, index) => 
	{
		const product = recipe.product;
		const itemData = getItemById(product.id);
		if (itemData === undefined)
			console.error(`No product item '${product.id}' found in recipe[${index}]`);

		recipe.material.forEach(material => 
		{
			if (getItemById(material.id) === undefined)
				if (product)
					console.error(`No material item '${material.id}' found in recipe '${product.id}'`);
				else
					console.error(`No material item '${material.id}' found in recipe[${index}]`);
		});
	});
}
checker(fabricatorRecipe);
checker(medicalfabricatorRecipe);

export default { fabricatorRecipe, medicalfabricatorRecipe };