import Database, { DatabaseState } from './Database';
import ItemInfoBox, { ItemInfoBoxState } from './ItemInfoBox';

/** APP State集合 */
export interface ContextState
{
	/** 資料庫 */
	database: DatabaseState;
	/** 物品資訊 */
	itemInfoBox: ItemInfoBoxState;
}

/** 所有 store 邏輯 */
const stores = [Database, ItemInfoBox];

export { stores };