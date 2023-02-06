import { Dictionary } from "lodash";

interface ItemLang
{
	id: string;
	name_locale: string;
	desc?: string;
}

const items: ItemLang[] = [
	// 裝備
	{
		id: "underwater_scooter",
		name_locale: "Underwater Scooter",
		desc: "A battery-powered underwater propulsion device.",
	},
	{
		id: "diving_mask",
		name_locale: "Diving Mask",
		desc: "Small enough to carry around in case it's needed, but won't protect you from the water pressure in the event of a full-blown hull breach.",
	},
	{
		id: "diving_suit",
		name_locale: "Diving Suit",
		desc: "An atmospheric diving suit capable of withstanding the immense pressure under Europa's crust."
	},
	{
		id: "flashlight",
		name_locale: "Flashlight",
		desc: "Handheld light.",
	},
	{
		id: "handheld_sonar",
		name_locale: "Handheld Sonar",
		desc: "Portable sonar, handy for exploration.",
	},
	{
		id: "sonar_beacon",
		name_locale: "Sonar Beacon",
		desc: "Produces a localized signal that can be detected by a sonar monitor, handheld sonar, or navigation terminal.",
	},
	{
		id: "ballistic_helmet",
		name_locale: "Ballistic Helmet",
		desc: "While the helmet won't offer adequate protection against most of the inhabitants of the subsurface ocean, it can be extremely useful if there are traitors on board.",

	},
	{
		id: "gunner_helmet",
		name_locale: "Gunner's Helmet",
		desc: "A bit lighter than a regular ballistic helmet; designed not to get in the way when one is operating a periscope.",
	},
	{
		id: "riot_helmet",
		name_locale: "Riot Helmet",
		desc: "Designed for crowd control but equally useful against alien invaders.",

	},
	{
		id: "body_armor",
		name_locale: "Body Armor",
		desc: "While the body armor won't offer adequate protection against most of the inhabitants of the subsurface ocean, it can be extremely useful if there are traitors on board.",
	},
	{
		id: "handcuffs",
		name_locale: "Handcuffs",
		desc: "Useful for restraining problem players.",
	},
	{
		id: "health_scanner_hud",
		name_locale: "Health Scanner HUD",
		desc: "A heads-up display that shows information about the vital signs and status of nearby humans.",
	},
	{
		id: "headset",
		name_locale: "Headset",
		desc: "Allows remote communication among the crew.",
	},
	{
		id: "toolbox",
		name_locale: "Toolbox",
		desc: "A portable container for storing tools",
	},
	{
		id: "fire_extinguisher",
		name_locale: "Fire Extinguisher",
		desc: "A handheld carbon dioxide extinguisher.",

	},
	{
		id: "flare",
		name_locale: "Flare",
		desc: "Temporary handheld light. Useful for marking a path while exploring outside the sub.",
	},





	// 武器
	{
		id: "spear",
		name_locale: "Harpoon",
		desc: "A harpoon for the harpoon gun.。",
	},
	{
		id: "explosive_spear",
		name_locale: "Explosive Harpoon",
		desc: "A harpoon for the harpoon gun.",
	},
	{
		id: "physicorium_spear",
		name_locale: "Physicorium Harpoon",
		desc: "A harpoon for the harpoon gun.",
	},
	{
		id: "harpoon_gun",
		name_locale: "Harpoon Gun",
		desc: "Launches harpoons, explosive harpoons, and alien harpoons.",
	},
	{
		id: "syringe_gun",
		name_locale: "Syringe Gun",
		desc: "Launches syrettes containing drugs or poisons.",
	},
	{
		id: "stun_grenade",
		name_locale: "Stun Grenade",
		desc: "Produces bright light and a loud sound on detonation, which stuns nearby characters.",
	},
	{
		id: "emp_grenade",
		name_locale: "EMP Grenade",
		desc: "Damages electrical equipment.",
	},
	{
		id: "frag_grenade",
		name_locale: "Frag Grenade",
		desc: "General purpose fragmentation grenade. Use carefully.",
	},
	{
		id: "incendium_grenade",
		name_locale: "Incendium Grenade",
		desc: "Incendiary grenade. Use very carefully.",
	},
	{
		id: "stun_baton",
		name_locale: "Stun Baton",
		desc: "If verbal orders are insufficient, a high-voltage shock from a stun baton may be enough to beat an unruly crew member into submission.",
	},
	{
		id: "stun_gun",
		name_locale: "Stun Gun",
		desc: "A device for firing electrified darts.",
	},
	{
		id: "stun_gun_dart",
		name_locale: "Stun Gun Dart",
		desc: "Causes electric shock to incapacitate a target. Non-lethal.",
	},
	{
		id: "diving_knife",
		name_locale: "Diving Knife",
		desc: "Stabs, pokes, cuts and slashes.",
	},
	{
		id: "40mm_grenade",
		name_locale: "40mm Grenade",
		desc: "Ammunition for grenade launcher.",
	},
	{
		id: "40mm_stun_grenade",
		name_locale: "40mm Stun Grenade",
		desc: "Ammunition for grenade launcher. Non-lethal.",
	},
	{
		id: "uex",
		name_locale: "UEX",
		desc: "A simple explosive compound made of sodium and phosphorus.",
	},
	{
		id: "c-4_block",
		name_locale: "C-4 Block",
		desc: "A stable explosive compound.",
	},
	{
		id: "ic-4_block",
		name_locale: "IC-4 Block",
		desc: "A compound made of C-4 and incendium.",
	},
	{
		id: "coilgun_ammunition_box",
		name_locale: "Coilgun Ammunition Box",
		desc: "Ammunition for the coilgun.",
	},
	{
		id: "physicorium_ammo_box",
		name_locale: "Physicorium Ammunition Box",
		desc: "",
	},
	{
		id: "exploding_ammunition_box",
		name_locale: "Exploding Ammunition Box",
		desc: "Ammunition for the coilgun. Explodes on impact.",
	},
	{
		id: "piercing_ammunition_box",
		name_locale: "Piercing Ammunition Box",
		desc: "Coilgun ammo that has piercing capabilities.",
	},
	{
		id: "railgun_shell",
		name_locale: "Railgun Shell",
		desc: "For firing from a railgun.",
	},
	{
		id: "nuclear_shell",
		name_locale: "Nuclear Shell",
		desc: "A nuclear shell for use with a railgun.",
	},
	{
		id: "physicorium_railgun_shell",
		name_locale: "Physicorium Shell",
		desc: "For firing from a railgun.",
	},
	{
		id: "depth_charge_shell",
		name_locale: "Depth Charge Shell",
		desc: "A barrel of explosives. Will sink and then explode.",
	},
	{
		id: "nuclear_depth_charge",
		name_locale: "Nuclear Depth Charge",
		desc: "A barrel of really big explosives. Will sink and then explode.",
	},
	{
		id: "depth_decoy_shell",
		name_locale: "Depth Decoy Shell",
		desc: "A decoy that can be deployed via the depth charge launcher. Will sink while producing a loud acoustic signal to attract attention away from the sub.",
	},
	{
		id: "nuclear_depth_decoy",
		name_locale: "Nuclear Depth Decoy",
		desc: "A decoy that can be deployed via the depth charge launcher. Will sink while producing a loud acoustic signal to attract attention away from the sub.",
	},
	{
		id: "compound_n",
		name_locale: "Compound N",
		desc: "A stable explosive compound.",
	},
	{
		id: "volatile_compound_n",
		name_locale: "Volatile Compound N",
		desc: "An unstable explosive compound.",
	},
	{
		id: "ancient_weapon",
		name_locale: "Ancient Weapon",
		desc: "A weapon with powerful capabilities.",
	},







	// 補給
	{
		id: "battery_cell",
		name_locale: "Battery Cell",
		desc: "Used as a power source for various handheld devices. Most submarines have several stationary backup batteries with recharge docks for battery cells.",
	},
	{
		id: "fulgurium_battery_cell",
		name_locale: "Fulgurium Battery Cell",
		desc: "A battery cell constructed of the rare and poorly understood compound Fulgurium.",
	},
	{
		id: "oxygen_tank_empty",
		name_locale: "Oxygen Tank (empty)",
		desc: "",
	},
	{
		id: "oxygen_tank",
		name_locale: "Oxygen Tank",
		desc: "Portable oxygen container.",
	},
	{
		id: "oxygenite_tank",
		name_locale: "Oxygenite Tank",
		desc: "A tank containing liquid Oxygenite.",
	},
	{
		id: "welding_fuel_tank",
		name_locale: "Welding Fuel Tank",
		desc: "Fuel for the welding tool.",
	},
	{
		id: "incendium_fuel_tank",
		name_locale: "Incendium Fuel Tank",
		desc: "",
	},
	{
		id: "fuel_rod",
		name_locale: "Fuel Rod",
		desc: "A bar of enriched uranium, for use within a reactor.",
	},
	{
		id: "thorium_fuel_rod",
		name_locale: "Thorium Fuel Rod",
		desc: "A thorium bar, for use within a reactor. Generates slightly more heat and lasts longer than uranium fuel rods.",
	},
	{
		id: "fulgurium_fuel_rod",
		name_locale: "Fulgurium Fuel Rod",
		desc: "A bar of enriched fulgurium, for use within a reactor. Generates significantly more heat and lasts longer than uranium fuel rods.",
	},





	// 工具
	{
		id: "welding_tool",
		name_locale: "Welding Tool",
		desc: "One of the most crucial tools on board the submarine. Also works underwater.",

	},
	{
		id: "plasma_cutter",
		name_locale: "Plasma Cutter",
		desc: "Cuts through various materials using a jet of ionized oxygen.",

	},
	{
		id: "screwdriver",
		name_locale: "Screwdriver",
		desc: "Makes electrical repairs and rewiring possible.",

	},
	{
		id: "wrench",
		name_locale: "Wrench",
		desc: "Makes mechanical repairs possible.",

	},
	{
		id: "crowbar",
		name_locale: "Crowbar",
		desc: "Forces doors and hatches open. Also a blunt weapon.",

	},



	// 電器
	{
		id: "wire",
		name_locale: "any wire",
		desc: "",
	},
	{
		id: "red_wire",
		name_locale: "Red Wire",
		desc: "Connects an output from one piece of equipment to an input on another.",
	},
	{
		id: "blue_wire",
		name_locale: "Blue Wire",
		desc: "Connects an output from one piece of equipment to an input on another.",
	},
	{
		id: "orange_wire",
		name_locale: "Orange Wire",
		desc: "Connects an output from one piece of equipment to an input on another.",
	},
	{
		id: "green_wire",
		name_locale: "Green Wire",
		desc: "Connects an output from one piece of equipment to an input on another.",
	},
	{
		id: "black_wire",
		name_locale: "Black Wire",
		desc: "Connects an output from one piece of equipment to an input on another.",
	},
	{
		id: "brown_wire",
		name_locale: "Brown Wire",
		desc: "Connects an output from one piece of equipment to an input on another.",

	},
	{
		id: "fpga_circuit",
		name_locale: "FPGA Circuit",
		desc: "Field-programmable gate array—a multipurpose circuit that can be reconfigured for use in a large variety of electrical devices.",

	},
	{
		id: "and_component",
		name_locale: "And Component",
		desc: "Sends a signal when both inputs receive a signal within a set period of each other.",

	},
	{
		id: "equals_component",
		name_locale: "Equals Component",
		desc: "Sends a signal when both inputs receive the same signal.",

	},
	{
		id: "greater_component",
		name_locale: "Greater Component",
		desc: "Sends a signal if the value the signal_in1 input is larger than the signal_in2 input.",

	},
	{
		id: "adder_component",
		name_locale: "Adder Component",
		desc: "Outputs the sum of the received signals.",

	},
	{
		id: "color_component",
		name_locale: "Color Component",
		desc: "Outputs a combined color signal for light control.",

	},
	{
		id: "subtract_component",
		name_locale: "Subtract Component",
		desc: "Outputs the subtracted value of the received signals.",

	},
	{
		id: "multiply_component",
		name_locale: "Multiply Component",
		desc: "Outputs the product of the received signals.",

	},
	{
		id: "divide_component",
		name_locale: "Divide Component",
		desc: "Outputs the divided value of the received signals.",

	},
	{
		id: "or_component",
		name_locale: "Or Component",
		desc: "Sends a signal if either of the inputs receives a signal.",

	},
	{
		id: "xor_component", name_locale: "Xor Component",
		desc: "Sends a signal if either of the inputs, but not both, receives a signal.",

	},
	{
		id: "not_component",
		name_locale: "Not Component",
		desc: "Sends a signal when the input is NOT receiving a signal.",

	},
	{
		id: "sin_component",
		name_locale: "Sin Component",
		desc: "Outputs the sine of the input.",

	},
	{
		id: "cos_component",
		name_locale: "Cos Component",
		desc: "Outputs the cosine of the input.",

	},
	{
		id: "tan_component", name_locale: "Tan Component",
		desc: "Outputs the tangent of the input.",

	},
	{
		id: "asin_component",
		name_locale: "Asin Component",
		desc: "Outputs the angle whose sine is equal to the input.",

	},
	{
		id: "acos_component",
		name_locale: "Acos Component",
		desc: "Outputs the angle whose cosine is equal to the input.",

	},
	{
		id: "atan_component",
		name_locale: "Atan Component",
		desc: "Outputs the angle whose tangent is equal to the input. If the signal_in_x and signal_in_y connections are used, the input is interpreted as a vector and the angle calculated using Atan2.",

	},
	{
		id: "round_component",
		name_locale: "Round Component",
		desc: "Rounds a numerical input to the nearest integer value.",

	},
	{
		id: "ceil_component",
		name_locale: "Ceil Component",
		desc: "Outputs the smallest integer value that is bigger than or equal to the input.",

	},
	{
		id: "floor_component",
		name_locale: "Floor Component",
		desc: "Outputs the greatest integer value that is less than or equal to the input.",

	},
	{
		id: "factorial_component",
		name_locale: "Factorial Component",
		desc: "Outputs the factorial of the input.",

	},
	{
		id: "abs_component",
		name_locale: "Abs Component",
		desc: "Outputs the absolute value of the input.",

	},
	{
		id: "square_root_component",
		name_locale: "Square Root Component",
		desc: "Outputs the square root of the input.",

	},
	{
		id: "modulo_component",
		name_locale: "Modulo Component",
		desc: "Outputs the remainder when the input is divided by a specific number.",

	},
	{
		id: "relay_component",
		name_locale: "Relay Component",
		desc: "When switched on, forwards all received signals from the input connections to the outputs.",

	},
	{
		id: "delay_component",
		name_locale: "Delay Component",
		desc: "Delays all received signals for a specific amount of time.",

	},
	{
		id: "memory_component",
		name_locale: "Memory Component",
		desc: "Outputs a stored value that can be updated from other sources. Use the signal_in connection to set the stored value, and the signal_store input to toggle whether the received signals should be stored.",

	},
	{
		id: "signal_check_component",
		name_locale: "Signal Check Component",
		desc: "Sends a signal when a signal matching a specific value is received.",

	},
	{
		id: "regex_find_component",
		name_locale: "RegEx Find Component",
		desc: "Sends a signal if the received signal matches a specific regular expression pattern.",

	},
	{
		id: "oscillator",
		name_locale: "Oscillator",
		desc: "Sends out a periodic, oscillating signal.",

	},
	{
		id: "wifi_component",
		name_locale: "Wifi Component",
		desc: "Allows remote communication between other wifi components that are using the same channel.",

	},
	{
		id: "light_component",
		name_locale: "Light Component",
		desc: "General purpose lighting. Requires no electrical input.",

	},
	{
		id: "oxygen_detector",
		name_locale: "Oxygen Detector",
		desc: "Sends out a value between 0-100 depending on the quality of the surrounding air.",

	},
	{
		id: "water_detector",
		name_locale: "Water Detector",
		desc: "Sends out a signal when the detector is submerged.",

	},
	{
		id: "smoke_detector",
		name_locale: "Smoke Detector",
		desc: "Sends out a signal when it senses smoke.",

	},
	{
		id: "motion_detector",
		name_locale: "Motion Detector",
		desc: "Sends out a signal when it detects movement.",

	},
	{
		id: "emergency_siren",
		name_locale: "Emergency Siren",
		desc: "Can be triggered to make a terrible noise.",

	},
	{
		id: "alarm_buzzer",
		name_locale: "Alarm Buzzer",
		desc: "Can be triggered to make a terrible noise.",

	},
	{
		id: "button",
		name_locale: "Button",
		desc: "Produces a signal that can be used to toggle the state of equipment and doors.",

	},
	{
		id: "switch",
		name_locale: "Switch",
		desc: "Produces a constant signal that can be used to change the state of equipment and doors.",

	},
	{
		id: "lever",
		name_locale: "Lever",
		desc: "Produces a constant signal that can be used to change the state of equipment and doors.",

	},

	// 雜項
	{
		id: "toy_hammer",
		name_locale: "Toy Hammer",
		desc: "Non-lethal but extremely annoying.",
	},
	{
		id: "bike_horn", name_locale: "Bike Horn",
		desc: "HONK!",
	},




	// 醫療
	{
		id: "bandage",
		name_locale: "Bandage",
		desc: "Basic bandages, useful in the treatment of bleeding wounds and burns.",

	},
	{
		id: "plastiseal",
		name_locale: "Plastiseal",
		desc: "A synthetic skin with hemostatic properties, able to quickly seal most wounds.",

	},
	{
		id: "antibiotic_glue",
		name_locale: "Antibiotic Glue",
		desc: "An antibiotic glue with hemostatic properties. Seals bleeding wounds almost immediately and treats burns very effectively. Use with care as it may cause mobile clots in the bloodstream.",

	},
	{
		id: "morphine",
		name_locale: "Morphine",
		desc: "A powerful opiate for treating pain associated with internal injuries, but will cause shortness of breath and eventual dependency with overuse.",

	},
	{
		id: "fentanyl",
		name_locale: "Fentanyl",
		desc: "A powerful opiate for treating pain associated with internal injuries, but will cause shortness of breath and eventual dependency with overuse.",

	},
	{
		id: "saline",
		name_locale: "Saline",
		desc: "A sodium chloride infusion mildly useful in the treatment of blood loss.",

	},
	{
		id: "blood_pack",
		name_locale: "Blood Pack",
		desc: "A pack of blood substitute for the treatment of blood loss.",

	},
	{
		id: "deusizine",
		name_locale: "Deusizine",
		desc: ">A highly potent stimulant effective in the treatment of internal damage, oxygen deprivation and, to a lesser extent, blood loss. Produces mild burns as a side effect.",

	},
	{
		id: "liquid_oxygenite",
		name_locale: "Liquid Oxygenite",
		desc: "A mildly toxic solution that slowly releases oxygen into the bloodstream when injected. Avoid dropping.",

	},
	{
		id: "calyxanide",
		name_locale: "Calyxanide",
		desc: "An antiparasitic drug used in the treatment of husk parasite infections. Might require higher dosage to cure the infection at later stages.",

	},
	{
		id: "haloperidol",
		name_locale: "Haloperidol",
		desc: "A strong antipsychotic drug.",

	},
	{
		id: "naloxone",
		name_locale: "Naloxone",
		desc: "An opioid antagonist for the treatment of opiate-based withdrawal and overdose.",

	},
	{
		id: "morbusine_antidote",
		name_locale: "Morbusine Antidote",
		desc: "An antidote for acute morbusine poisoning.",

	},
	{
		id: "cyanide_antidote",
		name_locale: "Cyanide Antidote",
		desc: "An antidote for acute cyanide poisoning.",

	},
	{
		id: "sufforin_antidote",
		name_locale: "Sufforin Antidote",
		desc: "An antidote for acute sufforin poisoning.",

	},
	{
		id: "deliriumine_antidote",
		name_locale: "Deliriumine Antidote",
		desc: "An antidote for acute deliriumine poisoning.",

	},
	{
		id: "antirad",
		name_locale: "Antirad",
		desc: "Slows down cellular degradation caused by radiation.",

	},
	{
		id: "anapralyzant",
		name_locale: "Anapralyzant",
		desc: "A cure for paralysis. Beware: Excessive use may cause psychosis.",

	},
	{
		id: "broad_spectrum_antibiotics",
		name_locale: "Broad-spectrum Antibiotics",
		desc: "A mild antibiotic that acts against a wide range of disease-causing bacteria, though with the side effect of minor organ damage. Used as an ingredient in many medical compounds.",

	},
	{
		id: "stabilozine",
		name_locale: "Stabilozine",
		desc: "Used as an ingredient in the manufacture of various medicines. On its own, can be used to slow down the effects of most toxins.",

	},
	{
		id: "opium",
		name_locale: "Opium",
		desc: "A relatively mild opioid obtained from aquatic poppy. Most commonly used to manufacture morphine and fentanyl.",

	},
	{
		id: "adrenaline",
		name_locale: "Adrenaline",
		desc: "A naturally occurring hormone. Useful for crafting.",

	},
	{
		id: "chlorine",
		name_locale: "Chlorine",
		desc: "Most commonly used in saline, a common treatment for blood loss, and chloral hydrate, a powerful sedative.",

	},
	{
		id: "alien_blood",
		name_locale: "Alien Blood",
		desc: "Blood extracted from a Europan lifeform. Can be further processed into a blood substitute for the treatment of blood loss.",

	},
	{
		id: "tonic_liquid",
		name_locale: "Tonic Liquid",
		desc: "A medical solution that's mildly effective as a treatment for internal damage, but most commonly used as an ingredient in more complex medical compounds.",

	},
	{
		id: "methamphetamine", name_locale: "Methamphetamine",
		desc: "A potent nervous system stimulant.",

	},
	{
		id: "anabolic_steroids",
		name_locale: "Anabolic Steroids",
		desc: "Temporarily increases muscular strength and physical performance.",

	},
	{
		id: "hyperzine",
		name_locale: "Hyperzine",
		desc: "An extremely potent muscle stimulant for those moments when you gotta go fast.",

	},
	{
		id: "oxygenite_shard",
		name_locale: "Oxygenite Shard",
		desc: "An alien mineral.",

	},
	{
		id: "velonaceps_calyx_eggs",
		name_locale: "Velonaceps Calyx Eggs",
		desc: "Dormant eggs of the Europan lifeform colloquially referred to as 'husk parasite'.",

	},
	{
		id: "morbusine",
		name_locale: "Morbusine",
		desc: "A highly potent neurotoxin.",

	},
	{
		id: "cyanide",
		name_locale: "Cyanide",
		desc: "A highly potent neurotoxin.",

	},
	{
		id: "sufforin",
		name_locale: "Sufforin",
		desc: "A highly potent neurotoxin.",

	},
	{
		id: "deliriumine",
		name_locale: "Deliriumine",
		desc: "A psychosis-inducing toxin.",

	},
	{
		id: "radiotoxin",
		name_locale: "Radiotoxin",
		desc: "A highly potent neurotoxin.",

	},
	{
		id: "paralyzant",
		name_locale: "Paralyzant",
		desc: "Causes paralysis.",

	},
	{
		id: "sulphuric_acid",
		name_locale: "Sulphuric Acid",
		desc: "A strong acid that causes burns when in contact with skin. Used as an ingredient in several poisons.",

	},
	{
		id: "chloral_hydrate",
		name_locale: "Chloral Hydrate",
		desc: "A sedative that can be used to knock someone out for a short period of time.",

	},





	// 材料
	{
		id: "steel_bar",
		name_locale: "Steel Bar",
		desc: "Useful for crafting.",
	},
	{
		id: "organic_fiber",
		name_locale: "Organic Fiber",
		desc: "Useful for crafting.",
	},
	{
		id: "ballistic_fiber",
		name_locale: "Ballistic Fiber",
		desc: "Useful for crafting.",
	},
	{
		id: "flash_powder",
		name_locale: "Flash Powder",
		desc: "Useful for crafting.",
	},
	{
		id: "carbon",
		name_locale: "Carbon",
		desc: "Most commonly used in the manufacture of steel and plastic.",
	},
	{
		id: "iron",
		name_locale: "Iron",
		desc: "Can be used in the manufacture of simple tools, or refined into steel by mixing it with carbon.",
	},
	{
		id: "plastic",
		name_locale: "Plastic",
		desc: "Useful for crafting.",
	},
	{
		id: "aluminium",
		name_locale: "Aluminum",
		desc: "An element, useful for crafting.",
	},
	{
		id: "rubber",
		name_locale: "Rubber",
		desc: "Useful for crafting.",
	},
	{
		id: "titanium-aluminium_alloy",
		name_locale: "Titanium-Aluminum Alloy",
		desc: "Useful for crafting.",
	},
	{
		id: "titanium",
		name_locale: "Titanium",
		desc: "An element, useful for crafting.",
	},
	{
		id: "sodium",
		name_locale: "Sodium",
		desc: "Medical fabricators can combine sodium and chloride to create a saline solution, which can be used as a treatment for blood loss or as an ingredient for more complex medicine.",
	},
	{
		id: "zinc",
		name_locale: "Zinc",
		desc: "Most commonly used in the manufacture of batteries and tonic liquid.",
	},
	{
		id: "physicorium_bar",
		name_locale: "Physicorium Bar",
		desc: "Useful for crafting.",
	},
	{
		id: "phosphorus",
		name_locale: "Phosphorus",
		desc: "Used in the manufacture of lamps, explosives and some medical compounds.",
	},
	{
		id: "lithium",
		name_locale: "Lithium",
		desc: "Most commonly used in the manufacture of batteries and antipsychotic drugs.",
	},
	{
		id: "fulgurium_bar",
		name_locale: "Fulgurium Bar",
		desc: "Useful for crafting.",
	},
	{
		id: "incendium_bar",
		name_locale: "Incendium Bar",
		desc: "Useful for crafting.",
	},
	{
		id: "dementonite_bar",
		name_locale: "Dementonite Bar",
		desc: "Useful for crafting.",
	},
	{
		id: "uranium",
		name_locale: "Uranium",
		desc: "Can be refined in a fabricator to create fuel rods for a nuclear reactor, or used in the manufacture of nuclear weapons.",
	},
	{
		id: "lead",
		name_locale: "Lead",
		desc: "Most commonly used in the manufacture of various types of ammunition.",
	},
	{
		id: "thorium",
		name_locale: "Thorium",
		desc: "An element, useful for crafting.",
	},
	{
		id: "copper",
		name_locale: "Copper",
		desc: "Most commonly used in the manufacture of electrical wiring.",
	},
	{
		id: "magnesium",
		name_locale: "Magnesium",
		desc: "Used in the manufacture of explosives and medical compounds. Reacts violently when in contact with water.",
	},
	{
		id: "potassium",
		name_locale: "Potassium",
		desc: "Used in the manufacture of explosives and medical compounds. Reacts violently when in contact with water.",
	},
	{
		id: "silicon",
		name_locale: "Silicon",
		desc: "Used as an ingredient in aluminum alloys, plastic and various electrical components.",
	},
	{
		id: "tin",
		name_locale: "Tin",
		desc: "Most commonly used in the manufacture of various electrical components.",
	},
	{
		id: "ethanol",
		name_locale: "Ethanol",
		desc: "Medical alcohol used as an ingredient in the manufacture of various medicines. Drinking while on duty is not advised.",
	},
	{
		id: "elastin",
		name_locale: "Elastin",
		desc: "A highly elastic, naturally occurring protein. Useful for crafting.",
	},
	{
		id: "paralyxis",
		name_locale: "Paralyxis",
		desc: "Useful for crafting.",
	},
	{
		id: "adrenaline_gland",
		name_locale: "Adrenaline Gland",
		desc: "Contains large amounts of adrenaline, which can be extracted using a deconstructor.",
	},
	{
		id: "calcium",
		name_locale: "Calcium",
		desc: "An element, useful for crafting.",
	},
	{
		id: "swim_bladder",
		name_locale: "Swim Bladder",
		desc: "Many Europan lifeforms have a swim bladder containing tissue fluids that can be easily processed into stabilozine and saline.",
	},









	// 礦物
	{
		id: "sulphurite_shard",
		name_locale: "Sulphurite Shard",
		desc: "An alien mineral.",
	},
	{
		id: "amblygonite",
		name_locale: "Amblygonite",
		desc: "A mineral composed of lithium, aluminum and sodium.",
	},
	{
		id: "aragonite",
		name_locale: "Aragonite",
		desc: "A mineral containing calcium.",
	},
	{
		id: "bornite",
		name_locale: "Bornite",
		desc: "A mineral containing copper.",
	},
	{
		id: "brockite",
		name_locale: "Brockite",
		desc: "A mineral containing thorium and phosphorus.",
	},
	{
		id: "cassiterite",
		name_locale: "Cassiterite",
		desc: "A mineral consisting of tin.",
	},
	{
		id: "chalcopyrite",
		name_locale: "Chalcopyrite",
		desc: "A mineral containing copper.",
	},
	{
		id: "chamosite",
		name_locale: "Chamosite",
		desc: "A mineral consisting of iron and aluminum.",
	},
	{
		id: "chrysoprase",
		name_locale: "Chrysoprase",
		desc: "A mineral containing silicon.",
	},
	{
		id: "cryolite",
		name_locale: "Cryolite",
		desc: "A mineral containing sodium.",
	},
	{
		id: "diamond",
		name_locale: "Diamond",
		desc: "A crystal composed of solid carbon.",
	},
	{
		id: "esperite",
		name_locale: "Esperite",
		desc: "A mineral composed of zinc and lead.",
	},
	{
		id: "galena",
		name_locale: "Galena",
		desc: "A mineral mostly consisting of lead.",
	},
	{
		id: "graphite",
		name_locale: "Graphite",
		desc: "Carbon in crystalline form.",
	},
	{
		id: "hydroxyapatite",
		name_locale: "Hydroxyapatite",
		desc: "A mineral composed of calcium and phosphorus.",
	},
	{
		id: "ilmenite",
		name_locale: "Ilmenite",
		desc: "A mineral containing titanium.",
	},
	{
		id: "iron_ore",
		name_locale: "Iron Ore",
		desc: "A mineral containing large amounts of iron.",
	},
	{
		id: "langbeinite",
		name_locale: "Langbeinite",
		desc: "A mineral consisting of potassium and magnesium.",
	},
	{
		id: "lazulite",
		name_locale: "Lazulite",
		desc: "A mineral containing phosphorus and iron.",
	},
	{
		id: "polyhalite",
		name_locale: "Polyhalite",
		desc: "A mineral consisting of potassium and calcium.",
	},
	{
		id: "pyromorphite",
		name_locale: "Pyromorphite",
		desc: "A mineral composed of chlorine.",
	},
	{
		id: "quartz",
		name_locale: "Quartz",
		desc: "A crystalline mineral composed of silicon.",
	},
	{
		id: "sphalerite",
		name_locale: "Sphalerite",
		desc: "A mineral consisting largely of zinc in crystalline form.",
	},
	{
		id: "stannite",
		name_locale: "Sphalerite",
		desc: "A mineral consisting largely of zinc in crystalline form.",
	},
	{
		id: "sylvite",
		name_locale: "Sylvite",
		desc: "A mineral containing potassium and sodium.",
	},
	{
		id: "thorianite",
		name_locale: "Thorianite",
		desc: "A rare mineral containing thorium.",
	},
	{
		id: "titanite",
		name_locale: "Titanite",
		desc: "A mineral containing titanium and iron.",
	},
	{
		id: "triphylite",
		name_locale: "Triphylite",
		desc: "A mineral containing lithium.",
	},
	{
		id: "uranium_ore",
		name_locale: "Uranium Ore",
		desc: "A mineral containing large concentrations of uranium.",
	},








	// 外星物品
	{
		id: "alien_trinket",
		name_locale: "Alien Trinket",
		desc: "Minor artifact found in alien ruins.",

	},
	{
		id: "alien_curio",
		name_locale: "Alien Curio",
		desc: "Minor artifact found in alien ruins.",

	},
	{
		id: "alien_ornament",
		name_locale: "Alien Ornament",
		desc: "Minor artifact found in alien ruins.",
	},
	{
		id: "sky_alien_artifact", 
		name_locale: "Sky Alien Artifact",
		desc: "Artifact found in alien ruins.",
	},
	{
		id: "thermal_alien_artifact",
		name_locale: "Thermal Alien Artifact",
		desc: "Artifact found in alien ruins.",
	},
	{
		id: "faraday_alien_artifact", 
		name_locale: "Faraday Alien Artifact",
		desc: "Artifact found in alien ruins.",
	},
	{
		id: "nasonov_alien_artifact",
		name_locale: "Nasonov Alien Artifact",
		desc: "Artifact found in alien ruins.",
	},
	{
		id: "psychosis_alien_artifact", 
		name_locale: "Psychosis Alien Artifact",
		desc: "Artifact found in alien ruins.",
	},
	{
		id: "mudraptor_egg", 
		name_locale: "Mudraptor Egg",
		desc: "A slimy, pulsating mudraptor egg. The gaping maw on top of the egg seems to be grasping for something to eat.",
	},







	// 植物
	{
		id: "aquatic_poppy", 
		name_locale: "Aquatic Poppy",
		desc: "It's warm to the touch. Useful for crafting.",
	},
	{
		id: "slime_bacteria", 
		name_locale: "Slime Bacteria",
		desc: "A colony of myxobacteria. Can be processed into antibiotics.",
	},
	{
		id: "sea_yeast_shroom", 
		name_locale: "Sea Yeast Shroom",
		desc: "The smell is beyond belief, like rotting meat on a hot day. Useful for crafting.",
	},
	{
		id: "fiber_plant", 
		name_locale: "Fiber Plant",
		desc: "This plant has the texture of a coconut and its fibers move on their own under your fingers unnervingly. Useful for crafting.",
	},
	{
		id: "elastin_plant", 
		name_locale: "Elastin Plant",
		desc: "The foliage of this plant cannot be torn, only stretched. Useful for crafting.",
	},
];

const ui: Dictionary<string> =
{
	"item": "Item",
	"recipe": "Recipe",
	"in game items": "In game items",
	"search(placeholder)": "search",
	"fabricator recipe": "Fabricator Recipe",
	"medical fabricator recipe": "Medical Fabricator Recipe",
	"deconstructor recipe": "Deconstructor Recipe",
	"fabricator": "Fabricator",
	"medical fabricator": "Medical Fabricator",
	"deconstructor": "Deconstructor",
	"crafting station": "Crafting Station",
	"product": "Product",
	"material": "Material",
	"crafting time": "Crafting Time",
	"require skill": "Require Skill",
	"deconstruct material": "Deconstruct Material",
	"deconstruct time": "Deconstruct Time",
	"second(s)": "second(s)",
	"level": "level",
	"electrical": "Electrical Engineering",
	"mechanical": "Mechanical Engineering",
	"medical": "Medical",
	"weapons": "Weapons",
	"helm": "Helm",
	"in game description": "In game description",
	"crafting recipe": "Crafting recipe",
	"deconstruct recipe": "Deconstruct recipe",
	"can obtain from deconstruct": "Can obtain from deconstruct",
	"can use to craft": "Can use to craft",
}

export default { items, ui };