const user = require("../modules/user")
const account = require("../modules/account")

const AthenaTemp = require("./athena")
module.exports = {
	async grabUserAccount(accountId, profileId) {
		try {
            var Athena = await account.findOne({ id: accountId }).lean().catch(e => next(e))
			var AthenaData = {
				"profileRevision": account.profilerevision,
				"profileId": profileId,
				"profileChangesBaseRevision": account.profilerevision,
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
				"profileCommandRevision": account.profilerevision,
				"responseVersion": 1
			}

            AthenaData['profileChanges'][0]['profile']['items'] = await AthenaTemp.grabItems(accountId) // this better be epic
            AthenaData['profileChanges'][0]['profile']['stats']['attributes'] = await AthenaTemp.attributes(accountId)
            return AthenaData;
        }catch (err) {
            console.log(err)
        }
    }
}