export interface Item
{
	/** 識別碼 */
	id: string;
	/** 英文名稱 */
	name: string;
	/** 地區化名稱 */
	name_locale: string;
	/** 圖片位置 */
	img_path: string;
	/** 物品描述 */
	desc?: string;
	/** 標示為隱藏 */
	hidden?: boolean;
}

export interface ItemStack
{
	/** 識別碼 */
	id: string;
	/** 數量 */
	amount: number;
}

const items: Item[] = [
	// 裝備
	{
		id: "underwater_scooter", name: "Underwater Scooter", name_locale: "水下助推器",
		desc: "一種電池驅動的水下推進裝置。",
		img_path: 'img/equipment/underwater_scooter.png'
	},
	{
		id: "diving_mask", name: "Diving Mask", name_locale: "潛水面罩",
		desc: "小巧輕便，可隨身攜帶以防萬一。但當船體完全破裂時，面罩可無法阻礙深海水壓的“擁抱”。",
		img_path: 'img/equipment/diving_mask.png'
	},
	{
		id: "diving_suit", name: "Diving Suit", name_locale: "潛水服",
		desc: "能承受木衛二冰洋深處極高水壓的潛水服。",
		img_path: 'img/equipment/diving_suit.png'
	},
	{
		id: "flashlight", name: "Flashlight", name_locale: "手電筒",
		desc: "手持光源。",
		img_path: 'img/equipment/flashlight.png'
	},
	{
		id: "handheld_sonar", name: "Handheld Sonar", name_locale: "手持聲納",
		desc: "可擕式聲納，便於探測。",
		img_path: 'img/equipment/handheld_sonar.png'
	},
	{
		id: "sonar_beacon", name: "Sonar Beacon", name_locale: "聲納信標",
		desc: "產生一個可由聲納監控器、手持聲納、導航終端檢測到的固定局部信號標識。",
		img_path: 'img/equipment/sonar_beacon.png'
	},
	{
		id: "ballistic_helmet", name: "Ballistic Helmet", name_locale: "防彈頭盔",
		desc: "雖然對於冰洋中的大多數居民來說，它脆弱如紙，但面對船上的叛徒時，它別具奇效。",
		img_path: 'img/equipment/ballistic_helmet.png'
	},
	{
		id: "gunner_helmet", name: "Gunner Helmet", name_locale: "炮手頭盔",
		desc: "比普通頭盔輕一點，不會妨礙佩戴者操縱潛望鏡。",
		img_path: 'img/equipment/gunner_helmet.png'
	},
	{
		id: "riot_helmet", name: "Riot Helmet", name_locale: "防暴頭盔",
		desc: "基於內部防暴用途設計，對外來入侵者同樣有效。",
		img_path: 'img/equipment/riot_helmet.png'
	},
	{
		id: "body_armor", name: "Body Armor", name_locale: "防彈衣",
		desc: "雖然對於冰洋中的大多數居民來說，它脆弱如紙，但面對船上的叛徒時，它別具奇效。",
		img_path: 'img/equipment/body_armor.png'
	},
	{
		id: "handcuffs", name: "Handcuffs", name_locale: "手銬",
		desc: "可用於限制問題玩家。",
		img_path: 'img/equipment/handcuffs.png'
	},
	{
		id: "health_scanner_hud", name: "Health Scanner Hud", name_locale: "健康掃描器",
		desc: "一個能顯示附近人類生命體征與狀態資訊的平板。",
		img_path: 'img/equipment/health_scanner_hud.png'
	},
	{
		id: "headset", name: "Headset", name_locale: "耳機",
		desc: "允許船員之間進行遠端交流。",
		img_path: 'img/equipment/headset.png'
	},
	{
		id: "toolbox", name: "Toolbox", name_locale: "工具箱",
		desc: "用於存放工具的輕便箱子。",
		img_path: 'img/equipment/toolbox.png'
	},
	{
		id: "fire_extinguisher", name: "Fire Extinguisher", name_locale: "滅火器",
		desc: "二氧化碳滅火器。",
		img_path: 'img/equipment/fire_extinguisher.png'
	},
	{
		id: "flare", name: "Flare", name_locale: "照明彈",
		desc: "臨時光源，用於潛艇探索時在潛艇外標記路徑。",
		img_path: 'img/equipment/flare.png'
	},





	// 武器
	{
		id: "spear", name: "Harpoon", name_locale: "魚叉",
		desc: "魚叉槍的“彈藥”。",
		img_path: 'img/weapon/spear.png'
	},
	{
		id: "explosive_spear", name: "Explosive Harpoon", name_locale: "爆炸魚叉",
		desc: "魚叉槍的“彈藥”。",
		img_path: 'img/weapon/explosive_spear.png'
	},
	{
		id: "physicorium_spear", name: "Physicorium Harpoon", name_locale: "剛素魚叉",
		desc: "魚叉槍的“彈藥”。",
		img_path: 'img/weapon/physicorium_spear.png'
	},
	{
		id: "harpoon_gun", name: "Harpoon Gun", name_locale: "魚叉槍用的魚叉槍",
		desc: "可發射魚叉、爆炸魚叉、異星魚叉。",
		img_path: 'img/weapon/harpoon_gun.png'
	},
	{
		id: "syringe_gun", name: "Syringe Gun", name_locale: "注射器槍",
		desc: "發射包含藥物或毒液的注射器。",
		img_path: 'img/weapon/syringe_gun.png'
	},
	{
		id: "stun_grenade", name: "Stun Grenade", name_locale: "震撼手榴彈",
		desc: "爆炸時產生噪音與高光，令一定範圍內的所有人眩暈。",
		img_path: 'img/weapon/stun_grenade.png'
	},
	{
		id: "emp_grenade", name: "Emp Grenade", name_locale: "EMP手榴彈",
		desc: "破壞範圍內所有電氣設備。",
		img_path: 'img/weapon/emp_grenade.png'
	},
	{
		id: "frag_grenade", name: "Frag Grenade", name_locale: "破片手榴彈",
		desc: "制式破片手榴彈，小心使用。",
		img_path: 'img/weapon/frag_grenade.png'
	},
	{
		id: "incendium_grenade", name: "Incendium Grenade", name_locale: "燃素手榴彈",
		desc: "含燃素成分的手榴彈，小心使用。",
		img_path: 'img/weapon/incendium_grenade.png'
	},
	{
		id: "stun_baton", name: "Stun Baton", name_locale: "電擊甩棍",
		desc: "讓那些不服管教的船員在高壓電擊的幫助下學會服從。",
		img_path: 'img/weapon/stun_baton.png'
	},
	{
		id: "stun_gun", name: "Stun Gun", name_locale: "電擊槍",
		desc: "發射電擊針的裝置。",
		img_path: 'img/weapon/stun_gun.png'
	},
	{
		id: "stun_gun_dart", name: "Stun Gun Dart", name_locale: "電擊槍(電擊彈)",
		desc: "造成電擊，使目標失能。非致命。",
		img_path: 'img/weapon/stun_gun_dart.png'
	},
	{
		id: "diving_knife", name: "Diving Knife", name_locale: "潛水刀",
		desc: "刺、戳、切、劃。",
		img_path: 'img/weapon/diving_knife.png'
	},
	{
		id: "40mm_grenade", name: "40mm Grenade", name_locale: "40mm榴彈",
		desc: "榴彈發射器彈藥。",
		img_path: 'img/weapon/40mm_grenade.png'
	},
	{
		id: "40mm_stun_grenade", name: "40mm Stun Grenade", name_locale: "40mm震撼榴彈",
		desc: "榴彈發射器彈藥。非致命。",
		img_path: 'img/weapon/40mm_stun_grenade.png'
	},
	{
		id: "uex", name: "UEX", name_locale: "UEX",
		desc: "一種由鈉與磷組成的簡易炸藥。",
		img_path: 'img/weapon/uex.png'
	},
	{
		id: "c-4_block", name: "C-4 Block", name_locale: "C-4炸藥",
		desc: "一種穩定的炸藥。",
		img_path: 'img/weapon/c-4_block.png'
	},
	{
		id: "ic-4_block", name: "IC-4 Block", name_locale: "IC-4炸藥",
		desc: "一種含燃素成分的C-4炸藥。",
		img_path: 'img/weapon/ic-4_block.png'
	},
	{
		id: "coilgun_ammunition_box", name: "Coilgun Ammunition Box", name_locale: "電磁槍彈藥匣",
		desc: "電磁槍的彈藥",
		img_path: 'img/weapon/coilgun_ammunition_box.png'
	},
	{
		id: "physicorium_ammo_box", name: "Physicorium Ammo Box", name_locale: "剛素彈藥箱",
		desc: "",
		img_path: 'img/weapon/coilgun_ammunition_box.png'
	},
	{
		id: "exploding_ammunition_box", name: "Exploding Ammunition Box", name_locale: "爆破彈藥箱",
		desc: "電磁槍彈藥。命中時爆炸。",
		img_path: 'img/weapon/exploding_ammunition_box.png'
	},
	{
		id: "piercing_ammunition_box", name: "Piercing Ammunition Box", name_locale: "穿甲彈藥箱",
		desc: "電磁槍彈藥。具有穿甲效果。",
		img_path: 'img/weapon/piercing_ammunition_box.png'
	},
	{
		id: "railgun_shell", name: "Railgun Shell", name_locale: "軌道炮炮彈",
		desc: "用軌道炮發射。",
		img_path: 'img/weapon/railgun_shell.png'
	},
	{
		id: "nuclear_shell", name: "Nuclear Shell", name_locale: "核彈",
		desc: "用軌道炮發射的核彈。",
		img_path: 'img/weapon/nuclear_shell.png'
	},
	{
		id: "physicorium_railgun_shell", name: "Physicorium Railgun Shell", name_locale: "剛素炮彈",
		desc: "用電磁槍發射的剛素炮彈。",
		img_path: 'img/weapon/physicorium_railgun_shell.png'
	},
	{
		id: "depth_charge_shell", name: "Depth Charge Shell", name_locale: "深水炸彈",
		desc: "一桶炸彈，投放後會下沉，然後爆炸。",
		img_path: 'img/weapon/depth_charge_shell.png'
	},
	{
		id: "nuclear_depth_charge", name: "Nuclear Depth Charge", name_locale: "核能深水炸彈",
		desc: "一大桶放射性炸彈，投放後會下沉，然後爆炸。",
		img_path: 'img/weapon/nuclear_depth_charge.png'
	},
	{
		id: "depth_decoy_shell", name: "Depth Decoy Shell", name_locale: "深潛誘餌",
		desc: "一種可通過深潛投放器部署的誘餌。投放後會下沉，然後產生一個明顯的聲信號，為潛艇轉移注意力。",
		img_path: 'img/weapon/depth_decoy_shell.png'
	},
	{
		id: "nuclear_depth_decoy", name: "Nuclear Depth Decoy", name_locale: "核能深潛誘餌",
		desc: "一種可通過深潛投放器部署的誘餌。投放後會下沉，然後產生一個明顯的聲信號，為潛艇轉移注意力。",
		img_path: 'img/weapon/depth_decoy_shell.png'
	},
	{
		id: "compound_n", name: "Compound N", name_locale: "疊氮化合物",
		desc: "一種穩定的炸藥。",
		img_path: "img/weapon/volatile_compound_n.png"
	},
	{
		id: "volatile_compound_n", name: "Volatile Compound N", name_locale: "揮發性疊氮化合物",
		desc: "一種不穩定的炸藥。",
		img_path: "img/weapon/volatile_compound_n.png"
	},
	{
		id: "ancient_weapon", name: "Ancient Weapon", name_locale: "遠古兵器",
		desc: "一柄強而有力的武器。",
		img_path: "img/weapon/ancient_weapon.png"
	},







	// 補給
	{
		id: "battery_cell", name: "Battery Cell", name_locale: "電池",
		desc: "各種手持設備的電源。大多數潛艇都有備用的蓄電池與充電塢站。",
		img_path: 'img/supplies/battery_cell.png'
	},
	{
		id: "fulgurium_battery_cell", name: "Fulgurium Battery Cell", name_locale: "雷素電池",
		desc: "由非常罕見，且人類對其知之甚少的雷素構成的電池。",
		img_path: 'img/supplies/fulgurium_battery_cell.png'
	},
	{
		id: "oxygen_tank_empty", name: "Oxygen Tank (Eempty)", name_locale: "氧氣罐(空)",
		desc: "便攜氧氣儲存裝置。",
		img_path: 'img/supplies/oxygen_tank.png'
	},
	{
		id: "oxygen_tank", name: "Oxygen Tank", name_locale: "氧氣罐",
		desc: "便攜氧氣儲存裝置。",
		img_path: 'img/supplies/oxygen_tank.png'
	},
	{
		id: "oxygenite_tank", name: "Oxygenite Tank", name_locale: "液氧罐",
		desc: "裝有液態氧礦的容器。",
		img_path: 'img/supplies/oxygenite_tank.png'
	},
	{
		id: "welding_fuel_tank", name: "Welding Fuel Tank", name_locale: "焊接油箱",
		desc: "焊接工具的燃料。",
		img_path: 'img/supplies/welding_fuel_tank.png'
	},
	{
		id: "incendium_fuel_tank", name: "Incendium Fuel Tank", name_locale: "燃素燃料罐",
		desc: "",
		img_path: 'img/supplies/incendium_fuel_tank.png'
	},
	{
		id: "fuel_rod", name: "Fuel Rod", name_locale: "鈾燃料棒",
		desc: "用於反應堆發電的濃縮鈾棒。",
		img_path: 'img/supplies/fuel_rod.png'
	},
	{
		id: "thorium_fuel_rod", name: "Thorium Fuel Rod", name_locale: "釷燃料棒",
		desc: "用於反應堆發電的濃縮釷棒，比鈾燃料棒產生更多熱量、使用壽命更長。",
		img_path: 'img/supplies/thorium_fuel_rod.png'
	},
	{
		id: "fulgurium_fuel_rod", name: "Fulgurium Fuel Rod", name_locale: "雷素燃料棒",
		desc: "用於反應堆發電的濃縮雷素棒，比鈾燃料棒產生更多熱量、使用壽命更長。",
		img_path: 'img/supplies/fulgurium_fuel_rod.png'
	},





	// 工具
	{
		id: "welding_tool", name: "Welding Tool", name_locale: "焊接工具",
		desc: "潛艇上最重要的工具之一，可在水下工作。",
		img_path: 'img/tool/welding_tool.png'
	},
	{
		id: "plasma_cutter", name: "Plasma Cutter", name_locale: "等離子切割器",
		desc: "通過高溫電離氧氣產生等離子電弧，用於切割各種材料。",
		img_path: 'img/tool/plasma_cutter.png'
	},
	{
		id: "screwdriver", name: "Screwdriver", name_locale: "螺絲刀",
		desc: "用於電器維修與重新佈線的工具。",
		img_path: 'img/tool/screwdriver.png'
	},
	{
		id: "wrench", name: "Wrench", name_locale: "扳手",
		desc: "用於機械維修的工具。",
		img_path: 'img/tool/wrench.png'
	},
	{
		id: "crowbar", name: "Crowbar", name_locale: "翹棍",
		desc: "可以撬開門和艙門，也可以作為鈍器使用。",
		img_path: 'img/tool/crowbar.png'
	},



	// 電器
	{
		id: "wire", name: "Wire (Any)", name_locale: "任意導線",
		img_path: 'img/electrical/red_wire.png',
		hidden: true
	},
	{
		id: "red_wire", name: "Red Wire", name_locale: "紅色導線",
		desc: "在設備間傳輸輸入輸出信號。",
		img_path: 'img/electrical/red_wire.png'
	},
	{
		id: "blue_wire", name: "Blue Wire", name_locale: "藍色導線",
		desc: "在設備間傳輸輸入輸出信號。",
		img_path: 'img/electrical/blue_wire.png'
	},
	{
		id: "orange_wire", name: "Orange Wire", name_locale: "橘色導線",
		desc: "在設備間傳輸輸入輸出信號。",
		img_path: 'img/electrical/orange_wire.png'
	},
	{
		id: "green_wire", name: "Green Wire", name_locale: "綠色導線",
		desc: "在設備間傳輸輸入輸出信號。",
		img_path: 'img/electrical/green_wire.png'
	},
	{
		id: "black_wire", name: "Black Wire", name_locale: "黑色導線",
		desc: "在設備間傳輸輸入輸出信號。",
		img_path: 'img/electrical/black_wire.png'
	},
	{
		id: "brown_wire", name: "Brown Wire", name_locale: "棕色導線",
		desc: "在設備間傳輸輸入輸出信號。",
		img_path: 'img/electrical/brown_wire.png'
	},
	{
		id: "fpga_circuit", name: "FPGA Circuit", name_locale: "FPGA電路",
		desc: "現場可程式設計閘陣列 - 一種可以自訂的多用途電路板，可用於各種電氣設備。",
		img_path: "img/electrical/fpga_circuit.png"
	},
	{
		id: "and_component", name: "And Component", name_locale: "與邏輯門",
		desc: "當兩個輸入端在設定時間內都接收到信號時，輸出一個信號。",
		img_path: "img/electrical/and_component.png"
	},
	{
		id: "equals_component", name: "Equals Component", name_locale: "等於組件",
		desc: "輸入端接收到相同信號時，輸出一個信號。",
		img_path: "img/electrical/equals_component.png"
	},
	{
		id: "greater_component", name: "Greater Component", name_locale: "數值相比組件",
		desc: "如果信號輸入1的值大於信號輸入2的值，輸出一個信號。",
		img_path: "img/electrical/greater_component.png"
	},
	{
		id: "adder_component", name: "Adder Component", name_locale: "加法邏輯門",
		desc: "輸出各輸入信號的和。",
		img_path: "img/electrical/adder_component.png"
	},
	{
		id: "color_component", name: "Color Component", name_locale: "顏色元件",
		desc: "輸出顏色組合信號，以控制照明。",
		img_path: "img/electrical/color_component.png"
	},
	{
		id: "subtract_component", name: "Subtract Component", name_locale: "減法組件",
		desc: "輸出接收信號的差。",
		img_path: "img/electrical/subtract_component.png"
	},
	{
		id: "multiply_component", name: "Multiply Component", name_locale: "乘法組件",
		desc: "輸出接收信號的積。",
		img_path: "img/electrical/multiply_component.png"
	},
	{
		id: "divide_component", name: "Divide Component", name_locale: "除法組件",
		desc: "輸出接收信號的商。",
		img_path: "img/electrical/divide_component.png"
	},
	{
		id: "or_component", name: "Or Component", name_locale: "或邏輯門",
		desc: "如果其中一個輸入端收到信號，輸出一個信號。",
		img_path: "img/electrical/or_component.png"
	},
	{
		id: "xor_component", name: "Xor Component", name_locale: "異或組件",
		desc: "如果輸入端接收到一個信號（而非兩個），則輸出一個信號。",
		img_path: "img/electrical/xor_component.png"
	},
	{
		id: "not_component", name: "Not Component", name_locale: "否邏輯門",
		desc: "如果輸入端接收到一個信號（而非兩個），則輸出一個信號。",
		img_path: "img/electrical/not_component.png"
	},
	{
		id: "sin_component", name: "Sin Component", name_locale: "正弦元件",
		desc: "輸出輸入項的正弦值",
		img_path: "img/electrical/sin_component.png"
	},
	{
		id: "cos_component", name: "Cos Component", name_locale: "余弦元件",
		desc: "輸出輸入項的余弦值",
		img_path: "img/electrical/cos_component.png"
	},
	{
		id: "tan_component", name: "Tan Component", name_locale: "正切元件",
		desc: "輸出輸入項的余弦值",
		img_path: "img/electrical/tan_component.png"
	},
	{
		id: "asin_component", name: "Asin Component", name_locale: "角A正弦元件",
		desc: "輸出與輸入角正弦相等的角",
		img_path: "img/electrical/asin_component.png"
	},
	{
		id: "acos_component", name: "Acos Component", name_locale: "角A余弦元件",
		desc: "輸出與輸入角余弦相等的角",
		img_path: "img/electrical/acos_component.png"
	},
	{
		id: "atan_component", name: "Atan Component", name_locale: "角A正切元件",
		desc: "輸出與輸入角余弦相等的角",
		img_path: "img/electrical/atan_component.png"
	},
	{
		id: "round_component", name: "Round Component", name_locale: "整元件",
		desc: "將一個輸入值取整到最近的整數上。",
		img_path: "img/electrical/round_component.png"
	},
	{
		id: "ceil_component", name: "Ceil Component", name_locale: "上整元件",
		desc: "將一個輸入值取整到最近的整數上。",
		img_path: "img/electrical/ceil_component.png"
	},
	{
		id: "floor_component", name: "Floor Component", name_locale: "下整元件",
		desc: "輸出一個向下取整的輸入值。",
		img_path: "img/electrical/floor_component.png"
	},
	{
		id: "factorial_component", name: "Factorial Component", name_locale: "階乘元件",
		desc: "輸出輸入值的階乘。",
		img_path: "img/electrical/factorial_component.png"
	},
	{
		id: "abs_component", name: "Abs Component", name_locale: "絕對值元件",
		desc: "輸出輸入值的絕對值。",
		img_path: "img/electrical/abs_component.png"
	},
	{
		id: "square_root_component", name: "Square Root Component", name_locale: "平方根元件",
		desc: "輸出輸入值的平方根。",
		img_path: "img/electrical/square_root_component.png"
	},
	{
		id: "modulo_component", name: "Modulo Component", name_locale: "模元件",
		desc: "輸出輸入值被除以特定值後的餘數。",
		img_path: "img/electrical/modulo_component.png"
	},
	{
		id: "relay_component", name: "Relay Component", name_locale: "繼電邏輯門",
		desc: "當接通時，將所有從輸入端接收到的信號轉發到輸出端。",
		img_path: "img/electrical/relay_component.png"
	},
	{
		id: "delay_component", name: "Delay Component", name_locale: "延遲邏輯門",
		desc: "將所有接收到的信號延遲一定時間。",
		img_path: "img/electrical/delay_component.png"
	},
	{
		id: "memory_component", name: "Memory Component", name_locale: "記憶體元件",
		desc: "可儲存其他元件輸出的信號，保證輸出即時更新。通過signal_in設置存儲值，通過signal_store設置是否儲存輸入的信號。",
		img_path: "img/electrical/memory_component.png"
	},
	{
		id: "signal_check_component", name: "Signal Check Component", name_locale: "信號檢查組件",
		desc: "當接受到特定信號後輸出信號。",
		img_path: "img/electrical/signal_check_component.png"
	},
	{
		id: "regex_find_component", name: "Regex Find Component", name_locale: "規則運算式查找組件",
		desc: "當接收到的信號與特定規則運算式相符時輸出信號。",
		img_path: "img/electrical/regex_find_component.png"
	},
	{
		id: "oscillator", name: "Oscillator", name_locale: "振盪器",
		desc: "發出週期性的振盪信號。",
		img_path: "img/electrical/oscillator.png"
	},
	{
		id: "wifi_component", name: "Wifi Component", name_locale: "Wifi組件",
		desc: "允許相同通道的Wifi元件之間進行遠端通訊。",
		img_path: "img/electrical/wifi_component.png"
	},
	{
		id: "light_component", name: "Light Component", name_locale: "光學元件",
		desc: "通用照明元件，無需電力輸入。",
		img_path: "img/electrical/light_component.png"
	},
	{
		id: "oxygen_detector", name: "Oxygen Detector", name_locale: "氧含量感測器",
		desc: "根據周圍氧含量輸出數值，輸出範圍為0-100。",
		img_path: "img/electrical/oxygen_detector.png"
	},
	{
		id: "water_detector", name: "Water Detector", name_locale: "水感測器",
		desc: "當感測器被水淹沒時輸出信號。",
		img_path: "img/electrical/water_detector.png"
	},
	{
		id: "smoke_detector", name: "Smoke Detector", name_locale: "煙霧感測器",
		desc: "當感測器被水淹沒時輸出信號。",
		img_path: "img/electrical/smoke_detector.png"
	},
	{
		id: "motion_detector", name: "Motion Detector", name_locale: "位移感測器",
		desc: "當檢測到運動位移時輸出信號。",
		img_path: "img/electrical/motion_detector.png"
	},
	{
		id: "emergency_siren", name: "Emergency Siren", name_locale: "應急警報器",
		desc: "觸發後產生刺耳的警報聲。",
		img_path: "img/electrical/emergency_siren.png"
	},
	{
		id: "alarm_buzzer", name: "Alarm Buzzer", name_locale: "蜂鳴報警器",
		desc: "觸發後產生刺耳的警報聲。",
		img_path: "img/electrical/alarm_buzzer.png"
	},
	{
		id: "button", name: "Button", name_locale: "按鈕",
		desc: "產生一個切換設備或閘狀態的短期信號。",
		img_path: "img/electrical/button.png"
	},
	{
		id: "switch", name: "Switch", name_locale: "開關",
		desc: "產生一個切換設備或閘狀態的持續信號。",
		img_path: "img/electrical/switch.png"
	},
	{
		id: "lever", name: "Lever", name_locale: "控制杆",
		desc: "產生一個恒定的信號，用於改變設備及閘的開閉狀態。",
		img_path: "img/electrical/lever.png"
	},

	// 雜項
	{
		id: "toy_hammer", name: "Toy Hammer", name_locale: "玩具錘子",
		desc: "非致命武器，但極其煩人。",
		img_path: "img/misc/toy_hammer.png"
	},
	{
		id: "bike_horn", name: "Bike Horn", name_locale: "小丑喇叭",
		desc: "滴——！",
		img_path: "img/misc/bike_horn.png"
	},




	// 醫療
	{
		id: "bandage", name: "Bandage", name_locale: "繃帶",
		desc: "常見的醫療繃帶，用於包紮流血傷口與燒傷。",
		img_path: "img/medical/bandage.png"
	},
	{
		id: "plastiseal", name: "Plastiseal", name_locale: "可塑人造皮膚",
		desc: "一種具有止血功能的人造皮膚，可以迅速治癒大部分傷口。",
		img_path: "img/medical/plastiseal.png"
	},
	{
		id: "antibiotic_glue", name: "Antibiotic Glue", name_locale: "抗生素凝膠",
		desc: "一種具有強效止血功能的抗生素凝膠，可以瞬間止血、快速有效地治療燒傷。但要小心它可能造成致命的血栓。",
		img_path: "img/medical/antibiotic_glue.png"
	},
	{
		id: "morphine", name: "Morphine", name_locale: "嗎啡",
		desc: "一種強效阿片類藥物，用於治療內傷引起的疼痛，但會導致呼吸短促，且有較強的成癮性。",
		img_path: "img/medical/morphine.png"
	},
	{
		id: "fentanyl", name: "Fentanyl", name_locale: "芬太尼",
		desc: "一種強效阿片類藥物，用於治療內傷引起的疼痛，但會導致呼吸短促，且有較強的成癮性。",
		img_path: "img/medical/fentanyl.png"
	},
	{
		id: "saline", name: "Saline", name_locale: "生理鹽水",
		desc: "輸液用氯化鈉溶液，對治療失血症狀有一定效用。",
		img_path: "img/medical/saline.png"
	},
	{
		id: "blood_pack", name: "Blood Pack", name_locale: "血袋",
		desc: "用於治療失血症狀的血液替代物。",
		img_path: "img/medical/blood_pack.png"
	},
	{
		id: "deusizine", name: "Deusizine", name_locale: "神效劑",
		desc: "一種強效興奮劑，能有效治療內臟損傷、缺氧與少量失血，但存在造成輕微灼傷的副作用。",
		img_path: "img/medical/deusizine.png"
	},
	{
		id: "liquid_oxygenite", name: "Liquid Oxygenite", name_locale: "液態氧礦",
		desc: "一種有著輕微毒性的溶液，注射入靜脈可向血液緩釋氧氣，避免血氧含量不足。",
		img_path: "img/medical/liquid_oxygenite.png"
	},
	{
		id: "calyxanide", name: "Calyxanide", name_locale: "皮蟲淨",
		desc: "用於治療畫皮寄生蟲感染的抗寄生蟲藥物，若患者已進入後期感染階段，需要加大劑量。",
		img_path: "img/medical/calyxanide.png"
	},
	{
		id: "haloperidol", name: "Haloperidol", name_locale: "氟呱啶醇",
		desc: "一種強效的抗精神病藥物。",
		img_path: "img/medical/haloperidol.png"
	},
	{
		id: "naloxone", name: "Naloxone", name_locale: "烯丙羥嗎啡酮",
		desc: "鴨片類藥物拮抗劑，用於治療鴨片類藥物的過量使用與戒斷反應。",
		img_path: "img/medical/naloxone.png"
	},
	{
		id: "morbusine_antidote", name: "Morbusine Antidote", name_locale: "窒死毒劑解毒劑",
		desc: "用於治療急性窒死毒劑中毒的解毒劑。",
		img_path: "img/medical/morbusine_antidote.png"
	},
	{
		id: "cyanide_antidote", name: "Cyanide Antidote", name_locale: "氰化物解藥",
		desc: "用於解除氰化物中毒的解毒劑。",
		img_path: "img/medical/cyanide_antidote.png"
	},
	{
		id: "sufforin_antidote", name: "Sufforin Antidote", name_locale: "升天解藥",
		desc: "用於解除升天毒劑中毒的解毒劑。",
		img_path: "img/medical/sufforin_antidote.png"
	},
	{
		id: "deliriumine_antidote", name: "Deliriumine Antidote", name_locale: "譫妄解藥",
		desc: "用於解除譫妄毒劑中毒的解毒劑。",
		img_path: "img/medical/deliriumine_antidote.png"
	},
	{
		id: "antirad", name: "Antirad", name_locale: "消輻靈",
		desc: "用於緩解輻射中毒的解毒劑。",
		img_path: "img/medical/antirad.png"
	},
	{
		id: "anapralyzant", name: "Anapralyzant", name_locale: "麻痹治癒劑",
		desc: "可以治癒麻痹狀態。注意：過度使用可能會導致精神疾病。",
		img_path: "img/medical/anapralyzant.png"
	},
	{
		id: "broad_spectrum_antibiotics", name: "Broad-spectrum Antibiotics", name_locale: "廣譜抗生素",
		desc: "一種作用效果廣泛的抗生素，可消滅多種病菌，但有著輕微損傷內臟的副作用。可用于合成很多藥物。",
		img_path: "img/medical/broad_spectrum_antibiotics.png"
	},
	{
		id: "stabilozine", name: "Stabilozine", name_locale: "療素",
		desc: "用以製造多種藥物的原材料，也直接用於人體，可以緩解大部分毒素對身體的傷害。",
		img_path: "img/medical/stabilozine.png"
	},
	{
		id: "opium", name: "Opium", name_locale: "藥用鴉片",
		desc: "從水培罌粟中提取的藥用鴉片類物質，常用於製造嗎啡與芬太尼。",
		img_path: "img/medical/opium.png"
	},
	{
		id: "adrenaline", name: "Adrenaline", name_locale: "腎上腺素",
		desc: "一種生物體自然產生的激素。加工材料。",
		img_path: "img/medical/adrenaline.png"
	},
	{
		id: "chlorine", name: "Chlorine", name_locale: "氯",
		desc: "常用於製作生理鹽水（治療失血）與水合三氯乙醛（強力鎮靜劑）。",
		img_path: "img/medical/chlorine.png"
	},
	{
		id: "alien_blood", name: "Alien Blood", name_locale: "異星血漿",
		desc: "從某種木衛二原生種身體中提取的血漿，可以進一步加工成血漿製品，用以治療失血。",
		img_path: "img/medical/alien_blood.png"
	},
	{
		id: "tonic_liquid", name: "Tonic Liquid", name_locale: "內用輔液",
		desc: "一種藥效溫和的、用於治療內臟損傷的藥用溶劑，常用于合成更為複雜的藥物。",
		img_path: "img/medical/tonic_liquid.png"
	},
	{
		id: "methamphetamine", name: "Methamphetamine", name_locale: "興奮粉劑",
		desc: "一種強效的神經興奮劑。",
		img_path: "img/medical/methamphetamine.png"
	},
	{
		id: "anabolic_steroids", name: "Anabolic Steroids", name_locale: "合成代謝類固醇",
		desc: "暫時增強肌肉強度與身體力量的合成激素。",
		img_path: "img/medical/anabolic_steroids.png"
	},
	{
		id: "hyperzine", name: "Hyperzine", name_locale: "加速粉劑",
		desc: "一種強效的肌肉興奮劑，能提升你的反應速度，在你需要快速行動時使用。",
		img_path: "img/medical/hyperzine.png"
	},
	{
		id: "oxygenite_shard", name: "Oxygenite Shard", name_locale: "氧礦碎片",
		desc: "異星礦物碎片",
		img_path: "img/material/oxygenite_shard.png"
	},
	{
		id: "velonaceps_calyx_eggs", name: "Velonaceps Calyx Eggs", name_locale: "萼形體內轉續擬寄生物卵",
		desc: "木衛二某種寄生蟲處於休眠狀態的卵，一般人們稱其為“畫皮寄生蟲”。",
		img_path: "img/medical/velonaceps_calyx_eggs.png"
	},
	{
		id: "morbusine", name: "Morbusine", name_locale: "窒死毒劑",
		desc: "一種強效神經毒劑。",
		img_path: "img/medical/morbusine.png"
	},
	{
		id: "cyanide", name: "Cyanide", name_locale: "氰化物毒劑",
		desc: "一種強效神經毒劑。",
		img_path: "img/medical/cyanide.png"
	},
	{
		id: "sufforin", name: "Sufforin", name_locale: "升天毒劑",
		desc: "一種強效神經毒劑。",
		img_path: "img/medical/sufforin.png"
	},
	{
		id: "deliriumine", name: "Deliriumine", name_locale: "譫妄毒劑",
		desc: "一種能夠導致精神症狀的毒劑。",
		img_path: "img/medical/deliriumine.png"
	},
	{
		id: "radiotoxin", name: "Radiotoxin", name_locale: "輻射毒劑",
		desc: "一種強效神經毒劑。",
		img_path: "img/medical/radiotoxin.png"
	},
	{
		id: "paralyzant", name: "Paralyzant", name_locale: "麻痹劑",
		desc: "會導致麻痹",
		img_path: "img/medical/paralyzant.png"
	},
	{
		id: "sulphuric_acid", name: "Sulphuric Acid", name_locale: "硫酸",
		desc: "一種強酸，與皮膚直接接觸會引起皮膚燒傷。可用於製作有毒藥劑。",
		img_path: "img/medical/sulphuric_acid.png"
	},
	{
		id: "chloral_hydrate", name: "Chloral Hydrate", name_locale: "水合三氯乙醛",
		desc: "一種鎮靜劑，可讓人昏迷一段時間。",
		img_path: "img/medical/chloral_hydrate.png"
	},





	// 材料
	{ id: "steel_bar", name: "Steel Bar", name_locale: "鋼筋", img_path: 'img/material/steel_bar.png' },
	{
		id: "organic_fiber", name: "Organic Fiber", name_locale: "活性纖維",
		desc: "加工材料。",
		img_path: "img/material/ballistic_fiber.png"
	},
	{
		id: "ballistic_fiber", name: "Ballistic Fiber", name_locale: "防彈纖維",
		desc: "加工材料。",
		img_path: "img/material/ballistic_fiber.png"
	},
	{
		id: "flash_powder", name: "Flash Powder", name_locale: "閃光粉",
		desc: "加工材料。",
		img_path: "img/material/flash_powder.png"
	},
	{
		id: "carbon", name: "Carbon", name_locale: "碳",
		desc: "可用於製作鋼材與塑膠。",
		img_path: "img/material/carbon.png"
	},
	{
		id: "iron", name: "Iron", name_locale: "鐵",
		desc: "可用於製作簡易工具，也可與碳混煉成鋼。",
		img_path: "img/material/iron.png"
	},
	{
		id: "plastic", name: "Plastic", name_locale: "塑膠",
		desc: "加工材料。",
		img_path: "img/material/plastic.png"
	},
	{
		id: "aluminium", name: "Aluminium", name_locale: "鋁",
		desc: "一種合成物品需要的化學元素。",
		img_path: "img/material/aluminium.png"
	},
	{
		id: "rubber", name: "Rubber", name_locale: "橡膠",
		desc: "加工材料。",
		img_path: "img/material/rubber.png"
	},
	{
		id: "titanium-aluminium_alloy", name: "Titanium-Aluminium Alloy", name_locale: "鈦鋁合金",
		desc: "加工材料。",
		img_path: "img/material/titanium-aluminium_alloy.png"
	},
	{
		id: "titanium", name: "Titanium", name_locale: "鈦",
		desc: "一種合成物品需要的化學元素。",
		img_path: "img/material/titanium.png"
	},
	{
		id: "sodium", name: "Sodium", name_locale: "鈉",
		desc: "可將鈉與氯通過結合，製成用以治療失血的生理鹽水。也可用來合成更複雜的藥物。",
		img_path: "img/material/sodium.png"
	},
	{
		id: "zinc", name: "Zinc", name_locale: "鋅",
		desc: "可用於製作電池與內用輔液。",
		img_path: "img/material/zinc.png"
	},
	{
		id: "physicorium_bar", name: "Physicorium Bar", name_locale: "剛素塊",
		desc: "加工材料。",
		img_path: "img/material/physicorium_bar.png"
	},
	{
		id: "phosphorus", name: "Phosphorus", name_locale: "磷",
		desc: "用於製作照明設備、炸藥與一些醫用化合物。",
		img_path: "img/material/phosphorus.png"
	},
	{
		id: "lithium", name: "Lithium", name_locale: "鋰",
		desc: "常用於製作電池與抗精神病藥物。",
		img_path: "img/material/lithium.png"
	},
	{
		id: "fulgurium_bar", name: "Fulgurium Bar", name_locale: "雷素塊",
		desc: "加工材料。",
		img_path: "img/material/fulgurium_bar.png"
	},
	{
		id: "incendium_bar", name: "Incendium Bar", name_locale: "燃素塊",
		desc: "加工材料。",
		img_path: "img/material/incendium_bar.png"
	},
	{
		id: "dementonite_bar", name: "Dementonite Bar", name_locale: "攝魂礦塊",
		desc: "加工材料。",
		img_path: "img/material/dementonite_bar.png"
	},
	{
		id: "uranium", name: "Uranium", name_locale: "鈾",
		desc: "可用加工台提純，進而製作反應堆燃料棒或核武器。",
		img_path: "img/material/uranium.png"
	},
	{
		id: "lead", name: "Lead", name_locale: "鉛",
		desc: "可用於製作各種彈藥。",
		img_path: "img/material/lead.png"
	},
	{
		id: "thorium", name: "Thorium", name_locale: "釷",
		desc: "一種合成物品需要的化學元素。",
		img_path: "img/material/thorium.png"
	},
	{
		id: "copper", name: "Copper", name_locale: "銅",
		desc: "可用於製作導線。",
		img_path: "img/material/copper.png"
	},
	{
		id: "magnesium", name: "Magnesium", name_locale: "鎂",
		desc: "用於製作炸藥與醫用化合物，與水接觸後劇烈反應。",
		img_path: "img/material/magnesium.png"
	},
	{
		id: "potassium", name: "Potassium", name_locale: "鉀",
		desc: "用於製作炸藥與醫用化合物，與水接觸後劇烈反應。",
		img_path: "img/material/potassium.png"
	},
	{
		id: "silicon", name: "Silicon", name_locale: "矽",
		desc: "可用於製作塑膠、鋁合金與電器元件。",
		img_path: "img/material/silicon.png"
	},
	{
		id: "tin", name: "Tin", name_locale: "錫",
		desc: "可用於製作各種電器元件。",
		img_path: "img/material/tin.png"
	},
	{
		id: "ethanol", name: "Ethanol", name_locale: "醫用酒精",
		desc: "用以製造多種藥物的原材料，執勤期間禁止飲用。",
		img_path: 'img/material/ethanol.png'
	},
	{
		id: "paralyxis", name: "Paralyxis", name_locale: "麻痹源",
		desc: "可用於製作",
		img_path: 'img/material/paralyxis.png'
	},
	{
		id: "adrenaline_gland", name: "Adrenaline Gland", name_locale: "腎上腺素腺體",
		desc: "內含大量腎上腺素，可用解構儀提取。",
		img_path: 'img/material/adrenaline_gland.png'
	},
	{
		id: "calcium", name: "Calcium", name_locale: "鈣",
		desc: "一種合成物品需要的化學元素。",
		img_path: 'img/material/calcium.png'
	},
	{
		id: "swim_bladder", name: "Swim Bladder", name_locale: "自愈囊泡",
		desc: "很多木衛二原生生物都有發育的一個含有組織液的囊泡組織，其中的組織液可以加工成愈素和生理鹽水。",
		img_path: 'img/material/swim_bladder.png'
	},









	// 礦物
	{
		id: "sulphurite_shard", name: "Sulphurite Shard", name_locale: "硫酸礦碎片",
		desc: "異星礦物碎片",
		img_path: 'img/material/sulphurite_shard.png'
	},
	{
		id: "amblygonite", name: "Amblygonite", name_locale: "磷鋁石礦",
		desc: "含有鋰、鋁、鈉成分的礦物。",
		img_path: 'img/ore/amblygonite.png'
	},
	{
		id: "aragonite", name: "Aragonite", name_locale: "霰石礦",
		desc: "含鈣的富集礦物。",
		img_path: 'img/ore/aragonite.png'
	},
	{
		id: "bornite", name: "Bornite", name_locale: "斑銅礦",
		desc: "含銅的富集礦物。",
		img_path: 'img/ore/bornite.png'
	},
	{
		id: "brockite", name: "Brockite", name_locale: "水磷鈣釷石礦",
		desc: "含有鈦、磷成分的礦物。",
		img_path: 'img/ore/brockite.png'
	},
	{
		id: "cassiterite", name: "Cassiterite", name_locale: "錫石礦",
		desc: "含錫的富集礦物。",
		img_path: 'img/ore/cassiterite.png'
	},
	{
		id: "chalcopyrite", name: "Chalcopyrite", name_locale: "黃銅礦",
		desc: "含銅的富集礦物。",
		img_path: 'img/ore/chalcopyrite.png'
	},
	{
		id: "chamosite", name: "Chamosite", name_locale: "鮞綠泥石礦",
		desc: "含有鐵、鋁成分的礦物。",
		img_path: 'img/ore/chamosite.png'
	},
	{
		id: "chrysoprase", name: "Chrysoprase", name_locale: "綠玉髓礦",
		desc: "含矽的富集礦物。",
		img_path: 'img/ore/chrysoprase.png'
	},
	{
		id: "cryolite", name: "Cryolite", name_locale: "冰晶石礦",
		desc: "含鈉的富集礦物。",
		img_path: 'img/ore/cryolite.png'
	},
	{
		id: "diamond", name: "Diamond", name_locale: "鑽石",
		desc: "固體碳晶體。",
		img_path: 'img/ore/diamond.png'
	},
	{
		id: "esperite", name: "Esperite", name_locale: "矽鈣鉛鋅礦",
		desc: "含有鉛、鋅成分的礦物。",
		img_path: 'img/ore/esperite.png'
	},
	{
		id: "galena", name: "Galena", name_locale: "方鉛礦",
		desc: "含鉛的富集礦物。",
		img_path: 'img/ore/galena.png'
	},
	{
		id: "graphite", name: "Graphite", name_locale: "石墨",
		desc: "碳的另一種晶體形式。",
		img_path: 'img/ore/graphite.png'
	},
	{
		id: "hydroxyapatite", name: "Hydroxyapatite", name_locale: "羥磷灰石",
		desc: "含有鈣、磷成分的礦物。",
		img_path: 'img/ore/hydroxyapatite.png'
	},
	{
		id: "ilmenite", name: "Ilmenite", name_locale: "鈦鐵礦",
		desc: "含鈦的富集礦物。",
		img_path: 'img/ore/ilmenite.png'
	},
	{
		id: "iron_ore", name: "Iron Ore", name_locale: "鐵礦",
		desc: "含鐵的富集礦物。",
		img_path: 'img/ore/iron_ore.png'
	},
	{
		id: "langbeinite", name: "Iron Ore", name_locale: "軟鉀鎂礬礦",
		desc: "含有鉀、鎂成分的礦物。",
		img_path: 'img/ore/langbeinite.png'
	},
	{
		id: "lazulite", name: "Lazulite", name_locale: "天藍石礦",
		desc: "含有磷、鐵成分的礦物。",
		img_path: 'img/ore/lazulite.png'
	},
	{
		id: "polyhalite", name: "Polyhalite", name_locale: "雜鹵石",
		desc: "含有鉀、鈣成分的礦物。",
		img_path: 'img/ore/polyhalite.png'
	},
	{
		id: "pyromorphite", name: "Pyromorphite", name_locale: "磷氯鉛礦",
		desc: "含有氯成分的礦物。",
		img_path: 'img/ore/pyromorphite.png'
	},
	{
		id: "quartz", name: "Quartz", name_locale: "石英",
		desc: "主要成分為矽晶體的礦物。",
		img_path: 'img/ore/quartz.png'
	},
	{
		id: "sphalerite", name: "Sphalerite", name_locale: "閃鋅礦",
		desc: "主要成分為鋅晶體的礦物。",
		img_path: 'img/ore/sphalerite.png'
	},
	{
		id: "stannite", name: "Stannite", name_locale: "黃錫礦",
		desc: "含有銅、鐵、錫成份的礦物。",
		img_path: 'img/ore/stannite.png'
	},
	{
		id: "sylvite", name: "Sylvite", name_locale: "鉀鹽礦",
		desc: "含有鉀、鈉成分的礦物。",
		img_path: 'img/ore/sylvite.png'
	},
	{
		id: "thorianite", name: "Thorianite", name_locale: "方釷石礦",
		desc: "含有釷的稀有礦物。",
		img_path: 'img/ore/thorianite.png'
	},
	{
		id: "titanite", name: "Titanite", name_locale: "榍石礦",
		desc: "含有鈦、鐵成分的礦物。",
		img_path: 'img/ore/titanite.png'
	},
	{
		id: "triphylite", name: "Triphylite", name_locale: "磷酸鋰鐵礦",
		desc: "含鋰的富集礦物。",
		img_path: 'img/ore/triphylite.png'
	},
	{
		id: "uranium_ore", name: "Uranium Ore", name_locale: "鈾礦",
		desc: "含鈾的富集礦物。",
		img_path: 'img/ore/uranium_ore.png'
	},








	// 外星物品
	{
		id: "alien_trinket", name: "Alien Trinket", name_locale: "異星小裝飾品",
		desc: "在異星遺跡中發現的小型造物。",
		img_path: 'img/material/alien_trinket.png'
	},
	{
		id: "alien_curio", name: "Alien Curio", name_locale: "異星珍品",
		desc: "在異星遺跡中發現的小型造物。",
		img_path: 'img/material/alien_curio.png'
	},
	{
		id: "alien_ornament", name: "Alien Ornament", name_locale: "異星裝飾物",
		desc: "在異星遺跡中發現的小型造物。",
		img_path: 'img/material/alien_ornament.png'
	},
	{
		id: "sky_alien_artifact", name: "Sky Alien Artifact", name_locale: "天空異星遺物",
		desc: "在異星遺跡中發現的造物。",
		img_path: 'img/misc/artifact_placeholder.png'
	},
	{
		id: "thermal_alien_artifact", name: "Thermal Alien Artifact", name_locale: "發熱異星遺物",
		desc: "在異星遺跡中發現的造物。",
		img_path: 'img/misc/artifact_placeholder.png'
	},
	{
		id: "faraday_alien_artifact", name: "Faraday Alien Artifact", name_locale: "法拉第異星遺物",
		desc: "在異星遺跡中發現的造物。",
		img_path: 'img/misc/artifact_placeholder.png'
	},
	{
		id: "nasonov_alien_artifact", name: "Nasonov Alien Artifact", name_locale: "奈氏異星遺物",
		desc: "在異星遺跡中發現的造物。",
		img_path: 'img/misc/artifact_placeholder.png'
	},
	{
		id: "psychosis_alien_artifact", name: "Psychosis Alien Artifact", name_locale: "瘋子異星遺物",
		desc: "在異星遺跡中發現的造物。",
		img_path: 'img/misc/artifact_placeholder.png'
	},
	{
		id: "mudraptor_egg", name: "Mudraptor Egg", name_locale: "泥偶迅猛龍蛋",
		desc: "一隻覆滿粘液，不斷湧動的泥偶迅猛龍蛋。蛋頂端張開的口子仿佛要擇人而噬。",
		img_path: 'img/misc/mudraptor_egg.png'
	},







	// 植物
	{
		id: "elastin", name: "Elastin", name_locale: "彈性纖維植物",
		desc: "彈性纖維植物",
		img_path: 'img/material/elastin.png'
	},
	{
		id: "aquatic_poppy", name: "Aquatic Poppy", name_locale: "水培罌粟",
		desc: "摸起來很暖和。加工材料。",
		img_path: 'img/material/aquatic_poppy.png'
	},
	{
		id: "slime_bacteria", name: "Slime Bacteria", name_locale: "史萊姆變形細菌",
		desc: "一種特殊的黏細菌群落，可用於製作抗生素。",
		img_path: 'img/material/slime_bacteria.png'
	},
	{
		id: "sea_yeast_shroom", name: "Sea Yeast Shroom", name_locale: "水生酵母菌",
		desc: "聞起來像是已經發酵的腐肉。加工材料。",
		img_path: 'img/material/sea_yeast_shroom.png'
	},
	{
		id: "fiber_plant", name: "Fiber Plant", name_locale: "活性纖維植物",
		desc: "這種植物的觸感有點像椰子，但其表面纖維在手指的撫摸下令人不安地自行蠕動。加工材料。",
		img_path: 'img/material/fiber_plant.png'
	},
	{
		id: "elastin_plant", name: "Elastin Plant", name_locale: "彈性纖維植物",
		desc: "這種植物的葉子怎麼拉長都不會斷裂。加工材料。",
		img_path: 'img/material/elastin_plant.png'
	},
];

const getItemById = (id: string) =>
{
	return items.find(item => item.id === id)!;
}

export { getItemById };
export default items;