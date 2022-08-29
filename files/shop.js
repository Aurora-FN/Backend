const fs = require("fs")
const path = require("path")
const shopConfig = require(path.join(__dirname,"../service/shop_config"))
const express = require("express")
const app = express.Router();
app.all('/fortnite/api/storefront/v2/catalog', async (req, res) => {
	//res.setHeader('content-type', 'application/octet-stream');			   
  res.send({
			"refreshIntervalHrs": 1,
			"dailyPurchaseHrs": 24,
			"expiration": "2025-12-26T21:00:00.000Z",
			"storefronts": [
				{
					"name": "CurrencyStorefront",
					"catalogEntries": [
						{
							"offerId": "425FDD804D9D61AC2530CE8F31398BCD",
							"devName": "Large Currency Pack",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": 69,
									"dynamicRegularPrice": -1,
									"finalPrice": 69,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 69
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"3b4c5df9efa5415b941cf74262865e4e",
								"ios_vbucks_large",
								"",
								"google_vbucks_large",
								"",
								"MTX08K0000000000",
								"d299e00d-811e-4b57-85c1-ec06cbc40074",
								"c-virtualcurrency0-MTX7500",
								"sam_vbucks_large",
								"BP2FKJFQ14TJ",
								"MTX08K0000000000"
							],
							"requirements": [],
							"metaInfo": [
								{
									"key": "MtxQuantity",
									"value": "7800"
								},
								{
									"key": "MtxBonus",
									"value": "1"
								},
								{
									"key": "IconSize",
									"value": "Large"
								},
								{
									"Key": "CurrencyAnalyticsName",
									"Value": "MtxPack7800"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 3,
							"title": "7,800 V-Bucks",
							"shortDescription": "",
							"description": "Buy 7,800 Fortnite V-Bucks that can be spent in Battle Royale, Creative, and Save the World modes. Note: Not all items purchased may be available in Save the World mode.",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_MtxPack7800.DA_MtxPack7800",
							"itemGrants": []
						},
						{
							"offerId": "A094F1D14BAE8DA77114DAAE76AFCA83",
							"devName": "Medium Currency Pack",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": 2,
									"dynamicRegularPrice": -1,
									"finalPrice": 2,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 2
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"559f2ba95f874ec987d0ebfd2cc9c70a",
								"ios_vbucks_medium",
								"",
								"google_vbucks_medium",
								"",
								"MTX03K0000000000",
								"cee19aa0-5238-4656-9e52-c8bd0765eb53",
								"c-virtualcurrency0-MTX2800",
								"sam_vbucks_medium",
								"C4BPBTQG5C1B",
								"MTX03K0000000000"
							],
							"requirements": [],
							"metaInfo": [
								{
									"key": "MtxQuantity",
									"value": "2800"
								},
								{
									"key": "MtxBonus",
									"value": "0"
								},
								{
									"key": "IconSize",
									"value": "Small"
								},
								{
									"key": "BannerOverride",
									"value": "12PercentExtra"
								},
								{
									"Key": "CurrencyAnalyticsName",
									"Value": "MtxPack2800"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 5,
							"title": "2,800 V-Bucks",
							"shortDescription": "",
							"description": "Buy 2,800 Fortnite V-Bucks that can be spent in Battle Royale, Creative, and Save the World modes. Note: Not all items purchased may be available in Save the World mode.",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_MtxPack2800.DA_MtxPack2800",
							"itemGrants": []
						},
						{
							"offerId": "50DC69A74BC4B8D10AF8D5B17A4BF8D4",
							"devName": "Jumbo Currency Pack",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": 2,
									"dynamicRegularPrice": -1,
									"finalPrice": 2,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 2
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"4daadb392f1c4ee2b5a3af443e614d2a",
								"ios_vbucks_jumbo",
								"",
								"google_vbucks_jumbo",
								"",
								"MTX14K0000000000",
								"d15248c0-acf6-48b7-9632-c9638cba4b37",
								"c-virtualcurrency0-MTX13500",
								"sam_vbucks_jumbo",
								"BWD299HXCXQK",
								"MTX14K0000000000"
							],
							"requirements": [],
							"metaInfo": [
								{
									"key": "MtxQuantity",
									"value": "13500"
								},
								{
									"key": "MtxBonus",
									"value": "0"
								},
								{
									"key": "BannerOverride",
									"value": "35PercentExtra"
								},
								{
									"key": "IconSize",
									"value": "XLarge"
								},
								{
									"Key": "CurrencyAnalyticsName",
									"Value": "MtxPack13500"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 2,
							"title": "13,500 V-Bucks",
							"shortDescription": "",
							"description": "Buy 13,500 Fortnite V-Bucks that can be spent in Battle Royale, Creative, and Save the World modes. Note: Not all items purchased may be available in Save the World mode.",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_MtxPack13500.DA_MtxPack13500",
							"itemGrants": []
						},
						{
							"offerId": "12C02A514B8718EB48EB4C9171715891",
							"devName": "Small Currency Pack",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": 2,
									"dynamicRegularPrice": -1,
									"finalPrice": 2,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 2
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"ede05b3c97e9475a8d9be91da65750f0",
								"ios_vbucks_small",
								"",
								"google_vbucks_small",
								"",
								"MTX01K0000000000",
								"6caed040-72dc-499a-9337-a165f1ec0a26",
								"c-virtualcurrency0-MTX1000",
								"sam_vbucks_small",
								"C0F5HT9NV86P",
								"MTX01K0000000000"
							],
							"requirements": [],
							"metaInfo": [
								{
									"key": "MtxQuantity",
									"value": "1000"
								},
								{
									"key": "MtxBonus",
									"value": "0"
								},
								{
									"key": "IconSize",
									"value": "XSmall"
								},
								{
									"Key": "CurrencyAnalyticsName",
									"Value": "MtxPack1000"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 6,
							"title": "1,000 V-Bucks",
							"shortDescription": "",
							"description": "Buy 1,000 Fortnite V-Bucks that can be spent in Battle Royale, Creative, and Save the World modes. Note: Not all items purchased may be available in Save the World mode.",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_MtxPack1000.DA_MtxPack1000",
							"itemGrants": []
						},
						{
							"offerId": "9484CF2E4C79CBACE1F94D908C51C792",
							"devName": "Intermediate Currency Pack",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": 23321,
									"dynamicRegularPrice": -1,
									"finalPrice": 132123123,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 123123123
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"d900ad5da7ec4eac86918bcfa0c3e698",
								"ios_vbucks_mediumplus",
								"",
								"google_vbucks_mediumplus",
								"",
								"MTX05K0000000000",
								"1f5d0b24-49e8-43b3-9547-3e4743c21823",
								"c-virtualcurrency0-MTX5000",
								"sam_vbucks_mediumplus",
								"C20FM0B4Q9KC",
								"MTX05K0000000000"
							],
							"requirements": [],
							"metaInfo": [
								{
									"key": "MtxQuantity",
									"value": "5000"
								},
								{
									"key": "MtxBonus",
									"value": "0"
								},
								{
									"key": "IconSize",
									"value": "Medium"
								},
								{
									"key": "BannerOverride",
									"value": "25PercentExtra"
								},
								{
									"Key": "CurrencyAnalyticsName",
									"Value": "MtxPack5000"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 4,
							"title": "5,000 V-Bucks",
							"shortDescription": "",
							"description": "Buy 5,000 Fortnite V-Bucks that can be spent in Battle Royale, Creative, and Save the World modes. Note: Not all items purchased may be available in Save the World mode.",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_MtxPack5000.DA_MtxPack5000",
							"itemGrants": []
						}
					]
				},
				{
					"name": "WinterQuest2019",
					"catalogEntries": [
						{
							"offerId": "01C3D16646CC1C135814EFBC62FD83D1",
							"devName": "WinterQuest2019",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": 2500,
									"dynamicRegularPrice": -1,
									"finalPrice": 2500,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 2500
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								""
							],
							"requirements": [
								{
									"requirementType": "DenyOnItemOwnership",
									"requiredId": "RewardEventGraphPurchaseToken:winterfestpurchasetoken",
									"minQuantity": 1
								}
							],
							"metaInfo": [],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 0,
							"title": "Winterfest!",
							"shortDescription": "",
							"description": "",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_WinterQuest2019.DA_WinterQuest2019",
							"itemGrants": [
								{
									"templateId": "RewardEventGraphPurchaseToken:winterfestpurchasetoken",
									"quantity": 1
								}
							],
							"giftInfo": {
								"bIsEnabled": true,
								"forcedGiftBoxTemplateId": "",
								"purchaseRequirements": []
							}
						}
					]
				},
				{
					"name": "GiftableItems",
					"catalogEntries": [
						{
							"offerId": "722DD1CF407A49449734D9B9A8033295",
							"devName": "Glow Grant",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "GameItem",
									"currencySubType": "Token:giftglowtoken",
									"regularPrice": 1,
									"dynamicRegularPrice": -1,
									"finalPrice": 1,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 1
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								""
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "BD04D08047CBD5B284C544A33619C860",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "TokenOffer",
									"value": "02A0B24240C2528B435EF4817E89070F"
								},
								{
									"key": "bIgnoreGiftLimit",
									"value": "true"
								},
								{
									"key": "bIgnoreFriendTimeReq",
									"value": "true"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 0,
							"title": "Glow",
							"shortDescription": "",
							"description": "The aura of victory glows bright.",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_CID_479_Athena_Commando_F_Davinci.DA_Featured_CID_479_Athena_Commando_F_Davinci",
							"itemGrants": [
								{
									"templateId": "AthenaCharacter:cid_479_athena_commando_f_davinci",
									"quantity": 1
								}
							],
							"giftInfo": {
								"bIsEnabled": true,
								"forcedGiftBoxTemplateId": "",
								"purchaseRequirements": []
							}
						}
					]
				},
				{
					"name": "CreativeEventStorefront",
					"catalogEntries": []
				},
				{
					"name": "BRSeason20",
					"catalogEntries": []
				},
				{
					"name": "CardPackStorePreroll",
					"catalogEntries": [
						{
							"offerId": "4D64CBE3618D41FBB5CAD0E472F4610A",
							"devName": "Always.UpgradePack.01",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "GameItem",
									"currencySubType": "AccountResource:currency_xrayllama",
									"regularPrice": 50,
									"dynamicRegularPrice": -1,
									"finalPrice": 50,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 50
								},
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": 50,
									"dynamicRegularPrice": -1,
									"finalPrice": 50,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 50
								}
							],
							"categories": [],
							"dailyLimit": 50,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								""
							],
							"requirements": [
								{
									"requirementType": "RequireFulfillment",
									"requiredId": "63BE689248CAF1251C84B4B3574F90EF",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "SharedDisplayPriority",
									"value": "1"
								},
								{
									"key": "bUseUpgradeDisplay",
									"value": "True"
								},
								{
									"key": "ProfileId",
									"value": "campaign"
								},
								{
									"key": "Preroll",
									"value": "True"
								},
								{
									"key": "MaxConcurrentPurchases",
									"value": "1"
								},
								{
									"key": "LinkedPrerollOffer",
									"value": "OfferId:D2E08EFA731D437B85B7340EB51A5E1D"
								}
							],
							"catalogGroup": "Upgrade",
							"catalogGroupPriority": 1,
							"sortPriority": 0,
							"title": "Upgrade Llama",
							"shortDescription": "",
							"description": "The old faithful llama, packed with a variety of goodies and upgrade materials. Contains at least 4 items, including a rare item or a hero! Has a high chance to upgrade.",
							"displayAssetPath": "/Game/Items/CardPacks/CardPack_Bronze.CardPack_Bronze",
							"itemGrants": [
								{
									"templateId": "CardPack:cardpack_bronze",
									"quantity": 1
								}
							]
						},
						{
							"offerId": "B9B0CE758A5049F898773C1A47A69ED4",
							"devName": "Always.UpgradePack.03",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "GameItem",
									"currencySubType": "AccountResource:currency_xrayllama",
									"regularPrice": 50,
									"dynamicRegularPrice": -1,
									"finalPrice": 0,
									"saleType": "Strikethrough",
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 0
								},
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": 50,
									"dynamicRegularPrice": -1,
									"finalPrice": 0,
									"saleType": "Strikethrough",
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 0
								}
							],
							"categories": [],
							"dailyLimit": 1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								""
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "63BE689248CAF1251C84B4B3574F90EF",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "ProfileId",
									"value": "campaign"
								},
								{
									"key": "Preroll",
									"value": "True"
								},
								{
									"key": "MaxConcurrentPurchases",
									"value": "1"
								}
							],
							"catalogGroup": "Upgrade",
							"catalogGroupPriority": 999,
							"sortPriority": 0,
							"title": "Upgrade Llama",
							"shortDescription": "",
							"description": "The old faithful llama, packed with a variety of goodies and upgrade materials. Contains at least 4 items, including a rare item or a hero! Has a high chance to upgrade.",
							"displayAssetPath": "/Game/Items/CardPacks/CardPack_Bronze.CardPack_Bronze",
							"itemGrants": [
								{
									"templateId": "CardPack:cardpack_bronze",
									"quantity": 1
								}
							]
						},
						{
							"offerId": "D2E08EFA731D437B85B7340EB51A5E1D",
							"devName": "Always.UpgradePack.02",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "GameItem",
									"currencySubType": "AccountResource:voucher_cardpack_bronze",
									"regularPrice": 1,
									"dynamicRegularPrice": -1,
									"finalPrice": 1,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 1
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								""
							],
							"requirements": [
								{
									"requirementType": "RequireFulfillment",
									"requiredId": "63BE689248CAF1251C84B4B3574F90EF",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "SharedDisplayPriority",
									"value": "2"
								},
								{
									"key": "bUseUpgradeDisplay",
									"value": "True"
								},
								{
									"key": "ProfileId",
									"value": "campaign"
								},
								{
									"key": "Preroll",
									"value": "True"
								},
								{
									"key": "MaxConcurrentPurchases",
									"value": "1"
								},
								{
									"key": "LinkedPrerollOffer",
									"value": "OfferId:4D64CBE3618D41FBB5CAD0E472F4610A"
								}
							],
							"catalogGroup": "Upgrade",
							"catalogGroupPriority": 2,
							"sortPriority": 0,
							"title": "Upgrade Llama",
							"shortDescription": "",
							"description": "The old faithful llama, packed with a variety of goodies and upgrade materials. Contains at least 4 items, including a rare item or a hero! Has a high chance to upgrade.",
							"displayAssetPath": "/Game/Items/CardPacks/CardPack_Bronze.CardPack_Bronze",
							"itemGrants": [
								{
									"templateId": "CardPack:cardpack_bronze",
									"quantity": 1
								}
							]
						},
						{
							"offerId": "126B4018C98C4698BCB34CE7E49E40CA",
							"devName": "Fixed.Single.30",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "GameItem",
									"currencySubType": "AccountResource:currency_xrayllama",
									"regularPrice": 300,
									"dynamicRegularPrice": -1,
									"finalPrice": 300,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 300
								},
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": 300,
									"dynamicRegularPrice": -1,
									"finalPrice": 300,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 300
								}
							],
							"categories": [],
							"dailyLimit": 5,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								""
							],
							"requirements": [],
							"metaInfo": [
								{
									"key": "ProfileId",
									"value": "campaign"
								},
								{
									"key": "Preroll",
									"value": "True"
								},
								{
									"key": "MaxConcurrentPurchases",
									"value": "1"
								}
							],
							"catalogGroup": "Shared",
							"catalogGroupPriority": 10,
							"sortPriority": 0,
							"title": "Sci-Fi Llama",
							"shortDescription": "",
							"description": "Guarantees at least one Epic or better limited time Sci-Fi weapon or Hero!",
							"displayAssetPath": "/Game/Items/CardPacks/Events/Release/CardPack_Event_2019_Season9.CardPack_Event_2019_Season9",
							"itemGrants": [
								{
									"templateId": "CardPack:cardpack_event_2019_season9",
									"quantity": 1
								}
							]
						},
						{
							"offerId": "5079BDE505F240869FF81C65C9AA5D69",
							"devName": "Fixed.Single.13",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "GameItem",
									"currencySubType": "AccountResource:currency_xrayllama",
									"regularPrice": 1500,
									"dynamicRegularPrice": -1,
									"finalPrice": 0,
									"saleType": "Strikethrough",
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 0
								},
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": 1500,
									"dynamicRegularPrice": -1,
									"finalPrice": 0,
									"saleType": "Strikethrough",
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 0
								}
							],
							"categories": [],
							"dailyLimit": 1,
							"weeklyLimit": 1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								""
							],
							"requirements": [],
							"metaInfo": [
								{
									"key": "ProfileId",
									"value": "campaign"
								},
								{
									"key": "Preroll",
									"value": "True"
								},
								{
									"key": "MaxConcurrentPurchases",
									"value": "1"
								},
								{
									"key": "ExpirationDays",
									"value": "7"
								}
							],
							"catalogGroup": "Shared",
							"catalogGroupPriority": 15,
							"sortPriority": 0,
							"title": "Smörgåsbord Llama",
							"shortDescription": "",
							"description": "A set of legendary choices! Guarantees a ranged weapon, melee weapon, trap, hero, defender, one random choice, and one survivor (no choice).",
							"displayAssetPath": "/Game/Items/CardPacks/CardPack_Jackpot_SuperChoice.CardPack_Jackpot_SuperChoice",
							"itemGrants": [
								{
									"templateId": "CardPack:cardpack_jackpot_superchoice",
									"quantity": 1
								}
							]
						},
						{
							"offerId": "8339003D26B24F70878EE280B70C340D",
							"devName": "Fixed.Single.21",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "GameItem",
									"currencySubType": "AccountResource:currency_xrayllama",
									"regularPrice": 50,
									"dynamicRegularPrice": -1,
									"finalPrice": 0,
									"saleType": "Strikethrough",
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 0
								},
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": 50,
									"dynamicRegularPrice": -1,
									"finalPrice": 0,
									"saleType": "Strikethrough",
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 0
								}
							],
							"categories": [],
							"dailyLimit": 2,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								""
							],
							"requirements": [],
							"metaInfo": [
								{
									"key": "ProfileId",
									"value": "campaign"
								},
								{
									"key": "Preroll",
									"value": "True"
								},
								{
									"key": "MaxConcurrentPurchases",
									"value": "1"
								}
							],
							"catalogGroup": "Upgrade",
							"catalogGroupPriority": 11,
							"sortPriority": 0,
							"title": "Upgrade Llama (Seasonal Sale Freebie!)",
							"shortDescription": "",
							"description": "The old faithful llama, packed with a variety of goodies and upgrade materials. Contains at least 4 items, including a rare item or a hero! Has a high chance to upgrade.",
							"displayAssetPath": "/Game/Items/CardPacks/CardPack_Bronze.CardPack_Bronze",
							"itemGrants": [
								{
									"templateId": "CardPack:cardpack_bronze",
									"quantity": 1
								}
							]
						}
					]
				},
				{
					"name": "CardPackStoreGameplay",
					"catalogEntries": [
						{
							"offerId": "5366E22A41C8428682737CF99513DC5F",
							"devName": "Always.Gameplay.JackpotVoucher.01",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "GameItem",
									"currencySubType": "AccountResource:voucher_cardpack_jackpot",
									"regularPrice": 1,
									"dynamicRegularPrice": -1,
									"finalPrice": 1,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 1
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								""
							],
							"requirements": [],
							"metaInfo": [
								{
									"key": "bUseSharedDisplay",
									"value": "True"
								},
								{
									"key": "SharedDisplayPriority",
									"value": "100"
								},
								{
									"key": "Preroll",
									"value": "False"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 0,
							"title": "Legendary Troll Stash Llama",
							"shortDescription": "",
							"description": "An entire suite of goodies, direct from your local troll's stash! Contains at least 8 definitely-not-stolen items.",
							"displayAssetPath": "/Game/Items/CardPacks/CardPack_Jackpot.CardPack_Jackpot",
							"itemGrants": [
								{
									"templateId": "CardPack:cardpack_jackpot",
									"quantity": 1
								}
							]
						},
						{
							"offerId": "30A676BCF19B4D179F11D59079C69B6D",
							"devName": "Always.Gameplay.DailyLoginPack.01",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "GameItem",
									"currencySubType": "AccountResource:voucher_custom_firecracker_r",
									"regularPrice": 1,
									"dynamicRegularPrice": -1,
									"finalPrice": 1,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 1
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								""
							],
							"requirements": [],
							"metaInfo": [
								{
									"key": "bUseSharedDisplay",
									"value": "True"
								},
								{
									"key": "SharedDisplayPriority",
									"value": "101"
								},
								{
									"key": "Preroll",
									"value": "False"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 0,
							"title": "Rare Firecracker Pistol",
							"shortDescription": "",
							"description": "One random Firecracker schematic.",
							"displayAssetPath": "/Game/Items/CardPacks/SpecificRewards/CardPack_Custom_Firecracker_R.CardPack_Custom_Firecracker_R",
							"itemGrants": [
								{
									"templateId": "CardPack:cardpack_custom_firecracker_r",
									"quantity": 1
								}
							]
						},
						{
							"offerId": "959E6F5FD39445539F65789EDB551013",
							"devName": "Always.Gameplay.2021AnniversaryVoucher.01",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "GameItem",
									"currencySubType": "AccountResource:voucher_cardpack_2021anniversary",
									"regularPrice": 1,
									"dynamicRegularPrice": -1,
									"finalPrice": 1,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 1
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								""
							],
							"requirements": [],
							"metaInfo": [
								{
									"key": "bUseSharedDisplay",
									"value": "True"
								},
								{
									"key": "SharedDisplayPriority",
									"value": "100"
								},
								{
									"key": "Preroll",
									"value": "False"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 0,
							"title": "2021 Birthday Llama",
							"shortDescription": "",
							"description": "A blast from the past! Guarantees a weapon schematic and hero introduced during Fortnite events. One Epic or better, and one Legendary!",
							"displayAssetPath": "/Game/Items/CardPacks/Events/2021_Anniversary/CardPack_Event_2021_Anniversary.CardPack_Event_2021_Anniversary",
							"itemGrants": [
								{
									"templateId": "CardPack:cardpack_event_2021_anniversary",
									"quantity": 1
								}
							]
						},
						{
							"offerId": "1F6B613D4B7BAD47D8A93CAEED2C4996",
							"devName": "Mini Llama Manual Tutorial - high SharedDisplayPriority",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "GameItem",
									"currencySubType": "AccountResource:voucher_basicpack",
									"regularPrice": 1,
									"dynamicRegularPrice": -1,
									"finalPrice": 1,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 1
								}
							],
							"categories": [],
							"dailyLimit": 1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								""
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "82ADCC874CFC2D47927208BAE871CF2B",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "bUseSharedDisplay",
									"value": "true"
								},
								{
									"key": "SharedDisplayPriority",
									"value": "999999"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 0,
							"title": "Mini Reward Llama",
							"shortDescription": "",
							"description": "A simple llama stuffed with basic goods to get you through your first apocalypse. Contains at least 3 items.\r\n",
							"displayAssetPath": "/Game/Items/CardPacks/CardPack_Basic.CardPack_Basic",
							"itemGrants": [
								{
									"templateId": "CardPack:cardpack_basic",
									"quantity": 1
								}
							]
						},
						{
							"offerId": "73216346454B1B2892DDA381C75E1BCB",
							"devName": "Mini Llama Manual Default - Low SharedDisplayPriority",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "GameItem",
									"currencySubType": "AccountResource:voucher_basicpack",
									"regularPrice": 1,
									"dynamicRegularPrice": -1,
									"finalPrice": 1,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 1
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								""
							],
							"requirements": [
								{
									"requirementType": "RequireFulfillment",
									"requiredId": "82ADCC874CFC2D47927208BAE871CF2B",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "bUseSharedDisplay",
									"value": "true"
								},
								{
									"key": "SharedDisplayPriority",
									"value": "1"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 0,
							"title": "Mini Reward Llama",
							"shortDescription": "",
							"description": "A simple llama stuffed with basic goods to get you through your first apocalypse. Contains at least 3 items.\r\n",
							"displayAssetPath": "/Game/Items/CardPacks/CardPack_Basic.CardPack_Basic",
							"itemGrants": [
								{
									"templateId": "CardPack:cardpack_basic",
									"quantity": 1
								}
							]
						},
						{
							"offerId": "551ACAFE914A44389DAD6FE40B5D4CBE",
							"devName": "Event.Event.Persistent.Holiday.01",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "GameItem",
									"currencySubType": "AccountResource:eventcurrency_snowballs",
									"regularPrice": 500,
									"dynamicRegularPrice": -1,
									"finalPrice": 500,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 500
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								""
							],
							"requirements": [],
							"metaInfo": [
								{
									"key": "Preroll",
									"value": "False"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 0,
							"title": "Holiday Llama",
							"shortDescription": "",
							"description": "Guarantees at least one Epic or better limited time Toy weapon or Holiday hero!",
							"displayAssetPath": "/Game/Items/CardPacks/Events/Release/CardPack_Event_Persistent_Holiday.CardPack_Event_Persistent_Holiday",
							"itemGrants": [
								{
									"templateId": "CardPack:cardpack_event_persistent_holiday",
									"quantity": 1
								}
							]
						}
					]
				},
				{
					"name": "BPGifting",
					"catalogEntries": [
						{
							"offerId": "B5FCB8D440CAB93A3080798FACEB77A3",
							"devName": "Battle Pass Gift Token",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": 2,
									"dynamicRegularPrice": -1,
									"finalPrice": 2,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 2
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"fe6761741a484d2baec61abbd38d5642",
								"ios_bpsg10_C",
								"",
								"google_bpsg10",
								"",
								"BPSG100000000000",
								"4d315039-5446-3033-c034-3037444bfe00",
								"c-giftable00000010-BPSG10",
								"sam_BPSG10",
								"9P1MFT3407DK",
								"BPSG100000000000"
							],
							"requirements": [
								{
									"requirementType": "DenyOnItemOwnership",
									"requiredId": "Token:battlepassgift",
									"minQuantity": 1
								}
							],
							"metaInfo": [],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 0,
							"title": "BP Gift Token",
							"shortDescription": "",
							"description": "Give a friend the Chapter 3, Season 1 Battle Pass! Your purchase includes:\r\n\r\n- A token allowing gifting of the Chapter 3 Season 1 Battle Pass to a friend of your choice.\r\n- A unique Gift Box for you to use when gifting items from the Battle Royale shop (unlocks only once).\r\n\r\nNote: In order to gift, you must have multi-factor authentication enabled on your account. You must also be Epic friends with the recipient for at least 48 hours before you can send them a gift.\r\n\r\nYou will only be able to gift five times within a 24 hour period. Any gifts that are purchased or received are NOT refundable. You can only gift one Battle Pass at a time.\r\n\r\nIf your intended recipient purchases the Battle Pass or subscribes to the Fortnite Crew before you complete your purchase, you can gift the Battle Pass to someone else. If you don’t gift the Battle Pass by the end of the season, it will be refunded as 950 V-Bucks in your account.",
							"displayAssetPath": "",
							"itemGrants": [
								{
									"templateId": "Token:battlepassgift",
									"quantity": 1
								},
								{
									"templateId": "GiftBoxUnlock:s19battlepassgb",
									"quantity": 1
								}
							]
						},
						{
							"offerId": "56FA0C554DA1FEEEB0D01BADD43295A1",
							"devName": "iOS Battle Pass Gift Token",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": 69,
									"dynamicRegularPrice": -1,
									"finalPrice": 69,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 69
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								""
							],
							"requirements": [
								{
									"requirementType": "DenyOnItemOwnership",
									"requiredId": "Token:battlepassgift",
									"minQuantity": 1
								}
							],
							"metaInfo": [],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 0,
							"title": "BP Gift Token",
							"shortDescription": "",
							"description": "Give a friend the Chapter 2, Season 5 Battle Pass! Your purchase includes:\r\n\r\n- A token allowing gifting of the Chapter 2, Season 5 Battle Pass to a friend of your choice.\r\n- A unique Gift Box for you to use when gifting items from the Battle Royale shop (unlocks only once).\r\n\r\nNote: In order to gift, you must have multi-factor authentication enabled on your account. You must also be Epic friends with the recipient for at least 48 hours before you can send them a gift.\r\n\r\nYou will only be able to gift five times within a 24 hour period. Any gifts that are purchased or received are NOT refundable. You can only gift one Battle Pass at a time.\r\n\r\nIf your intended recipient purchases the Battle Pass before you complete your purchase, you can gift the Battle Pass to someone else. If you don’t gift the Battle Pass by the end of the season, it will be refunded as 950 V-Bucks in your account.",
							"displayAssetPath": "",
							"itemGrants": [
								{
									"templateId": "Token:battlepassgift",
									"quantity": 1
								},
								{
									"templateId": "GiftBoxUnlock:s15battlepassgb",
									"quantity": 1
								},
								{
									"templateId": "Currency:MtxPurchaseBonus",
									"quantity": 50
								}
							]
						}
					]
				},
				{
					"name": "STWRotationalEventStorefront",
					"catalogEntries": [
						{
							"devName": "[VIRTUAL]1 x did_defendershotgun_basic_sr_t01 for 1680 GameItem : AccountResource:eventcurrency_scaling",
							"offerId": "v2:/6a692f5ee7b517106c0fcb5735376ef0d9179b84399963ea3e3614eb70541d01",
							"fulfillmentIds": [],
							"dailyLimit": -1,
							"weeklyLimit": 1,
							"monthlyLimit": -1,
							"categories": [],
							"prices": [
								{
									"currencyType": "GameItem",
									"currencySubType": "AccountResource:eventcurrency_scaling",
									"regularPrice": 1680,
									"dynamicRegularPrice": 1680,
									"finalPrice": 1680,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 1680
								}
							],
							"meta": {},
							"matchFilter": "",
							"filterWeight": 0.0,
							"appStoreId": [],
							"requirements": [],
							"offerType": "StaticPrice",
							"refundable": false,
							"itemGrants": [
								{
									"templateId": "Defender:did_defendershotgun_basic_sr_t01",
									"quantity": 1,
									"attributes": {
										"Alteration": {
											"LootTierGroup": "AlterationTG.Defender.Shotgun.SR",
											"Tier": 0
										}
									}
								}
							],
							"additionalGrants": [],
							"sortPriority": 0,
							"catalogGroupPriority": 0
						},
						{
							"devName": "[VIRTUAL]1 x Copper Stalwart Squire for 600 GameItem : AccountResource:eventcurrency_scaling",
							"offerId": "v2:/581d02fbbb52f9185f1acd58f0a400fda755d6532f234ee1141ab9b336185292",
							"fulfillmentIds": [],
							"dailyLimit": -1,
							"weeklyLimit": 1,
							"monthlyLimit": -1,
							"categories": [],
							"prices": [
								{
									"currencyType": "GameItem",
									"currencySubType": "AccountResource:eventcurrency_scaling",
									"regularPrice": 600,
									"dynamicRegularPrice": 600,
									"finalPrice": 600,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 600
								}
							],
							"meta": {},
							"matchFilter": "",
							"filterWeight": 0.0,
							"appStoreId": [],
							"requirements": [],
							"offerType": "StaticPrice",
							"refundable": false,
							"itemGrants": [
								{
									"templateId": "Schematic:sid_shotgun_medieval_vr_ore_t01",
									"quantity": 1
								}
							],
							"additionalGrants": [],
							"sortPriority": 20,
							"catalogGroupPriority": 0
						},
						{
							"devName": "[VIRTUAL]10 x Pure Drop of Rain for 50 GameItem : AccountResource:eventcurrency_scaling",
							"offerId": "v2:/83ac0269acedb2d5634a031f55b643b852272903e74d9fa1bb49256a0c06abef",
							"fulfillmentIds": [],
							"dailyLimit": -1,
							"weeklyLimit": 8,
							"monthlyLimit": -1,
							"categories": [],
							"prices": [
								{
									"currencyType": "GameItem",
									"currencySubType": "AccountResource:eventcurrency_scaling",
									"regularPrice": 50,
									"dynamicRegularPrice": 50,
									"finalPrice": 50,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 50
								}
							],
							"meta": {},
							"matchFilter": "",
							"filterWeight": 0.0,
							"appStoreId": [],
							"requirements": [],
							"offerType": "StaticPrice",
							"refundable": false,
							"itemGrants": [
								{
									"templateId": "AccountResource:reagent_c_t01",
									"quantity": 10
								}
							],
							"additionalGrants": [],
							"sortPriority": 0,
							"catalogGroupPriority": 0
						},
						{
							"devName": "[VIRTUAL]200 x RE-PERK! for 100 GameItem : AccountResource:eventcurrency_scaling",
							"offerId": "v2:/9b91076467e61cf01a3c16e39a18331d2e23d754cdafc860aac0fdd7155615ae",
							"fulfillmentIds": [],
							"dailyLimit": -1,
							"weeklyLimit": 10,
							"monthlyLimit": -1,
							"categories": [],
							"prices": [
								{
									"currencyType": "GameItem",
									"currencySubType": "AccountResource:eventcurrency_scaling",
									"regularPrice": 100,
									"dynamicRegularPrice": 100,
									"finalPrice": 100,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 100
								}
							],
							"meta": {},
							"matchFilter": "",
							"filterWeight": 0.0,
							"appStoreId": [],
							"requirements": [],
							"offerType": "StaticPrice",
							"refundable": false,
							"itemGrants": [
								{
									"templateId": "AccountResource:reagent_alteration_generic",
									"quantity": 200
								}
							],
							"additionalGrants": [],
							"sortPriority": 0,
							"catalogGroupPriority": 0
						},
						{
							"devName": "[VIRTUAL]1 x Energy Thief Mari for 1000 GameItem : AccountResource:eventcurrency_scaling",
							"offerId": "v2:/8c49d65b6f2a0bd6a9e0043e9307092cded787800f365cb97af9a61e2caf8fcd",
							"fulfillmentIds": [],
							"dailyLimit": -1,
							"weeklyLimit": 1,
							"monthlyLimit": -1,
							"categories": [],
							"prices": [
								{
									"currencyType": "GameItem",
									"currencySubType": "AccountResource:eventcurrency_scaling",
									"regularPrice": 1000,
									"dynamicRegularPrice": 1000,
									"finalPrice": 1000,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 1000
								}
							],
							"meta": {},
							"matchFilter": "",
							"filterWeight": 0.0,
							"appStoreId": [],
							"requirements": [],
							"offerType": "StaticPrice",
							"refundable": false,
							"itemGrants": [
								{
									"templateId": "Hero:hid_ninja_011_vr_t01",
									"quantity": 1
								}
							],
							"additionalGrants": [],
							"sortPriority": 0,
							"catalogGroupPriority": 0
						},
						{
							"devName": "[VIRTUAL]10 x Lightning in a Bottle for 100 GameItem : AccountResource:eventcurrency_scaling",
							"offerId": "v2:/aacc97a394a9feaa106ad275caad4e4f22b987d8ceb42d64991024bf6d8a5404",
							"fulfillmentIds": [],
							"dailyLimit": -1,
							"weeklyLimit": 4,
							"monthlyLimit": -1,
							"categories": [],
							"prices": [
								{
									"currencyType": "GameItem",
									"currencySubType": "AccountResource:eventcurrency_scaling",
									"regularPrice": 100,
									"dynamicRegularPrice": 100,
									"finalPrice": 100,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 100
								}
							],
							"meta": {},
							"matchFilter": "",
							"filterWeight": 0.0,
							"appStoreId": [],
							"requirements": [],
							"offerType": "StaticPrice",
							"refundable": false,
							"itemGrants": [
								{
									"templateId": "AccountResource:reagent_c_t02",
									"quantity": 10
								}
							],
							"additionalGrants": [],
							"sortPriority": 0,
							"catalogGroupPriority": 0
						},
						{
							"devName": "[VIRTUAL]90 x Rare PERK-UP! for 200 GameItem : AccountResource:eventcurrency_scaling",
							"offerId": "v2:/4f1c82dc8fb66fef5a0046fb2163344069b65b6ba64e496939d2fc8e8f779157",
							"fulfillmentIds": [],
							"dailyLimit": -1,
							"weeklyLimit": 5,
							"monthlyLimit": -1,
							"categories": [],
							"prices": [
								{
									"currencyType": "GameItem",
									"currencySubType": "AccountResource:eventcurrency_scaling",
									"regularPrice": 200,
									"dynamicRegularPrice": 200,
									"finalPrice": 200,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 200
								}
							],
							"meta": {},
							"matchFilter": "",
							"filterWeight": 0.0,
							"appStoreId": [],
							"requirements": [],
							"offerType": "StaticPrice",
							"refundable": false,
							"itemGrants": [
								{
									"templateId": "AccountResource:reagent_alteration_upgrade_r",
									"quantity": 90
								}
							],
							"additionalGrants": [],
							"sortPriority": 0,
							"catalogGroupPriority": 0
						},
						{
							"devName": "[VIRTUAL]10 x Rare Flux for 30 GameItem : AccountResource:eventcurrency_scaling",
							"offerId": "v2:/d9fe40e917bf98babee1c239153990efe3e1a568dd0e985c663dbba228eef03f",
							"fulfillmentIds": [],
							"dailyLimit": -1,
							"weeklyLimit": 20,
							"monthlyLimit": -1,
							"categories": [],
							"prices": [
								{
									"currencyType": "GameItem",
									"currencySubType": "AccountResource:eventcurrency_scaling",
									"regularPrice": 30,
									"dynamicRegularPrice": 30,
									"finalPrice": 30,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 30
								}
							],
							"meta": {},
							"matchFilter": "",
							"filterWeight": 0.0,
							"appStoreId": [],
							"requirements": [],
							"offerType": "StaticPrice",
							"refundable": false,
							"itemGrants": [
								{
									"templateId": "AccountResource:reagent_evolverarity_r",
									"quantity": 10
								}
							],
							"additionalGrants": [],
							"sortPriority": 0,
							"catalogGroupPriority": 0
						},
						{
							"devName": "[VIRTUAL]1 x Copper Masters Driver for 600 GameItem : AccountResource:eventcurrency_scaling",
							"offerId": "v2:/b1b61acc5985125b1a76a2ca4868d7f238453c1d9a585d538dc7093b7307402e",
							"fulfillmentIds": [],
							"dailyLimit": -1,
							"weeklyLimit": 1,
							"monthlyLimit": -1,
							"categories": [],
							"prices": [
								{
									"currencyType": "GameItem",
									"currencySubType": "AccountResource:eventcurrency_scaling",
									"regularPrice": 600,
									"dynamicRegularPrice": 600,
									"finalPrice": 600,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 600
								}
							],
							"meta": {},
							"matchFilter": "",
							"filterWeight": 0.0,
							"appStoreId": [],
							"requirements": [],
							"offerType": "StaticPrice",
							"refundable": false,
							"itemGrants": [
								{
									"templateId": "Schematic:sid_blunt_club_light_vr_ore_t01",
									"quantity": 1,
									"attributes": {
										"Alteration": {
											"LootTierGroup": "AlterationTG.Melee.VR",
											"Tier": 0
										}
									}
								}
							],
							"additionalGrants": [],
							"sortPriority": 0,
							"catalogGroupPriority": 0
						},
						{
							"devName": "[VIRTUAL]1 x workerbasic_vr_t01 for 250 GameItem : AccountResource:eventcurrency_scaling",
							"offerId": "v2:/fd2b5edc1839496be18a0cb1ef1bc74c07f391b4448de53d07bb63f695f1763b",
							"fulfillmentIds": [],
							"dailyLimit": -1,
							"weeklyLimit": 2,
							"monthlyLimit": -1,
							"categories": [],
							"prices": [
								{
									"currencyType": "GameItem",
									"currencySubType": "AccountResource:eventcurrency_scaling",
									"regularPrice": 250,
									"dynamicRegularPrice": 250,
									"finalPrice": 250,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 250
								}
							],
							"meta": {},
							"matchFilter": "",
							"filterWeight": 0.0,
							"appStoreId": [],
							"requirements": [],
							"offerType": "StaticPrice",
							"refundable": false,
							"itemGrants": [
								{
									"templateId": "Worker:workerbasic_vr_t01",
									"quantity": 1
								}
							],
							"additionalGrants": [],
							"sortPriority": 0,
							"catalogGroupPriority": 0
						},
						{
							"devName": "[VIRTUAL]10 x Lightning in a Bottle for 100 GameItem : AccountResource:eventcurrency_scaling",
							"offerId": "v2:/ae8bc5170ad1d6dadebb99a966c83d8d5ebd11c9b2eb63b19814d4334e43ac5b",
							"fulfillmentIds": [],
							"dailyLimit": -1,
							"weeklyLimit": 20,
							"monthlyLimit": -1,
							"categories": [],
							"prices": [
								{
									"currencyType": "GameItem",
									"currencySubType": "AccountResource:eventcurrency_scaling",
									"regularPrice": 100,
									"dynamicRegularPrice": 100,
									"finalPrice": 100,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 100
								}
							],
							"meta": {},
							"matchFilter": "",
							"filterWeight": 0.0,
							"appStoreId": [],
							"requirements": [],
							"offerType": "StaticPrice",
							"refundable": false,
							"itemGrants": [
								{
									"templateId": "AccountResource:reagent_c_t02",
									"quantity": 10
								}
							],
							"additionalGrants": [],
							"sortPriority": 0,
							"catalogGroupPriority": 0
						},
						{
							"devName": "[VIRTUAL]10 x Epic Flux for 75 GameItem : AccountResource:eventcurrency_scaling",
							"offerId": "v2:/bfd337ddb7380a663929ae0ad03f6cdbff5b562d1639c8c813cb8316b37f83bb",
							"fulfillmentIds": [],
							"dailyLimit": -1,
							"weeklyLimit": 10,
							"monthlyLimit": -1,
							"categories": [],
							"prices": [
								{
									"currencyType": "GameItem",
									"currencySubType": "AccountResource:eventcurrency_scaling",
									"regularPrice": 75,
									"dynamicRegularPrice": 75,
									"finalPrice": 75,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 75
								}
							],
							"meta": {},
							"matchFilter": "",
							"filterWeight": 0.0,
							"appStoreId": [],
							"requirements": [],
							"offerType": "StaticPrice",
							"refundable": false,
							"itemGrants": [
								{
									"templateId": "AccountResource:reagent_evolverarity_vr",
									"quantity": 10
								}
							],
							"additionalGrants": [],
							"sortPriority": 0,
							"catalogGroupPriority": 0
						},
						{
							"devName": "[VIRTUAL]60 x Uncommon PERK-UP! for 125 GameItem : AccountResource:eventcurrency_scaling",
							"offerId": "v2:/d8c8f59ca26294a0192676567f75ee6c3631f96eea201fd14f8cac0c47acfb5c",
							"fulfillmentIds": [],
							"dailyLimit": -1,
							"weeklyLimit": 5,
							"monthlyLimit": -1,
							"categories": [],
							"prices": [
								{
									"currencyType": "GameItem",
									"currencySubType": "AccountResource:eventcurrency_scaling",
									"regularPrice": 125,
									"dynamicRegularPrice": 125,
									"finalPrice": 125,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 125
								}
							],
							"meta": {},
							"matchFilter": "",
							"filterWeight": 0.0,
							"appStoreId": [],
							"requirements": [],
							"offerType": "StaticPrice",
							"refundable": false,
							"itemGrants": [
								{
									"templateId": "AccountResource:reagent_alteration_upgrade_uc",
									"quantity": 60
								}
							],
							"additionalGrants": [],
							"sortPriority": 0,
							"catalogGroupPriority": 0
						},
						{
							"devName": "[VIRTUAL]10 x Storm Shard for 200 GameItem : AccountResource:eventcurrency_scaling",
							"offerId": "v2:/cb671813542b9346ea26bfb3a53624fee2b73c4d2280c21b37c0bb0759c67574",
							"fulfillmentIds": [],
							"dailyLimit": -1,
							"weeklyLimit": 1,
							"monthlyLimit": -1,
							"categories": [],
							"prices": [
								{
									"currencyType": "GameItem",
									"currencySubType": "AccountResource:eventcurrency_scaling",
									"regularPrice": 200,
									"dynamicRegularPrice": 200,
									"finalPrice": 200,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 200
								}
							],
							"meta": {},
							"matchFilter": "",
							"filterWeight": 0.0,
							"appStoreId": [],
							"requirements": [],
							"offerType": "StaticPrice",
							"refundable": false,
							"itemGrants": [
								{
									"templateId": "AccountResource:reagent_c_t04",
									"quantity": 10
								}
							],
							"additionalGrants": [],
							"sortPriority": 0,
							"catalogGroupPriority": 0
						},
						{
							"devName": "[VIRTUAL]5 x Legendary Flux for 75 GameItem : AccountResource:eventcurrency_scaling",
							"offerId": "v2:/9af32d7a9a16f864eae99d17542ec08763d118f3ce9c72ad05d5fc5f44586dc1",
							"fulfillmentIds": [],
							"dailyLimit": -1,
							"weeklyLimit": 10,
							"monthlyLimit": -1,
							"categories": [],
							"prices": [
								{
									"currencyType": "GameItem",
									"currencySubType": "AccountResource:eventcurrency_scaling",
									"regularPrice": 75,
									"dynamicRegularPrice": 75,
									"finalPrice": 75,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 75
								}
							],
							"meta": {},
							"matchFilter": "",
							"filterWeight": 0.0,
							"appStoreId": [],
							"requirements": [],
							"offerType": "StaticPrice",
							"refundable": false,
							"itemGrants": [
								{
									"templateId": "AccountResource:reagent_evolverarity_sr",
									"quantity": 5
								}
							],
							"additionalGrants": [],
							"sortPriority": 0,
							"catalogGroupPriority": 0
						},
						{
							"devName": "[VIRTUAL]10 x Eye of the Storm for 150 GameItem : AccountResource:eventcurrency_scaling",
							"offerId": "v2:/8ab132beb750c221f51a79c6b29d10abf9cf7e6a82868226d98abea8add01ac5",
							"fulfillmentIds": [],
							"dailyLimit": -1,
							"weeklyLimit": 2,
							"monthlyLimit": -1,
							"categories": [],
							"prices": [
								{
									"currencyType": "GameItem",
									"currencySubType": "AccountResource:eventcurrency_scaling",
									"regularPrice": 150,
									"dynamicRegularPrice": 150,
									"finalPrice": 150,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 150
								}
							],
							"meta": {},
							"matchFilter": "",
							"filterWeight": 0.0,
							"appStoreId": [],
							"requirements": [],
							"offerType": "StaticPrice",
							"refundable": false,
							"itemGrants": [
								{
									"templateId": "AccountResource:reagent_c_t03",
									"quantity": 10
								}
							],
							"additionalGrants": [],
							"sortPriority": 0,
							"catalogGroupPriority": 0
						}
					]
				},
				{
					"name": "CommunityVoteWinners",
					"catalogEntries": []
				},
				{
					"name": "BRSpecialDaily",
					"catalogEntries": []
				},
				{
					"name": "BRStandaloneStorefront",
					"catalogEntries": []
				},
				{
					"name": "BRWeeklyStorefront",
					"catalogEntries": [
						{
							"devName": "[VIRTUAL]1 x Shake & Split for 300 MtxCurrency",
							"offerId": "v2:/7ce5895f5c75cf63bafc7063a4d516b3a10dcfb0de8d761907463f3fb1a68d9d",
							"fulfillmentIds": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"categories": [
								"Panel 01"
							],
							"prices": [
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": shopConfig["featuredTab1Price1"],
									"dynamicRegularPrice": shopConfig["featuredTab1Price1"],
									"finalPrice": shopConfig["featuredTab1Price1"],
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": shopConfig["featuredTab1Price1"]
								}
							],
							"meta": {
								"NewDisplayAssetPath": `/Game/Catalog/NewDisplayAssets/DAv2_${shopConfig["featuredTab1Emote1"]}.DAv2_${shopConfig["featuredTab1Emote1"]}`,
								"SectionId": "Featured",
								"TileSize": "Normal",
								"AnalyticOfferGroupId": "1",
								"ViolatorTag": "SyncedEmote",
								"ViolatorIntensity": "High",
								"EncryptionKey": `45261C72DCA170BBF0BDB129B9FC0BAF:5db2NWibvzXoFGVIbg//HklLwxuGUFWO7tKGPStOM2U=:DAv2_${shopConfig["featuredTab1Emote1"]}.DAv2_${shopConfig["featuredTab1Emote1"]}`
							},
							"matchFilter": "",
							"filterWeight": 0.0,
							"appStoreId": [],
							"requirements": [
								{
									"requirementType": "DenyOnItemOwnership",
									"requiredId": "AthenaDance:DAv2_" + shopConfig["featuredTab1Emote1"],
									"minQuantity": 1
								}
							],
							"offerType": "StaticPrice",
							"giftInfo": {
								"bIsEnabled": true,
								"forcedGiftBoxTemplateId": "",
								"purchaseRequirements": [],
								"giftRecordIds": []
							},
							"refundable": true,
							"metaInfo": [
								{
									"key": "NewDisplayAssetPath",
									"value": `/Game/Catalog/NewDisplayAssets/DAv2_DAv2_${shopConfig["featuredTab1Emote1"]}.DAv2_${shopConfig["featuredTab1Emote1"]}`
								},
								{
									"key": "SectionId",
									"value": "Featured"
								},
								{
									"key": "TileSize",
									"value": "Normal"
								},
								{
									"key": "AnalyticOfferGroupId",
									"value": "1"
								},
								{
									"key": "ViolatorTag",
									"value": "SyncedEmote"
								},
								{
									"key": "ViolatorIntensity",
									"value": "High"
								},
								{
									"key": "EncryptionKey",
									"value": `45261C72DCA170BBF0BDB129B9FC0BAF:5db2NWibvzXoFGVIbg//HklLwxuGUFWO7tKGPStOM2U=:${shopConfig["featuredTab1Emote1"]}`
								}
							],
							"itemGrants": [
								{
									"templateId": "AthenaDance:" + shopConfig["featuredTab1Emote1"],
									"quantity": 1
								}
							],
							"additionalGrants": [],
							"sortPriority": -2,
							"catalogGroupPriority": 0
						},
						{
							"devName": "[VIRTUAL]9 x Cozy Chomps, 1 x Sharky Shawl for 1200 MtxCurrency",
							"offerId": "v2:/47475b08b84cf35d0912371d4de3b58c13eaa12c436abd7730b5e614730c5e51",
							"fulfillmentIds": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"categories": [
								"Panel 09"
							],
							"prices": [
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": shopConfig["featuredTab1Price2"],
									"dynamicRegularPrice": shopConfig["featuredTab1Price2"],
									"finalPrice": shopConfig["featuredTab1Price2"],
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": shopConfig["featuredTab1Price2"]
								}
							],
							"meta": {
								"NewDisplayAssetPath": `/Game/Catalog/NewDisplayAssets/DAv2_${shopConfig["featuredTab1Skin1"]}.DAv2_${shopConfig["featuredTab1Skin1"]}`,
								"SectionId": "Featured",
								"TileSize": "Small",
								"AnalyticOfferGroupId": "4"
							},
							"matchFilter": "",
							"filterWeight": 0.0,
							"appStoreId": [],
							"requirements": [
								{
									"requirementType": "DenyOnItemOwnership",
									"requiredId": `AthenaCharacter:${shopConfig["featuredTab1Skin1"]}`,
									"quantity": 1
								}
							],
							"offerType": "StaticPrice",
							"giftInfo": {
								"bIsEnabled": true,
								"forcedGiftBoxTemplateId": "",
								"purchaseRequirements": [],
								"giftRecordIds": []
							},
							"refundable": true,
							"metaInfo": [
								{
									"key": "NewDisplayAssetPath",
									"value": `/Game/Catalog/NewDisplayAssets/DAv2_${shopConfig["featuredTab1Skin1"]}.DAv2_${shopConfig["featuredTab1Skin1"]}`
								},
								{
									"key": "SectionId",
									"value": "Featured"
								},
								{
									"key": "TileSize",
									"value": "Small"
								},
								{
									"key": "AnalyticOfferGroupId",
									"value": "4"
								}
							],
							"displayAssetPath": `/Game/Catalog/DisplayAssets/DA_Featured_${shopConfig["featuredTab1Skin1"]}.DA_Featured_${shopConfig["featuredTab1Skin1"]}`,
							"itemGrants": [
								{
									"templateId": `AthenaCharacter:${shopConfig["featuredTab1Skin1"]}`,
									"quantity": 1
								}
							],
							"additionalGrants": [],
							"sortPriority": -3,
							"catalogGroupPriority": 0
						}
					]
				},
				{
					"name": "STWSpecialEventStorefront",
					"catalogEntries": [
						{
							"devName": "[VIRTUAL]1 x workerbasic_sr_t01 for 700 GameItem : AccountResource:eventcurrency_scaling",
							"offerId": "v2:/222374fc7ea9f6ef8eb0b3c20f3a5d7f64f612e9f3435c74e3d51d785739bf9f",
							"fulfillmentIds": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"categories": [],
							"prices": [
								{
									"currencyType": "GameItem",
									"currencySubType": "AccountResource:eventcurrency_scaling",
									"regularPrice": 700,
									"dynamicRegularPrice": 700,
									"finalPrice": 700,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 700
								}
							],
							"meta": {
								"PurchaseLimitingEventId": "41gfuhl3ragj4lhfbvo1kggcuj[0]1",
								"EventLimit": "1"
							},
							"matchFilter": "",
							"filterWeight": 0.0,
							"appStoreId": [],
							"requirements": [],
							"offerType": "StaticPrice",
							"refundable": false,
							"metaInfo": [
								{
									"key": "PurchaseLimitingEventId",
									"value": "41gfuhl3ragj4lhfbvo1kggcuj[0]1"
								},
								{
									"key": "EventLimit",
									"value": "1"
								}
							],
							"itemGrants": [
								{
									"templateId": "Worker:workerbasic_sr_t01",
									"quantity": 1
								}
							],
							"additionalGrants": [],
							"sortPriority": 12,
							"catalogGroupPriority": 0
						},
						{
							"devName": "[VIRTUAL]1 x Copper Santa's Little Helper for 1680 GameItem : AccountResource:eventcurrency_scaling",
							"offerId": "v2:/d8f85793bcf275b30da379eb8d3fe3218e384d2b3da4a45733d59247dea662e9",
							"fulfillmentIds": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"categories": [],
							"prices": [
								{
									"currencyType": "GameItem",
									"currencySubType": "AccountResource:eventcurrency_scaling",
									"regularPrice": 1680,
									"dynamicRegularPrice": 1680,
									"finalPrice": 1680,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 1680
								}
							],
							"meta": {
								"PurchaseLimitingEventId": "6igntjkrqm45updc8crvqg3m5a[0]1",
								"EventLimit": "1"
							},
							"matchFilter": "",
							"filterWeight": 0.0,
							"appStoreId": [],
							"requirements": [],
							"offerType": "StaticPrice",
							"refundable": false,
							"metaInfo": [
								{
									"key": "PurchaseLimitingEventId",
									"value": "6igntjkrqm45updc8crvqg3m5a[0]1"
								},
								{
									"key": "EventLimit",
									"value": "1"
								}
							],
							"itemGrants": [
								{
									"templateId": "Schematic:sid_explosive_rocket_winter_sr_ore_t01",
									"quantity": 1
								}
							],
							"additionalGrants": [],
							"sortPriority": 26,
							"catalogGroupPriority": 0
						},
						{
							"devName": "[VIRTUAL]1 x Subzero Zenith for 3200 GameItem : AccountResource:eventcurrency_scaling",
							"offerId": "v2:/f0fed5937464c5d1a1d1c2961d7c07e0c818412ac5101fe09c81e988b86a0fbd",
							"fulfillmentIds": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"categories": [],
							"prices": [
								{
									"currencyType": "GameItem",
									"currencySubType": "AccountResource:eventcurrency_scaling",
									"regularPrice": 3200,
									"dynamicRegularPrice": 3200,
									"finalPrice": 3200,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 3200
								}
							],
							"meta": {
								"PurchaseLimitingEventId": "2atvt5iqagg5i5nkjauu84vg1t[0]1",
								"EventLimit": "1"
							},
							"matchFilter": "",
							"filterWeight": 0.0,
							"appStoreId": [],
							"requirements": [],
							"offerType": "StaticPrice",
							"refundable": false,
							"metaInfo": [
								{
									"key": "PurchaseLimitingEventId",
									"value": "2atvt5iqagg5i5nkjauu84vg1t[0]1"
								},
								{
									"key": "EventLimit",
									"value": "1"
								}
							],
							"itemGrants": [
								{
									"templateId": "Hero:hid_outlander_022_sr_t01",
									"quantity": 1
								}
							],
							"additionalGrants": [],
							"sortPriority": 20,
							"catalogGroupPriority": 0
						},
						{
							"devName": "[VIRTUAL]1 x Rare Schematic for 400 GameItem : AccountResource:eventcurrency_scaling",
							"offerId": "v2:/570ff3bed6fc8a1f7006610dbb6ce9e4bcd244a32caa435a60392460da356c88",
							"fulfillmentIds": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"categories": [],
							"prices": [
								{
									"currencyType": "GameItem",
									"currencySubType": "AccountResource:eventcurrency_scaling",
									"regularPrice": 400,
									"dynamicRegularPrice": 400,
									"finalPrice": 400,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 400
								}
							],
							"meta": {
								"open_cardpacks": "true"
							},
							"matchFilter": "",
							"filterWeight": 0.0,
							"appStoreId": [],
							"requirements": [],
							"offerType": "StaticPrice",
							"refundable": false,
							"metaInfo": [
								{
									"key": "open_cardpacks",
									"value": "true"
								}
							],
							"itemGrants": [
								{
									"templateId": "CardPack:cardpack_schematic_r",
									"quantity": 1
								}
							],
							"additionalGrants": [],
							"sortPriority": 10,
							"catalogGroupPriority": 0
						},
						{
							"devName": "[VIRTUAL]1 x Black Knight Garridan for 3200 GameItem : AccountResource:eventcurrency_scaling",
							"offerId": "v2:/24fbb42d5418aec1954e19f30e44401e36df1c88ec01114b486caba0e79a4c63",
							"fulfillmentIds": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"categories": [],
							"prices": [
								{
									"currencyType": "GameItem",
									"currencySubType": "AccountResource:eventcurrency_scaling",
									"regularPrice": 3200,
									"dynamicRegularPrice": 3200,
									"finalPrice": 3200,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 3200
								}
							],
							"meta": {
								"PurchaseLimitingEventId": "5go81gki4ujju42soup5du5va7[0]1",
								"EventLimit": "1"
							},
							"matchFilter": "",
							"filterWeight": 0.0,
							"appStoreId": [],
							"requirements": [],
							"offerType": "StaticPrice",
							"refundable": false,
							"metaInfo": [
								{
									"key": "PurchaseLimitingEventId",
									"value": "5go81gki4ujju42soup5du5va7[0]1"
								},
								{
									"key": "EventLimit",
									"value": "1"
								}
							],
							"itemGrants": [
								{
									"templateId": "Hero:hid_constructor_018_sr_t01",
									"quantity": 1
								}
							],
							"additionalGrants": [],
							"sortPriority": 22,
							"catalogGroupPriority": 0
						},
						{
							"devName": "[VIRTUAL]1 x Epic Schematic for 1000 GameItem : AccountResource:eventcurrency_scaling",
							"offerId": "v2:/6633ab8087f2a2e80bdf7a90d06351e7a03b82790cc2e286f4b6851020532ed4",
							"fulfillmentIds": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"categories": [],
							"prices": [
								{
									"currencyType": "GameItem",
									"currencySubType": "AccountResource:eventcurrency_scaling",
									"regularPrice": 1000,
									"dynamicRegularPrice": 1000,
									"finalPrice": 1000,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 1000
								}
							],
							"meta": {
								"open_cardpacks": "true"
							},
							"matchFilter": "",
							"filterWeight": 0.0,
							"appStoreId": [],
							"requirements": [],
							"offerType": "StaticPrice",
							"refundable": false,
							"metaInfo": [
								{
									"key": "open_cardpacks",
									"value": "true"
								}
							],
							"itemGrants": [
								{
									"templateId": "CardPack:cardpack_schematic_vr",
									"quantity": 1
								}
							],
							"additionalGrants": [],
							"sortPriority": 9,
							"catalogGroupPriority": 0
						},
						{
							"devName": "[VIRTUAL]1 x Lynx Kassandra for 3200 GameItem : AccountResource:eventcurrency_scaling",
							"offerId": "v2:/23d3751fc2a7fbd9479c425a5b806b068f4ff36687685827889afdc457729ba0",
							"fulfillmentIds": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"categories": [],
							"prices": [
								{
									"currencyType": "GameItem",
									"currencySubType": "AccountResource:eventcurrency_scaling",
									"regularPrice": 3200,
									"dynamicRegularPrice": 3200,
									"finalPrice": 3200,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 3200
								}
							],
							"meta": {
								"PurchaseLimitingEventId": "0n8a8t52177krfvle69guiang7[0]1",
								"EventLimit": "1"
							},
							"matchFilter": "",
							"filterWeight": 0.0,
							"appStoreId": [],
							"requirements": [],
							"offerType": "StaticPrice",
							"refundable": false,
							"metaInfo": [
								{
									"key": "PurchaseLimitingEventId",
									"value": "0n8a8t52177krfvle69guiang7[0]1"
								},
								{
									"key": "EventLimit",
									"value": "1"
								}
							],
							"itemGrants": [
								{
									"templateId": "Hero:hid_ninja_023_sr_t01",
									"quantity": 1
								}
							],
							"additionalGrants": [],
							"sortPriority": 21,
							"catalogGroupPriority": 0
						},
						{
							"devName": "[VIRTUAL]1 x Copper Fortsville Slugger 3000  for 1680 GameItem : AccountResource:eventcurrency_scaling",
							"offerId": "v2:/c4eaff1848fd1b2539243774a8b4bb39cb8d1380d35749d1f3e68e4fc4e39619",
							"fulfillmentIds": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"categories": [],
							"prices": [
								{
									"currencyType": "GameItem",
									"currencySubType": "AccountResource:eventcurrency_scaling",
									"regularPrice": 1680,
									"dynamicRegularPrice": 1680,
									"finalPrice": 1680,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 1680
								}
							],
							"meta": {
								"PurchaseLimitingEventId": "41gfuhl3ragj4lhfbvo1kggcuj[0]1",
								"EventLimit": "1"
							},
							"matchFilter": "",
							"filterWeight": 0.0,
							"appStoreId": [],
							"requirements": [],
							"offerType": "StaticPrice",
							"refundable": false,
							"metaInfo": [
								{
									"key": "PurchaseLimitingEventId",
									"value": "41gfuhl3ragj4lhfbvo1kggcuj[0]1"
								},
								{
									"key": "EventLimit",
									"value": "1"
								}
							],
							"itemGrants": [
								{
									"templateId": "Schematic:sid_blunt_light_rocketbat_sr_ore_t01",
									"quantity": 1,
									"attributes": {
										"Alteration": {
											"LootTierGroup": "AlterationTG.Melee.SR",
											"Tier": 0
										}
									}
								}
							],
							"additionalGrants": [],
							"sortPriority": 16,
							"catalogGroupPriority": 0
						},
						{
							"devName": "[VIRTUAL]1 x Copper Cocoa .45 for 1680 GameItem : AccountResource:eventcurrency_scaling",
							"offerId": "v2:/b4499239a4c1e5b7628a7faf8134a706238aad3399233a8126bf19813523fe7c",
							"fulfillmentIds": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"categories": [],
							"prices": [
								{
									"currencyType": "GameItem",
									"currencySubType": "AccountResource:eventcurrency_scaling",
									"regularPrice": 1680,
									"dynamicRegularPrice": 1680,
									"finalPrice": 1680,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 1680
								}
							],
							"meta": {
								"PurchaseLimitingEventId": "6b1ks4h2fautbsf308p2k312vt[0]1",
								"EventLimit": "1"
							},
							"matchFilter": "",
							"filterWeight": 0.0,
							"appStoreId": [],
							"requirements": [],
							"offerType": "StaticPrice",
							"refundable": false,
							"metaInfo": [
								{
									"key": "PurchaseLimitingEventId",
									"value": "6b1ks4h2fautbsf308p2k312vt[0]1"
								},
								{
									"key": "EventLimit",
									"value": "1"
								}
							],
							"itemGrants": [
								{
									"templateId": "Schematic:sid_pistol_silenced_christmas_sr_ore_t01",
									"quantity": 1
								}
							],
							"additionalGrants": [],
							"sortPriority": 23,
							"catalogGroupPriority": 0
						},
						{
							"devName": "[VIRTUAL]1 x Copper Pain Train for 1680 GameItem : AccountResource:eventcurrency_scaling",
							"offerId": "v2:/d1ab58abc9c2ba4d3868de7d440b5d0919518eb123dd598155f3185be8ca3d9b",
							"fulfillmentIds": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"categories": [],
							"prices": [
								{
									"currencyType": "GameItem",
									"currencySubType": "AccountResource:eventcurrency_scaling",
									"regularPrice": 1680,
									"dynamicRegularPrice": 1680,
									"finalPrice": 1680,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 1680
								}
							],
							"meta": {
								"PurchaseLimitingEventId": "3bkn529lj5ddnfto3dh0ebrhp8[0]1",
								"EventLimit": "1"
							},
							"matchFilter": "",
							"filterWeight": 0.0,
							"appStoreId": [],
							"requirements": [],
							"offerType": "StaticPrice",
							"refundable": false,
							"metaInfo": [
								{
									"key": "PurchaseLimitingEventId",
									"value": "3bkn529lj5ddnfto3dh0ebrhp8[0]1"
								},
								{
									"key": "EventLimit",
									"value": "1"
								}
							],
							"itemGrants": [
								{
									"templateId": "Schematic:sid_assault_winter_sr_ore_t01",
									"quantity": 1
								}
							],
							"additionalGrants": [],
							"sortPriority": 25,
							"catalogGroupPriority": 0
						},
						{
							"devName": "[VIRTUAL]1 x Armory Slot for 25 GameItem : AccountResource:eventcurrency_scaling",
							"offerId": "v2:/83c2c7dd1240222394ed9c7415fbce183d8504842eebc30039ce96c929d365e6",
							"fulfillmentIds": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"categories": [],
							"prices": [
								{
									"currencyType": "GameItem",
									"currencySubType": "AccountResource:eventcurrency_scaling",
									"regularPrice": 25,
									"dynamicRegularPrice": 25,
									"finalPrice": 25,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 25
								}
							],
							"meta": {
								"PurchaseLimitingEventId": "41gfuhl3ragj4lhfbvo1kggcuj[1]1",
								"EventLimit": "100"
							},
							"matchFilter": "",
							"filterWeight": 0.0,
							"appStoreId": [],
							"requirements": [],
							"offerType": "StaticPrice",
							"refundable": false,
							"metaInfo": [
								{
									"key": "PurchaseLimitingEventId",
									"value": "41gfuhl3ragj4lhfbvo1kggcuj[1]1"
								},
								{
									"key": "EventLimit",
									"value": "100"
								}
							],
							"itemGrants": [
								{
									"templateId": "Token:accountinventorybonus",
									"quantity": 1
								}
							],
							"additionalGrants": [],
							"sortPriority": 19,
							"catalogGroupPriority": 0
						},
						{
							"devName": "[VIRTUAL]1 x B.A.S.E. Kyle for 2800 GameItem : AccountResource:eventcurrency_scaling",
							"offerId": "v2:/88c5d255e92fd44432b414e61e08d23a804d68a53c289d4abfe87ca2480e3286",
							"fulfillmentIds": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"categories": [],
							"prices": [
								{
									"currencyType": "GameItem",
									"currencySubType": "AccountResource:eventcurrency_scaling",
									"regularPrice": 2800,
									"dynamicRegularPrice": 2800,
									"finalPrice": 2800,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 2800
								}
							],
							"meta": {
								"PurchaseLimitingEventId": "41gfuhl3ragj4lhfbvo1kggcuj[0]1",
								"EventLimit": "1"
							},
							"matchFilter": "",
							"filterWeight": 0.0,
							"appStoreId": [],
							"requirements": [],
							"offerType": "StaticPrice",
							"refundable": false,
							"metaInfo": [
								{
									"key": "PurchaseLimitingEventId",
									"value": "41gfuhl3ragj4lhfbvo1kggcuj[0]1"
								},
								{
									"key": "EventLimit",
									"value": "1"
								}
							],
							"itemGrants": [
								{
									"templateId": "Hero:hid_constructor_rushbase_sr_t01",
									"quantity": 1
								}
							],
							"additionalGrants": [],
							"sortPriority": 14,
							"catalogGroupPriority": 0
						},
						{
							"devName": "[VIRTUAL]1 x The Ice Queen for 2800 GameItem : AccountResource:eventcurrency_scaling",
							"offerId": "v2:/3c3b5fc6fe8f01f2b434a573771f7555ee8079687750671c6486e35544c615f8",
							"fulfillmentIds": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"categories": [],
							"prices": [
								{
									"currencyType": "GameItem",
									"currencySubType": "AccountResource:eventcurrency_scaling",
									"regularPrice": 2800,
									"dynamicRegularPrice": 2800,
									"finalPrice": 2800,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 2800
								}
							],
							"meta": {
								"PurchaseLimitingEventId": "0iasd810b8a570fr7d1lg8f02c[0]1",
								"EventLimit": "1"
							},
							"matchFilter": "",
							"filterWeight": 0.0,
							"appStoreId": [],
							"requirements": [],
							"offerType": "StaticPrice",
							"refundable": false,
							"metaInfo": [
								{
									"key": "PurchaseLimitingEventId",
									"value": "0iasd810b8a570fr7d1lg8f02c[0]1"
								},
								{
									"key": "EventLimit",
									"value": "1"
								}
							],
							"itemGrants": [
								{
									"templateId": "Hero:hid_outlander_023_sr_t01",
									"quantity": 1
								}
							],
							"additionalGrants": [],
							"sortPriority": 24,
							"catalogGroupPriority": 0
						},
						{
							"devName": "[VIRTUAL]1 x Copper Fortsville Slugger 3000  for 1680 GameItem : AccountResource:eventcurrency_scaling",
							"offerId": "v2:/2093001b9bc285bbb71a8b202239832b54ecd733ad6dd24dd115f943e77df4ec",
							"fulfillmentIds": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"categories": [],
							"prices": [
								{
									"currencyType": "GameItem",
									"currencySubType": "AccountResource:eventcurrency_scaling",
									"regularPrice": 1680,
									"dynamicRegularPrice": 1680,
									"finalPrice": 1680,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 1680
								}
							],
							"meta": {
								"PurchaseLimitingEventId": "41gfuhl3ragj4lhfbvo1kggcuj[0]1",
								"EventLimit": "1"
							},
							"matchFilter": "",
							"filterWeight": 0.0,
							"appStoreId": [],
							"requirements": [],
							"offerType": "StaticPrice",
							"refundable": false,
							"metaInfo": [
								{
									"key": "PurchaseLimitingEventId",
									"value": "41gfuhl3ragj4lhfbvo1kggcuj[0]1"
								},
								{
									"key": "EventLimit",
									"value": "1"
								}
							],
							"itemGrants": [
								{
									"templateId": "Schematic:sid_blunt_light_rocketbat_sr_ore_t01",
									"quantity": 1,
									"attributes": {
										"Alteration": {
											"LootTierGroup": "AlterationTG.Melee.SR",
											"Tier": 0
										}
									}
								}
							],
							"additionalGrants": [],
							"sortPriority": 15,
							"catalogGroupPriority": 0
						}
					]
				},
				{
					"name": "BattleBundle",
					"catalogEntries": []
				},
				{
					"name": "TokensForGiftableItems",
					"catalogEntries": [
						{
							"offerId": "02A0B24240C2528B435EF4817E89070F",
							"devName": "Glow Select",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 0,
									"dynamicRegularPrice": -1,
									"finalPrice": 0,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 0
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"sam_glow",
								"",
								""
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "230FA67742DD9570005A8C82D81A33FC",
									"minQuantity": 1
								}
							],
							"metaInfo": [],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 0,
							"title": "Glow",
							"shortDescription": "",
							"description": "The aura of victory glows bright.",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_CID_479_Athena_Commando_F_Davinci.DA_Featured_CID_479_Athena_Commando_F_Davinci",
							"itemGrants": [
								{
									"templateId": "Token:giftglowtoken",
									"quantity": 1
								}
							]
						}
					]
				},
				{
					"name": "BRSeason11",
					"catalogEntries": [
						{
							"offerId": "571D433C47E98F020EF099894CAF3B6A",
							"devName": "BR.Season11.BattlePass.01",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": 950,
									"dynamicRegularPrice": -1,
									"finalPrice": 950,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 950
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								""
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "571D433C47E98F020EF099894CAF3B6A",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "Preroll",
									"value": "False"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 1,
							"title": "Battle Pass",
							"shortDescription": "Chapter 2 - Season 1",
							"description": "Chapter 2 - Season 1 through February 6. \n\nInstantly get these items\n  • <ItemName>Turk | Riptide</> Outfit\n  • <ItemName>Journey | Hazard</> Outfit\n\n\nPlay to level up your Battle Pass, unlocking <Bold>over 100 rewards</> !\n  • <ItemName>Fusion</> and <Bold>4 more Outfits</>\n  • <Bold>1,500 V-Bucks</>\n  • 7 Emotes\n  • 6 Wraps\n  • 6 Harvesting Tools\n  • 5 Gliders\n  • 6 Back Blings\n  • 5 Contrails\n  • 8 Sprays\n  • 3 Music Tracks\n  • 16 Loading Screens\n  • and so much more!\nWant it all faster? You can use V-Bucks to buy rewards any time!",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_BR_Season11_BattlePass.DA_BR_Season11_BattlePass",
							"itemGrants": []
						},
						{
							"offerId": "70DBDA11425B10AF7A005D82DB54BC59",
							"devName": "BR.Season11.SingleTier.01",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": 150,
									"dynamicRegularPrice": -1,
									"finalPrice": 150,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 150
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								""
							],
							"requirements": [],
							"metaInfo": [
								{
									"key": "Preroll",
									"value": "False"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 0,
							"title": "Battle Pass Level",
							"shortDescription": "",
							"description": "Get great rewards now!",
							"displayAssetPath": "",
							"itemGrants": []
						},
						{
							"offerId": "93E992BC45D487A943D769845441ABA5",
							"devName": "BR.Season11.BattleBundle.01",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": 4700,
									"dynamicRegularPrice": -1,
									"finalPrice": 2800,
									"saleType": "PercentOff",
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 2800
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								""
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "571D433C47E98F020EF099894CAF3B6A",
									"minQuantity": 1
								},
								{
									"requirementType": "DenyOnItemOwnership",
									"requiredId": "Token:athena_s11_nobattlebundleoption_token",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "Preroll",
									"value": "False"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 0,
							"title": "Battle Bundle",
							"shortDescription": "Battle Pass + 25 levels!",
							"description": "Chapter 2 - Season 1 through February 6.\n\nInstantly get these items\n  •  <ItemName>Turk | Riptide</> Outfit\n  • <ItemName>Journey | Hazard</> Outfit\n  • <ItemName>Rippley | Sludge</> Outfit\n  • <ItemName>Respect The Peace</> Emote\n  • <ItemName>Sky Trawler</> Glider\n  • <ItemName>Riptide </> Wrap\n  • <ItemName> Slurpstream</> Contrails\n  • <ItemName>Storm Shredder </> Music Track\n  •  400 V-Bucks  \n  • and more!\n\nPlay to level up your Battle Pass, unlocking <Bold>over 75 rewards</>!\n  • <Bold>4 more Outfits</>\n  • <Bold>1,200 V-Bucks</>\n  • 5 Emotes\n  • 5 Wraps\n  • 5 Harvesting Tools\n  • 4 Gliders\n  • 4 Back Blings\n  • 4 Contrails\n  • 5 Sprays\n  • 2 Music Tracks\n  • 13 Loading Screens\n  • and so much more!\nWant it all faster? You can use V-Bucks to buy rewards any time!",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_BR_Season11_BattlePassWithLevels.DA_BR_Season11_BattlePassWithLevels",
							"itemGrants": []
						}
					]
				},
				{
					"name": "BRSeason12",
					"catalogEntries": []
				},
				{
					"name": "BRDailyStorefront",
					"catalogEntries": [
						{
							"devName": "[VIRTUAL]1 x Butter Barn Hoedown for 200 MtxCurrency",
							"offerId": "v2:/c261f8fafda16675310eb2971924d7a6c4dc276324f31bb589dcf15ae87cf3db",
							"fulfillmentIds": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"categories": [
								"zzDaily 03"
							],
							"prices": [
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": shopConfig["DailyTab1MusicPrice1"],
									"dynamicRegularPrice": shopConfig["DailyTab1MusicPrice1"],
									"finalPrice": shopConfig["DailyTab1MusicPrice1"],
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": shopConfig["DailyTab1MusicPrice1"]
								}
							],
							"meta": {
								"NewDisplayAssetPath": `/Game/Catalog/NewDisplayAssets/DAv2_${shopConfig["DailyTab1Music1"]}.DAv2_${shopConfig["DailyTab1Music1"]}`,
								"SectionId": "Daily",
								"TileSize": "Small",
								"AnalyticOfferGroupId": "7"
							},
							"matchFilter": "",
							"filterWeight": 0.0,
							"appStoreId": [],
							"requirements": [
								{
									"requirementType": "DenyOnItemOwnership",
									"requiredId": "AthenaMusicPack:" + shopConfig["DailyTab1Music1"],
									"minQuantity": 1
								}
							],
							"offerType": "StaticPrice",
							"giftInfo": {
								"bIsEnabled": true,
								"forcedGiftBoxTemplateId": "",
								"purchaseRequirements": [],
								"giftRecordIds": []
							},
							"refundable": true,
							"metaInfo": [
								{
									"key": "NewDisplayAssetPath",
									"value": `/Game/Catalog/NewDisplayAssets/DAv2_${shopConfig["DailyTab1Music1"]}.DAv2_${shopConfig["DailyTab1Music1"]}`
								},
								{
									"key": "SectionId",
									"value": "Daily"
								},
								{
									"key": "TileSize",
									"value": "Small"
								},
								{
									"key": "AnalyticOfferGroupId",
									"value": "7"
								}
							],
							"itemGrants": [
								{
									"templateId": "AthenaMusicPack:" + shopConfig["DailyTab1Music1"],
									"quantity": 1
								}
							],
							"additionalGrants": [],
							"sortPriority": -3,
							"catalogGroupPriority": 0
						},
						{
							"devName": "[VIRTUAL]1 x Waypoint, 1 x Signal Hub for 1200 MtxCurrency",
							"offerId": "v2:/acd790087318ad7cd89bf57dafec13af8d6e128b55981ec7626b49a92766c827",
							"fulfillmentIds": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"categories": [
								"zzDaily 01"
							],
							"prices": [
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": shopConfig["DailyTab1BundlePrice1"],
									"dynamicRegularPrice": shopConfig["DailyTab1BundlePrice1"],
									"finalPrice": shopConfig["DailyTab1BundlePrice1"],
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": shopConfig["DailyTab1BundlePrice1"]
								}
							],
							"meta": {
								"NewDisplayAssetPath": `/Game/Catalog/NewDisplayAssets/DAv2_${shopConfig["DailyTab1BundleTempName"]}.DAv2_${shopConfig["DailyTab1BundleTempName"]}`,
								"SectionId": "Daily",
								"TileSize": "Normal",
								"AnalyticOfferGroupId": "5"
							},
							"matchFilter": "",
							"filterWeight": 0.0,
							"appStoreId": [],
							"requirements": [
								{
									"requirementType": "DenyOnItemOwnership",
									"requiredId": "AthenaCharacter:" + shopConfig["DailyTab1BundleSkin1"],
									"minQuantity": 1
								},
								{
									"requirementType": "DenyOnItemOwnership",
									"requiredId": "AthenaBackpack:" + shopConfig["DailyTab1BundleBackpack1"],
									"minQuantity": 1
								}
							],
							"offerType": "StaticPrice",
							"giftInfo": {
								"bIsEnabled": true,
								"forcedGiftBoxTemplateId": "",
								"purchaseRequirements": [],
								"giftRecordIds": []
							},
							"refundable": true,
							"metaInfo": [
								{
									"key": "NewDisplayAssetPath",
									"value": `/Game/Catalog/NewDisplayAssets/DAv2_${shopConfig["DailyTab1BundleTempName"]}.DAv2_${shopConfig["DailyTab1BundleTempName"]}`
								},
								{
									"key": "SectionId",
									"value": "Daily"
								},
								{
									"key": "TileSize",
									"value": "Normal"
								},
								{
									"key": "AnalyticOfferGroupId",
									"value": "5"
								}
							],
							"displayAssetPath": "None",
							"itemGrants": [
								{
									"templateId": "AthenaCharacter:" + shopConfig["DailyTab1BundleSkin1"],
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:" + shopConfig["DailyTab1BundleBackpack1"],
									"quantity": 1
								}
							],
							"additionalGrants": [],
							"sortPriority": -1,
							"catalogGroupPriority": 0
						},
						{
							"devName": "[VIRTUAL]1 x Eagle for 500 MtxCurrency",
							"offerId": "v2:/f957800af19a8387e691cc0281010235de56e2c205621b47c7fcf60923164ad3",
							"fulfillmentIds": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"categories": [
								"zzDaily 04"
							],
							"prices": [
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": shopConfig["DailyTab1emotePrice2"],
									"dynamicRegularPrice": shopConfig["DailyTab1emotePrice2"],
									"finalPrice": shopConfig["DailyTab1emotePrice2"],
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": shopConfig["DailyTab1emotePrice2"]
								}
							],
							"meta": {
								"NewDisplayAssetPath": `/Game/Catalog/NewDisplayAssets/DAv2_${shopConfig["DailyTab1emote2"]}.DAv2_${shopConfig["DailyTab1emote2"]}`,
								"SectionId": "Daily",
								"TileSize": "Small",
								"AnalyticOfferGroupId": "8"
							},
							"matchFilter": "",
							"filterWeight": 0.0,
							"appStoreId": [],
							"requirements": [
								{
									"requirementType": "DenyOnItemOwnership",
									"requiredId": "AthenaDance:" + shopConfig["DailyTab1emote2"],
									"minQuantity": 1
								}
							],
							"offerType": "StaticPrice",
							"giftInfo": {
								"bIsEnabled": true,
								"forcedGiftBoxTemplateId": "",
								"purchaseRequirements": [],
								"giftRecordIds": []
							},
							"refundable": true,
							"metaInfo": [
								{
									"key": "NewDisplayAssetPath",
									"value": `/Game/Catalog/NewDisplayAssets/DAv2_${shopConfig["DailyTab1emote2"]}.${shopConfig["DailyTab1emote2"]}`
								},
								{
									"key": "SectionId",
									"value": "Daily"
								},
								{
									"key": "TileSize",
									"value": "Small"
								},
								{
									"key": "AnalyticOfferGroupId",
									"value": "8"
								}
							],
							"itemGrants": [
								{
									"templateId": "AthenaDance:" + shopConfig["DailyTab1emote2"],
									"quantity": 1
								}
							],
							"additionalGrants": [],
							"sortPriority": -4,
							"catalogGroupPriority": 0
						},
						{
							"devName": "[VIRTUAL]1 x Electro Shuffle for 800 MtxCurrency",
							"offerId": "v2:/009d4ff1ef1089bb5e556367f2bd1a3c7715ade0ec6f265aeda08ae34365de30",
							"fulfillmentIds": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"categories": [
								"zzDaily 05"
							],
							"prices": [
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": shopConfig["DailyTab1emotePrice3"],
									"dynamicRegularPrice": shopConfig["DailyTab1emotePrice3"],
									"finalPrice": shopConfig["DailyTab1emotePrice3"],
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": shopConfig["DailyTab1emotePrice3"]
								}
							],
							"meta": {
								"NewDisplayAssetPath": `/Game/Catalog/NewDisplayAssets/DAv2_${shopConfig["DailyTab1emote3"]}.DAv2_${shopConfig["DailyTab1emote3"]}`,
								"SectionId": "Daily",
								"TileSize": "Small",
								"AnalyticOfferGroupId": "9"
							},
							"matchFilter": "",
							"filterWeight": 0.0,
							"appStoreId": [],
							"requirements": [
								{
									"requirementType": "DenyOnItemOwnership",
									"requiredId": "AthenaDance:" + shopConfig["DailyTab1emote3"],
									"minQuantity": 1
								}
							],
							"offerType": "StaticPrice",
							"giftInfo": {
								"bIsEnabled": true,
								"forcedGiftBoxTemplateId": "",
								"purchaseRequirements": [],
								"giftRecordIds": []
							},
							"refundable": true,
							"metaInfo": [
								{
									"key": "NewDisplayAssetPath",
									"value": `/Game/Catalog/NewDisplayAssets/DAv2_${shopConfig["DailyTab1emote3"]}.DAv2_${shopConfig["DailyTab1emote3"]}`
								},
								{
									"key": "SectionId",
									"value": "Daily"
								},
								{
									"key": "TileSize",
									"value": "Small"
								},
								{
									"key": "AnalyticOfferGroupId",
									"value": "9"
								}
							],
							"itemGrants": [
								{
									"templateId": "AthenaDance:" + shopConfig["DailyTab1emote3"],
									"quantity": 1
								}
							],
							"additionalGrants": [],
							"sortPriority": -5,
							"catalogGroupPriority": 0
						},
						{
							"devName": "[VIRTUAL]1 x Aspen for 800 MtxCurrency",
							"offerId": "v2:/06656123372ca97694cb874e3f9df16085133146008468daf1abf402c1826f4a",
							"fulfillmentIds": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"categories": [
								"zzDaily 02"
							],
							"prices": [
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": shopConfig["DailyTab1Price1"],
									"dynamicRegularPrice": shopConfig["DailyTab1Price1"],
									"finalPrice": shopConfig["DailyTab1Price1"],
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": shopConfig["DailyTab1Price1"]
								}
							],
							"meta": {
								"NewDisplayAssetPath": `/Game/Catalog/NewDisplayAssets/DAv2_${shopConfig["DailyTab1Skin1"]}.DAv2_${shopConfig["DailyTab1Skin1"]}`,
								"SectionId": "Daily",
								"TileSize": "Normal",
								"AnalyticOfferGroupId": "6"
							},
							"matchFilter": "",
							"filterWeight": 0.0,
							"appStoreId": [],
							"requirements": [
								{
									"requirementType": "DenyOnItemOwnership",
									"requiredId": "AthenaCharacter:" + shopConfig["DailyTab1Skin1"],
									"minQuantity": 1
								}
							],
							"offerType": "StaticPrice",
							"giftInfo": {
								"bIsEnabled": true,
								"forcedGiftBoxTemplateId": "",
								"purchaseRequirements": [],
								"giftRecordIds": []
							},
							"refundable": true,
							"metaInfo": [
								{
									"key": "NewDisplayAssetPath",
									"value": `/Game/Catalog/NewDisplayAssets/DAv2_${shopConfig["DailyTab1Skin1"]}.DAv2_${shopConfig["DailyTab1Skin1"]}`
								},
								{
									"key": "SectionId",
									"value": "Daily"
								},
								{
									"key": "TileSize",
									"value": "Normal"
								},
								{
									"key": "AnalyticOfferGroupId",
									"value": "6"
								}
							],
							"displayAssetPath": "None",
							"itemGrants": [
								{
									"templateId": "AthenaCharacter:" + shopConfig["DailyTab1Skin1"],
									"quantity": 1
								}
							],
							"additionalGrants": [],
							"sortPriority": -2,
							"catalogGroupPriority": 0
						},
						{
							"devName": "[VIRTUAL]1 x IDK for 200 MtxCurrency",
							"offerId": "v2:/b03395afc208550f3bd55cb28a6964b736f5d4479e3447804d3f682e7c5df86b",
							"fulfillmentIds": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"categories": [
								"zzDaily 06"
							],
							"prices": [
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": shopConfig["DailyTab1emotePrice1"],
									"dynamicRegularPrice": shopConfig["DailyTab1emotePrice1"],
									"finalPrice": shopConfig["DailyTab1emotePrice1"],
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": shopConfig["DailyTab1emotePrice1"]
								}
							],
							"meta": {
								"NewDisplayAssetPath": `/Game/Catalog/NewDisplayAssets/DAv2_${shopConfig["DailyTab1emote1"]}.DAv2_${shopConfig["DailyTab1emote1"]}`,
								"SectionId": "Daily",
								"TileSize": "Small",
								"AnalyticOfferGroupId": "10"
							},
							"matchFilter": "",
							"filterWeight": 0.0,
							"appStoreId": [],
							"requirements": [
								{
									"requirementType": "DenyOnItemOwnership",
									"requiredId": "AthenaDance:" + shopConfig["DailyTab1emote1"],
									"minQuantity": 1
								}
							],
							"offerType": "StaticPrice",
							"giftInfo": {
								"bIsEnabled": true,
								"forcedGiftBoxTemplateId": "",
								"purchaseRequirements": [],
								"giftRecordIds": []
							},
							"refundable": true,
							"metaInfo": [
								{
									"key": "NewDisplayAssetPath",
									"value": `/Game/Catalog/NewDisplayAssets/DAv2_${shopConfig["DailyTab1emote1"]}.DAv2_${shopConfig["DailyTab1emote1"]}`
								},
								{
									"key": "SectionId",
									"value": "Daily"
								},
								{
									"key": "TileSize",
									"value": "Small"
								},
								{
									"key": "AnalyticOfferGroupId",
									"value": "10"
								}
							],
							"itemGrants": [
								{
									"templateId": "AthenaDance:" + shopConfig["DailyTab1emote1"],
									"quantity": 1
								}
							],
							"additionalGrants": [],
							"sortPriority": -6,
							"catalogGroupPriority": 0
						}
					]
				},
				{
					"name": "BRSeason13",
					"catalogEntries": []
				},
				{
					"name": "BRSeason14",
					"catalogEntries": []
				},
				{
					"name": "BRSeason15",
					"catalogEntries": []
				},
				{
					"name": "BRSeason16",
					"catalogEntries": []
				},
				{
					"name": "BRSeason17",
					"catalogEntries": []
				},
				{
					"name": "BRStarterKits",
					"catalogEntries": [
						{
							"offerId": "7532F5434D9F66A44EA85B94B726AE98",
							"devName": "Corrupted Legends",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": 90,
									"dynamicRegularPrice": -1,
									"finalPrice": 90,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 90
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"b0892a99f96b43f88f42eb14035e863d",
								"ios_corlgd1_C",
								"",
								"google_corlgd_1",
								"",
								"CORLGD0000000000",
								"4b564e39-4a4a-3054-c033-323048433000",
								"c-seasonpack000013-CORLGD1",
								"sam_CORLGD",
								"9NVKJJT320HC",
								"CORLGD0000000000"
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "9579C9CE48749FC2E1F35FA7C65ABF14",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "SectionID",
									"value": "LimitedTime"
								},
								{
									"key": "NewDisplayAssetPath",
									"value": "/Game/Catalog/NewDisplayAssets/DAv2_RMT_CorruptLegends.DAv2_RMT_CorruptLegends"
								},
								{
									"key": "TileSize",
									"value": "DoubleWide"
								},
								{
									"key": "HideRarityBorder",
									"value": "true"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 15,
							"title": "Corrupted Legends Pack",
							"shortDescription": "",
							"description": "What is your chaotic alignment? How will you balance the scales? This pack's cosmetics come with a slider that allows you to tune how corrupted your outfit is!",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_CorruptedLegendsBundle.DA_Featured_CorruptedLegendsBundle",
							"itemGrants": [
								{
									"templateId": "AthenaCharacter:cid_852_athena_commando_f_blackwidowcorrupt",
									"quantity": 1
								},
								{
									"templateId": "AthenaCharacter:cid_853_athena_commando_f_sniperhoodcorrupt",
									"quantity": 1
								},
								{
									"templateId": "AthenaCharacter:cid_854_athena_commando_m_samuraiultraarmorcorrupt",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_606_blackwidowfemale_corrupt",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_607_sniperhoodfemale_corrupt",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_608_samuraiarmorultra_corrupt",
									"quantity": 1
								}
							]
						},
						{
							"offerId": "908A05A149F3887044147FBADB6361C5",
							"devName": "Season 17 Starter Kit (RMT)",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": 1313132,
									"dynamicRegularPrice": -1,
									"finalPrice": 3111,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 132330
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"f30f517b073e4e2e88a2b2d6fedd6d05",
								"ios_rmpa15_C",
								"",
								"google_rmpa15",
								"",
								"RMPA150000000000",
								"33365039-474b-3058-c05a-3843364c3300",
								"c-starterpack00017-SPACK15",
								"sam_RMPA15",
								"9P63KGXZ8C6L",
								"RMPA150000000000"
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "FE3CD9AD41D574898D75D8A3323CDD70",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "MtxQuantity",
									"value": "600"
								},
								{
									"key": "MtxBonus",
									"value": "0"
								},
								{
									"key": "SectionID",
									"value": "LimitedTime"
								},
								{
									"key": "NewDisplayAssetPath",
									"value": "/Game/Catalog/NewDisplayAssets/DAv2_RMT_ShrapnelStarterPack.DAv2_RMT_ShrapnelStarterPack"
								},
								{
									"key": "TileSize",
									"value": "DoubleWide"
								},
								{
									"key": "HideRarityBorder",
									"value": "true"
								},
								{
									"Key": "CurrencyAnalyticsName",
									"Value": "Season17_StarterKit"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 22,
							"title": "Dizzie's Domain Pack",
							"shortDescription": "",
							"description": "Any drop spot Dizzie lands at, she controls. Stake claim on the island with the Dizzie's Domain Pack. Includes an outfit, back bling, a picakxe and 600 V-Bucks.",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_Shrapnel_StarterPack.DA_Featured_Shrapnel_StarterPack",
							"itemGrants": [
								{
									"templateId": "Currency:MtxPurchased",
									"quantity": 399
								},
								{
									"templateId": "Currency:MtxPurchaseBonus",
									"quantity": 201
								},
								{
									"templateId": "AthenaCharacter:cid_a_099_athena_commando_f_shrapnel",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_764_shrapnel",
									"quantity": 1
								},
								{
									"templateId": "AthenaPickaxe:pickaxe_id_606_shrapnelfemale",
									"quantity": 1
								}
							]
						},
					 {
				  "offerId": "9DD831A348B80D3F40E28ABA21991A63",
				  "devName": "Season 3 Starter Kit (RMT)",
				  "offerType": "StaticPrice",
				  "prices": [
					{
					  "currencyType": "RealMoney",
					  "currencySubType": "",
					  "regularPrice": 22,
					  "dynamicRegularPrice": -1,
					  "finalPrice": 22,
					  "saleExpiration": "9999-12-31T23:59:59.999Z",
					  "basePrice": 22
					}
				  ],
				  "categories": [],
				  "dailyLimit": -1,
				  "weeklyLimit": -1,
				  "monthlyLimit": -1,
				  "refundable": false,
				  "appStoreId": [
					"",
					"84aba7b08b734e7c90a0112173b1f7fb",
					"ios_s3rpma_C",
					"",
					"google_s3rpma_1",
					"",
					"S3RMPA0000000000",
					"5c174e59-97ff-454c-bdad-58de6c62b7c3",
					"c-starterpack00000-SPACK01",
					"",
					"C2L7CL2JKWPH",
					"S3RMPA0000000000"
				  ],
				  "requirements": [
					{
					  "requirementType": "DenyOnFulfillment",
					  "requiredId": "8A6F1D0C452CCC14F6D789A65732F9A5",
					  "minQuantity": 1
					}
				  ],
				  "metaInfo": [
					{
					  "key": "MtxQuantity",
					  "value": "600"
					},
					{
					  "key": "MtxBonus",
					  "value": "100"
					},
					{
					  "Key": "CurrencyAnalyticsName",
					  "Value": "Season3_StarterKit"
					}
				  ],
				  "catalogGroup": "",
				  "catalogGroupPriority": 0,
				  "sortPriority": 20,
				  "title": "Season 3 Starter Kit",
				  "shortDescription": "",
				  "description": "A epic skin and 600 v-bucks!",
				  "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_CID_090_Athena_Commando_M_Tactical.DA_Featured_CID_090_Athena_Commando_M_Tactical",
				  "itemGrants": [
					{
					  "templateId": "Currency:MtxPurchased",
					  "quantity": 499
					},
					{
					  "templateId": "Currency:MtxPurchaseBonus",
					  "quantity": 101
					},
					{
					  "templateId": "AthenaCharacter:cid_090_athena_commando_m_tactical",
					  "quantity": 1
					},
					{
					  "templateId": "AthenaBackpack:bid_030_tacticalrogue",
					  "quantity": 1
					}
				  ]
				},
						{
							"offerId": "DF00BEC84B6936C1F514FC8AE2699115",
							"devName": "Frozen Legends 3",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": 2500,
									"dynamicRegularPrice": -1,
									"finalPrice": 2500,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 2500
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": true,
							"appStoreId": [
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								""
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "681FF49245D5B58084D235B533595F85",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "SectionID",
									"value": "LimitedTime"
								},
								{
									"key": "NewDisplayAssetPath",
									"value": "/Game/Catalog/NewDisplayAssets/DAv2_RMT_FrozenLegends3.DAv2_RMT_FrozenLegends3"
								},
								{
									"key": "TileSize",
									"value": "DoubleWide"
								},
								{
									"key": "HideRarityBorder",
									"value": "true"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 17,
							"title": "FROST LEGENDS PACK",
							"shortDescription": "",
							"description": "Winter's frostiest crew drifts into battle with the Frost Legends bundle.",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_FrozenLegends3Bundle.DA_Featured_FrozenLegends3Bundle",
							"itemGrants": [
								{
									"templateId": "AthenaCharacter:cid_982_athena_commando_m_driftwinter",
									"quantity": 1
								},
								{
									"templateId": "AthenaCharacter:cid_983_athena_commando_f_cupidwinter",
									"quantity": 1
								},
								{
									"templateId": "AthenaCharacter:cid_987_athena_commando_m_frostbyte",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_680_driftwinter",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_681_driftwinterfox",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_683_cupidwinterfemale",
									"quantity": 1
								},
								{
									"templateId": "AthenaPickaxe:pickaxe_id_518_cupidwinterfemale1h",
									"quantity": 1
								},
								{
									"templateId": "AthenaPickaxe:pickaxe_id_519_driftwintermale1h",
									"quantity": 1
								},
								{
									"templateId": "AthenaPickaxe:pickaxe_id_522_frostbytemale",
									"quantity": 1
								}
							],
							"giftInfo": {
								"bIsEnabled": true,
								"forcedGiftBoxTemplateId": "",
								"purchaseRequirements": []
							}
						},
						{
							"offerId": "DF00BEC84B6936C1F514FC8AE2699115",
							"devName": "MONARCH'S LEVEL UP QUEST PACK",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": 2500,
									"dynamicRegularPrice": -1,
									"finalPrice": 2500,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 2500
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": true,
							"appStoreId": [
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								""
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "681FF49245D5B58084D235B533595F85",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "SectionID",
									"value": "LimitedTime"
								},
								{
									"key": "NewDisplayAssetPath",
									"value": "/Game/Catalog/NewDisplayAssets/DA_Featured_MonarchLevelUpPack.DA_Featured_MonarchLevelUpPack"
								},
								{
									"key": "TileSize",
									"value": "DoubleWide"
								},
								{
									"key": "HideRarityBorder",
									"value": "true"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 17,
							"title": "MONARCH'S LEVEL UP QUEST PACK",
							"shortDescription": "",
							"description": "QUESTS CAN BE COMPLETED FROM\r\nFEBRUARY 16 2022 - MARCH 19 2022 ET",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_MonarchLevelUpPack.DA_Featured_MonarchLevelUpPack",
							"itemGrants": [
								{
									"templateId": "AthenaCharacter:CID_A_354_Athena_Commando_F_ShatterFlyEclipse",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:BID_951_ShatterflyEclipse",
									"quantity": 1
								},
								{
									"templateId": "AthenaItemWrap:Wrap_440_ShatterflyEclipse",
									"quantity": 1
								}
							],
							"giftInfo": {
								"bIsEnabled": true,
								"forcedGiftBoxTemplateId": "",
								"purchaseRequirements": []
							}
						},
						{
							"offerId": "4E40664F40E1629B022638A891ABDDDE",
							"devName": "Celestial",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 0,
									"dynamicRegularPrice": -1,
									"finalPrice": 0,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 0
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"sam_galaxy_lord",
								"",
								""
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "C41CA9D5485DCC109BD51495B2D22A09",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "LCheck",
									"value": "A,B"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 15,
							"title": "Galaxy",
							"shortDescription": "",
							"description": "Victory is written in the stars.",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_CID_175_Athena_Commando_M_Celestial.DA_Featured_CID_175_Athena_Commando_M_Celestial",
							"itemGrants": [
								{
									"templateId": "AthenaCharacter:cid_175_athena_commando_m_celestial",
									"quantity": 1
								},
								{
									"templateId": "AthenaGlider:glider_id_090_celestial",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_138_celestial",
									"quantity": 1
								},
								{
									"templateId": "AthenaPickaxe:pickaxe_id_116_celestial",
									"quantity": 1
								}
							]
						},
						{
							"offerId": "869BE9DD49181A5099618D8A78699728",
							"devName": "Season 12 Starter Kit (RMT)",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 0,
									"dynamicRegularPrice": -1,
									"finalPrice": 0,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 0
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"24f4bb5bda1e438487706aad6a4332d2",
								"ios_rmpa10_C",
								"",
								"google_rmpa10",
								"",
								"RMPA100000000000",
								"34394e39-5156-304e-c030-443339460f00",
								"c-starterpack00012-SPACK10",
								"sam_RMPA10",
								"9N94VQN0D39F",
								""
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "072002BD417D1A172AEDC9B9FC41A987",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "MtxQuantity",
									"value": "600"
								},
								{
									"key": "MtxBonus",
									"value": "100"
								},
								{
									"Key": "CurrencyAnalyticsName",
									"Value": "Season12_StarterKit"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 10,
							"title": "The Iris Pack",
							"shortDescription": "",
							"description": "Keep the competition in your sights with the Iris Pack. An outfit, a back bling, a pickaxe and 600 V-Bucks!",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_HoodieBandit_Bundle.DA_Featured_HoodieBandit_Bundle",
							"itemGrants": [
								{
									"templateId": "Currency:MtxPurchased",
									"quantity": 499
								},
								{
									"templateId": "Currency:MtxPurchaseBonus",
									"quantity": 101
								},
								{
									"templateId": "AthenaCharacter:cid_674_athena_commando_f_hoodiebandit",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_457_hoodiebandit",
									"quantity": 1
								},
								{
									"templateId": "AthenaPickaxe:pickaxe_id_343_hoodiebanditfemale",
									"quantity": 1
								}
							]
						},
						{
							"offerId": "F186F0DD420ED9945866B0825017AE3C",
							"devName": "Season 8 Starter Kit (RMT)",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 8,
									"dynamicRegularPrice": -1,
									"finalPrice": 8,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 8
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"71a6102c3104441589fd54ee9327fe24",
								"ios_rmpa06_C",
								"",
								"google_rmpa06_1",
								"",
								"RMPA060000000000",
								"a494c79e-90ad-4738-9787-debcf5065951",
								"c-starterpack00080-SPACK06",
								"sam_RMPA06",
								"BRKLF31HTQ4P",
								""
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "E9AD46E848A082CB54C6C5B8E98375E7",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "MtxQuantity",
									"value": "600"
								},
								{
									"key": "MtxBonus",
									"value": "100"
								},
								{
									"Key": "CurrencyAnalyticsName",
									"Value": "Season8_StarterKit"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 10,
							"title": "Laguna Pack",
							"shortDescription": "",
							"description": "Strum it up and kick back with the Laguna Pack. An outfit, a back bling, a wrap and 600 V-Bucks!",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_CID_367_Athena_Commando_F_Tropical.DA_Featured_CID_367_Athena_Commando_F_Tropical",
							"itemGrants": [
								{
									"templateId": "Currency:MtxPurchased",
									"quantity": 499
								},
								{
									"templateId": "Currency:MtxPurchaseBonus",
									"quantity": 101
								},
								{
									"templateId": "AthenaCharacter:cid_367_athena_commando_f_tropical",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_231_tropicalfemale",
									"quantity": 1
								},
								{
									"templateId": "AthenaItemWrap:wrap_033_tropicalgirl",
									"quantity": 1
								}
							]
						},
						{
							"offerId": "FFDBF34C4A8ECD2028986799ED38E28D",
							"devName": "Derby Dynamo Challenge Pack",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 0,
									"dynamicRegularPrice": -1,
									"finalPrice": 0,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 0
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"3cfa7c7589534bad8423a733eace00d9",
								"ios_tpscp1_C",
								"",
								"google_tpscp1_1",
								"",
								"TPSCP10000000000",
								"53584e39-3842-304e-c042-5330574d6300",
								"c-seasonpack000012-TPSCP1",
								"sam_TPSCP1",
								"9NXSB8NBS0WM",
								"TPSCP10000000000"
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "7E2A404847B2A0063D9A04B6EF505682",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "SectionID",
									"value": "LimitedTime"
								},
								{
									"key": "NewDisplayAssetPath",
									"value": "/Game/Catalog/NewDisplayAssets/DAv2_RMT_DerbyDynamo.DAv2_RMT_DerbyDynamo"
								},
								{
									"key": "TileSize",
									"value": "DoubleWide"
								},
								{
									"key": "HideRarityBorder",
									"value": "true"
								},
								{
									"key": "ViolatorTag",
									"value": "UnlockCPVBucks"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 24,
							"title": "Derby Dynamo Quest Pack",
							"shortDescription": "",
							"description": "Roll through the competition with the Derby Dynamo Challenge pack. Get the Derby Dynamo Outfit with Built-In-Emote, Quad Roller Back Bling, and complete Quick Challenges to earn up to 1,500 V-Bucks! ",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_TripleScoopBundle.DA_Featured_TripleScoopBundle",
							"itemGrants": [
								{
									"templateId": "AthenaCharacter:cid_833_athena_commando_f_triplescoop",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_587_triplescoop",
									"quantity": 1
								},
								{
									"templateId": "ChallengeBundleSchedule:bundleschedule_styles_triplescoop",
									"quantity": 1
								}
							]
						},
						{
							"offerId": "1967EC27423FA632F2F0E191EC08F2BA",
							"devName": "Robo-Kevin Pack",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 0,
									"dynamicRegularPrice": -1,
									"finalPrice": 0,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 0
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"48e7be9d5a834f498da5799749db5836",
								"",
								"",
								"",
								"",
								"STWASK0000000000",
								"304e4e39-3636-304b-c042-5636384b0d00",
								"",
								"",
								"9NN066KBV68K",
								"STWASK0000000000"
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "9B506B7A4AEF74EC8DBCE78E5CE590CD",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "SectionID",
									"value": "LimitedTime"
								},
								{
									"key": "NewDisplayAssetPath",
									"value": "/Game/Catalog/NewDisplayAssets/DAv2_RMT_AssembleK.DAv2_RMT_AssembleK"
								},
								{
									"key": "TileSize",
									"value": "DoubleWide"
								},
								{
									"key": "HideRarityBorder",
									"value": "true"
								},
								{
									"key": "ViolatorTag",
									"value": "IncludesSTW"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 16,
							"title": "Robo-Kevin Pack",
							"shortDescription": "",
							"description": "Everyone's favorite triangular bot is here to upgrade your spirits.",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_AssembleKBundleBR.DA_Featured_AssembleKBundleBR",
							"itemGrants": [
								{
									"templateId": "Token:campaignaccess",
									"quantity": 1
								},
								{
									"templateId": "Quest:stwstarterbundle08_getrewards",
									"quantity": 1
								},
								{
									"templateId": "AthenaCharacter:cid_a_268_athena_commando_m_assemblek",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_908_assemblek",
									"quantity": 1
								},
								{
									"templateId": "AthenaPickaxe:pickaxe_id_710_assemblekmale",
									"quantity": 1
								}
							]
						},
						{
							"offerId": "5E11A3E74160D0F61CD812BFC70D2437",
							"devName": "Tech Future Pack",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 645,
									"dynamicRegularPrice": -1,
									"finalPrice": 645,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 456
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"7438471715774483b26a7990c393be37",
								"",
								"",
								"",
								"",
								"NEOLGD0000000000",
								"4b4d5039-4e56-3051-c053-4a4457449200",
								"c-seasonpack000021-NEOLGD1",
								"sam_NEOLGD",
								"9PMKVNQSJDWD",
								"NEOLGD0000000000"
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "905B38CB4ACEA84B4373C7A20F460AC2",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "SectionID",
									"value": "LimitedTime"
								},
								{
									"key": "NewDisplayAssetPath",
									"value": "/Game/Catalog/NewDisplayAssets/DAv2_RMT_CyberpunkLegends.DAv2_RMT_CyberpunkLegends"
								},
								{
									"key": "TileSize",
									"value": "DoubleWide"
								},
								{
									"key": "HideRarityBorder",
									"value": "true"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 11,
							"title": "Tech Future Pack",
							"shortDescription": "",
							"description": "Neon lights and tech-advanced suits, the future calls for more if you want to make it to the top. Includes 3 Outfits, 3 Back Blings and 3 Pickaxes.",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_CyberpunkLegendsBundle.DA_Featured_CyberpunkLegendsBundle",
							"itemGrants": [
								{
									"templateId": "AthenaCharacter:cid_a_258_athena_commando_f_neoncattech",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_899_neoncattech",
									"quantity": 1
								},
								{
									"templateId": "AthenaPickaxe:pickaxe_id_707_neoncattechfemale1h",
									"quantity": 1
								},
								{
									"templateId": "AthenaCharacter:cid_a_259_athena_commando_m_peelytech",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_900_peelytech",
									"quantity": 1
								},
								{
									"templateId": "AthenaPickaxe:pickaxe_id_709_peelytechmale",
									"quantity": 1
								},
								{
									"templateId": "AthenaCharacter:cid_a_260_athena_commando_m_crazyeighttech",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_901_crazyeighttech",
									"quantity": 1
								},
								{
									"templateId": "AthenaPickaxe:pickaxe_id_701_crazyeighttechmale1h",
									"quantity": 1
								}
							]
						},
						{
							"offerId": "3861E37541DC53BC9A0C848DDB2F87FF",
							"devName": "Season 14 Starter Kit (RMT)",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 24,
									"dynamicRegularPrice": -1,
									"finalPrice": 234,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 234
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"6242854fa2b4445b9751b42e7da0ca35",
								"ios_rmpa12_C",
								"",
								"google_rmpa12",
								"",
								"RMPA120000000000",
								"35335039-374b-3043-c04c-4b5a39311100",
								"c-starterpack00014-SPACK12",
								"sam_RMPA12",
								"9P35K7CLKZ91",
								"RMPA120000000000"
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "74724962400E3556CA2830852B0E01B1",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "MtxQuantity",
									"value": "600"
								},
								{
									"key": "MtxBonus",
									"value": "0"
								},
								{
									"key": "SectionID",
									"value": "LimitedTime"
								},
								{
									"key": "NewDisplayAssetPath",
									"value": "/Game/Catalog/NewDisplayAssets/DAv2_RMT_MaskedDancer.DAv2_RMT_MaskedDancer"
								},
								{
									"key": "TileSize",
									"value": "DoubleWide"
								},
								{
									"key": "HideRarityBorder",
									"value": "true"
								},
								{
									"Key": "CurrencyAnalyticsName",
									"Value": "Season14_StarterKit"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 10,
							"title": "The Street Serpent Pack",
							"shortDescription": "",
							"description": "Street fights and back alley brawls are what you will find with the Street Serpent pack. Includes an outfit, a back bling, a pickaxe and 600 V-Bucks.",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_MaskedDancerBundle.DA_Featured_MaskedDancerBundle",
							"itemGrants": [
								{
									"templateId": "Currency:MtxPurchased",
									"quantity": 399
								},
								{
									"templateId": "Currency:MtxPurchaseBonus",
									"quantity": 201
								},
								{
									"templateId": "AthenaCharacter:cid_837_athena_commando_m_maskeddancer",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_590_maskeddancer",
									"quantity": 1
								},
								{
									"templateId": "AthenaPickaxe:pickaxe_id_443_maskeddancermale",
									"quantity": 1
								}
							]
						},
						{
							"offerId": "9F5895BB46EEF32197FD30B2B8BD34B3",
							"devName": "Breakpoint's Quest Pack",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 423,
									"dynamicRegularPrice": -1,
									"finalPrice": 423,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 234
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"755cfa1663154c35a2ddcc94c07165db",
								"ios_scncp1_C",
								"",
								"google_scncp1_1",
								"",
								"SCNCP10000000000",
								"f55fda8a-5d77-4229-ac6a-2d9531304f51",
								"c-seasonpack000006-SCNCP1",
								"sam_SCNCP1",
								"C4X98BQ0JS0F",
								"SCNCP10000000000"
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "74DD582C489507D076E5C5AAA08AFE96",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "SectionID",
									"value": "LimitedTime"
								},
								{
									"key": "NewDisplayAssetPath",
									"value": "/Game/Catalog/NewDisplayAssets/DAv2_RMT_BreakpointChallengePack.DAv2_RMT_BreakpointChallengePack"
								},
								{
									"key": "TileSize",
									"value": "DoubleWide"
								},
								{
									"key": "HideRarityBorder",
									"value": "True"
								},
								{
									"key": "ViolatorTag",
									"value": "UnlockVBucks"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 14,
							"title": "Breakpoint's Quest Pack",
							"shortDescription": "",
							"description": "Start a digital revolution and take on Breakpoint's quests to earn up to 1,000 V-Bucks!",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_CID_429_Athena_Commando_F_NeonLines.DA_Featured_CID_429_Athena_Commando_F_NeonLines",
							"itemGrants": [
								{
									"templateId": "AthenaCharacter:cid_429_athena_commando_f_neonlines",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_284_neonlines",
									"quantity": 1
								},
								{
									"templateId": "ChallengeBundleSchedule:bundleschedule_styles_neonlines",
									"quantity": 1
								}
							]
						},
						{
							"offerId": "4EEFB69645A8CBB239BAD1A520AA4663",
							"devName": "Season 4 Starter Kit (RMT)",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 324,
									"dynamicRegularPrice": -1,
									"finalPrice": 423,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 234
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"3c8c7982474145e9ab639354fdbf628d",
								"ios_rmpa02_C",
								"30100",
								"google_rmpa02_1",
								"",
								"RMPA020000000000",
								"ffb9356c-c7bd-456a-8246-857da7705ff9",
								"c-starterpack00000-SPACK02",
								"sam_RMPA02",
								"BXL5DD34L1SG",
								""
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "674DE41846A914BB78828393F6343442",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "MtxQuantity",
									"value": "600"
								},
								{
									"key": "MtxBonus",
									"value": "100"
								},
								{
									"Key": "CurrencyAnalyticsName",
									"Value": "Season4_StarterKit"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 10,
							"title": "Season 4 Starter Kit",
							"shortDescription": "",
							"description": "An epic skin and 600 v-bucks!",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_CID_139_Athena_Commando_M_Fighterpilot.DA_Featured_CID_139_Athena_Commando_M_FighterPilot",
							"itemGrants": [
								{
									"templateId": "Currency:MtxPurchased",
									"quantity": 499
								},
								{
									"templateId": "Currency:MtxPurchaseBonus",
									"quantity": 101
								},
								{
									"templateId": "AthenaCharacter:cid_139_athena_commando_m_fighterpilot",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_056_fighterpilot",
									"quantity": 1
								}
							]
						},
						{
							"offerId": "D3DBBE694059D151F191DE897DD2640D",
							"devName": "Fortnite Crew Bling",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": 69,
									"dynamicRegularPrice": -1,
									"finalPrice": 69,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 69
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"9ec21a8d4f744f8b938fbf79d02d40b9",
								"",
								"",
								"",
								"",
								"FSUB010000000000",
								"",
								"s-74d15f2fd98483d2-fsub01",
								"sam_FSUB01",
								"CFQ7TTC0L23L",
								"FSUB010000000000"
							],
							"requirements": [],
							"metaInfo": [
								{
									"key": "MtxBonus",
									"value": "0"
								},
								{
									"key": "SectionID",
									"value": "Subscription"
								},
								{
									"key": "NewDisplayAssetPath",
									"value": "/Game/Catalog/NewDisplayAssets/DAv2_Subs_CrewBling.DAv2_Subs_CrewBling"
								},
								{
									"key": "TileSize",
									"value": "DoubleWide"
								},
								{
									"key": "HideRarityBorder",
									"value": "true"
								},
								{
									"key": "IsCrewBling",
									"value": "true"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 0,
							"title": "Crew Legacy Set",
							"shortDescription": "",
							"description": "Crew Legacy Set",
							"displayAssetPath": "",
							"itemGrants": []
						},
						{
							"offerId": "182F62F04A408A892BDCC9BAC3CCE2E9",
							"devName": "Golden Touch Quest Pack",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 23,
									"dynamicRegularPrice": -1,
									"finalPrice": 32,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 23
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"d3acf48fb4f549f994780e8f94bcbb7f",
								"",
								"",
								"",
								"",
								"GDNCP10000000000",
								"324b5039-464d-3031-c035-4632314cf400",
								"c-seasonpack000015-GDNCP1",
								"sam_GDNCP1",
								"9PK2MF15F21L",
								"GDNCP10000000000"
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "75576ADC4C697040FE32A9BDA2ECF044",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "SectionID",
									"value": "LimitedTime"
								},
								{
									"key": "NewDisplayAssetPath",
									"value": "/Game/Catalog/NewDisplayAssets/DAv2_RMT_GoldenTouch.DAv2_RMT_GoldenTouch"
								},
								{
									"key": "TileSize",
									"value": "DoubleWide"
								},
								{
									"key": "HideRarityBorder",
									"value": "true"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 22,
							"title": "Golden Touch Quest Pack",
							"shortDescription": "",
							"description": "Golden Touch Quest Pack",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_CatBurglar_Bundle.DA_Featured_CatBurglar_Bundle",
							"itemGrants": [
								{
									"templateId": "AthenaCharacter:cid_a_034_athena_commando_f_catburglar",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_711_catburglarfemale",
									"quantity": 1
								},
								{
									"templateId": "ChallengeBundleSchedule:bundleschedule_styles_catburglar",
									"quantity": 1
								},
								{
									"templateId": "AthenaPickaxe:pickaxe_id_556_catburglarfemale1h",
									"quantity": 1
								},
								{
									"templateId": "AthenaLoadingScreen:lsid_278_goldentouch",
									"quantity": 1
								}
							]
						},
						{
							"offerId": "9C4C1DC4415C44FD20C854992634F57F",
							"devName": "Magma Masters",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": 69,
									"dynamicRegularPrice": -1,
									"finalPrice": 69,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 69
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"09c1dbdf491d4b60b1991de8b3770ef1",
								"",
								"",
								"",
								"",
								"L20LGD0000000000",
								"57354e39-3258-305a-c058-475843548500",
								"c-seasonpack000018-L20LGD1",
								"sam_L20LGD",
								"9N5WX2ZXGXCT",
								"L20LGD0000000000"
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "71D843404DB23C14AEF21C88C62FCFDE",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "SectionID",
									"value": "LimitedTime"
								},
								{
									"key": "NewDisplayAssetPath",
									"value": "/Game/Catalog/NewDisplayAssets/DAv2_RMT_MagmaMasters.DAv2_RMT_MagmaMasters"
								},
								{
									"key": "TileSize",
									"value": "DoubleWide"
								},
								{
									"key": "HideRarityBorder",
									"value": "true"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 21,
							"title": "Magma Masters",
							"shortDescription": "",
							"description": "Fiery fun and ashen attitude abound within the Magma Masters Pack.",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_MagmaLegendsBundle.DA_Featured_MagmaLegendsBundle",
							"itemGrants": [
								{
									"templateId": "AthenaCharacter:cid_a_134_athena_commando_f_bandageninjafire",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_804_bandageninjafire",
									"quantity": 1
								},
								{
									"templateId": "AthenaCharacter:cid_a_133_athena_commando_m_darkvikingfire",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_802_darkvikingfiremale",
									"quantity": 1
								},
								{
									"templateId": "AthenaCharacter:cid_a_132_athena_commando_m_scavengerfire",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_803_scavengerfire",
									"quantity": 1
								}
							]
						},
						{
							"offerId": "6A8D7F564670CB7E6ADE87B2AA9D88F9",
							"devName": "Black Ice Legends",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": 2500,
									"dynamicRegularPrice": -1,
									"finalPrice": 2500,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 2500
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": true,
							"appStoreId": [
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								""
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "4405863E488F5B5990F6128531ADF81C",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "SectionID",
									"value": "LimitedTime"
								},
								{
									"key": "NewDisplayAssetPath",
									"value": "/Game/Catalog/NewDisplayAssets/DAv2_RMT_BlackIceLegends.DAv2_RMT_BlackIceLegends"
								},
								{
									"key": "TileSize",
									"value": "DoubleWide"
								},
								{
									"key": "HideRarityBorder",
									"value": "True"
								},
								{
									"key": "offertag",
									"value": "blackicelegends"
								},
								{
									"key": "ViolatorTag",
									"value": "LastSeen30"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 22,
							"title": "Black Ice Legends",
							"shortDescription": "",
							"description": "Winter’s wrath returns with an icy vengeance.",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_BlackIceLegendsBundle.DA_Featured_BlackIceLegendsBundle",
							"itemGrants": [
								{
									"templateId": "AthenaCharacter:cid_a_320_athena_commando_m_catburglarwinter",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_933_catburglarwinter",
									"quantity": 1
								},
								{
									"templateId": "AthenaPickaxe:pickaxe_id_723_catburglarwintermale",
									"quantity": 1
								},
								{
									"templateId": "AthenaCharacter:cid_a_322_athena_commando_f_renegaderaiderice",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_935_renegaderaiderice",
									"quantity": 1
								},
								{
									"templateId": "AthenaPickaxe:pickaxe_id_730_renegaderaidericefemale",
									"quantity": 1
								},
								{
									"templateId": "AthenaCharacter:cid_a_321_athena_commando_f_jurassicarchaeologywinter",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_934_jurassicarchaeologywinter",
									"quantity": 1
								},
								{
									"templateId": "AthenaPickaxe:pickaxe_id_725_jurassicarchaeologywinterfemale",
									"quantity": 1
								},
								{
									"templateId": "AthenaGlider:glider_id_334_darkicemale",
									"quantity": 1
								}
							],
							"giftInfo": {
								"bIsEnabled": true,
								"forcedGiftBoxTemplateId": "",
								"purchaseRequirements": []
							}
						},
						{
							"offerId": "1BA9A3294555AD27E8B1438E8EB48E90",
							"devName": "Inferno's Challenge Pack",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 6969,
									"dynamicRegularPrice": -1,
									"finalPrice": 6969,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 6969
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"b787584e9b134eafb01115908a442aeb",
								"ios_infcp1_C",
								"",
								"google_infcp1_1",
								"",
								"INFCP10000000000",
								"2badd1ea-8aa4-4109-9e2a-0b31d270934f",
								"c-seasonpack000004-INFCP1",
								"sam_INFCP1",
								"C1D4HCHGQXMT",
								""
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "CE1CF4D1424F6781846CDB92DA6AE9A6",
									"minQuantity": 1
								}
							],
							"metaInfo": [],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 22,
							"title": "Inferno's Challenge Pack",
							"shortDescription": "",
							"description": "Take on Inferno's challenges and get yourself up to 1,000 V-Bucks, a pickaxe and a wrap!",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_CID_370_Athena_Commando_M_EvilSuit.DA_Featured_CID_370_Athena_Commando_M_EvilSuit",
							"itemGrants": [
								{
									"templateId": "AthenaCharacter:cid_370_athena_commando_m_evilsuit",
									"quantity": 1
								},
								{
									"templateId": "ChallengeBundleSchedule:bundleschedule_styles_redsuitguy",
									"quantity": 1
								}
							]
						},
						{
							"offerId": "FB0B28DF419D015B635796BF899188FB",
							"devName": "Snakes & Stones Challenge Pack",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": 900,
									"dynamicRegularPrice": -1,
									"finalPrice": 900,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 900
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"d0b97fb6c8c947a7bb407ef9174fc4e1",
								"",
								"",
								"",
								"",
								"SNSCP10000000000",
								"424a4e39-564a-3037-c030-344b4e5a4100",
								"c-seasonpack000017-SNSCP1",
								"sam_SNSCP1",
								"9NJBJV704KNZ",
								"SNSCP10000000000"
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "0CCCB6F440E8279412DA71AD925DBA21",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "SectionID",
									"value": "LimitedTime"
								},
								{
									"key": "NewDisplayAssetPath",
									"value": "/Game/Catalog/NewDisplayAssets/DAv2_RMT_StoneViperChallengePack.DAv2_RMT_StoneViperChallengePack"
								},
								{
									"key": "TileSize",
									"value": "DoubleWide"
								},
								{
									"key": "HideRarityBorder",
									"value": "true"
								},
								{
									"key": "ViolatorTag",
									"value": "UnlockCPVBucks"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 23,
							"title": "Snakes & Stones Challenge Pack",
							"shortDescription": "",
							"description": "Lyra has never lost a staring contest. Seriously, try to win against her stone cold looks. Includes Outfit, Back Bling, Pickaxe and Quests to earn up to 1,500 V-Bucks",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_StoneViper_ChallengePack.DA_Featured_StoneViper_ChallengePack",
							"itemGrants": [
								{
									"templateId": "AthenaCharacter:cid_a_093_athena_commando_f_stoneviper",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_760_stoneviper",
									"quantity": 1
								},
								{
									"templateId": "AthenaPickaxe:pickaxe_id_601_stoneviperfemale",
									"quantity": 1
								},
								{
									"templateId": "ChallengeBundleSchedule:bundleschedule_styles_stoneviper",
									"quantity": 1
								}
							]
						},
						{
							"offerId": "9DD831A348B80D3F40E28ABA21991A63",
							"devName": "Season 3 Starter Kit (RMT)",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": 3,
									"dynamicRegularPrice": -1,
									"finalPrice": 3,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 3
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"84aba7b08b734e7c90a0112173b1f7fb",
								"ios_s3rpma_C",
								"",
								"google_s3rpma_1",
								"",
								"S3RMPA0000000000",
								"5c174e59-97ff-454c-bdad-58de6c62b7c3",
								"c-starterpack00000-SPACK01",
								"",
								"C2L7CL2JKWPH",
								""
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "8A6F1D0C452CCC14F6D789A65732F9A5",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "MtxQuantity",
									"value": "600"
								},
								{
									"key": "MtxBonus",
									"value": "100"
								},
								{
									"Key": "CurrencyAnalyticsName",
									"Value": "Season3_StarterKit"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 10,
							"title": "Season 3 Starter Kit",
							"shortDescription": "",
							"description": "A epic skin and 600 v-bucks!",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_CID_090_Athena_Commando_M_Tactical.DA_Featured_CID_090_Athena_Commando_M_Tactical",
							"itemGrants": [
								{
									"templateId": "Currency:MtxPurchased",
									"quantity": 499
								},
								{
									"templateId": "Currency:MtxPurchaseBonus",
									"quantity": 101
								},
								{
									"templateId": "AthenaCharacter:cid_090_athena_commando_m_tactical",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_030_tacticalrogue",
									"quantity": 1
								}
							]
						},
						{
							"offerId": "6C64D7734E730841794846835247A720",
							"devName": "The Lars Pack",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 0,
									"dynamicRegularPrice": -1,
									"finalPrice": 0,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 0
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"411a9188ef584588b935b2d4f43a2325",
								"",
								"",
								"",
								"",
								"STWLARS000000000",
								"4d304e39-5639-3042-c047-343731510900",
								"",
								"",
								"9N0M9VBG471Q",
								"STWLARS000000000"
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "8DF06CAE465B5DC8142A72A7B2D595BA",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "SectionID",
									"value": "LimitedTime"
								},
								{
									"key": "NewDisplayAssetPath",
									"value": "/Game/Catalog/NewDisplayAssets/DAv2_RMT_Lars.DAv2_RMT_Lars"
								},
								{
									"key": "TileSize",
									"value": "DoubleWide"
								},
								{
									"key": "HideRarityBorder",
									"value": "true"
								},
								{
									"key": "ViolatorTag",
									"value": "IncludesSTW"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 22,
							"title": "The Lars Pack",
							"shortDescription": "",
							"description": "Peace, love, and Steel Wool. Shred in style with the Lars Pack.",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_LarsBundleBR.DA_Featured_LarsBundleBR",
							"itemGrants": [
								{
									"templateId": "Quest:stwstarterbundle07_getrewards",
									"quantity": 1
								},
								{
									"templateId": "Token:campaignaccess",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_835_lars",
									"quantity": 1
								},
								{
									"templateId": "AthenaCharacter:cid_a_186_athena_commando_m_lars",
									"quantity": 1
								},
								{
									"templateId": "AthenaPickaxe:pickaxe_id_652_larsmale",
									"quantity": 1
								}
							]
						},
						{
							"offerId": "94BF6F674A3F1454E80369B1EAA7DD3F",
							"devName": "Street Shadows Challenge Pack",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": 0,
									"dynamicRegularPrice": -1,
									"finalPrice": 0,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 0
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"855e964df8024a84a5776ce595275ae6",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								""
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "6A62CF724C3D72A0E9A32AA8BBC54984",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "SectionID",
									"value": "LimitedTime"
								},
								{
									"key": "NewDisplayAssetPath",
									"value": "/Game/Catalog/NewDisplayAssets/DAv2_EclipseStarterBundle.DAv2_EclipseStarterBundle"
								},
								{
									"key": "TileSize",
									"value": "DoubleWide"
								},
								{
									"key": "HideRarityBorder",
									"value": "true"
								},
								{
									"key": "ViolatorTag",
									"value": "Free"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 15,
							"title": "Street Shadows Challenge Pack",
							"shortDescription": "",
							"description": "Street Shadows Challenge Pack",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_EclipseStarterBundle.DA_Featured_EclipseStarterBundle",
							"itemGrants": [
								{
									"templateId": "ChallengeBundleSchedule:season16_egs_schedule",
									"quantity": 1
								}
							]
						},
						{
							"offerId": "527ECE5D4D8850BAC4FC66B957A70D57",
							"devName": "Marvel: Royalty & Warriors",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": 700,
									"dynamicRegularPrice": -1,
									"finalPrice": 700,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 700
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"e20b34b90bc64291a3596584b22028bc",
								"ios_mrwlgd_C",
								"",
								"google_mrwlgd_1",
								"",
								"MRWLGD0000000000",
								"445a4e39-4432-3036-c053-395750575b00",
								"c-specialpack00005-MRWLGD",
								"sam_MRWLGD",
								"9NZD2D6S9WPW",
								"MRWLGD0000000000"
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "E7AF194A4EC813D09815A29C69052724",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "SectionID",
									"value": "LimitedTime"
								},
								{
									"key": "NewDisplayAssetPath",
									"value": "/Game/Catalog/NewDisplayAssets/DAv2_RMT_PlumCherry.DAv2_RMT_PlumCherry"
								},
								{
									"key": "TileSize",
									"value": "DoubleWide"
								},
								{
									"key": "HideRarityBorder",
									"value": "true"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 10,
							"title": "Marvel: Royalty & Warriors Pack",
							"shortDescription": "",
							"description": "Warriors can be formed for any reason, whether it be a king's responsibility, a soldier's duty or a hired gun's price.",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_RoyaltyAndWarriors_RMT.DA_Featured_RoyaltyAndWarriors_RMT",
							"itemGrants": [
								{
									"templateId": "AthenaCharacter:cid_986_athena_commando_m_plumretro_4aja2",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_685_plumretro_ey7zm",
									"quantity": 1
								},
								{
									"templateId": "AthenaPickaxe:pickaxe_id_525_plumretro1h_3fbv3",
									"quantity": 1
								},
								{
									"templateId": "AthenaGlider:glider_id_267_plumretro_r2cye",
									"quantity": 1
								},
								{
									"templateId": "AthenaCharacter:cid_975_athena_commando_f_cherry_b8xn5",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_682_cherryfemale_rxeiw",
									"quantity": 1
								},
								{
									"templateId": "AthenaPickaxe:pickaxe_id_517_cherryfemale_z0s97",
									"quantity": 1
								},
								{
									"templateId": "AthenaGlider:glider_id_262_cherry_y3giu",
									"quantity": 1
								},
								{
									"templateId": "AthenaCharacter:cid_988_athena_commando_m_tiramisu_5khzp",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_686_tiramisumale_1ymn4",
									"quantity": 1
								},
								{
									"templateId": "AthenaPickaxe:pickaxe_id_530_tiramisumale1h_r94f2",
									"quantity": 1
								}
							]
						},
						{
							"offerId": "9622E4B94D377780F2410982F4DEADE9",
							"devName": "Black Monday",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": 353,
									"dynamicRegularPrice": -1,
									"finalPrice": 353,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 353
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"2eb58adefbba454ba1dab2d530536403",
								"ios_blamon_C",
								"",
								"",
								"",
								"BLAMON0000000000",
								"d40f973e-ebb3-447c-b1ce-4bbe12ddada5",
								"c-specialpack00000-BLAMON",
								"sam_BLAMON",
								"C3N9K4KWWMXM",
								"BLAMON0000000000"
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "0253BB94416C809D99F0638C6F8A86A1",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "SectionID",
									"value": "LimitedTime"
								},
								{
									"key": "NewDisplayAssetPath",
									"value": "/Game/Catalog/NewDisplayAssets/DAv2_RMT_BlackMonday.DAv2_RMT_BlackMonday"
								},
								{
									"key": "TileSize",
									"value": "DoubleWide"
								},
								{
									"key": "HideRarityBorder",
									"value": "true"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 20,
							"title": "Batman Caped Crusader Pack",
							"shortDescription": "",
							"description": "Activate the bat-signal! The Caped Crusader has joined the fight.",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_BlackMondayBundle_6W4X3.DA_Featured_BlackMondayBundle_6W4X3",
							"itemGrants": [
								{
									"templateId": "AthenaCharacter:cid_528_athena_commando_m_blackmondayhouston_7dgbt",
									"quantity": 1
								},
								{
									"templateId": "AthenaCharacter:cid_529_athena_commando_m_blackmondaykansas_hwd90",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_362_blackmondayhouston_2i53g",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_360_blackmondaykansas_vcz9m",
									"quantity": 1
								},
								{
									"templateId": "AthenaPickaxe:pickaxe_id_277_blackmondaymale_5tlsd",
									"quantity": 1
								},
								{
									"templateId": "AthenaGlider:glider_id_178_blackmondaymale_03m3e",
									"quantity": 1
								}
							]
						},
						{
							"offerId": "050F9C2E4EB2AE6F30313AA70C75138C",
							"devName": "Vox Hunter's Quest Pack",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": 231,
									"dynamicRegularPrice": -1,
									"finalPrice": 231,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 231
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"e203ac8b2d364f12bf6cea32d4bf0f3d",
								"",
								"",
								"",
								"",
								"PLYCP10000000000",
								"324e5039-3954-3053-c047-4d3839362400",
								"c-seasonpack000019-PLYCP1",
								"sam_PLYCP1",
								"9PN2T9SGM896",
								"PLYCP10000000000"
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "C6CA5430402248C1FA852B9FCC13C87B",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "SectionID",
									"value": "LimitedTime"
								},
								{
									"key": "NewDisplayAssetPath",
									"value": "/Game/Catalog/NewDisplayAssets/DAv2_RMT_PolygonPack.DAv2_RMT_PolygonPack"
								},
								{
									"key": "TileSize",
									"value": "DoubleWide"
								},
								{
									"key": "HideRarityBorder",
									"value": "true"
								},
								{
									"key": "ViolatorTag",
									"value": "UnlockCPVBucks"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 14,
							"title": "Vox Hunter's Quest Pack",
							"shortDescription": "",
							"description": "Digital avatar and the Fox Clan's unstoppable tracker, Vox Hunter is here to find the truth. Includes Outfit, Back Bling, 2 Pickaxes, Wrap and Quests to earn up to 1,500 V-Bucks.",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_Polygon_Pack.DA_Featured_Polygon_Pack",
							"itemGrants": [
								{
									"templateId": "AthenaCharacter:cid_a_185_athena_commando_m_polygon",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_831_polygonmale",
									"quantity": 1
								},
								{
									"templateId": "AthenaPickaxe:pickaxe_id_657_polygonmale1h",
									"quantity": 1
								},
								{
									"templateId": "AthenaPickaxe:pickaxe_id_658_polygonmale",
									"quantity": 1
								},
								{
									"templateId": "AthenaItemWrap:wrap_388_polygon",
									"quantity": 1
								},
								{
									"templateId": "ChallengeBundleSchedule:bundleschedule_styles_polygon",
									"quantity": 1
								}
							]
						},
						{
							"offerId": "C5D695E24F0660D558AFFE816B8BB0E7",
							"devName": "Lava Legends",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": 654,
									"dynamicRegularPrice": -1,
									"finalPrice": 654,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 654
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"8e9937437c044c7e9628ae088af4a295",
								"ios_lvalgd1_C",
								"",
								"google_lvalgd_1",
								"",
								"LVALGD0000000000",
								"11d3693d-dfa2-48ca-ad06-09c8637a29e0",
								"c-seasonpack000003-LVALGD1",
								"sam_LVALGD",
								"C50C00MLNZNK",
								"LVALGD0000000000"
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "C35410BF476787A8F32A4091202CAC0F",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "SectionID",
									"value": "LimitedTime"
								},
								{
									"key": "NewDisplayAssetPath",
									"value": "/Game/Catalog/NewDisplayAssets/DAv2_RMT_LavaLegends.DAv2_RMT_LavaLegends"
								},
								{
									"key": "TileSize",
									"value": "DoubleWide"
								},
								{
									"key": "HideRarityBorder",
									"value": "true"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 10,
							"title": "Lava Legends",
							"shortDescription": "",
							"description": "Bring the heat this season with the Lava Legends pack!",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_LavaLegendsBundle.DA_Featured_LavaLegendsBundle",
							"itemGrants": [
								{
									"templateId": "AthenaCharacter:cid_379_athena_commando_m_battlehoundfire",
									"quantity": 1
								},
								{
									"templateId": "AthenaCharacter:cid_380_athena_commando_f_darkviking_fire",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_243_battlehoundfire",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_244_darkvikingfire",
									"quantity": 1
								},
								{
									"templateId": "AthenaGlider:glider_id_134_darkvikingfire",
									"quantity": 1
								}
							]
						},
						{
							"offerId": "E1E1852543ED76BC605C15A81B46AE8E",
							"devName": "Minty Legends Pack",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": 90000000000000000000000000,
									"dynamicRegularPrice": -1,
									"finalPrice": 90000000000000000000000000,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 90000000000000000000000000
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"c8471dbdb45f4e9e9727e4f9084822d6",
								"",
								"",
								"",
								"",
								"MNTDGL0000000000",
								"35474e39-5030-304a-c031-30483231d900",
								"c-specialpack00006-MNTDGL",
								"sam_MNTDGL",
								"9NG50PJ10H21",
								"MNTDGL0000000000"
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "B5141A014D687CB764F338B9E6752CA8",
									"minQuantity": 1
								},
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "B1E1C64A48473BC89929D98A85212AC3",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "SectionID",
									"value": "LimitedTime"
								},
								{
									"key": "NewDisplayAssetPath",
									"value": "/Game/Catalog/NewDisplayAssets/DAv2_RMT_MintyLegends.DAv2_RMT_MintyLegends"
								},
								{
									"key": "TileSize",
									"value": "DoubleWide"
								},
								{
									"key": "HideRarityBorder",
									"value": "true"
								},
								{
									"key": "ViolatorTag",
									"value": "InclThousand"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 10,
							"title": "Minty Legends Pack",
							"shortDescription": "",
							"description": "Keep it fresh and fierce with the Minty Legends Pack.",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_MintyLegendsBundle.DA_Featured_MintyLegendsBundle",
							"itemGrants": [
								{
									"templateId": "AthenaCharacter:cid_a_154_athena_commando_f_treasurehunterfashionmint",
									"quantity": 1
								},
								{
									"templateId": "AthenaCharacter:cid_a_155_athena_commando_f_brightbombermint",
									"quantity": 1
								},
								{
									"templateId": "AthenaCharacter:cid_a_156_athena_commando_m_goldenskeletonmint",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_811_brightbombermint",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_812_goldenskeletonmint",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_813_treasurehunterfashionmint",
									"quantity": 1
								},
								{
									"templateId": "AthenaPickaxe:pickaxe_id_634_brightbombermintfemale",
									"quantity": 1
								},
								{
									"templateId": "AthenaPickaxe:pickaxe_id_641_thegoldenskeletonmintmale",
									"quantity": 1
								},
								{
									"templateId": "AthenaPickaxe:pickaxe_id_642_treasurehunterfashionmintfemale",
									"quantity": 1
								},
								{
									"templateId": "AthenaItemWrap:wrap_380_mint",
									"quantity": 1
								},
								{
									"templateId": "Currency:MtxPurchaseBonus",
									"quantity": 1000
								}
							]
						},
						{
							"offerId": "4EDC6AFA49DD1278B0AE00A946AB302E",
							"devName": "Season 18 Starter Kit (RMT)",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": 6969,
									"dynamicRegularPrice": -1,
									"finalPrice": 6969,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 6969
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"f6be60bb6e8e48a0ba4bf3c59e9a5924",
								"ios_rmpa16_C",
								"",
								"google_rmpa16",
								"",
								"RMPA160000000000",
								"43374e39-4639-3048-c044-4a5036351100",
								"c-starterpack00018-SPACK16",
								"sam_RMPA16",
								"9N7C9FHDJP65",
								"RMPA160000000000"
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "525E7D524BB41EE4F5C3E09E7CC46983",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "MtxQuantity",
									"value": "600"
								},
								{
									"key": "MtxBonus",
									"value": "0"
								},
								{
									"key": "SectionID",
									"value": "LimitedTime"
								},
								{
									"key": "NewDisplayAssetPath",
									"value": "/Game/Catalog/NewDisplayAssets/DAv2_RMT_AngelDarkStarterPack.DAv2_RMT_AngelDarkStarterPack"
								},
								{
									"key": "TileSize",
									"value": "DoubleWide"
								},
								{
									"key": "HideRarityBorder",
									"value": "true"
								},
								{
									"Key": "CurrencyAnalyticsName",
									"Value": "Season18_StarterKit"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 9,
							"title": "Fallen Light Pack",
							"shortDescription": "",
							"description": "Despite her name, D'Ark will always light her own path. The future still looks bright with the Fallen Light Pack. Includes an outfit, back bling, a picakxe and 600 V-Bucks.",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_AngelDark_StarterPack.DA_Featured_AngelDark_StarterPack",
							"itemGrants": [
								{
									"templateId": "Currency:MtxPurchased",
									"quantity": 399
								},
								{
									"templateId": "Currency:MtxPurchaseBonus",
									"quantity": 201
								},
								{
									"templateId": "AthenaCharacter:cid_a_194_athena_commando_f_angeldark",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_838_angeldark",
									"quantity": 1
								},
								{
									"templateId": "AthenaPickaxe:pickaxe_id_663_angeldarkfemale1h",
									"quantity": 1
								}
							]
						},
						{
							"offerId": "CC7F7B484282D7038AA8BAA05F540518",
							"devName": "Final Reckoning",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": 13,
									"dynamicRegularPrice": -1,
									"finalPrice": 13,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 13
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"69422bf51a694caca994436621abcaba",
								"ios_fnlrkg_c",
								"",
								"google_fnlrkg_1",
								"",
								"FNLRKG0000000000",
								"54532a9c-bbca-4b8c-898f-565fc393ff40",
								"c-specialpack00002-FNLRKG",
								"sam_FNLRKG",
								"9NFVV7GWWMFQ",
								"FNLRKG0000000000"
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "A4DDC8244FFE3B8EF0E013B49E2E4538",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "HideRarityBorder",
									"value": "true"
								},
								{
									"key": "SectionID",
									"value": "LimitedTime"
								},
								{
									"key": "NewDisplayAssetPath",
									"value": "/Game/Catalog/NewDisplayAssets/DAv2_RMT_FinalReckoning.DAv2_RMT_FinalReckoning"
								},
								{
									"key": "TileSize",
									"value": "DoubleWide"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 16,
							"title": "The Final Reckoning Pack",
							"shortDescription": "",
							"description": "Frighten your foes with outfits from one of the Island's darkest of tales, The Final Reckoning!",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_FinalReckoningBundle.DA_Featured_FinalReckoningBundle",
							"itemGrants": [
								{
									"templateId": "AthenaCharacter:cid_585_athena_commando_f_flowerskeleton",
									"quantity": 1
								},
								{
									"templateId": "AthenaCharacter:cid_601_athena_commando_f_palespooky",
									"quantity": 1
								},
								{
									"templateId": "AthenaCharacter:cid_603_athena_commando_m_spookyneon",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_386_flowerskeletonfemale",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_398_palespooky",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_399_spookyneon",
									"quantity": 1
								}
							]
						},
						{
							"offerId": "40A820F94C44D38BDB425D94C5715587",
							"devName": "Throwback Axe",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": 98,
									"dynamicRegularPrice": -1,
									"finalPrice": 98,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 98
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"4a238a27ef134a60bbaf2fbccb5bfad0",
								"ios_ch1pik_C",
								"",
								"google_ch1pik_1",
								"",
								"CH1PIK0000000001",
								"33574e39-515a-3035-c056-364c32312c00",
								"c-specialpack00004-CH1PIK",
								"sam_CH1PIK",
								"9NW3ZQ5V6L21",
								"CH1PIK0000000001"
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "C3BA51C94631DB4DF95AE0848A5E5488",
									"minQuantity": 1
								}
							],
							"metaInfo": [],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 9,
							"title": "Throwback Axe",
							"shortDescription": "",
							"description": "Relive the early days of Fortnite Battle Royale with the Chapter 1 default pickaxe.",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_Pickaxe_ID_475_ChOnePickaxe.DA_Featured_Pickaxe_ID_475_ChOnePickaxe",
							"itemGrants": [
								{
									"templateId": "AthenaPickaxe:pickaxe_id_475_chonepickaxe",
									"quantity": 1
								}
							]
						},
						{
							"offerId": "9A9580DD415EA0810A0CF482ABF5DF94",
							"devName": "Summer Legends",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": 907,
									"dynamicRegularPrice": -1,
									"finalPrice": 907,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 907
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"ad448054b8ac490990e6d2e1227fef11",
								"ios_sumlgd1_C",
								"",
								"google_sumlgd_1",
								"",
								"SUMLGD0000000000",
								"43325039-3354-3058-c044-474439472c00",
								"c-seasonpack000011-SUMLGD1",
								"sam_SUMLGD",
								"9P2CT3XDGD9G",
								"SUMLGD0000000000"
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "23EE5FCC40E2B07B12602A95AE03D166",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "SectionID",
									"value": "LimitedTime"
								},
								{
									"key": "NewDisplayAssetPath",
									"value": "/Game/Catalog/NewDisplayAssets/DAv2_RMT_SummerLegends.DAv2_RMT_SummerLegends"
								},
								{
									"key": "TileSize",
									"value": "DoubleWide"
								},
								{
									"key": "HideRarityBorder",
									"value": "true"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 10,
							"title": "Summer Legends Pack",
							"shortDescription": "",
							"description": "Its time to chill with the Summer Legends!",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_SummerLegendsBundle.DA_Featured_SummerLegendsBundle",
							"itemGrants": [
								{
									"templateId": "AthenaCharacter:cid_812_athena_commando_f_redridingsummer",
									"quantity": 1
								},
								{
									"templateId": "AthenaCharacter:cid_811_athena_commando_f_candysummer",
									"quantity": 1
								},
								{
									"templateId": "AthenaCharacter:cid_814_athena_commando_m_bananasummer",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_565_redridingsummer",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_564_candysummer",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_568_bananasummer",
									"quantity": 1
								}
							]
						},
						{
							"offerId": "2C25B1E4436722F8AC4B468EFDF16FBC",
							"devName": "Last Laugh Bundle",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": 456,
									"dynamicRegularPrice": -1,
									"finalPrice": 456,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 456
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"ea6187af5efe4648bd834a92a69e24be",
								"",
								"",
								"",
								"",
								"LALDGL0000000000",
								"364d4e39-5332-3044-c057-464242473b00",
								"c-specialpack00003-LALDGL",
								"sam_LALDGL",
								"9NM62SDWFBBG",
								"LALDGL0000000000"
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "B4F01FA74476B2203D8045865538551F",
									"minQuantity": 1
								},
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "276B11C34362BC3AA726FFBF713525EA",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "SectionID",
									"value": "LimitedTime"
								},
								{
									"key": "NewDisplayAssetPath",
									"value": "/Game/Catalog/NewDisplayAssets/DAv2_RMT_LastLaugh.DAv2_RMT_LastLaugh"
								},
								{
									"key": "TileSize",
									"value": "DoubleWide"
								},
								{
									"key": "HideRarityBorder",
									"value": "true"
								},
								{
									"key": "ViolatorTag",
									"value": "InclThousand"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 9,
							"title": "Fortnite - The Last Laugh Bundle",
							"shortDescription": "",
							"description": "Genius comes in many forms - whether you're dangerously funny, creating havoc with wild plants, or flooding the island with your best intentions; it often comes along with a companion: madness. Become everyone’s nemesis with The Last Laugh bundle!",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_LastLaughBundle.DA_Featured_LastLaughBundle",
							"itemGrants": [
								{
									"templateId": "AthenaCharacter:cid_922_athena_commando_m_parcelprank",
									"quantity": 1
								},
								{
									"templateId": "AthenaCharacter:cid_921_athena_commando_f_parcelpetal",
									"quantity": 1
								},
								{
									"templateId": "AthenaCharacter:cid_923_athena_commando_m_parcelgold",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_580_parcelpetal",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_581_parcelpranksurprise",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_582_parcelgold",
									"quantity": 1
								},
								{
									"templateId": "AthenaPickaxe:pickaxe_id_496_parcelgoldmale1h",
									"quantity": 1
								},
								{
									"templateId": "AthenaPickaxe:pickaxe_id_497_parcelpetalfemale",
									"quantity": 1
								},
								{
									"templateId": "AthenaPickaxe:pickaxe_id_498_parcelprankhammermale",
									"quantity": 1
								},
								{
									"templateId": "AthenaPickaxe:pickaxe_id_499_parcelprankmale",
									"quantity": 1
								},
								{
									"templateId": "Currency:MtxPurchaseBonus",
									"quantity": 1000
								},
								{
									"templateId": "AthenaSkyDiveContrail:trails_id_101_parcelprank",
									"quantity": 1
								}
							]
						},
						{
							"offerId": "C4B01410479582CA23741693413810E9",
							"devName": "Darkfire Bundle",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": 567,
									"dynamicRegularPrice": -1,
									"finalPrice": 567,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 567
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"5751d4fec6464315b915bfec8e48b271",
								"ios_dfrdgl_C",
								"",
								"",
								"",
								"DFRDGL0000000000",
								"7bc913ec-3122-40db-963a-0dd2e251185a",
								"c-specialpack00001-DFRDGL",
								"sam_DFRDGL",
								"9P457071FFHW",
								""
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "C26EDCA5418EE82F1C650E88639F9D03",
									"minQuantity": 1
								},
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "590B5F4348393BC73E29F0B0913056CA",
									"minQuantity": 1
								}
							],
							"metaInfo": [],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 9,
							"title": "Fortnite - Darkfire Bundle",
							"shortDescription": "",
							"description": "Embrace your dark side, heat up the battle and slip into the shadows with the Darkfire Bundle.",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_DarkFireBundle.DA_Featured_DarkFireBundle",
							"itemGrants": [
								{
									"templateId": "AthenaCharacter:cid_574_athena_commando_f_cuberockerpunk",
									"quantity": 1
								},
								{
									"templateId": "AthenaCharacter:cid_517_athena_commando_m_darkeaglefire",
									"quantity": 1
								},
								{
									"templateId": "AthenaCharacter:cid_510_athena_commando_f_angeleclipse",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_374_cuberockerpunk_female",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_347_darkeaglefire",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_341_angeleclipse",
									"quantity": 1
								},
								{
									"templateId": "AthenaPickaxe:pickaxe_id_258_rockerpunkcube1h",
									"quantity": 1
								},
								{
									"templateId": "AthenaPickaxe:pickaxe_id_261_darkeaglefire1h",
									"quantity": 1
								},
								{
									"templateId": "AthenaPickaxe:pickaxe_id_260_angeleclipse1h",
									"quantity": 1
								},
								{
									"templateId": "AthenaItemWrap:wrap_127_fragmentedglow",
									"quantity": 1
								},
								{
									"templateId": "AthenaItemWrap:wrap_128_fragmentedgloweclipse",
									"quantity": 1
								},
								{
									"templateId": "AthenaItemWrap:wrap_129_fragmentedglowfire",
									"quantity": 1
								},
								{
									"templateId": "AthenaDance:eid_darkfirelegends",
									"quantity": 1
								}
							]
						},
						{
							"offerId": "6279BD2B4B2738ADF3C4D0846FCF34B0",
							"devName": "Season 11 Starter Kit (RMT)",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": 111111,
									"dynamicRegularPrice": -1,
									"finalPrice": 111111,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 111111
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"b217d78d2e0947bf8ded0fb379d7be46",
								"ios_rmpa09_C",
								"",
								"google_rmpa09_1",
								"",
								"RMPA090000000000",
								"ad4c7310-6db1-4586-b51f-900c9955fc76",
								"c-starterpack00011-SPACK09",
								"sam_RMPA09",
								"9P9HGKWK8Z9X",
								""
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "6F04E501424478A3E6F6E9AC7F8A0DA2",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "MtxQuantity",
									"value": "600"
								},
								{
									"key": "MtxBonus",
									"value": "100"
								},
								{
									"Key": "CurrencyAnalyticsName",
									"Value": "Season11_StarterKit"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 10,
							"title": "The Wavebreaker Pack",
							"shortDescription": "",
							"description": "Crash through waves of enemies with the Wavebreaker Pack. An outfit, a back bling, a pickaxe and 600 V-Bucks!",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_BulletBlueF_Bundle.DA_Featured_BulletBlueF_Bundle",
							"itemGrants": [
								{
									"templateId": "Currency:MtxPurchased",
									"quantity": 499
								},
								{
									"templateId": "Currency:MtxPurchaseBonus",
									"quantity": 101
								},
								{
									"templateId": "AthenaCharacter:cid_575_athena_commando_f_bulletblue",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_375_bulletbluefemale",
									"quantity": 1
								},
								{
									"templateId": "AthenaPickaxe:pickaxe_id_281_bulletbluefemale",
									"quantity": 1
								}
							]
						},
						{
							"offerId": "AE1A98314BFD6F057A4D5785916058DD",
							"devName": "Fortnite Crew",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": 123,
									"dynamicRegularPrice": -1,
									"finalPrice": 123,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 123
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"9ec21a8d4f744f8b938fbf79d02d40b9",
								"",
								"",
								"",
								"",
								"FSUB010000000000",
								"",
								"s-74d15f2fd98483d2-fsub01",
								"sam_FSUB01",
								"CFQ7TTC0L23L",
								"FSUB010000000000"
							],
							"requirements": [],
							"metaInfo": [
								{
									"key": "MtxBonus",
									"value": "0"
								},
								{
									"key": "SectionID",
									"value": "Subscription"
								},
								{
									"key": "NewDisplayAssetPath",
									"value": "/Game/Catalog/NewDisplayAssets/DAv2_RMT_MaskedDancer.DAv2_RMT_MaskedDancer"
								},
								{
									"key": "TileSize",
									"value": "TripleWide"
								},
								{
									"key": "HideRarityBorder",
									"value": "true"
								},
								{
									"key": "IsSubscription",
									"value": "true"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 10,
							"title": "Fortnite Crew",
							"shortDescription": "",
							"description": "Fortnite Crew",
							"displayAssetPath": "",
							"itemGrants": []
						},
						{
							"offerId": "3E09DA404CDD794651A367B9FCA4F462",
							"devName": "Skull Squad",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": 2134,
									"dynamicRegularPrice": -1,
									"finalPrice": 2134,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 2134
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"48d86bc0a3634a33aa20817fdbfff917",
								"ios_skulgd1_C",
								"",
								"google_skulgd_1",
								"",
								"SKULGD0000000000",
								"46574e39-4e4c-3053-c050-373736313600",
								"c-seasonpack000014-SKULGD1",
								"sam_SKULGD",
								"9NWFLNSP7761",
								"SKULGD0000000000"
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "1A5FED4A4478879006C9D59DD7075717",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "SectionID",
									"value": "LimitedTime"
								},
								{
									"key": "NewDisplayAssetPath",
									"value": "/Game/Catalog/NewDisplayAssets/DAv2_RMT_SkullSquad.DAv2_RMT_SkullSquad"
								},
								{
									"key": "TileSize",
									"value": "DoubleWide"
								},
								{
									"key": "HideRarityBorder",
									"value": "true"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 19,
							"title": "Skull Squad Pack",
							"shortDescription": "",
							"description": "Rise from the crypt and creep on the unsuspecting with this bone chilling Skeleteam! Rattle your bones with the Skull Squad pack!",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_SkullSquadBundle.DA_Featured_SkullSquadBundle",
							"itemGrants": [
								{
									"templateId": "AthenaCharacter:cid_918_athena_commando_m_teriyakifishskull",
									"quantity": 1
								},
								{
									"templateId": "AthenaPickaxe:pickaxe_id_490_teriyakifishskull1h",
									"quantity": 1
								},
								{
									"templateId": "AthenaCharacter:cid_916_athena_commando_f_fuzzybearskull",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_637_fuzzybearskull",
									"quantity": 1
								},
								{
									"templateId": "AthenaCharacter:cid_917_athena_commando_m_durrburgerskull",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_638_durrburgerskull",
									"quantity": 1
								},
								{
									"templateId": "AthenaPickaxe:pickaxe_id_483_durrburgerskull1h",
									"quantity": 1
								},
								{
									"templateId": "AthenaCharacter:cid_915_athena_commando_f_ravenquillskull",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_636_ravenquillskull",
									"quantity": 1
								},
								{
									"templateId": "AthenaGlider:glider_id_247_skull",
									"quantity": 1
								},
								{
									"templateId": "AthenaItemWrap:wrap_292_bones",
									"quantity": 1
								}
							]
						},
						{
							"offerId": "06F2E11747D7F3A608EAF5B71A015303",
							"devName": "Fallen Love Ranger Challenge Pack",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": 98,
									"dynamicRegularPrice": -1,
									"finalPrice": 98,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 98
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"bc104d187b194964b9ce0259bfefcd24",
								"ios_dlrcp01_C",
								"",
								"google_dlrcp01_1",
								"",
								"DLRCP10000000000",
								"be550ae0-49b9-40dd-bfa3-f682f8a7beb1",
								"c-seasonpack000002-DLRCP01",
								"sam_DLRCP1",
								"BXKX6FSNLX8W",
								""
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "84A31E1D4250DE16B9973A820E047247",
									"minQuantity": 1
								}
							],
							"metaInfo": [],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 9,
							"title": "Fallen Love Ranger Challenge Pack",
							"shortDescription": "",
							"description": "Take on the challenges issued by the Fallen Love Ranger and earn up to 2,000 V-Bucks! ",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_CID_343_Athena_Commando_M_CupidDark.DA_Featured_CID_343_Athena_Commando_M_CupidDark",
							"itemGrants": [
								{
									"templateId": "AthenaCharacter:cid_343_athena_commando_m_cupiddark",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_208_cupiddarkmale",
									"quantity": 1
								},
								{
									"templateId": "ChallengeBundleSchedule:bundleschedule_styles_cupiddark",
									"quantity": 1
								}
							]
						},
						{
							"offerId": "CC2826D8418DCC959280AD9E2D95532C",
							"devName": "Ikonik",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": 709,
									"dynamicRegularPrice": -1,
									"finalPrice": 709,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 709
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"sam_ikonic",
								"",
								""
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "39BA6D8A407FDDF15BCCEFAA82C9F286",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "LCheck",
									"value": "A,B"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 15,
							"title": "IKONIK",
							"shortDescription": "",
							"description": "Claim your iKONIK outfit and Scenario emote as part of the Samsung promotion.",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_CID_313_Athena_Commando_M_KpopFashion.DA_Featured_CID_313_Athena_Commando_M_KpopFashion",
							"itemGrants": [
								{
									"templateId": "AthenaCharacter:cid_313_athena_commando_m_kpopfashion",
									"quantity": 1
								},
								{
									"templateId": "AthenaDance:eid_kpopdance03",
									"quantity": 1
								}
							]
						},
						{
							"offerId": "ADC80268442D6EED11AC658074494010",
							"devName": "Season 16 Starter Kit (RMT)",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": 809,
									"dynamicRegularPrice": -1,
									"finalPrice": 809,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 809
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"3fd8d621af4e4868a26a51bcb21febae",
								"ios_rmpa14_C",
								"",
								"google_rmpa14",
								"",
								"RMPA140000000000",
								"38354e39-3553-3042-c037-434a46390100",
								"c-starterpack00016-SPACK14",
								"sam_RMPA14",
								"9N58S5B7CJF9",
								"RMPA140000000000"
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "56592C674FD0C810F40E8E98C6F88C4D",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "MtxQuantity",
									"value": "600"
								},
								{
									"key": "MtxBonus",
									"value": "0"
								},
								{
									"key": "SectionID",
									"value": "LimitedTime"
								},
								{
									"key": "NewDisplayAssetPath",
									"value": "/Game/Catalog/NewDisplayAssets/DAv2_RMT_HazardPlatoon.DAv2_RMT_HazardPlatoon"
								},
								{
									"key": "TileSize",
									"value": "DoubleWide"
								},
								{
									"key": "HideRarityBorder",
									"value": "true"
								},
								{
									"Key": "CurrencyAnalyticsName",
									"Value": "Season16_StarterKit"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 10,
							"title": "Hazard Platoon Pack",
							"shortDescription": "",
							"description": "Centurion always has a plan. Follow that plan to victory with the Hazard Platoon Pack. Includes an outfit, back bling, a picakxe and 600 V-Bucks.",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_LionSoldier_Bundle.DA_Featured_LionSoldier_Bundle",
							"itemGrants": [
								{
									"templateId": "Currency:MtxPurchased",
									"quantity": 399
								},
								{
									"templateId": "Currency:MtxPurchaseBonus",
									"quantity": 201
								},
								{
									"templateId": "AthenaCharacter:cid_a_035_athena_commando_m_lionsoldier",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_712_lionsoldier",
									"quantity": 1
								},
								{
									"templateId": "AthenaPickaxe:pickaxe_id_557_lionsoldiermale",
									"quantity": 1
								}
							]
						},
						{
							"offerId": "0935379349B600E02DC20EA2FA25FC81",
							"devName": "Glacial Legends",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": 678,
									"dynamicRegularPrice": -1,
									"finalPrice": 678,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 678
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"3aedd91fbcd545e48f02129b1a5322fa",
								"ios_glclgd1_C",
								"",
								"google_glclgd_1",
								"",
								"GLCLGD0000000000",
								"97b1db16-1e8d-4735-9f40-522f8257839e",
								"c-seasonpack000009-GLCLGD1",
								"sam_GLCLGD",
								"9N4R7JBNSTXH",
								"GLCLGD0000000000"
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "C3898B0D4961AEAC6A8CEDA77F279F67",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "SectionID",
									"value": "LimitedTime"
								},
								{
									"key": "NewDisplayAssetPath",
									"value": "/Game/Catalog/NewDisplayAssets/DAv2_RMT_PolarLegends.DAv2_RMT_PolarLegends"
								},
								{
									"key": "TileSize",
									"value": "DoubleWide"
								},
								{
									"key": "HideRarityBorder",
									"value": "true"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 13,
							"title": "Polar Legends Pack",
							"shortDescription": "",
							"description": "Put the competition on ice with the Polar legends pack.",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_PolarLegendsBundle.DA_Featured_PolarLegendsBundle",
							"itemGrants": [
								{
									"templateId": "AthenaCharacter:cid_653_athena_commando_f_uglysweaterfrozen",
									"quantity": 1
								},
								{
									"templateId": "AthenaCharacter:cid_656_athena_commando_m_teriyakifishfreezerburn",
									"quantity": 1
								},
								{
									"templateId": "AthenaCharacter:cid_644_athena_commando_m_cattus",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_442_cattus",
									"quantity": 1
								},
								{
									"templateId": "AthenaCharacter:cid_051_athena_commando_m_holidayelf",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_445_elf",
									"quantity": 1
								}
							]
						},
						{
							"offerId": "5D363EEF4BABEE99840FC3B68CF3B1B2",
							"devName": "P-1000's Challenge Pack",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": 1000,
									"dynamicRegularPrice": -1,
									"finalPrice": 1000,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 1000
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"97a6db55099d44009f987f8671920754",
								"ios_peecp1_C",
								"",
								"google_peecp1_1",
								"",
								"PEECP10000000000",
								"1e581de8-367d-4313-8765-a07485d569c9",
								"c-seasonpack000008-PEECP1",
								"sam_PEECP1",
								"BRL14GZHNWX9",
								""
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "0F2FFF0947C7F74783B86EB74CAEB13A",
									"minQuantity": 1
								}
							],
							"metaInfo": [],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 9,
							"title": "P-1000's Challenge Pack",
							"shortDescription": "",
							"description": "Get the P-1000 Outfit and Emote, and complete challenges to earn up to 1,500 V-Bucks!",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_PeelyMechBundle.DA_Featured_PeelyMechBundle",
							"itemGrants": [
								{
									"templateId": "AthenaCharacter:cid_534_athena_commando_m_peelymech",
									"quantity": 1
								},
								{
									"templateId": "ChallengeBundleSchedule:bundleschedule_styles_peelymech",
									"quantity": 1
								}
							]
						},
						{
							"offerId": "F2F950F24A315F86ED26F9A337ABEA2D",
							"devName": "Season 19 Starter Kit (RMT)",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": 200,
									"dynamicRegularPrice": -1,
									"finalPrice": 200,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 200
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"9f030fa7f1e74219babac65494c69c4f",
								"ios_rmpa17_C",
								"",
								"google_rmpa17",
								"",
								"RMPA170000000000",
								"30524e39-5735-304b-c047-375257474e00",
								"c-starterpack00019-SPACK17",
								"sam_RMPA17",
								"9NR05WKG7RWG",
								"RMPA170000000000"
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "F3A253CE4B3AD50EA55868A063D78D80",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "MtxQuantity",
									"value": "600"
								},
								{
									"key": "MtxBonus",
									"value": "0"
								},
								{
									"key": "SectionID",
									"value": "LimitedTime"
								},
								{
									"key": "NewDisplayAssetPath",
									"value": "/Game/Catalog/NewDisplayAssets/DAv2_RMT_DarkPitStarterPack.DAv2_RMT_DarkPitStarterPack"
								},
								{
									"key": "TileSize",
									"value": "DoubleWide"
								},
								{
									"key": "HideRarityBorder",
									"value": "true"
								},
								{
									"Key": "CurrencyAnalyticsName",
									"Value": "Season19_StarterKit"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 19,
							"title": "Voidlander Pack",
							"shortDescription": "",
							"description": "Leave only destruction as you pass through the void. In Absenz you will find the path of the Voidlander. Includes an outfit, back bling, pickaxe and 600 V-Bucks.",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_DarkPit_StarterPack.DA_Featured_DarkPit_StarterPack",
							"itemGrants": [
								{
									"templateId": "Currency:MtxPurchased",
									"quantity": 399
								},
								{
									"templateId": "Currency:MtxPurchaseBonus",
									"quantity": 201
								},
								{
									"templateId": "AthenaCharacter:cid_a_296_athena_commando_m_darkpit",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_919_darkpitblue",
									"quantity": 1
								},
								{
									"templateId": "AthenaPickaxe:pickaxe_id_711_darkpitmale",
									"quantity": 1
								}
							]
						},
						{
							"offerId": "1BEA82A04291B004750C6EA4D2D57965",
							"devName": "Dark Reflections",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 0,
									"dynamicRegularPrice": -1,
									"finalPrice": 0,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 0
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"56ba62d3600d498cb2e01961dbf42927",
								"ios_cublgd1_C",
								"",
								"google_cublgd_1",
								"",
								"CUBLGD0000000000",
								"0da4c6bb-1bdd-4219-aba1-7c54803bb0a4",
								"c-seasonpack000007-CUBLGD1",
								"sam_CUBLGD",
								"BW3QH36C8C1N",
								""
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "C87BB099425E3E46A1761EAFB6BC5E13",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "SectionID",
									"value": "LimitedTime"
								},
								{
									"key": "NewDisplayAssetPath",
									"value": "/Game/Catalog/NewDisplayAssets/DAv2_RMT_DarkReflections.DAv2_RMT_DarkReflections"
								},
								{
									"key": "TileSize",
									"value": "DoubleWide"
								},
								{
									"key": "HideRarityBorder",
									"value": "true"
								},
								{
									"key": "ViolatorTag",
									"value": "DarkReflectionsRMT"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 18,
							"title": "Dark Reflections",
							"shortDescription": "",
							"description": "Did the Cube ever corrupt, or was the darkness always there? Let your dark side take control while wearing the Dark Reflections pack.",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_CubePaintBundle.DA_Featured_CubePaintBundle",
							"itemGrants": [
								{
									"templateId": "AthenaCharacter:cid_513_athena_commando_m_cubepaintjonesy",
									"quantity": 1
								},
								{
									"templateId": "AthenaCharacter:cid_512_athena_commando_f_cubepaintredknight",
									"quantity": 1
								},
								{
									"templateId": "AthenaCharacter:cid_511_athena_commando_m_cubepaintwildcard",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_343_cuberedknight",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_344_cubewildcard",
									"quantity": 1
								},
								{
									"templateId": "AthenaPickaxe:pickaxe_id_263_jonesycube",
									"quantity": 1
								}
							]
						},
						{
							"offerId": "9BDF8DDA45DF2495A26D8EA9128F48A2",
							"devName": "Season 15 Starter Kit (RMT)",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 0,
									"dynamicRegularPrice": -1,
									"finalPrice": 0,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 0
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"319303d6de9544fd92cf7856ebd6e932",
								"ios_rmpa13_C",
								"",
								"google_rmpa13",
								"",
								"RMPA130000000000",
								"56434e39-4235-3047-c030-524331360a00",
								"c-starterpack00015-SPACK13",
								"sam_RMPA13",
								"9NCV5BG0RC16",
								"RMPA130000000000"
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "D98A404A43E68179A74526984F3775E8",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "MtxQuantity",
									"value": "600"
								},
								{
									"key": "MtxBonus",
									"value": "0"
								},
								{
									"key": "SectionID",
									"value": "LimitedTime"
								},
								{
									"key": "NewDisplayAssetPath",
									"value": "/Game/Catalog/NewDisplayAssets/DAv2_RMT_DiamondDiva.DAv2_RMT_DiamondDiva"
								},
								{
									"key": "TileSize",
									"value": "DoubleWide"
								},
								{
									"key": "HideRarityBorder",
									"value": "true"
								},
								{
									"Key": "CurrencyAnalyticsName",
									"Value": "Season15_StarterKit"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 10,
							"title": "The Diamond Diva Pack",
							"shortDescription": "",
							"description": "Shine like a diamond with the Diamond Diva pack. Includes an outfit, a back bling, a pickaxe and 600 V-Bucks.",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_IceRaiderPack.DA_Featured_IceRaiderPack",
							"itemGrants": [
								{
									"templateId": "Currency:MtxPurchased",
									"quantity": 399
								},
								{
									"templateId": "Currency:MtxPurchaseBonus",
									"quantity": 201
								},
								{
									"templateId": "AthenaCharacter:cid_936_athena_commando_f_raidersilver",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_652_raidersilverfemale",
									"quantity": 1
								},
								{
									"templateId": "AthenaPickaxe:pickaxe_id_503_raidersilverfemale",
									"quantity": 1
								}
							]
						},
						{
							"offerId": "27584A6143D1D29A3C2C2AB9A0046569",
							"devName": "Gaveyard Drift Quest Pack",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 0,
									"dynamicRegularPrice": -1,
									"finalPrice": 0,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 0
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"6ee17fb4a2554841aaa300b94ffca2d1",
								"",
								"",
								"",
								"",
								"DFHCP10000000000",
								"46374e39-5451-3051-c031-313253341500",
								"c-seasonpack000020-DFHCP1",
								"sam_DFHCP1",
								"9N7FQTQ112S4",
								"DFHCP10000000000"
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "0A6A598D4B41EA6FCF392D8FD37EBD27",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "SectionID",
									"value": "LimitedTime"
								},
								{
									"key": "NewDisplayAssetPath",
									"value": "/Game/Catalog/NewDisplayAssets/DAv2_RMT_GraveyardDrift.DAv2_RMT_GraveyardDrift"
								},
								{
									"key": "TileSize",
									"value": "DoubleWide"
								},
								{
									"key": "HideRarityBorder",
									"value": "true"
								},
								{
									"key": "ViolatorTag",
									"value": "UnlockTwoKVBucks"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 21,
							"title": "Graveyard Drift Quest Pack",
							"shortDescription": "",
							"description": "After falling into darkness, only the Driftwalker remains. Includes Outfit, Back Bling, Pickaxe, Glider and Quests to earn up to 2,000 V-Bucks.",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_GraveyardDrift_QuestPack.DA_Featured_GraveyardDrift_QuestPack",
							"itemGrants": [
								{
									"templateId": "AthenaCharacter:cid_a_230_athena_commando_m_drifthorror",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_886_drifthorror",
									"quantity": 1
								},
								{
									"templateId": "AthenaPickaxe:pickaxe_id_686_drifthorrormale1h",
									"quantity": 1
								},
								{
									"templateId": "AthenaGlider:glider_id_322_drifthorrormale",
									"quantity": 1
								},
								{
									"templateId": "ChallengeBundleSchedule:bundleschedule_styles_tree",
									"quantity": 1
								}
							]
						},
						{
							"offerId": "06727F184BDB6C85C99997A0DDC014B3",
							"devName": "Blizzabelle",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 0,
									"dynamicRegularPrice": -1,
									"finalPrice": 0,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 0
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"38ce28f71244426c807d0f52b151f351",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								""
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "864A9F524C248D515F8113AED9A6AB91",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "SectionID",
									"value": "LimitedTime"
								},
								{
									"key": "NewDisplayAssetPath",
									"value": "/Game/Catalog/NewDisplayAssets/DAv2_RMT_EGSWinter.DAv2_RMT_EGSWinter"
								},
								{
									"key": "TileSize",
									"value": "DoubleWide"
								},
								{
									"key": "HideRarityBorder",
									"value": "true"
								},
								{
									"key": "ViolatorTag",
									"value": "Free"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 20,
							"title": "Blizzabelle",
							"shortDescription": "",
							"description": "Voted Teen Queen of Winterfest by a jury of her witchy peers.",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_EGSWinter.DA_Featured_EGSWinter",
							"itemGrants": [
								{
									"templateId": "AthenaCharacter:cid_a_311_athena_commando_f_scholarfestivewinter",
									"quantity": 1
								}
							]
						},
						{
							"offerId": "5D98B13A4A11DCD9FAF596A472030734",
							"devName": "Bassassin Challenge Pack",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 0,
									"dynamicRegularPrice": -1,
									"finalPrice": 0,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 0
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"39fba8c88d0647b29309874e6f7d4de9",
								"ios_bascp1_C",
								"",
								"google_bascp1_1",
								"",
								"BASCP10000000000",
								"52445039-484e-304e-c030-394446524800",
								"c-seasonpack000010-BASCP1",
								"sam_BASCP1",
								"9PDRNHN09DFR",
								"BASCP10000000000"
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "37D5CA4D46127ACEFE2A2F815AA6385B",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "SectionID",
									"value": "LimitedTime"
								},
								{
									"key": "NewDisplayAssetPath",
									"value": "/Game/Catalog/NewDisplayAssets/DAv2_RMT_BassassinChallengePack.DAv2_RMT_BassassinChallengePack"
								},
								{
									"key": "TileSize",
									"value": "DoubleWide"
								},
								{
									"key": "HideRarityBorder",
									"value": "true"
								},
								{
									"key": "ViolatorTag",
									"value": "UnlockVBucks"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 9,
							"title": "Bassassin Challenge Pack",
							"shortDescription": "",
							"description": "As a Bassassin, it pays to be cold-blooded. Get the Contract Giller Outfit, Dorsal Destroyer Back Bling, and complete Quests to earn up to 1,000 V-Bucks! ",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_S12ChallengePack.DA_Featured_S12ChallengePack",
							"itemGrants": [
								{
									"templateId": "AthenaCharacter:cid_722_athena_commando_m_teriyakifishassassin",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_496_teriyakifishassassin",
									"quantity": 1
								},
								{
									"templateId": "ChallengeBundleSchedule:bundleschedule_styles_agentfishstick",
									"quantity": 1
								}
							]
						},
						{
							"offerId": "9898F5AD4619B292EF19DB94180FF3F6",
							"devName": "Season 13 Starter Kit (RMT)",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": 13,
									"dynamicRegularPrice": -1,
									"finalPrice": 13,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 13
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"e71cc6639f0b427fa74a3947363759e9",
								"ios_rmpa11_C",
								"",
								"google_rmpa11",
								"",
								"RMPA110000000000",
								"52305039-5251-3057-c052-3939394a4c00",
								"c-starterpack00013-SPACK11",
								"sam_RMPA11",
								"9P0RQRWR999J",
								""
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "625635694A7678AD1C8A3590E4F36FD7",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "MtxQuantity",
									"value": "600"
								},
								{
									"key": "MtxBonus",
									"value": "0"
								},
								{
									"Key": "CurrencyAnalyticsName",
									"Value": "Season13_StarterKit"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 10,
							"title": "Yellowjacket Pack",
							"shortDescription": "",
							"description": "Like a stinger, her fashion sense is always on point. Includes an outfit, a back bling, a pickaxe and 600 V-Bucks",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_GraffitiAssassin_Bundle.DA_Featured_GraffitiAssassin_Bundle",
							"itemGrants": [
								{
									"templateId": "Currency:MtxPurchased",
									"quantity": 399
								},
								{
									"templateId": "Currency:MtxPurchaseBonus",
									"quantity": 201
								},
								{
									"templateId": "AthenaCharacter:cid_749_athena_commando_f_graffitiassassin",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_513_graffitiassassin",
									"quantity": 1
								},
								{
									"templateId": "AthenaPickaxe:pickaxe_id_391_graffitiassassinfemale",
									"quantity": 1
								}
							]
						},
						{
							"offerId": "8FC5B9C9439AB95F937929A7A5D8EC79",
							"devName": "Shadows Rising",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 0,
									"dynamicRegularPrice": -1,
									"finalPrice": 0,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 0
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"04e522517a384a509d5bf31904846159",
								"ios_darlgd1_C",
								"",
								"google_darlgd_1",
								"",
								"DARLGD0000000000",
								"3fdee98e-5216-4f32-b0e6-d663545733c2",
								"c-seasonpack000005-DARLGD1",
								"sam_DARLGD",
								"C4B1TBQ2HHLF",
								"DARLGD0000000000"
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "D06A5BF54861C123B1CFF796BB08FE1D",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "SectionID",
									"value": "LimitedTime"
								},
								{
									"key": "NewDisplayAssetPath",
									"value": "/Game/Catalog/NewDisplayAssets/DAv2_RMT_ShadowsRising.DAv2_RMT_ShadowsRising"
								},
								{
									"key": "TileSize",
									"value": "DoubleWide"
								},
								{
									"key": "HideRarityBorder",
									"value": "true"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 12,
							"title": "Shadows Rising",
							"shortDescription": "",
							"description": "Eclipse the competition this season while wearing the Shadows Rising pack!",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_EclipseBundle.DA_Featured_EclipseBundle",
							"itemGrants": [
								{
									"templateId": "AthenaCharacter:cid_439_athena_commando_f_skullbriteeclipse",
									"quantity": 1
								},
								{
									"templateId": "AthenaCharacter:cid_437_athena_commando_f_aztececlipse",
									"quantity": 1
								},
								{
									"templateId": "AthenaCharacter:cid_438_athena_commando_m_winterghouleclipse",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_285_skullbriteeclipse",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_287_aztecfemaleeclipse",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_286_winterghoulmaleeclipse",
									"quantity": 1
								},
								{
									"templateId": "AthenaItemWrap:wrap_081_blackout2",
									"quantity": 1
								}
							]
						},
						{
							"offerId": "A7E94C3848E1337B395D57B4FD87778D",
							"devName": "Season 6 Starter Kit (RMT)",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": 6,
									"dynamicRegularPrice": -1,
									"finalPrice": 6,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 6
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"8ca6dbe417c9470783e9e2293cc0f4a9",
								"ios_rmpa04_C",
								"",
								"google_rmpa04_1",
								"",
								"RMPA040000000000",
								"bef8995c-af47-4247-83d5-41ff1c551705",
								"c-starterpack00001-SPACK04",
								"sam_RMPA04",
								"C5790DQPT49Q",
								""
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "817F6B1B40214571D32E0CA9F89B616F",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "MtxQuantity",
									"value": "600"
								},
								{
									"key": "MtxBonus",
									"value": "100"
								},
								{
									"Key": "CurrencyAnalyticsName",
									"Value": "Season6_StarterKit"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 10,
							"title": "Summit Striker",
							"shortDescription": "",
							"description": "An epic skin and 600 V-Bucks!",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_CID_253_Athena_Commando_M_MilitaryFashion2.DA_Featured_CID_253_Athena_Commando_M_MilitaryFashion2",
							"itemGrants": [
								{
									"templateId": "Currency:MtxPurchased",
									"quantity": 499
								},
								{
									"templateId": "Currency:MtxPurchaseBonus",
									"quantity": 101
								},
								{
									"templateId": "AthenaCharacter:cid_253_athena_commando_m_militaryfashion2",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_134_militaryfashion",
									"quantity": 1
								}
							]
						},
						{
							"offerId": "DD483E7B4174D7AA0BD1C5BE18E5925F",
							"devName": "Season 9 Starter Kit (RMT)",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": 9,
									"dynamicRegularPrice": -1,
									"finalPrice": 9,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 9
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"77da03157c38443e991a72264ee5f23b",
								"ios_rmpa07_C",
								"",
								"google_rmpa07_1",
								"",
								"RMPA070000000000",
								"143e5fd4-4a06-40d4-9912-d90ebb6e5d3f",
								"c-starterpack00090-SPACK07",
								"sam_RMPA07",
								"C02H22WVRJCM",
								""
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "999F3240427BA4D0974021AE6A511FF7",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "MtxQuantity",
									"value": "600"
								},
								{
									"key": "MtxBonus",
									"value": "100"
								},
								{
									"Key": "CurrencyAnalyticsName",
									"Value": "Season9_StarterKit"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 10,
							"title": "Wilde Pack",
							"shortDescription": "",
							"description": "Fight with fury with the Wilde Pack. An outfit, a back bling and 600 V-Bucks!",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_CID_420_Athena_Commando_F_WhiteTiger.DA_Featured_CID_420_Athena_Commando_F_WhiteTiger",
							"itemGrants": [
								{
									"templateId": "Currency:MtxPurchased",
									"quantity": 499
								},
								{
									"templateId": "Currency:MtxPurchaseBonus",
									"quantity": 101
								},
								{
									"templateId": "AthenaCharacter:cid_420_athena_commando_f_whitetiger",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_277_whitetiger",
									"quantity": 1
								}
							]
						},
						{
							"offerId": "164435F248762115C99DC2A3204A2D1F",
							"devName": "Season 5 Starter Kit (RMT)",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": 5,
									"dynamicRegularPrice": -1,
									"finalPrice": 5,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 5
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"494b1e73046543d6ba53c4574fd1b54c",
								"ios_rmpa03_C",
								"",
								"google_rmpa03_1",
								"",
								"RMPA030000000000",
								"6c1b4276-3f57-4946-ac49-f8f61c643a28",
								"c-starterpack00050-SPACK03",
								"sam_RMPA03",
								"C4JZSJXQRLGS",
								""
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "4A71EECC4B2F2AB2E00C0FBB4FF77751",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "MtxQuantity",
									"value": "600"
								},
								{
									"key": "MtxBonus",
									"value": "100"
								},
								{
									"Key": "CurrencyAnalyticsName",
									"Value": "Season5_StarterKit"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 10,
							"title": "Ace Pack",
							"shortDescription": "",
							"description": "An epic skin and 600 v-bucks!",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_CID_195_Athena_Commando_F_Bling.DA_Featured_CID_195_Athena_Commando_F_Bling",
							"itemGrants": [
								{
									"templateId": "Currency:MtxPurchased",
									"quantity": 499
								},
								{
									"templateId": "Currency:MtxPurchaseBonus",
									"quantity": 101
								},
								{
									"templateId": "AthenaCharacter:cid_195_athena_commando_f_bling",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_101_blingfemale",
									"quantity": 1
								}
							]
						},
						{
							"offerId": "B678DA8341FB458C68C64E99176862D0",
							"devName": "Deep Freeze Bundle",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 0,
									"dynamicRegularPrice": -1,
									"finalPrice": 0,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 0
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"bf5dfcaa2e354fc482142f6ee0fcd61f",
								"ios_dfbndl_C",
								"",
								"",
								"",
								"DFBNDL0000000000",
								"0a002971-0678-4021-b0f1-2f839756bee8",
								"c-retailbundle0000-DFBNDL1",
								"sam_DFBDGL",
								"C5GF2JQKBSM1",
								"DFBNDL0000000000"
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "821E9F494FE5FB80045FC69ED54BADD1",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "MtxQuantity",
									"value": "1000"
								},
								{
									"key": "SectionID",
									"value": "LimitedTime"
								},
								{
									"key": "NewDisplayAssetPath",
									"value": "/Game/Catalog/NewDisplayAssets/DAv2_Bundle_Featured_DeepFreeze.DAv2_Bundle_Featured_DeepFreeze"
								},
								{
									"key": "TileSize",
									"value": "DoubleWide"
								},
								{
									"key": "HideRarityBorder",
									"value": "true"
								},
								{
									"key": "ViolatorTag",
									"value": "LowerPrice"
								},
								{
									"Key": "CurrencyAnalyticsName",
									"Value": "DeepFreeze_Bundle"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 21,
							"title": "Deep Freeze Bundle",
							"shortDescription": "",
							"description": "Brrr! A very cool bundle!",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_CID_TBD_Athena_Commando_M_RaptorArcticCamo_Bundle.DA_Featured_CID_TBD_Athena_Commando_M_RaptorArcticCamo_Bundle",
							"itemGrants": [
								{
									"templateId": "AthenaCharacter:cid_261_athena_commando_m_raptorarcticcamo",
									"quantity": 1
								},
								{
									"templateId": "Currency:MtxPurchased",
									"quantity": 1000
								},
								{
									"templateId": "AthenaGlider:glider_id_074_raptorarcticcamo",
									"quantity": 1
								},
								{
									"templateId": "AthenaPickaxe:pickaxe_id_097_raptorarcticcamo",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_142_raptorarcticcamo",
									"quantity": 1
								}
							]
						},
						{
							"offerId": "CB64AFD84FCF2DE9E71E54A33B44DE0E",
							"devName": "Season 7 Starter Kit (RMT)",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 7,
									"dynamicRegularPrice": -1,
									"finalPrice": 7,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 7
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"9c823c76c5e94c62b4d6a0616c56aebd",
								"ios_rmpa05_C",
								"",
								"google_rmpa05_1",
								"",
								"RMPA050000000000",
								"8a3c2009-3789-4afc-992f-49a3ff6e7d1d",
								"c-starterpack00000-SPACK05",
								"sam_RMPA05",
								"BVSNDK64H82B",
								""
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "CF78A7AB41F59B39BE3FC7B3248A77DF",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "MtxQuantity",
									"value": "600"
								},
								{
									"key": "MtxBonus",
									"value": "100"
								},
								{
									"Key": "CurrencyAnalyticsName",
									"Value": "Season7_StarterKit"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 10,
							"title": "Cobalt Pack",
							"shortDescription": "",
							"description": "An epic skin and 600 V-Bucks!",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_CID_327_Athena_Commando_M_BlueMystery.DA_Featured_CID_327_Athena_Commando_M_BlueMystery",
							"itemGrants": [
								{
									"templateId": "Currency:MtxPurchased",
									"quantity": 499
								},
								{
									"templateId": "Currency:MtxPurchaseBonus",
									"quantity": 101
								},
								{
									"templateId": "AthenaCharacter:cid_327_athena_commando_m_bluemystery",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_203_bluemystery",
									"quantity": 1
								}
							]
						},
						{
							"offerId": "917A7A14466225C5EBBC7DBE00A63D70",
							"devName": "Frozen Legends",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 0,
									"dynamicRegularPrice": -1,
									"finalPrice": 0,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 0
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"493dd27f9efa42aa89a25c1400c02a29",
								"ios_frzlgd1_C",
								"",
								"google_frzlgd_1",
								"",
								"FRZLGD0000000000",
								"db344708-8609-4852-b73f-d101c0e9d64c",
								"c-seasonpack000001-FRZLGD1",
								"sam_FRZLGD",
								"BXGW0P1KRVPS",
								"FRZLGD0000000000"
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "43672C454B192864F806AD81AFB6701D",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "SectionID",
									"value": "LimitedTime"
								},
								{
									"key": "NewDisplayAssetPath",
									"value": "/Game/Catalog/NewDisplayAssets/DAv2_RMT_FrozenLegends.DAv2_RMT_FrozenLegends"
								},
								{
									"key": "TileSize",
									"value": "DoubleWide"
								},
								{
									"key": "HideRarityBorder",
									"value": "true"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 12,
							"title": "Frozen Legends",
							"shortDescription": "",
							"description": "Stay frosty this season with the Frozen Legends pack!",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_Athena_FrozenLegends.DA_Featured_Athena_FrozenLegends",
							"itemGrants": [
								{
									"templateId": "AthenaCharacter:cid_293_athena_commando_m_ravenwinter",
									"quantity": 1
								},
								{
									"templateId": "AthenaCharacter:cid_294_athena_commando_f_redknightwinter",
									"quantity": 1
								},
								{
									"templateId": "AthenaCharacter:cid_295_athena_commando_m_cupidwinter",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_166_ravenwintermale",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_167_redknightwinterfemale",
									"quantity": 1
								},
								{
									"templateId": "AthenaBackpack:bid_168_cupidwintermale",
									"quantity": 1
								}
							]
						}
					]
				},
				{
					"name": "BRSeason18",
					"catalogEntries": []
				},
				{
					"name": "BRSeason19",
					"catalogEntries": [
						{
							"offerId": "2719FD6E4F264293B3B8B4842F272FCB",
							"devName": "BR.Season19.BattleBundle.01",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": 4700,
									"dynamicRegularPrice": -1,
									"finalPrice": 2800,
									"saleType": "Strikethrough",
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 2800
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								""
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "C7D011734D0211B27EBC6CA7E3AF38BE",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "bShowInItemShop",
									"value": "false"
								},
								{
									"key": "LevelsToGrant",
									"value": "25"
								},
								{
									"key": "Preroll",
									"value": "False"
								},
								{
									"key": "ShouldShowBattlePassPurchase",
									"value": "true"
								},
								{
									"key": "NewDisplayAssetPath",
									"value": "/Game/Catalog/NewDisplayAssets/DAv2_BR_Season19_BattlePass.DAv2_BR_Season19_BattlePass"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 0,
							"title": "Battle Bundle",
							"shortDescription": "Battle Pass + 25 levels!",
							"description": "Chapter 3 - Season 1 through ???",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_BR_Season19_BattlePassWithLevels.DA_BR_Season19_BattlePassWithLevels",
							"itemGrants": []
						},
						{
							"offerId": "B1E16EBD418B6892081A9C990F431AD4",
							"devName": "BR.Season19.BattlePass.01",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": 950,
									"dynamicRegularPrice": -1,
									"finalPrice": 950,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 950
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								""
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "C7D011734D0211B27EBC6CA7E3AF38BE",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "bShowInItemShop",
									"value": "true"
								},
								{
									"key": "sectionPriority",
									"value": "1000"
								},
								{
									"key": "SectionId",
									"value": "Battlepass"
								},
								{
									"key": "TileSize",
									"value": "DoubleWide"
								},
								{
									"key": "Preroll",
									"value": "False"
								},
								{
									"key": "NewDisplayAssetPath",
									"value": "/Game/Catalog/NewDisplayAssets/DAv2_BR_Season19_BattlePass.DAv2_BR_Season19_BattlePass"
								},
								{
									"key": "ShouldShowBattlePassPurchase",
									"value": "true"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 1,
							"title": "Battle Pass",
							"shortDescription": "Chapter 3 - Season 1",
							"description": "Chapter 3 - Season 1 through ???",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_BR_Season19_BattlePass.DA_BR_Season19_BattlePass",
							"itemGrants": []
						},
						{
							"offerId": "C6CAE9BA435CF1B0BE4BE7865B9F4E0F",
							"devName": "BR.Season19.SingleTier.01",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": 150,
									"dynamicRegularPrice": -1,
									"finalPrice": 150,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 150
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								""
							],
							"requirements": [],
							"metaInfo": [
								{
									"key": "Preroll",
									"value": "False"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 0,
							"title": "Battle Pass Level",
							"shortDescription": "",
							"description": "Get great rewards now!",
							"displayAssetPath": "",
							"itemGrants": []
						},
						{
							"offerId": "A10172E94AA49288AA4A4BA70737E9B6",
							"devName": "BR.Season19.BattlePassGift.01",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "GameItem",
									"currencySubType": "Token:battlepassgift",
									"regularPrice": 1,
									"dynamicRegularPrice": -1,
									"finalPrice": 1,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 1
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								""
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "C7D011734D0211B27EBC6CA7E3AF38BE",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "Preroll",
									"value": "False"
								},
								{
									"key": "BannerOverride",
									"value": "GiftOnly"
								},
								{
									"key": "SeasonGift",
									"value": "true"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 1,
							"title": "Battle Pass",
							"shortDescription": "Season 19",
							"description": "Season 19",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_BR_Season19_BattlePass.DA_BR_Season19_BattlePass",
							"itemGrants": [],
							"giftInfo": {
								"bIsEnabled": true,
								"forcedGiftBoxTemplateId": "",
								"purchaseRequirements": []
							}
						},
						{
							"offerId": "A6733F374C37DEDFBA5DF6A38411175D",
							"devName": "BR.Season19.BP25Levels.01",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "MtxCurrency",
									"currencySubType": "",
									"regularPrice": 3750,
									"dynamicRegularPrice": -1,
									"finalPrice": 1850,
									"saleType": "PercentOff",
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 1850
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								"",
								""
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "C513106247AD8B948FED2D8B5AD82A61",
									"minQuantity": 1
								},
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "F1343D164A60D47E1F1E829E6260D8EB",
									"minQuantity": 1
								},
								{
									"requirementType": "RequireFulfillment",
									"requiredId": "C7D011734D0211B27EBC6CA7E3AF38BE",
									"minQuantity": 1
								}
							],
							"metaInfo": [
								{
									"key": "bShowInItemShop",
									"value": "true"
								},
								{
									"key": "LevelsToGrant",
									"value": "25"
								},
								{
									"key": "SectionId",
									"value": "Battlepass"
								},
								{
									"key": "TileSize",
									"value": "DoubleWide"
								},
								{
									"key": "Preroll",
									"value": "False"
								},
								{
									"key": "MaxLevel",
									"value": "175"
								},
								{
									"key": "IsLevelBundle",
									"value": "true"
								},
								{
									"key": "PurchaseLimit",
									"value": "1"
								},
								{
									"key": "InstanceId",
									"value": "Season19_25lvl"
								},
								{
									"key": "NewDisplayAssetPath",
									"value": "/Game/Catalog/NewDisplayAssets/DAv2_BR_BattlePass_Tiers25Levels.DAv2_BR_BattlePass_Tiers25Levels"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 1,
							"title": "Battle Pass 25 Levels",
							"shortDescription": "",
							"description": "Purchase 25 Battle Pass Levels",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_AthenaBattlePassStarSale_S2.DA_Featured_AthenaBattlePassStarSale_S2",
							"itemGrants": []
						}
					]
				},
				{
					"name": "FoundersPack",
					"catalogEntries": [
						{
							"offerId": "295CC29541839D33661FA691B3DE95FB",
							"devName": "FoundersUpgrade_1_3",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 0,
									"dynamicRegularPrice": -1,
									"finalPrice": 0,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 0
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"f5c0e8ab6c9a4530999041e89e9b6934",
								"",
								"",
								"",
								"",
								"FNDR130000000000",
								"f3fa9d49-0efa-4189-9ed5-a72b8af8caa4",
								"",
								"",
								"BQQGTHMP8KZV",
								""
							],
							"requirements": [
								{
									"requirementType": "DenyOnItemOwnership",
									"requiredId": "Token:founderspack_3",
									"minQuantity": 1
								},
								{
									"requirementType": "RequireItemOwnership",
									"requiredId": "Token:founderspack_1",
									"minQuantity": 1
								},
								{
									"requirementType": "DenyOnItemOwnership",
									"requiredId": "Token:founderspack_2",
									"minQuantity": 1
								}
							],
							"metaInfo": [],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 4,
							"title": "Super Deluxe",
							"shortDescription": "",
							"description": "",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_FoundersPack_1_3.DA_FoundersPack_1_3",
							"itemGrants": []
						},
						{
							"offerId": "EBF511584B4405C031087C99148BB2D8",
							"devName": "FoundersUpgrade_1_2",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 0,
									"dynamicRegularPrice": -1,
									"finalPrice": 0,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 0
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"9aa9f44cd8c24652953a1b204755b193",
								"",
								"",
								"",
								"",
								"FNDR120000000000",
								"c4f3c99f-b7e0-4e21-ab01-131d4b20d720",
								"",
								"",
								"C19S7QTMVWTQ",
								""
							],
							"requirements": [
								{
									"requirementType": "DenyOnItemOwnership",
									"requiredId": "Token:founderspack_2",
									"minQuantity": 1
								},
								{
									"requirementType": "RequireItemOwnership",
									"requiredId": "Token:founderspack_1",
									"minQuantity": 1
								}
							],
							"metaInfo": [],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 5,
							"title": "Deluxe Upgrade",
							"shortDescription": "",
							"description": "",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_FoundersPack_1_2.DA_FoundersPack_1_2",
							"itemGrants": []
						},
						{
							"offerId": "48DC9478462A5DCD3D93EBB81D4488AB",
							"devName": "FoundersPack_1",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 0,
									"dynamicRegularPrice": -1,
									"finalPrice": 0,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 0
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"e2f25dae43604a839dd6f2c21b675d5e",
								"",
								"",
								"",
								"",
								"FNDR010000000001",
								"b0e02cfe-8d1e-4aa0-a02b-e64fa7263617",
								"",
								"",
								"BXWNX8ST04JS",
								""
							],
							"requirements": [
								{
									"requirementType": "DenyOnItemOwnership",
									"requiredId": "Token:founderspack_1",
									"minQuantity": 1
								}
							],
							"metaInfo": [],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 5,
							"title": "Standard Founder's Pack",
							"shortDescription": "",
							"description": "Purchase the Standard Founder's Pack",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_FoundersPack_1.DA_FoundersPack_1",
							"itemGrants": []
						},
						{
							"offerId": "F46E931F4851F1CFB0E50C805957205A",
							"devName": "FoundersUpgrade_2_4",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 0,
									"dynamicRegularPrice": -1,
									"finalPrice": 0,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 0
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"d2da86026c71429a9cf5e76dfd89a1d3",
								"",
								"",
								"",
								"",
								"FNDR240000000000",
								"6ba13aad-2515-4e51-b8d8-72540863a8bc",
								"",
								"",
								"C4DP169TMQK7",
								""
							],
							"requirements": [
								{
									"requirementType": "DenyOnItemOwnership",
									"requiredId": "Token:founderspack_4",
									"minQuantity": 1
								},
								{
									"requirementType": "RequireItemOwnership",
									"requiredId": "Token:founderspack_2",
									"minQuantity": 1
								},
								{
									"requirementType": "DenyOnItemOwnership",
									"requiredId": "Token:founderspack_3",
									"minQuantity": 1
								}
							],
							"metaInfo": [],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 4,
							"title": "Limited Upgrade",
							"shortDescription": "",
							"description": "",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_FoundersPack_2_4.DA_FoundersPack_2_4",
							"itemGrants": []
						},
						{
							"offerId": "AD38CA234B2FA67C83BFD888EA1D2E8D",
							"devName": "FoundersUpgrade_4_5",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 0,
									"dynamicRegularPrice": -1,
									"finalPrice": 0,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 0
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"e852b1940299435884365cec7dc3a608",
								"",
								"",
								"",
								"",
								"FNDR450000000000",
								"b4e5f231-418f-4937-b3e5-f0e014d42ffe",
								"",
								"",
								"BZ0D9FZH5WH3",
								""
							],
							"requirements": [
								{
									"requirementType": "DenyOnItemOwnership",
									"requiredId": "Token:founderspack_5",
									"minQuantity": 1
								},
								{
									"requirementType": "RequireItemOwnership",
									"requiredId": "Token:founderspack_4",
									"minQuantity": 1
								}
							],
							"metaInfo": [],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 5,
							"title": "Ultimate Upgrade",
							"shortDescription": "",
							"description": "",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_FoundersPack_4_5.DA_FoundersPack_4_5",
							"itemGrants": []
						},
						{
							"offerId": "141F04624351F025DC67E1929B282B50",
							"devName": "FoundersUpgrade_2_3",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 0,
									"dynamicRegularPrice": -1,
									"finalPrice": 0,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 0
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"35759d71512b47e5b2825669f1d9166a",
								"",
								"",
								"",
								"",
								"FNDR230000000000",
								"46c22707-e058-45dd-8d83-fc45b82d65cd",
								"",
								"",
								"C50KV04716HT",
								""
							],
							"requirements": [
								{
									"requirementType": "DenyOnItemOwnership",
									"requiredId": "Token:founderspack_3",
									"minQuantity": 1
								},
								{
									"requirementType": "RequireItemOwnership",
									"requiredId": "Token:founderspack_2",
									"minQuantity": 1
								}
							],
							"metaInfo": [],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 5,
							"title": "Super Deluxe Upgrade",
							"shortDescription": "",
							"description": "",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_FoundersPack_2_3.DA_FoundersPack_2_3",
							"itemGrants": []
						},
						{
							"offerId": "E86A50A14891B241DBA126BE8FCD0C42",
							"devName": "FoundersPack_3",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 0,
									"dynamicRegularPrice": -1,
									"finalPrice": 0,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 0
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"c8319a037f9840e8b7549de480efb9c7",
								"",
								"",
								"",
								"",
								"FNDR030000000001",
								"8b2e873d-4dba-4367-9bb9-0c2b0951918a",
								"",
								"",
								"BWWG58N9HFKF",
								""
							],
							"requirements": [
								{
									"requirementType": "DenyOnItemOwnership",
									"requiredId": "Token:founderspack_1",
									"minQuantity": 1
								}
							],
							"metaInfo": [],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 3,
							"title": "Super Deluxe Founder's Pack",
							"shortDescription": "",
							"description": "Purchase the Super Deluxe Founder's Pack",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_FoundersPack_3.DA_FoundersPack_3",
							"itemGrants": []
						},
						{
							"offerId": "906D1C4D4F79D2ECE314E8AA70CDAFE4",
							"devName": "FoundersUpgrade_3_4",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 0,
									"dynamicRegularPrice": -1,
									"finalPrice": 0,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 0
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"f05c43f7c1d24f5fbb1a6fa5a5a60edb",
								"",
								"",
								"",
								"",
								"FNDR340000000000",
								"489759a7-8a97-49bf-90e1-e8a338fdfaf5",
								"",
								"",
								"BS949M2S2S75",
								""
							],
							"requirements": [
								{
									"requirementType": "DenyOnItemOwnership",
									"requiredId": "Token:founderspack_4",
									"minQuantity": 1
								},
								{
									"requirementType": "RequireItemOwnership",
									"requiredId": "Token:founderspack_3",
									"minQuantity": 1
								}
							],
							"metaInfo": [],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 5,
							"title": "Limited Upgrade",
							"shortDescription": "",
							"description": "",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_FoundersPack_3_4.DA_FoundersPack_3_4",
							"itemGrants": []
						},
						{
							"offerId": "B8ACCCB94D87EC3B4979858FFC3A09E6",
							"devName": "StW_SHK_ST3",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 0,
									"dynamicRegularPrice": -1,
									"finalPrice": 0,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 0
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"eb7332137e56427ea8847ee46a0562ce",
								"",
								"",
								"",
								"",
								"STWSHK0000000000",
								"50355039-3236-3030-c030-44364b4ce700",
								"",
								"",
								"9P5P6200D6KL",
								"STWSHK0000000000"
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "2FDB26FD40468AC1FAF4718D2E6B8EED",
									"minQuantity": 1
								}
							],
							"metaInfo": [],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 5,
							"title": "Powerhouse Pack",
							"shortDescription": "",
							"description": "Charge up and shock your enemies with the Powerhouse Pack",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_VindertechSoldierPack.DA_Featured_VindertechSoldierPack",
							"itemGrants": []
						},
						{
							"offerId": "2A26520F414EC95C944F80A596A284B0",
							"devName": "FoundersUpgrade_1_4",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 0,
									"dynamicRegularPrice": -1,
									"finalPrice": 0,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 0
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"57f0419c4e4a4ea4858b2f37a98d5315",
								"",
								"",
								"",
								"",
								"FNDR140000000000",
								"65691cca-42bb-4528-9065-3926c0057cac",
								"",
								"",
								"C3K7QVDRT2XV",
								""
							],
							"requirements": [
								{
									"requirementType": "DenyOnItemOwnership",
									"requiredId": "Token:founderspack_4",
									"minQuantity": 1
								},
								{
									"requirementType": "RequireItemOwnership",
									"requiredId": "Token:founderspack_1",
									"minQuantity": 1
								},
								{
									"requirementType": "DenyOnItemOwnership",
									"requiredId": "Token:founderspack_2",
									"minQuantity": 1
								},
								{
									"requirementType": "DenyOnItemOwnership",
									"requiredId": "Token:founderspack_3",
									"minQuantity": 1
								}
							],
							"metaInfo": [],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 3,
							"title": "Limited Upgrade",
							"shortDescription": "",
							"description": "",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_FoundersPack_1_4.DA_FoundersPack_1_4",
							"itemGrants": []
						},
						{
							"offerId": "8F9E54194FBF331A9CCC4BB6FDFB8FC2",
							"devName": "FoundersPack_2",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 0,
									"dynamicRegularPrice": -1,
									"finalPrice": 0,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 0
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"41134f4ff35a45a4923604cbb15e487d",
								"",
								"",
								"",
								"",
								"FNDR020000000001",
								"369267a1-3e63-4b6e-82be-286d741d7370",
								"",
								"",
								"BRD01SWKX9WS",
								""
							],
							"requirements": [
								{
									"requirementType": "DenyOnItemOwnership",
									"requiredId": "Token:founderspack_1",
									"minQuantity": 1
								}
							],
							"metaInfo": [],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 4,
							"title": "Deluxe Founder's Pack",
							"shortDescription": "",
							"description": "Purchase the Deluxe Founder's Pack",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_FoundersPack_2.DA_FoundersPack_2",
							"itemGrants": []
						},
						{
							"offerId": "4FF523B44A6D6CF76599A6AE06B42CA3",
							"devName": "StW_LAR_ST7",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 0,
									"dynamicRegularPrice": -1,
									"finalPrice": 0,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 0
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"411a9188ef584588b935b2d4f43a2325",
								"",
								"",
								"",
								"",
								"STWLARS000000000",
								"4d304e39-5639-3042-c047-343731510900",
								"",
								"",
								"9N0M9VBG471Q",
								"STWLARS000000000"
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "8DF06CAE465B5DC8142A72A7B2D595BA",
									"minQuantity": 1
								}
							],
							"metaInfo": [],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 5,
							"title": "Lars",
							"shortDescription": "",
							"description": "Peace, love, and Steel Wool.",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_LarsBundle.DA_Featured_LarsBundle",
							"itemGrants": []
						},
						{
							"offerId": "A847C3744EA4243E629A12AC4027FFA6",
							"devName": "StW_MCH_ST4",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 0,
									"dynamicRegularPrice": -1,
									"finalPrice": 0,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 0
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"992ba7f52f3b40d49a4411fbade69b33",
								"",
								"",
								"",
								"",
								"STWMCH0000000000",
								"47445039-3534-3057-c042-513343351200",
								"",
								"",
								"9PDG45WBQ3C5",
								"STWMCH0000000000"
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "EC0B6E6A4C7E05C3CC66C69DC4B24F57",
									"minQuantity": 1
								}
							],
							"metaInfo": [],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 5,
							"title": "Machinist Mina",
							"shortDescription": "",
							"description": "Build enemies up to tear them down with the Machinist Mina Pack!",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_MechaConstructorBundle.DA_Featured_MechaConstructorBundle",
							"itemGrants": []
						},
						{
							"offerId": "E2994D164ACA01D4EB9ED585EB1CE5BD",
							"devName": "StW_MTL_ST1",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 0,
									"dynamicRegularPrice": -1,
									"finalPrice": 0,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 0
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"ae230025ab0f4b578d605569746233e5",
								"",
								"",
								"",
								"",
								"STWBEA0000000000",
								"514e5039-5147-3046-c04e-4a3452385c00",
								"",
								"",
								"9PNQGQFNJ4R8",
								""
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "67E05F60412ADCCBE49B50918CFEABDD",
									"minQuantity": 1
								}
							],
							"metaInfo": [],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 5,
							"title": "Metal Team Leader Pack",
							"shortDescription": "",
							"description": "Cold steel, warm heart!",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_FuzzyBearTeddyBundle.DA_Featured_FuzzyBearTeddyBundle",
							"itemGrants": []
						},
						{
							"offerId": "102C71DF437A25006C2EEF8ABAB75485",
							"devName": "StW_ASR_ST5",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 0,
									"dynamicRegularPrice": -1,
									"finalPrice": 0,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 0
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"b587eca883944eda861a4542e1d4fb6a",
								"",
								"",
								"",
								"",
								"STWASR0000000000",
								"53335039-4a5a-3043-c032-385844423e00",
								"",
								"",
								"9P3SZJC28XDB",
								"STWASR0000000000"
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "569CCD6549EF24CBBC7B809EA4365FDF",
									"minQuantity": 1
								}
							],
							"metaInfo": [],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 5,
							"title": "Robo-Ray",
							"shortDescription": "",
							"description": "Everything's fine, she has a plan, and she's gonna fix this!",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_Assembler_Bundle.DA_Featured_Assembler_Bundle",
							"itemGrants": []
						},
						{
							"offerId": "3FD5BF6045E78DABD1543FB181E3A138",
							"devName": "StW_ASK_ST8",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 0,
									"dynamicRegularPrice": -1,
									"finalPrice": 0,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 0
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"48e7be9d5a834f498da5799749db5836",
								"",
								"",
								"",
								"",
								"STWASK0000000000",
								"304e4e39-3636-304b-c042-5636384b0d00",
								"",
								"",
								"9NN066KBV68K",
								"STWASK0000000000"
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "9B506B7A4AEF74EC8DBCE78E5CE590CD",
									"minQuantity": 1
								}
							],
							"metaInfo": [],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 5,
							"title": "Robo-Kevin Pack",
							"shortDescription": "",
							"description": "Everyone's favorite triangular bot is here to upgrade your spirits.",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_AssembleKBundle.DA_Featured_AssembleKBundle",
							"itemGrants": []
						},
						{
							"offerId": "BA4237DE44B7C83B55BEC8A8D9C2241C",
							"devName": "StW_JNK_ST2",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 0,
									"dynamicRegularPrice": -1,
									"finalPrice": 0,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 0
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"6d28ba7c952b412d82120efcdcc9c233",
								"",
								"",
								"",
								"",
								"STWSAM0000000000",
								"34514e39-445a-3056-c042-385a584a7600",
								"",
								"",
								"9NQ4ZDVB8ZXJ",
								""
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "18CCCDF24D751CF4E7B834A08B6D9CE9",
									"minQuantity": 1
								}
							],
							"metaInfo": [],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 5,
							"title": "Samurai Scrapper Pack",
							"shortDescription": "",
							"description": "One person's trash is another person's armor!",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_JunkSamuraiBundle.DA_Featured_JunkSamuraiBundle",
							"itemGrants": []
						},
						{
							"offerId": "645825F944BA03CB7841CAA83CACA126",
							"devName": "StW_ASL_ST6",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 0,
									"dynamicRegularPrice": -1,
									"finalPrice": 0,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 0
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"3c552303884b4d69b9bcd4c410ee0130",
								"",
								"",
								"",
								"",
								"STWASL0000000000",
								"57354e39-5244-3031-c05a-3248345a3c00",
								"",
								"",
								"9N5WDR1Z2H4Z",
								"STWASL0000000000"
							],
							"requirements": [
								{
									"requirementType": "DenyOnFulfillment",
									"requiredId": "14E1838F4DD7AB817DA5DD87C7381B73",
									"minQuantity": 1
								}
							],
							"metaInfo": [],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 5,
							"title": "Lok-Bot",
							"shortDescription": "",
							"description": "Imagine, if you will, an oven bot and the places he will go.",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_Featured_AssembleL_Bundle.DA_Featured_AssembleL_Bundle",
							"itemGrants": []
						},
						{
							"offerId": "17B3F0D54574684E0B9185A10910E324",
							"devName": "FoundersPack_4",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 0,
									"dynamicRegularPrice": -1,
									"finalPrice": 0,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 0
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"85125898f3914946a9443bcce4667660",
								"",
								"",
								"",
								"",
								"FNDR040000000001",
								"e3c292c9-9337-41e8-ba90-e96b85002f68",
								"",
								"",
								"BTC5H6VZBHPF",
								""
							],
							"requirements": [
								{
									"requirementType": "DenyOnItemOwnership",
									"requiredId": "Token:founderspack_1",
									"minQuantity": 1
								}
							],
							"metaInfo": [],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 2,
							"title": "Limited Founder's Pack",
							"shortDescription": "",
							"description": "Purchase the Limited Founder's Pack",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_FoundersPack_4.DA_FoundersPack_4",
							"itemGrants": []
						}
					]
				},
				{
					"name": "ReloadVBucks",
					"catalogEntries": [
						{
							"offerId": "A1F8DBBD45024AA14308D3B84AF77DD2",
							"devName": "2,000 V-Bucks",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 0,
									"dynamicRegularPrice": -1,
									"finalPrice": 0,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 0
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"775603a570324885a56762ea81bff788",
								"ios_vbucks_2000inc",
								"",
								"google_vbucks_2000inc",
								"",
								"INC20K0000000000",
								"4b424e39-5756-3046-c043-5846444a7600",
								"c-virtualcurrency1-MTX2000",
								"sam_vbucks_2000inc",
								"9NBKVWFCXFDJ",
								"INC20K0000000000"
							],
							"requirements": [],
							"metaInfo": [
								{
									"key": "MtxQuantity",
									"value": "2000"
								},
								{
									"key": "MtxBonus",
									"value": "1"
								},
								{
									"key": "IconSize",
									"value": "XSmall"
								},
								{
									"Key": "CurrencyAnalyticsName",
									"Value": "MtxPack2000"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 6,
							"title": "2,000 V-Bucks",
							"shortDescription": "",
							"description": "Complete your purchase by grabbing 2,000 V-Bucks, the in-game currency that can be spent in Fortnite Battle Royale, Creative, and Save the World Modes!  These V-Bucks will immediately be spent on the currently selected offer.",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_MtxPack1000.DA_MtxPack1000",
							"itemGrants": []
						},
						{
							"offerId": "60C32F804E08CF9FE0E1CE98994A54E4",
							"devName": "1,100 V-Bucks",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 0,
									"dynamicRegularPrice": -1,
									"finalPrice": 0,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 0
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"ea8bba06cfee427ea0d0b65953438f92",
								"ios_vbucks_1100inc",
								"",
								"google_vbucks_1100inc",
								"",
								"INC11K0000000000",
								"4b385039-5234-304a-c035-585633392b00",
								"c-virtualcurrency1-MTX1100",
								"sam_vbucks_1100inc",
								"9P8K4RJ5XV39",
								"INC11K0000000000"
							],
							"requirements": [],
							"metaInfo": [
								{
									"key": "MtxQuantity",
									"value": "1100"
								},
								{
									"key": "MtxBonus",
									"value": "1"
								},
								{
									"key": "IconSize",
									"value": "XSmall"
								},
								{
									"Key": "CurrencyAnalyticsName",
									"Value": "MtxPack1100"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 6,
							"title": "1,100 V-Bucks",
							"shortDescription": "",
							"description": "Complete your purchase by grabbing 1,100 V-Bucks, the in-game currency that can be spent in Fortnite Battle Royale, Creative, and Save the World Modes!  These V-Bucks will immediately be spent on the currently selected offer.",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_MtxPack1000.DA_MtxPack1000",
							"itemGrants": []
						},
						{
							"offerId": "F6CC90AB4F1220DA2F86BA9BFDDE9D69",
							"devName": "500 V-Bucks",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 0,
									"dynamicRegularPrice": -1,
									"finalPrice": 0,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 0
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"5f464fcc96764708a54882abc0775e3d",
								"ios_vbucks_500inc",
								"",
								"google_vbucks_500inc",
								"",
								"INC5000000000000",
								"34445039-3347-3054-c034-4c5036502500",
								"c-virtualcurrency1-MTX500",
								"sam_vbucks_500inc",
								"9PD4G3T4LP6P",
								"INC5000000000000"
							],
							"requirements": [],
							"metaInfo": [
								{
									"key": "MtxQuantity",
									"value": "500"
								},
								{
									"key": "MtxBonus",
									"value": "1"
								},
								{
									"key": "IconSize",
									"value": "XSmall"
								},
								{
									"Key": "CurrencyAnalyticsName",
									"Value": "MtxPack500"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 6,
							"title": "500 V-Bucks",
							"shortDescription": "",
							"description": "Complete your purchase by grabbing 500 V-Bucks, the in-game currency that can be spent in Fortnite Battle Royale, Creative, and Save the World Modes!  These V-Bucks will immediately be spent on the currently selected offer.",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_MtxPack1000.DA_MtxPack1000",
							"itemGrants": []
						},
						{
							"offerId": "C2B44D8543650A94A006CEB9C2577ED2",
							"devName": "700 V-Bucks",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 0,
									"dynamicRegularPrice": -1,
									"finalPrice": 0,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 0
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"abb65726a6934e8abc2a57e30add0926",
								"ios_vbucks_700inc",
								"",
								"google_vbucks_700inc",
								"",
								"INC7000000000000",
								"51434e39-4c30-305a-c053-584e424b7700",
								"c-virtualcurrency1-MTX700",
								"sam_vbucks_700inc",
								"9NCQ0LZSXNBK",
								"INC7000000000000"
							],
							"requirements": [],
							"metaInfo": [
								{
									"key": "MtxQuantity",
									"value": "700"
								},
								{
									"key": "MtxBonus",
									"value": "1"
								},
								{
									"key": "IconSize",
									"value": "XSmall"
								},
								{
									"Key": "CurrencyAnalyticsName",
									"Value": "MtxPack700"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 6,
							"title": "700 V-Bucks",
							"shortDescription": "",
							"description": "Complete your purchase by grabbing 700 V-Bucks, the in-game currency that can be spent in Fortnite Battle Royale, Creative, and Save the World Modes!  These V-Bucks will immediately be spent on the currently selected offer.",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_MtxPack1000.DA_MtxPack1000",
							"itemGrants": []
						},
						{
							"offerId": "5811FAA3413256A4F822C596C247115E",
							"devName": "300 V-Bucks",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 0,
									"dynamicRegularPrice": -1,
									"finalPrice": 0,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 0
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"16178da6de794c8d86300a607ec1bda6",
								"ios_vbucks_300inc",
								"",
								"google_vbucks_300inc",
								"",
								"INC3000000000000",
								"37564d39-304e-3044-c037-30374c35f400",
								"c-virtualcurrency1-MTX300",
								"sam_vbucks_300inc",
								"9MV7N0D707L5",
								"INC3000000000000"
							],
							"requirements": [],
							"metaInfo": [
								{
									"key": "MtxQuantity",
									"value": "300"
								},
								{
									"key": "MtxBonus",
									"value": "1"
								},
								{
									"key": "IconSize",
									"value": "XSmall"
								},
								{
									"Key": "CurrencyAnalyticsName",
									"Value": "MtxPack300"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 6,
							"title": "300 V-Bucks",
							"shortDescription": "",
							"description": "Complete your purchase by grabbing 300 V-Bucks, the in-game currency that can be spent in Fortnite Battle Royale, Creative, and Save the World Modes!  These V-Bucks will immediately be spent on the currently selected offer.",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_MtxPack1000.DA_MtxPack1000",
							"itemGrants": []
						},
						{
							"offerId": "DA83E2B84282346165F82ABFDC09E540",
							"devName": "1,200 V-Bucks",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 0,
									"dynamicRegularPrice": -1,
									"finalPrice": 0,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 0
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"1c8a96b741484198b6a773b4d11fd048",
								"ios_vbucks_1200inc",
								"",
								"google_vbucks_1200inc",
								"",
								"INC12K0000000000",
								"46385039-4644-3057-c054-50394d4a5c00",
								"c-virtualcurrency1-MTX1200",
								"sam_vbucks_1200inc",
								"9P8FDFWTP9MJ",
								"INC12K0000000000"
							],
							"requirements": [],
							"metaInfo": [
								{
									"key": "MtxQuantity",
									"value": "1200"
								},
								{
									"key": "MtxBonus",
									"value": "1"
								},
								{
									"key": "IconSize",
									"value": "XSmall"
								},
								{
									"Key": "CurrencyAnalyticsName",
									"Value": "MtxPack1200"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 6,
							"title": "1,200 V-Bucks",
							"shortDescription": "",
							"description": "Complete your purchase by grabbing 1,200 V-Bucks, the in-game currency that can be spent in Fortnite Battle Royale, Creative, and Save the World Modes!  These V-Bucks will immediately be spent on the currently selected offer.",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_MtxPack1000.DA_MtxPack1000",
							"itemGrants": []
						},
						{
							"offerId": "4ADA17D741D7E88A8F106EB00003B018",
							"devName": "1,800 V-Bucks",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 0,
									"dynamicRegularPrice": -1,
									"finalPrice": 0,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 0
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"9f85a5d097764566aa0316f86994dd91",
								"ios_vbucks_1800inc",
								"",
								"google_vbucks_1800inc",
								"",
								"INC18K0000000000",
								"34305039-3236-304c-c037-304b5151f500",
								"c-virtualcurrency1-MTX1800",
								"sam_vbucks_1800inc",
								"9P0462L70KQQ",
								"INC18K0000000000"
							],
							"requirements": [],
							"metaInfo": [
								{
									"key": "MtxQuantity",
									"value": "1800"
								},
								{
									"key": "MtxBonus",
									"value": "1"
								},
								{
									"key": "IconSize",
									"value": "XSmall"
								},
								{
									"Key": "CurrencyAnalyticsName",
									"Value": "MtxPack1800"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 6,
							"title": "1,800 V-Bucks",
							"shortDescription": "",
							"description": "Complete your purchase by grabbing 1,800 V-Bucks, the in-game currency that can be spent in Fortnite Battle Royale, Creative, and Save the World Modes!  These V-Bucks will immediately be spent on the currently selected offer.",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_MtxPack1000.DA_MtxPack1000",
							"itemGrants": []
						},
						{
							"offerId": "E2BD4F70498AF13ADAA071B04F885292",
							"devName": "100 V-Bucks",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 0,
									"dynamicRegularPrice": -1,
									"finalPrice": 0,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 0
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"48a61f0d493942909a529369a66f803b",
								"ios_vbucks_100inc",
								"",
								"google_vbucks_100inc",
								"",
								"INC1000000000000",
								"46524e39-3150-3038-c056-485232464000",
								"c-virtualcurrency1-MTX100",
								"sam_vbucks_100inc",
								"9NRFP18VHR2F",
								"INC1000000000000"
							],
							"requirements": [],
							"metaInfo": [
								{
									"key": "MtxQuantity",
									"value": "100"
								},
								{
									"key": "MtxBonus",
									"value": "1"
								},
								{
									"key": "IconSize",
									"value": "XSmall"
								},
								{
									"Key": "CurrencyAnalyticsName",
									"Value": "MtxPack100"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 6,
							"title": "100 V-Bucks",
							"shortDescription": "",
							"description": "Complete your purchase by grabbing 100 V-Bucks, the in-game currency that can be spent in Fortnite Battle Royale, Creative, and Save the World Modes!  These V-Bucks will immediately be spent on the currently selected offer.",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_MtxPack1000.DA_MtxPack1000",
							"itemGrants": []
						},
						{
							"offerId": "5287BBD9415ADC1A66471C8D7023DF48",
							"devName": "1,400 V-Bucks",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 0,
									"dynamicRegularPrice": -1,
									"finalPrice": 0,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 0
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"9c586c23738541ba96fc2c458b74558f",
								"ios_vbucks_1400inc",
								"",
								"google_vbucks_1400inc",
								"",
								"INC14K0000000000",
								"57355039-3948-3035-c053-424331512500",
								"c-virtualcurrency1-MTX1400",
								"sam_vbucks_1400inc",
								"9P5WH95SBC1Q",
								"INC14K0000000000"
							],
							"requirements": [],
							"metaInfo": [
								{
									"key": "MtxQuantity",
									"value": "1400"
								},
								{
									"key": "MtxBonus",
									"value": "1"
								},
								{
									"key": "IconSize",
									"value": "XSmall"
								},
								{
									"Key": "CurrencyAnalyticsName",
									"Value": "MtxPack1400"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 6,
							"title": "1,400 V-Bucks",
							"shortDescription": "",
							"description": "Complete your purchase by grabbing 1,400 V-Bucks, the in-game currency that can be spent in Fortnite Battle Royale, Creative, and Save the World Modes!  These V-Bucks will immediately be spent on the currently selected offer.",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_MtxPack1000.DA_MtxPack1000",
							"itemGrants": []
						},
						{
							"offerId": "F53F72C3450DE23117606FBF84A00545",
							"devName": "900 V-Bucks",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 0,
									"dynamicRegularPrice": -1,
									"finalPrice": 0,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 0
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"0d346f08b60b45f1a64cb5c62c8c0a89",
								"ios_vbucks_900inc",
								"",
								"google_vbucks_900inc",
								"",
								"INC9000000000000",
								"4c364e39-504e-3031-c030-364250330300",
								"c-virtualcurrency1-MTX900",
								"sam_vbucks_900inc",
								"9N6LNP106BP3",
								"INC9000000000000"
							],
							"requirements": [],
							"metaInfo": [
								{
									"key": "MtxQuantity",
									"value": "900"
								},
								{
									"key": "MtxBonus",
									"value": "1"
								},
								{
									"key": "IconSize",
									"value": "XSmall"
								},
								{
									"Key": "CurrencyAnalyticsName",
									"Value": "MtxPack900"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 6,
							"title": "900 V-Bucks",
							"shortDescription": "",
							"description": "Complete your purchase by grabbing 900 V-Bucks, the in-game currency that can be spent in Fortnite Battle Royale, Creative, and Save the World Modes!  These V-Bucks will immediately be spent on the currently selected offer.",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_MtxPack1000.DA_MtxPack1000",
							"itemGrants": []
						},
						{
							"offerId": "E31407514D62C63C7C5D8DA7522CA0BE",
							"devName": "400 V-Bucks",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 0,
									"dynamicRegularPrice": -1,
									"finalPrice": 0,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 0
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"a40d8f5f511045aba8be343b87849abd",
								"ios_vbucks_400inc",
								"",
								"google_vbucks_400inc",
								"",
								"INC4000000000000",
								"4a394e39-4236-3042-c048-58524b343500",
								"c-virtualcurrency1-MTX400",
								"sam_vbucks_400inc",
								"9N9J6BBHXRK4",
								"INC4000000000000"
							],
							"requirements": [],
							"metaInfo": [
								{
									"key": "MtxQuantity",
									"value": "400"
								},
								{
									"key": "MtxBonus",
									"value": "1"
								},
								{
									"key": "IconSize",
									"value": "XSmall"
								},
								{
									"Key": "CurrencyAnalyticsName",
									"Value": "MtxPack400"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 6,
							"title": "400 V-Bucks",
							"shortDescription": "",
							"description": "Complete your purchase by grabbing 400 V-Bucks, the in-game currency that can be spent in Fortnite Battle Royale, Creative, and Save the World Modes!  These V-Bucks will immediately be spent on the currently selected offer.",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_MtxPack1000.DA_MtxPack1000",
							"itemGrants": []
						},
						{
							"offerId": "1F61C9A344BEC0ED8DA2FDB46E4EB6C6",
							"devName": "1,500 V-Bucks",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 0,
									"dynamicRegularPrice": -1,
									"finalPrice": 0,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 0
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"397d63f6f73f4bb1b6628716a08d0c4b",
								"ios_vbucks_1500inc",
								"",
								"google_vbucks_1500inc",
								"",
								"INC15K0000000000",
								"504c5039-3333-3048-c035-475344331900",
								"c-virtualcurrency1-MTX1500",
								"sam_vbucks_1500inc",
								"9PLP33H5GSD3",
								"INC15K0000000000"
							],
							"requirements": [],
							"metaInfo": [
								{
									"key": "MtxQuantity",
									"value": "1500"
								},
								{
									"key": "MtxBonus",
									"value": "1"
								},
								{
									"key": "IconSize",
									"value": "XSmall"
								},
								{
									"Key": "CurrencyAnalyticsName",
									"Value": "MtxPack1500"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 6,
							"title": "1,500 V-Bucks",
							"shortDescription": "",
							"description": "Complete your purchase by grabbing 1,500 V-Bucks, the in-game currency that can be spent in Fortnite Battle Royale, Creative, and Save the World Modes!  These V-Bucks will immediately be spent on the currently selected offer.",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_MtxPack1000.DA_MtxPack1000",
							"itemGrants": []
						},
						{
							"offerId": "1EA7A01E4D6B0B4CA653F7A8B4EFA90A",
							"devName": "800 V-Bucks",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 0,
									"dynamicRegularPrice": -1,
									"finalPrice": 0,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 0
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"5cd3a2123244476499d41ff480ed9340",
								"ios_vbucks_800inc",
								"",
								"google_vbucks_800inc",
								"",
								"INC8000000000000",
								"46445039-5237-3054-c057-33484e364600",
								"c-virtualcurrency1-MTX800",
								"sam_vbucks_800inc",
								"9PDF7RTW3HN6",
								"INC8000000000000"
							],
							"requirements": [],
							"metaInfo": [
								{
									"key": "MtxQuantity",
									"value": "800"
								},
								{
									"key": "MtxBonus",
									"value": "1"
								},
								{
									"key": "IconSize",
									"value": "XSmall"
								},
								{
									"Key": "CurrencyAnalyticsName",
									"Value": "MtxPack800"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 6,
							"title": "800 V-Bucks",
							"shortDescription": "",
							"description": "Complete your purchase by grabbing 800 V-Bucks, the in-game currency that can be spent in Fortnite Battle Royale, Creative, and Save the World Modes!  These V-Bucks will immediately be spent on the currently selected offer.",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_MtxPack1000.DA_MtxPack1000",
							"itemGrants": []
						},
						{
							"offerId": "1B69A6444B6E54875B7FB6AA719C56E2",
							"devName": "1,300 V-Bucks",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 0,
									"dynamicRegularPrice": -1,
									"finalPrice": 0,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 0
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"c3610a6dc47c40cf980cdbe5722de4a4",
								"ios_vbucks_1300inc",
								"",
								"google_vbucks_1300inc",
								"",
								"INC13K0000000000",
								"4d315039-4239-3047-c046-304653471f00",
								"c-virtualcurrency1-MTX1300",
								"sam_vbucks_1300inc",
								"9P1M9BGF0FSG",
								"INC13K0000000000"
							],
							"requirements": [],
							"metaInfo": [
								{
									"key": "MtxQuantity",
									"value": "1300"
								},
								{
									"key": "MtxBonus",
									"value": "1"
								},
								{
									"key": "IconSize",
									"value": "XSmall"
								},
								{
									"Key": "CurrencyAnalyticsName",
									"Value": "MtxPack1300"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 6,
							"title": "1,300 V-Bucks",
							"shortDescription": "",
							"description": "Complete your purchase by grabbing 1,300 V-Bucks, the in-game currency that can be spent in Fortnite Battle Royale, Creative, and Save the World Modes!  These V-Bucks will immediately be spent on the currently selected offer.",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_MtxPack1000.DA_MtxPack1000",
							"itemGrants": []
						},
						{
							"offerId": "BEF155F64EF87BB26463E0A96725437D",
							"devName": "1,700 V-Bucks",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 0,
									"dynamicRegularPrice": -1,
									"finalPrice": 0,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 0
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"233ab6e08b694608a2f82466d94d57d0",
								"ios_vbucks_1700inc",
								"",
								"google_vbucks_1700inc",
								"",
								"INC17K0000000000",
								"35315039-4d51-3057-c04b-324b51434000",
								"c-virtualcurrency1-MTX1700",
								"sam_vbucks_1700inc",
								"9P15QMWK2KQC",
								"INC17K0000000000"
							],
							"requirements": [],
							"metaInfo": [
								{
									"key": "MtxQuantity",
									"value": "1700"
								},
								{
									"key": "MtxBonus",
									"value": "1"
								},
								{
									"key": "IconSize",
									"value": "XSmall"
								},
								{
									"Key": "CurrencyAnalyticsName",
									"Value": "MtxPack1700"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 6,
							"title": "1,700 V-Bucks",
							"shortDescription": "",
							"description": "Complete your purchase by grabbing 1,700 V-Bucks, the in-game currency that can be spent in Fortnite Battle Royale, Creative, and Save the World Modes!  These V-Bucks will immediately be spent on the currently selected offer.",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_MtxPack1000.DA_MtxPack1000",
							"itemGrants": []
						},
						{
							"offerId": "5CA2BA9D495724A807FAD8AA7A184868",
							"devName": "1,900 V-Bucks",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 0,
									"dynamicRegularPrice": -1,
									"finalPrice": 0,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 0
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"3f1e339fdaa24894a99c1db9f6815db4",
								"ios_vbucks_1900inc",
								"",
								"google_vbucks_1900inc",
								"",
								"INC19K0000000000",
								"4c4c4e39-434e-3047-c04b-573242576400",
								"c-virtualcurrency1-MTX1900",
								"sam_vbucks_1900inc",
								"9NLLNCGKW2BW",
								"INC19K0000000000"
							],
							"requirements": [],
							"metaInfo": [
								{
									"key": "MtxQuantity",
									"value": "1900"
								},
								{
									"key": "MtxBonus",
									"value": "1"
								},
								{
									"key": "IconSize",
									"value": "XSmall"
								},
								{
									"Key": "CurrencyAnalyticsName",
									"Value": "MtxPack1900"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 6,
							"title": "1,900 V-Bucks",
							"shortDescription": "",
							"description": "Complete your purchase by grabbing 1,900 V-Bucks, the in-game currency that can be spent in Fortnite Battle Royale, Creative, and Save the World Modes!  These V-Bucks will immediately be spent on the currently selected offer.",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_MtxPack1000.DA_MtxPack1000",
							"itemGrants": []
						},
						{
							"offerId": "ADB9149B454ACFC637D6F8A4B40C562E",
							"devName": "200 V-Bucks",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 0,
									"dynamicRegularPrice": -1,
									"finalPrice": 0,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 0
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"eca7c7c9c7bc4de69f24d8507cc34ff8",
								"ios_vbucks_200inc",
								"",
								"google_vbucks_200inc",
								"",
								"INC2000000000000",
								"31445039-3647-3038-c038-574430560c00",
								"c-virtualcurrency1-MTX200",
								"sam_vbucks_200inc",
								"9PD1G688WD0V",
								"INC2000000000000"
							],
							"requirements": [],
							"metaInfo": [
								{
									"key": "MtxQuantity",
									"value": "200"
								},
								{
									"key": "MtxBonus",
									"value": "1"
								},
								{
									"key": "IconSize",
									"value": "XSmall"
								},
								{
									"Key": "CurrencyAnalyticsName",
									"Value": "MtxPack200"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 6,
							"title": "200 V-Bucks",
							"shortDescription": "",
							"description": "Complete your purchase by grabbing 200 V-Bucks, the in-game currency that can be spent in Fortnite Battle Royale, Creative, and Save the World Modes!  These V-Bucks will immediately be spent on the currently selected offer.",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_MtxPack1000.DA_MtxPack1000",
							"itemGrants": []
						},
						{
							"offerId": "9B60C7774A208463F7292DB697FF5713",
							"devName": "1,600 V-Bucks",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 0,
									"dynamicRegularPrice": -1,
									"finalPrice": 0,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 0
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"b207de06940944469b55633f1a8756e2",
								"ios_vbucks_1600inc",
								"",
								"google_vbucks_1600inc",
								"",
								"INC16K0000000000",
								"44465039-5244-304b-c04d-303743341f00",
								"c-virtualcurrency1-MTX1600",
								"sam_vbucks_1600inc",
								"9PFDDRKM07C4",
								"INC16K0000000000"
							],
							"requirements": [],
							"metaInfo": [
								{
									"key": "MtxQuantity",
									"value": "1600"
								},
								{
									"key": "MtxBonus",
									"value": "1"
								},
								{
									"key": "IconSize",
									"value": "XSmall"
								},
								{
									"Key": "CurrencyAnalyticsName",
									"Value": "MtxPack1600"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 6,
							"title": "1,600 V-Bucks",
							"shortDescription": "",
							"description": "Complete your purchase by grabbing 1,600 V-Bucks, the in-game currency that can be spent in Fortnite Battle Royale, Creative, and Save the World Modes!  These V-Bucks will immediately be spent on the currently selected offer.",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_MtxPack1000.DA_MtxPack1000",
							"itemGrants": []
						},
						{
							"offerId": "4E51C4C4412F2F12D78A74ABC8AB9063",
							"devName": "600 V-Bucks",
							"offerType": "StaticPrice",
							"prices": [
								{
									"currencyType": "RealMoney",
									"currencySubType": "",
									"regularPrice": 0,
									"dynamicRegularPrice": -1,
									"finalPrice": 0,
									"saleExpiration": "9999-12-31T23:59:59.999Z",
									"basePrice": 0
								}
							],
							"categories": [],
							"dailyLimit": -1,
							"weeklyLimit": -1,
							"monthlyLimit": -1,
							"refundable": false,
							"appStoreId": [
								"",
								"3f62ba5e95f34bf287c06cfd70a8626d",
								"ios_vbucks_600inc",
								"",
								"google_vbucks_600inc",
								"",
								"INC6000000000000",
								"38504e39-4a44-3043-c051-4b5151476500",
								"c-virtualcurrency1-MTX600",
								"sam_vbucks_600inc",
								"9NP8DJCQKQQG",
								"INC6000000000000"
							],
							"requirements": [],
							"metaInfo": [
								{
									"key": "MtxQuantity",
									"value": "600"
								},
								{
									"key": "MtxBonus",
									"value": "1"
								},
								{
									"key": "IconSize",
									"value": "XSmall"
								},
								{
									"Key": "CurrencyAnalyticsName",
									"Value": "MtxPack600"
								}
							],
							"catalogGroup": "",
							"catalogGroupPriority": 0,
							"sortPriority": 6,
							"title": "600 V-Bucks",
							"shortDescription": "",
							"description": "Complete your purchase by grabbing 600 V-Bucks, the in-game currency that can be spent in Fortnite Battle Royale, Creative, and Save the World Modes!  These V-Bucks will immediately be spent on the currently selected offer.",
							"displayAssetPath": "/Game/Catalog/DisplayAssets/DA_MtxPack1000.DA_MtxPack1000",
							"itemGrants": []
						}
					]
				}
			]
})
	res.end();
	//res.sendFile(path.join(__dirname, "../Json/DefaultGame.ini"))
})
module.exports = app