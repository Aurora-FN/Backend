const user = require("../modules/user")
const account = require("../modules/account")
const athena = require("../json/athena.json")

module.exports = {
	async grabItems(accountId) {
		return athena
	},

	async attributes(accountId) {
		var Athena = await account.findOne({ id: accountId }).lean().catch(e => next(e))
		var AthenaData = {
			"past_seasons": [],
			"season_match_boost": 999999999,
			"loadouts": [
				"sandbox_loadout",
				"loadout_1"
			],
			"favorite_victorypose": "",
			"mfa_reward_claimed": false,
			"quest_manager": {
				"dailyLoginInterval": "2020-01-01T17:22:28.023Z",
				"dailyQuestRerolls": 1
			},
			"book_level": 70,
			"season_num": 2,
			"favorite_consumableemote": "",
			"banner_color": "DefaultColor1",
			"favorite_callingcard": "",
			"favorite_character": Athena.character,
			"favorite_spray": [],
			"book_xp": 100,
			"favorite_loadingscreen": Athena.loadingscreen,
			"book_purchased": true,
			"lifetime_wins": 100,
			"favorite_hat": "",
			"level": Athena.level,
			"favorite_battlebus": "",
			"favorite_mapmarker": "",
			"favorite_vehicledeco": "",
			"accountLevel": 100,
			"favorite_backpack": Athena.backpack,
			"favorite_dance": Athena.dance,
			"inventory_limit_bonus": 0,
			"last_applied_loadout": "",
			"favorite_skydivecontrail": Athena.skydivecontrail,
			"favorite_pickaxe": Athena.pickaxe,
			"favorite_glider": Athena.glider,
			"daily_rewards": {},
			"xp": 999,
			"season_friend_match_boost": 999999999,
			"active_loadout_index": 0,
			"favorite_musicpack": Athena.musicpack,
			"banner_icon": "StandardBanner1",
			"favorite_itemwraps": Athena.itemwrap
		}
		return AthenaData
	}
}
