const user = require("../modules/user")
const account = require("../modules/account")

const AthenaTemp = require("./athena")
const CommonCoreAltData = require("./commoncore")
module.exports = {
	async grabUserAccount(accountId, profileId) {
		try {
			var Athena = await account.findOne({ id: accountId }).lean().catch(e => next(e))
			var AthenaData = {
				"profileRevision": Athena.profilerevision,
				"profileId": profileId,
				"profileChangesBaseRevision": Athena.profilerevision,
				"profileChanges": [
					{
						"changeType": "fullProfileUpdate",
						"_id": "RANDOM",
						"profile": {
							"_id": "RANDOM",
							"Update": "",
							"Created": "2021-03-07T16:33:28.462Z",
							"updated": "2021-05-20T14:57:29.907Z",
							"rvn": 0,
							"wipeNumber": 1,
							"accountId": "",
							"profileId": profileId,
							"version": "no_version",
							"items": {},
							"stats": {
								"attributes": {}
							},
							"commandRevision": 5
						}
					}
				],
				"serverTime": new Date().toISOString(),
				"profileCommandRevision": Athena.profilerevision,
				"responseVersion": 1
			}

			if (profileId == "athena") {
				AthenaData['profileChanges'][0]['profile']['items'] = await AthenaTemp.grabItems(accountId) // this better be epic
				AthenaData['profileChanges'][0]['profile']['stats']['attributes'] = await AthenaTemp.attributes(accountId)
				return AthenaData;
			}
			else if (profileId == "common_core" || "common_public") {
				AthenaData['profileChanges'][0]['profile']['items'] = await CommonCoreAltData.grabItems(accountId)
				AthenaData['profileChanges'][0]['profile']['stats']['attributes'] = await CommonCoreAltData.attributes(accountId)
				return AthenaData;
			}
			return AthenaData;
		} catch (err) {
			console.log(err)
		}
	}
}