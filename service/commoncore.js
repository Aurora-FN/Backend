const account = require("../modules/account")

module.exports = {
	async grabItems(accountId) {
		var Athena = await account.findOne({ id: accountId }).lean().catch(e => next(e))
		var AthenaData = {
			"Currency:MtxPurchased": {
				"attributes": {
					"platform": "EpicPC"
				},
				"quantity": Athena.vbucks,
				"templateId": "Currency:MtxGiveaway"
			},
		}
		return AthenaData
	},

	async attributes(accountId) {
		var Athena = await account.findOne({ id: accountId }).lean().catch(e => next(e))
		var AthenaData = {
			"mtx_affiliate": "ok",
			"current_mtx_platform": "EpicPC",
			"mtx_purchase_history": {

			}
		}
		return AthenaData
	}
}