import { GetStore } from 'store/ContextStore';

import Items, { Item } from 'data/item';
import enUs from 'data/lang/en-us';
import zhTw from 'data/lang/zh-tw';
import { Dictionary } from 'lodash';

export interface DatabaseState
{
	/** 是否載入完成 */
	ready: boolean;
	/** 物品資料 */
	items: Item[];
	/** 介面語言 */
	ui: Dictionary<string>;
	/** 語系 */
	lang: string;
	/** 設定語系 */
	setLang: (lang: string) => void;
	/** 從 id 搜尋物品 */
	getItemById: (id: string) => Item;
}

const getStore: GetStore = (setState, getState) =>
{
	const setLang = (lang: string) =>
	{
		let items: Item[] = [...Items];
		let ui: Dictionary<string> = {};

		if (lang !== "en-us")
			lang = "zh-tw";

		switch (lang)
		{
			case "en-us":
				items = Items.map(item =>
				{
					const target = enUs.items.find(_item => _item.id === item.id);
					if (target)
					{
						return {
							...item,
							name_locale: target.name_locale,
							desc: target.desc
						}
					}
					else
					{
						return item;
					}
				});
				ui = enUs.ui;
				break;
			case "zh-tw":
				ui = zhTw.ui;
				break;
		}

		setState(prev => ({ ...prev, database: { ...prev.database, items, ui, ready: true, lang } }));
	}

	const getItemById = (id: string) =>
	{
		const item = getState().database.items.find(item => item.id === id);
		if (item === undefined)
			throw new Error(`getItemById 找不到id ${id}`);

		return item;
	}

	return {
		database: {
			ready: false,
			items: [],
			lang: "zh-tw",
			ui: zhTw.ui,
			setLang,
			getItemById
		} as DatabaseState
	}
}

export default getStore;