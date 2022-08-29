const fs = require("fs")
const path = require("path")
const shopConfig = require(path.join(__dirname, "../service/shop_config"))
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
                "name": "BRSeason2",
                "catalogEntries": [
                    {
                        "offerId": "C3BA14F04F4D56FC1D490F8011B56553",
                        "devName": "BR.Season2.BattlePass.01",
                        "offerType": "StaticPrice",
                        "prices": [
                            {
                                "currencyType": "MtxCurrency",
                                "currencySubType": "",
                                "regularPrice": 1800,
                                "finalPrice": 950,
                                "saleType": "PercentOff",
                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                "basePrice": 950
                            }
                        ],
                        "categories": [],
                        "dailyLimit": -1,
                        "weeklyLimit": -1,
                        "monthlyLimit": -1,
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
                            ""
                        ],
                        "requirements": [
                            {
                                "requirementType": "DenyOnFulfillment",
                                "requiredId": "2B4936F24F3179416FEFD49DA5C4B64C",
                                "minQuantity": 1
                            }
                        ],
                        "metaInfo": [],
                        "catalogGroup": "",
                        "catalogGroupPriority": 0,
                        "sortPriority": 1,
                        "title": {
                            "de": "Battle Pass",
                            "ru": "Боевой пропуск",
                            "ko": "배틀패스",
                            "zh-hant": "英雄季卡",
                            "pt-br": "Passe de Batalha",
                            "en": "Battle Pass",
                            "it": "Pass battaglia",
                            "fr": "Passe de combat",
                            "zh-cn": "英雄季卡",
                            "es": "Pase de batalla",
                            "ar": "Battle Pass",
                            "ja": "バトルパス",
                            "pl": "Karnet bojowy",
                            "es-419": "Pase de batalla",
                            "tr": "Savaş Bileti"
                        },
                        "shortDescription": "",
                        "description": {
                            "de": "Saison 2: 14. Dezember - 20. Februar\r\n\r\nErhalte sofort diese Gegenstände im Wert von über 2.000 V-Bucks!\r\n  • Blauer Knappe (Outfit)\r\n  • +50 % Saison-Match-EP\r\n  • +10 % Saison-Match-EP für Freunde\r\n  • Zusätzliche tägliche Battle-Pass-Herausforderung\r\n\r\nSpiele weiter und levele deinen Battle Pass auf, um über 65 Belohnungen im Wert von 12.000 V-Bucks freizuschalten (im Normalfall werden 75 bis 150 Spielstunden benötigt). Das dauert dir zu lange? Mit V-Bucks kannst du jederzeit Level kaufen!\r\n  • Schwarzer Ritter und 2 weitere Outfits\r\n  • 3 Erntewerkzeuge\r\n  • 2 Hängegleiter\r\n  • 1.000 V-Bucks\r\n  • +60 % Saison-Match-EP\r\n  • +20 % Saison-Match-EP für Freunde\r\n  • 2 animierte Emotes\r\n  • 13 2D-Emoticons\r\n  • und vieles mehr!",
                            "ru": "Второй сезон: 14 декабря — 20 февраля\r\n\r\nСразу же получите предметы стоимостью более 2000 В-баксов!\r\n  • Экипировка Синего оруженосца;\r\n  • +50% к опыту за матчи сезона;\r\n  • +10% к опыту друзей за матчи сезона;\r\n  • дополнительное ежедневное испытание по боевому пропуску.\r\n\r\nИграйте, повышайте уровень боевого пропуска — и вас ждут более 65 наград суммарной стоимостью 12 000 В-баксов! Обычно, чтобы открыть все награды, требуется 75–120 часов игры; но если вы не хотите ждать, этот процесс можно ускорить за В-баксы.\r\n  • Экипировка Чёрного рыцаря и ещё 2 костюма;\r\n  • 3 кирки;\r\n  • 2 дельтаплана;\r\n  • 1000 В-баксов;\r\n  • +60% к опыту за матчи сезона;\r\n  • +20% к опыту друзей за матчи сезона;\r\n  • 2 анимированных эмоции;\r\n  • 13 эмотиконов;\r\n  • и это ещё не всё!",
                            "ko": "시즌 2: 12월 14일 - 2월 20일\r\n\r\n2000 V-Bucks 이상의 가치가 있는 아이템을 즉시 받아가세요.\r\n  • 청색 견습기사 의상\r\n  • 50% 보너스 시즌 매치 경험치\r\n  • 10% 보너스 시즌 친구 매치 경험치\r\n  • 배틀패스 일일 도전 추가\r\n\r\n게임을 플레이하면서 배틀패스 레벨을 올려보세요. 12,000 V-Bucks의 가치가 있는 65개 이상의 보상을 얻을 수 있습니다(보통 75-150시간 정도 소요). 더 빠르게 달성하고 싶으신가요? V-Bucks를 사용해서 언제든지 레벨을 구매할 수 있습니다!\r\n  • 흑기사 및 의상 2개\r\n  • 수확 도구 3개\r\n  • 글라이더 2개\r\n  • 1000 V-Bucks\r\n  • 60% 보너스 시즌 매치 경험치\r\n  • 20% 보너스 시즌 친구 매치 경험치\r\n  • 애니메이션 이모트 2개\r\n  • 2D 이모트 13개\r\n  • 그 외 혜택!",
                            "zh-hant": "第2賽季：12月14日-2月20日\r\n\r\n立即獲得總值超過2000V幣的下列物品！\r\n•堡壘騎士服裝\r\n•額外50%賽季匹配經驗\r\n•額外10%好友賽季匹配經驗\r\n•追加英雄季卡每日挑戰\r\n\r\n遊玩升級英雄季卡，解鎖價值12000V幣的65個以上獎勵(遊戲時間通常為75至150小時)。想要儘早獲得？你也可以使用V幣隨時購買升級！\r\n•3套服裝\r\n•3個採集工具\r\n•2架滑翔傘\r\n•1000V幣\r\n•額外60%賽季匹配經驗\r\n•額外20%好友賽季匹配經驗\r\n•2個動畫表情\r\n•13個2D表情符號\r\n•還有更多獎勵！",
                            "pt-br": "Temporada 2: 14 de dezembro — 20 de fevereiro\r\n\r\nReceba instantaneamente estes itens avaliados em mais de 2.000 V-Bucks!\r\n  • Traje Escudeiro Azul\r\n  • 50% de Bônus de EXP da Temporada em Partidas\r\n  • 10% de Bônus de EXP da Temporada em Partidas com Amigos\r\n  • Desafio Diário de Passe de Batalha Extra\r\n\r\nJogue para subir o nível do seu Passe de Batalha, desbloqueando mais de 65 recompensas avaliadas em 12.000 V-Bucks (leva em média 75 a 150 horas de jogo). Quer mais rápido? Você pode usar V-Bucks para comprar níveis a qualquer momento!\r\n  • Cavaleiro Negro e mais 2 outros trajes\r\n  • 3 Ferramentas de Coleta\r\n  • 2 Asas-deltas\r\n  • 1.000 V-Bucks\r\n  • 60% de Bônus de EXP da Temporada em Partidas\r\n  • 20% de Bônus de EXP da Temporada em Partidas com Amigos\r\n  • 2 Gestos Animados\r\n  • 13 Gestos 2D\r\n  • e mais!",
                            "en": "Season 2: Dec 14 - Feb 20\r\n\r\nInstantly get these items valued at over 2000 V-Bucks.\r\n  • Blue Squire Outfit\r\n  • 50% Bonus Season Match XP\r\n  • 10% Bonus Season Friend Match XP\r\n  • Extra Battle Pass Daily Challenge\r\n\r\nPlay to level up your Battle Pass, unlocking up to 65+ rewards worth 12,000 V-Bucks (typically takes 75 to 150 hours of play). Want it all faster? You can use V-Bucks to buy levels any time!\r\n  • Black Knight plus 2 other outfits\r\n  • 3 Harvesting Tools\r\n  • 2 Gliders\r\n  • 1000 V-Bucks\r\n  • 60% Bonus Season Match XP\r\n  • 20% Bonus Season Friend Match XP\r\n  • 2 Animated Emotes\r\n  • 13 2D Emotes\r\n  • and more!",
                            "it": "Stagione 2: 14 dic. - 20 feb.\r\n\r\nOttieni subito una valutazione di questi oggetti a 2000 V-buck!\r\n  • Costume Scudiero blu\r\n  • Bonus del 50% dei PE partite stagionali\r\n  • Bonus del 10% dei PE partite amico\r\n  • Sfida giornaliera Pass battaglia extra\r\n\r\nGioca per aumentare di livello il tuo Pass battaglia, sbloccando fino a 65+ ricompense dal valore di 12.000 V-buck (necessarie tra le 75-150 ore di gioco). Vuoi tutto più in fretta? Puoi usare i V-buck per acquistare i livelli in qualsiasi momento!\r\n  • Cavaliere nero e altri 2 costumi\r\n  • 3 strumenti di raccolta\r\n  • 2 deltaplani\r\n  • 1000 V-buck\r\n  • Bonus del 60% dei PE partite stagionali\r\n  • Bonus del 20% dei PE partite amico\r\n  • 2 emoticon animate\r\n  • 13 emoticon 2D\r\n  • e molto altro ancora!",
                            "fr": "Saison 2 : 14 déc. - 20 fév.\r\n\r\nRecevez immédiatement ces objets d'une valeur supérieure à 2000 V-bucks.\r\n • Tenue d'écuyer bleu\r\n • Bonus d'EXP de saison de 50%\r\n • Bonus d'EXP de saison de 10% pour des amis\r\n • Un défi quotidien du Passe de combat supplémentaire\r\n\r\nJouez pour augmenter le niveau de votre Passe de combat et déverrouiller plus de 65 récompenses d'une valeur de 12 000 V-bucks (nécessitant de 75 à 150 heures de jeu). Envie d'aller plus vite ? Utilisez vos V-bucks pour acheter des niveaux à tout moment !\r\n • Chevalier noir, ainsi que deux autres tenues\r\n • 3 outils de collecte\r\n • 2 planeurs\r\n • 1000 V-bucks\r\n • Bonus d'EXP de saison de 60%\r\n • Bonus d'EXP de saison de 20% pour des amis\r\n • 2 emotes animées\r\n • 13 emotes en 2D\r\n • Et plus !",
                            "zh-cn": "第2赛季：12月14日-2月20日\r\n\r\n立即获得总值超过2000V币的下列物品！\r\n•堡垒骑士服装\r\n•额外50%赛季匹配经验\r\n•额外10%好友赛季匹配经验\r\n•追加英雄季卡每日挑战\r\n\r\n游玩升级英雄季卡，解锁价值12000V币的65个以上奖励(游戏时间通常为75至150小时)。想要尽早获得？你也可以使用V币随时购买升级！\r\n•3套服装\r\n•3个采集工具\r\n•2架滑翔伞\r\n•1000V币\r\n•额外60%赛季匹配经验\r\n•额外20%好友赛季匹配经验\r\n•2个动画表情\r\n•13个2D表情符号\r\n•还有更多奖励！ ",
                            "es": "Temporada 2: 14 dic - 20 feb\r\n\r\nConsigue instantáneamente estos objetos valorados en más de 2000 paVos.\r\n  • Traje de escudero azul.\r\n  • Bonificación de PE de partida de temporada del 50%.\r\n  • Bonificación de PE de partida amistosa de temporada del 10%.\r\n  • Desafío diario del pase de batalla adicional.\r\n\r\nJuega para subir de nivel tu pase de batalla y desbloquea más de 65 recompensas con un valor de 12000 paVos (suele llevar entre 75 y 150 horas de juego). ¿Lo quieres más rápido? ¡Puedes usar paVos para subir de nivel siempre que quieras!\r\n  • Caballero negro más otros 2 trajes.\r\n  • 3 herramientas de recolección.\r\n  • 2 alas delta.\r\n  • 1000 paVos.\r\n  • Bonificación de PE de partida de temporada del 60%.\r\n  • Bonificación de PE de partida amistosa de temporada del 20%.\r\n  • 2 gestos animados.\r\n  • 13 gestos 2D.\r\n  • ¡Y mucho más!",
                            "ar": "Season 2: Dec 14 - Feb 20\r\n\r\nInstantly get these items valued at over 2000 V-Bucks.\r\n  • Blue Squire Outfit\r\n  • 50% Bonus Season Match XP\r\n  • 10% Bonus Season Friend Match XP\r\n  • Extra Battle Pass Daily Challenge\r\n\r\nPlay to level up your Battle Pass, unlocking up to 65+ rewards worth 12,000 V-Bucks (typically takes 75 to 150 hours of play). Want it all faster? You can use V-Bucks to buy levels any time!\r\n  • Black Knight plus 2 other outfits\r\n  • 3 Harvesting Tools\r\n  • 2 Gliders\r\n  • 1000 V-Bucks\r\n  • 60% Bonus Season Match XP\r\n  • 20% Bonus Season Friend Match XP\r\n  • 2 Animated Emotes\r\n  • 13 2D Emotes\r\n  • and more!",
                            "ja": "シーズン2: 12月14日～2月20日\r\n\r\n2000 V-Bucks分のアイテムをすぐに入手しましょう。\r\n  ・ブルースクワイアー\r\n  ・シーズンマッチXPの50%ボーナス\r\n  ・シーズンフレンドマッチXPの10%ボーナス\r\n  ・追加のバトルパス・デイリーチャレンジ\r\n\r\nプレイしてバトルパスのレベルを上げると、12000 V-Bucks分の報酬を最大65個以上アンロックできます(およそ75～150時間程度のプレイが必要)。すぐに報酬が欲しい場合は、V-Bucksでいつでもティアを購入することができます！\r\n  ・ブラックナイトコスチュームとさらに他のコスチューム2点\r\n  ・収集ツールx3\r\n  ・グライダーx2\r\n  ・1000 V-Bucks\r\n  ・シーズンマッチXPの60%ボーナス\r\n  ・シーズンフレンドマッチXPの20%ボーナス\r\n  • 動くエモートx2\r\n  ・2Dエモートx13\r\n  ・他にも色々！",
                            "pl": "Sezon 2: 14 grudnia - 20 lutego\r\n\r\nOtrzymasz od razu poniższe przedmioty o wartości ponad 2000 V-dolców!\r\n  • Strój: „Niebieski Giermek”\r\n  • Sezonowa premia +50% PD za grę\r\n  • Sezonowa premia +10% PD za grę ze znajomym\r\n  • Dodatkowe wyzwanie dnia z karnetu bojowego\r\n\r\nGraj dalej, aby awansować karnet bojowy i zdobyć ponad 65 kolejnych nagród o wartości ponad 12 000 V-dolców (ich zebranie normalnie zajmuje od 75 do 150 godz. gry). Chcesz się rozwijać szybciej? W każdej chwili możesz kupić poziomy za V-dolce!\r\n  • Czarny Rycerz plus 2 inne stroje\r\n  • 3 zbieraki\r\n  • 2 lotnie\r\n  • 1000 V-dolców\r\n  • Sezonowa premia +60% PD za grę\r\n  • Sezonowa premia +20% PD za grę ze znajomym\r\n  • 2 animowane emotki\r\n  • 13 emotek 2D\r\n  • I dużo więcej!",
                            "es-419": "Temporada 2: 14 dic - 20 feb\r\n\r\n¡Obtén al instante estos objetos que cuestan más de 2000 monedas V!\r\n  • Atuendo Escudero azul\r\n  • 50 % de bonificación de PE para partidas de la temporada\r\n  • 10 % de bonificación de PE para partidas con amigos en la temporada\r\n  • Desafío diario de pase de batalla adicional\r\n\r\nJuega para subir de nivel tu pase de batalla y desbloquea hasta más de 65 recompensas con un valor de 12.000 monedas V (esto lleva entre 75 y 150 horas de juego). ¿Lo quieres todo más rápido? ¡Puedes utilizar monedas V para comprar niveles cuando quieras!\r\n  • Caballero negro más otros 2 atuendos\r\n  • 3 herramientas de recolección\r\n  • 2 planeadores\r\n  • 1000 monedas V\r\n  • 60 % de bonificación de PE para partidas de la temporada\r\n  • 20 % de bonificación de PE para partidas con amigos en la temporada\r\n  • 2 gestos animados\r\n  • 13 gestos 2D\r\n  • ¡Y mucho más!",
                            "tr": "2. Sezon: 14 Aralık - 20 Şubat\r\n\r\n2000 V-Papel’in üzerinde değeri olan bu içeriklere hemen sahip ol.\r\n  • Mavi Şövalye Kıyafeti\r\n  • %50 Bonus Sezonluk Maç TP'si\r\n  • %10 Bonus Sezonluk Arkadaş Maçı TP'si\r\n  • İlave Savaş Bileti Günlük Görevi\r\n\r\nOynayarak Savaş Bileti’nin seviyesini yükselt ve 12.000 V-Papel değerindeki (normalde 75-150 saat oynayarak elde edilebilen) 65'in üzerinde ödülün kilidini aç. Hepsine daha çabuk mu sahip olmak istiyorsun? İstediğin zaman aşama satın almak için V-Papel kullanabilirsin!\r\n  • Kara Şövalye ve 2 kıyafet daha\r\n  • 3 Toplama Aleti\r\n  • 2 Planör\r\n  • 1000 V-Papel\r\n  • %60 Bonus Sezonluk Maç TP'si\r\n  • %20 Bonus Sezonluk Arkadaş Maçı TP'si\r\n  • 2 Animasyonlu İfade\r\n  • 13 2B İfade\r\n  • ve daha fazlası!"
                        },
                        "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_BR_Season2_BattlePass.DA_BR_Season2_BattlePass",
                        "itemGrants": []
                    },
                    {
                        "offerId": "F86AC2ED4B3EA4B2D65EF1B2629572A0",
                        "devName": "BR.Season2.SingleTier.01",
                        "offerType": "StaticPrice",
                        "prices": [
                            {
                                "currencyType": "MtxCurrency",
                                "currencySubType": "",
                                "regularPrice": 150,
                                "finalPrice": 150,
                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                "basePrice": 150
                            }
                        ],
                        "categories": [],
                        "dailyLimit": -1,
                        "weeklyLimit": -1,
                        "monthlyLimit": -1,
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
                            ""
                        ],
                        "requirements": [],
                        "metaInfo": [],
                        "catalogGroup": "",
                        "catalogGroupPriority": 0,
                        "sortPriority": 0,
                        "title": {
                            "de": "Battle-Pass-Level",
                            "ru": "Уровень боевого пропуска",
                            "ko": "배틀패스 레벨",
                            "zh-hant": "英雄季卡戰階",
                            "pt-br": "Nível de Passe de Batalha",
                            "en": "Battle Pass Level",
                            "it": "Livello Pass battaglia",
                            "fr": "Niveau de Passe de combat",
                            "zh-cn": "英雄季卡战阶",
                            "es": "Pase de batalla de nivel",
                            "ar": "Battle Pass Level",
                            "ja": "バトルバスレベル",
                            "pl": "Poziom karnetu bojowego",
                            "es-419": "Nivel de pase de batalla",
                            "tr": "Savaş Bileti Aşaması"
                        },
                        "shortDescription": "",
                        "description": {
                            "de": "Hol dir jetzt tolle Belohnungen!",
                            "ru": "Получите отличные награды!",
                            "ko": "지금 푸짐한 보상을 얻어보세요!",
                            "zh-hant": "現在獲得豐厚獎勵！",
                            "pt-br": "Ganhe recompensas ótimas agora!",
                            "en": "Get great rewards now!",
                            "it": "Ricevi subito magnifiche ricompense!",
                            "fr": "Obtenez de grandes récompenses !",
                            "zh-cn": "现在获得丰厚奖励！",
                            "es": "¡Consigue recompensas increíbles!",
                            "ar": "Get great rewards now!",
                            "ja": "ステキな報酬を今すぐゲット！",
                            "pl": "Zdobądź super nagrody już teraz!",
                            "es-419": "¡Consigue grandes recompensas ahora!",
                            "tr": "Harika ödüllerin sahibi ol!"
                        },
                        "displayAssetPath": "",
                        "itemGrants": []
                    }
                ]
            },
            {
                "name": "BRSeason3",
                "catalogEntries": [
                    {
                        "offerId": "70487F4C4673CC98F2FEBEBB26505F44",
                        "devName": "BR.Season3.BattleBundle.01",
                        "offerType": "StaticPrice",
                        "prices": [
                            {
                                "currencyType": "MtxCurrency",
                                "currencySubType": "",
                                "regularPrice": 4700,
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
                            ""
                        ],
                        "requirements": [
                            {
                                "requirementType": "DenyOnFulfillment",
                                "requiredId": "2B4936F24F3179416FEFD49DA5C4B64B",
                                "minQuantity": 1
                            }
                        ],
                        "metaInfo": [],
                        "catalogGroup": "",
                        "catalogGroupPriority": 0,
                        "sortPriority": 0,
                        "title": {
                            "de": "Battle-Pass-Paket",
                            "ru": "Боевой комплект",
                            "ko": "배틀번들",
                            "zh-hant": "戰鬥套組",
                            "pt-br": "Pacotão de Batalha",
                            "en": "Battle Bundle",
                            "it": "Nuovo pacchetto battaglia",
                            "fr": "Pack de combat",
                            "zh-cn": "战斗套组",
                            "es": "Lote de batalla",
                            "ar": "Battle Bundle",
                            "ja": "バトルバンドル",
                            "pl": "Zestaw bojowy",
                            "es-419": "Paquete de batalla",
                            "tr": "Savaş Paketi"
                        },
                        "shortDescription": {
                            "de": "Battle Pass + 25 Stufen!",
                            "ru": "Боевой пропуск + 25 уровней!",
                            "ko": "배틀패스 + 25티어!",
                            "zh-hant": "英雄季卡增加25戰階！",
                            "pt-br": "Passe de Batalha + 25 categorias!",
                            "en": "Battle pass + 25 tiers!",
                            "it": "Pass battaglia + 25 livelli!",
                            "fr": "Passe de combat + 25 paliers !",
                            "zh-cn": "英雄季卡增加25战阶！",
                            "es": "¡Pase de batalla y 25 niveles!",
                            "ar": "Battle pass + 25 tiers!",
                            "ja": "バトルパス+25ティア！",
                            "pl": "Karnet bojowy + 25 stopni!",
                            "es-419": "¡Pase de batalla + 25 niveles!",
                            "tr": "Savaş Bileti + 25 aşama!"
                        },
                        "description": {
                            "de": "Saison 3: 22. Februar – 30. April\r\n\r\nErhalte sofort diese Gegenstände im Wert von über 8.000 V-Bucks.\r\n  • Missionsspezialist (Outfit)\r\n  • Rostmeister (Outfit)\r\n  • Sägezahn (Erntewerkzeug)\r\n  • Regenbogenritt (Hängegleiter)\r\n  • Regenbogen (Flugspur)\r\n  • +70 % Saison-Match-EP\r\n  • +20 % Saison-Match-EP für Freunde\r\n  • Zugang zu Wöchentlichen Herausforderungen\r\n  • und noch mehr!\r\n\r\nSpiele weiter und stufe deinen Battle Pass auf, um über 75 weitere Belohnungen freizuschalten (im Normalfall werden dafür 75 bis 150 Spielstunden benötigt). Das dauert dir zu lange? Mit V-Bucks kannst du jederzeit Stufen kaufen!\r\n  • Der Sensenmann und 3 weitere Outfits\r\n  • 1 Erntewerkzeug\r\n  • 1 Hängegleiter\r\n  • 2 Rücken-Accessoires\r\n  • 4 Flugspuren\r\n  • 1.300 V-Bucks\r\n  • und noch eine ganze Menge mehr!",
                            "ru": "Третий сезон: 22 февраля — 30 апреля\r\n\r\nСразу же получите предметы стоимостью более 8000 В-баксов!\r\n  • Экипировка «Миссия выполнима»;\r\n  • Экипировка «Повелитель ржавчины»;\r\n  • Кирка «Пилозуб»;\r\n  • Дельтаплан «Радужный гонщик»;\r\n  • Радужный след при падении;\r\n  • +70% к опыту за матчи сезона;\r\n  • +20% к опыту друзей за матчи сезона;\r\n  • доступ к еженедельным испытаниям.\r\n  • и это не всё!\r\n\r\nИграйте, повышайте уровень боевого пропуска — и вас ждут более 75 наград. Обычно, чтобы открыть все награды, требуется 75–150 часов игры; но если вы не хотите ждать, этот процесс можно ускорить за В-баксы.\r\n • Экипировка «Душегуб» и ещё 3 костюма;\r\n  • 1 кирка;\r\n  • 1 дельтаплан;\r\n  • 2 украшения на спину;\r\n  • 4 воздушных следа при падении;\r\n  • 1300 В-баксов;\r\n  • и это ещё не всё!",
                            "ko": "시즌 3: 2월 22일 - 4월 30일\r\n\r\n8000 V-Bucks 이상의 가치가 있는 여러 아이템을 즉시 받아가세요.\r\n  • 우주선 비행사 의상\r\n  • 고철왕 의상\r\n  • 톱날 수확 도구\r\n  • 무지개 글라이더\r\n  • 무지개 스카이다이빙 트레일\r\n  • 70% 보너스 시즌 매치 XP\r\n  • 20% 보너스 시즌 친구 매치 XP\r\n  • 주간 도전 이용 권한\r\n\r\n배틀패스 티어를 올려서 최대 75개 이상의 보상을 얻으세요(보통 75-150시간 소요). 더 빨리 얻고 싶으신가요? V-Bucks를 사용해서 언제든지 티어를 구매할 수 있습니다!\r\n  • 사신 의상 및 다른 의상 3개\r\n  • 수확 도구 1개\r\n  • 글라이더 1개\r\n  • 등 장신구 2개\r\n  • 스카이다이빙 트레일 4개\r\n  • 1300 V-Bucks\r\n  • 그 외 많은 혜택!",
                            "zh-hant": "第3賽季：2月22日——4月30日\r\n\r\n立即獲得這些價值8000V幣的物品。\r\n  • 任務專家服裝\r\n  • 廢土領主服裝\r\n  • 鋸齒採集工具\r\n  • 彩虹騎士滑翔傘\r\n  • 彩虹滑翔軌跡\r\n  • 70%額外賽季比賽經驗\r\n  • 20%額外賽季好友比賽經驗\r\n  •獲得每週挑戰許可權\r\n  •以及更多！\r\n\r\n通過遊玩提升英雄季卡戰階，解鎖75個以上獎勵(通常需要75到150個小時的遊玩時間)。希望更快嗎？你可以隨時使用V幣購買戰階！\r\n  •收割者以及其他3套服裝\r\n  • 1個採集工具\r\n  • 1個滑翔傘\r\n  • 2個背部裝飾\r\n  • 4個滑翔軌跡\r\n  • 1300V幣\r\n  • 以及更多獎勵！",
                            "pt-br": "Temporada 3: 22 de fevereiro — 30 de abril\r\n\r\nReceba instantaneamente estes itens avaliados em mais de 8.000 V-Bucks!\r\n  • Traje Especialista em Missão\r\n  • Traje Lorde da Ferrugem\r\n  • Ferramenta de Coleta Dente Serrilhado\r\n  • Asa-delta Arco-íris\r\n  • Rastro de Queda Livre Arco-íris\r\n  • 70% de Bônus de EXP da Temporada em Partidas\r\n  • 20% de Bônus de EXP da Temporada em Partidas com Amigos\r\n  • Acesso a Desafios Semanais\r\n  • e mais!\r\n\r\nJogue para subir o nível do seu Passe de Batalha, desbloqueando mais de 75 recompensas (leva em média 75 a 150 horas de jogo). Quer mais rápido? Você pode usar V-Bucks para comprar categorias a qualquer momento!\r\n  • O Ceifador e mais 3 outros trajes\r\n  • 1 Ferramenta de Coleta\r\n  • 1 Asa-delta\r\n  • 2 Acessórios para as Costas\r\n  • 4 Rastros de Queda Livre\r\n  • 1.300 V-Bucks\r\n  • e muito mais!",
                            "en": "Season 3: Feb 22 - April 30\r\n\r\nInstantly get these items valued at over 8000 V-Bucks.\r\n  • Mission Specialist Outfit\r\n  • Rust Lord Outfit\r\n  • Sawtooth Harvesting Tool\r\n  • Rainbow Rider Glider\r\n  • Rainbow Skydiving Trail\r\n  • 70% Bonus Season Match XP\r\n  • 20% Bonus Season Friend Match XP\r\n  • Access to Weekly Challenges\r\n  • and more!\r\n\r\nPlay to level up your Battle Pass, unlocking up to 75+ more rewards (typically takes 75 to 150 hours of play). Want it all faster? You can use V-Bucks to buy tiers any time!\r\n  • The Reaper plus 3 other outfits\r\n  • 1 Harvesting Tool\r\n  • 1 Glider\r\n  • 2 Back Blings\r\n  • 4 Skydiving Trails\r\n  • 1300 V-Bucks\r\n  • and so much more!",
                            "it": "Stagione 3: 22 feb. - 30 apr.\r\n\r\nOttieni subito questi oggetti dal valore di oltre 8000 V-buck!\r\n  • Costume Specialista di missione\r\n  • Costume Signore della ruggine\r\n  • Strumento di raccolta Dente di sega\r\n  • Deltaplano Fantino arcobaleno\r\n  • Scia Volo dell'arcobaleno\r\n  • Bonus del 70% dei PE partite stagionali\r\n  • Bonus del 20% dei PE partite amico\r\n  • Accesso alle sfide settimanali\r\n  • ...e molto altro ancora!\r\n\r\nGioca per aumentare di livello il tuo Pass battaglia, sbloccando oltre 75 ricompense (necessarie tra le 75-150 ore di gioco). Vuoi tutto più in fretta? Puoi usare i V-buck per acquistare i livelli in qualsiasi momento!\r\n  • Il Mietitore e altri 3 costumi\r\n  • 1 strumento di raccolta\r\n  • 1 deltaplano\r\n  • 2 Dorsi decorativi\r\n  • 4 Scie Skydive\r\n  • 1300 V-buck\r\n • ...e molto altro ancora!",
                            "fr": "Saison 3 : 22 février - 30 avril\r\n\r\nRecevez immédiatement ces objets d'une valeur supérieure à 8000 V-bucks.\r\n  • Tenue de Spationaute\r\n  • Tenue de Roi de la rouille\r\n  • Outil de collecte Dent de scie\r\n  • Planeur magique\r\n  • Traînée de condensation Arc-en-ciel\r\n  • Bonus d'EXP de saison de 70%\r\n  • Bonus d'EXP de saison de 20% pour des amis\r\n  • L'accès aux défis hebdomadaires\r\n  • Et plus !\r\n\r\n Jouez pour augmenter le niveau de votre Passe de combat et déverrouiller plus de 75 récompenses (nécessitant de 75 à 150 heures de jeu). Envie d'aller plus vite ? Utilisez vos V-bucks pour acheter des niveaux à tout moment !\r\n  • Le Faucheur, ainsi que 3 autres tenues\r\n  • 1 outil de collecte\r\n  • 1 planeur\r\n  • 2 accessoires de dos\r\n  • 4 traînées de condensation\r\n  • 1300 V-bucks\r\n  • Et plus !",
                            "zh-cn": "第3赛季：2月22日——4月30日\r\n\r\n立即获得这些价值8000V币的物品。\r\n  • 任务专家服装\r\n  • 废土领主服装\r\n  • 锯齿采集工具\r\n  • 彩虹骑士滑翔伞\r\n  • 彩虹滑翔轨迹\r\n  • 70%额外赛季比赛经验\r\n  • 20%额外赛季好友比赛经验\r\n  •获得每周挑战权限\r\n  •以及更多！\r\n\r\n通过游玩提升英雄季卡战阶，解锁75个以上奖励(通常需要75到150个小时的游玩时间)。希望更快吗？你可以随时使用V币购买战阶！\r\n  •收割者以及其他3套服装\r\n  • 1个采集工具\r\n  • 1个滑翔伞\r\n  • 2个背部装饰\r\n  • 4个滑翔轨迹\r\n  • 1300V币\r\n  • 以及更多奖励！",
                            "es": "Temporada 3: 22 feb - 30 abr\r\n\r\nConsigue instantáneamente estos objetos valorados en más de 8000 paVos.\r\n  • Traje de especialista en misiones.\r\n  • Traje de señor del óxido.\r\n  • Herramienta de recolección dientes de sierra.\r\n  • Ala delta jinete arcoíris.\r\n  • Estela de descenso arcoíris.\r\n  • Bonificación de PE de partida de temporada del 70%.\r\n  • Bonificación de PE de partida amistosa de temporada del 20%.\r\n  • Acceso a los desafíos semanales.\r\n  • ¡Y mucho más!\r\n\r\nJuega para subir de nivel tu pase de batalla y desbloquea más de 75 recompensas (suele llevar entre 75 y 150 horas de juego). ¿Lo quieres más rápido? ¡Puedes usar paVos para comprar niveles siempre que quieras!\r\n  • Señor Muerte más otros 3 trajes.\r\n  • 1 herramienta de recolección.\r\n  • 1 ala delta.\r\n  • 2 popurrí de regalitos.\r\n  • 4 estelas de descenso.\r\n  • 1300 paVos.\r\n  • ¡Y mucho más!",
                            "ar": "Season 3: Feb 22 - April 30\r\n\r\nInstantly get these items valued at over 8000 V-Bucks.\r\n  • Mission Specialist Outfit\r\n  • Rust Lord Outfit\r\n  • Sawtooth Harvesting Tool\r\n  • Rainbow Rider Glider\r\n  • Rainbow Skydiving Trail\r\n  • 70% Bonus Season Match XP\r\n  • 20% Bonus Season Friend Match XP\r\n  • Access to Weekly Challenges\r\n  • and more!\r\n\r\nPlay to level up your Battle Pass, unlocking up to 75+ more rewards (typically takes 75 to 150 hours of play). Want it all faster? You can use V-Bucks to buy tiers any time!\r\n  • The Reaper plus 3 other outfits\r\n  • 1 Harvesting Tool\r\n  • 1 Glider\r\n  • 2 Back Blings\r\n  • 4 Skydiving Trails\r\n  • 1300 V-Bucks\r\n  • and so much more!",
                            "ja": "シーズン3: 2月22日～4月30日\r\n\r\n8000 V-Bucks以上の価値があるアイテムをすぐに手に入れよう。\r\n  ・ミッションスペシャリストコスチューム\r\n  ・ジャンクロードコスチューム\r\n  ・ジャンクアックス収集ツール\r\n  ・レインボーライダーグライダー\r\n  ・レインボースカイダイビングトレイル\r\n  ・シーズンマッチXPの70%ボーナス\r\n  ・シーズンフレンドマッチXPの20%ボーナス\r\n  ・ウィークリーチャレンジへの挑戦権\r\n  ・他にも色々！\r\n\r\nたくさんプレイしてバトルパスのレベルを上げると、75以上の報酬をアンロックできます(およそ75～150時間程度のプレイが必要)。すぐに報酬が欲しい場合は、V-Bucksでいつでもティアを購入することができます！\r\n  ・ザ・リーパーコスチュームとさらに他のコスチューム3点\r\n  ・収集ツールx1\r\n  ・グライダーx1\r\n  ・バックアクセサリーx2\r\n  ・スカイダイビングトレイルx4\r\n  ・1300 V-Bucks\r\n  ・他にも色々！",
                            "pl": "Sezon 3: 22 lutego - 30 kwietnia\r\n\r\nOtrzymasz od razu poniższe przedmioty o wartości ponad 8000 V-dolców!\r\n  • Strój: Specjalista od Zadań\r\n  • Strój: Rdzawy Lord\r\n  • Lotnia Jeźdźca Tęczy\r\n  • Sezonowa premia +70% PD za grę\r\n  • Sezonowa premia +20% PD za grę ze znajomym\r\n  • Dodatkowe wyzwanie dnia z karnetu bojowego\r\n\r\nGraj dalej, aby awansować karnet bojowy i zdobyć ponad 75 kolejnych nagród (ich zebranie normalnie zajmuje od 75 do 150 godz. gry). Chcesz się rozwijać szybciej? W każdej chwili możesz kupić poziomy za V-dolce!\r\n  • Żniwiarz plus 3 inne stroje\r\n  • 1 zbierak\r\n  • 1 lotnia\r\n  • 2 plecaki\r\n  • 4 smugi lotni\n  • 1300 V-dolców\r\n  • I dużo więcej!",
                            "es-419": "Temporada 3: Del 22 de feb. al 30 de abr.\r\n\r\n¡Obtén al instante estos objetos que cuestan más de 8000 monedas V!\r\n  • Atuendo Especialista de misión\r\n  • Atuendo Señor del óxido\r\n  • Herramienta de recolección Dientes de sierra\r\n  • Planeador Jinete de arcoíris\r\n  • Rastro de caída libre Arcoíris\r\n  • 70% de bonificación de PE para partidas de la temporada\r\n  • 20 % de PE de bonificación para partidas con amigos en la temporada\r\n  • Acceso a los desafíos semanales\r\n  • ¡Y mucho más!\r\n\r\nJuega para subir de nivel tu pase de batalla y desbloquear más de 75 recompensas (esto lleva entre 75 y 150 horas de juego). ¿Lo quieres todo más rápido? ¡Puedes utilizar monedas V para comprar niveles cuando quieras!\r\n  • Segador más otros 3 atuendos\r\n  • 1 herramienta de recolección\r\n  • 1 planeador\r\n  • 2 mochilas retro\r\n  • 4 rastros de caída libre\r\n  • 1300 monedas V\r\n  • ¡Y mucho más!",
                            "tr": "3. Sezon: 22 Şubat - 30 Nisan\r\n\r\n8000 V-Papel’in üzerinde değeri olan bu içerikleri hemen edin.\r\n  • Görev Uzmanı Kıyafeti\r\n  • Pasın Efendisi Kıyafeti\r\n  • Testere Dişli Kazma\r\n  • Gökkuşağının Kanatları Planörü\r\n  • %70 Bonus Sezon Maçı TP’si\r\n  • %20 Bonus Sezon Arkadaş Maçı TP’si\r\n  • Haftalık Görevlere Erişim\r\n  • ve daha pek çok şey!\r\n\r\nSavaş Bileti’nin seviyesini yükseltmek için oyna, 75’ten fazla ödülü aç (75-150 saat arası vakit alabilir)! Hepsini daha mı çabuk istiyorsun? V-Papel kullanarak aşamaları istediğin zaman açabilirsin!\r\n  • Ölüm Meleği ve 3 kıyafet daha\r\n  • 1 Toplama Aleti\r\n  • 1 Planör\r\n  • 2 Sırt Süsü\r\n • 4 Dalış İzi\r\n • 1300 V-Papel\r\n  • ve dahası!"
                        },
                        "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_BR_Season3_BattlePassWithLevels.DA_BR_Season3_BattlePassWithLevels",
                        "itemGrants": []
                    },
                    {
                        "offerId": "2331626809474871A3A44C47C1D8742E",
                        "devName": "BR.Season3.BattlePass.01",
                        "offerType": "StaticPrice",
                        "prices": [
                            {
                                "currencyType": "MtxCurrency",
                                "currencySubType": "",
                                "regularPrice": 950,
                                "finalPrice": 950,
                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                "basePrice": 950
                            }
                        ],
                        "categories": [],
                        "dailyLimit": -1,
                        "weeklyLimit": -1,
                        "monthlyLimit": -1,
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
                            ""
                        ],
                        "requirements": [
                            {
                                "requirementType": "DenyOnFulfillment",
                                "requiredId": "2B4936F24F3179416FEFD49DA5C4B64B",
                                "minQuantity": 1
                            }
                        ],
                        "metaInfo": [],
                        "catalogGroup": "",
                        "catalogGroupPriority": 0,
                        "sortPriority": 1,
                        "title": {
                            "de": "Battle Pass",
                            "ru": "Боевой пропуск",
                            "ko": "배틀패스",
                            "zh-hant": "英雄季卡",
                            "pt-br": "Passe de Batalha",
                            "en": "Battle Pass",
                            "it": "Pass battaglia",
                            "fr": "Passe de combat",
                            "zh-cn": "英雄季卡",
                            "es": "Pase de batalla",
                            "ar": "Battle Pass",
                            "ja": "バトルパス",
                            "pl": "Karnet bojowy",
                            "es-419": "Pase de batalla",
                            "tr": "Savaş Bileti"
                        },
                        "shortDescription": {
                            "de": "Saison 3",
                            "ru": "Сезон 3",
                            "ko": "시즌 3",
                            "zh-hant": "第3季度",
                            "pt-br": "Temporada 3",
                            "en": "Season 3",
                            "it": "Stagione 3",
                            "fr": "Saison 3",
                            "zh-cn": "第3赛季",
                            "es": "Temporada 3",
                            "ar": "Season 3",
                            "ja": "シーズン3",
                            "pl": "Sezon 3",
                            "es-419": "Temporada 3",
                            "tr": "3. Sezon"
                        },
                        "description": {
                            "de": "Saison 3: 22. Februar – 30. April\r\n\r\nErhalte sofort diese Gegenstände im Wert von über 2.000 V-Bucks.\r\n  • Missionsspezialist (Outfit)\r\n  • +50 % Saison-Match-EP\r\n  • +10 % Saison-Match-EP für Freunde\r\n  • Zugang zu Wöchentlichen Herausforderungen\r\n\r\nSpiele weiter und stufe deinen Battle Pass auf, um bis zu 100 Belohnungen freizuschalten (im Normalfall werden dafür 75 bis 150 Spielstunden benötigt). Das dauert dir zu lange? Mit V-Bucks kannst du jederzeit Stufen kaufen!\r\n  • Der Sensenmann und 4 weitere Outfits\r\n  • 2 Erntewerkzeuge\r\n  • 2 Hängegleiter\r\n  • 2 Rücken-Accessoires\r\n  • 5 Flugspuren\r\n  • 1.300 V-Bucks\r\n  • und noch eine ganze Menge mehr!",
                            "ru": "Третий сезон: 22 февраля — 30 апреля\r\n\r\nСразу же получите предметы стоимостью более 2000 В-баксов!\r\n  • Экипировка «Миссия выполнима»;\r\n  • +50% к опыту за матчи сезона;\r\n  • +10% к опыту друзей за матчи сезона;\r\n  • доступ к еженедельным испытаниям.\r\n\r\nИграйте, повышайте уровень боевого пропуска — и вас ждут до 100 наград. Обычно, чтобы открыть все награды, требуется 75–150 часов игры; но если вы не хотите ждать, этот процесс можно ускорить за В-баксы.\r\n  • Экипировка «Душегуб» и ещё 4 костюма;\r\n  • 2 кирки;\r\n  • 2 дельтаплана;\r\n  • 2 украшения на спину;\r\n  • 5 воздушных следов при падении;\r\n  • 1300 В-баксов;\r\n  • и это ещё не всё!",
                            "ko": "시즌 3: 2월 22일 - 4월 30일\r\n\r\n2000 V-Bucks 이상의 가치가 있는 여러 아이템을 즉시 받아가세요.\r\n  • 우주선 비행사 의상\r\n  • 50% 보너스 시즌 매치 XP\r\n  • 10% 보너스 시즌 친구 매치 XP\r\n  • 주간 도전 이용 권한\r\n\r\n배틀패스 티어를 올려서 최대 100개의 보상을 얻으세요(보통 75-150시간 소요). 더 빨리 얻고 싶으신가요? V-Bucks를 사용해서 언제든지 티어를 구매할 수 있습니다!\r\n  • 사신 의상 및 다른 의상 4개\r\n  • 수확 도구 2개\r\n  • 글라이더 2개\r\n  • 등 장신구 2개\r\n  • 스카이다이빙 트레일 5개\r\n  • 1300 V-Bucks\r\n  • 그 외 많은 혜택!",
                            "zh-hant": "第3賽季：2月22日——4月30日\r\n\r\n立即獲得這些價值2000V幣的物品。\r\n  • 任務專家服裝\r\n  • 50% 額外賽季比賽經驗\r\n  • 10%額外賽季好友比賽經驗\r\n  •獲得每週挑戰許可權\r\n\r\n通過遊玩提升英雄季卡戰階，解鎖100多個獎勵(通常需要75到150個小時的遊玩時間)。希望更快嗎？你可以隨時使用V幣購買戰階！\r\n  •收割者以及其他4套服裝\r\n  • 2個採集工具\r\n  • 2個滑翔傘\r\n  • 2個背部裝飾\r\n  • 5個滑翔軌跡\r\n  • 1300V幣\r\n  • 以及更多獎勵！",
                            "pt-br": "Temporada 3: 22 de fevereiro — 30 de abril\r\n\r\nReceba instantaneamente estes itens avaliados em mais de 2.000 V-Bucks!\r\n  • Traje Especialista em Missão\r\n  • 50% de Bônus de EXP da Temporada em Partidas\r\n  • 10% de Bônus de EXP da Temporada em Partidas com Amigos\r\n  • Acesso a Desafios Semanais\r\n\r\nJogue para subir o nível do seu Passe de Batalha, desbloqueando até 100 recompensas (leva em média 75 a 150 horas de jogo). Quer mais rápido? Você pode usar V-Bucks para comprar categorias a qualquer momento!\r\n  • O Ceifador e mais 4 outros trajes\r\n  • 2 Ferramentas de Coleta\r\n  • 2 Asas-deltas\r\n  • 2 Acessórios para as Costas\r\n  • 5 Rastros de Queda Livre\r\n  • 1.300 V-Bucks\r\n  • e muito mais!",
                            "en": "Season 3: Feb 22 - April 30\r\n\r\nInstantly get these items valued at over 2000 V-Bucks.\r\n  • Mission Specialist Outfit\r\n  • 50% Bonus Season Match XP\r\n  • 10% Bonus Season Friend Match XP\r\n  • Access to Weekly Challenges\r\n\r\nPlay to level up your Battle Pass, unlocking up to 100 rewards (typically takes 75 to 150 hours of play). Want it all faster? You can use V-Bucks to buy tiers any time!\r\n  • The Reaper plus 4 other outfits\r\n  • 2 Harvesting Tools\r\n  • 2 Gliders\r\n  • 2 Back Blings\r\n  • 5 Skydiving Trails\r\n  • 1300 V-Bucks\r\n  • and so much more!",
                            "it": "Stagione 3: 22 feb. - 30 apr.\r\n\r\nOttieni subito questi oggetti dal valore di oltre 2000 V-buck!\r\n  • Costume Specialista di missione\r\n  • Bonus del 50% dei PE partite stagionali\r\n  • Bonus del 10% dei PE partite amico\r\n  • Accesso alle sfide settimanali\r\n\r\nGioca per aumentare di livello il tuo Pass battaglia, sbloccando fino a 100 ricompense (necessarie tra le 75-150 ore di gioco). Vuoi tutto più in fretta? Puoi usare i V-buck per acquistare i livelli in qualsiasi momento!\r\n  • Il Mietitore e altri 4 costumi\r\n  • 2 strumenti di raccolta\r\n  • 2 deltaplani\r\n  • 2 Dorsi decorativi\r\n  • 5 Scie Skydive\r\n  • 1300 V-buck\r\n  • ...e molto altro ancora!",
                            "fr": "Saison 3 : 22 février - 30 avril\r\n\r\nRecevez immédiatement ces objets d'une valeur supérieure à 2000 V-bucks.\r\n  • Tenue de Spationaute\r\n  • Bonus d'EXP de saison de 50%\r\n  • Bonus d'EXP de saison de 10% pour des amis\r\n  • L'accès aux défis hebdomadaires\r\n\r\n Jouez pour augmenter le niveau de votre Passe de combat et déverrouiller jusqu'à 100 récompenses (nécessitant de 75 à 150 heures de jeu). Envie d'aller plus vite ? Utilisez vos V-bucks pour acheter des niveaux à tout moment !\r\n  • Le Faucheur, ainsi que 4 autres tenues\r\n  • 2 outils de collecte\r\n  • 2 planeurs\r\n  • 2 accessoires de dos\r\n  • 5 traînées de condensation\r\n  • 1300 V-bucks\r\n  • Et plus !",
                            "zh-cn": "第3赛季：2月22日——4月30日\r\n\r\n立即获得这些价值2000V币的物品。\r\n  • 任务专家服装\r\n  • 50% 额外赛季比赛经验\r\n  • 10%额外赛季好友比赛经验\r\n  •获得每周挑战权限\r\n\r\n通过游玩提升英雄季卡战阶，解锁100多个奖励(通常需要75到150个小时的游玩时间)。希望更快吗？你可以随时使用V币购买战阶！\r\n  •收割者以及其他4套服装\r\n  • 2个采集工具\r\n  • 2个滑翔伞\r\n  • 2个背部装饰\r\n  • 5个滑翔轨迹\r\n  • 1300V币\r\n  • 以及更多奖励！",
                            "es": "Temporada 3: 22 feb - 30 abr\r\n\r\nConsigue instantáneamente estos objetos valorados en más de 2000 paVos.\r\n  • Traje de especialista en misiones.\r\n  • Bonificación de PE de partida de temporada del 50%.\r\n  • Bonificación de PE de partida amistosa de temporada del 10%.\r\n  • Acceso a los desafíos semanales.\r\n\r\nJuega para subir de nivel tu pase de batalla y desbloquea hasta 100 recompensas (suele llevar entre 75 y 150 horas de juego). ¿Lo quieres más rápido? ¡Puedes usar paVos para comprar niveles siempre que quieras!\r\n  • Señor Muerte más otros 4 trajes.\r\n  • 2 herramientas de recolección.\r\n  • 2 alas delta.\r\n  • 2 popurrí de regalitos.\r\n  • 5 estelas de descenso.\r\n  • 1300 paVos.\r\n  • ¡Y mucho más!",
                            "ar": "Season 3: Feb 22 - April 30\r\n\r\nInstantly get these items valued at over 2000 V-Bucks.\r\n  • Mission Specialist Outfit\r\n  • 50% Bonus Season Match XP\r\n  • 10% Bonus Season Friend Match XP\r\n  • Access to Weekly Challenges\r\n\r\nPlay to level up your Battle Pass, unlocking up to 100 rewards (typically takes 75 to 150 hours of play). Want it all faster? You can use V-Bucks to buy tiers any time!\r\n  • The Reaper plus 4 other outfits\r\n  • 2 Harvesting Tools\r\n  • 2 Gliders\r\n  • 2 Back Blings\r\n  • 5 Skydiving Trails\r\n  • 1300 V-Bucks\r\n  • and so much more!",
                            "ja": "シーズン3: 2月22日～4月30日\r\n\r\n2000 V-Bucks以上の価値があるアイテムをすぐに手に入れよう。\r\n  ・ミッションスペシャリスト\r\n  ・シーズンマッチXPの50%ボーナス\r\n  ・シーズンフレンドマッチXPの10%ボーナス\r\n  ・ウィークリーチャレンジへの挑戦権\r\n\r\nプレイしてバトルパスのレベルを上げると、最大100個の報酬をアンロックする事ができます。すぐに報酬が欲しい場合は、V-Bucksでいつでもティアを購入する事ができます！\r\n  ・ザ・リーパーや他のコスチューム4点\r\n  ・ピックアックス 2点\r\n  ・グライダー 2点\r\n  ・バックアクセサリー 2点\r\n  ・トレイル 5点\r\n  ・1300 V-Bucks\r\n  ・他にも色々！",
                            "pl": "Sezon 3: 22 lutego - 30 kwietnia\r\n\r\nOtrzymasz od razu poniższe przedmioty o wartości ponad 2000 V-dolców!\r\n  • Strój: Specjalista od Zadań\r\n  • Sezonowa premia +50% PD za grę\r\n  • Sezonowa premia +10% PD za grę ze znajomym\r\n  • Dodatkowe wyzwanie dnia z karnetu bojowego\r\n\r\nGraj dalej, aby awansować karnet bojowy i zdobyć do 100 kolejnych nagród (ich zebranie normalnie zajmuje od 75 do 150 godz. gry). Chcesz się rozwijać szybciej? W każdej chwili możesz kupić poziomy za V-dolce!\r\n  • Żniwiarz plus 4 inne stroje\r\n  • 2 zbieraki\r\n  • 2 lotnie\r\n  • 2 plecaki\r\n  • 5 smug lotni\n  • 1300 V-dolców\r\n  • I dużo więcej!",
                            "es-419": "Temporada 3: Del 22 de feb. al 30 de abr.\r\n\r\n¡Obtén al instante estos objetos que cuestan más de 2000 monedas V!\r\n  • Atuendo Especialista de misión\r\n  • 50 % de bonificación de PE para partidas de la temporada\r\n  • 10 % de PE de bonificación para partidas con amigos en la temporada\r\n  • Acceso a los desafíos semanales\r\n\r\nJuega para subir de nivel tu pase de batalla y desbloquear hasta 100 recompensas (esto lleva entre 75 y 150 horas de juego). ¿Lo quieres todo más rápido? ¡Puedes utilizar monedas V para comprar niveles cuando quieras!\r\n  • Segador más otros 4 atuendos\r\n  • 2 herramientas de recolección\r\n  • 2 planeadores\r\n  • 2 mochilas retro\r\n  • 5 rastros de caída libre\r\n  • 1300 monedas V\r\n  • ¡Y mucho más!",
                            "tr": "3. Sezon: 22 Şubat - 30 Nisan\r\n\r\n2000 V-Papel'in üzerinde değeri olan bu içerikleri hemen edin.\r\n  • Görev Uzmanı Kıyafeti\r\n  • %50 Bonus Sezon Maçı TP'si\r\n  • %10 Bonus Sezon Arkadaş Maç TP'si\r\n  • Haftalık Görevlere Erişim\r\n\r\nSavaş Bileti’nin seviyesini yükseltmek için oyna, 100 ödülü de aç (75-150 saat arası vakit alabilir)! Hepsini daha mı çabuk istiyorsun? V-Papel kullanarak aşamaları istediğin zaman açabilirsin!\r\n  • Ölüm Meleği ve 4 kıyafet daha\r\n  • 2 Toplama Aleti\r\n  • 2 Planör\r\n  • 2 Sırt Süsü\r\n •5 Dalış İzi\r\n • 1300 V-Papel \r\n • ve daha pek çok şey!"
                        },
                        "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_BR_Season3_BattlePass.DA_BR_Season3_BattlePass",
                        "itemGrants": []
                    },
                    {
                        "offerId": "E2D7975EFEC54A45900D8D9A6D9D273C",
                        "devName": "BR.Season3.SingleTier.01",
                        "offerType": "StaticPrice",
                        "prices": [
                            {
                                "currencyType": "MtxCurrency",
                                "currencySubType": "",
                                "regularPrice": 150,
                                "finalPrice": 150,
                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                "basePrice": 150
                            }
                        ],
                        "categories": [],
                        "dailyLimit": -1,
                        "weeklyLimit": -1,
                        "monthlyLimit": -1,
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
                            ""
                        ],
                        "requirements": [],
                        "metaInfo": [],
                        "catalogGroup": "",
                        "catalogGroupPriority": 0,
                        "sortPriority": 0,
                        "title": {
                            "de": "Battle-Pass-Level",
                            "ru": "Уровень боевого пропуска",
                            "ko": "배틀패스 레벨",
                            "zh-hant": "英雄季卡戰階",
                            "pt-br": "Nível de Passe de Batalha",
                            "en": "Battle Pass Level",
                            "it": "Livello Pass battaglia",
                            "fr": "Niveau de Passe de combat",
                            "zh-cn": "英雄季卡战阶",
                            "es": "Pase de batalla de nivel",
                            "ar": "Battle Pass Level",
                            "ja": "バトルバスレベル",
                            "pl": "Poziom karnetu bojowego",
                            "es-419": "Nivel de pase de batalla",
                            "tr": "Savaş Bileti Aşaması"
                        },
                        "shortDescription": "",
                        "description": {
                            "de": "Hol dir jetzt tolle Belohnungen!",
                            "ru": "Получите отличные награды!",
                            "ko": "지금 푸짐한 보상을 얻어보세요!",
                            "zh-hant": "現在獲得豐厚獎勵！",
                            "pt-br": "Ganhe recompensas ótimas agora!",
                            "en": "Get great rewards now!",
                            "it": "Ricevi subito magnifiche ricompense!",
                            "fr": "Obtenez de grandes récompenses !",
                            "zh-cn": "现在获得丰厚奖励！",
                            "es": "¡Consigue recompensas increíbles!",
                            "ar": "Get great rewards now!",
                            "ja": "素晴らしい報酬を今すぐゲット！",
                            "pl": "Zdobądź super nagrody już teraz!",
                            "es-419": "¡Consigue grandes recompensas ahora!",
                            "tr": "Harika ödüllerin sahibi ol!"
                        },
                        "displayAssetPath": "",
                        "itemGrants": []
                    }
                ]
            },
            {
                "name": "BRSeason4",
                "catalogEntries": [
                    {
                        "offerId": "884CE68998C44AC58D85C5A9883DE1A6",
                        "devName": "BR.Season4.BattleBundle.01",
                        "offerType": "StaticPrice",
                        "prices": [
                            {
                                "currencyType": "MtxCurrency",
                                "currencySubType": "",
                                "regularPrice": 4700,
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
                            ""
                        ],
                        "requirements": [
                            {
                                "requirementType": "DenyOnFulfillment",
                                "requiredId": "2B4936F24F3179416FEFD49DA5C4B64A",
                                "minQuantity": 1
                            }
                        ],
                        "metaInfo": [],
                        "catalogGroup": "",
                        "catalogGroupPriority": 0,
                        "sortPriority": 0,
                        "title": {
                            "de": "Battle-Pass-Paket",
                            "ru": "Боевой комплект",
                            "ko": "배틀번들",
                            "zh-hant": "戰鬥套組",
                            "pt-br": "Pacotão de Batalha",
                            "en": "Battle Bundle",
                            "it": "Bundle battaglia",
                            "fr": "Pack de combat",
                            "zh-cn": "战斗套组",
                            "es": "Lote de batalla",
                            "ar": "Battle Bundle",
                            "ja": "バトルバンドル",
                            "pl": "Zestaw bojowy",
                            "es-419": "Paquete de batalla",
                            "tr": "Savaş Paketi"
                        },
                        "shortDescription": {
                            "de": "Battle Pass + 25 Stufen!",
                            "ru": "Боевой пропуск + 25 уровней!",
                            "ko": "배틀패스 + 25티어!",
                            "zh-hant": "英雄季卡增加25戰階！",
                            "pt-br": "Passe de Batalha + 25 categorias!",
                            "en": "Battle Pass + 25 tiers!",
                            "it": "Pass battaglia + 25 livelli!",
                            "fr": "Passe de combat + 25 paliers !",
                            "zh-cn": "英雄季卡增加25战阶！",
                            "es": "¡Pase de batalla y 25 niveles!",
                            "ar": "Battle Pass + 25 tiers!",
                            "ja": "バトルパス+25ティア！",
                            "pl": "Karnet bojowy + 25 stopni!",
                            "es-419": "¡Pase de batalla + 25 niveles!",
                            "tr": "Savaş Bileti + 25 aşama!"
                        },
                        "description": {
                            "de": "Saison 4: Ab sofort bis 9. Juli\n\nErhalte sofort diese Gegenstände im Wert von über 10.000 V-Bucks.\n  • Carbide (Outfit)\n  • Kriegsfalke (Outfit)\n  • Teknique (Outfit) \n  • Orkanhacke (Spitzhacke)\n  • Zuckerschock (Hängegleiter)\n  • Standardausführung (Rücken-Accessoire)\n  • 4 Spraymotive\n  • Retro-Science-Fiction (Flugspur)\n  • +70 % Saison-Match-EP\n  • +20 % Saison-Match-EP für Freunde\n  • Zugang zu Wöchentlichen Herausforderungen\n  • Zugang zu Blockbuster-Herausforderungen\n  • Zugang zu Carbide-Herausforderungen\n  • und mehr!\n\nSpiele weiter und stufe deinen Battle Pass auf, um über 75 Belohnungen freizuschalten (im Normalfall werden dafür 75 bis 150 Spielstunden benötigt). Das dauert dir zu lange? Mit V-Bucks kannst du jederzeit Stufen kaufen!\n\n  • Omega und 3 weitere Outfits\n  • 3 Spitzhacken\n  • 4 Emotes\n  • 2 Hängegleiter\n  • 1 Rücken-Accessoire\n  • 4 Flugspuren\n  • 16 Spraymotive\n  • 1.300 V-Bucks\n  • und noch eine ganze Menge mehr!",
                            "ru": "Четвёртый сезон: до 9 июля\n\nСразу же получите предметы стоимостью более 10 000 В-баксов!\n  • экипировка Карбида;\n  • экипировка Боевого ястреба;\n  • экипировка мисс Бэнкси;\n  • кирка «Штормовая мощь»;\n  • дельтаплан «Конфетка»;\n  • украшение на спину «Верный стандарт»;\n  • 4 граффити;\n  • воздушный след «Ретрофутуризм»;\n  • +70% к опыту за матчи сезона;\n  • +20% к опыту друзей за матчи сезона;\n  • доступ к еженедельным испытаниям;\n  • доступ к испытаниям Карбида;\n  • доступ к испытаниям события «Убойное кино»;\n  • и это ещё не всё!\n\nИграйте, повышайте уровень боевого пропуска — и вас ждут более 75 наград. Обычно, чтобы открыть все награды, требуется 75–150 часов игры; но если вы не хотите ждать, этот процесс можно ускорить за В-баксы.\n  • экипировка Омеги и ещё 3 костюма;\n  • 3 кирки;\n  • 4 эмоции;\n  • 2 дельтаплана;\n  • 1 украшение на спину;\n  • 4 воздушных следа;\n  • 16 граффити;\n  • 1300 В-баксов;\n  • и это ещё не всё!",
                            "ko": "시즌4: 7월 9일 종료\n\n10,000 V-Bucks 이상의 가치가 있는 여러 아이템을 즉시 받아가세요.\n  • 카바이드 의상\n  • 배틀호크 의상\n  • 테크니크 아티스트 의상\n  • 강풍 곡괭이\n  • 슈가 크래시 글라이더\n  • 보급품 배낭 등 장신구\n  • 스프레이 4개\n  • 복고풍 공상 과학 스카이다이빙 트레일\n  • 70% 보너스 시즌 매치 XP\n  • 20% 보너스 시즌 친구 매치 XP\n  • 주간 도전 이용 권한\n  • 블록버스터 도전 이용 권한\n  • 카바이드 도전 이용 권한\n\n배틀패스 티어를 올려서 75개 이상의 보상을 획득해보세요(보통 75-150시간 소요). 더 빨리 보상을 얻고 싶으신가요? V-Bucks를 사용해서 언제든지 티어를 구매할 수 있습니다!\n  • 오메가 및 다른 의상 3개\n  • 곡괭이 3개\n  • 이모트 4개\n  • 글라이더 2개\n  • 등 장신구 1개\n  • 스카이다이빙 트레일 4개\n  • 스프레이 16개\n  • 1,300 V-Bucks\n  • 그 외 많은 혜택!",
                            "zh-hant": "第4賽季：現在起至7月9日\n\n立即獲得這些價值10000V幣的物品。\n  • 碳化合金服裝\n  • 戰鷹服裝\n  • 技巧服裝\n  • 蓋爾力量鋤頭\n  • 糖果風暴滑翔傘\n  • 制式裝備背包\n  • 4個塗鴉\n  • 復古科幻滑翔軌跡\n  • 70% 額外賽季比賽經驗\n  • 20%額外賽季好友比賽經驗\n  • 獲得每週挑戰許可權\n  • 獲得爆紅挑戰許可權\n  • 獲得碳化合金挑戰許可權\n  • 以及更多！\n\n通過遊玩提升英雄季卡戰階，解鎖75多個獎勵(通常需要75到150個小時的遊玩時間)。希望更快嗎？你可以隨時使用V幣購買戰階！\n  •歐米伽以及其他3套服裝\n  •3個鋤頭\n  • 4個姿勢\n  • 2個滑翔傘\n  • 1個背部裝飾\n  • 4個滑翔軌跡\n  • 16個塗鴉\n  • 1300V幣\n  • 以及更多獎勵！",
                            "pt-br": "Temporada 4: de hoje até 9 de julho\n\nReceba instantaneamente estes itens avaliados em mais de 10.000 V-Bucks.\n  • Traje Carboneto\n  • Traje Gavião Guerreiro\n  • Traje Téknica \n  • Picareta Rajada\n  • Asa-delta Pancada Açucarada\n  • Acessório para as Costas Padrão\n  • 4 Sprays\n  • Rastro de Queda Livre Ficção Científica Retrô\n  • 70% de Bônus de EXP da Temporada em Partidas\n  • 20% de Bônus de EXP da Temporada em Partidas com Amigos\n  • Acesso a Desafios Semanais\n  • Acesso a Desafios de Filmaço\n  • Acesso a Desafios Carboneto\n  • e mais!\n\nJogue para subir o nível do seu Passe de Batalha, desbloqueando mais de 75 recompensas (leva em média 75 a 150 horas de jogo). Quer mais rápido? Você pode usar V-Bucks para comprar categorias a qualquer momento!\n\n  • O Ômega e mais 3 outros trajes\n  • 3 Picaretas\n  • 4 Gestos\n  • 2 Asas-deltas\n  • 1 Acessórios para as Costas\n  • 4 Rastros de Queda Livre\n  • 16 Sprays\n  • 1.300 V-Bucks\n  • e muito mais!",
                            "en": "Season 4: Now thru July 9\n\nInstantly get these items valued at over 10,000 V-Bucks.\n  • Carbide Outfit\n  • Battlehawk Outfit\n  • Teknique Outfit \n  • Gale Force Pickaxe\n  • Sugar Crash Glider\n  • Standard Issue Back Bling\n  • 4 Sprays\n  • Retro Sci-fi Skydiving Trail\n  • 70% Bonus Season Match XP\n  • 20% Bonus Season Friend Match XP\n  • Access to Weekly Challenges\n  • Access to Blockbuster Challenges\n  • Access to Carbide Challenges\n  • and more!\n\nPlay to level up your Battle Pass, unlocking up to 75+ more rewards (typically takes 75 to 150 hours of play). Want it all faster? You can use V-Bucks to buy tiers any time!\n\n  • Omega plus 3 other outfits\n  • 3 Pickaxes\n  • 4 Emotes\n  • 2 Gliders\n  • 1 Back Bling\n  • 4 Skydiving Trails\n  • 16 Sprays\n  • 1300 V-Bucks\n  • and so much more!",
                            "it": "Stagione 4: fino al 9 luglio\n\nOttieni subito questi oggetti dal valore di oltre 10,000 V-buck!\n  • Costume Carburo\n  • Costume Battlehawk\n  • Costume Teknica\n  • Piccone Uragano\n  • Deltaplano Crash zucchero\n  • Dorso decorativo Standard\n  • 4 spray\n  • Scia skydive Fantascienza rétro\n  • Bonus del 70% dei PE partite stagionali\n  • Bonus del 20% dei PE partite amico\n  • Accesso alle sfide settimanali\n  • Accesso alle sfide spaccatutto\n  • Accesso alle sfide Carburo\n  • ...e tanto altro!\n\nGioca per aumentare di livello il tuo Pass battaglia, sbloccando oltre 75 ricompense (necessarie tra le 75-150 ore di gioco). Vuoi tutto più in fretta? Puoi usare i V-buck per acquistare i livelli in qualsiasi momento!\n\n  • Omega e altri 3 costumi\n  • 3 picconi\n  • 2 deltaplani\n  • 1 Dorso decorativo\n  • 4 Scie Skydive\n  • 16 spray\n  • 1300 V-buck\n  • ...e molto altro ancora!",
                            "fr": "Saison 4 : jusqu'au 9 juillet\n\n Recevez immédiatement ces objets d'une valeur supérieure à 10 000 V-bucks.\n  • Tenue Carburo\n  • Tenue Le Faucon\n  • Tenue Graffeuse \n  • Pioche Zéphyr\n  • Planeur Friandise\n  • Accessoire de dos Sac réglementaire\n  • 4 aérosols\n  • Traînée de condensation Rétrofuturiste\n  • Bonus d'EXP de saison de 70%\n  • Bonus d'EXP de saison de 20% pour des amis\n  • L'accès aux défis hebdomadaires\n  • L'accès aux défis Superproduction\n  • L'accès aux défis de Carburo\n  • Et plus !\n\nJouez pour augmenter le niveau de votre Passe de combat et déverrouiller plus de 75 récompenses (nécessitant de 75 à 150 heures de jeu). Envie d'aller plus vite ? Utilisez vos V-bucks pour acheter des niveaux à tout moment !\n\n  • Oméga plus 3 autres tenues\n  • 3 pioches\n  • 4 emotes\n  • 2 planeurs\n  • 1 accessoire de dos\n  • 4 traînées de condensation\n  • 16 aérosols\n  • 1300 V-bucks\n  • Et plus !",
                            "zh-cn": "第4赛季：现在起至7月9日\n\n立即获得这些价值10000V币的物品。\n  • 碳化合金服装\n  • 战鹰服装\n  • 技巧服装\n  • 盖尔力量锄头\n  • 糖果风暴滑翔伞\n  • 制式装备背包\n  • 4个涂鸦\n  • 复古科幻滑翔轨迹\n  • 70% 额外赛季比赛经验\n  • 20%额外赛季好友比赛经验\n  • 获得每周挑战权限\n  • 获得爆红挑战权限\n  • 获得碳化合金挑战权限\n  • 以及更多！\n\n通过游玩提升英雄季卡战阶，解锁75多个奖励(通常需要75到150个小时的游玩时间)。希望更快吗？你可以随时使用V币购买战阶！\n  •欧米伽以及其他3套服装\n  •3个锄头\n  • 4个姿势\n  • 2个滑翔伞\n  • 1个背部装饰\n  • 4个滑翔轨迹\n  • 16个涂鸦\n  • 1300V币\n  • 以及更多奖励！",
                            "es": "Temporada 4: Desde ahora hasta el 9 de julio\n\nConsigue instantáneamente estos objetos valorados en más de 10 000 paVos.\n  • Traje de Carburo\n  • Traje de halcón bélico\n  • Traje de Téknica \n  • Pico fuerza de la tempestad\n  • Ala delta subidón de azúcar\n  • Accesorio mochilero modelo estándar\n  • 4 grafitis\n  • Estela de descenso ciencia ficción retro\n  • Bonificación de PE de partida de temporada del 70%\n  • Bonificación de PE de partida amistosa de temporada del 20%.\n  • Acceso a los desafíos semanales.\n  • Acceso a los desafíos de Taquillazo.\n  • Acceso a los desafíos de Carburo.\n  • ¡Y mucho más!\n\nJuega para subir de nivel tu pase de batalla y desbloquea más de 75 recompensas (suele llevar entre 75 y 150 horas de juego). ¿Lo quieres más rápido? ¡Puedes usar paVos para comprar niveles siempre que quieras!\n\n  • Omega más otros 3 trajes.\n  • 3 picos.\n  • 4 gestos\n  • 2 alas delta\n  • 1 accesorio mochilero\n  • 4 estelas de descenso\n  • 16 grafitis\n  • 1300 paVos\n  • ¡Y mucho más!",
                            "ar": "Season 4: Now thru July 9\n\nInstantly get these items valued at over 10,000 V-Bucks.\n  • Carbide Outfit\n  • Battlehawk Outfit\n  • Teknique Outfit \n  • Gale Force Pickaxe\n  • Sugar Crash Glider\n  • Standard Issue Back Bling\n  • 4 Sprays\n  • Retro Sci-fi Skydiving Trail\n  • 70% Bonus Season Match XP\n  • 20% Bonus Season Friend Match XP\n  • Access to Weekly Challenges\n  • Access to Blockbuster Challenges\n  • Access to Carbide Challenges\n  • and more!\n\nPlay to level up your Battle Pass, unlocking up to 75+ more rewards (typically takes 75 to 150 hours of play). Want it all faster? You can use V-Bucks to buy tiers any time!\n\n  • Omega plus 3 other outfits\n  • 3 Pickaxes\n  • 4 Emotes\n  • 2 Gliders\n  • 1 Back Bling\n  • 4 Skydiving Trails\n  • 16 Sprays\n  • 1300 V-Bucks\n  • and so much more!",
                            "ja": "シーズン4: 7月9日まで\n\n10,000 V-Bucks以上の価値があるアイテムをすぐに手に入れましょう\n  ・カーバイドコスチューム\n  ・バトルホークコスチューム\n  ・テクニークコスチューム\n  ・ゲイルフォースツルハシ\n  ・シュガークラッシュグライダー\n  ・標準仕様バックアクセサリー\n  ・スプレー4点\n  ・レトロなSFチックスカイダイビングトレイル\n  ・シーズンマッチXPの70%ボーナス\n  ・シーズンフレンドマッチXPの20%ボーナス\n  ・ウィークリーチャレンジへの挑戦権\n  ・ブロックバスターチャレンジへの挑戦権\n  ・カーバイドチャレンジへの挑戦権\n  ・他にも色々！\n\nプレイしてバトルパスのレベルを上げると、75以上の報酬をアンロックできます(通常、プレイにかかる時間は75～150時間程度)。もっと早く報酬を全部集めたい？ V-Bucksでいつでもティアを購入できます！\n\n  ・オメガコスチュームとさらに他のコスチュームx3\n  ・ツルハシx3\n  ・エモートx4\n  ・グライダーx2\n  バックアクセサリーx1\n  スカイダイビングトレイルx4\n  ・スプレーx16\n  ・1300 V-Bucks\n  他にも色々！",
                            "pl": "Sezon 4: potrwa do 9 lipca\n\nOtrzymasz od razu poniższe przedmioty o wartości ponad 10 000 V-dolców:\n  • Strój: Karbid\n  • Strój: Bojowy Jastrząb\n  • Strój: Teknique\n   • Kilof: Sztormowiec\n  • Lotnia: Słodki Spadek\n  • Plecak: Standardowe Wyposażenie\n  • 4 graffiti\n  • Smuga lotni: Retro-SF\n  • Sezonowa premia +70% PD za grę\n  • Sezonowa premia +20% za grę ze znajomym\n  • Dostęp do wyzwań tygodnia\n  • Dostęp do wyzwań Hitu Ekranu\n  • Dostęp do wyzwań Karbida\n  • I jeszcze więcej!\n\nGraj dalej, aby awansować karnet bojowy i zdobyć ponad 75 kolejnych nagród (ich zebranie normalnie zajmuje od 75 do 150 godz. gry). Chcesz się rozwijać szybciej? W każdej chwili możesz kupić poziomy za V-dolce!\n\n  • Omega plus 3 inne stroje\n  • 3 kilofy\n  • 4 emotki\n  • 2 lotnie\n  • 1 sprzęt na plecy\n  • 4 smugi lotni\n  • 16 graffiti\n  • 1300 V-dolców\n  • I dużo więcej!",
                            "es-419": "Temporada 4: Ahora hasta el 9 de julio\n\n¡Obtén al instante estos objetos que cuestan más de 10 000 monedas V!\n  • Atuendo Carburo\n  • Atuendo Halcón de combate\n  • Atuendo Téknica \n  • Pico Fuerza huracanada\n  • Planeador Bajón de azúcar\n  • Mochila retro Edición básica\n  • 4 aerosoles\n  • Rastro de caída libre Ciencia ficción retro\n  • 70 % de PE de bonificación para partidas de la temporada\n  • 20 % de PE de bonificación para partidas con amigos en la temporada\n  • Acceso a los desafíos semanales\n  • Acceso a los desafíos de Taquillazo\n  • Acceso a los desafíos de Carburo\n  • ¡Y mucho más!\n\nJuega para subir de nivel tu pase de batalla y desbloquear más de 75 recompensas (esto lleva entre 75 y 150 horas de juego). ¿Lo quieres todo más rápido? ¡Puedes utilizar monedas V para comprar niveles cuando quieras!\n\n  • Omega más otros 3 atuendos\n  • 3 picos\n  • 4 gestos\n  • 2 planeadores\n  • 1 mochila retro\n  • 4 rastros de caída libre\n  • 16 aerosoles\n  • 1300 monedas V\n  • ¡Y mucho más!",
                            "tr": "4. Sezon: Şu andan 9 Temmuz’a kadar\n\n10.000 V-Papel’in üzerinde değeri olan bu içerikleri hemen edin.\n • Demir Maske Kıyafeti\n  • Savaş Şahini Kıyafeti\n  • Asi Grafitici Kıyafeti\n  • Kraliçenin Gücü Kazması\n  • Şeker Koması Planörü\n  • Standart Ekipman Sırt Süsü\n  • 4 Sprey\n  • Retro Bilimkurgu Hava Dalışı İzi\n  • %70 Bonus Sezonluk Maç TP’si\n  • %20 Bonus Sezonluk Arkadaşlar için Maç TP’si\n  • Haftalık Görevlere Erişim\n  • Gişe Rekortmeni Görevlerine Erişim\n  • Demir Maske Görevlerine Erişim\n  • ve fazlası!\n\nBattle Royale oynayarak Savaş Bileti’nin seviyesini yükselt ve 75’ten fazla ödülü aç (genelde 75 ila 150 saat oynama gerektirir). Hepsini daha hızlı almak mı istiyorsun? V-Papel karşılığında istediğin zaman aşama açabilirsin!\n\n  • Omega artı 3 kıyafet daha\n  • 3 Kazma\n  • 4 İfade\n  • 2 Planör\n  • 1 Sırt Süsü\n  • 4 Hava Dalışı İzi\n  • 16 Sprey\n  • 1300 V-Papel\n  • ve çok daha fazlası!"
                        },
                        "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_BR_Season4_BattlePassWithLevels.DA_BR_Season4_BattlePassWithLevels",
                        "itemGrants": []
                    },
                    {
                        "offerId": "76EA7FE9787744B09B79FF3FC5E39D0C",
                        "devName": "BR.Season4.BattlePass.01",
                        "offerType": "StaticPrice",
                        "prices": [
                            {
                                "currencyType": "MtxCurrency",
                                "currencySubType": "",
                                "regularPrice": 950,
                                "finalPrice": 950,
                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                "basePrice": 950
                            }
                        ],
                        "categories": [],
                        "dailyLimit": -1,
                        "weeklyLimit": -1,
                        "monthlyLimit": -1,
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
                            ""
                        ],
                        "requirements": [
                            {
                                "requirementType": "DenyOnFulfillment",
                                "requiredId": "2B4936F24F3179416FEFD49DA5C4B64A",
                                "minQuantity": 1
                            }
                        ],
                        "metaInfo": [],
                        "catalogGroup": "",
                        "catalogGroupPriority": 0,
                        "sortPriority": 1,
                        "title": {
                            "de": "Battle Pass",
                            "ru": "Боевой пропуск",
                            "ko": "배틀패스",
                            "zh-hant": "英雄季卡",
                            "pt-br": "Passe de Batalha",
                            "en": "Battle Pass",
                            "it": "Pass battaglia",
                            "fr": "Passe de combat",
                            "zh-cn": "英雄季卡",
                            "es": "Pase de batalla",
                            "ar": "Battle Pass",
                            "ja": "バトルパス",
                            "pl": "Karnet bojowy",
                            "es-419": "Pase de batalla",
                            "tr": "Savaş Bileti"
                        },
                        "shortDescription": {
                            "de": "Saison 4",
                            "ru": "Сезон 4",
                            "ko": "시즌 4",
                            "zh-hant": "第4賽季",
                            "pt-br": "Temporada 4",
                            "en": "Season 4",
                            "it": "Stagione 4",
                            "fr": "Saison 4",
                            "zh-cn": "第4赛季",
                            "es": "Temporada 4",
                            "ar": "Season 4",
                            "ja": "シーズン4",
                            "pl": "Sezon 4",
                            "es-419": "Temporada 4",
                            "tr": "4. Sezon"
                        },
                        "description": {
                            "de": "Saison 4: Ab sofort bis 9. Juli\n\nErhalte sofort diese Gegenstände im Wert von über 3.500 V-Bucks.\n  • Carbide (Outfit)\n  • Kriegsfalke (Outfit)\n  • +50 % Saison-Match-EP\n  • +10 % Saison-Match-EP für Freunde\n  • Zugang zu Wöchentlichen Herausforderungen\n  • Zugang zu Blockbuster-Herausforderungen\n  • Zugang zu Carbide-Herausforderungen\n\nSpiele weiter und stufe deinen Battle Pass auf, um über 100 Belohnungen freizuschalten (im Normalfall werden dafür 75 bis 150 Spielstunden benötigt). Das dauert dir zu lange? Mit V-Bucks kannst du jederzeit Stufen kaufen!\n  • Omega und 4 weitere Outfits\n  • 4 Spitzhacken\n  • 5 Emotes\n  • 3 Hängegleiter\n  • 2 Rücken-Accessoires\n  • 5 Flugspuren\n  • 20 Spraymotive\n  • 1.300 V-Bucks\n  • und noch eine ganze Menge mehr!",
                            "ru": "Четвёртый сезон: до 9 июля\n\nСразу же получите предметы стоимостью более 3500 В-баксов!\n  • экипировка Карбида;\n  • экипировка Боевого ястреба;\n  • +50% к опыту за матчи сезона;\n  • +10% к опыту друзей за матчи сезона;\n  • доступ к еженедельным испытаниям;\n  • доступ к испытаниям Карбида;\n  • доступ к испытаниям события «Убойное кино».\n\nИграйте, повышайте уровень боевого пропуска — и вас ждут до 100 наград. Обычно, чтобы открыть все награды, требуется 75–150 часов игры; но если вы не хотите ждать, этот процесс можно ускорить за В-баксы.\n  • экипировка Омеги и ещё 4 костюма;\n  • 4 кирки;\n  • 5 эмоций;\n  • 3 дельтаплана;\n  • 2 украшения на спину;\n  • 5 воздушных следов;\n  • 20 граффити;\n  • 1300 В-баксов;\n  • и это ещё не всё!",
                            "ko": "시즌4: 7월 9일 종료\n\n3,500 V-Bucks 이상의 가치가 있는 여러 아이템을 즉시 받아가세요.\n  • 카바이드 의상\n  • 배틀호크 의상\n  • 50% 보너스 시즌 매치 XP\n  • 10% 보너스 시즌 친구 매치 XP\n  • 주간 도전 이용 권한\n  • 블록버스터 도전 이용 권한\n  • 카바이드 도전 이용 권한\n\n배틀패스 티어를 올려서 100개 이상의 보상을 획득해보세요(보통 75-150시간 소요). 더 빨리 보상을 얻고 싶으신가요? V-Bucks를 사용해서 언제든지 티어를 구매할 수 있습니다!\n  • 오메가 및 다른 의상 4개\n  • 곡괭이 4개\n  • 이모트 5개\n  • 글라이더 3개\n  • 등 장신구 2개\n  • 스카이다이빙 트레일 5개\n  • 스프레이 20개\n  • 1,300 V-Bucks\n  • 그 외 많은 혜택!",
                            "zh-hant": "第4賽季：現在起至7月9日\n\n立即獲得這些價值3500V幣的物品。\n  • 碳化合金服裝\n  • 戰鷹服裝\n  • 50% 額外賽季比賽經驗\n  • 10%額外賽季好友比賽經驗\n  • 獲得每週挑戰許可權\n  • 獲得爆紅挑戰許可權\n  • 獲得碳化合金挑戰許可權\n\n通過遊玩提升英雄季卡戰階，解鎖100多個獎勵(通常需要75到150個小時的遊玩時間)。希望更快嗎？你可以隨時使用V幣購買戰階！\n  •歐米伽以及其他4套服裝\n  •4個鋤頭\n  • 5個姿勢\n  • 3個滑翔傘\n  • 2個背部裝飾\n  • 5個滑翔軌跡\n  • 20個小塗鴉\n  • 1300V幣\n  • 以及更多獎勵！",
                            "pt-br": "Temporada 4: de hoje até 9 de julho\n\nReceba instantaneamente estes itens avaliados em mais de 3.500 V-Bucks.\n  • Traje Carboneto\n  • Traje Gavião Guerreiro\n  • 50% de Bônus de EXP da Temporada em Partidas\n  • 10% de Bônus de EXP da Temporada em Partidas com Amigos\n  • Acesso a Desafios Semanais\n  • Acesso a Desafios de Filmaço\n  • Acesso a Desafios Carboneto\n\nJogue para subir o nível do seu Passe de Batalha, desbloqueando mais de 100 recompensas (leva em média 75 a 150 horas de jogo). Quer mais rápido? Você pode usar V-Bucks para comprar categorias a qualquer momento!\n  • O Ômega e mais 4 outros trajes\n  • 4 Picaretas\n  • 5 Gestos\n  • 3 Asas-deltas\n  • 2 Acessórios para as Costas\n  • 5 Rastros de Queda Livre\n  • 20 Sprays\n  • 1.300 V-Bucks\n  • e muito mais!",
                            "en": "Season 4: Now thru July 9\n\nInstantly get these items valued at over 3,500 V-Bucks.\n  • Carbide Outfit\n  • Battlehawk Outfit\n  • 50% Bonus Season Match XP\n  • 10% Bonus Season Friend Match XP\n  • Access to Weekly Challenges\n  • Access to Blockbuster Challenges\n  • Access to Carbide Challenges\n\nPlay to level up your Battle Pass, unlocking over  100 rewards (typically takes 75 to 150 hours of play). Want it all faster? You can use V-Bucks to buy tiers any time!\n  • Omega plus 4 other outfits\n  • 4 Pickaxes\n  • 5 Emotes\n  • 3 Gliders\n  • 2 Back Blings\n  • 5 Skydiving Trails\n  • 20 Sprays\n  • 1300 V-Bucks\n  • and so much more!",
                            "it": "Stagione 4: fino al 9 luglio\n\nOttieni subito questi oggetti dal valore di oltre 3.500 V-buck!\n  • Costume Carburo\n  • Costume Battlehawk\n  • Bonus del 50% dei PE partite stagionali\n  • Bonus del 10% dei PE partite amico\n  • Accesso alle sfide settimanali\n  • Accesso alle sfide spaccatutto\n  • Accesso alle sfide Carburo\n\nGioca per aumentare di livello il tuo Pass battaglia, sbloccando fino a 100 ricompense (necessarie tra le 75-150 ore di gioco). Vuoi tutto più in fretta? Puoi usare i V-buck per acquistare i livelli in qualsiasi momento!\n  • Omega e altri 4 costumi\n  • 4 picconi\n  • 3 deltaplani\n  • 2 Dorso decorativo\n  • 5 Scie Skydive\n  • 20 Spray\n  • 1300 V-buck\n  • ...e molto altro ancora!",
                            "fr": "Saison 4 : jusqu'au 9 juillet\n\nRecevez immédiatement ces objets d'une valeur supérieure à 3 500 V-bucks.\n  • Tenue Carburo\n  • Tenue Le Faucon\n  • Bonus d'EXP de saison de 50%\n  • Bonus d'EXP de saison de 10% pour des amis\n  • L'accès aux défis hebdomadaires\n  • L'accès aux défis Superproduction\n  • L'accès aux défis de Carburo\n\n Jouez pour augmenter le niveau de votre Passe de combat et déverrouiller plus de 100 récompenses (nécessitant de 75 à 150 heures de jeu). Envie d'aller plus vite ? Utilisez vos V-bucks pour acheter des niveaux à tout moment !\n  • Oméga plus 4 autres tenues\n  • 4 pioches\n  • 5 emotes\n  • 3 planeurs\n  • 2 accessoires de dos\n  • 5 traînées de condensation\n  • 20 aérosols\n  • 1300 V-bucks\n  • Et plus !",
                            "zh-cn": "第4赛季：现在起至7月9日\n\n立即获得这些价值3500V币的物品。\n  • 碳化合金服装\n  • 战鹰服装\n  • 50% 额外赛季比赛经验\n  • 10%额外赛季好友比赛经验\n  • 获得每周挑战权限\n  • 获得爆红挑战权限\n  • 获得碳化合金挑战权限\n\n通过游玩提升英雄季卡战阶，解锁100多个奖励(通常需要75到150个小时的游玩时间)。希望更快吗？你可以随时使用V币购买战阶！\n  •欧米伽以及其他4套服装\n  •4个锄头\n  • 5个姿势\n  • 3个滑翔伞\n  • 2个背部装饰\n  • 5个滑翔轨迹\n  • 20个小涂鸦\n  • 1300V币\n  • 以及更多奖励！",
                            "es": "Temporada 4: Desde ahora hasta el 9 de julio\n\nConsigue instantáneamente estos objetos valorados en más de 3500 paVos.\n  • Traje de Carburo\n  • Traje de halcón bélico\n  • Bonificación de PE de partida de temporada del 50%.\n  • Bonificación de PE de partida amistosa de temporada del 10%.\n  • Acceso a los desafíos semanales.\n  • Acceso a los desafíos de Taquillazo.\n  • Acceso a los desafíos de Carburo.\n\nJuega para subir de nivel tu pase de batalla y desbloquea más de 100 recompensas (suele llevar entre 75 y 150 horas de juego). ¿Lo quieres más rápido? ¡Puedes usar paVos para comprar niveles siempre que quieras!\n  • Omega más otros 4 trajes.\n  • 4 picos.\n  • 5 gestos.\n  • 3 alas delta.\n  • 2 accesorios mochileros.\n  • 5 estelas de descenso.\n  • 20 grafitis.\n  • 1300 paVos\n  • ¡Y mucho más!",
                            "ar": "Season 4: Now thru July 9\n\nInstantly get these items valued at over 3,500 V-Bucks.\n  • Carbide Outfit\n  • Battlehawk Outfit\n  • 50% Bonus Season Match XP\n  • 10% Bonus Season Friend Match XP\n  • Access to Weekly Challenges\n  • Access to Blockbuster Challenges\n  • Access to Carbide Challenges\n\nPlay to level up your Battle Pass, unlocking over  100 rewards (typically takes 75 to 150 hours of play). Want it all faster? You can use V-Bucks to buy tiers any time!\n  • Omega plus 4 other outfits\n  • 4 Pickaxes\n  • 5 Emotes\n  • 3 Gliders\n  • 2 Back Blings\n  • 5 Skydiving Trails\n  • 20 Sprays\n  • 1300 V-Bucks\n  • and so much more!",
                            "ja": "シーズン4: 7月9日まで\n\n3,500 V-Bucks以上の価値があるアイテムをすぐに手に入れましょう\n  ・カーバイドコスチューム\n  ・バトルホークコスチューム\n  ・シーズンマッチXPの50%ボーナス\n  ・シーズンフレンドマッチXPの10%ボーナス\n  ・ウィークリーチャレンジへの挑戦権\n  ・ブロックバスターチャレンジへの挑戦権\n  ・カーバイドチャレンジへの挑戦権\n\nプレイしてバトルパスのレベルを上げると、100個以上の報酬をアンロックできます(通常、プレイにかかる時間は75～150時間程度)。もっと早く報酬を全部集めたい？ V-Bucksでいつでもティアを購入できます！\n  ・オメガコスチュームとさらに他のコスチュームx4\n  ・ツルハシx4\n  ・エモートx5\n  ・グライダーx3\n  ・バックアクセサリーx2\n  ・スカイダイビングトレイルx5\n  ・スプレーx20\n  ・1300 V-Bucks\n  ・他にも色々！",
                            "pl": "Sezon 4: potrwa do 9 lipca\n\nOtrzymasz od razu poniższe przedmioty o wartości ponad 3 500 V-dolców:\n  • Strój: Karbid\n  • Strój: Bojowy Jastrząb\n  • Sezonowa premia +50% PD za grę\n  • Sezonowa premia +10% PD za grę ze znajomym\n  • Dostęp do wyzwań tygodnia\n  • Dostęp do wyzwań Hitu Ekranu\n  • Dostęp do wyzwań Karbida\n\nGraj dalej, aby awansować karnet bojowy i zdobyć łącznie ponad 100 nagród (ich zebranie normalnie zajmuje od 75 do 150 godz. gry). Chcesz się rozwijać szybciej? W każdej chwili możesz kupić poziomy za V-dolce!\n  • Omega plus 4 inne stroje\n  • 4 kilofy\n  • 5 emotek\n  • 3 lotnie\n  • 2 plecaki\n  • 5 smug lotni\n  • 20 graffiti\n  • 1300 V-dolców\n  • I dużo więcej!",
                            "es-419": "Temporada 4: Ahora hasta el 9 de julio\n\n¡Obtén al instante estos objetos que cuestan más de 3500 monedas V!\n  • Atuendo Carburo\n  • Atuendo Halcón de combate\n  • 50 % de PE de bonificación para partidas de la temporada\n  • 10 % de PE de bonificación para partidas con amigos en la temporada\n  • Acceso a los desafíos semanales\n  • Acceso a los desafíos de Taquillazo\n  • Acceso a los desafíos de Carburo\n\nJuega para subir de nivel tu pase de batalla y desbloquear más de 100 recompensas (esto lleva entre 75 y 150 horas de juego). ¿Lo quieres todo más rápido? ¡Puedes utilizar monedas V para comprar niveles cuando quieras!\n  • Omega más otros 4 atuendos\n • 4 picos\n • 5 gestos\n  • 3 planeadores\n  • 2 mochilas retro\n  • 5 rastros de caída libre\n  • 20 aerosoles\n  • 1300 monedas V\n  • ¡Y mucho más!",
                            "tr": "4. Sezon: Şu andan 9 Temmuz’a kadar\n\n3.500 V-Papel’in üzerinde değeri olan bu içerikleri hemen edin.\n • Demir Maske Kıyafeti\n  • Savaş Şahini Kıyafeti\n  • %50 Bonus Sezonluk Maç TP’si\n  • %10 Bonus Sezonluk Arkadaşlar için Maç TP’si\n  • Haftalık Görevlere Erişim\n  • Gişe Rekortmeni Görevlerine Erişim\n  • Demir Maske Görevlerine Erişim\n\nBattle Royale oynayarak Savaş Bileti’nin seviyesini yükselt ve 100’den fazla ödülü aç (yaklaşık 75 ila 150 saat oynama gerektirir). Hepsini daha hızlı mı almak istiyorsun? V-Papel karşılığında istediğin zaman aşama açabilirsin!\n  • Omega artı 4 kıyafet daha\n  • 4 Kazma\n  • 5 İfade\n  • 3 Planör\n  • 2 Sırt Süsü\n  • 5 Hava Dalışı İzi\n  • 20 Sprey\n  • 1300 V-Papel\n  • ve çok daha fazlası!"
                        },
                        "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_BR_Season4_BattlePass.DA_BR_Season4_BattlePass",
                        "itemGrants": []
                    },
                    {
                        "offerId": "E9527AF46F4B4A9CAE98D91F2AA53CB6",
                        "devName": "BR.Season4.SingleTier.01",
                        "offerType": "StaticPrice",
                        "prices": [
                            {
                                "currencyType": "MtxCurrency",
                                "currencySubType": "",
                                "regularPrice": 150,
                                "finalPrice": 150,
                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                "basePrice": 150
                            }
                        ],
                        "categories": [],
                        "dailyLimit": -1,
                        "weeklyLimit": -1,
                        "monthlyLimit": -1,
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
                            ""
                        ],
                        "requirements": [],
                        "metaInfo": [],
                        "catalogGroup": "",
                        "catalogGroupPriority": 0,
                        "sortPriority": 0,
                        "title": {
                            "de": "Battle-Pass-Stufe",
                            "ru": "Уровень боевого пропуска",
                            "ko": "배틀패스 티어",
                            "zh-hant": "英雄季卡戰階",
                            "pt-br": "Categoria de Passe de Batalha",
                            "en": "Battle Pass Tier",
                            "it": "Livello Pass battaglia",
                            "fr": "Palier du Passe de combat",
                            "zh-cn": "英雄季卡战阶",
                            "es": "Nivel del pase de batalla",
                            "ar": "Battle Pass Tier",
                            "ja": "バトルパスティア",
                            "pl": "Stopień karnetu bojowego",
                            "es-419": "Nivel de pase de batalla",
                            "tr": "Savaş Bileti Aşaması"
                        },
                        "shortDescription": "",
                        "description": {
                            "de": "Hol dir jetzt tolle Belohnungen!",
                            "ru": "Получите отличные награды!",
                            "ko": "지금 푸짐한 보상을 얻어보세요!",
                            "zh-hant": "現在獲得豐厚獎勵！",
                            "pt-br": "Ganhe recompensas ótimas agora!",
                            "en": "Get great rewards now!",
                            "it": "Ricevi subito magnifiche ricompense!",
                            "fr": "Obtenez de grandes récompenses !",
                            "zh-cn": "现在获得丰厚奖励！",
                            "es": "¡Consigue recompensas increíbles!",
                            "ar": "Get great rewards now!",
                            "ja": "素晴らしい報酬を今すぐゲット！",
                            "pl": "Zdobądź super nagrody już teraz!",
                            "es-419": "¡Consigue grandes recompensas ahora!",
                            "tr": "Harika ödüllerin sahibi ol!"
                        },
                        "displayAssetPath": "",
                        "itemGrants": []
                    }
                ]
            },
            {
                "name": "BRSeason5",
                "catalogEntries": [
                    {
                        "offerId": "FF77356F424644529049280AFC8A795E",
                        "devName": "BR.Season5.BattleBundle.01",
                        "offerType": "StaticPrice",
                        "prices": [
                            {
                                "currencyType": "MtxCurrency",
                                "currencySubType": "",
                                "regularPrice": 4700,
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
                            ""
                        ],
                        "requirements": [
                            {
                                "requirementType": "DenyOnFulfillment",
                                "requiredId": "2B4936F24F3179416FEFD49DA5C4B64E",
                                "minQuantity": 1
                            }
                        ],
                        "metaInfo": [],
                        "catalogGroup": "",
                        "catalogGroupPriority": 0,
                        "sortPriority": 0,
                        "title": {
                            "de": "Battle-Pass-Paket",
                            "ru": "Боевой комплект",
                            "ko": "배틀번들",
                            "zh-hant": "戰鬥套組",
                            "pt-br": "Pacotão de Batalha",
                            "en": "Battle Bundle",
                            "it": "Bundle battaglia",
                            "fr": "Pack de combat",
                            "zh-cn": "战斗套组",
                            "es": "Lote de batalla",
                            "ar": "Battle Bundle",
                            "ja": "バトルバンドル",
                            "pl": "Zestaw bojowy",
                            "es-419": "Paquete de batalla",
                            "tr": "Savaş Paketi"
                        },
                        "shortDescription": {
                            "de": "Battle Pass + 25 Stufen!",
                            "ru": "Боевой пропуск + 25 уровней!",
                            "ko": "배틀패스 + 25티어!",
                            "zh-hant": "英雄季卡增加25戰階！",
                            "pt-br": "Passe de Batalha + 25 categorias!",
                            "en": "Battle Pass + 25 tiers!",
                            "it": "Pass battaglia + 25 livelli!",
                            "fr": "Passe de combat + 25 paliers !",
                            "zh-cn": "英雄季卡增加25战阶！",
                            "es": "¡Pase de batalla y 25 niveles!",
                            "ar": "Battle Pass + 25 tiers!",
                            "ja": "バトルパス+25ティア！",
                            "pl": "Karnet bojowy + 25 stopni!",
                            "es-419": "¡Pase de batalla + 25 niveles!",
                            "tr": "Savaş Bileti + 25 aşama!"
                        },
                        "description": {
                            "de": "Saison 5: Ab sofort bis 25. September\n\nErhalte sofort diese Gegenstände im Wert von über 10.000 V-Bucks.\n  • Jägerin (Outfit)\n  • Drift (Outfit)\n  • Rotstreifen (Outfit)\n  • Ballonhacke (Spitzhacke)\n  • Funker (Rücken-Accessoire)\n  • Laternen (Flugspur)\n  • 2 Hängegleiter\n  • 4 Spraymotive\n  • +70 % Saison-Match-EP\n  • +20 % Saison-Match-EP für Freunde\n  • zusätzliche Wöchentliche Herausforderungen  • fortschreitende Drift-Herausforderungen\n  • und mehr!\n\nSpiele weiter und stufe deinen Battle Pass auf, um über 75 Belohnungen freizuschalten (im Normalfall werden dafür 75 bis 150 Spielstunden benötigt). Das dauert dir zu lange? Mit V-Bucks kannst du jederzeit Stufen kaufen!\n  • Ragnarök und 4 weitere Outfits\n  • 3 Spitzhacken\n  • 4 Emotes\n  • 2 Hängegleiter\n  • 4 Rücken-Accessoires\n  • 4 Flugspuren\n  • 11 Spraymotive\n  • 1.300 V-Bucks\n  • und noch eine ganze Menge mehr!",
                            "ru": "Пятый сезон: до 25 сентября\n\nСразу же получите предметы стоимостью более 10 000 В-баксов!\n  • экипировка Астрид;\n  • экипировка Ронина;\n  • экипировка Красной Линии;\n  • кирка «Шарики»;\n  • украшение на спину «Рюкзак-скрутка»;\n  • воздушный след «Фонарики»;\n  • 2 дельтаплана;\n  • 4 граффити;\n  • +70% к опыту за матчи сезона;\n  • +20% к опыту друзей за матчи сезона;\n  • дополнительные еженедельные испытания;\n  • последовательные испытания Ронина;\n  • и многое другое!\n\nИграйте, повышайте уровень боевого пропуска — и вас ждут более 75 наград. Обычно, чтобы открыть все награды, требуется 75–150 часов игры; но если вы не хотите ждать, этот процесс можно ускорить за В-баксы.\n  • экипировка Рагнарёка и ещё 4 костюма;\n  • 3 кирки;\n  • 4 эмоции;\n  • 2 дельтаплана;\n  • 4 украшения на спину;\n  • 4 воздушных следа;\n  • 11 граффити;\n  • 1300 В-баксов;\n  • и это ещё не всё!",
                            "ko": "시즌 5: 9월 25일 종료\n\n10,000 V-Bucks 이상의 가치가 있는 여러 아이템을 즉시 받아가세요.\n  • 헌트리스 의상\n  • 드리프트 의상\n  • 레드라인 의상\n  • 풍선 도끼 곡괭이\n  • 업링크 등 장신구\n  • 등불 스카이다이빙 트레일\n  • 글라이더 2개\n  • 스프레이 4개\n  • 70% 보너스 시즌 매치 XP\n  • 20% 보너스 시즌 친구 매치 XP\n  • 추가 주간 도전\n  • 드리프트 연속 도전\n  • 그 외 혜택!\n\n배틀패스 티어를 올려서 75개 이상의 보상을 획득해보세요(보통 75-150시간 소요). 더 빨리 보상을 얻고 싶으신가요? V-Bucks를 사용해서 언제든지 티어를 구매할 수 있습니다!\n  • 라그나로크 외 의상 4개\n  • 곡괭이 3개\n  • 이모트 4개\n  • 글라이더 2개\n  • 등 장신구 4개\n  • 스카이다이빙 트레일 4개\n  • 스프레이 11개\n  • 1,300 V-Bucks\n  • 그 외 많은 혜택!",
                            "zh-hant": "第5賽季：從今天起直到9月25號\n\n立即獲得以下總價值超過1萬V幣的物品。\n  •“女獵手”套裝  •“天狐”套裝\n  • “紅線”套裝\n  • “氣球斧”鋤頭\n  • “上傳” 背部裝飾\n  •“燈籠” 滑翔軌跡\n  • 2種滑翔傘\n  • 4種噴漆圖案\n  • 70% 額外賽季匹配經驗值\n  • 20% 額外賽季好友匹配經驗值\n  • 額外的每週挑戰\n  • 天狐進度挑戰\n  • 以及更多獎勵\n\n玩遊戲以提升你的英雄季卡，解鎖超過75中獎勵（一般情況下全解鎖需要75至150小時的遊玩時間）想要更快解鎖？你隨時可以用V幣購買戰階等級！\n  • “諸神黃昏”外加4套其他服裝\n  • 3款鋤頭\n  • 4種姿勢\n  • 2款滑翔傘\n  • 4種背部裝飾\n  • 4種滑翔軌跡\n  • 11款塗鴉\n  • 1300V幣\n  •以及更多內容！",
                            "pt-br": "Temporada 5: de hoje até 25 de setembro\n\nReceba instantaneamente estes itens avaliados em mais de 10.000 V-Bucks.\n  • Traje Caçadora\n  • Traje Atemporal\n  • Traje Acelerada\n  • Picareta Balãoreta\n  • Acessório para as Costas Conexão\n  • Rastro de Queda Livre Lanternas\n  • 2 Asas-deltas\n  • 4 Sprays\n  • 70% de Bônus de EXP da Temporada em Partidas\n  • 20% de Bônus de EXP da Temporada em Partidas com Amigos\n  • Desafios Semanais Extras\n  • Desafios Atemporal Progressivos\n  • e mais!\n\nJogue para subir o nível do seu Passe de Batalha, desbloqueando mais de 75 recompensas (leva em média 75 a 150 horas de jogo). Quer mais rápido? Você pode usar V-Bucks para comprar categorias a qualquer momento!\n  • O Ragnarok e mais 4 outros trajes\n  • 3 Picaretas\n  • 4 Gestos\n  • 2 Asas-deltas\n  • 4 Acessórios para as Costas\n  • 4 Rastros de Queda Livre\n  • 11 Sprays\n  • 1.300 V-Bucks\n  • e muito mais!",
                            "en": "Season 5: Now thru Sept 25\n\nInstantly get these items valued at over 10,000 V-Bucks.\n  • “Huntress” Outfit\n  • “Drift” Outfit\n  • “Redline” Outfit\n  • “Balloon Axe” Pickaxe\n  • “Uplink” Back Bling\n  • “Lanterns” Skydiving Trail\n  • 2 Gliders\n  • 4 Sprays\n  • 70% Bonus Season Match XP\n  • 20% Bonus Season Friend Match XP\n  • Extra Weekly Challenges\n  • Drift Progressive Challenges\n  • and more!\n\nPlay to level up your Battle Pass, unlocking up to 75+ more rewards (typically takes 75 to 150 hours of play). Want it all faster? You can use V-Bucks to buy tiers any time!\n  • “Ragnarok” plus 4 other outfits\n  • 3 Pickaxes\n  • 4 Emotes\n  • 2 Gliders\n  • 4 Back Blings\n  • 4 Skydiving Trails\n  • 11 Sprays\n  • 1,300 V-Bucks\n  • and so much more!",
                            "it": "Incrementa di 5 secondi la durata dell'effetto attivo di Allo sbaraglio.",
                            "fr": "Saison 5 : jusqu'au 25 septembre\n\nRecevez immédiatement ces objets d'une valeur supérieure à 10 000 V-bucks.\n  • Tenue Chasseresse\n  • Tenue Nomade\n  • Tenue Ligne rouge\n  • Pioche Baudruche\n  • Accessoire de dos Radiotransmetteur\n  • Traînée de condensation Lanternes\n  • 2 planeurs\n  • 4 aérosols\n  • Bonus d'EXP de saison de 70%\n  • Bonus d'EXP de saison de 20% pour des amis\n  • Des défis hebdomadaires supplémentaires\n  • Les défis progressifs du Nomade\n  • Et plus !\n\nJouez pour augmenter le niveau de votre Passe de combat et déverrouiller plus de 75 récompenses (nécessitant de 75 à 150 heures de jeu). Envie d'aller plus vite ? Utilisez vos V-bucks pour acheter des niveaux à tout moment !\n  • Ragnarök plus 4 autres tenues\n  • 3 pioches\n  • 4 emotes\n  • 2 planeurs\n  • 4 accessoires de dos\n  • 4 traînées de condensation\n  • 11 aérosols\n  • 1300 V-bucks\n  • Et plus !",
                            "zh-cn": "第5赛季：从今天起直到9月25号\n\n立即获得以下总价值超过1万V币的物品。\n  •“女猎手”套装  •“天狐”套装\n  • “红线”套装\n  • “气球斧”锄头\n  • “上传” 背部装饰\n  •“灯笼” 滑翔轨迹\n  • 2种滑翔伞\n  • 4种喷漆图案\n  • 70% 额外赛季匹配经验值\n  • 20% 额外赛季好友匹配经验值\n  • 额外的每周挑战\n  • 天狐进度挑战\n  • 以及更多奖励\n\n玩游戏以提升你的英雄季卡，解锁超过75中奖励（一般情况下全解锁需要75至150小时的游玩时间）想要更快解锁？你随时可以用V币购买战阶等级！\n  • “诸神黄昏”外加4套其他服装\n  • 3款锄头\n  • 4种姿势\n  • 2款滑翔伞\n  • 4种背部装饰\n  • 4种滑翔轨迹\n  • 11款涂鸦\n  • 1300V币\n  •以及更多内容！",
                            "es": "Temporada 5: Desde ahora hasta el 25 de septiembre\n\nConsigue instantáneamente estos objetos valorados en más de 10 000 paVos.\n  • Traje de Cazadora.\n  • Traje de Deriva.\n  • Traje de Revolucionada.\n  • Pico Hacha globo.\n  • Accesorio mochilero Enlace ascendente.\n  • Estela de descenso Farolillos.\n  • 2 alas delta.\n  • 4 grafitis.\n  • Bonificación de PE de partida de temporada del 70 %.\n  • Bonificación de PE de partida amistosa de temporada del 20 %.\n  • Desafíos semanales adicionales.\n  • Desafíos progresivos de Deriva.\n  • ¡Y mucho más!\n\nJuega para subir de nivel tu pase de batalla y desbloquea más de 75 recompensas adicionales (suele llevar entre 75 y 150 horas de juego). ¿Lo quieres más rápido? ¡Puedes usar paVos para comprar niveles siempre que quieras!\n  •  Ragnarok más otros 4 trajes.\n  • 3 picos.\n  • 4 gestos.\n  • 2 alas delta.\n  • 4 accesorios mochileros.\n  • 4 estelas de descenso.\n  • 11 grafitis.\n  • 1300 paVos\n  • ¡Y mucho más!",
                            "ar": "Season 5: Now thru Sept 25\n\nInstantly get these items valued at over 10,000 V-Bucks.\n  • “Huntress” Outfit\n  • “Drift” Outfit\n  • “Redline” Outfit\n  • “Balloon Axe” Pickaxe\n  • “Uplink” Back Bling\n  • “Lanterns” Skydiving Trail\n  • 2 Gliders\n  • 4 Sprays\n  • 70% Bonus Season Match XP\n  • 20% Bonus Season Friend Match XP\n  • Extra Weekly Challenges\n  • Drift Progressive Challenges\n  • and more!\n\nPlay to level up your Battle Pass, unlocking up to 75+ more rewards (typically takes 75 to 150 hours of play). Want it all faster? You can use V-Bucks to buy tiers any time!\n  • “Ragnarok” plus 4 other outfits\n  • 3 Pickaxes\n  • 4 Emotes\n  • 2 Gliders\n  • 4 Back Blings\n  • 4 Skydiving Trails\n  • 11 Sprays\n  • 1,300 V-Bucks\n  • and so much more!",
                            "ja": "シーズン5: 9月25日まで\n\n10,000 V-Bucks以上の価値があるアイテムをすぐに手に入れましょう\n  ・「ハントレス」コスチューム\n  ・「ドリフト」コスチューム\n  ・「レッドライン」コスチューム\n  ・「バルーンアックス」ツルハシ\n  ・「アップリンク」バックアクセサリー\n  ・「ランタン」スカイダイビングトレイル\n  ・グライダー2個\n  ・スプレー4個\n  ・シーズンマッチXPの70%ボーナス\n  ・シーズンフレンドマッチXPの20%ボーナス\n  ・追加のウィークリーチャレンジ\n  ・ドリフトプログレッシブチャレンジ\n  ・他にも色々！\n\nプレイしてバトルパスのレベルを上げると、75以上の報酬をアンロックできます(通常、プレイにかかる時間は75～150時間程度)。もっと早く報酬を全部集めたい？ V-Bucksでいつでもティアを購入できます！\n  ・「ラグナロク」とさらに他のコスチュームx4\n  ・ツルハシx3\n  ・エモートx4\n  ・グライダーx2\n  バックアクセサリーx4\n  スカイダイビングトレイルx4\n  ・スプレーx11\n  ・1,300 V-Bucks\n  他にも色々！",
                            "pl": "Sezon 5: potrwa do 25 września\n\nOtrzymasz od razu poniższe przedmioty o wartości ponad 10 000 V-dolców:\n  • Strój: Łowczyni\n  • Strój: Drift\n  • Strój: Prędkość Graniczna\n  • Kilof: Balon\n  • Plecak: Łącznik\n  • Smuga: Latarnie\n  • 2 lotnie\n  • 4 graffiti\n  • Sezonowa premia +70% PD za grę\n  • Sezonowa premia +20% PD za grę ze znajomym\n  • Dostęp do dodatkowych wyzwań tygodniowych\n  • Dostęp do progresywnych wyzwań Drifta\n  • I jeszcze więcej!\n\nGraj, aby awansować karnet bojowy i odkryć do 75 nagród (ich zdobycie zajmuje zwykle od 75 do 150 godz. gry). Chcesz rozwijać się szybciej? W każdej chwili możesz kupić poziomy za V-dolce!\n  • Zmierzch Bogów plus 4 inne stroje\n  • 3 kilofy\n  • 4 emotki\n  • 2 lotnie\n  • 4 plecaki\n  • 4 smugi\n  • 11 graffiti\n  • 1300 V-dolców\n  • I dużo więcej!",
                            "es-419": "Temporada 5: Ahora hasta el 25 de septiembre\n\nObtén al instante estos objetos que cuestan más de 10 000 monedas V.\n  • Atuendo \"Cazadora\"\n  • Atuendo \"Deriva\"\n  • Atuendo \"Línea roja\"\n  • Pico \"Globo\"\n  • Mochila retro \"Enlace ascendente\"\n  • Rastro de caída libre \"Faroles\"\n  • 2 planeadores\n  • 4 aerosoles\n  • 70 % de bonificación de PE para partidas de la temporada\n  • 20% de PE de bonificación para partidas con amigos en la temporada\n  • Desafíos semanales adicionales\n  • Desafíos progresivos de Deriva\n  • ¡Y mucho más!\n\nJuega para subir de nivel tu pase de batalla y desbloquear más de 75 recompensas adicionales (normalmente toma de 75 a 150 horas de juego). ¿Lo quieres todo más rápido? ¡Puedes utilizar monedas V para comprar niveles cuando quieras!\n  • \"Ragnarok\" más otros 4 atuendos\n  • 3 picos\n  • 4 gestos\n  • 2 planeadores\n  • 4 mochilas retro\n  • 4 rastros de caída libre\n  • 11 aerosoles\n  • 1300 monedas V\n  • ¡Y mucho más!",
                            "tr": "5. Sezon: Şu andan 25 Eylül’e kadar\n\n10.000 V-Papel’in üzerinde değeri olan bu içerikleri hemen edin.\n  • “Avcı Viking” Kıyafeti\n  • “Drift” Kıyafeti\n  • “Gözüpek Yarışçı” Kıyafeti\n  • “Balon Kazma”\n  • “Telsizli Çanta” Sırt Süsü\n  • “Fenerler” Hava Dalışı İzi\n  • 2 Planör\n  • 4 Sprey\n  • %70 Bonus Sezonluk Maç TP’si\n  • %20 Bonus Sezonluk Arkadaşlar için Maç TP’si\n  • İlave Haftalık Görevlere Erişim\n  • İlerlemeli Drift Görevleri\n  • ve çok daha fazlası!\n\nBattle Royale oynayarak Savaş Bileti’nin seviyesini yükselt ve 75’ten fazla ödülü aç (genelde 75 ila 150 saat oynama gerektirir). Hepsini daha hızlı almak mı istiyorsun? V-Papel karşılığında istediğin zaman aşama açabilirsin!\n  • “Ragnarok” artı 4 kıyafet daha\n  • 3 Kazma\n  • 4 İfade\n  • 2 Planör\n  • 4 Sırt Süsü\n  • 4 Hava Dalışı İzi\n  • 11 Sprey\n  • 1.300 V-Papel\n  • ve çok daha fazlası!"
                        },
                        "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_BR_Season5_BattlePassWithLevels.DA_BR_Season5_BattlePassWithLevels",
                        "itemGrants": []
                    },
                    {
                        "offerId": "D51A2F28AAF843C0B208F14197FBFE91",
                        "devName": "BR.Season5.BattlePass.01",
                        "offerType": "StaticPrice",
                        "prices": [
                            {
                                "currencyType": "MtxCurrency",
                                "currencySubType": "",
                                "regularPrice": 950,
                                "finalPrice": 950,
                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                "basePrice": 950
                            }
                        ],
                        "categories": [],
                        "dailyLimit": -1,
                        "weeklyLimit": -1,
                        "monthlyLimit": -1,
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
                            ""
                        ],
                        "requirements": [
                            {
                                "requirementType": "DenyOnFulfillment",
                                "requiredId": "2B4936F24F3179416FEFD49DA5C4B64E",
                                "minQuantity": 1
                            }
                        ],
                        "metaInfo": [],
                        "catalogGroup": "",
                        "catalogGroupPriority": 0,
                        "sortPriority": 1,
                        "title": {
                            "de": "Battle Pass",
                            "ru": "Боевой пропуск",
                            "ko": "배틀패스",
                            "zh-hant": "英雄季卡",
                            "pt-br": "Passe de Batalha",
                            "en": "Battle Pass",
                            "it": "Pass battaglia",
                            "fr": "Passe de combat",
                            "zh-cn": "英雄季卡",
                            "es": "Pase de batalla",
                            "ar": "Battle Pass",
                            "ja": "バトルパス",
                            "pl": "Karnet bojowy",
                            "es-419": "Pase de batalla",
                            "tr": "Savaş Bileti"
                        },
                        "shortDescription": {
                            "de": "Saison 5",
                            "ru": "Сезон 5",
                            "ko": "시즌 5",
                            "zh-hant": "第5賽季",
                            "pt-br": "Temporada 5",
                            "en": "Season 5",
                            "it": "Stagione 5",
                            "fr": "Saison 5",
                            "zh-cn": "第5赛季",
                            "es": "Temporada 5",
                            "ar": "Season 5",
                            "ja": "シーズン5",
                            "pl": "Sezon 5",
                            "es-419": "Temporada 5",
                            "tr": "5. Sezon"
                        },
                        "description": {
                            "de": "Saison 5: Ab sofort bis 25. September\n\nErhalte sofort diese Gegenstände im Wert von über 3.500 V-Bucks.\n  • Jägerin (Outfit)\n  • Drift (Outfit)\n  • +50 % Saison-Match-EP\n  • +10 % Saison-Match-EP für Freunde\n  • zusätzliche Wöchentliche Herausforderungen\n  • fortschreitende Drift-Herausforderungen\n\nSpiele weiter und stufe deinen Battle Pass auf, um über 100 Belohnungen freizuschalten (im Normalfall werden dafür 75 bis 150 Spielstunden benötigt). Das dauert dir zu lange? Mit V-Bucks kannst du jederzeit Stufen kaufen!\n  • Ragnarök und 5 weitere Outfits\n  • 4 Spitzhacken\n  • 5 Emotes\n  • 4 Hängegleiter\n  • 5 Rücken-Accessoires\n  • 5 Flugspuren\n  • 15 Spraymotive\n  • 1.300 V-Bucks\n  • und noch eine ganze Menge mehr!",
                            "ru": "Пятый сезон: до 25 сентября\n\nСразу же получите предметы стоимостью более 3500 В-баксов!\n  • экипировка Астрид;\n  • экипировка Ронина;\n  • +50% к опыту за матчи сезона;\n  • +10% к опыту друзей за матчи сезона;\n  • дополнительные еженедельные испытания;\n  • последовательные испытания Ронина.\n\nИграйте, повышайте уровень боевого пропуска — и вас ждут более 100 наград. Обычно, чтобы открыть все награды, требуется 75–150 часов игры; но если вы не хотите ждать, этот процесс можно ускорить за В-баксы.\n  • экипировка Рагнарёка и ещё 5 костюмов;\n  • 4 кирки;\n  • 5 эмоций;\n  • 4 дельтаплана;\n  • 5 украшений на спину;\n  • 5 воздушных следов;\n  • 15 граффити;\n  • 1300 В-баксов;\n  • и это ещё не всё!",
                            "ko": "시즌 5: 9월 25일 종료\n\n3,500 V-Bucks 이상의 가치가 있는 여러 아이템을 즉시 받아가세요.\n  • 헌트리스 의상\n  • 드리프트 의상\n  • 50% 보너스 시즌 매치 XP\n  • 10% 보너스 시즌 친구 매치 XP\n  • 추가 주간 도전\n  • 드리프트 연속 도전\n\n배틀패스 티어를 올려서 100개 이상의 보상을 획득해보세요(보통 75-150시간 소요). 더 빨리 보상을 얻고 싶으신가요? V-Bucks를 사용해서 언제든지 티어를 구매할 수 있습니다!\n  • 라그나로크 외 의상 5개\n  • 곡괭이 4개\n  • 이모트 5개\n  • 글라이더 4개\n  • 등 장신구 5개\n  • 스카이다이빙 트레일 5개\n  • 스프레이 15개\n  • 1,300 V-Bucks\n  • 그 외 많은 혜택!",
                            "zh-hant": "第5賽季：從現在起到9月25日\n\n立即獲得這些價值超過3500V幣的物品。\n  • 女獵手服裝\n  • 天狐服裝\n  • 50%額外賽季比賽經驗\n  • 10%額外賽季好友比賽經驗\n  • 額外的每週挑戰\n  • 天狐漸進挑戰\n\n通過遊玩升級你的英雄季卡，解鎖超過100項獎勵（通常需要75到150個小時的遊玩時間）。希望更快嗎？你可以隨時使用V幣購買戰階！\n  • “諸神黃昏”外加5套其他服裝\n  • 4個鋤頭\n  • 5個姿勢\n  • 4個滑翔傘\n  • 5個背部裝飾\n  • 5個滑翔軌跡\n  • 15個塗鴉\n  • 1300V幣\n  •以及更多！",
                            "pt-br": "Temporada 5: de hoje até 25 de julho\n\nReceba instantaneamente estes itens avaliados em mais de 3.500 V-Bucks.\n  • Traje Caçadora\n  • Traje Atemporal\n  • 50% de Bônus de EXP da Temporada em Partidas\n  • 10% de Bônus de EXP da Temporada em Partidas com Amigos\n  • Desafios Semanais Extras\n  • Desafios Atemporal Progressivos\n\nJogue para subir o nível do seu Passe de Batalha, desbloqueando mais de 100 recompensas (leva em média 75 a 150 horas de jogo). Quer mais rápido? Você pode usar V-Bucks para comprar categorias a qualquer momento!\n  • O Ragnarok e mais 5 outros trajes\n  • 4 Picaretas\n  • 5 Gestos\n  • 4 Asas-deltas\n  • 5 Acessórios para as Costas\n  • 5 Rastros de Queda Livre\n  • 15 Sprays\n  • 1.300 V-Bucks\n  • e muito mais!",
                            "en": "Season 5: Now thru Sept 25\n\nInstantly get these items valued at over 3,500 V-Bucks.\n  • Huntress Outfit\n  • Drift Outfit\n  • 50% Bonus Season Match XP\n  • 10% Bonus Season Friend Match XP\n  • Extra Weekly Challenges\n  • Drift Progressive Challenges\n\nPlay to level up your Battle Pass, unlocking over 100 rewards (typically takes 75 to 150 hours of play). Want it all faster? You can use V-Bucks to buy tiers any time!\n  • “Ragnarok” plus 5 other outfits\n  • 4 Pickaxes\n  • 5 Emotes\n  • 4 Gliders\n  • 5 Back Blings\n  • 5 Skydiving Trails\n  • 15 Sprays\n  • 1,300 V-Bucks\n  • and so much more!",
                            "it": "Stagione 5: fino al 25 settembre\n\nOttieni subito questi oggetti dal valore di oltre 3.500 V-buck!\n  • Costume Cacciatrice\n  • Costume Alla deriva\n  • Bonus del 50% dei PE partite stagionali\n  • Bonus del 10% dei PE partite amico\n  • Sfide settimanali extra\n  • Sfide progressive Alla deriva\n\nGioca per aumentare di livello il tuo Pass battaglia, sbloccando fino a 100 ricompense (necessarie tra le 75-150 ore di gioco). Vuoi tutto più in fretta? Puoi usare i V-buck per acquistare i livelli in qualsiasi momento!\n  • \"Ragnarok\" e altri 5 costumi\n  • 4 picconi\n  • 5 emote\n  • 4 deltaplani\n  • 5 dorsi decorativi\n  • 5 scie Skydive\n  • 15 spray\n  • 1300 V-buck\n  • ...e molto altro ancora!",
                            "fr": "Saison 5 : jusqu'au 25 septembre\n\nRecevez immédiatement ces objets d'une valeur supérieure à 3500 V-bucks.\n  • Tenue Chasseresse\n  • Tenue Nomade\n  • Bonus d'EXP de saison de 50%\n  • Bonus d'EXP de saison de 10% pour des amis\n  • Des défis hebdomadaires supplémentaires\n  • Les défis progressifs du Nomade\n\n Jouez pour augmenter le niveau de votre Passe de combat et déverrouiller plus de 100 récompenses (nécessitant de 75 à 150 heures de jeu). Envie d'aller plus vite ? Utilisez vos V-bucks pour acheter des niveaux à tout moment !\n  • Ragnarök plus 5 autres tenues\n  • 4 pioches\n  • 5 emotes\n  • 4 planeurs\n  • 5 accessoires de dos\n  • 5 traînées de condensation\n  • 15 aérosols\n  • 1300 V-bucks\n  • Et plus !",
                            "zh-cn": "第5赛季：从现在起到9月25日\n\n立即获得这些价值超过3500V币的物品。\n  • 女猎手服装\n  • 天狐服装\n  • 50%额外赛季比赛经验\n  • 10%额外赛季好友比赛经验\n  • 额外的每周挑战\n  • 天狐渐进挑战\n\n通过游玩升级你的英雄季卡，解锁超过100项奖励（通常需要75到150个小时的游玩时间）。希望更快吗？你可以随时使用V币购买战阶！\n  • “诸神黄昏”外加5套其他服装\n  • 4个锄头\n  • 5个姿势\n  • 4个滑翔伞\n  • 5个背部装饰\n  • 5个滑翔轨迹\n  • 15个涂鸦\n  • 1300V币\n  •以及更多！",
                            "es": "Temporada 5: Desde ahora hasta el 25 de septiembre\n\nConsigue instantáneamente estos objetos valorados en más de 3500 paVos.\n  • Traje de Cazadora.\n  • Traje de Deriva.\n  • Bonificación de PE de partida de temporada del 50 %.\n  • Bonificación de PE de partida amistosa de temporada del 10 %.\n  • Desafíos semanales adicionales.\n  •  Desafíos progresivos de Deriva.\n\nJuega para subir de nivel tu pase de batalla y desbloquea más de 100 recompensas (suele llevar entre 75 y 150 horas de juego). ¿Lo quieres más rápido? ¡Puedes usar paVos para comprar niveles siempre que quieras!\n  • Ragnarok más otros 5 trajes.\n  • 4 picos.\n  • 5 gestos.\n  • 4 alas delta.\n  • 5 accesorios mochileros.\n  • 5 estelas de descenso.\n  • 15 grafitis.\n  • 1300 paVos\n • ¡Y mucho más!",
                            "ar": "Season 5: Now thru Sept 25\n\nInstantly get these items valued at over 3,500 V-Bucks.\n  • Huntress Outfit\n  • Drift Outfit\n  • 50% Bonus Season Match XP\n  • 10% Bonus Season Friend Match XP\n  • Extra Weekly Challenges\n  • Drift Progressive Challenges\n\nPlay to level up your Battle Pass, unlocking over 100 rewards (typically takes 75 to 150 hours of play). Want it all faster? You can use V-Bucks to buy tiers any time!\n  • “Ragnarok” plus 5 other outfits\n  • 4 Pickaxes\n  • 5 Emotes\n  • 4 Gliders\n  • 5 Back Blings\n  • 5 Skydiving Trails\n  • 15 Sprays\n  • 1,300 V-Bucks\n  • and so much more!",
                            "ja": "シーズン5: 9月25日まで\n\n3,500 V-Bucks以上の価値があるアイテムをすぐに手に入れましょう\n  ・ハントレスコスチューム\n  ・ドリフトコスチューム\n  ・シーズンマッチXPの50%ボーナス\n  ・シーズンフレンドマッチXPの10%ボーナス\n  ・追加のウィークリーチャレンジ\n  ・ドリフトプログレッシブチャレンジ\n\nプレイしてバトルパスのレベルを上げると、100個以上の報酬をアンロックできます(通常、プレイにかかる時間は75～150時間程度)。もっと早く報酬を全部集めたい？ V-Bucksでいつでもティアを購入できます！\n  ・「ラグナロク」とさらに他のコスチュームx5\n  ・ツルハシx4\n  ・エモートx5\n  ・グライダーx4\n  ・バックアクセサリーx5\n  ・スカイダイビングトレイルx5\n  ・スプレーx15\n  ・1,300 V-Bucks\n  ・他にも色々！",
                            "pl": "Sezon 5: potrwa do 25 września\n\nOtrzymasz od razu poniższe przedmioty o wartości ponad 3 500 V-dolców:\n  • Strój: Łowczyni\n  • Strój: Drift\n  • Sezonowa premia +50% PD za grę\n  • Sezonowa premia +10% PD za grę ze znajomym\n  • Dostęp do dodatkowych wyzwań tygodniowych\n  • Dostęp do progresywnych wyzwań Drifta\n\nGraj, aby awansować karnet bojowy i zdobyć łącznie ponad 100 nagród (ich zebranie zajmuje zwykle od 75 do 150 godz. gry). Chcesz się rozwijać szybciej? W każdej chwili możesz kupić poziomy za V-dolce!\n  • Zmierzch Bogów plus 5 innych strojów\n  • 4 kilofy\n  • 5 emotek\n  • 3 lotnie\n  • 5 plecaków\n  • 5 smug lotni\n  • 15 graffiti\n  • 1 300 V-dolców\n  • I dużo więcej!",
                            "es-419": "Temporada 5: Ahora hasta el 25 de septiembre\n\nObtén estos objetos instantáneamente valuados en más de 3500 monedas V.\n  • Atuendo de Cazadora\n  • Atuendo de Deriva\n  • 50 % de bonificación de PE para partidas de la temporada\n  • 10% de PE de bonificación para partidas con amigos en la temporada\n  • Desafíos semanales adicionales\n  • Desafíos progresivos de Deriva\n\nJuega para subir de nivel tu pase de batalla, desbloqueando más de 100 recompensas (normalmente toma de 75 a 150 horas de juego). ¿Lo quieres todo más rápido? ¡Puedes utilizar monedas V para comprar niveles cuando quieras!\n  • “Ragnarok” más otros 5 atuendos\n  • 4 picos\n  • 5 gestos\n  • 4 planeadores\n  • 5 mochilas retro\n  • 5 rastros de caída libre\n  • 15 aerosoles\n  • 1300 monedas V\n  • ¡Y mucho más!",
                            "tr": "5. Sezon: 25 Eylül’e kadar sürecek\n\n3.500 V-Papel’in üzerinde değeri olan bu içerikleri hemen edin.\n  • Avcı Viking Kıyafeti\n  • Drift Kıyafeti\n  • %50 Bonus Sezonluk Maç TP’si\n  • %10 Bonus Arkadaşlar için Sezonluk Maç TP’si\n  • Fazladan Haftalık Görevler\n  • İlerlemeli Drift Görevleri\n\nBattle Royale oynayarak Savaş Bileti’nin seviyesini yükselt, 100’den fazla ödülü aç (genelde 75 ila 150 saat oynama gerektirir). Hepsine hemen sahip olmak mı istiyorsun? V-Papel kullanarak aşamaları istediğin zaman açabilirsin!\n  • “Ragnarok” artı 5 kıyafet daha\n  • 4 Kazma\n  • 5 İfade\n  • 4 Planör\n  • 5 Sırt Süsü\n  • 5 Hava Dalışı İzi\n  • 15 Sprey\n  • 1.300 V-Papel\n  • ve daha pek çok şey!"
                        },
                        "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_BR_Season5_BattlePass.DA_BR_Season5_BattlePass",
                        "itemGrants": []
                    },
                    {
                        "offerId": "4B2E310BC1AE40B292A16D5AAD747E0A",
                        "devName": "BR.Season5.SingleTier.01",
                        "offerType": "StaticPrice",
                        "prices": [
                            {
                                "currencyType": "MtxCurrency",
                                "currencySubType": "",
                                "regularPrice": 150,
                                "finalPrice": 150,
                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                "basePrice": 150
                            }
                        ],
                        "categories": [],
                        "dailyLimit": -1,
                        "weeklyLimit": -1,
                        "monthlyLimit": -1,
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
                            ""
                        ],
                        "requirements": [],
                        "metaInfo": [],
                        "catalogGroup": "",
                        "catalogGroupPriority": 0,
                        "sortPriority": 0,
                        "title": {
                            "de": "Battle-Pass-Stufe",
                            "ru": "Уровень боевого пропуска",
                            "ko": "배틀패스 티어",
                            "zh-hant": "英雄季卡戰階",
                            "pt-br": "Categoria de Passe de Batalha",
                            "en": "Battle Pass Tier",
                            "it": "Livello Pass battaglia",
                            "fr": "Palier du Passe de combat",
                            "zh-cn": "英雄季卡战阶",
                            "es": "Nivel del pase de batalla",
                            "ar": "Battle Pass Tier",
                            "ja": "バトルパスティア",
                            "pl": "Stopień karnetu bojowego",
                            "es-419": "Nivel de pase de batalla",
                            "tr": "Savaş Bileti Aşaması"
                        },
                        "shortDescription": "",
                        "description": {
                            "de": "Hol dir jetzt tolle Belohnungen!",
                            "ru": "Получите отличные награды!",
                            "ko": "지금 푸짐한 보상을 얻어보세요!",
                            "zh-hant": "現在獲得豐厚獎勵！",
                            "pt-br": "Ganhe recompensas ótimas agora!",
                            "en": "Get great rewards now!",
                            "it": "Ricevi subito magnifiche ricompense!",
                            "fr": "Obtenez de grandes récompenses !",
                            "zh-cn": "现在获得丰厚奖励！",
                            "es": "¡Consigue recompensas increíbles!",
                            "ar": "Get great rewards now!",
                            "ja": "ステキな報酬を今すぐゲット！",
                            "pl": "Zdobądź super nagrody już teraz!",
                            "es-419": "¡Consigue grandes recompensas ahora!",
                            "tr": "Harika ödüllerin sahibi ol!"
                        },
                        "displayAssetPath": "",
                        "itemGrants": []
                    }
                ]
            },
            {
                "name": "BRSeason6",
                "catalogEntries": [
                    {
                        "offerId": "19D4A5ACC90B4CDF88766A0C8A6D13FB",
                        "devName": "BR.Season6.BattleBundle.01",
                        "offerType": "StaticPrice",
                        "prices": [
                            {
                                "currencyType": "MtxCurrency",
                                "currencySubType": "",
                                "regularPrice": 4700,
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
                            ""
                        ],
                        "requirements": [
                            {
                                "requirementType": "DenyOnFulfillment",
                                "requiredId": "854FAED044783BF137181887C325FFD2",
                                "minQuantity": 1
                            }
                        ],
                        "metaInfo": [],
                        "catalogGroup": "",
                        "catalogGroupPriority": 0,
                        "sortPriority": 0,
                        "title": {
                            "de": "Battle-Pass-Paket",
                            "ru": "Боевой комплект",
                            "ko": "배틀번들",
                            "zh-hant": "戰鬥套組",
                            "pt-br": "Pacotão de Batalha",
                            "en": "Battle Bundle",
                            "it": "Bundle battaglia",
                            "fr": "Pack de combat",
                            "zh-cn": "战斗套组",
                            "es": "Lote de batalla",
                            "ar": "Battle Bundle",
                            "ja": "バトルバンドル",
                            "pl": "Zestaw bojowy",
                            "es-419": "Paquete de batalla",
                            "tr": "Savaş Paketi"
                        },
                        "shortDescription": {
                            "de": "Battle Pass + 25 Stufen!",
                            "ru": "Боевой пропуск + 25 уровней!",
                            "ko": "배틀패스 + 25티어!",
                            "zh-hant": "英雄季卡增加25戰階！",
                            "pt-br": "Passe de Batalha + 25 categorias!",
                            "en": "Battle Pass + 25 tiers!",
                            "it": "Pass battaglia + 25 livelli!",
                            "fr": "Passe de combat + 25 paliers !",
                            "zh-cn": "英雄季卡增加25战阶！",
                            "es": "¡Pase de batalla y 25 niveles!",
                            "ar": "Battle Pass + 25 tiers!",
                            "ja": "バトルパス+25ティア！",
                            "pl": "Karnet bojowy + 25 stopni!",
                            "es-419": "¡Pase de batalla + 25 niveles!",
                            "tr": "Savaş Bileti + 25 aşama!"
                        },
                        "description": {
                            "de": "Saison 6: Ab sofort bis 6. Dezember\n\nErhalte sofort diese Gegenstände im Wert von über 10.000 V-Bucks.\n  • Calamity (Outfit)\n  • DJ Yonder (Outfit)\n  • Aufgesattelt (Outfit)\n  • Krachender Mix (Spitzhacke)\n  • Picknick (Hängegleiter)\n  • Märchenumhang (Rücken-Accessoire)\n  • 3 Spraymotive\n  • Wuffel (Gefährte)\n  • Düsen (Flugspur)\n  • +70 % Saison-Match-EP\n  • +20 % Saison-Match-EP für Freunde\n  • zusätzliche Wöchentliche Herausforderungen\n  • Calamity-Herausforderungen  • und mehr!\n\nSpiele weiter und stufe deinen Battle Pass auf, um über 75 weitere Belohnungen freizuschalten (im Normalfall werden dafür 75 bis 150 Spielstunden benötigt). Das dauert dir zu lange? Mit V-Bucks kannst du jederzeit Stufen kaufen!\n  • Wolf und 3 weitere Outfits\n  • 2 Gefährten\n  • 2 Spitzhacken\n  • 4 Emotes\n  • 2 Hängegleiter\n  • 4 Rücken-Accessoires\n  • 4 Flugspuren\n  • 11 Spraymotive\n  • 1.300 V-Bucks\n  • und noch eine ganze Menge mehr!",
                            "ru": "Шестой сезон: до 6 декабря\n\nСразу же получите предметы стоимостью более 10 000 В-баксов!\n  • экипировка Тёмного рейнджера;\n  • экипировка Эм Си Ламы;\n  • экипировка Наездника;\n  • кирка «Эквалайзер»;\n  • дельтаплан «Гостинец»;\n  • украшение на спину «Красный плащ»;\n  • 3 граффити;\n  • питомец Дружок;\n  • воздушный след «Выхлоп»;\n  • +70% к опыту за матчи сезона;\n  • +20% к опыту друзей за матчи сезона;\n  • дополнительные еженедельные испытания;\n  • испытания Тёмного рейнджера;\n  • и это ещё не всё!\n\nИграйте, повышайте уровень боевого пропуска — и вас ждут более 75 наград. Обычно, чтобы открыть все награды, требуется 75–150 часов игры; но если вы не хотите ждать, этот процесс можно ускорить за В-баксы.\n  • экипировка Оборотня и ещё 3 костюма;\n  • 2 питомца;\n  • 2 кирки;\n  • 4 эмоции;\n  • 2 дельтаплана;\n  • 4 украшения на спину;\n  • 4 воздушных следов;\n  • 11 граффити;\n  • 1 300 В-баксов;\n  • и это ещё не всё!",
                            "ko": "시즌 6: 12월 6일 종료\n\n10,000 V-Bucks 이상의 가치가 있는 여러 아이템을 즉시 받아가세요.\n  • 캘러미티 의상\n  • DJ 욘더 의상\n  • 라마 라이더 의상\n  • 스매시 업 곡괭이\n  • 피크닉 글라이더\n  • 빨간 망토 등 장신구\n  • 스프레이 3개\n  • 보니 애완동물\n  • 엔진 불꽃 스카이다이빙 트레일\n  • 70% 보너스 시즌 매치 XP\n  • 20% 보너스 시즌 친구 매치 XP\n  • 추가 주간 도전\n  • 캘러미티 연속 도전\n  • 그 외 혜택!\n\n배틀패스 티어를 올려서 75개 이상의 보상을 획득해보세요(보통 75-150시간 소요). 더 빨리 보상을 얻고 싶으신가요? V-Bucks를 사용해서 언제든지 티어를 구매할 수 있습니다!\n  • 다이어 외 의상 3개\n  • 애완동물 2개\n  • 곡괭이 2개\n  • 이모트 4개\n  • 글라이더 2개\n  • 등 장신구 4개\n  • 스카이다이빙 트레일 4개\n  • 스프레이 11개\n  • 1,300 V-Bucks\n  • 그 외 많은 혜택!",
                            "zh-hant": "第六賽季：現在起至12月6日\n\n立即獲得以下總價值逾10000V幣的物品。\n  • 災厄俠客服裝\n  • 金碟鐵馬服裝\n  • 策馬奔騰服裝\n  • 粉碎鎬\n  • 野餐滑翔傘\n  • 寓言斗篷背部裝飾\n  • 3個塗鴉\n  • 犬崽寵物\n  • 助力推進滑翔軌跡\n  • 70%額外賽季匹配經驗\n  • 20%額外賽季好友匹配經驗\n  • 額外每週挑戰\n  • 災厄俠客挑戰\n  • 及其他獎勵！\n\n通過遊玩提升英雄勳章戰階，解鎖百餘獎勵（通常需要75到150個小時的遊玩時間）。希望更快嗎？你可以隨時使用V幣購買戰階！\n  • 驚懼狼人與其他三種服裝\n  • 2只寵物\n  • 2個鎬\n  • 4個姿勢\n  • 2個滑翔傘\n  • 4個背部裝飾\n  • 4個滑翔軌跡\n  • 11個塗鴉\n  • 1300V幣\n  • 及其他獎勵！",
                            "pt-br": "Temporada 6: de hoje até 6 de dezembro\n\nGanhe instantaneamente esses itens avaliados em mais de 10.000 V-Bucks.\n  • Traje Calamidade\n  • Traje DJ Além\n  • Traje Lhaminha\n  • Picareta Quebra Tudo\n  • Asa-delta Piquenique\n  • Acessório para as Costas Capa Fabulosa\n  • 3 Sprays\n  • Mascote Ossíneo\n  • Rastro de Queda Livre Exaustor\n  • 70% de Bônus de EXP da Temporada em Partidas\n  • 20% de Bônus de EXP da Temporada em Partidas com Amigos\n  • Desafios Semanais Extras\n  • Desafios Calamidade\n  • e mais!\n\nJogue para subir o nível do seu Passe de Batalha, desbloqueando mais de 75 recompensas (leva em média 75 a 150 horas de jogo). Quer mais rápido? Você pode usar V-Bucks para comprar categorias a qualquer momento!\n  • Lupino e mais 3 outros trajes\n  • 2 Mascotes\n  • 2 Picaretas\n  • 4 Gestos\n  • 2 Asas-deltas\n  • 4 Acessórios para as Costas\n  • 4 Rastros de Queda Livre\n  • 11 Sprays\n  • 1.300 V-Bucks\n  • e muito mais!",
                            "en": "Season 6: Now thru Dec 6\n\nInstantly get these items valued at over 10,000 V-Bucks.\n  • Calamity Outfit\n  • DJ Yonder Outfit\n  • Giddy-up Outfit\n  • Smash-Up Pickaxe\n  • Picnic Glider\n  • Fabled Cape Back Bling\n  • 3 Sprays\n  • Bonesy Pet\n  • Exhaust Skydiving Trail\n  • 70% Bonus Season Match XP\n  • 20% Bonus Season Friend Match XP\n  • Extra Weekly Challenges\n  • Calamity Challenges\n  • and more!\n\nPlay to level up your Battle Pass, unlocking up to 75+ more rewards (typically takes 75 to 150 hours of play). Want it all faster? You can use V-Bucks to buy tiers any time!\n  • Dire plus 3 other outfits\n  • 2 Pets\n  • 2 Pickaxes\n  • 4 Emotes\n  • 2 Gliders\n  • 4 Back Blings\n  • 4 Skydiving Trails\n  • 11 Sprays\n  • 1,300 V-Bucks\n  • and so much more!",
                            "it": "Stagione 6: da ora al 6 dicembre\n\nOttieni subito questi oggetti, per un valore di oltre 10.000 V-buck.\n  • Costume Calamity\n  • Costume DJ Yonder\n  • Costume Giddy-up\n  • Piccone Smash-Up\n  • Deltaplano Picnic\n  • Dorso decorativo Fabled Cape\n  • 3 spray\n  • Piccolo amico Bonesy\n  • Scia skydive Exhaust\n  • 70% di bonus ai PE partita stagione\n  • 20% di bonus ai PE partita amichevole stagione\n  • Sfide settimanali extra\n  • Sfide Calamity\n  • E altro ancora!\n\nGioca per far salire di livello il tuo Pass battaglia e sblocca fino a 75+ altre ricompense (tipicamente occorrono da 75 a 150 ore di gioco). Vuoi tutto più in fretta? Puoi usare i V-buck per comprare livelli in qualsiasi momento!\n  • Manny più 3 altri costumi\n  • 2 Piccoli amici\n  • 2 picconi\n  • 4 emote\n  • 2 deltaplani\n  • 4 dorsi decorativi\n  • 4 scie skydive\n  • 11 spray\n  • 1300 V-buck\n  • E molto altro ancora!",
                            "fr": "Saison 6 : jusqu'au 6 décembre\n\nRecevez immédiatement ces objets d'une valeur supérieure à 10 000 V-bucks.\n  • Tenue Calamité\n  • Tenue DJ Lama\n  • Tenue Fier destrier\n  • Pioche Contrôleur DJ\n  • Planeur Pique-nique\n  • Accessoire de dos Cape rouge\n  • 3 aérosols\n  • Le compagnon Ticaillou\n  • Traînée de condensation Gaz d'échappement\n  • Bonus d'EXP de saison de 70%\n  • Bonus d'EXP de saison de 20% pour des amis\n  • Des défis hebdomadaires supplémentaires\n  • Les défis progressifs de Calamité\n  • Et plus !\n\nJouez pour augmenter le niveau de votre Passe de combat et déverrouiller plus de 75 récompenses (nécessitant de 75 à 150 heures de jeu). Envie d'aller plus vite ? Utilisez vos V-bucks pour acheter des niveaux à tout moment !\n  • Lycan plus 3 autres tenues\n  • 2 compagnons\n  • 2 pioches\n  • 4 emotes\n  • 2 planeurs\n  • 4 accessoires de dos\n  • 4 traînées de condensation\n  • 11 aérosols\n  • 1 300 V-bucks\n  • Et plus !",
                            "zh-cn": "第六赛季：现在起至12月6日\n\n立即获得以下总价值逾10000V币的物品。\n  • 灾厄侠客服装\n  • 金碟铁马服装\n  • 策马奔腾服装\n  • 粉碎镐\n  • 野餐滑翔伞\n  • 寓言斗篷背部装饰\n  • 3个涂鸦\n  • 犬崽宠物\n  • 助力推进滑翔轨迹\n  • 70%额外赛季匹配经验\n  • 20%额外赛季好友匹配经验\n  • 额外每周挑战\n  • 灾厄侠客挑战\n  • 及其他奖励！\n\n通过游玩提升英雄勋章战阶，解锁百余奖励（通常需要75到150个小时的游玩时间）。希望更快吗？你可以随时使用V币购买战阶！\n  • 惊惧狼人与其他三种服装\n  • 2只宠物\n  • 2个镐\n  • 4个姿势\n  • 2个滑翔伞\n  • 4个背部装饰\n  • 4个滑翔轨迹\n  • 11个涂鸦\n  • 1300V币\n  • 及其他奖励！",
                            "es": "Temporada 6: Desde ahora hasta el 6 de diciembre.\n\nConsigue instantáneamente estos objetos valorados en más de 10 000 paVos.\n  • Traje de Calamidad.\n  • Traje de Llama DJ.\n  • Traje de Galopante.\n  • Pico Pico de mezclas.\n  • Ala delta Picnic.\n  • Accesorio mochilero Capa de Fábula.\n  • 3 grafitis.\n  • Mascota Huesete.\n  • Estela de descenso Tubo de escape.\n  • Bonificación de PE de partida de temporada del 70 %.\n  • Bonificación de PE de partida amistosa de temporada del 20 %.\n  • Desafíos semanales adicionales.\n  • Desafíos de Calamidad.\n  • ¡Y mucho más!\n\nJuega para subir de nivel el pase de batalla y desbloquea más de 75 recompensas adicionales (suele llevar entre 75 y 150 horas de juego). ¿Lo quieres más rápido? ¡Puedes usar paVos para comprar niveles siempre que quieras!\n  •  Lobuno más otros 3 trajes.\n  • 2 mascotas.\n  • 2 picos.\n  • 4 gestos.\n  • 2 alas delta.\n  • 4 accesorios mochileros.\n  • 4 estelas de descenso.\n  • 11 grafitis.\n  • 1300 paVos.\n  • ¡Y mucho más!",
                            "ar": "Season 6: Now thru Dec 6\n\nInstantly get these items valued at over 10,000 V-Bucks.\n  • Calamity Outfit\n  • DJ Yonder Outfit\n  • Giddy-up Outfit\n  • Smash-Up Pickaxe\n  • Picnic Glider\n  • Fabled Cape Back Bling\n  • 3 Sprays\n  • Bonesy Pet\n  • Exhaust Skydiving Trail\n  • 70% Bonus Season Match XP\n  • 20% Bonus Season Friend Match XP\n  • Extra Weekly Challenges\n  • Calamity Challenges\n  • and more!\n\nPlay to level up your Battle Pass, unlocking up to 75+ more rewards (typically takes 75 to 150 hours of play). Want it all faster? You can use V-Bucks to buy tiers any time!\n  • Dire plus 3 other outfits\n  • 2 Pets\n  • 2 Pickaxes\n  • 4 Emotes\n  • 2 Gliders\n  • 4 Back Blings\n  • 4 Skydiving Trails\n  • 11 Sprays\n  • 1,300 V-Bucks\n  • and so much more!",
                            "ja": "シーズン6: 12月6日まで\n\n10,000 V-Bucks以上の価値があるアイテムを今すぐ手に入れましょう。\n  • 「カラミティ」コスチューム\n  • 「DJ ヨンダー」コスチューム\n  • 「ギディーアップ」コスチューム\n  • 「スマッシュアップ」ツルハシ\n  • 「ピクニック」グライダー\n  • 「寓話のケープ」バックアクセサリー\n  • スプレーx3\n  • 「ボーンジー」ペット\n  • 「エグゾースト」スカイダイビングトレイル\n  • シーズンマッチXPの70%ボーナス\n  • シーズンフレンドマッチXPの20%ボーナス\n  • 追加のウィークリーチャレンジ\n  • カラミティチャレンジ\n  • 他にも色々！\n\nプレイしてバトルパスのレベルを上げると、75個以上の報酬をアンロックできます(通常、プレイにかかる時間は75～150時間程度)。もっと早く報酬を全部集めたい？ V-Bucksでいつでもティアを購入できます！\n  • ダイアとその他コスチュームx3\n  • ペットx2\n  • ツルハシx2\n  • エモートx4\n  • グライダーx2\n  • バックアクセサリーx4\n  • スカイダイビングトレイルx4\n  • スプレーx11\n  • 1,300 V-Bucks\n  • 他にも色々！",
                            "pl": "Sezon 6: od teraz do 6 grudnia\n\nOtrzymasz od razu poniższe przedmioty o wartości ponad 10 000 V-dolców:\n  • Strój: Kowbojka\n  • Strój: DJ Jak-mu-tam\n  • Strój: Jazda\n  • Kilof: Ostry Rytm\n • Lotnia: Piknik\n • Plecak: Bajkowy Kapturek\n  • 3 graffiti\n  • Pupil: Kostek\n  • Smuga: Spaliny\n  • Sezonowa premia +70% PD za grę\n  • Sezonowa premia +20% PD za grę ze znajomymi\n  • Dostęp do dodatkowych wyzwań tygodnia\n  • Dostęp do wyzwań Kowbojki\n  • I nie tylko!\n\nGraj, aby awansować karnet bojowy i zdobyć do 75 nagród (ich zebranie zajmuje zwykle od 75 do 150 godz. gry). Chcesz rozwijać się szybciej? W każdej chwili możesz kupić stopnie za V-dolce!\n  • Straszliwiec plus 3 inne stroje\n  • 2 pupile\n  • 2 kilofy\n  • 4 emotki\n  • 2 lotnie\n  • 4 plecaki\n  • 4 smugi\n  • 11 graffiti\n  • 1300 V-dolców\n  • I dużo więcej!",
                            "es-419": "Temporada 6: Ahora hasta el 6 de diciembre\n\nObtén al instante estos objetos que cuestan más de 10 000 monedas V.\n  • Atuendo Calamidad\n  • Atuendo DJ Llama\n  • Atuendo Arre llama\n  • Pico Mezclador\n  • Planeador Pícnic\n  • Mochila retro Capa de Fábula\n  • 3 Aerosoles\n  • Mascota Huesitos\n  • Rastro de caída libre Escape\n  • 70% de bonificación de PE para partidas de la temporada\n  • 20% de PE de bonificación para partidas con amigos en la temporada\n  • Desafíos semanales adicionales\n  • Desafíos de Calamidad\n  • ¡y mucho más!\n\nJuega para subir de nivel el pase de batalla y desbloquear más de 75 recompensas (esto lleva entre 75 y 150 horas de juego). ¿Lo quieres todo más rápido? ¡Usa monedas V para comprar niveles en cualquier momento!\n  • Amenaza inminente más otros 3 atuendos\n  • 2 mascotas\n  • 2 picos\n  • 4 gestos\n  • 2 planeadores\n  • 4 mochilas retro\n  • 4 rastros de caída libre\n  • 11 aerosoles\n  • 1300 monedas V\n  • ¡y mucho más!",
                            "tr": "6. Sezon: Şu andan 6 Aralık’a kadar\n\n10.000 V-Papel’in üzerinde değeri olan bu içerikleri hemen edin.\n  • Belalı Kovboy Kıyafeti\n  • DJ Lama Kıyafeti\n  • Dıgıdık Kıyafeti\n  • Miks Kazması\n  • Piknik Sepeti Planörü\n  • Masal Pelerini Sırt Süsü\n  • 3 Sprey\n  • Sadık Dost Şanslı\n  • İniş Motoru Hava Dalışı İzi\n  • %70 Bonus Sezonluk Maç TP’si\n  • %20 Bonus Sezonluk Arkadaşlar için Maç TP’si\n  • İlave Haftalık Görevlere Erişim\n  • Belalı Kovboy Görevleri\n  • ve çok daha fazlası!\n\nBattle Royale oynayarak Savaş Bileti’nin aşamasını yükselt ve 75’ten fazla ödülü aç (genelde 75 ila 150 saat oynama gerektirir). Hepsini daha hızlı almak mı istiyorsun? V-Papel karşılığında istediğin zaman aşama açabilirsin!\n  • Kurtadam artı 3 kıyafet daha\n  • 2 Sadık Dost\n  • 2 Kazma\n  • 4 İfade\n  • 2 Planör\n  • 4 Sırt Süsü\n  • 4 Hava Dalışı İzi\n  • 11 Sprey\n  • 1.300 V-Papel\n  • ve çok daha fazlası!"
                        },
                        "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_BR_Season6_BattlePassWithLevels.DA_BR_Season6_BattlePassWithLevels",
                        "itemGrants": []
                    },
                    {
                        "offerId": "A6FE59C497B844068E1B5D84396F19BA",
                        "devName": "BR.Season6.SingleTier.01",
                        "offerType": "StaticPrice",
                        "prices": [
                            {
                                "currencyType": "MtxCurrency",
                                "currencySubType": "",
                                "regularPrice": 150,
                                "finalPrice": 150,
                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                "basePrice": 150
                            }
                        ],
                        "categories": [],
                        "dailyLimit": -1,
                        "weeklyLimit": -1,
                        "monthlyLimit": -1,
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
                            ""
                        ],
                        "requirements": [],
                        "metaInfo": [],
                        "catalogGroup": "",
                        "catalogGroupPriority": 0,
                        "sortPriority": 0,
                        "title": {
                            "de": "Battle-Pass-Stufe",
                            "ru": "Уровень боевого пропуска",
                            "ko": "배틀패스 티어",
                            "zh-hant": "英雄季卡戰階",
                            "pt-br": "Categoria de Passe de Batalha",
                            "en": "Battle Pass Tier",
                            "it": "Livello Pass battaglia",
                            "fr": "Palier du Passe de combat",
                            "zh-cn": "英雄季卡战阶",
                            "es": "Nivel del pase de batalla",
                            "ar": "Battle Pass Tier",
                            "ja": "バトルパスティア",
                            "pl": "Stopień karnetu bojowego",
                            "es-419": "Nivel de pase de batalla",
                            "tr": "Savaş Bileti Aşaması"
                        },
                        "shortDescription": "",
                        "description": {
                            "de": "Hol dir jetzt tolle Belohnungen!",
                            "ru": "Получите отличные награды!",
                            "ko": "지금 푸짐한 보상을 얻어보세요!",
                            "zh-hant": "現在獲得豐厚獎勵！",
                            "pt-br": "Ganhe recompensas ótimas agora!",
                            "en": "Get great rewards now!",
                            "it": "Ricevi subito magnifiche ricompense!",
                            "fr": "Obtenez de grandes récompenses !",
                            "zh-cn": "现在获得丰厚奖励！",
                            "es": "¡Consigue recompensas increíbles!",
                            "ar": "Get great rewards now!",
                            "ja": "素晴らしい報酬を今すぐゲット！",
                            "pl": "Zdobądź super nagrody już teraz!",
                            "es-419": "¡Consigue grandes recompensas ahora!",
                            "tr": "Harika ödüllerin sahibi ol!"
                        },
                        "displayAssetPath": "",
                        "itemGrants": []
                    },
                    {
                        "offerId": "9C8D0323775A4F59A1D4283E3FDB356C",
                        "devName": "BR.Season6.BattlePass.01",
                        "offerType": "StaticPrice",
                        "prices": [
                            {
                                "currencyType": "MtxCurrency",
                                "currencySubType": "",
                                "regularPrice": 950,
                                "finalPrice": 950,
                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                "basePrice": 950
                            }
                        ],
                        "categories": [],
                        "dailyLimit": -1,
                        "weeklyLimit": -1,
                        "monthlyLimit": -1,
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
                            ""
                        ],
                        "requirements": [
                            {
                                "requirementType": "DenyOnFulfillment",
                                "requiredId": "854FAED044783BF137181887C325FFD2",
                                "minQuantity": 1
                            }
                        ],
                        "metaInfo": [],
                        "catalogGroup": "",
                        "catalogGroupPriority": 0,
                        "sortPriority": 1,
                        "title": {
                            "de": "Battle Pass",
                            "ru": "Боевой пропуск",
                            "ko": "배틀패스",
                            "zh-hant": "英雄季卡",
                            "pt-br": "Passe de Batalha",
                            "en": "Battle Pass",
                            "it": "Pass battaglia",
                            "fr": "Passe de combat",
                            "zh-cn": "英雄季卡",
                            "es": "Pase de batalla",
                            "ar": "Battle Pass",
                            "ja": "バトルパス",
                            "pl": "Karnet bojowy",
                            "es-419": "Pase de batalla",
                            "tr": "Savaş Bileti"
                        },
                        "shortDescription": {
                            "de": "Saison 6",
                            "ru": "Сезон 6",
                            "ko": "시즌 6",
                            "zh-hant": "第6賽季",
                            "pt-br": "Temporada 6",
                            "en": "Season 6",
                            "it": "Stagione 6",
                            "fr": "Saison 6",
                            "zh-cn": "第6赛季",
                            "es": "Temporada 6",
                            "ar": "Season 6",
                            "ja": "シーズン6",
                            "pl": "Sezon 6",
                            "es-419": "Temporada 6",
                            "tr": "6. Sezon"
                        },
                        "description": {
                            "de": "Saison 6: Ab sofort bis 6. Dezember\n\nErhalte sofort diese Gegenstände im Wert von über 3.500 V-Bucks.\n  • Calamity (Outfit)\n  • DJ Yonder (Outfit)\n  • +50 % Saison-Match-EP\n  • +10 % Saison-Match-EP für Freunde\n  • zusätzliche wöchentliche Herausforderungen\n  • fortschreitende Calamity-Herausforderungen\n\nSpiele weiter und stufe deinen Battle Pass auf, um über 100 Belohnungen freizuschalten (im Normalfall werden dafür 75 bis 150 Spielstunden benötigt). Das dauert dir zu lange? Mit V-Bucks kannst du jederzeit Stufen kaufen!\n  • Wolf und 4 weitere Outfits\n  • 3 Gefährten\n  • 3 Spitzhacken\n  • 5 Emotes\n  • 4 Hängegleiter\n  • 4 Rücken-Accessoires\n  • 5 Flugspuren\n  • 14 Spraymotive\n  • 2 Spielsachen\n  • 3 Songs\n  • 1.300 V-Bucks\n  • und noch eine ganze Menge mehr!",
                            "ru": "Шестой сезон: до 6 декабря\n\nСразу же получите предметы стоимостью более 3500 В-баксов!\n  • экипировка Тёмного рейнджера;\n  • экипировка Эм Си Ламы;\n  • +50% к опыту за матчи сезона;\n  • +10% к опыту друзей за матчи сезона;\n  • дополнительные еженедельные испытания;\n  • последовательные испытания Тёмного рейнджера.\n\nИграйте, повышайте уровень боевого пропуска — и вас ждут более 100 наград. Обычно, чтобы открыть все награды, требуется 75–150 часов игры; но если вы не хотите ждать, этот процесс можно ускорить за В-баксы.\n  • экипировка Оборотня и ещё 4 костюма;\n  • 3 питомца;\n  • 3 кирки;\n  • 5 эмоций;\n  • 4 дельтаплана;\n  • 4 украшения на спину;\n  • 5 воздушных следов;\n  • 14 граффити;\n  • 2 игрушки;\n  • 3 музыкальных композиции;\n  • 1300 В-баксов;\n  • и многое другое!",
                            "ko": "시즌 6: 12월 6일 종료\n\n3,500 V-Bucks 이상의 가치가 있는 여러 아이템을 즉시 받아가세요.\n  • 캘러미티 의상\n  • DJ 욘더 의상\n  • 50% 보너스 시즌 매치 XP\n  • 10% 보너스 시즌 친구 매치 XP\n  • 추가 주간 도전\n  • 캘러미티 연속 도전\n\n게임을 플레이하고 배틀패스 티어를 올려서 100개 이상의 보상을 획득해보세요(보통 75-150시간 소요). 더 빨리 보상을 얻고 싶으신가요? V-Bucks를 사용해서 언제든지 티어를 구매할 수 있습니다!\n  • 다이어 외 의상 4개\n  • 애완동물 3개\n  • 곡괭이 3개\n  • 이모트 5개\n  • 글라이더 4개\n  • 등 장신구 4개\n  • 스카이다이빙 트레일 5개\n  • 스프레이 14개\n  • 장난감 2개\n  • 음악 트랙 3개\n  • 1,300 V-Bucks\n  • 그 외 많은 혜택!",
                            "zh-hant": "第六賽季：現在起至12月6日\n\n立即獲得這些價值3500V幣的物品。\n  • 災厄俠客服裝\n  • 金碟鐵馬服裝\n  • 50%額外賽季比賽經驗\n  • 10%額外賽季好友比賽經驗\n  • 額外每週挑戰\n  • 災厄俠客可進化挑戰\n\n通過遊玩提升英雄季卡戰階，解鎖百餘獎勵（通常需要75到150個小時的遊玩時間）。希望更快嗎？你可以隨時使用V幣購買戰階！\n  • 驚懼狼人及其他4套服裝\n  • 3個寵物\n  • 3個鋤頭\n  • 5個姿勢\n  • 4個滑翔傘\n  • 4個背部裝飾\n  • 5個滑翔軌跡\n  • 14個塗鴉\n  • 2個玩具\n  • 3個音軌\n  • 1300V幣\n  • 以及更多獎勵！",
                            "pt-br": "Temporada 6: de hoje até 6 de dezembro\n\nGanhe instantaneamente esses itens avaliados em mais de 3.500 V-Bucks.\n  • Traje Calamidade\n  • Traje DJ Além\n  • 50% de Bônus de EXP da Temporada em Partidas\n  • 10% de Bônus de EXP da Temporada em Partidas com Amigos\n  • Desafios Semanais Extras\n  • Desafios Calamidade Progressivos\n\nJogue para subir o nível do seu Passe de Batalha, desbloqueando mais de 100 recompensas (leva em média 75 a 150 horas de jogo). Quer mais rápido? Você pode usar V-Bucks para comprar categorias a qualquer momento!\n  • Lupino e mais 4 outros trajes\n  • 3 Mascotes\n  • 3 Picaretas\n  • 5 Gestos\n  • 4 Asas-deltas\n  • 4 Acessórios para as Costas\n  • 5 Rastros de Queda Livre\n  • 14 Sprays\n  • 2 Brinquedos\n  • 3 Faixas Musicais\n • 1.300 V-Bucks\n  • e muito mais!",
                            "en": "Season 6: Now thru Dec 6\n\nInstantly get these items valued at over 3,500 V-Bucks.\n  • Calamity Outfit\n  • DJ Yonder Outfit\n  • 50% Bonus Season Match XP\n  • 10% Bonus Season Friend Match XP\n  • Extra Weekly Challenges\n  • Calamity Progressive Challenges\n\nPlay to level up your Battle Pass, unlocking over  100 rewards (typically takes 75 to 150 hours of play). Want it all faster? You can use V-Bucks to buy tiers any time!\n  • Dire plus 4 other outfits\n  • 3 Pets\n  • 3 Pickaxes\n  • 5 Emotes\n  • 4 Gliders\n  • 4 Back Blings\n  • 5 Skydiving Trails\n  • 14 Sprays\n  • 2 Toys\n  • 3 Music Tracks\n  • 1,300 V-Bucks\n  • and so much more!",
                            "it": "Stagione 6: Fino al 6 dicembre\n\nOttieni subito questi oggetti dal valore di oltre 3.500 V-buck!\n• Costume Calamity\n• Costume DJ Yonder\n• Bonus del 50% dei PE partite stagionali\n• Bonus del 10% dei PE partite amico stagionali\n• Sfide settimanali extra\n• Sfide progressive Calamity\n\nGioca per aumentare di livello il tuo Pass battaglia, sbloccando più di 100 ricompense (per un totale indicativo di 75-150 ore di gioco). Vuoi tutto e subito? Puoi usare i V-buck per acquistare livelli in qualsiasi momento!\n• Manny e altri 4 costumi\n• 3 piccoli amici\n• 3 picconi\n• 5 emote\n• 4 deltaplani\n• 4 dorsi decorativi\n• 5 scie skydive\n• 14 spray\n• 2 giocattoli\n• 3 brani musicali\n• 1.300 V-buck\n• E tanto altro!",
                            "fr": "Saison 6 : jusqu'au 6 décembre\n\nRecevez immédiatement ces objets d'une valeur supérieure à 3500 V-bucks.\n  • Tenue Calamité\n  • Tenue DJ Lama\n  • Bonus d'EXP de saison de 50%\n  • Bonus d'EXP de saison de 10% pour des amis\n  • Des défis hebdomadaires supplémentaires\n  • Les défis progressifs de Calamité\n\n Jouez pour augmenter le niveau de votre Passe de combat et déverrouiller plus de 100 récompenses (nécessitant de 75 à 150 heures de jeu). Envie d'aller plus vite ? Utilisez vos V-bucks pour acheter des niveaux à tout moment !\n  • Lycan plus 4 autres tenues\n  • 3 compagnons\n  • 3 pioches\n  • 5 emotes\n  • 4 planeurs\n  • 4 accessoires de dos\n  • 5 traînées de condensation\n  • 14 aérosols\n  • 2 jouets\n  • 3 pistes musicales\n  • 1300 V-bucks\n  • Et plus !",
                            "zh-cn": "第六赛季：现在起至12月6日\n\n立即获得这些价值3500V币的物品。\n  • 灾厄侠客服装\n  • 金碟铁马服装\n  • 50%额外赛季比赛经验\n  • 10%额外赛季好友比赛经验\n  • 额外每周挑战\n  • 灾厄侠客可进化挑战\n\n通过游玩提升英雄季卡战阶，解锁百余奖励（通常需要75到150个小时的游玩时间）。希望更快吗？你可以随时使用V币购买战阶！\n  • 惊惧狼人及其他4套服装\n  • 3个宠物\n  • 3个锄头\n  • 5个姿势\n  • 4个滑翔伞\n  • 4个背部装饰\n  • 5个滑翔轨迹\n  • 14个涂鸦\n  • 2个玩具\n  • 3个音轨\n  • 1300V币\n  • 以及更多奖励！",
                            "es": "Temporada 6: desde ahora hasta el 6 de diciembre.\n\nConsigue instantáneamente estos objetos valorados en más de 3500 paVos.\n  • Traje de Calamidad.\n  • Traje de Llama DJ.\n  • Bonificación de PE de partida de temporada del 50 %.\n  • Bonificación de PE de partida amistosa de temporada del 10 %.\n  • Desafíos semanales adicionales.\n  • Desafíos progresivos de Calamidad.\n\nJuega para subir de nivel tu pase de batalla y desbloquea más de 100 recompensas (suele llevar entre 75 y 150 horas de juego). ¿Lo quieres más rápido? ¡Puedes usar paVos para comprar niveles siempre que quieras!\n  • Lobuno más otros 4 trajes.\n  • 3 mascotas.\n  • 3 picos.\n  • 5 gestos.\n  • 4 alas delta.\n  • 4 accesorios mochileros.\n  • 5 estelas de descenso.\n  • 14 grafitis.\n  • 2 juguetes.\n  • 3 pistas musicales.\n  • 1300 paVos.\n  • ¡Y mucho más!",
                            "ar": "Season 6: Now thru Dec 6\n\nInstantly get these items valued at over 3,500 V-Bucks.\n  • Calamity Outfit\n  • DJ Yonder Outfit\n  • 50% Bonus Season Match XP\n  • 10% Bonus Season Friend Match XP\n  • Extra Weekly Challenges\n  • Calamity Progressive Challenges\n\nPlay to level up your Battle Pass, unlocking over  100 rewards (typically takes 75 to 150 hours of play). Want it all faster? You can use V-Bucks to buy tiers any time!\n  • Dire plus 4 other outfits\n  • 3 Pets\n  • 3 Pickaxes\n  • 5 Emotes\n  • 4 Gliders\n  • 4 Back Blings\n  • 5 Skydiving Trails\n  • 14 Sprays\n  • 2 Toys\n  • 3 Music Tracks\n  • 1,300 V-Bucks\n  • and so much more!",
                            "ja": "シーズン6: 12月6日まで\n\n3,500 V-Bucks以上の価値があるアイテムを今すぐ手に入れましょう。• 「カラミティ」コスチューム\n  • 「DJ ヨンダー」コスチューム\n  • シーズンマッチXPの50%ボーナス\n  • シーズンフレンドマッチXPの10%ボーナス\n  • 追加のウィークリーチャレンジ\n  • カラミティプログレッシブチャレンジ\n\nプレイしてバトルパスのレベルを上げると、100以上の報酬をアンロックできます(通常、プレイにかかる時間は75～150時間程度)。もっと早く報酬を全部集めたい？ V-Bucksでいつでもティアを購入できます！\n  • ダイアとその他コスチュームx4\n  • ペットx3\n  • ツルハシx3\n  • エモートx5\n  • グライダーx4\n  • バックアクセサリーx4\n  • スカイダイビングトレイルx5\n  • スプレーx14\n  • おもちゃx2\n  • ミュージックx3\n  • 1,300 V-Bucks\n  • 他にも色々！",
                            "pl": "Sezon 6: od teraz do 6 grudnia\n\nOtrzymasz od razu poniższe przedmioty o wartości ponad 3500 V-dolców:\n  • Strój: Kowbojka\n  • Strój: DJ Jak-mu-tam\n  • Sezonowa premia +50% PD za grę\n  • Sezonowa premia +10% PD za grę ze znajomymi\n  • Dostęp do dodatkowych wyzwań tygodnia\n  • Dostęp do wyzwań Kowbojki\n\nGraj, aby awansować karnet bojowy i zdobyć łącznie ponad 100 nagród (ich zebranie zajmuje zwykle od 75 do 150 godz. gry). Chcesz się rozwijać szybciej? W każdej chwili możesz kupić stopnie za V-dolce!\n  • Straszliwiec plus 4 inne stroje\n  • 3 pupile\n  • 3 kilofy\n  • 5 emotek\n  • 4 lotnie\n  • 4 plecaki\n  • 5 smug\n  • 14 graffiti\n  • 2 zabawki\n  • 3 tła muzyczne\n  • 1300 V-dolców\n  • I dużo więcej!",
                            "es-419": "Temporada 6: Ahora hasta el 6 de diciembre\n\nObtén al instante estos objetos que cuestan más de 3500 monedas V.\n  • Atuendo Calamidad\n  • Atuendo DJ Llama\n  • 50% de bonificación de PE para partidas de la temporada\n  • 10% de PE de bonificación para partidas con amigos en la temporada\n  • Desafíos semanales adicionales\n  • Desafíos progresivos de Calamidad\n\nJuega para subir de nivel el pase de batalla y desbloquear más de 100 recompensas (esto lleva entre 75 y 150 horas de juego). ¿Lo quieres todo más rápido? ¡Usa monedas V para comprar niveles en cualquier momento!\n  • Amenaza inminente más otros 4 atuendos\n  • 3 mascotas\n  • 3 picos\n  • 5 gestos\n  • 4 planeadores\n  • 4 mochilas retro\n  • 5 rastros de caída libre\n  • 14 aerosoles\n  • 2 juguetes\n  • 3 pistas de música\n  • 1300 monedas V\n  • ¡y mucho más!",
                            "tr": "6. Sezon: Şu andan 6 Aralık’a kadar\n\n3.500 V-Papel’in üzerinde değeri olan bu içerikleri hemen edin.\n  • Belalı Kovboy Kıyafeti\n  • DJ Lama Kıyafeti\n  • %50 Bonus Sezonluk Maç TP’si\n  • %10 Bonus Sezonluk Arkadaşlar için Maç TP’si\n  • İlave Haftalık Görevler\n  • İlerlemeli Belalı Kovboy Görevleri\n\nBattle Royale oynayarak Savaş Bileti’nin aşamasını yükselt ve 100’den fazla ödülü aç (yaklaşık 75 ila 150 saat oynama gerektirir). Hepsini daha hızlı mı almak istiyorsun? V-Papel karşılığında istediğin zaman aşama açabilirsin!\n  • Kurtadam artı 4 kıyafet daha\n  • 3 Sadık Dost\n  • 3 Kazma\n  • 5 İfade\n  • 4 Planör\n  • 4 Sırt Süsü\n  • 5 Dalış İzi\n  • 14 Sprey\n  • 2 Oyuncak\n  • 3 Müzik Parçası\n  • 1.300 V-Papel\n  • ve çok daha fazlası!"
                        },
                        "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_BR_Season6_BattlePass.DA_BR_Season6_BattlePass",
                        "itemGrants": []
                    }
                ]
            },
            {
                "name": "BRSeason7",
                "catalogEntries": [
                    {
                        "offerId": "347A90158C64424980E8C1B3DC088F37",
                        "devName": "BR.Season7.BattleBundle.01",
                        "offerType": "StaticPrice",
                        "prices": [
                            {
                                "currencyType": "MtxCurrency",
                                "currencySubType": "",
                                "regularPrice": 4700,
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
                            ""
                        ],
                        "requirements": [
                            {
                                "requirementType": "DenyOnFulfillment",
                                "requiredId": "601C6830460BFED07506F5A6D2C4CE7B",
                                "minQuantity": 1
                            }
                        ],
                        "metaInfo": [],
                        "catalogGroup": "",
                        "catalogGroupPriority": 0,
                        "sortPriority": 0,
                        "title": {
                            "de": "Battle-Pass-Paket",
                            "ru": "Боевой комплект",
                            "ko": "배틀번들",
                            "zh-hant": "戰鬥套組",
                            "pt-br": "Pacotão de Batalha",
                            "en": "Battle Bundle",
                            "it": "Bundle battaglia",
                            "fr": "Pack de combat",
                            "zh-cn": "战斗套组",
                            "es": "Lote de batalla",
                            "ar": "Battle Bundle",
                            "ja": "バトルバンドル",
                            "pl": "Zestaw bojowy",
                            "es-419": "Paquete de batalla",
                            "tr": "Savaş Paketi"
                        },
                        "shortDescription": {
                            "de": "Battle Pass + 25 Stufen!",
                            "ru": "Боевой пропуск + 25 уровней!",
                            "ko": "배틀패스 + 25티어!",
                            "zh-hant": "英雄季卡增加25戰階！",
                            "pt-br": "Passe de Batalha + 25 categorias!",
                            "en": "Battle Pass + 25 tiers!",
                            "it": "Pass battaglia + 25 livelli!",
                            "fr": "Passe de combat + 25 paliers !",
                            "zh-cn": "英雄季卡增加25战阶！",
                            "es": "¡Pase de batalla y 25 niveles!",
                            "ar": "Battle Pass + 25 tiers!",
                            "ja": "バトルパス+25ティア！",
                            "pl": "Karnet bojowy + 25 stopni!",
                            "es-419": "¡Pase de batalla + 25 niveles!",
                            "tr": "Savaş Bileti + 25 aşama!"
                        },
                        "description": {
                            "de": "Saison 7: Ab sofort bis 28. Februar\n\nErhalte sofort diese Gegenstände <Bold>im Wert von über 10.000 V-Bucks</>.\n  • <ItemName>Zenit</> (aufrüstbares Outfit)\n  • <ItemName>Luchs</> (aufrüstbares Outfit)\n  • <ItemName>Sgt. Winter</> (Outfit und Stilherausforderungen)\n  • <ItemName>Hamirez</> (Gefährte)\n  • <ItemName>Taktischer Schlitten</> (Hängegleiter)\n  • <ItemName>Arktistarnung</> (Lackierung)\n  • <ItemName>Perfektes Geschenk</> (Rücken-Accessoire)\n  • <ItemName>Lichterkette</> (Kondensstreifen)\n  • 300 V-Bucks\n  • 1 Musikstück\n  • <Bold>+70 %</> Saison-Match-EP\n  • <Bold>+20 %</> Saison-Match-EP für Freunde\n  • <Bold>zusätzliche wöchentliche Herausforderungen</>\n  • und noch mehr!\n\nSpiele weiter und stufe deinen Battle Pass auf, um <Bold>über 75 Belohnungen</> freizuschalten (im Normalfall werden dafür 75 bis 150 Spielstunden benötigt).\n  • <Bold>4 weitere Outfits</>\n  • <Bold>1.300 V-Bucks</>\n  • 6 Emotes\n  • 3 Hängegleiter\n  • 4 Rücken-Accessoires\n  • 4 Lackierungen\n  • 4 Erntwerkzeuge\n  • 4 Kondensstreifen\n  • 1 Gefährte\n  • 12 Spraymotive\n  • 2 Musikstücke\n  • und noch eine ganze Menge mehr!\nDas dauert dir zu lange? Du kannst dir mit V-Bucks jederzeit Stufen kaufen!",
                            "ru": "Седьмой сезон: до 28 февраля\n\nСразу же получите предметы <Bold>стоимостью более 10 000 В-баксов!</>\n  • улучшаемая экипировка <ItemName>Снежного снайпера</>;\n  • улучшаемая экипировка <ItemName>Неоновой Рыси</>;\n  • экипировка <ItemName>генерала Мороза</> и испытания стиля;\n  • питомец <ItemName>Хома</>;\n  • дельтаплан <ItemName>«Боевые сани»</>;\n  • обёртка <ItemName>«Арктический камуфляж»</>;\n  • украшение на спину <ItemName>«Подарочки»</>;\n  • воздушный след <ItemName>«Гирлянда»</>;\n  • 300 В-баксов;\n  • 1 музыкальная композиция;\n  • <Bold>+70% к опыту</> за матчи сезона;\n  • <Bold>+20% к опыту</> друзей за матчи сезона;\n  • <Bold>дополнительные еженедельные испытания</>\n и многое другое.\n\nИграйте, повышайте уровень боевого пропуска — и вас ждут <Bold>более 75 наград</>. Обычно, чтобы открыть все награды, требуется 75–150 часов игры.\n  • <Bold>ещё 4 костюма;</>\n  • <Bold>1300 В-баксов</>;\n  • 6 эмоций\n;  • 3 дельтаплана;\n  • 4 украшения на спину;\n  • 4 обёртки;\n  • 4 инструмента;\n  • 4 воздушных следа;\n  • 1 питомец;\n  • 12 граффити;\n  • 2 музыкальные композиции;\n    и это ещё не всё!\nНе хотите ждать? Уровни можно быстро получить за В-баксы!",
                            "ko": "시즌 7: 2월 28일 종료\n\n<Bold>10,000 V-Bucks 이상의 가치</>가 있는 여러 아이템을 즉시 받아가세요.\n  • <ItemName>제니스</> 진화형 의상\n  • <ItemName>링스</> 진화형 의상\n  • <ItemName>윈터 병장</> 의상 및 스타일 도전\n  • <ItemName>하미레스</> 애완동물\n  • <ItemName>전술 썰매</> 글라이더\n  • <ItemName>극지방 위장 패턴</> 외관\n  • <ItemName>완벽한 선물</> 등 장신구\n  • <ItemName>줄조명</> 스카이다이빙 트레일\n  • 300 V-Bucks\n  • 음악 트랙 1개\n  • <Bold>70% 보너스</> 시즌 매치 XP\n  • <Bold>20% 보너스</> 시즌 친구 매치 XP\n  • <Bold>추가 주간 도전</>\n  • 기타 보상!\n\n배틀패스 티어를 올려서 <Bold>75개 이상의 보상</>을 획득해보세요(보통 75-150시간 소요).\n  • <Bold>의상 4개</>\n  • <Bold>1,300 V-Bucks</>\n  • 이모트 6개\n  • 글라이더 3개\n  • 등 장신구 4개\n  • 외관 4개\n  • 수확 도구 4개\n  • 스카이다이빙 트레일 4개\n  • 애완동물 1개\n  • 스프레이 12개\n  • 음악 트랙 2개\n  • 그 외 많은 혜택!\n더 빨리 보상을 얻고 싶으신가요? V-Bucks를 사용해서 언제든지 티어를 구매할 수 있습니다!",
                            "zh-hant": "第七賽季：現在起至2月28日\n\n立即獲得這些價值10000V幣的物品。\n  • <ItemName>蒼穹</>可進化服裝\n  • <ItemName>山貓</>可進化服裝\n  • <ItemName>冬軍衛士</>服裝與風格挑戰\n  • <ItemName>竹鼠</>寵物\n  • <ItemName>戰術雪橇</>滑翔傘\n  • <ItemName>極地迷彩</> 皮膚\n• <ItemName>完美禮物</>背部裝飾\n  • <ItemName>燈串</>滑翔軌跡\n  • 300 V幣\n  • 1個音樂盒\n  • 70%額外賽季比賽經驗\n  • 20%額外賽季好友比賽經驗\n  • 額外每週挑戰\n  • 以及更多獎勵！\n\n通過遊玩提升英雄季卡戰階，解鎖至少75個獎勵（通常需要75到150個小時的遊玩時間）。\n  • <Bold>4個額外服裝</>\n  • <Bold>1,300V幣</>\n  • 6個姿勢\n  • 3個滑翔傘\n  • 4個背包\n  • 4 個皮膚\n  • 4個稿\n  • 4個滑翔軌跡\n  • 1個寵物\n  • 12個塗鴉\n  • 2個音樂盒\n  •以及更多獎勵！\n希望更快嗎？你可以隨時使用V幣購買戰階！",
                            "pt-br": "Temporada 7: De hoje até 28 de fevereiro\n\nReceba instantaneamente estes itens <Bold>avaliados em mais de 10.000 V-Bucks</>:\n  • Traje Progressivo <ItemName>Zênite</>\n  • Traje Progressivo <ItemName>Lince</>\n  • Traje e Desafios Estilo <ItemName>Sargento Inverno</>\n  • Mascote <ItemName>Hamsterzínea</>\n  • Asa-delta <ItemName>Trenó Tático</>\n  • Envelopamento <ItemName>Camuflagem Ártica</>\n  • Acessório para as Costas <ItemName>Presente Perfeito</>\n  • Rastro de Fumaça <ItemName>Pisca-Pisca</>\n  • 300 V-Bucks\n  • 1 Faixa Musical\n  • <Bold>70% de Bônus</> de EXP da Temporada em Partidas\n  • <Bold>20% de Bônus</> de EXP da Temporada em Partidas com Amigos\n  • <Bold>Desafios Semanais Extras</>\n  • e mais!\n\nJogue para subir o nível do seu Passe de Batalha, desbloqueando <Bold>mais de 75 recompensas</> (leva em média de 75 a 150 horas de jogo).\n  • <Bold>Mais 4 Trajes</>\n  • <Bold>1.300 V-Bucks</>\n  • 6 Gestos\n  • 3 Asas-deltas\n  • 4 Acessórios para as Costas\n  • 4 Envelopamentos\n  • 4 Ferramentas de Coleta\n  • 4 Rastros de Fumaça\n  • 1 Mascote\n  • 12 Sprays\n  • 2 Faixas Musicais\n  • e muito mais!\nQuer obter tudo mais rápido? Você pode comprar categorias com V-Bucks a qualquer hora!",
                            "en": "Season 7: Now thru Feb 28\n\nInstantly get these items <Bold>valued at over 10,000 V-Bucks</>.\n  • <ItemName>Zenith</> Progressive Outfit\n  • <ItemName>Lynx</> Progressive Outfit\n  • <ItemName>Sgt. Winter</> Outfit and Style Challenges\n  • <ItemName>Hamirez</> Pet\n  • <ItemName>Tactical Sleigh</> Glider\n  • <ItemName>Arctic Camo</> Wrap\n  • <ItemName>Perfect Present</> Back Bling\n  • <ItemName>String Lights</> Contrail\n  • 300 V-Bucks\n  • 1 Music Track\n  • <Bold>70% Bonus</> Season Match XP\n  • <Bold>20% Bonus</> Season Friend Match XP\n  • <Bold>Extra Weekly Challenges</>\n  • and more!\n\nPlay to level up your Battle Pass, unlocking <Bold>over 75 rewards</> (typically takes 75 to 150 hours of play).\n  • <Bold>4 more Outfits</>\n  • <Bold>1,300 V-Bucks</>\n  • 6 Emotes\n  • 3 Gliders\n  • 4 Back Blings\n  • 4 Wraps\n  • 4 Harvesting Tools\n  • 4 Contrails\n  • 1 Pet\n  • 12 Sprays\n  • 2 Music Tracks\n  • and so much more!\nWant it all faster? You can use V-Bucks to buy tiers any time!",
                            "it": "Stagione 7: Fino al 28 febbraio\n\nOttieni subito questi oggetti <Bold>dal valore di oltre 10.000 V-buck</>!\n• Costume progressivo <ItemName>Zenith</>\n• Costume progressivo <ItemName>Lynx</>\n• Costume e sfide stile <ItemName>sergente Bruma</>\n• Piccolo amico <ItemName>Hamirez</>\n• Deltaplano <ItemName>Slitta tattica</>\n• Copertura <ItemName>mimetica artica</>\n• Dorso decorativo <ItemName>Regalo perfetto</>\n• Scia <ItemName>Luci a filo</>\n• 300 V-buck\n• 1 brano musicale\n• <Bold>Bonus del 70%</> dei PE partite stagionali\n• <Bold>Bonus del 20%</> dei PE partite amico stagionali\n• <Bold>Sfide settimanali extra</>\n• E altro ancora!\n\nGioca per aumentare di livello il tuo Pass battaglia, sbloccando <Bold>più di 75 ricompense</> (per un totale indicativo di 75-150 ore di gioco).\n• <Bold>4 costumi in più</>\n• <Bold>1.300 V-buck</>\n• 6 emote\n• 3 deltaplani\n• 4 dorsi decorativi\n• 4 coperture\n• 4 strumenti di raccolta\n• 4 scie\n• 1 piccolo amico\n• 12 spray\n• 2 brani musicali\n• E altro ancora!\nVuoi tutto e subito? Puoi acquistare livelli usando V-buck in qualsiasi momento!",
                            "fr": "Saison 7 : jusqu'au 28 février\n\nRecevez immédiatement ces objets <Bold>d'une valeur supérieure à 10 000 V-bucks</>.\n  • Tenue évolutive <ItemName>Zénith</>\n  • Tenue évolutive <ItemName>Lynx</>\n  • Tenue évolutive <ItemName>Sergent Frimas</> et défis de style\n  • Le compagnon <ItemName>Hamirez</>\n  • Planeur <ItemName>Traîneau tactique</>\n  • Revêtement <ItemName>Camouflage arctique</>\n  • Accessoire de dos <ItemName>Cadeau idéal</>\n  • Traînée de condensation <ItemName>Guirlandes électriques</>\n  • 300 V-bucks\n  • 1 piste musicale\n  • Bonus d'EXP de saison de 70%\n  • Bonus d'EXP de saison de 20% pour des amis\n  • <Bold>Des défis hebdomadaires supplémentaires</>\n  • Et plus !\n\nJouez pour augmenter le niveau de votre Passe de combat et déverrouiller <Bold>plus de 75 récompenses</> (nécessitant de 75 à 150 heures de jeu).\n  • <Bold>4 autres tenues</>\n  • <Bold>1300 V-bucks</>\n  • 6 emotes\n  • 3 planeurs\n  • 4 accessoires de dos\n  • 4 revêtements\n  • 4 pioches\n  • 4 traînées de condensation\n  • 1 compagnon\n  • 12 aérosols\n  • 2 pistes musicales\n  • Et plus !\nEnvie d'aller plus vite ? Utilisez vos V-bucks pour acheter des niveaux à tout moment !",
                            "zh-cn": "第七赛季：现在起至2月28日\n\n立即获得这些价值10000V币的物品。\n  • <ItemName>苍穹</>可进化服装\n  • <ItemName>山猫</>可进化服装\n  • <ItemName>冬军卫士</>服装与风格挑战\n  • <ItemName>竹鼠</>宠物\n  • <ItemName>战术雪橇</>滑翔伞\n  • <ItemName>极地迷彩</> 皮肤\n• <ItemName>完美礼物</>背部装饰\n  • <ItemName>灯串</>滑翔轨迹\n  • 300 V币\n  • 1个音乐盒\n  • 70%额外赛季比赛经验\n  • 20%额外赛季好友比赛经验\n  • 额外每周挑战\n  • 以及更多奖励！\n\n通过游玩提升英雄季卡战阶，解锁至少75个奖励（通常需要75到150个小时的游玩时间）。\n  • <Bold>4个额外服装</>\n  • <Bold>1,300V币</>\n  • 6个姿势\n  • 3个滑翔伞\n  • 4个背包\n  • 4 个皮肤\n  • 4个稿\n  • 4个滑翔轨迹\n  • 1个宠物\n  • 12个涂鸦\n  • 2个音乐盒\n  •以及更多奖励！\n希望更快吗？你可以随时使用V币购买战阶！",
                            "es": "Temporada 7: Desde ahora hasta el 28 de febrero\n\nConsigue instantáneamente estos objetos <Bold>valorados en más de 10 000 paVos</>.\n  • Traje progresivo de <ItemName>Cénit</>.\n  • Traje progresivo de <ItemName>Lince</>.\n  • Traje y desafíos de estilo del <ItemName>General Invierno</>.\n  • Mascota <ItemName>Hamírez</>.\n  • Ala delta <ItemName>Trineo táctico</>.\n  • Envoltorio <ItemName>Camuflaje ártico</>.\n  • Accesorio mochilero <ItemName>Presente perfecto</>.\n  • Estela <ItemName>Luces de colores</>.\n  • 300 paVos.\n  • 1 pista musical.\n  • <Bold>70 % adicional</> de PE de partida de temporada.\n  • <Bold>20 % adicional</> de PE de partida amistosa de temporada.\n  • <Bold>Desafíos semanales adicionales</>.\n  • ¡Y mucho más!\n\nJuega para subir de nivel tu pase de batalla y desbloquea <Bold>más de 75 recompensas</> (suele llevar entre 75 y 150 horas de juego).\n  • <Bold>4 trajes más</>.\n  • <Bold>1300 paVos</>.\n  • 6 gestos.\n  • 3 alas delta.\n  • 4 accesorios mochileros.\n  • 4 envoltorios.\n  • 4 herramientas de recolección.\n  • 4 estelas.\n  • 1 mascota.\n  • 12 grafitis.\n  • 2 pistas musicales.\n  • ¡Y muchísimo más!\n¿Lo quieres más rápido? ¡Puedes usar paVos para comprar niveles siempre que quieras!",
                            "ar": "Season 7: Now thru Feb 28\n\nInstantly get these items <Bold>valued at over 10,000 V-Bucks</>.\n  • <ItemName>Zenith</> Progressive Outfit\n  • <ItemName>Lynx</> Progressive Outfit\n  • <ItemName>Sgt. Winter</> Outfit and Style Challenges\n  • <ItemName>Hamirez</> Pet\n  • <ItemName>Tactical Sleigh</> Glider\n  • <ItemName>Arctic Camo</> Wrap\n  • <ItemName>Perfect Present</> Back Bling\n  • <ItemName>String Lights</> Contrail\n  • 300 V-Bucks\n  • 1 Music Track\n  • <Bold>70% Bonus</> Season Match XP\n  • <Bold>20% Bonus</> Season Friend Match XP\n  • <Bold>Extra Weekly Challenges</>\n  • and more!\n\nPlay to level up your Battle Pass, unlocking <Bold>over 75 rewards</> (typically takes 75 to 150 hours of play).\n  • <Bold>4 more Outfits</>\n  • <Bold>1,300 V-Bucks</>\n  • 6 Emotes\n  • 3 Gliders\n  • 4 Back Blings\n  • 4 Wraps\n  • 4 Harvesting Tools\n  • 4 Contrails\n  • 1 Pet\n  • 12 Sprays\n  • 2 Music Tracks\n  • and so much more!\nWant it all faster? You can use V-Bucks to buy tiers any time!",
                            "ja": "シーズン7: 2月28日まで\n\n<Bold>10,000 V-Bucks以上の価値</>があるアイテムを今すぐ手に入れましょう。\n  • <ItemName>「ゼニス」</>プログレッシブコスチューム\n  • <ItemName>「リンクス」</>プログレッシブコスチューム\n  • <ItemName>「サージェント ウィンター」</>コスチューム及びスタイルチャレンジ\n  • <ItemName>「ハミレス」</>ペット\n  • <ItemName>「タクティカルスレイ」グライダー</>\n  • <ItemName>「アークティックカモ」</>ラップ\n  • <ItemName>「パーフェクトプレゼント」</>バックアクセサリー\n  • <ItemName>「ストリングライト」</>コントレイル\n  • 300 V-Bucks\n  • ミュージックx1\n  • シーズンマッチXPの<Bold>70%ボーナス</>\n  • シーズンフレンドマッチXPの<Bold>20%ボーナス</>\n  • <Bold>追加のウィークリーチャレンジ</>\n  • 他にも色々！\n\nプレイしてバトルパスのレベルを上げると、<Bold>75個以上の報酬</>をアンロックできます(通常、プレイにかかる時間は75～150時間程度)。\n  • <Bold>コスチュームx4以上</>\n  • <Bold>1,300 V-Bucks</>\n  • エモートx6\n  • グライダーx3\n  • バックアクセサリーx4\n  • ラップx4\n  • 収集ツールx4\n  • コントレイルx4\n  • ペットx1\n  • スプレーx12\n  • ミュージックトラックx2\n  • 他にも色々！\nもっと早く報酬を全部集めたいなら、V-Bucksでいつでもティアを購入できます！",
                            "pl": "Sezon 7: od teraz do 28 lutego\n\nOtrzymasz od razu poniższe przedmioty <Bold>o wartości ponad 10 000 V-dolców</>:\n  • Strój progresywny: <ItemName>Zenit</>\n  • Strój progresywny: <ItemName>Puma</>\n  • Strój i wyzwania stylów <ItemName>Sierżant Zima</>\n  • Pupil <ItemName>Chomirez</>\n  • Lotnia <ItemName>Sanie Szturmowe</>\n  • Malowanie <ItemName>Zimowy kamuflaż</>\n  • Plecak <ItemName>Przemyślany Prezent</>\n  • Smuga <ItemName>Sznur lampek</>\n  • 300 V-dolców\n  • 1 tło muzyczne\n  • Sezonowa <Bold>premia +70% PD za grę</>\n  • Sezonowa <Bold>premia +20% PD za grę ze znajomymi</>\n  • Dostęp do <Bold>dodatkowych wyzwań tygodniowych</>\n  • I nie tylko!\n\nGraj, aby awansować karnet bojowy i zdobyć <Bold>ponad 75 nagród</> (ich zebranie zajmuje zwykle od 75 do 150 godz. gry).\n  • <Bold>4 dodatkowe stroje</>\n  • <Bold>1300 V-dolców</>\n  • 6 emotek\n  • 3 lotnie\n  • 4 plecaki\n  • 4 malowania\n  • 4 zbieraki\n  • 4 smugi\n  • 1 pupil\n  • 12 graffiti\n  • 2 tła muzyczne\n  • I dużo więcej!\nChcesz rozwijać się szybciej? W każdej chwili możesz kupić stopnie za V-dolce!",
                            "es-419": "Temporada 7: Ahora hasta el 28 de febrero\n\nObtén al instante estos objetos <Bold>que cuestan más de 10 000 monedas V</>.\n  • Atuendo progresivo <ItemName>Cenit</>\n  • Atuendo progresivo <ItemName>Lince</>\n  • Atuendo y desafíos de estilo de <ItemName>Sargento Invierno</>\n  • Mascota <ItemName>Hamírez</>\n  • Planeador <ItemName>Trineo táctico</>\n  • Papel <ItemName>Camu ártico</>\n  • Mochila retro <ItemName>Regalo perfecto</>\n  • Estela <ItemName>Luces colgantes</>\n  • 300 monedas V\n  • 1 pista de música\n  • <Bold>70 % de bonificación</> de PE para partidas en la temporada\n  • <Bold>20 % de bonificación</> de PE para partidas con amigos en la temporada\n  • <Bold>Desafíos semanales adicionales</>\n  • ¡Y mucho más!\n\nJuega para subir de nivel el pase de batalla y desbloquear <Bold>más de 75 recompensas</> (esto lleva entre 75 y 150 horas de juego).\n  • <Bold>4 atuendos más</>\n  • <Bold>1300 monedas V</>\n  • 6 gestos\n  • 3 planeadores\n  • 4 mochilas retro\n  • 4 papeles\n  • 4 herramientas de recolección\n  • 4 estelas\n  • 1 mascota\n  • 12 aerosoles\n  • 2 pistas de música\n  • ¡Y mucho más!\n¿Lo quieres todo más rápido? ¡Puedes usar las monedas V para comprar niveles cuando quieras!",
                            "tr": "7. Sezon: Şu andan 28 Şubat’a kadar\n\n<Bold>10.000 V-Papel’in üzerinde değeri olan</> bu içerikleri hemen kap.\n  • İlerlemeli <ItemName>Karakulak</> Kıyafeti\n  • İlerlemeli <ItemName>Kutup Dağcısı</> Kıyafeti\n  • <ItemName>Kış Çavuşu</> Kıyafeti ve Tarz Görevleri\n  • Sadık Dost <ItemName>Hamirez</>\n  • <ItemName>Roketli Kızak Planörü</>\n  • <ItemName>Kutup Kamuflajı</> Kaplaması\n  • <ItemName>Mükemmel Hediye</> Sırt Süsü\n  • <ItemName>Yılbaşı Işıkları</> Dalış İzi\n  • 300 V-Papel\n  • 1 Müzik Parçası\n  • <Bold>%70 Bonus</> sezonluk Maç TP’si\n  • Arkadaşların için <Bold>%20 Bonus</> Sezonluk Maç TP’si\n  • <Bold>İlave Haftalık Görevler</>\n  • ve çok daha fazlası!\n\nBattle Royale oynayarak Savaş Bileti’nin aşamasını yükselt ve <Bold>75’ten fazla ödülü</> aç (genelde 75 ila 150 saat oynama gerektirir).\n  • <Bold>4 Kıyafet daha</>\n  • <Bold>1.300 V-Papel</>\n  • 6 İfade\n  • 3 Planör\n  • 4 Sırt Süsü\n  • 4 Kaplama\n  •  4 Toplama Aleti\n  • 4 Dalış İzi\n  • 1 Sadık Dost\n  • 12 Sprey\n  • 2 Müzik Parçası\n  • ve çok daha fazlası!\nHepsini daha hızlı almak mı istiyorsun? V-Papel karşılığında istediğin zaman aşama açabilirsin!"
                        },
                        "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_BR_Season7_BattlePassWithLevels.DA_BR_Season7_BattlePassWithLevels",
                        "itemGrants": []
                    },
                    {
                        "offerId": "3A3C99847F144AF3A030DB5690477F5A",
                        "devName": "BR.Season7.BattlePass.01",
                        "offerType": "StaticPrice",
                        "prices": [
                            {
                                "currencyType": "MtxCurrency",
                                "currencySubType": "",
                                "regularPrice": 950,
                                "finalPrice": 950,
                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                "basePrice": 950
                            }
                        ],
                        "categories": [],
                        "dailyLimit": -1,
                        "weeklyLimit": -1,
                        "monthlyLimit": -1,
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
                            ""
                        ],
                        "requirements": [
                            {
                                "requirementType": "DenyOnFulfillment",
                                "requiredId": "601C6830460BFED07506F5A6D2C4CE7B",
                                "minQuantity": 1
                            }
                        ],
                        "metaInfo": [],
                        "catalogGroup": "",
                        "catalogGroupPriority": 0,
                        "sortPriority": 1,
                        "title": {
                            "de": "Battle Pass",
                            "ru": "Боевой пропуск",
                            "ko": "배틀패스",
                            "zh-hant": "英雄季卡",
                            "pt-br": "Passe de Batalha",
                            "en": "Battle Pass",
                            "it": "Pass battaglia",
                            "fr": "Passe de combat",
                            "zh-cn": "英雄季卡",
                            "es": "Pase de batalla",
                            "ar": "Battle Pass",
                            "ja": "バトルパス",
                            "pl": "Karnet bojowy",
                            "es-419": "Pase de batalla",
                            "tr": "Savaş Bileti"
                        },
                        "shortDescription": {
                            "de": "Saison 7",
                            "ru": "Седьмой сезон",
                            "ko": "시즌 7",
                            "zh-hant": "第七賽季",
                            "pt-br": "Temporada 7",
                            "en": "Season 7",
                            "it": "Stagione 7",
                            "fr": "Saison 7",
                            "zh-cn": "第七赛季",
                            "es": "Temporada 7",
                            "ar": "Season 7",
                            "ja": "シーズン7",
                            "pl": "Sezon 7",
                            "es-419": "Temporada 7",
                            "tr": "7. Sezon"
                        },
                        "description": {
                            "de": "Saison 7: Ab sofort bis 28. Februar\n\nErhalte sofort diese Gegenstände <Bold>im Wert von über 3.500 V-Bucks</>.\n  • <ItemName>Zenit</> (aufrüstbares Outfit)\n  • <ItemName>Luchs</> (aufrüstbares Outfit)\n  • <Bold>+50 %</> Saison-Match-EP\n  • <Bold>+10 %</> Saison-Match-EP für Freunde\n  • <Bold>zusätzliche wöchentliche Herausforderungen</>\n\nSpiele weiter und stufe deinen Battle Pass auf, um <Bold>über 100 Belohnungen</> freizuschalten (im Normalfall werden dafür 75 bis 150 Spielstunden benötigt).\n  • <ItemName>Sgt. Winter</> und <Bold>4 weitere Outfits</>\n  • <Bold>1.300 V-Bucks</>\n  • 2 Gefährten\n  • 6 Lackierungen\n  • 4 Erntewerkzeuge\n  • 7 Emotes\n  • 2 Spielsachen\n  • 4 Hängegleiter\n  • 6 Rücke-Accessoires\n  • 5 Kondensstreifen\n  • 13 Spraymotive\n  • 3 Musikstücke\n  • und noch eine ganze Menge mehr!\nDas dauert dir zu lange? Du kannst dir mit V-Bucks jederzeit Stufen kaufen!",
                            "ru": "Седьмой сезон: до 28 февраля\n\nСразу же получите предметы <Bold>стоимостью более 3500 В-баксов!</>\n  • улучшаемая экипировка <ItemName>Снежного снайпера</>;\n  • улучшаемая экипировка <ItemName>Неоновой Рыси</>;\n  • <Bold>+50% к опыту</> за матчи сезона;\n  • <Bold>+10% к опыту</> друзей за матчи сезона;\n  • <Bold>дополнительные еженедельные испытания.</>\n\nИграйте, повышайте уровень боевого пропуска — и вас ждут <Bold>более 100 наград</>. Обычно, чтобы открыть все награды, требуется 75–150 часов игры.\n  • экипировка <ItemName>генерала Мороза</> и <Bold>ещё 4 костюма;</>\n  • <Bold>1300 В-баксов;</>\n  • 2 питомца;\n  • 6 обёрток;\n  • 4 инструмента;\n  • 7 эмоций;\n  • 2 игрушки;\n  • 4 дельтаплана;\n  • 6 украшений на спину;\n  • 5 воздушных следов;\n  • 13 граффити;\n  • 3 музыкальные композиции;\n    и это ещё не всё!\nНе хотите ждать? Уровни можно быстро получить за В-баксы!",
                            "ko": "시즌 7: 2월 28일 종료\n\n<Bold>3,500 V-Bucks 이상의 가치</>가 있는 여러 아이템을 즉시 받아가세요.\n  • <ItemName>제니스</> 진화형 의상\n  • <ItemName>링스</> 진화형 의상\n  • <Bold>50% 보너스</> 시즌 매치 XP\n  • <Bold>10% 보너스</> 시즌 친구 매치 XP\n  • <Bold>추가 주간 도전</>\n\n  • 게임을 플레이하고 배틀패스 티어를 올려서 <Bold>100개 이상의 보상</>을 획득해보세요(보통 75-150시간 소요).\n  • <ItemName>윈터 병장</> 외 <Bold>의상 4개</>\n  • <Bold>1,300 V-Bucks</>\n  • 애완동물 2개\n  • 외관 6개\n  • 수확 도구 4개\n  • 이모트 7개\n  • 장난감 2개\n  • 글라이더 4개\n  • 등 장신구 6개\n  • 스카이다이빙 트레일 5개\n  • 스프레이 13개\n  • 음악 트랙 3개\n  • 그 외 많은 혜택!\n더 빨리 보상을 얻고 싶으신가요? V-Bucks를 사용해서 언제든지 티어를 구매할 수 있습니다!",
                            "zh-hant": "第七賽季：現在起至2月28日\n\n立即獲得這些<Bold>價值3500V幣</>的物品。\n  • <ItemName>蒼穹</>可進化服裝\n  • <ItemName>山貓</>可進化服裝\n  • <Bold>50%額外</>賽季比賽經驗\n  • <Bold>10%額外</>賽季好友比賽經驗\n  • <Bold>額外每週挑戰</>\n\n通過遊玩提升英雄季卡戰階，解鎖<Bold>百餘獎勵</>（通常需要75到150個小時的遊玩時間）。\n  • <ItemName>冬軍衛士</>和<Bold>至少4套服裝</>\n  • <Bold>1300V幣</>\n  • 2個寵物\n  • 6個包裝\n  • 4個採集工具\n  • 7個姿勢\n  • 2個玩具\n  • 4個滑翔傘\n  • 6個背部裝飾\n  • 5個滑翔軌跡\n  • 13個塗鴉\n  • 3個音軌\n  • 以及更多獎勵！\n希望更快得到嗎？你可以隨時使用V幣購買戰階！",
                            "pt-br": "Temporada 7: De hoje até 28 de fevereiro\n\nReceba instantaneamente estes itens <Bold>avaliados em mais de 3.500 V-Bucks</>:\n  • Traje Progressivo <ItemName>Zênite</>\n  • Traje Progressivo <ItemName>Lince</>\n  • <Bold>50% de Bônus</> de EXP da Temporada em Partidas\n  • <Bold>10% de Bônus</> de EXP da Temporada em Partidas com Amigos\n  • <Bold>Desafios Semanais Extras</>\n\nJogue para subir o nível do seu Passe de Batalha, desbloqueando <Bold>mais de 100 recompensas</> (leva em média de 75 a 150 horas de jogo).\n  • <ItemName>Sargento Inverno</> e <Bold>mais 4 Trajes</>\n  • <Bold>1.300 V-Bucks</>\n  • 2 Mascotes\n  • 6 Envelopamentos\n  • 4 Ferramentas de Coleta\n  • 7 Gestos\n  • 2 Brinquedos\n  • 4 Asas-deltas\n  • 6 Acessórios para as Costas\n  • 5 Rastros de Fumaça\n  • 13 Sprays\n  • 3 Faixas Musicais\n  • e muito mais!\nQuer obter tudo mais rápido? Você pode comprar categorias com V-Bucks a qualquer hora!",
                            "en": "Season 7: Now thru Feb 28\n\nInstantly get these items <Bold>valued at over 3,500 V-Bucks</>.\n  • <ItemName>Zenith</> Progressive Outfit\n  • <ItemName>Lynx</> Progressive Outfit\n  • <Bold>50% Bonus</> Season Match XP\n  • <Bold>10% Bonus</> Season Friend Match XP\n  • <Bold>Extra Weekly Challenges</>\n\nPlay to level up your Battle Pass, unlocking <Bold>over 100 rewards</> (typically takes 75 to 150 hours of play).\n  • <ItemName>Sgt. Winter</> and <Bold>4 more Outfits</>\n  • <Bold>1,300 V-Bucks</>\n  • 2 Pets\n  • 6 Wraps\n  • 4 Harvesting Tools\n  • 7 Emotes\n  • 2 Toys\n  • 4 Gliders\n  • 6 Back Blings\n  • 5 Contrails\n  • 13 Sprays\n  • 3 Music Tracks\n  • and so much more!\nWant it all faster? You can use V-Bucks to buy tiers any time!",
                            "it": "Stagione 7: Fino al 28 febbraio\n\nOttieni subito questi oggetti <Bold>dal valore di oltre 3.500 V-buck</>!\n• Costume progressivo <ItemName>Zenith</>\n• Costume progressivo <ItemName>Lynx</>\n• <Bold>Bonus del 50%</> dei PE partite stagionali\n• <Bold>Bonus del 10%</> dei PE partite amico stagionali\n• <Bold>Sfide settimanali extra</>\n\nGioca per aumentare di livello il tuo Pass battaglia, sbloccando <Bold>più di 100 ricompense</> (per un totale indicativo di 75-150 ore di gioco).\n<ItemName>Sergente Bruma</> e <Bold>altri 4 costumi</>\n• <Bold>1.300 V-buck</>\n• 2 piccoli amici\n• 6 coperture\n• 4 strumenti di raccolta\n• 7 emote\n• 2 giocattoli\n• 4 deltaplani\n• 6 dorsi decorativi\n• 5 scie\n• 13 spray\n• 3 brani musicali\n • E altro ancora!\nVuoi tutto e subito? Puoi acquistare livelli usando V-buck in qualsiasi momento!",
                            "fr": "Saison 7 : jusqu'au 28 février\n\nRecevez immédiatement ces objets <Bold>d'une valeur supérieure à 3500 V-bucks</>.\n  • Tenue évolutive <ItemName>Zénith</>\n  • Tenue évolutive <ItemName>Lynx</>\n  • Bonus d'EXP de saison de 50%\n  • Bonus d'EXP de saison de 10% pour des amis\n  • <Bold>Des défis hebdomadaires supplémentaires</>\n\n Jouez pour augmenter le niveau de votre Passe de combat et déverrouiller <Bold>plus de 100 récompenses</> (nécessitant de 75 à 150 heures de jeu).\n  • <ItemName>Sergent Frimas</> plus <Bold>4 autres tenues</>\n  • <Bold>1300 V-bucks</>\n  • 2 compagnons\n  • 6 revêtements\n  • 4 pioches\n  • 7 emotes\n  • 2 jouets\n  • 4 planeurs\n  • 6 accessoires de dos\n  • 5 traînées de condensation\n  • 13 aérosols\n  • 3 pistes musicales\n  • Et plus !\nEnvie d'aller plus vite ? Utilisez vos V-bucks pour acheter des niveaux à tout moment !",
                            "zh-cn": "第七赛季：现在起至2月28日\n\n立即获得这些<Bold>价值3500V币</>的物品。\n  • <ItemName>苍穹</>可进化服装\n  • <ItemName>山猫</>可进化服装\n  • <Bold>50%额外</>赛季比赛经验\n  • <Bold>10%额外</>赛季好友比赛经验\n  • <Bold>额外每周挑战</>\n\n通过游玩提升英雄季卡战阶，解锁<Bold>百余奖励</>（通常需要75到150个小时的游玩时间）。\n  • <ItemName>冬军卫士</>和<Bold>至少4套服装</>\n  • <Bold>1300V币</>\n  • 2个宠物\n  • 6个包装\n  • 4个采集工具\n  • 7个姿势\n  • 2个玩具\n  • 4个滑翔伞\n  • 6个背部装饰\n  • 5个滑翔轨迹\n  • 13个涂鸦\n  • 3个音轨\n  • 以及更多奖励！\n希望更快得到吗？你可以随时使用V币购买战阶！",
                            "es": "Temporada 7: Desde ahora hasta el 28 de febrero\n\nConsigue instantáneamente estos objetos <Bold>valorados en más de 3500 paVos</>.\n  • Traje progresivo de <ItemName>Cénit</>.\n  • Traje progresivo de <ItemName>Lince</>.\n  • <Bold>50 % adicional</> de PE de partida de temporada.\n  • <Bold>10 % adicional</> de PE de partida amistosa de temporada.\n  • <Bold>Desafíos semanales adicionales</>.\n\nJuega para subir de nivel tu pase de batalla y desbloquea <Bold>más de 100 recompensas</> (suele llevar entre 75 y 150 horas de juego).\n  • <ItemName>General Invierno</> y <Bold>4 trajes más</>.\n  • <Bold>1300 paVos</>.\n  • 2 mascotas.\n  • 6 envoltorios.\n  • 4 herramientas de recolección.\n  • 7 gestos.\n  • 2 juguetes.\n  • 4 alas delta.\n  • 6 accesorios mochileros.\n  • 5 estelas.\n  • 13 grafitis.\n  • 3 pistas musicales.\n  • ¡Y muchísimo más!\n¿Lo quieres más rápido? ¡Puedes usar paVos para comprar niveles siempre que quieras!",
                            "ar": "Season 7: Now thru Feb 28\n\nInstantly get these items <Bold>valued at over 3,500 V-Bucks</>.\n  • <ItemName>Zenith</> Progressive Outfit\n  • <ItemName>Lynx</> Progressive Outfit\n  • <Bold>50% Bonus</> Season Match XP\n  • <Bold>10% Bonus</> Season Friend Match XP\n  • <Bold>Extra Weekly Challenges</>\n\nPlay to level up your Battle Pass, unlocking <Bold>over 100 rewards</> (typically takes 75 to 150 hours of play).\n  • <ItemName>Sgt. Winter</> and <Bold>4 more Outfits</>\n  • <Bold>1,300 V-Bucks</>\n  • 2 Pets\n  • 6 Wraps\n  • 4 Harvesting Tools\n  • 7 Emotes\n  • 2 Toys\n  • 4 Gliders\n  • 6 Back Blings\n  • 5 Contrails\n  • 13 Sprays\n  • 3 Music Tracks\n  • and so much more!\nWant it all faster? You can use V-Bucks to buy tiers any time!",
                            "ja": "シーズン7: 2月28日まで\n\n<Bold>3,500 V-Bucks以上の価値</>があるアイテムを今すぐ手に入れましょう。• <ItemName>「ゼニス」</>プログレッシブコスチューム\n  • <ItemName>「リンクス」</>プログレッシブコスチューム\n  • シーズンマッチXPの<Bold>50%ボーナス</>\n  • シーズンフレンドマッチXPの<Bold>10%ボーナス</>\n  • <Bold>追加のウィークリーチャレンジ</>\n\nプレイしてバトルパスのレベルを上げると、<Bold>100以上の報酬</>をアンロックできます(通常、プレイにかかる時間は75～150時間程度)。\n  •<ItemName>「サージェント ウィンター」</>及びコスチューム<Bold>x4以上</>\n  • <Bold>1,300 V-Bucks</>\n  • ペットx2\n  • ラップx6\n  • 収集ツールx4\n  • エモートx7\n  • おもちゃx2\n  • グライダーx4\n  • バックアクセサリーx6\n  • コントレイルx5\n  • スプレーx13\n  • ミュージックトラックx3\n • 他にも色々！\nもっと早く報酬を全部集めたいなら、V-Bucksでいつでもティアを購入できます！",
                            "pl": "Sezon 7: od teraz do 28 lutego\n\nOtrzymasz od razu poniższe przedmioty <Bold>o wartości ponad 3500 V-dolców</>:\n  • Strój progresywny: <ItemName>Zenit</>\n  • Strój progresywny: <ItemName>Puma</>\n  • Sezonowa <Bold>premia +50% PD za grę</>\n  • Sezonowa <Bold>premia +10% PD za grę ze znajomymi</>\n  • Dostęp do <Bold>dodatkowych wyzwań tygodniowych</>\n\nGraj, aby awansować karnet bojowy i zdobyć <Bold>ponad 100 nagród</> (ich zebranie zajmuje zwykle od 75 do 150 godz. gry).\n  • <ItemName>Sierżant Zima</> i <Bold>4 inne stroje</>\n  • <Bold>1300 V-dolców</>\n  • 2 pupile\n  • 6 malowań\n  • 4 zbieraki\n  • 7 emotek\n  • 2 zabawki\n  • 4 lotnie\n  • 6 plecaków\n  • 5 smug\n  • 13 graffiti\n  • 3 tła muzyczne\n  • I dużo więcej!\nChcesz rozwijać się szybciej? W każdej chwili możesz kupić stopnie za V-dolce!",
                            "es-419": "Temporada 7: Ahora hasta el 28 de febrero\n\nObtén al instante estos objetos <Bold>que cuestan más de 3500 monedas V</>.\n  • Atuendo progresivo <ItemName>Cenit</>\n  • Atuendo progresivo <ItemName>Lince</>\n  • <Bold>50 % de bonificación</> de PE para partidas de la temporada\n  • <Bold>10 % de bonificación</> de PE para partidas con amigos en la temporada\n  • <Bold>Desafíos semanales adicionales</>\n\nJuega para subir de nivel el pase de batalla y desbloquear <Bold>más de 100 recompensas</> (esto lleva entre 75 y 150 horas de juego).\n  • <ItemName>Sargento Invierno</> y <Bold>4 atuendos más</>\n  • <Bold>1300 monedas V</>\n  • 2 mascotas\n  • 6 papeles\n  • 4 herramientas de recolección\n  • 7 gestos\n  • 2 juguetes\n  • 4 planeadores\n  • 6 mochilas retro\n  • 5 estelas\n  • 13 aerosoles\n  • 3 pistas de música\n  • ¡Y mucho más!\n¿Lo quieres todo más rápido? ¡Puedes usar las monedas V para comprar niveles cuando quieras!",
                            "tr": "7. Sezon: Şu andan 28 Şubat’a kadar\n\n<Bold>3.500 V-Papel’in üzerinde değeri olan</> bu içerikleri hemen kap.\n  • İlerlemeli <ItemName>Kutup Dağcısı</> Kıyafeti\n  • İlerlemeli <ItemName>Karakulak</> Kıyafeti\n  • <Bold>%50 Bonus</> Sezonluk Maç TP’si\n  • Arkadaşların için <Bold>%10 Bonus</> Sezonluk Maç TP’si\n  • <Bold>İlave Haftalık Görevler</>\n\nBattle Royale oynayarak Savaş Bileti’nin aşamasını yükselt ve <Bold>100’den fazla ödülü</> aç (genelde 75 ila 150 saat oynama gerektirir).\n  • <ItemName>Kış Çavuşu</> ve <Bold>4 Kıyafet</> daha\n  • <Bold>1,300 V-Papel</>\n  • 2 Sadık Dost\n  • 6 Kaplama\n  • 4 Toplama Aleti\n  • 7 İfade\n  • 2 Oyuncak\n  • 4 Planör\n  • 6 Sırt Süsü\n  • 5 Dalış İzi\n  • 13 Sprey\n  • 3 Müzik Parçası\n  • ve çok daha fazlası!\nHepsini daha hızlı mı almak istiyorsun? V-Papel karşılığında istediğin zaman aşama açabilirsin!"
                        },
                        "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_BR_Season7_BattlePass.DA_BR_Season7_BattlePass",
                        "itemGrants": []
                    },
                    {
                        "offerId": "64A3020B098841A7805EE257D68C554F",
                        "devName": "BR.Season7.SingleTier.01",
                        "offerType": "StaticPrice",
                        "prices": [
                            {
                                "currencyType": "MtxCurrency",
                                "currencySubType": "",
                                "regularPrice": 150,
                                "finalPrice": 150,
                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                "basePrice": 150
                            }
                        ],
                        "categories": [],
                        "dailyLimit": -1,
                        "weeklyLimit": -1,
                        "monthlyLimit": -1,
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
                            ""
                        ],
                        "requirements": [],
                        "metaInfo": [],
                        "catalogGroup": "",
                        "catalogGroupPriority": 0,
                        "sortPriority": 0,
                        "title": {
                            "de": "Battle-Pass-Stufe",
                            "ru": "Уровень боевого пропуска",
                            "ko": "배틀패스 티어",
                            "zh-hant": "英雄季卡戰階",
                            "pt-br": "Categoria de Passe de Batalha",
                            "en": "Battle Pass Tier",
                            "it": "Livello Pass battaglia",
                            "fr": "Palier du Passe de combat",
                            "zh-cn": "英雄季卡战阶",
                            "es": "Nivel del pase de batalla",
                            "ar": "Battle Pass Tier",
                            "ja": "バトルパスティア",
                            "pl": "Stopień karnetu bojowego",
                            "es-419": "Nivel de pase de batalla",
                            "tr": "Savaş Bileti Aşaması"
                        },
                        "shortDescription": "",
                        "description": {
                            "de": "Hol dir jetzt tolle Belohnungen!",
                            "ru": "Получите отличные награды!",
                            "ko": "지금 푸짐한 보상을 얻어보세요!",
                            "zh-hant": "現在獲得豐厚獎勵！",
                            "pt-br": "Ganhe recompensas ótimas agora!",
                            "en": "Get great rewards now!",
                            "it": "Ricevi subito magnifiche ricompense!",
                            "fr": "Obtenez de grandes récompenses !",
                            "zh-cn": "现在获得丰厚奖励！",
                            "es": "¡Consigue recompensas increíbles!",
                            "ar": "Get great rewards now!",
                            "ja": "ステキな報酬を今すぐゲット！",
                            "pl": "Zdobądź super nagrody już teraz!",
                            "es-419": "¡Consigue grandes recompensas ahora!",
                            "tr": "Harika ödüllerin sahibi ol!"
                        },
                        "displayAssetPath": "",
                        "itemGrants": []
                    }
                ]
            },
            {
                "name": "BRSeason8",
                "catalogEntries": [
                    {
                        "offerId": "18D9DA48000A40BFAEBAC55A99C55221",
                        "devName": "BR.Season8.BattleBundle.01",
                        "offerType": "StaticPrice",
                        "prices": [
                            {
                                "currencyType": "MtxCurrency",
                                "currencySubType": "",
                                "regularPrice": 4700,
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
                            ""
                        ],
                        "requirements": [
                            {
                                "requirementType": "DenyOnFulfillment",
                                "requiredId": "9DF02EA14FB15E475EBBEBBFDBB988DB",
                                "minQuantity": 1
                            }
                        ],
                        "metaInfo": [],
                        "catalogGroup": "",
                        "catalogGroupPriority": 0,
                        "sortPriority": 0,
                        "title": {
                            "de": "Battle Pass-Paket",
                            "ru": "Боевой комплект",
                            "ko": "배틀번들",
                            "zh-hant": "戰鬥套組",
                            "pt-br": "Pacotão de Batalha",
                            "en": "Battle Bundle",
                            "it": "Bundle battaglia",
                            "fr": "Pack de combat",
                            "zh-cn": "战斗套组",
                            "es": "Lote de batalla",
                            "ar": "Battle Bundle",
                            "ja": "バトルバンドル",
                            "pl": "Zestaw bojowy",
                            "es-419": "Paquete de batalla",
                            "tr": "Savaş Paketi"
                        },
                        "shortDescription": {
                            "de": "Battle Pass + 25 Stufen!",
                            "ru": "Боевой пропуск + 25 уровней!",
                            "ko": "배틀패스 + 25티어!",
                            "zh-hant": "英雄季卡增加25戰階！",
                            "pt-br": "Passe de Batalha + 25 categorias!",
                            "en": "Battle Pass + 25 tiers!",
                            "it": "Pass battaglia + 25 livelli!",
                            "fr": "Passe de combat + 25 paliers !",
                            "zh-cn": "英雄季卡增加25战阶！",
                            "es": "¡Pase de batalla y 25 niveles!",
                            "ar": "Battle Pass + 25 tiers!",
                            "ja": "バトルパス+25ティア！",
                            "pl": "Karnet bojowy + 25 stopni!",
                            "es-419": "¡Pase de batalla + 25 niveles!",
                            "tr": "Savaş Bileti + 25 aşama!"
                        },
                        "description": {
                            "de": "Saison 8 – Ab sofort bis einschließlich 8. Mai\n\nErhalte sofort diese Gegenstände <Bold>im Wert von über 10.000 V-Bucks</>.\n  • <ItemName>Schwarzherz</> (aufrüstbares Outfit)\n  • <ItemName>Hybrid</> (aufrüstbares Outfit)\n  • <ItemName>Klapperschlange</> (Outfit)\n  • <ItemName>Tropentarnung</> (Lackierung)\n  • <ItemName>Stöckchen</> (Gefährte)\n  • <ItemName>Himmelsschlangen</> (Hängegleiter)\n  • <ItemName>Kobra</> (Rücken-Accessoire)\n  • <ItemName>Wehende Standarte</> (Kondensstreifen)\n  • 300 V-Bucks\n  • 1 Musikstück\n  • <Bold>+70 %</> Saison-Match-EP\n  • <Bold>+20 %</> Saison-Match-EP für Freunde\n  • <Bold>zusätzliche wöchentliche Herausforderungen</>\n  • und noch mehr!\n\nSpiele weiter und stufe deinen Battle Pass auf, um <Bold>über 75 Belohnungen</> freizuschalten (im Normalfall werden dafür 75 bis 150 Spielstunden benötigt).\n  • <Bold>4 weitere Outfits</>\n  • <Bold>1.000 V-Bucks</>\n  • 6 Emotes\n  • 5 Lackierungen\n  • 3 Hängegleiter\n  • 3 Rücken-Accessoires\n  • 4 Erntewerkzeuge\n  • 4 Kondensstreifen\n  • 1 Gefährte\n  • 12 Spraymotive\n  • 2 Musikstücke\n  • und noch eine ganze Menge mehr!\nDas dauert dir zu lange? Du kannst dir mit V-Bucks jederzeit Stufen kaufen!",
                            "ru": "Восьмой сезон: до 8 мая\n\nСразу же получите предметы <Bold>стоимостью более 10 000 В-баксов!</>\n  • Улучшающаяся экипировка <ItemName>Флибустьера</>;\n  • улучшающаяся экипировка <ItemName>Гибрида</>;\n  • экипировка <ItemName>Горгоны</>;\n  • обёртка <ItemName>«Тропики»</>;\n  • питомец <ItemName>Псиноккио</>;\n  • дельтаплан <ItemName>«Воздушные змеи»</>;\n  • украшение на спину <ItemName>«Кобра»</>;\n  • воздушный след <ItemName>«Чёрный флаг»</>;\n  • 300 В-баксов;\n  • 1 музыкальная композиция;\n  • <Bold>+70% к опыту</> за матчи сезона;\n  • <Bold>+20% к опыту</> друзей за матчи сезона;\n  • <Bold>дополнительные еженедельные испытания</>\n и многое другое.\n\nИграйте, повышайте уровень боевого пропуска — и вас ждут <Bold>более 75 наград</>. Обычно, чтобы открыть все награды, требуется 75–150 часов игры.\n  • <Bold>ещё 4 костюма;</>\n  • <Bold>1000 В-баксов</>;\n  • 6 эмоций;\n  • 5 обёрток;\n  • 3 дельтаплана;\n  • 3 украшения на спину;\n  • 4 инструмента;\n  • 4 воздушных следа;\n  • 1 питомец;\n  • 12 граффити;\n  • 2 музыкальные композиции\n    и это ещё не всё!\nНе хотите ждать? Уровни можно быстро получить за В-баксы!",
                            "ko": "시즌 8: 5월 8일 종료\n\n<Bold>10,000 V-Bucks 이상의 가치</>가 있는 여러 아이템을 즉시 받아가세요.\n  • <ItemName>블랙하트</> 진화형 의상\n  • <ItemName>하이브리드</> 진화형 의상\n  • <ItemName>사이드와인더</> 의상\n  • <ItemName>열대 지방 위장 패턴</> 외관\n  • <ItemName>우지</> 애완동물\n  • <ItemName>하늘뱀</> 글라이더\n  • <ItemName>코브라</> 등 장신구\n  • <ItemName>공중 깃발</> 트레일\n  • 300 V-Bucks\n  • 음악 트랙 1개\n  • <Bold>70% 보너스</> 시즌 매치 XP\n  • <Bold>20% 보너스</> 시즌 친구 매치 XP\n  • <Bold>추가 주간 도전</>\n  • 그 외 더 많은 혜택!\n\n게임을 플레이하고 배틀패스 티어를 올려서 <Bold>75개 이상의 보상</>을 획득해보세요(보통 75-150시간 소요).\n  • <Bold>추가 의상 4개</>\n  • <Bold>1,000 V-Bucks</>\n  • 이모트 6개\n  • 외관 5개\n  • 글라이더 3개\n  • 등 장신구 3개\n  • 수확 도구 4개\n  • 트레일 4개\n  • 애완동물 1마리\n  • 스프레이 12개\n  • 음악 트랙 2개\n  • 그 외 많은 혜택!\n더 빨리 보상을 얻고 싶으신가요? V-Bucks를 사용해서 언제든지 티어를 구매할 수 있습니다!",
                            "zh-hant": "第八賽季：現在起至5月8日\n\n立即獲得這些<Bold>價值逾10000V幣</>的物品。\n  • <ItemName>黑鬍子</>可進化服裝\n  • <ItemName>忍者龍</>可進化服裝\n  • <ItemName>響尾蛇</>服裝\n  • <ItemName>熱帶迷彩</>皮膚\n  • <ItemName>木雕汪</>寵物\n  • <ItemName>空中飛蛇</>滑翔傘\n  • <ItemName>眼鏡蛇</>背部裝飾\n  • <ItemName>飛行掛旗</>滑翔軌跡\n  • 300V幣\n  • 1個音軌\n  • <Bold>70%額外</>賽季匹配經驗\n  • <Bold>20%額外</>賽季好友匹配經驗\n  • <Bold>額外每週挑戰</>\n  • 以及更多獎勵！\n\n通過遊玩提升英雄季卡戰階，解鎖<Bold>至少75個獎勵</>（通常需要75到150個小時的遊玩時間）。\n  • <Bold>4個額外服裝</>\n  • <Bold>1000V幣</>\n  • 6個姿勢\n  • 5個皮膚\n  • 3個滑翔傘\n  • 3個背部裝飾\n  • 4個鎬\n  • 4個滑翔軌跡\n  • 1個寵物\n  • 12個塗鴉\n  • 2個音軌\n  • 以及更多獎勵！\n希望更快得到所有獎勵嗎？你可以隨時使用V幣購買戰階！",
                            "pt-br": "Temporada 8: de hoje até 8 de maio\n\nReceba instantaneamente estes itens <Bold>avaliados em mais de 10.000 V-Bucks</>.\n  • Traje Progressivo <ItemName>Coração Negro</>\n  • Traje Progressivo <ItemName>Híbrido</>\n  • Traje <ItemName>Cascavel</>\n  • Envelopamento <ItemName>Camuflagem Tropical</>\n  • Mascote <ItemName>Madeiríneo</>\n  • Asa-delta <ItemName>Serpentes dos Céus</>\n  • Acessório para as Costas <ItemName>Naja</>\n  • Rastro de Fumaça <ItemName>Estandarte de Voo</>\n  • 300 V-Bucks\n  • 1 Faixa Musical\n  • <Bold>70% de Bônus</> de EXP da Temporada em Partidas\n  • <Bold>20% de Bônus</> de EXP da Temporada em Partidas com Amigos\n  • <Bold>Desafios Semanais Extras</>\n  • e mais!\n\nJogue para subir o nível do seu Passe de Batalha, desbloqueando <Bold>mais de 75 recompensas</> (leva em média de 75 a 150 horas de jogo).\n  • <Bold>Mais 4 Trajes</>\n  • <Bold>1.000 V-Bucks</>\n  • 6 Gestos\n  • 5 Envelopamentos\n  • 3 Asas-deltas\n  • 3 Acessórios para as Costas\n  • 4 Ferramentas de Coleta\n  • 4 Rastros de Fumaça\n  • 1 Mascote\n  • 12 Sprays\n  • 2 Faixas Musicais\n  • e muito mais!\nQuer obter tudo mais rápido? Você pode comprar categorias com V-Bucks a qualquer hora!",
                            "en": "Season 8 Now thru May 8\n\nInstantly get these items <Bold>valued at over 10,000 V-Bucks</>.\n  • <ItemName>Blackheart</> Progressive Outfit\n  • <ItemName>Hybrid</> Progressive Outfit\n  • <ItemName>Sidewinder</> Outfit\n  • <ItemName>Tropical Camo</> Wrap\n  • <ItemName>Woodsy</> Pet\n  • <ItemName>Sky Serpents</> Glider\n  • <ItemName>Cobra</> Back Bling\n  • <ItemName>Flying Standard</> Contrail\n  • 300 V-Bucks\n  • 1 Music Track\n  • <Bold>70% Bonus</> Season Match XP\n  • <Bold>20% Bonus</> Season Friend Match XP\n  • <Bold>Extra Weekly Challenges</>\n  • and more!\n\nPlay to level up your Battle Pass, unlocking <Bold>over 75 rewards</> (typically takes 75 to 150 hours of play).\n  • <Bold>4 more Outfits</>\n  • <Bold>1,000 V-Bucks</>\n  • 6 Emotes\n  • 5 Wraps\n  • 3 Gliders\n  • 3 Back Blings\n  • 4 Harvesting Tools\n  • 4 Contrails\n  • 1 Pet\n  • 12 Sprays\n  • 2 Music Tracks\n  • and so much more!\nWant it all faster? You can use V-Bucks to buy tiers any time!",
                            "it": "Stagione 8, da ora fino all'8 maggio\n\nOttieni subito questi oggetti <Bold>dal valore di oltre 10.000 V-buck</>!\n • Costume progressivo <ItemName>Cuore nero</>\n • Costume progressivo <ItemName>Ibrido</>\n • Costume <ItemName>Sidewinder</>\n • Copertura <ItemName>Mimetica tropicale</>\n • Piccolo amico <ItemName>Woodsy</>\n • Deltaplano <ItemName>Serpenti dei cieli</>\n • Dorso decorativo <ItemName>Cobra</>\n • Scia <ItemName>Stendardo volante</>\n • 300 V-Buck\n • 1 brano musicale\n • <Bold>Bonus 70%</> Bonus PE partite stagionali\n • <Bold>Bonus 20%</> PE amici partite stagionali\n • <Bold>Sfide settimanali extra</>\n • e altro ancora!\n\nGioca per aumentare il livello del tuo Pass battaglia, sbloccando <Bold>più di 75 ricompense</> (per un totale indicativo di 75-150 ore di gioco).\n • <Bold>4 costumi in più</>\n • <Bold>1.000 V-Buck</>\n • 6 emote\n • 5 coperture\n • 3 deltaplani\n • 3 dorsi decorativi\n • 4 strumenti raccolta\n • 4 scie\n • 1 piccolo amico\n • 12 spray\n • 2 brani musicali\n • E altro ancora!\nVuoi tutto e subito? Puoi acquistare livelli usando V-buck in qualsiasi momento!",
                            "fr": "Saison 8 : jusqu'au 8 mai\n\nRecevez immédiatement ces objets <Bold>d'une valeur supérieure à 10 000 V-bucks</>.\n  • Tenue évolutive <ItemName>Cœur Noir</>\n  • Tenue évolutive <ItemName>Hybride</>\n  • Tenue <ItemName>Vipère</>\n  • Revêtement <ItemName>Camouflage tropical</>\n  • Le compagnon <ItemName>Tilleul</>\n  • Planeur <ItemName>Serpents célestes</>\n  • Accessoire de dos <ItemName>Cobra</>\n  • Traînée de condensation <ItemName>Drapeau volant</>\n  • 300 V-bucks\n  • 1 piste musicale\n  • Bonus d'EXP de saison de <Bold>70%</>\n  • Bonus d'EXP de saison de <Bold>20%</> pour des amis\n  • <Bold>Des défis hebdomadaires supplémentaires</>\n  • Et plus !\n\nJouez pour augmenter le niveau de votre Passe de combat et déverrouiller <Bold>plus de 75 récompenses</> (nécessitant de 75 à 150 heures de jeu).\n  • <Bold>4 autres tenues</>\n  • <Bold>1000 V-bucks</>\n  • 6 emotes\n  • 5 revêtements\n  • 3 planeurs\n  • 3 accessoires de dos\n  • 4 pioches\n  • 4 traînées de condensation\n  • 1 compagnon\n  • 12 aérosols\n  • 2 pistes musicales\n  • Et plus !\nEnvie d'aller plus vite ? Utilisez vos V-bucks pour acheter des niveaux à tout moment !",
                            "zh-cn": "第八赛季：现在起至5月8日\n\n立即获得这些<Bold>价值逾10000V币</>的物品。\n  • <ItemName>黑胡子</>可进化服装\n  • <ItemName>忍者龙</>可进化服装\n  • <ItemName>响尾蛇</>服装\n  • <ItemName>热带迷彩</>皮肤\n  • <ItemName>木雕汪</>宠物\n  • <ItemName>空中飞蛇</>滑翔伞\n  • <ItemName>眼镜蛇</>背部装饰\n  • <ItemName>飞行挂旗</>滑翔轨迹\n  • 300V币\n  • 1个音轨\n  • <Bold>70%额外</>赛季匹配经验\n  • <Bold>20%额外</>赛季好友匹配经验\n  • <Bold>额外每周挑战</>\n  • 以及更多奖励！\n\n通过游玩提升英雄季卡战阶，解锁<Bold>至少75个奖励</>（通常需要75到150个小时的游玩时间）。\n  • <Bold>4个额外服装</>\n  • <Bold>1000V币</>\n  • 6个姿势\n  • 5个皮肤\n  • 3个滑翔伞\n  • 3个背部装饰\n  • 4个镐\n  • 4个滑翔轨迹\n  • 1个宠物\n  • 12个涂鸦\n  • 2个音轨\n  • 以及更多奖励！\n希望更快得到所有奖励吗？你可以随时使用V币购买战阶！",
                            "es": "Temporada 8, desde ahora hasta el 8 de mayo\n\nConsigue instantáneamente estos objetos <Bold>valorados en más de 10 000 paVos</>.\n  • Traje progresivo de <ItemName>Parchenegro</>\n  • Traje progresivo de <ItemName>Híbrido</>\n  • Traje de <ItemName>Áspid</>\n  • Envoltorio <ItemName>Camuflaje tropical</>\n  • Mascota <ItemName>Maderito</>\n  • Ala delta<ItemName>Carroza de cascabel</>\n  • Accesorio mochilero<ItemName>Cobra</>\n  • Estela <ItemName>A toda vela</>\n  • 300 paVos\n  • 1 Tema musical\n  • <Bold>Bonificación del 70 %</> de PE por partida de temporada\n  • <Bold>Bonificación del 20 %</> de PE de partida con amigos de temporada\n  • <Bold>Desafíos semanales adicionales</>\n  • ¡y mucho más!\n\nJugad para subir de nivel el pase de batalla, que desbloquea <Bold>más de 75 recompensas</> (suele dar para entre 75 y 150 horas de juego).\n  • <Bold>4 trajes más</>\n  • <Bold>1000 paVos</>\n  • 6 gestos\n  • 5 envoltorios\n  • 3 alas delta\n  • 3 accesorios mochileros\n  • 4 herramientas de recolección\n  • 4 estelas\n  • 1 mascota\n  • 12 grafitis\n  • 2 temas musicales\n  • ¡y mucho más!\n¿Lo queréis más rápido? ¡Puedes usar paVos para comprar niveles siempre que quieras!",
                            "ar": "Season 8 Now thru May 8\n\nInstantly get these items <Bold>valued at over 10,000 V-Bucks</>.\n  • <ItemName>Blackheart</> Progressive Outfit\n  • <ItemName>Hybrid</> Progressive Outfit\n  • <ItemName>Sidewinder</> Outfit\n  • <ItemName>Tropical Camo</> Wrap\n  • <ItemName>Woodsy</> Pet\n  • <ItemName>Sky Serpents</> Glider\n  • <ItemName>Cobra</> Back Bling\n  • <ItemName>Flying Standard</> Contrail\n  • 300 V-Bucks\n  • 1 Music Track\n  • <Bold>70% Bonus</> Season Match XP\n  • <Bold>20% Bonus</> Season Friend Match XP\n  • <Bold>Extra Weekly Challenges</>\n  • and more!\n\nPlay to level up your Battle Pass, unlocking <Bold>over 75 rewards</> (typically takes 75 to 150 hours of play).\n  • <Bold>4 more Outfits</>\n  • <Bold>1,000 V-Bucks</>\n  • 6 Emotes\n  • 5 Wraps\n  • 3 Gliders\n  • 3 Back Blings\n  • 4 Harvesting Tools\n  • 4 Contrails\n  • 1 Pet\n  • 12 Sprays\n  • 2 Music Tracks\n  • and so much more!\nWant it all faster? You can use V-Bucks to buy tiers any time!",
                            "ja": "シーズン8: 5月8日まで\n\n<Bold>10,000 V-Bucks以上の価値</>があるアイテムを今すぐ手に入れましょう。\n  • プログレッシブコスチューム<ItemName>「ブラックハート」</>\n  • プログレッシブコスチューム<ItemName>「ハイブリッド」</>\n  • コスチューム<ItemName>「サイドワインダー」</>\n  • ラップ<ItemName>「トロピカルカモ」</>\n  • ペット<ItemName>「ウッドゥジー」</>\n  • グライダー<ItemName>「スカイサーペント」</>\n  • バックアクセサリー<ItemName>「コブラ」</>\n  • コントレイル<ItemName>「フライングスタンダード」</>\n  • 300 V-Bucks\n  • ミュージックx1\n  • シーズンマッチXPの<Bold>70%ボーナス</>\n  • シーズンフレンドマッチXPの<Bold>20%ボーナス</>\n  • <Bold>追加のウィークリーチャレンジ</>\n  • 他にも盛りだくさん！\n\nプレイしてバトルパスのレベルを上げると、<Bold>75個以上の報酬</>をアンロックできます(通常、プレイにかかる時間は75～150時間程度)。\n  • <Bold>コスチュームx4以上</>\n  • <Bold>1,000 V-Bucks</>\n  • エモートx6\n  • ラップx5\n  • グライダーx3\n  • バックアクセサリーx3\n  • 収集ツールx4\n  • コントレイルx4\n  • ペットx1\n  • スプレーx12\n  • ミュージックトラックx2\n  • 他にも盛りだくさん！\nもっと早く報酬を全部集めたいという方は、V-Bucksでいつでもティアを購入できます！",
                            "pl": "Sezon 8: od teraz do 8 maja\n\nOtrzymasz od razu poniższe przedmioty <Bold>o wartości ponad 10 000 V-dolców</>:\n  • Strój progresywny: <ItemName>Czarnosercy</>\n  • Strój progresywny: <ItemName>Hybryda</>\n  • Strój progresywny: <ItemName>Grzechotnica</>\n  • Malowanie: <ItemName>Tropikalny kamuflaż</>\n  • Pupil: <ItemName>Drewniak</>\n  • Lotnia: <ItemName>Podniebne Węże</>\n  • Plecak: <ItemName>Kobra</>\n  • Smuga: <ItemName>Powiewający Sztandar</>\n  • 300 V-dolców  • 1 tło muzyczne\n  • Sezonowa <Bold>premia +70% PD za grę</>\n  • Sezonowa <Bold>premia +20% PD za grę ze znajomymi</>\n  • Dostęp do <Bold>dodatkowych wyzwań tygodnia</>\n  • I nie tylko!\n\nGraj, aby awansować karnet bojowy i zdobyć <Bold>ponad 75 nagród</> (ich zebranie zajmuje zwykle od 75 do 150 godz. gry).\n  • <Bold>4 kolejne stroje</>\n  • <Bold>1000 V-dolców</>\n  • 6 emotek\n  • 5 malowań\n  • 3 lotnie\n  • 3 plecaki\n  • 4 zbieraki\n  • 4 smugi\n  • 1 pupil\n  • 12 graffiti\n  • 2 tła muzyczne\n  • I dużo więcej!\nChcesz rozwijać się szybciej? W każdej chwili możesz kupić stopnie za V-dolce!",
                            "es-419": "Temporada 8: ahora hasta el 8 de mayo\n\nObtén al instante estos objetos <Bold>que cuestan más de 10 000 monedas V</>.\n  • Atuendo progresivo <ItemName>Parche Negro</>\n  • Atuendo progresivo <ItemName>Híbrido</>\n  • Atuendo <ItemName>Cascabel</>\n  • Papel <ItemName>Camuflaje tropical</>\n  • Mascota <ItemName>Maderín</>\n  • Planeador <ItemName>Serpientes del cielo</>\n  • Mochila retro <ItemName>Cobra</> \n  • Estela <ItemName>Viento en popa</>\n  • 300 monedas V\n  • 1 pista de música\n  • <Bold>70 % de bonificación</> de PE para partidas en la temporada\n  • <Bold>20 % de bonificación</> de PE para partidas con amigos en la temporada\n  • <Bold>Desafíos semanales adicionales</>\n  • ¡Y mucho más!\n\nJuega para subir de nivel el pase de batalla y desbloquear <Bold>más de 75 recompensas</> (esto lleva entre 75 y 150 horas de juego).\n  • <Bold>4 atuendos más</>\n  • <Bold>1000 monedas V</>\n  • 6 gestos\n  • 5 papeles\n  • 3 planeadores\n  • 3 mochilas retro\n  • 4 herramientas de recolección\n  • 4 estelas\n  • 1 mascota\n  • 12 aerosoles\n  • 2 pistas de música\n  • ¡Y mucho más!\n¿Lo quieres todo más rápido? ¡Puedes usar las monedas V para comprar niveles cuando quieras!",
                            "tr": "8. Sezon: Şu andan 8 Mayıs’a kadar\n\n<Bold>10.000 V-Papel’in üzerinde değeri olan</> bu içerikleri hemen kap.\n  • İlerlemeli <ItemName>Karasakal</> Kıyafeti\n  • İlerlemeli <ItemName>Melez</> Kıyafeti\n  • <ItemName>Engerek</> Kıyafeti\n  • <ItemName>Tropik Kamuflaj</> Kaplaması\n  • Sadık Dost <ItemName>Gofret</>\n  • <ItemName>Yılanör</> Planörü\n  • <ItemName>Kobra</> Sırt Süsü\n  • <ItemName>Kara Bayrak</> Dalış İzi\n  • 300 V-Papel\n  • 1 Müzik Parçası\n  • <Bold>%70 Bonus</> Sezonluk Maç TP’si\n  • Arkadaşların için <Bold>%20 Bonus</> Sezonluk Maç TP’si\n  • <Bold>İlave Haftalık Görevler</>\n  • ve çok daha fazlası!\n\nBattle Royale oynayarak Savaş Bileti’nin aşamasını yükselt ve <Bold>75’ten fazla ödülü</> aç (genelde 75 ila 150 saat oynama gerektirir).\n  • <Bold>4 Kıyafet daha</>\n  • <Bold>1.000 V-Papel</>\n  • 6 İfade\n  • 5 Kaplama\n  • 3 Planör\n  • 3 Sırt Süsü\n  •  4 Toplama Aleti\n  • 4 Dalış İzi\n  • 1 Sadık Dost\n  • 12 Sprey\n  • 2 Müzik Parçası\n  • ve çok daha fazlası!\nHepsini daha hızlı almak mı istiyorsun? V-Papel karşılığında istediğin zaman aşama açabilirsin!"
                        },
                        "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_BR_Season8_BattlePassWithLevels.DA_BR_Season8_BattlePassWithLevels",
                        "itemGrants": []
                    },
                    {
                        "offerId": "E07E41D52D4A425F8DC6592496B75301",
                        "devName": "BR.Season8.SingleTier.01",
                        "offerType": "StaticPrice",
                        "prices": [
                            {
                                "currencyType": "MtxCurrency",
                                "currencySubType": "",
                                "regularPrice": 150,
                                "finalPrice": 150,
                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                "basePrice": 150
                            }
                        ],
                        "categories": [],
                        "dailyLimit": -1,
                        "weeklyLimit": -1,
                        "monthlyLimit": -1,
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
                            ""
                        ],
                        "requirements": [],
                        "metaInfo": [],
                        "catalogGroup": "",
                        "catalogGroupPriority": 0,
                        "sortPriority": 0,
                        "title": {
                            "de": "Battle Pass-Stufe",
                            "ru": "Уровень боевого пропуска",
                            "ko": "배틀패스 티어",
                            "zh-hant": "英雄季卡戰階",
                            "pt-br": "Categoria de Passe de Batalha",
                            "en": "Battle Pass Tier",
                            "it": "Livello Pass battaglia",
                            "fr": "Palier du Passe de combat",
                            "zh-cn": "英雄季卡战阶",
                            "es": "Nivel del pase de batalla",
                            "ar": "Battle Pass Tier",
                            "ja": "バトルパスティア",
                            "pl": "Stopień karnetu bojowego",
                            "es-419": "Nivel de pase de batalla",
                            "tr": "Savaş Bileti Aşaması"
                        },
                        "shortDescription": "",
                        "description": {
                            "de": "Hol dir jetzt tolle Belohnungen!",
                            "ru": "Получите отличные награды!",
                            "ko": "지금 푸짐한 보상을 얻어보세요!",
                            "zh-hant": "現在獲得豐厚獎勵！",
                            "pt-br": "Ganhe recompensas ótimas agora!",
                            "en": "Get great rewards now!",
                            "it": "Ricevi subito magnifiche ricompense!",
                            "fr": "Obtenez de grandes récompenses !",
                            "zh-cn": "现在获得丰厚奖励！",
                            "es": "¡Consigue recompensas increíbles!",
                            "ar": "Get great rewards now!",
                            "ja": "ステキな報酬を今すぐゲット！",
                            "pl": "Zdobądź super nagrody już teraz!",
                            "es-419": "¡Consigue grandes recompensas ahora!",
                            "tr": "Harika ödüllerin sahibi ol!"
                        },
                        "displayAssetPath": "",
                        "itemGrants": []
                    },
                    {
                        "offerId": "77F31B7F83FB422195DA60CDE683671D",
                        "devName": "BR.Season8.BattlePass.01",
                        "offerType": "StaticPrice",
                        "prices": [
                            {
                                "currencyType": "MtxCurrency",
                                "currencySubType": "",
                                "regularPrice": 950,
                                "finalPrice": 950,
                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                "basePrice": 950
                            }
                        ],
                        "categories": [],
                        "dailyLimit": -1,
                        "weeklyLimit": -1,
                        "monthlyLimit": -1,
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
                            ""
                        ],
                        "requirements": [
                            {
                                "requirementType": "DenyOnFulfillment",
                                "requiredId": "9DF02EA14FB15E475EBBEBBFDBB988DB",
                                "minQuantity": 1
                            }
                        ],
                        "metaInfo": [],
                        "catalogGroup": "",
                        "catalogGroupPriority": 0,
                        "sortPriority": 1,
                        "title": {
                            "de": "Battle Pass",
                            "ru": "Боевой пропуск",
                            "ko": "배틀패스",
                            "zh-hant": "英雄季卡",
                            "pt-br": "Passe de Batalha",
                            "en": "Battle Pass",
                            "it": "Pass battaglia",
                            "fr": "Passe de combat",
                            "zh-cn": "英雄季卡",
                            "es": "Pase de batalla",
                            "ar": "Battle Pass",
                            "ja": "バトルパス",
                            "pl": "Karnet bojowy",
                            "es-419": "Pase de batalla",
                            "tr": "Savaş Bileti"
                        },
                        "shortDescription": {
                            "de": "Saison 8",
                            "ru": "Сезон 8",
                            "ko": "시즌 8",
                            "zh-hant": "第8賽季",
                            "pt-br": "Temporada 8",
                            "en": "Season 8",
                            "it": "Stagione 8",
                            "fr": "Saison 8",
                            "zh-cn": "第8赛季",
                            "es": "Temporada 8",
                            "ar": "Season 8",
                            "ja": "シーズン8",
                            "pl": "Sezon 8",
                            "es-419": "Temporada 8",
                            "tr": "8. Sezon"
                        },
                        "description": {
                            "de": "Saison 8 – Ab sofort bis einschließlich 8. Mai\n\nErhalte sofort diese Gegenstände <Bold>im Wert von über 3.500 V-Bucks</>.\n  • <ItemName>Schwarzherz</> (aufrüstbares Outfit)\n  • <ItemName>Hybrid</> (aufrüstbares Outfit)\n  • <Bold>+50 %</> Saison-Match-EP\n  • <Bold>+10 %</> Saison-Match-EP für Freunde\n  • <Bold>zusätzliche wöchentliche Herausforderungen</>\n\nSpiele weiter und stufe deinen Battle Pass auf, um <Bold>über 100 Belohnungen</> freizuschalten (im Normalfall werden dafür 75 bis 150 Spielstunden benötigt).\n  • <ItemName>Klapperschlange</> und <Bold>4 weitere Outfits</>\n  • <Bold>1.300 V-Bucks</>\n  • 7 Emotes\n  • 6 Lackierungen\n  • 2 Gefährten\n  • 5 Erntewerkzeuge\n  • 4 Hängegleiter\n  • 4 Rücken-Accessoires\n  • 5 Kondensstreifen\n  • 14 Spraymotive\n  • 3 Musikstücke\n  • 1 Spielzeug\n  • 20 Ladebildschirme\n  • und noch eine ganze Menge mehr!\nDas dauert dir zu lange? Du kannst dir mit V-Bucks jederzeit Stufen kaufen!",
                            "ru": "Восьмой сезон: до 8 мая \n\nСразу же получите предметы <Bold>стоимостью более 3500 В-баксов!</>\n  • Улучшающаяся экипировка <ItemName>Флибустьера</>;\n  • улучшающаяся экипировка <ItemName>Гибрида</>;\n  • <Bold>+50% к опыту</> за матчи сезона;\n  • <Bold>+10% к опыту</> друзей за матчи сезона;\n  • <Bold>дополнительные еженедельные испытания</>.\n\nИграйте, повышайте уровень боевого пропуска — и вас ждут <Bold>более 100 наград</>. Обычно, чтобы открыть все награды, требуется 75–150 часов игры.\n  • экипировка <ItemName>Горгоны</> и <Bold>ещё 4 костюма;</>\n  • <Bold>1300 В-баксов;</>\n  • 7 эмоций;\n  • 6 обёрток;\n  • 2 питомца;\n  • 5 инструментов;\n  • 4 дельтаплана;\n  • 4 украшения на спину;\n  • 5 воздушных следов;\n  • 14 граффити;\n  • 3 музыкальные композиции;\n  • 1 игрушка;\n  • 20 экранов загрузки\n  и это ещё не всё!\nНе хотите ждать? Уровни можно быстро получить за В-баксы!",
                            "ko": "시즌 8: 5월 8일 종료\n\n<Bold>3,500 V-Bucks 이상의 가치</>가 있는 여러 아이템을 즉시 받아가세요.\n  • <ItemName>블랙하트</> 진화형 의상\n  • <ItemName>하이브리드</> 진화형 의상\n  • <Bold>50% 보너스</> 시즌 매치 XP\n  • <Bold>10% 보너스</> 시즌 친구 매치 XP\n  • <Bold>추가 주간 도전</>\n\n게임을 플레이하고 배틀패스 티어를 올려서 <Bold>100개 이상의 보상</>을 획득해보세요(보통 75-150시간 소요).\n  • <ItemName>사이드와인더</> 외 <Bold>의상 4개</>\n  • <Bold>1,300 V-Bucks</>\n  • 이모트 7개\n  • 외관 6개\n  • 애완동물 2마리\n  • 수확 도구 5개\n  • 글라이더 4개\n  • 등 장신구 4개\n  • 트레일 5개\n  • 스프레이 14개\n  • 음악 트랙 3개\n  • 장난감 1개\n  • 로딩 화면 20개\n  • 그 외 많은 혜택!\n더 빨리 보상을 얻고 싶으신가요? V-Bucks를 사용해서 언제든지 티어를 구매할 수 있습니다!",
                            "zh-hant": "第八賽季：現在起至5月8日\n\n立即獲得這些<Bold>價值逾3500V幣</>的物品。\n  • <ItemName>黑鬍子</>可進化服裝\n  • <ItemName>忍者龍</>可進化服裝\n  • <Bold>50%額外</>賽季匹配經驗\n  • <Bold>10%額外</>賽季好友匹配經驗\n  • <Bold>額外每週挑戰</>\n\n通過遊玩提升英雄季卡戰階，解鎖<Bold>百餘獎勵</>（通常需要75到150個小時的遊玩時間）。\n  • <ItemName>響尾蛇</>和<Bold>4個額外服裝</>\n  • <Bold>1300V幣</>\n  • 7個姿勢\n  • 6個皮膚\n  • 2個寵物\n  • 5個鎬\n  • 4個滑翔傘\n  • 4個背部裝飾\n  • 5個滑翔軌跡\n  • 14個塗鴉\n  • 3個音軌\n  • 1個玩具\n  • 20張載入介面\n  • 以及更多獎勵！\n希望更快得到所有獎勵嗎？你可以隨時使用V幣購買戰階！",
                            "pt-br": "Temporada 8: de hoje até 8 de maio \n\nReceba instantaneamente estes itens <Bold>avaliados em mais de 3.500 V-Bucks</>.\n  • Traje Progressivo <ItemName>Coração Negro</>\n  • Traje Progressivo <ItemName>Híbrido</>\n  • <Bold>50% de Bônus</> de EXP da Temporada em Partidas\n  • <Bold>10% de Bônus</> de EXP da Temporada em Partidas com Amigos\n  • <Bold>Desafios Semanais Extras</>\n\nJogue para subir o nível do seu Passe de Batalha, desbloqueando <Bold>mais de 100 recompensas</> (leva em média de 75 a 150 horas de jogo).\n  • <ItemName>Cascavel</> e <Bold>mais 4 Trajes</>\n  • <Bold>1.300 V-Bucks</>\n  • 7 Gestos\n  • 6 Envelopamentos\n  • 2 Mascotes\n  • 5 Ferramentas de Coleta\n  • 4 Asas-deltas\n  • 4 Acessórios para as Costas\n  • 5 Rastros de Fumaça\n  • 14 Sprays\n  • 3 Faixas Musicais\n  • 1 Brinquedo\n  • 20 Telas de Carregamento\n  • e muito mais!\nQuer obter tudo mais rápido? Você pode comprar categorias com V-Bucks a qualquer hora!",
                            "en": "Season 8 Now thru May 8 \n\nInstantly get these items <Bold>valued at over 3,500 V-Bucks</>.\n  • <ItemName>Blackheart</> Progressive Outfit\n  • <ItemName>Hybrid</> Progressive Outfit\n  • <Bold>50% Bonus</> Season Match XP\n  • <Bold>10% Bonus</> Season Friend Match XP\n  • <Bold>Extra Weekly Challenges</>\n\nPlay to level up your Battle Pass, unlocking <Bold>over 100 rewards</> (typically takes 75 to 150 hours of play).\n  • <ItemName>Sidewinder</> and <Bold>4 more Outfits</>\n  • <Bold>1,300 V-Bucks</>\n  • 7 Emotes\n  • 6 Wraps\n  • 2 Pets\n  • 5 Harvesting Tools\n  • 4 Gliders\n  • 4 Back Blings\n  • 5 Contrails\n  • 14 Sprays\n  • 3 Music Tracks\n  • 1 Toy\n  • 20 Loading Screens\n  • and so much more!\nWant it all faster? You can use V-Bucks to buy tiers any time!",
                            "it": "Stagione 8, da ora fino all'8 maggio\n\nOttieni subito questi oggetti <Bold>dal valore di oltre 3.500 V-buck</>!\n • Costume progressivo <ItemName>Cuore nero</>\n • Costume progressivo <ItemName>Ibrido</>\n • <Bold>Bonus del 50%</> dei PE partite stagionali\n • <Bold>Bonus del 10%</> dei PE partite amico stagionali\n • <Bold>Sfide settimanali extra</>\n\nGioca per aumentare il livello del tuo Pass battaglia, sbloccando <Bold>più di 100 ricompense</> (per un totale indicativo di 75-150 ore di gioco).\n • <ItemName>Sidewinder</> e <Bold>altri 4 costumi</>\n • <Bold>1.300 V-buck</>\n • 7 emote\n • 6 coperture\n • 2 piccoli amici\n • 5 strumenti raccolta\n • 4 deltaplani\n • 4 dorsi decorativi\n • 5 scie\n • 14 spray\n • 3 brani musicali\n • 1 giocattolo\n • 20 schermate di caricamento\n • E altro ancora!\nVuoi tutto e subito? Puoi acquistare livelli usando V-buck in qualsiasi momento!",
                            "fr": "Saison 8 : jusqu'au 8 mai\n\nRecevez immédiatement ces objets <Bold>d'une valeur supérieure à 3500 V-bucks</>.\n  • Tenue évolutive <ItemName>Cœur Noir</>\n  • Tenue évolutive <ItemName>Hybride</>\n  • Bonus d'EXP de saison de <Bold>50%</>\n  • Bonus d'EXP de saison de <Bold>10%</> pour des amis\n  • <Bold>Des défis hebdomadaires supplémentaires</>\n\n Jouez pour augmenter le niveau de votre Passe de combat et déverrouiller <Bold>plus de 100 récompenses</> (nécessitant de 75 à 150 heures de jeu).\n  • <ItemName>Vipère</> plus <Bold>4 autres tenues</>\n  • <Bold>1300 V-bucks</>\n  • 7 emotes\n  • 6 revêtements\n  • 2 compagnons\n  • 5 pioches\n  • 4 planeurs\n  • 4 accessoires de dos\n  • 5 traînées de condensation\n  • 14 aérosols\n  • 3 pistes musicales\n  • 1 jouet\n  • 20 écrans de chargement\n  • Et plus !\nEnvie d'aller plus vite ? Utilisez vos V-bucks pour acheter des niveaux à tout moment !",
                            "zh-cn": "第八赛季：现在起至5月8日\n\n立即获得这些<Bold>价值逾3500V币</>的物品。\n  • <ItemName>黑胡子</>可进化服装\n  • <ItemName>忍者龙</>可进化服装\n  • <Bold>50%额外</>赛季匹配经验\n  • <Bold>10%额外</>赛季好友匹配经验\n  • <Bold>额外每周挑战</>\n\n通过游玩提升英雄季卡战阶，解锁<Bold>百余奖励</>（通常需要75到150个小时的游玩时间）。\n  • <ItemName>响尾蛇</>和<Bold>4个额外服装</>\n  • <Bold>1300V币</>\n  • 7个姿势\n  • 6个皮肤\n  • 2个宠物\n  • 5个镐\n  • 4个滑翔伞\n  • 4个背部装饰\n  • 5个滑翔轨迹\n  • 14个涂鸦\n  • 3个音轨\n  • 1个玩具\n  • 20张载入界面\n  • 以及更多奖励！\n希望更快得到所有奖励吗？你可以随时使用V币购买战阶！",
                            "es": "Desde ahora hasta el 8 de mayo \n\nConsigue instantáneamente estos objetos<Bold> valorados en más de 3.500 paVos</>.\n  • Traje progresivo de <ItemName>Parchenegro</>\n  • Traje progresivo de<ItemName>Híbrido</>\n  • <Bold>Bonificación del 50 %</> de PE por partida de temporada\n  • <Bold>Bonificación del 10 %</> de PE de partida amistosa de temporada\n  • <Bold>Desafíos semanales adicionales</>\n\nJugad para subir de nivel el pase de batalla, que desbloquea más de <Bold>100 recompensas</> (suele dar para entre 75 y 150 horas de juego).\n  • <ItemName>Áspid</> y <Bold>4 trajes más</>\n  • <Bold>1300 paVos</>\n  • 7 gestos\n  • 6 envoltorios\n  • 2 mascotas\n  • 5 herramientas de recolección\n  • 4 alas delta\n  • 4 accesorios mochileros\n  • 5 estelas\n  • 14 grafitis\n  • 3 temas musicales\n  • 1 juguete\n  • 20 pantallas de carga\n  • ¡y mucho más!\n¿Lo queréis más rápido? ¡Puedes usar paVos para comprar niveles siempre que quieras!",
                            "ar": "Season 8 Now thru May 8 \n\nInstantly get these items <Bold>valued at over 3,500 V-Bucks</>.\n  • <ItemName>Blackheart</> Progressive Outfit\n  • <ItemName>Hybrid</> Progressive Outfit\n  • <Bold>50% Bonus</> Season Match XP\n  • <Bold>10% Bonus</> Season Friend Match XP\n  • <Bold>Extra Weekly Challenges</>\n\nPlay to level up your Battle Pass, unlocking <Bold>over 100 rewards</> (typically takes 75 to 150 hours of play).\n  • <ItemName>Sidewinder</> and <Bold>4 more Outfits</>\n  • <Bold>1,300 V-Bucks</>\n  • 7 Emotes\n  • 6 Wraps\n  • 2 Pets\n  • 5 Harvesting Tools\n  • 4 Gliders\n  • 4 Back Blings\n  • 5 Contrails\n  • 14 Sprays\n  • 3 Music Tracks\n  • 1 Toy\n  • 20 Loading Screens\n  • and so much more!\nWant it all faster? You can use V-Bucks to buy tiers any time!",
                            "ja": "シーズン8: 5月8日まで\n\n<Bold>3,500 V-Bucks以上の価値</>があるアイテムを今すぐ手に入れましょう。\n  • プログレッシブコスチューム<ItemName>「ブラックハート」</>\n  • プログレッシブコスチューム<ItemName>「ハイブリッド」</>\n  • シーズンマッチXPの<Bold>50%ボーナス</>\n  • シーズンフレンドマッチXPの<Bold>10%ボーナス</>\n  • <Bold>追加のウィークリーチャレンジ</>\n\nプレイしてバトルパスのレベルを上げると、<Bold>100以上の報酬</>をアンロックできます(通常、プレイにかかる時間は75～150時間程度)。\n  • <ItemName>「サイドワインダー」</>及びコスチューム<Bold>x4以上</>\n  • <Bold>1,300 V-Bucks</>\n  • エモートx7\n  • ラップx6\n  • ペットx2\n  • 収集ツールx5\n  • グライダーx4\n  • バックアクセサリーx4\n  • コントレイルx5\n  • スプレーx14\n  • ミュージックトラックx3\n  • おもちゃx1\n  • ロード画面x20\n • 他にも盛りだくさん！\nもっと早く報酬を全部集めたいという方は、V-Bucksでいつでもティアを購入できます！",
                            "pl": "Sezon 8: od teraz do 8 maja\n\nOtrzymasz od razu poniższe przedmioty <Bold>o wartości ponad 3500 V-dolców</>:\n  • Strój progresywny: <ItemName>Czarnosercy</>\n  • Strój progresywny: <ItemName>Hybryda</>\n  • Sezonowa <Bold>premia +50% PD za grę</>\n  • Sezonowa <Bold>premia +10% PD za grę ze znajomymi</>\n  • Dostęp do <Bold>dodatkowych wyzwań tygodnia</>\n\nGraj, aby awansować karnet bojowy i zdobyć <Bold>ponad 100 nagród</> (ich zebranie zajmuje zwykle od 75 do 150 godz. gry).\n  • <ItemName>Grzechotnica</> i <Bold>4 inne stroje</>\n  • <Bold>1300 V-dolców</>\n  • 7 emotek\n  • 6 malowań\n  • 2 pupile\n  • 5 zbieraków\n  • 4 lotnie\n  • 4 plecaki\n  • 5 smug\n  • 14 graffiti\n  • 3 tła muzyczne\n  • 1 zabawka\n  • I dużo więcej!\nChcesz rozwijać się szybciej? W każdej chwili możesz kupić stopnie za V-dolce!",
                            "es-419": "Temporada 8: ahora hasta el 8 de mayo\n\nObtén al instante estos objetos <Bold>que cuestan más de 3500 monedas V</>.\n  • Atuendo progresivo <ItemName>Parche Negro</>\n  • Atuendo progresivo <ItemName>Híbrido</>\n  • <Bold>50 % de bonificación</> de PE para partidas en la temporada\n  • <Bold>10 % de bonificación</> de PE para partidas con amigos en la temporada\n  • <Bold>Desafíos semanales adicionales</>\n\nJuega para subir de nivel el pase de batalla y desbloquear <Bold>más de 100 recompensas</> (esto lleva entre 75 y 150 horas de juego).\n  • <ItemName>Cascabel</> y <Bold>4 atuendos más</>\n  • <Bold>1300 monedas V</>\n  • 7 gestos\n  • 6 papeles\n  • 2 mascotas\n  • 5 herramientas de recolección\n  • 4 planeadores\n  • 4 mochilas retro\n  • 5 estelas\n  • 14 aerosoles\n  • 3 pistas de música\n  • 1 juguete\n  • 20 pantallas de carga\n  • ¡Y mucho más!\n¿Lo quieres todo más rápido? ¡Puedes usar las monedas V para comprar niveles cuando quieras!",
                            "tr": "8. Sezon: Şu andan 8 Mayıs’a kadar \n\n<Bold>3.500 V-Papel’in üzerinde değeri olan</> bu içerikleri hemen kap.\n  • İlerlemeli <ItemName>Karasakal</> Kıyafeti\n  • İlerlemeli <ItemName>Melez</> Kıyafeti\n  • <Bold>%50 Bonus</> Sezonluk Maç TP’si\n  • Arkadaşların için <Bold>%10 Bonus</> Sezonluk Maç TP’si\n  • <Bold>İlave Haftalık Görevler</>\n\nBattle Royale oynayarak Savaş Bileti’nin aşamasını yükselt ve <Bold>100’den fazla ödülü</> aç (genelde 75 ila 150 saat oynama gerektirir).\n  • <ItemName>Engerek</> ve <Bold>4 Kıyafet</> daha\n  • <Bold>1.300 V-Papel</>\n  • 7 İfade\n  • 6 Kaplama\n  • 2 Sadık Dost\n  • 5 Toplama Aleti\n  • 4 Planör\n  • 4 Sırt Süsü\n  • 5 Dalış İzi\n  • 14 Sprey\n  • 3 Müzik Parçası\n  • 1 Oyuncak\n  • 20 Yükleme Ekranı\n  • ve çok daha fazlası!\nHepsini daha hızlı mı almak istiyorsun? V-Papel karşılığında istediğin zaman aşama açabilirsin!"
                        },
                        "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_BR_Season8_BattlePass.DA_BR_Season8_BattlePass",
                        "itemGrants": []
                    }
                ]
            },
            {
                "name": "BRSeason9",
                "catalogEntries": [
                    {
                        "offerId": "C7190ACA4E5E228A94CA3CB9C3FC7AE9",
                        "devName": "BR.Season9.BattleBundle.01",
                        "offerType": "StaticPrice",
                        "prices": [
                            {
                                "currencyType": "MtxCurrency",
                                "currencySubType": "",
                                "regularPrice": 4700,
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
                            ""
                        ],
                        "requirements": [
                            {
                                "requirementType": "DenyOnFulfillment",
                                "requiredId": "73E6EE6F4526EF97450D1592C3DB0EF5",
                                "minQuantity": 1
                            }
                        ],
                        "metaInfo": [],
                        "catalogGroup": "",
                        "catalogGroupPriority": 0,
                        "sortPriority": 0,
                        "title": {
                            "de": "Battle Pass-Paket",
                            "ru": "Боевой комплект",
                            "ko": "배틀번들",
                            "zh-hant": "戰鬥套組",
                            "pt-br": "Pacotão de Batalha",
                            "en": "Battle Bundle",
                            "it": "Bundle battaglia",
                            "fr": "Pack de combat",
                            "zh-cn": "战斗套组",
                            "es": "Lote de batalla",
                            "ar": "Battle Bundle",
                            "ja": "バトルバンドル",
                            "pl": "Zestaw bojowy",
                            "es-419": "Paquete de batalla",
                            "tr": "Savaş Paketi"
                        },
                        "shortDescription": {
                            "de": "Battle Pass + 25 Stufen!",
                            "ru": "Боевой пропуск + 25 уровней!",
                            "ko": "배틀패스 + 25티어!",
                            "zh-hant": "英雄季卡增加25戰階！",
                            "pt-br": "Passe de Batalha + 25 categorias!",
                            "en": "Battle Pass + 25 tiers!",
                            "it": "Pass battaglia + 25 livelli!",
                            "fr": "Passe de combat + 25 paliers !",
                            "zh-cn": "英雄季卡增加25战阶！",
                            "es": "¡Pase de batalla y 25 niveles!",
                            "ar": "Battle Pass + 25 tiers!",
                            "ja": "バトルパス+25ティア！",
                            "pl": "Karnet bojowy + 25 stopni!",
                            "es-419": "¡Pase de batalla + 25 niveles!",
                            "tr": "Savaş Bileti + 25 aşama!"
                        },
                        "description": {
                            "de": "Saison 9 – Ab sofort bis einschließlich 1. August.\n\nErhalte sofort diese Gegenstände <Bold>im Wert von über 10.000 V-Bucks</>.\n  • <ItemName>Rox</> (aufrüstbares Outfit)\n  • <ItemName>Hüter</> (Outfit)\n  • <ItemName>Bunker-Jonesy</> (Outfit)\n  • <ItemName>Hüter</> (Lackierung)\n  • <ItemName>Reife Ripper</> (Erntewerkzeug)\n  • <ItemName>Turbodrall</> (Hängegleiter)\n  • <ItemName>Reifeprüfung</> (Lackierung)\n  • 300 V-Bucks\n  • 1 Musikstück\n  • <Bold>+70 %</> Saison-Match-EP\n  • <Bold>+20 %</> Saison-Match-EP für Freunde\n  • <Bold>zusätzliche wöchentliche Herausforderungen</>\n  • und noch mehr!\n\nSpiele weiter und stufe deinen Battle Pass auf, um <Bold>über 75 Belohnungen</> freizuschalten (im Normalfall werden dafür 75 bis 150 Spielstunden benötigt).\n  • <Bold>4 weitere Outfits</>\n  • <Bold>1.000 V-Bucks</>\n  • 6 Emotes\n  • 4 Lackierungen\n  • 2 Hängegleiter\n  • 6 Rücken-Accessoires\n  • 6 Erntewerkzeuge\n  • 4 Kondensstreifen\n  • 1 Gefährte\n  • 2 Musikstücke\n  • und noch eine ganze Menge mehr!\nDas dauert dir zu lange? Du kannst dir mit V-Bucks jederzeit Stufen kaufen!",
                            "ru": "Девятый сезон: до 1 августа\n\nСразу же получите предметы <Bold>стоимостью более 10 000 В-баксов!</>\n  • Улучшающаяся экипировка <ItemName>Рокси</>;\n  • экипировка <ItemName>Стража</>;\n  • экипировка <ItemName>Затворника Джоунси</>;\n  • обёртка <ItemName>«Страж»</>;\n  • кирка <ItemName>«Самодельный топорик»</>;\n  • дельтаплан <ItemName>«Футуризм»</>;\n  • обёртка <ItemName>«Банановая кожура»</>;\n  • 300 В-баксов;\n  • 1 музыкальная композиция;\n  • <Bold>+70% к опыту</> за матчи сезона;\n  • <Bold>+20% к опыту</> друзей за матчи сезона;\n  • <Bold>дополнительные еженедельные испытания</>\n и многое другое.\n\nИграйте, повышайте уровень боевого пропуска — и вас ждут <Bold>более 75 наград</>. Обычно, чтобы открыть все награды, требуется 75–150 часов игры.\n  • <Bold>ещё 4 костюма;</>\n  • <Bold>1000 В-баксов</>;\n  • 6 эмоций;\n  • 4 обёртки;\n  • 2 дельтаплана;\n  • 6 украшений на спину;\n  • 6 инструментов;\n  • 4 воздушных следа;\n  • 1 питомец;\n  • 2 музыкальные композиции\n    и это ещё не всё!\nНе хотите ждать? Уровни можно быстро получить за В-баксы!",
                            "ko": "시즌 9: 8월 1일 종료\n\n<Bold>10,000 V-Bucks 이상의 가치</>가 있는 여러 아이템을 즉시 받아가세요.\n  • <ItemName>록스</> 진화형 의상\n  • <ItemName>센티널</> 진화형 의상\n  • <ItemName>벙커 존시</> 의상\n  • <ItemName>센티널</> 외관\n  • <ItemName>바나나 껍질 도끼</> 수확 도구\n  • <ItemName>터보 스핀</> 글라이더\n  • <ItemName>바나나 껍질</> 외관\n  • 300 V-Bucks\n  • 음악 트랙 1개\n  • <Bold>70% 보너스</> 시즌 매치 XP\n  • <Bold>20% 보너스</> 시즌 친구 매치 XP\n  • <Bold>추가 주간 도전</>\n  • 그 외 더 많은 혜택!\n\n게임을 플레이하고 배틀패스 티어를 올려서 <Bold>75개 이상의 보상</>을 획득해보세요(보통 75-150시간 소요).\n  • <Bold>추가 의상 4개</>\n  • <Bold>1,000 V-Bucks</>\n  • 이모트 6개\n  • 외관 4개\n  • 글라이더 2개\n  • 등 장신구 6개\n  • 수확 도구 6개\n  • 트레일 4개\n  • 애완동물 1마리\n  • 음악 트랙 2개\n  • 그 외 많은 혜택!\n더 빨리 보상을 얻고 싶으신가요? V-Bucks를 사용해서 언제든지 티어를 구매할 수 있습니다!",
                            "zh-hant": "第九賽季：現在起至8月1日\n\n立即獲得這些<Bold>價值逾10000V幣</>的物品。\n  • <ItemName>草莓飛行員</>可進化服裝\n  • <ItemName>裝甲雄雞</>服裝\n  • <ItemName>地堡鐘斯</>服裝\n  • <ItemName>裝甲雄雞</>皮膚\n  • <ItemName>老練撕裂者</>採集工具\n  • <ItemName>加速旋轉</>滑翔傘\n  • <ItemName>老練</>皮膚\n  • 300V幣\n  • 1個音軌\n  • <Bold>70%額外</>賽季匹配經驗\n  • <Bold>20%額外</>賽季好友匹配經驗\n  • <Bold>額外每週挑戰</>\n  • 以及更多獎勵！\n\n通過遊玩提升英雄季卡戰階，解鎖<Bold>超過75個獎勵</>（通常需要75到150個小時的遊玩時間）。\n  • <Bold>4個額外服裝</>\n  • <Bold>1000V幣</>\n  • 6個姿勢\n  • 4個皮膚\n  • 2個滑翔傘\n  • 6個背部裝飾\n  • 6個採集工具\n  • 4個滑翔軌跡\n  • 1個寵物\n  • 12個塗鴉\n  • 2個音軌\n  • 以及更多獎勵！\n希望更快得到所有獎勵嗎？你可以隨時使用V幣購買戰階！",
                            "pt-br": "Temporada 9: de hoje até 1.º de agosto\n\nReceba instantaneamente estes itens <Bold>avaliados em mais de 10.000 V-Bucks</>.\n  • Traje Progressivo <ItemName>Rox</>\n  • Traje Progressivo <ItemName>Sentinela</>\n  • Traje <ItemName>Jonesy — Bunker</>\n  • Envelopamento <ItemName>Sentinela</>\n  • Ferramenta de Coleta <ItemName>Mutiladores Maduros</>\n  • Asa-delta <ItemName>Voadora Turbinada</>\n  • Envelopamento <ItemName>Maduro</>\n  • 300 V-Bucks\n  • 1 Faixa Musical\n  • <Bold>70% de Bônus</> de EXP da Temporada em Partidas\n  • <Bold>20% de Bônus</> de EXP da Temporada em Partidas com Amigos\n  • <Bold>Desafios Semanais Extras</>\n  • e mais!\n\nJogue para subir o nível do seu Passe de Batalha, desbloqueando <Bold>mais de 75 recompensas</> (leva em média de 75 a 150 horas de jogo).\n  • <Bold>Mais 4 Trajes</>\n  • <Bold>1.000 V-Bucks</>\n  • 6 Gestos\n  • 4 Envelopamentos\n  • 2 Asas-deltas\n  • 6 Acessórios para as Costas\n  • 6 Ferramentas de Coleta\n  • 4 Rastros de Fumaça\n  • 1 Mascote\n  • 2 Faixas Musicais\n  • e muito mais!\nQuer obter tudo mais rápido? Você pode comprar categorias com V-Bucks a qualquer hora!",
                            "en": "Season 9 Now through August 1.\n\nInstantly get these items <Bold>valued at over 10,000 V-Bucks</>.\n  • <ItemName>Rox</> Progressive Outfit\n  • <ItemName>Sentinel</> Outfit\n  • <ItemName>Bunker Jonesy</> Outfit\n  • <ItemName>Sentinel</> Wrap\n  • <ItemName>Ripe Rippers</> Harvesting Tool\n  • <ItemName>Turbo Spin</> Glider\n  • <ItemName>Ripe</> Wrap\n  • 300 V-Bucks\n  • 1 Music Track\n  • <Bold>70% Bonus</> Season Match XP\n  • <Bold>20% Bonus</> Season Friend Match XP\n  • <Bold>Extra Weekly Challenges</>\n  • and more!\n\nPlay to level up your Battle Pass, unlocking <Bold>over 75 rewards</> (typically takes 75 to 150 hours of play).\n  • <Bold>4 more Outfits</>\n  • <Bold>1,000 V-Bucks</>\n  • 6 Emotes\n  • 4 Wraps\n  • 2 Gliders\n  • 6 Back Blings\n  • 6 Harvesting Tools\n  • 4 Contrails\n  • 1 Pet\n  • 2 Music Tracks\n  • and so much more!\nWant it all faster? You can use V-Bucks to buy tiers any time!",
                            "it": "Stagione 9, da ora fino al 1° agosto\n\nOttieni subito questi oggetti <Bold>dal valore di oltre 10.000 V-buck</>!\n • Costume progressivo <ItemName>Rox</>\n • Costume progressivo <ItemName>Sentinella</>\n • Costume <ItemName>Jonesy Bunker</>\n • Copertura <ItemName>Sentinella</>\n  • Strumento raccolta <ItemName>Fauci feroci</>\n • Deltaplano <ItemName>Rotazione turbo</>\n  • Copertura <ItemName>Maturo</>\n  • 300 V-buck\n  • 1 brano musicale\n • <Bold>Bonus 70%</> PE partite stagionali\n • <Bold>Bonus 20%</> PE amici partite stagionali\n • <Bold>Sfide settimanali extra</>\n • e altro ancora!\n\nGioca per aumentare il livello del tuo Pass battaglia, sbloccando <Bold>più di 75 ricompense</> (per un totale indicativo di 75-150 ore di gioco).\n • <Bold>4 costumi in più</>\n • <Bold>1000 V-Buck</>\n • 6 emote\n • 4 coperture\n • 2 deltaplani\n • 6 dorsi decorativi\n • 6 strumenti raccolta\n • 4 scie\n • 1 piccolo amico\n • 2 brani musicali\n • E altro ancora!\nVuoi tutto e subito? Puoi acquistare livelli usando V-buck in qualsiasi momento!",
                            "fr": "Saison 9 : jusqu'au 1er août\n\nRecevez immédiatement ces objets <Bold>d'une valeur supérieure à 10 000 V-bucks</>.\n  • Tenue évolutive <ItemName>Rox</>\n  • Tenue <ItemName>Sentinelle</>\n  • Tenue <ItemName>Jonesy du bunker</>\n  • Revêtement <ItemName>Sentinelle</>\n  • Outil de collecte <ItemName>Haches mûres</>\n  • Planeur <ItemName>Aile turbo</>\n  • Revêtement <ItemName>Mûr</>\n  • 300 V-bucks\n  • 1 piste musicale\n  • Bonus d'EXP de saison de 70%\n  • Bonus d'EXP de saison de 20% pour des amis\n  • <Bold>Des défis hebdomadaires supplémentaires</>\n  • Et plus !\n\nJouez pour augmenter le niveau de votre Passe de combat et déverrouiller <Bold>plus de 75 récompenses</> (nécessitant de 75 à 150 heures de jeu).\n  • <Bold>4 autres tenues</>\n  • <Bold>1000 V-bucks</>\n  • 6 emotes\n  • 4 revêtements\n  • 2 planeurs\n  • 6 accessoires de dos\n  • 6 outils de collecte\n  • 4 traînées de condensation\n  • 1 compagnon\n  • 2 pistes musicales\n  • Et plus !\nEnvie d'aller plus vite ? Utilisez vos V-bucks pour acheter des niveaux à tout moment !",
                            "zh-cn": "第九赛季：现在起至8月1日\n\n立即获得这些<Bold>价值逾10000V币</>的物品。\n  • <ItemName>草莓飞行员</>可进化服装\n  • <ItemName>装甲雄鸡</>服装\n  • <ItemName>地堡琼斯</>服装\n  • <ItemName>装甲雄鸡</>皮肤\n  • <ItemName>蕉战斧</>采集工具\n  • <ItemName>动力尾旋</>滑翔伞\n  • <ItemName>香蕉皮</>皮肤\n  • 300V币\n  • 1个音轨\n  • <Bold>70%额外</>赛季匹配经验\n  • <Bold>20%额外</>赛季好友匹配经验\n  • <Bold>额外每周挑战</>\n  • 以及更多奖励！\n\n通过游玩提升英雄季卡战阶，解锁<Bold>超过75个奖励</>（通常需要75到150个小时的游玩时间）。\n  • <Bold>4个额外服装</>\n  • <Bold>1000V币</>\n  • 6个姿势\n  • 4个皮肤\n  • 2个滑翔伞\n  • 6个背部装饰\n  • 6个采集工具\n  • 4个滑翔轨迹\n  • 1个宠物\n  • 12个涂鸦\n  • 2个音轨\n  • 以及更多奖励！\n希望更快得到所有奖励吗？你可以随时使用V币购买战阶！",
                            "es": "Temporada 9: desde ahora hasta el 1 de agosto.\n\nConsigue instantáneamente estos objetos <Bold>valorados en más de 10 000 paVos</>.\n  • Traje progresivo de <ItemName>Rox</>\n  • Traje de <ItemName>Centinela</>\n  • Traje de <ItemName>Jonesy del búnker</>\n  • Envoltorio <ItemName>Centinela</>\n  • Herramienta de recolección <ItemName>Machete maduro</>\n  • Ala delta <ItemName>Turbogiro</>\n  • Envoltorio <ItemName>Maduro</>\n  • 300 paVos\n  • 1 tema musical\n  • <Bold>Bonificación del 70 %</> de PE por partida de temporada\n  • <Bold>Bonificación del 20 %</> de PE de partida amistosa de temporada\n  • <Bold>Desafíos semanales adicionales</>\n  • ¡Y mucho más!\n\nJuega para subir de nivel tu pase de batalla y desbloquea <Bold>más de 75 recompensas</> (suele llevar entre 75 y 150 horas de juego).\n  • <Bold>4 trajes más</>\n  • <Bold>1000 paVos</>\n  • 6 gestos\n  • 4 envoltorios\n  • 2 alas delta\n  • 6 accesorios mochileros\n  • 6 herramientas de recolección\n  • 4 estelas\n  • 1 mascota\n  • 2 temas musicales\n  • ¡Y muchísimo más!\n¿Lo quieres más rápido? ¡Puedes usar paVos para comprar niveles siempre que quieras!",
                            "ar": "Season 9 Now through August 1.\n\nInstantly get these items <Bold>valued at over 10,000 V-Bucks</>.\n  • <ItemName>Rox</> Progressive Outfit\n  • <ItemName>Sentinel</> Outfit\n  • <ItemName>Bunker Jonesy</> Outfit\n  • <ItemName>Sentinel</> Wrap\n  • <ItemName>Ripe Rippers</> Harvesting Tool\n  • <ItemName>Turbo Spin</> Glider\n  • <ItemName>Ripe</> Wrap\n  • 300 V-Bucks\n  • 1 Music Track\n  • <Bold>70% Bonus</> Season Match XP\n  • <Bold>20% Bonus</> Season Friend Match XP\n  • <Bold>Extra Weekly Challenges</>\n  • and more!\n\nPlay to level up your Battle Pass, unlocking <Bold>over 75 rewards</> (typically takes 75 to 150 hours of play).\n  • <Bold>4 more Outfits</>\n  • <Bold>1,000 V-Bucks</>\n  • 6 Emotes\n  • 4 Wraps\n  • 2 Gliders\n  • 6 Back Blings\n  • 6 Harvesting Tools\n  • 4 Contrails\n  • 1 Pet\n  • 2 Music Tracks\n  • and so much more!\nWant it all faster? You can use V-Bucks to buy tiers any time!",
                            "ja": "シーズン9: 8月1日まで\n\n<Bold>10,000 V-Bucks以上の価値がある</>アイテムを今すぐ手に入れましょう。\n• <ItemName>ロックス</>プログレッシブコスチューム\n  • <ItemName>センチネル</>コスチューム\n  • <ItemName>バンカージョンジー</>コスチューム\n  • <ItemName>センチネル</>ラップ\n  • 「<ItemName>ライプリッパーズ</>」収集ツール\n  • 「<ItemName>ターボスピン</>」グライダー\n  • 「<ItemName>バナナ</>」 ラップ\n  • 300 V-Bucks\n  • ミュージックトラックx1\n  • シーズンマッチXPの<Bold>70%ボーナス</>\n  • シーズンフレンドマッチXPの<Bold>20%ボーナス</>\n  • <Bold>追加のウィークリーチャレンジ</>\n  • 他にも色々！\n\nプレイしてバトルパスのレベルを上げると、<Bold>75以上の報酬</>をアンロックできます（通常、プレイにかかる時間は75～150時間程度)。\n  • <Bold>追加のコスチュームx4</>\n  • <Bold>1,000 V-Bucks</>\n  • エモートx6\n  • ラップx4\n  •  グライダーx2\n  • バックアクセサリーx6\n  • 収集ツールx6\n  • コントレイルx4\n  • ペットx1\n  • ミュージックトラックx2\n  • 他にも色々！\nもっと早く報酬を全部集めたい？ V-Bucksでいつでもティアを購入できます！",
                            "pl": "Sezon 9: od teraz do 1 sierpnia.\n\nZgarnij od razu poniższe przedmioty <Bold>o wartości ponad 10 000 V-dolców</>:\n  • Strój progresywny: <ItemName>Roxi</>\n  • Strój progresywny: <ItemName>K0gut</>\n  • Strój: <ItemName>Jonesy z Bunkra</>\n  • Strój: <ItemName>K0gut</>\n • Malowanie: <ItemName>K0gut</>\n  • Zbierak: <ItemName>Dojrzały Rozpruwacz</>\n  • Lotnia: <ItemName>Turboskrętka</>\n  • Malowanie: <ItemName>Dojrzałe</>\n  • 300 V-dolców  • 1 tło muzyczne\n  • Sezonowa <Bold>premia +70% PD za grę</>\n  • Sezonowa <Bold>premia +20% PD za grę ze znajomymi</>\n  • Dostęp do <Bold>dodatkowych wyzwań tygodnia</>\n  • I nie tylko!\n\nGraj, aby awansować karnet bojowy i zdobyć <Bold>ponad 75 nagród</> (ich zebranie zajmuje zwykle od 75 do 150 godz. gry).\n  • <Bold>4 kolejne stroje</>\n  • <Bold>1000 V-dolców</>\n  • 6 emotek\n  • 4 malowania\n  • 2 lotnie\n  • 6 plecaków\n  • 6 zbieraków\n  • 4 smugi\n  • 1 pupil\n • 2 tła muzyczne\n  • I dużo więcej!\nChcesz rozwijać się szybciej? W każdej chwili możesz kupić stopnie za V-dolce!",
                            "es-419": "Temporada 9: ahora y hasta el 1 de agosto.\n\nObtén al instante estos objetos que <Bold>cuestan más de 10 000 monedas V.</>.\n  • Atuendo progresivo <ItemName>Rox</>\n  • Atuendo Centinela</>\n  • Atuendo <ItemName>Jonesy del búnker</>\n  • Papel <ItemName>Centinela</>\n  • Herramienta de recolección <ItemName>Destripamaduros</>\n  • Planeador<ItemName>Vuelta turbo</>\n  • Papel <ItemName>Maduro</>\n  • 300 monedas V\n  • 1 pista de música\n  • <Bold>70 % de bonificación</> de PE para partidas de la temporada\n  • <Bold>20 % de bonificación</> de PE para partidas con amigos en la temporada\n  • <Bold>Desafíos semanales adicionales</>\n  • ¡Y mucho más!\n\nJuega para subir de nivel el pase de batalla y desbloquear <Bold>más de 75 recompensas</> (esto lleva entre 75 y 100 horas de juego).\n  • <Bold>4 atuendos más</>\n  • <Bold>1000 monedas V</>\n  • 6 gestos\n  • 4 papeles\n  • 2 planeadores\n  • 6 mochilas retro\n  • 6 herramientas de recolección\n  • 4 estelas\n  • 1 mascota\n  • 2 pistas de música\n  • ¡Y muchísimo más!\n¿Quieres todo más rápido? ¡Usa las monedas V para comprar niveles cuando quieras!",
                            "tr": "9. Sezon: Şu andan 1 Ağustos’a kadar\n\n<Bold>10.000 V-Papel’in üzerinde değeri olan</> bu içerikleri hemen kap.\n  • İlerlemeli <ItemName>Pembeli Savaşçı</> Kıyafeti\n  • <ItemName>Savaş Kuşu</> Kıyafeti\n  • <ItemName>Sığınak Kaçkını Jonesy</> Kıyafeti\n  • <ItemName>Savaş Kuşu</> Kaplaması\n  • <ItemName>Kabuktan Kazma</> Toplama Aleti\n  • <ItemName>Pembe Kanat</> Planörü\n  • <ItemName>Olgunlaşmış</> Kaplaması\n  • 300 V-Papel\n  • 1 Müzik Parçası\n  • <Bold>%70 Bonus</> Sezonluk Maç TP’si\n  • Arkadaşların için <Bold>%20 Bonus</> Sezonluk Maç TP’si\n  • <Bold>İlave Haftalık Görevler</>\n  • ve çok daha fazlası!\n\nBattle Royale oynayarak Savaş Bileti’nin aşamasını yükselt ve <Bold>75’ten fazla ödülü</> aç (genelde 75 ila 150 saat oynama gerektirir).\n  • <Bold>4 Kıyafet daha</>\n  • <Bold>1.000 V-Papel</>\n  • 6 İfade\n  • 4 Kaplama\n  • 2 Planör\n  • 6 Sırt Süsü\n  •  6 Toplama Aleti\n  • 4 Dalış İzi\n  • 1 Sadık Dost\n  • 2 Müzik Parçası\n  • ve çok daha fazlası!\nHepsini daha hızlı almak mı istiyorsun? V-Papel karşılığında istediğin zaman aşama açabilirsin!"
                        },
                        "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_BR_Season9_BattlePassWithLevels.DA_BR_Season9_BattlePassWithLevels",
                        "itemGrants": []
                    },
                    {
                        "offerId": "73E6EE6F4526EF97450D1592C3DB0EF5",
                        "devName": "BR.Season9.BattlePass.01",
                        "offerType": "StaticPrice",
                        "prices": [
                            {
                                "currencyType": "MtxCurrency",
                                "currencySubType": "",
                                "regularPrice": 950,
                                "finalPrice": 950,
                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                "basePrice": 950
                            }
                        ],
                        "categories": [],
                        "dailyLimit": -1,
                        "weeklyLimit": -1,
                        "monthlyLimit": -1,
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
                            ""
                        ],
                        "requirements": [
                            {
                                "requirementType": "DenyOnFulfillment",
                                "requiredId": "73E6EE6F4526EF97450D1592C3DB0EF5",
                                "minQuantity": 1
                            }
                        ],
                        "metaInfo": [],
                        "catalogGroup": "",
                        "catalogGroupPriority": 0,
                        "sortPriority": 1,
                        "title": {
                            "de": "Battle Pass",
                            "ru": "Боевой пропуск",
                            "ko": "배틀패스",
                            "zh-hant": "英雄季卡",
                            "pt-br": "Passe de Batalha",
                            "en": "Battle Pass",
                            "it": "Pass battaglia",
                            "fr": "Passe de combat",
                            "zh-cn": "英雄季卡",
                            "es": "Pase de batalla",
                            "ar": "Battle Pass",
                            "ja": "バトルパス",
                            "pl": "Karnet bojowy",
                            "es-419": "Pase de batalla",
                            "tr": "Savaş Bileti"
                        },
                        "shortDescription": {
                            "de": "Saison 9",
                            "ru": "Девятый сезон",
                            "ko": "시즌 9",
                            "zh-hant": "第九賽季",
                            "pt-br": "Temporada 9",
                            "en": "Season 9",
                            "it": "Stagione 9",
                            "fr": "Saison 9",
                            "zh-cn": "第九赛季",
                            "es": "Temporada 9",
                            "ar": "Season 9",
                            "ja": "シーズン9",
                            "pl": "Sezon 9",
                            "es-419": "Temporada 9",
                            "tr": "9. Sezon"
                        },
                        "description": {
                            "de": "Saison 9 – Ab sofort bis einschließlich 1. August.\n\nErhalte sofort diese Gegenstände <Bold>im Wert von über 3.500 V-Bucks</>.\n  • <ItemName>Rox</> (aufrüstbares Outfit)\n  • <ItemName>Hüter</> (Outfit)\n  • <Bold>+50 %</> Saison-Match-EP\n  • <Bold>+60 %</> Saison-Match-EP für Freunde\n  • <Bold>zusätzliche wöchentliche Herausforderungen</>\n\nSpiele weiter und stufe deinen Battle Pass auf, um <Bold>über 100 Belohnungen</> freizuschalten (im Normalfall werden dafür 75 bis 150 Spielstunden benötigt).\n  • <ItemName>Bunker-Jonesy</> und <Bold>4 weitere Outfits</>\n  • <Bold>1.300 V-Bucks</>\n  • 7 Emotes\n  • 6 Lackierungen\n  • 7 Erntewerkzeuge\n  • 1 Gefährte\n  • 4 Hängegleiter\n  • 6 Rücken-Accessoires\n  • 5 Kondensstreifen\n  • 13 Spraymotive\n  • 3 Musikstücke\n  • 1 Spielzeug\n  • 20 Ladebildschirme\n  • und noch eine ganze Menge mehr!\nDas dauert dir zu lange? Du kannst dir mit V-Bucks jederzeit Stufen kaufen!",
                            "ru": "Девятый сезон: до 1 августа\n\nСразу же получите предметы <Bold>стоимостью более 3500 В-баксов!</>\n  • Улучшающаяся экипировка <ItemName>Рокси</>;\n  • экипировка <ItemName>Стража</>;\n  • <Bold>+50% к опыту</> за матчи сезона;\n  • <Bold>+60% к опыту</> друзей за матчи сезона;\n  • <Bold>дополнительные еженедельные испытания</>.\n\nИграйте, повышайте уровень боевого пропуска — и вас ждут <Bold>более 100 наград</>. Обычно, чтобы открыть все награды, требуется 75–150 часов игры.\n  • экипировка <ItemName>Затворника Джоунси</> и <Bold>ещё 4 костюма;</>\n  • <Bold>1300 В-баксов;</>\n  • 7 эмоций;\n  • 6 обёрток;\n  • 7 инструментов;\n  • 1 питомец;\n  • 4 дельтаплана;\n  • 6 украшений на спину;\n  • 5 воздушных следов;\n  • 13 граффити;\n  • 3 музыкальные композиции;\n  • 1 игрушка;\n  • 20 экранов загрузки\n    и это ещё не всё!\nНе хотите ждать? Уровни можно быстро получить за В-баксы!",
                            "ko": "시즌 9: 8월 1일 종료\n\n<Bold>3,500 V-Bucks 이상의 가치</>가 있는 여러 아이템을 즉시 받아가세요.\n  • <ItemName>록스</> 진화형 의상\n  • <ItemName>센티널</> 진화형 의상\n  • <Bold>50% 보너스</> 시즌 매치 XP\n  • <Bold>60% 보너스</> 시즌 친구 매치 XP\n  • <Bold>추가 주간 도전</>\n\n게임을 플레이하고 배틀패스 티어를 올려서 <Bold>100개 이상의 보상</>을 획득해보세요(보통 75-150시간 소요).\n  • <ItemName>벙커 존시</> 외 <Bold>의상 4개</>\n  • <Bold>1,300 V-Bucks</>\n  • 이모트 7개\n  • 외관 6개\n  • 수확 도구 7개\n  • 애완동물 1마리\n  • 글라이더 4개\n  • 등 장신구 6개\n  • 트레일 5개\n  • 스프레이 13개\n  • 음악 트랙 3개\n  • 장난감 1개\n  • 로딩 화면 20개\n  • 그 외 많은 혜택!\n더 빨리 보상을 얻고 싶으신가요? V-Bucks를 사용해서 언제든지 티어를 구매할 수 있습니다!",
                            "zh-hant": "第九賽季：現在起至8月1日\n\n立即獲得這些<Bold>價值逾3500V幣</>的物品。\n  • <ItemName>草莓飛行員</>可進化服裝\n  • <ItemName>裝甲雄雞</>服裝\n  • <Bold>50%額外</>賽季匹配經驗\n  • <Bold>60%額外</>賽季好友匹配經驗\n  • <Bold>額外每週挑戰</>\n\n通過遊玩提升英雄季卡戰階，解鎖<Bold>百餘獎勵</>（通常需要75到150個小時的遊玩時間）。\n  • <ItemName>地堡鐘斯</>和<Bold>4個額外服裝</>\n  • <Bold>1300V幣</>\n  • 7個姿勢\n  • 6個皮膚\n  • 7個採集工具\n  • 1個寵物\n  • 4個滑翔傘\n  • 6個背部裝飾\n  • 5個滑翔軌跡\n  • 13個塗鴉\n  • 3個音軌\n  • 1個玩具\n  • 20張載入介面\n  • 以及更多獎勵！\n希望更快得到所有獎勵嗎？你可以隨時使用V幣購買戰階！",
                            "pt-br": "Temporada 9: de hoje até 1.º de agosto\n\nReceba instantaneamente estes itens <Bold>avaliados em mais de 3.500 V-Bucks</>.\n  • Traje Progressivo <ItemName>Rox</>\n  • Traje Progressivo <ItemName>Sentinela</>\n  • <Bold>50% de Bônus</> de EXP da Temporada em Partidas\n  • <Bold>60% de Bônus</> de EXP da Temporada em Partidas com Amigos\n  • <Bold>Desafios Semanais Extras</>\n\nJogue para subir o nível do seu Passe de Batalha, desbloqueando <Bold>mais de 100 recompensas</> (leva em média de 75 a 150 horas de jogo).\n  • <ItemName>Jonesy — Bunker</> e <Bold>mais 4 Trajes</>\n  • <Bold>1.300 V-Bucks</>\n  • 7 Gestos\n  • 6 Envelopamentos\n  • 7 Ferramentas de Coleta\n  • 1 Mascote\n  • 4 Asas-deltas\n  • 6 Acessórios para as Costas\n  • 5 Rastros de Fumaça\n  • 13 Sprays\n  • 3 Faixas Musicais\n  • 1 Brinquedo\n  • 20 Telas de Carregamento\n  • e muito mais!\nQuer obter tudo mais rápido? Você pode comprar categorias com V-Bucks a qualquer hora!",
                            "en": "Season 9 Now through August 1.\n\nInstantly get these items <Bold>valued at over 3,500 V-Bucks</>.\n  • <ItemName>Rox</> Progressive Outfit\n  • <ItemName>Sentinel</> Outfit\n  • <Bold>50% Bonus</> Season Match XP\n  • <Bold>60% Bonus</> Season Friend Match XP\n  • <Bold>Extra Weekly Challenges</>\n\nPlay to level up your Battle Pass, unlocking <Bold>over 100 rewards</> (typically takes 75 to 150 hours of play).\n  • <ItemName>Bunker Jonesy</> and <Bold>4 more Outfits</>\n  • <Bold>1,300 V-Bucks</>\n  • 7 Emotes\n  • 6 Wraps\n  • 7 Harvesting Tools\n  • 1 Pet\n  • 4 Gliders\n  • 6 Back Blings\n  • 5 Contrails\n  • 13 Sprays\n  • 3 Music Tracks\n  • 1 Toy\n  • 20 Loading Screens\n  • and so much more!\nWant it all faster? You can use V-Bucks to buy tiers any time!",
                            "it": "Stagione 9, da ora fino a 1° agosto\n\nOttieni subito questi oggetti <Bold>dal valore di oltre 3500 V-buck</>!\n • Costume progressivo <ItemName>Rox</>\n • Costume progressivo <ItemName>Sentinella</>\n • <Bold>Bonus del 50%</> dei PE partite stagionali\n • <Bold>Bonus del 60%</> dei PE partite amico stagionali\n • <Bold>Sfide settimanali extra</>\n\nGioca per aumentare il livello del tuo Pass battaglia, sbloccando <Bold>più di 100 ricompense</> (per un totale indicativo di 75-150 ore di gioco).\n • <ItemName>Jonesy Bunker</> e <Bold>altri 4 costumi</>\n • <Bold>1300 V-buck</>\n • 7 emote\n • 6 coperture\n • 7 strumenti raccolta\n • 1 piccolo amico\n • 4 deltaplani\n • 6 dorsi decorativi\n • 5 scie\n • 13 spray\n • 3 brani musicali\n • 1 giocattolo\n • 20 schermate di caricamento\n • E altro ancora!\nVuoi tutto e subito? Puoi acquistare livelli usando V-buck in qualsiasi momento!",
                            "fr": "Saison 9 : jusqu'au 1er août\n\nRecevez immédiatement ces objets <Bold>d'une valeur supérieure à 3500 V-bucks</>.\n  • Tenue évolutive <ItemName>Rox</>\n  • Tenue <ItemName>Sentinelle</>\n  • Bonus d'EXP de saison de 50%\n  • Bonus d'EXP de saison de 10% pour des amis\n  • <Bold>Des défis hebdomadaires supplémentaires</>\n\nJouez pour augmenter le niveau de votre Passe de combat et déverrouiller <Bold>plus de 100 récompenses</> (nécessitant de 75 à 150 heures de jeu).\n  • <ItemName>Jonesy du bunker</> plus <Bold>4 autres tenues</>\n  • <Bold>1300 V-bucks</>\n  • 7 emotes\n  • 6 revêtements\n  • 7 outils de collecte\n  • 1 compagnon\n  • 4 planeurs\n  • 6 accessoires de dos\n  • 5 traînées de condensation\n  • 13 aérosols\n  • 3 pistes musicales\n  • 1 jouet\n  • 20 écrans de chargement\n  • Et plus !\nEnvie d'aller plus vite ? Utilisez vos V-bucks pour acheter des niveaux à tout moment !",
                            "zh-cn": "第九赛季：现在起至8月1日\n\n立即获得这些<Bold>价值逾3500V币</>的物品。\n  • <ItemName>草莓飞行员</>可进化服装\n  • <ItemName>装甲雄鸡</>服装\n  • <Bold>50%额外</>赛季匹配经验\n  • <Bold>60%额外</>赛季好友匹配经验\n  • <Bold>额外每周挑战</>\n\n通过游玩提升英雄季卡战阶，解锁<Bold>百余奖励</>（通常需要75到150个小时的游玩时间）。\n  • <ItemName>地堡琼斯</>和<Bold>4个额外服装</>\n  • <Bold>1300V币</>\n  • 7个姿势\n  • 6个皮肤\n  • 7个采集工具\n  • 1个宠物\n  • 4个滑翔伞\n  • 6个背部装饰\n  • 5个滑翔轨迹\n  • 13个涂鸦\n  • 3个音轨\n  • 1个玩具\n  • 20张载入界面\n  • 以及更多奖励！\n希望更快得到所有奖励吗？你可以随时使用V币购买战阶！",
                            "es": "Temporada 9: desde ahora hasta el 1 de agosto.\n\nConsigue instantáneamente estos objetos <Bold>valorados en más de 3500 paVos</>.\n  • Traje progresivo de <ItemName>Rox</>\n  • Traje de <ItemName>Centinela</>\n  • <Bold>Bonificación del 50 %</> de PE por partida de temporada\n  • <Bold>Bonificación del 60 %</> de PE de partida amistosa de temporada\n  • <Bold>Desafíos semanales adicionales</>\n\nJuega para subir de nivel tu pase de batalla y desbloquea <Bold>más de 100 recompensas</> (suele llevar entre 75 y 150 horas de juego).\n  • <ItemName>Jonesy del búnker</> y <Bold>4 trajes más</>\n  • <Bold>1300 paVos</>\n  • 7 gestos\n  • 6 envoltorios\n  • 7 herramientas de recolección\n  • 1 mascota\n  • 4 alas delta\n  • 6 accesorios mochileros\n  • 5 estelas\n  • 13 grafitis\n  • 3 temas musicales\n  • 1 juguete\n  • 20 pantallas de carga\n  • ¡Y muchísimo más!\n¿Lo quieres más rápido? ¡Puedes usar paVos para comprar niveles siempre que quieras!",
                            "ar": "Season 9 Now through August 1.\n\nInstantly get these items <Bold>valued at over 3,500 V-Bucks</>.\n  • <ItemName>Rox</> Progressive Outfit\n  • <ItemName>Sentinel</> Outfit\n  • <Bold>50% Bonus</> Season Match XP\n  • <Bold>60% Bonus</> Season Friend Match XP\n  • <Bold>Extra Weekly Challenges</>\n\nPlay to level up your Battle Pass, unlocking <Bold>over 100 rewards</> (typically takes 75 to 150 hours of play).\n  • <ItemName>Bunker Jonesy</> and <Bold>4 more Outfits</>\n  • <Bold>1,300 V-Bucks</>\n  • 7 Emotes\n  • 6 Wraps\n  • 7 Harvesting Tools\n  • 1 Pet\n  • 4 Gliders\n  • 6 Back Blings\n  • 5 Contrails\n  • 13 Sprays\n  • 3 Music Tracks\n  • 1 Toy\n  • 20 Loading Screens\n  • and so much more!\nWant it all faster? You can use V-Bucks to buy tiers any time!",
                            "ja": "シーズン9: 8月1日まで\n\n<Bold>3,500 V-Bucks以上の価値がある</>アイテムを今すぐ手に入れましょう。\n• <ItemName>ロックス</>プログレッシブコスチューム\n  • <ItemName>センチネル</>コスチューム\n  • シーズンマッチXPの<Bold>50%ボーナス</>\n  • シーズンフレンドマッチXPの<Bold>60%ボーナス</>\n  • <Bold>追加のウィークリーチャレンジ</>\n\nプレイしてバトルパスのレベルを上げると、<Bold>100以上の報酬</>をアンロックできます（通常、プレイにかかる時間は75～150時間程度)。\n  • <ItemName>バンカージョンジー</>および<Bold>その他コスチュームx4</>\n  • <Bold>1,300 V-Bucks</>\n  • エモートx7\n  • ラップx6\n  • 収集ツールx7\n  • ペットx1\n  • グライダーx4\n  • バックアクセサリーx6\n  • コントレイルx5\n  • スプレーx13\n  • ミュージックトラックx3\n  • おもちゃx1\n  • ロード画面x20\n  •他にも色々！\nもっと早く報酬を全部集めたい？ V-Bucksでいつでもティアを購入できます！",
                            "pl": "Sezon 9: od teraz do 1 sierpnia.\n\nZgarnij od razu poniższe przedmioty <Bold>o wartości ponad 3500 V-dolców</>:\n  • Strój progresywny: <ItemName>Roxi</>\n  • Strój progresywny: <ItemName>K0gut</>\n  • Sezonowa <Bold>premia +50% PD za grę</>\n  • Sezonowa <Bold>premia +60% PD za grę ze znajomymi</>\n  • Dostęp do <Bold>dodatkowych wyzwań tygodnia</>\n\nGraj, aby awansować karnet bojowy i zdobyć <Bold>ponad 100 nagród</> (ich zebranie zajmuje zwykle od 75 do 150 godz. gry).\n  • <ItemName>Jonesy z Bunkra</> i <Bold>4 inne stroje</>\n  • <Bold>1300 V-dolców</>\n  • 7 emotek\n  • 6 malowań\n  • 1 pupil\n  • 7 zbieraków\n  • 4 lotnie\n  • 6 plecaków\n  • 5 smug\n  • 13 graffiti\n  • 3 tła muzyczne\n  • 1 zabawka\n • 20 ekranów ładowania\n  • I dużo więcej!\nChcesz rozwijać się szybciej? W każdej chwili możesz kupić stopnie za V-dolce!",
                            "es-419": "Temporada 9: ahora y hasta el 1 de agosto.\n\nObtén al instante estos objetos que <Bold>cuestan más de 3500 monedas V</>.\n  • Atuendo progresivo <ItemName>Rox</>\n  • Atuendo <ItemName>Centinela</>\n  • <Bold>50 % de bonificación</> de PE para partidas de la temporada\n  • <Bold>60 % de bonificación</> de PE para partidas con amigos en la temporada\n  • <Bold>Desafíos semanales adicionales</>\n\nJuega para subir de nivel el pase de batalla y desbloquear <Bold>más de 100 recompensas</> (esto lleva entre 75 y 100 horas de juego).\n  • Atuendo <ItemName>Jonesy del búnker</> y <Bold>4 atuendos más</>\n  • <Bold>1300 monedas V</>\n  • 7 gestos\n  • 6 papeles\n  • 7 herramientas de recolección\n  • 1 mascota\n  • 4 planeadores\n  • 6 mochilas retro\n  • 5 estelas\n  • 13 aerosoles\n  • 3 pistas de música\n  • 1 juguete\n  • 20 pantallas de carga\n  • ¡Y muchísimo más!\n¿Quieres todo más rápido? ¡Usa las monedas V para comprar niveles cuando quieras!",
                            "tr": "9. Sezon: Şu andan 1 Ağustos’a kadar \n\n<Bold>3.500 V-Papel’in üzerinde değeri olan</> bu içerikleri hemen kap.\n  • İlerlemeli <ItemName>Pembeli Savaşçı</> Kıyafeti\n  • <ItemName>Savaş Kuşu</> Kıyafeti\n  • <Bold>%50 Bonus</> Sezonluk Maç TP’si\n  • Arkadaşların için <Bold>%60 Bonus</> Sezonluk Maç TP’si\n  • <Bold>İlave Haftalık Görevler</>\n\nBattle Royale oynayarak Savaş Bileti’nin aşamasını yükselt ve <Bold>100’den fazla ödülü</> aç (genelde 75 ila 150 saat oynama gerektirir).\n  • <ItemName>Sığınak Kaçkını Jonesy</> ve <Bold>4 Kıyafet</> daha\n  • <Bold>1.300 V-Papel</>\n  • 7 İfade\n  • 6 Kaplama\n  • 7 Toplama Aleti\n  • 1 Sadık Dost\n  • 4 Planör\n  • 6 Sırt Süsü\n  • 5 Dalış İzi\n  • 13 Sprey\n  • 3 Müzik Parçası\n  • 1 Oyuncak\n  • 20 Yükleme Ekranı\n  • ve çok daha fazlası!\nHepsini daha hızlı mı almak istiyorsun? V-Papel karşılığında istediğin zaman aşama açabilirsin!"
                        },
                        "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_BR_Season9_BattlePass.DA_BR_Season9_BattlePass",
                        "itemGrants": []
                    },
                    {
                        "offerId": "33E185A84ED7B64F2856E69AADFD092C",
                        "devName": "BR.Season9.SingleTier.01",
                        "offerType": "StaticPrice",
                        "prices": [
                            {
                                "currencyType": "MtxCurrency",
                                "currencySubType": "",
                                "regularPrice": 150,
                                "finalPrice": 150,
                                "saleExpiration": "9999-12-31T23:59:59.999Z",
                                "basePrice": 150
                            }
                        ],
                        "categories": [],
                        "dailyLimit": -1,
                        "weeklyLimit": -1,
                        "monthlyLimit": -1,
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
                            ""
                        ],
                        "requirements": [],
                        "metaInfo": [],
                        "catalogGroup": "",
                        "catalogGroupPriority": 0,
                        "sortPriority": 0,
                        "title": {
                            "de": "Battle Pass-Stufe",
                            "ru": "Уровень боевого пропуска",
                            "ko": "배틀패스 티어",
                            "zh-hant": "英雄季卡戰階",
                            "pt-br": "Categoria de Passe de Batalha",
                            "en": "Battle Pass Tier",
                            "it": "Livello Pass battaglia",
                            "fr": "Palier du Passe de combat",
                            "zh-cn": "英雄季卡战阶",
                            "es": "Nivel del pase de batalla",
                            "ar": "Battle Pass Tier",
                            "ja": "バトルパスティア",
                            "pl": "Stopień karnetu bojowego",
                            "es-419": "Nivel de pase de batalla",
                            "tr": "Savaş Bileti Aşaması"
                        },
                        "shortDescription": "",
                        "description": {
                            "de": "Hol dir jetzt tolle Belohnungen!",
                            "ru": "Получите отличные награды!",
                            "ko": "지금 푸짐한 보상을 받으세요!",
                            "zh-hant": "現在獲得豐厚獎勵！",
                            "pt-br": "Ganhe recompensas ótimas agora!",
                            "en": "Get great rewards now!",
                            "it": "Ricevi subito magnifiche ricompense!",
                            "fr": "Obtenez de grandes récompenses !",
                            "zh-cn": "现在获得丰厚奖励！",
                            "es": "¡Consigue recompensas increíbles!",
                            "ar": "Get great rewards now!",
                            "ja": "ステキな報酬を今すぐゲット！",
                            "pl": "Zdobądź super nagrody już teraz!",
                            "es-419": "¡Consigue grandes recompensas ahora!",
                            "tr": "Harika ödülleri kap!"
                        },
                        "displayAssetPath": "",
                        "itemGrants": []
                    }
                ]
            },
            {
                "name": "BRSeason10",
                "catalogEntries": [
                    {
                        "offerId": "2E43CCD24C3BE8F5ABBDF28E233B9350",
                        "devName": "BR.Season10.BattlePass.01",
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
                            ""
                        ],
                        "requirements": [
                            {
                                "requirementType": "DenyOnFulfillment",
                                "requiredId": "2E43CCD24C3BE8F5ABBDF28E233B9350",
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
                        "title": {
                            "de": "Battle Pass",
                            "ru": "Боевой пропуск",
                            "ko": "배틀패스",
                            "zh-hant": "英雄季卡",
                            "pt-br": "Passe de Batalha",
                            "en": "Battle Pass",
                            "it": "Pass battaglia",
                            "fr": "Passe de combat",
                            "zh-cn": "英雄季卡",
                            "es": "Pase de batalla",
                            "ar": "Battle Pass",
                            "ja": "バトルパス",
                            "pl": "Karnet bojowy",
                            "es-419": "Pase de batalla",
                            "tr": "Savaş Bileti"
                        },
                        "shortDescription": {
                            "de": "Saison X",
                            "ru": "Десятый сезон",
                            "ko": "시즌 X",
                            "zh-hant": "第十賽季",
                            "pt-br": "Temporada X",
                            "en": "Season X",
                            "it": "Stagione X",
                            "fr": "Saison X",
                            "zh-cn": "第X赛季",
                            "es": "Temporada X",
                            "ar": "Season X",
                            "ja": "シーズンX",
                            "pl": "Sezon X",
                            "es-419": "Temporada X",
                            "tr": "X. Sezon"
                        },
                        "description": {
                            "de": "Saison X – Ab sofort bis einschließlich 6. Oktober.\n\nErhalte sofort diese Gegenstände <Bold>im Wert von über 3.500 V-Bucks</>.\n  • <ItemName>X-Meister</> (Outfit)\n  • <ItemName>Catalyst</> (Outfit)\n  • <Bold>+50 %</> Saison-Match-EP\n  • <Bold>+60 %</> Saison-Match-EP für Freunde\n\nSpiele weiter und stufe deinen Battle Pass auf, um <Bold>über 100 Belohnungen</> freizuschalten (im Normalfall werden dafür 75 bis 150 Spielstunden benötigt).\n  • <ItemName>Ultimaritter</> und <Bold>4 weitere Outfits</>\n  • <Bold>1.300 V-Bucks</>\n  • 7 Emotes\n  • 6 Lackierungen\n  • 6 Erntewerkzeuge\n  • 1 Gefährte\n  • 7 Hängegleiter\n  • 7 Rücken-Accessoires\n  • 5 Kondensstreifen\n  • 17 Spraymotive\n  • 3 Musikstücke\n  • 1 Spielzeug\n  • 27 Ladebildschirme\n  • und noch eine ganze Menge mehr!\nDas dauert dir zu lange? Du kannst dir mit V-Bucks jederzeit Stufen kaufen!",
                            "ru": "Десятый сезон: до 6 октября\n\nСразу же получите предметы <Bold>стоимостью более 3500 В-баксов!</>\n  • Экипировка <ItemName>Повелителя шипов</>;\n  • экипировка <ItemName>Тануки</>;\n  • <Bold>+50% к опыту</> за матчи сезона;\n  • <Bold>+60% к опыту</> друзей за матчи сезона.\n \nИграйте, повышайте уровень боевого пропуска — вас ждут <Bold>более 100 наград</>. Обычно, чтобы открыть все награды, требуется 75–150 часов игры.\n  • Экипировка <ItemName>Несокрушимого рыцаря</> и <Bold>ещё 4 костюма;</>\n  • <Bold>1300 В-баксов;</>\n  • 7 эмоций;\n  • 6 обёрток;\n  • 6 инструментов;\n  • 1 питомец;\n  • 7 дельтапланов;\n  • 7 украшений на спину;\n  • 5 воздушных следов;\n  • 17 граффити;\n  • 3 музыкальные композиции;\n  • 1 игрушка;\n  • 27 экранов загрузки\n    и это ещё не всё!\nНе хотите ждать? Уровни можно быстро получить за В-баксы!",
                            "ko": "시즌 X: 10월 6일 종료\n\n<Bold>3,500 V-Bucks 이상의 가치</>가 있는 여러 아이템을 즉시 받아가세요.\n  • <ItemName>엑스로드</> 진화형 의상\n  • <ItemName>카탈리스트</> 진화형 의상\n  • <Bold>50% 보너스</> 시즌 매치 XP\n  • <Bold>60% 보너스</> 시즌 친구 매치 XP\n\n게임을 플레이하고 배틀패스 티어를 올려서 <Bold>100개 이상의 보상</>을 획득해보세요(보통 75-150시간 소요).\n  • <ItemName>최후의 기사</> 외 <Bold>의상 4개</>\n  • <Bold>1,300 V-Bucks</>\n  • 이모트 7개\n  • 외관 6개\n  • 수확 도구 6개\n  • 애완동물 1마리\n  • 글라이더 7개\n  • 등 장신구 6개\n  • 트레일 5개\n  • 스프레이 17개\n  • 음악 트랙 3개\n  • 장난감 1개\n  • 로딩 화면 27개\n  • 그 외 많은 혜택!\n더 빨리 보상을 얻고 싶으신가요? V-Bucks를 사용해서 언제든지 티어를 구매할 수 있습니다!",
                            "zh-hant": "第十賽季：從現在開始至10月6日。\n\n立即獲得以下<Bold>價值逾3500V幣</>的物品。\n  • <ItemName>廢土領主-X</>服裝\n  • <ItemName>靈狸</>服裝\n  • <Bold>50%額外</>賽季匹配經驗\n  • <Bold>60%額外</>賽季好友匹配經驗\n\n通過遊玩提升英雄季卡戰階，解鎖<Bold>至少75個獎勵</>（通常需要75到150個小時的遊玩時間）。\n  • <ItemName>終極騎士</>和<Bold>4個額外服裝</>\n  • <Bold>1300V幣</>\n  • 7個姿勢\n  • 6個皮膚\n  • 6個採集工具\n  • 一個寵物\n  • 7個滑翔傘\n  • 7個背部裝飾\n  • 5滑翔軌跡\n  • 17個塗鴉\n  • 3個音軌\n  • 一個玩具\n  • 27個載入介面\n  • 以及更多獎勵！\nWant it all faster? You can useV幣 to buy tiers any time!",
                            "pt-br": "Temporada X: de hoje até 6 de outubro.\n\nReceba instantaneamente estes itens <Bold>avaliados em mais de 3.500 V-Bucks</>.\n  • Traje <ItemName>Lorde X</>\n  • Traje <ItemName>Transcendental</>\n  • <Bold>50% de Bônus</> de EXP da Temporada em Partidas\n  • <Bold>60% de Bônus</> de EXP da Temporada em Partidas com Amigos\n\nJogue para subir o nível do seu Passe de Batalha, desbloqueando <Bold>mais de 100 recompensas</> (leva em média de 75 a 150 horas de jogo).\n  • <ItemName>Cavaleiro Supremo</> e <Bold>mais 4 Trajes</>\n  • <Bold>1.300 V-Bucks</>\n  • 7 Gestos\n  • 6 Envelopamentos\n  • 6 Ferramentas de Coleta\n  • 1 Mascote\n  • 7 Asas-deltas\n  • 7 Acessórios para as Costas\n  • 5 Rastros de Fumaça\n  • 17 Sprays\n  • 3 Faixas Musicais\n  • 1 Brinquedo\n  • 27 Telas de Carregamento\n  • e muito mais!\nQuer obter tudo mais rápido? Você pode comprar categorias com V-Bucks a qualquer hora!",
                            "en": "Season X Now through October 6.\n\nInstantly get these items <Bold>valued at over 3,500 V-Bucks</>.\n  • <ItemName>X-Lord</> Outfit\n  • <ItemName>Catalyst</> Outfit\n  • <Bold>50% Bonus</> Season Match XP\n  • <Bold>60% Bonus</> Season Friend Match XP\n\nPlay to level up your Battle Pass, unlocking <Bold>over 100 rewards</> (typically takes 75 to 150 hours of play).\n  • <ItemName>Ultima Knight</> and <Bold>4 more Outfits</>\n  • <Bold>1,300 V-Bucks</>\n  • 7 Emotes\n  • 6 Wraps\n  • 6 Harvesting Tools\n  • 1 Pet\n  • 7 Gliders\n  • 7 Back Blings\n  • 5 Contrails\n  • 17 Sprays\n  • 3 Music Tracks\n  • 1 Toy\n  • 27 Loading Screens\n  • and so much more!\nWant it all faster? You can use V-Bucks to buy tiers any time!",
                            "it": "Stagione X, da ora fino al 6 ottobre\n\nOttieni subito questi oggetti <Bold>dal valore di oltre 3.500 V-buck</>!\n • Costume <ItemName>Lord-X</>\n • Costume <ItemName>Catalizzatore</>\n • <Bold>Bonus 50%</> PE partite stagionali\n • <Bold>Bonus 60%</> PE amici partite stagionali\n\nGioca per aumentare il livello del tuo Pass battaglia, sbloccando <Bold>più di 100 ricompense</> (per un totale indicativo di 75-150 ore di gioco).\n • <ItemName>Cavaliere Ultima</> e <Bold>4 costumi in più</>\n • <Bold>1.300 V-Buck</>\n • 7 emote\n • 6 coperture\n • 6 strumenti raccolta\n • 1 piccolo amico\n • 7 deltaplani\n • 7 dorsi decorativi\n • 5 scie\n • 17 spray\n  • 3 brani musicali\n  • 1 giocattolo\n  • 27 schermate di caricamento\n  • E altro ancora!\nVuoi tutto e subito? Puoi acquistare livelli usando V-buck in qualsiasi momento!",
                            "fr": "Saison X : jusqu'au 6 octobre.\n\nRecevez immédiatement ces objets <Bold>d'une valeur supérieure à 3500 V-bucks</>.\n  • Tenue <ItemName>Maître occulte</>\n  • Tenue <ItemName>Déclic</>\n  • Bonus d'EXP de saison de 50%\n  • Bonus d'EXP de saison de 60% pour des amis\n\nJouez pour augmenter le niveau de votre Passe de combat et déverrouiller <Bold>plus de 100 récompenses</> (nécessitant de 75 à 150 heures de jeu).\n  • <ItemName>Chevalier ultime</> et <Bold>4 autres tenues</>\n  • <Bold>1300 V-bucks</>\n  • 7 emotes\n  • 6 revêtements\n  • 6 outils de collecte\n  • 1 compagnon\n  • 7 planeurs\n  • 7 accessoires de dos\n  • 5 traînées de condensation\n  • 17 aérosols\n  • 3 pistes musicales\n  • 1 jouet\n  • 27 écrans de chargement\n  • Et plus !\nEnvie d'aller plus vite ? Utilisez vos V-bucks pour acheter des niveaux à tout moment !",
                            "zh-cn": "第X赛季：从现在开始至10月6日。\n\n立即获得以下<Bold>价值逾3500V币</>的物品。\n  • <ItemName>废土领主-X</>服装\n  • <ItemName>灵狸</>服装\n  • <Bold>50%额外</>赛季匹配经验\n  • <Bold>60%额外</>赛季好友匹配经验\n\n通过游玩提升英雄季卡战阶，解锁<Bold>至少75个奖励</>（通常需要75到150个小时的游玩时间）。\n  • <ItemName>终极骑士</>和<Bold>4个额外服装</>\n  • <Bold>1300V币</>\n  • 7个姿势\n  • 6个皮肤\n  • 6个采集工具\n  • 一个宠物\n  • 7个滑翔伞\n  • 7个背部装饰\n  • 5滑翔轨迹\n  • 17个涂鸦\n  • 3个音轨\n  • 一个玩具\n  • 27个载入界面\n  • 以及更多奖励！\n希望更快吗？你可以随时使用V币购买战阶！",
                            "es": "Temporada X: desde ahora hasta el 6 de octubre.\n\nConsigue instantáneamente estos objetos <Bold>valorados en más de 3500 paVos</>.\n  • Traje de <ItemName>Señor X</>\n  • Traje de <ItemName>Catalizadora</>\n  • <Bold>Bonificación del 50 %</> de PE por partida de temporada\n  • <Bold>Bonificación del 60 %</> de PE de partida amistosa de temporada\n\\Juega para subir de nivel tu pase de batalla y desbloquea <Bold>más de 100 recompensas</> (suele llevar entre 75 y 150 horas de juego).\n  • <ItemName>Caballero Ultima</> y <Bold>4 trajes más</>\n  • <Bold>1300 paVos</>\n  • 7 gestos\n  • 6 envoltorios\n  • 6 herramientas de recolección\n  • 1 mascota\n  • 7 alas delta\n  • 7 accesorios mochileros\n  • 5 estelas\n  • 17 grafitis\n  • 3 temas musicales\n  • 1 juguete\n  • 27 pantallas de carga\n  • ¡Y muchísimo más!\n¿Lo quieres más rápido? ¡Puedes usar paVos para comprar niveles siempre que quieras!",
                            "ar": "Season X Now through October 6.\n\nInstantly get these items <Bold>valued at over 3,500 V-Bucks</>.\n  • <ItemName>X-Lord</> Outfit\n  • <ItemName>Catalyst</> Outfit\n  • <Bold>50% Bonus</> Season Match XP\n  • <Bold>60% Bonus</> Season Friend Match XP\n\nPlay to level up your Battle Pass, unlocking <Bold>over 100 rewards</> (typically takes 75 to 150 hours of play).\n  • <ItemName>Ultima Knight</> and <Bold>4 more Outfits</>\n  • <Bold>1,300 V-Bucks</>\n  • 7 Emotes\n  • 6 Wraps\n  • 6 Harvesting Tools\n  • 1 Pet\n  • 7 Gliders\n  • 7 Back Blings\n  • 5 Contrails\n  • 17 Sprays\n  • 3 Music Tracks\n  • 1 Toy\n  • 27 Loading Screens\n  • and so much more!\nWant it all faster? You can use V-Bucks to buy tiers any time!",
                            "ja": "シーズンX: 10月6日まで。\r\n\r\n<Bold>3,500 V-Bucks以上の価値</>があるアイテムを今すぐ手に入れましょう。\r\n  • コスチューム「<ItemName>Xロード</>」\r\n  • コスチューム「<ItemName>カタリスト</>」</>\r\n  • シーズンマッチXPの<Bold>50%ボーナス</>\r\n  • シーズンフレンドマッチXPの<Bold>60%ボーナス\r\n\r\nプレイしてバトルパスのレベルを上げると、<Bold>100以上の報酬</>をアンロックできます(通常、プレイにかかる時間は75～150時間程度)。\r\n  • 「<ItemName>アルティマナイト</>」及び<Bold>さらなるコスチュームx4</>\r\n  • <Bold>1,300 V-Bucks</>\r\n  • エモートx7\r\n  • ラップx6\r\n  • 収集ツールx6\r\n  • ペットx1\r\n  • グライダーx7\r\n  • バックアクセサリーx7\r\n  • コントレイルx5\r\n  • スプレーx17\r\n  • ミュージックトラックx3\r\n  • おもちゃx1\r\n  • ロード画面x27\r\n • 他にも盛りだくさん！\r\nもっと早く報酬を全部集めたいという方は、V-Bucksでいつでもティアを購入できます！",
                            "pl": "Season X: od teraz do 6 października.\n\nZgarnij od razu poniższe przedmioty <Bold>o wartości ponad 3500 V-dolców</>.\n  • Strój <ItemName>X-Lord</>\n  • Strój <ItemName>Katalizator</>\n  • Sezonowa <Bold>premia 50% PD</> za grę\n  • Sezonowa <Bold>premia 60% PD</> za grę ze znajomym\n\nGraj, aby awansować karnet bojowy i zdobyć <Bold>ponad 100 nagród</> (ich zebranie zajmuje zwykle od 75 do 150 godz. gry).\n  • <ItemName>Rycerz Ultima</> i <Bold>4 inne stroje</>\n  • <Bold>1300 V-dolców</>\n  • 7 emotek\n  • 6 malowań\n  • 6 zbieraków\n  • 1 pupil\n  • 7 lotni\n  • 7 plecaków\n  • 5 smug\n  • 17 graffiti\n  • 3 tła muzyczne\n  • 1 zabawka\n  • 27 ekranów wczytywania\n  • I dużo więcej!\nChcesz rozwijać się szybciej? W każdej chwili możesz kupić stopnie za V-dolce!",
                            "es-419": "Desde la temporada X hasta el 6 de octubre.\n\\Obtén al instante estos objetos <Bold>que cuestan más de 3500 monedas V</>.\n  • Atuendo <ItemName>Señor X</>\n  • Atuendo <ItemName>Catalizadora</>\n  • <Bold>50 % de bonificación</> de PE para partidas de la temporada\n  • <Bold>60 % de bonificación</> de PE para partidas con amigos en la temporada\n\nJuega para subir de nivel el pase de batalla y desbloquear <Bold>más de 100 recompensas</> (esto lleva entre 75 y 150 horas de juego).\n  • <ItemName>Caballero Ultima</> y <Bold>4 atuendos más</>\n  • <Bold>1300 monedas V</>\n  • 7 gestos\n  • 6 papeles\n  • 6 herramientas de recolección\n  • 1 mascota\n  • 7 planeadores\n  • 7 mochilas retro\n  • 5 estelas\n  • 17 aerosoles\n  • 3 pistas de música\n  • 1 juguete\n  • 27 pantallas de carga\n • ¡Y mucho más!\n¿Lo quieres todo más rápido? ¡Puedes usar las monedas V para comprar niveles cuando quieras!",
                            "tr": "X. Sezon: Şu andan 6 Ekim'e kadar.\n\n<Bold>3.500 V-Papel'in üzerinde değeri olan</> bu içerikleri hemen kap.\n  • <ItemName>X Lordu</> Kıyafeti\n  • <ItemName>Düz Kontak</> Kıyafeti\n  • <Bold>%50 Bonus</> Sezonluk Maç TP'si\n  • Arkadaşların için <Bold>%60 Bonus</> Sezonluk Maç TP'si\n\nBattle Royale oynayarak Savaş Bileti'nin aşamasını yükselt ve <Bold>100'den fazla ödülü</> aç (genelde 75 ila 150 saat oynama gerektirir).\n  • <ItemName>Kızıl Şövalye</> ve <Bold>4 Kıyafet</> daha\n  • <Bold>1.300 V-Papel</>\n  • 7 İfade\n  • 6 Kaplama\n  • 6 Toplama Aleti\n  • 1 Sadık Dost\n  • 7 Planör\n  • 7 Sırt Süsü\n  • 5 Dalış İzi\n  • 17 Sprey\n  • 3 Müzik Parçası\n  • 1 Oyuncak\n  • 27 Yükleme Ekranı\n  • ve çok daha fazlası!\nHepsini daha hızlı mı almak istiyorsun? V-Papel karşılığında istediğin zaman aşama açabilirsin!"
                        },
                        "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_BR_Season10_BattlePass.DA_BR_Season10_BattlePass",
                        "itemGrants": []
                    },
                    {
                        "offerId": "259920BC42F0AAC7C8672D856C9B622C",
                        "devName": "BR.Season10.BattleBundle.01",
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
                            ""
                        ],
                        "requirements": [
                            {
                                "requirementType": "DenyOnFulfillment",
                                "requiredId": "2E43CCD24C3BE8F5ABBDF28E233B9350",
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
                        "title": {
                            "de": "Battle Pass-Paket",
                            "ru": "Боевой комплект",
                            "ko": "배틀번들",
                            "zh-hant": "戰鬥套組",
                            "pt-br": "Pacotão de Batalha",
                            "en": "Battle Bundle",
                            "it": "Bundle battaglia",
                            "fr": "Pack de combat",
                            "zh-cn": "战斗套组",
                            "es": "Lote de batalla",
                            "ar": "Battle Bundle",
                            "ja": "バトルバンドル",
                            "pl": "Zestaw bojowy",
                            "es-419": "Paquete de batalla",
                            "tr": "Savaş Paketi"
                        },
                        "shortDescription": {
                            "de": "Battle Pass + 25 Stufen!",
                            "ru": "Боевой пропуск + 25 уровней!",
                            "ko": "배틀패스 + 25티어!",
                            "zh-hant": "英雄季卡增加25戰階！",
                            "pt-br": "Passe de Batalha + 25 categorias!",
                            "en": "Battle Pass + 25 tiers!",
                            "it": "Pass battaglia + 25 livelli!",
                            "fr": "Passe de combat + 25 paliers !",
                            "zh-cn": "英雄季卡增加25战阶！",
                            "es": "¡Pase de batalla y 25 niveles!",
                            "ar": "Battle Pass + 25 tiers!",
                            "ja": "バトルパス+25ティア！",
                            "pl": "Karnet bojowy + 25 stopni!",
                            "es-419": "¡Pase de batalla + 25 niveles!",
                            "tr": "Savaş Bileti + 25 aşama!"
                        },
                        "description": {
                            "de": "Saison X – Ab sofort bis einschließlich 6. Oktober.\n\nErhalte sofort diese Gegenstände <Bold>im Wert von über 10.000 V-Bucks</>.\n  • <ItemName>X-Meister</> (Outfit)\n  • <ItemName>Catalyst</> (Outfit)\n  • <ItemName>Tilted-Teknique</> (Outfit)\n  • <ItemName>Rostkiste</> (Hängegleiter)\n  • <ItemName>Emote-Tarnung</> (Lackierung)\n  • <ItemName>Rissblitze</> (Kondensstreifen)\n  • 300 V-Bucks\n  • <ItemName>The Final Showdown</> (Musikstück)\n  • <Bold>+70 %</> Saison-Match-EP\n  • <Bold>+80 %</> Saison-Match-EP für Freunde\n  • und noch mehr!\n\nSpiele weiter und stufe deinen Battle Pass auf, um <Bold>über 75 Belohnungen</> freizuschalten (im Normalfall werden dafür 75 bis 150 Spielstunden benötigt).\n  • <Bold>4 weitere Outfits</>\n  • <Bold>1.000 V-Bucks</>\n  • 6 Emotes\n  • 4 Lackierungen\n  • 5 Erntewerkzeuge\n  • 1 Gefährte\n  • 6 Hängegleiter\n  • 7 Rücken-Accessoires\n  • 3 Kondensstreifen\n  • 13 Spraymotive\n  • 2 Musikstücke\n  • 1 Spielzeug\n  • 23 Ladebildschirme\n  • und noch eine ganze Menge mehr!\nDas dauert dir zu lange? Du kannst dir mit V-Bucks jederzeit Stufen kaufen!",
                            "ru": "Десятый сезон: до 6 октября\n\nСразу же получите предметы <Bold>стоимостью более 10 000 В-баксов!</>\n  • Экипировка <ItemName>Повелителя шипов</>;\n  • экипировка <ItemName>Тануки</>;\n  • экипировка <ItemName>Мисс Будущее</>;\n  • дельтаплан <ItemName>«Драндулет»</>;\n  • обёртка <ItemName>«Танцы»</>;\n  • воздушный след <ItemName>«Сияние разлома»</>;\n  • 300 В-баксов;\n  • музыкальная композиция <ItemName>«Решающая битва»</>;\n  • <Bold>+70% к опыту</> за матчи сезона;\n  • <Bold>+80% к опыту</> друзей за матчи сезона;\n  • и многое другое.\n\nИграйте, повышайте уровень боевого пропуска — и вас ждут <Bold>более 75 наград</>. Обычно, чтобы открыть все награды, требуется 75–150 часов игры.\n  • <Bold>Ещё 4 костюма;</>\n  • <Bold>1000 В-баксов</>;\n  • 6 эмоций;\n  • 4 обёртки;\n  • 5 инструментов;\n  • 1 питомец;\n  • 6 дельтапланов;\n  • 7 украшений на спину;\n  • 3 воздушных следа;\n  • 13 граффити;\n  • 2 музыкальные композиции;\n  • 1 игрушка;\n  • 23 экрана загрузки\n     и это ещё не всё!\nНе хотите ждать? Уровни можно быстро получить за В-баксы!",
                            "ko": "시즌 X: 10월 6일 종료\n\n<Bold>10,000 V-Bucks 이상의 가치</>가 있는 여러 아이템을 즉시 받아가세요.\n  • <ItemName>엑스로드</> 의상\n  • <ItemName>카탈리스트</> 의상\n  • <ItemName>틸티드 테크니크 아티스트</> 의상\n  • <ItemName>고철통</> 글라이더\n  • <ItemName>이모트 위장 패턴</> 외관\n  • <ItemName>균열 번갯불</> 스카이다이빙 트레일\n  • 300 V-Bucks\n  • <ItemName>마지막 결전</> 음악 트랙\n  • <Bold>70% 보너스</> 시즌 매치 XP\n  • <Bold>80% 보너스</> 시즌 친구 매치 XP\n  • 그 외 더 많은 혜택!\n\n게임을 플레이하고 배틀패스 티어를 올려서 <Bold>75개 이상의 보상</>을 획득해보세요(보통 75-150시간 소요).\n  • <Bold>추가 의상 4개</>\n  • <Bold>1,000 V-Bucks</>\n  • 이모트 6개\n  • 외관 4개\n  • 수확 도구 5개\n  • 애완동물 1마리\n   • 글라이더 6개\n  • 등 장신구 7개\n  • 트레일 3개\n  • 스프레이 13개\n  • 음악 트랙 2개\n  • 장난감 1개\n  • 로딩 화면 23개\n  • 그 외 많은 혜택!\n더 빨리 보상을 얻고 싶으신가요? V-Bucks를 사용해서 언제든지 티어를 구매할 수 있습니다!",
                            "zh-hant": "第十賽季：從現在開始至10月6日。\n\n立即獲得以下<Bold>價值逾10000V幣</>的物品。\n  • <ItemName>廢土領主-X</>服裝\n  • <ItemName>靈狸</>服裝\n  • <ItemName>斜塔塗鴉大師</>服裝\n  • <ItemName>垃圾鏟鬥</>滑翔傘\n  • <ItemName>姿勢迷彩 </>皮膚\n  • <ItemName>裂隙閃電</>滑翔軌跡\n  • 300V幣\n  • <ItemName>最終決戰 </>音軌\n  • <Bold>70%額外</>賽季匹配經驗\n  • <Bold>80%額外</>賽季好友匹配經驗\n  • 以及更多獎勵！\n\n通過遊玩提升英雄季卡戰階，解鎖<Bold>至少75個獎勵</>（通常需要75到150個小時的遊玩時間）。\n  • <Bold>4個額外服裝</>\n  • <Bold>1000V幣</>\n  • 6個姿勢\n  • 4個皮膚\n  • 5個採集工具\n  • 1個寵物\n  • 6個滑翔傘\n  • 7個背部裝飾\n  • 3個滑翔軌跡\n  • 13個塗鴉\n  • 2個音軌\n  • 1個玩具\n  • 23個載入介面\n  • 以及更多獎勵！\n希望更快嗎？你可以隨時使用V幣購買戰階！",
                            "pt-br": "Temporada X: de hoje até 6 de outubro.\n\nReceba instantaneamente estes itens <Bold>avaliados em mais de 10.000 V-Bucks</>.\n  • Traje <ItemName>Lorde X</>\n  • Traje <ItemName>Transcendental</>\n  • Traje <ItemName>Téknica Torta</>\n  • Asa-delta <ItemName>Carcaça de Ferro-velho</>\n  • Envelopamento <ItemName>Camuflagem de Gesto</>\n  • Rastro de Fumaça <ItemName>Relâmpago de Fenda</>\n  • 300 V-Bucks\n  • Faixa Musical<ItemName>O Confronto Final</>\n  • <Bold>70% de Bônus</> de EXP da Temporada em Partidas\n  • <Bold>80% de Bônus</> de EXP da Temporada em Partidas com Amigos\n  • e mais!\n\nJogue para subir o nível do seu Passe de Batalha, desbloqueando <Bold>mais de 75 recompensas</> (leva em média de 75 a 150 horas de jogo).\n  • <Bold>Mais 4 Trajes</>\n  • <Bold>1.000 V-Bucks</>\n  • 6 Gestos\n  • 4 Envelopamentos\n  • 5 Ferramentas de Coleta\n  • 1 Mascote\n  • 6 Asas-deltas\n  • 7 Acessórios para as Costas\n  • 3 Rastros de Fumaça\n  • 13 Sprays\n  • 2 Faixas Musicais\n  • 1 Brinquedo\n  • 23 Telas de Carregamento\n  • e muito mais!\nQuer obter tudo mais rápido? Você pode comprar categorias com V-Bucks a qualquer hora!",
                            "en": "Season X Now through October 6.\n\nInstantly get these items <Bold>valued at over 10,000 V-Bucks</>.\n  • <ItemName>X-Lord</> Outfit\n  • <ItemName>Catalyst</> Outfit\n  • <ItemName>Tilted Teknique</> Outfit\n  • <ItemName>Junk Bucket</> Glider\n  • <ItemName>Emote Camo </> Wrap\n  • <ItemName> Rift Lightning </> Contrails\n  • 300 V-Bucks\n  • <ItemName>The Final Showdown </> Music Track\n  • <Bold>70% Bonus</> Season Match XP\n  • <Bold>80% Bonus</> Season Friend Match XP\n  • and more!\n\nPlay to level up your Battle Pass, unlocking <Bold>over 75 rewards</> (typically takes 75 to 150 hours of play).\n  • <Bold>4 more Outfits</>\n  • <Bold>1,000 V-Bucks</>\n  • 6 Emotes\n  • 4 Wraps\n  • 5 Harvesting Tools\n  • 1 Pet\n  • 6 Gliders\n  • 7 Back Blings\n  • 3 Contrails\n  • 13 Sprays\n  • 2 Music Tracks\n  • 1 Toy\n  • 23 Loading Screens\n  • and so much more!\nWant it all faster? You can use V-Bucks to buy tiers any time!",
                            "it": "Stagione X, da ora fino al 6 ottobre\n\nOttieni subito questi oggetti <Bold>dal valore di oltre 10.000 V-buck</>!\n • Costume <ItemName>Lord-X</>\n • Costume <ItemName>Catalizzatore</>\n • Costume <ItemName>PinnacoTeknica</>\n • Deltaplano <ItemName>Secchio di ciarpame</>\n  • Copertura <ItemName>Mimetica emote</>\n • Scia <ItemName>Fulmine della fenditura</>\n  • 300 V-buck\n  • Brano musicale <ItemName>Il Duello finale</>\n • <Bold>Bonus 70%</> PE partite stagionali\n • <Bold>Bonus 80%</> PE amici partite stagionali\n • E altro ancora!\n\nGioca per aumentare il livello del tuo Pass battaglia, sbloccando <Bold>più di 75 ricompense</> (per un totale indicativo di 75-150 ore di gioco).\n • <Bold>4 costumi in più</>\n • <Bold>1.000 V-Buck</>\n • 6 emote\n • 4 coperture\n • 5 strumenti raccolta\n • 1 piccolo amico\n • 6 deltaplani\n • 7 dorsi decorativi\n • 3 scie\n • 13 spray\n  • 2 brani musicali\n  • 1 giocattolo\n  • 23 schermate di caricamento\n  • E altro ancora!\nVuoi tutto e subito? Puoi acquistare livelli usando V-buck in qualsiasi momento!",
                            "fr": "Saison X : jusqu'au 6 octobre.\n\nRecevez immédiatement ces objets <Bold>d'une valeur supérieure à 10 000 V-bucks</>.\n  • Tenue <ItemName>Maître occulte</>\n  • Tenue <ItemName>Déclic</>\n  • Tenue <ItemName>Graffeuse de Tilted</>\n  • Planeur <ItemName>Ferrailleur</>\n  • Revêtement <ItemName>Camouflage emote</>\n  • Traînée de condensation <ItemName>Faille fulgurante</>\n  • 300 V-bucks\n  • Musique <ItemName>Bataille finale </>\n  • Bonus d'EXP de saison de 70%\n  • Bonus d'EXP de saison de 80% pour des amis\n  • Et plus !\n\nJouez pour augmenter le niveau de votre Passe de combat et déverrouiller <Bold>plus de 75 récompenses</> (nécessitant de 75 à 150 heures de jeu).\n  • <Bold>4 autres tenues</>\n  • <Bold>1000 V-bucks</>\n  • 6 emotes\n  • 4 revêtements\n  • 5 outils de collecte\n  • 1 compagnon\n  • 6 planeurs\n  • 7 accessoires de dos\n  • 3 traînées de condensation\n  • 13 aérosols\n  • 2 musiques\n  • 1 jouet\n  • 23 écrans de chargement\n  • Et plus !\nEnvie d'aller plus vite ? Utilisez vos V-bucks pour acheter des niveaux à tout moment !",
                            "zh-cn": "第X赛季：从现在开始至10月6日。\n\n立即获得以下<Bold>价值逾10000V币</>的物品。\n  • <ItemName>废土领主-X</>服装\n  • <ItemName>灵狸</>服装\n  • <ItemName>斜塔涂鸦大师</>服装\n  • <ItemName>垃圾铲斗</>滑翔伞\n  • <ItemName>尬舞迷彩 </>皮肤\n  • <ItemName>裂隙闪电</>滑翔轨迹\n  • 300V币\n  • <ItemName>最终决战 </>音轨\n  • <Bold>70%额外</>赛季匹配经验\n  • <Bold>80%额外</>赛季好友匹配经验\n  • 以及更多奖励！\n\n通过游玩提升英雄季卡战阶，解锁<Bold>至少75个奖励</>（通常需要75到150个小时的游玩时间）。\n  • <Bold>4个额外服装</>\n  • <Bold>1000V币</>\n  • 6个姿势\n  • 4个皮肤\n  • 5个采集工具\n  • 1个宠物\n  • 6个滑翔伞\n  • 7个背部装饰\n  • 3个滑翔轨迹\n  • 13个涂鸦\n  • 2个音轨\n  • 1个玩具\n  • 23个载入界面\n  • 以及更多奖励！\n希望更快吗？你可以随时使用V币购买战阶！",
                            "es": "Temporada X: desde ahora hasta el 6 de octubre.\n\nConsigue instantáneamente estos objetos <Bold>valorados en más de 10 000 paVos</>.\n  • Traje de <ItemName>Señor X</>\n  • Traje de <ItemName>Catalizadora</>\n  • Traje de <ItemName>Neotéknica</>\n  • Ala delta <ItemName>Cubo de chatarra</>\n  • Envoltorio <ItemName>Gesto Cami</>\n  • Estela <ItemName>Relámpago de la grieta</>\n  • 300 paVos\n  • Tema musical <ItemName>El enfrentamiento final</>\n  • <Bold>Bonificación del 70 %</> de PE por partida de temporada\n  • <Bold>Bonificación del 80 %</> de PE de partida amistosa de temporada\n  • ¡Y mucho más!\n\nJuega para subir de nivel tu pase de batalla y desbloquea <Bold>más de 75 recompensas</> (suele llevar entre 75 y 150 horas de juego).\n  • <Bold>4 trajes más</>\n  • <Bold>1000 paVos</>\n  • 6 gestos\n  • 4 envoltorios\n  • 5 herramientas de recolección\n  • 1 mascota\n  • 6 alas delta\n  • 7 accesorios mochileros\\  • 3 estelas\n  • 13 grafitis\n  • 2 temas musicales\n  • 1 juguete\n  • 23 pantallas de carga\n  • ¡Y muchísimo más!\n¿Lo quieres más rápido? ¡Puedes usar paVos para comprar niveles siempre que quieras!",
                            "ar": "Season X Now through October 6.\n\nInstantly get these items <Bold>valued at over 10,000 V-Bucks</>.\n  • <ItemName>X-Lord</> Outfit\n  • <ItemName>Catalyst</> Outfit\n  • <ItemName>Tilted Teknique</> Outfit\n  • <ItemName>Junk Bucket</> Glider\n  • <ItemName>Emote Camo </> Wrap\n  • <ItemName> Rift Lightning </> Contrails\n  • 300 V-Bucks\n  • <ItemName>The Final Showdown </> Music Track\n  • <Bold>70% Bonus</> Season Match XP\n  • <Bold>80% Bonus</> Season Friend Match XP\n  • and more!\n\nPlay to level up your Battle Pass, unlocking <Bold>over 75 rewards</> (typically takes 75 to 150 hours of play).\n  • <Bold>4 more Outfits</>\n  • <Bold>1,000 V-Bucks</>\n  • 6 Emotes\n  • 4 Wraps\n  • 5 Harvesting Tools\n  • 1 Pet\n  • 6 Gliders\n  • 7 Back Blings\n  • 3 Contrails\n  • 13 Sprays\n  • 2 Music Tracks\n  • 1 Toy\n  • 23 Loading Screens\n  • and so much more!\nWant it all faster? You can use V-Bucks to buy tiers any time!",
                            "ja": "シーズンX: 10月6日まで。\n\n<Bold>10,000 V-Bucks以上の価値がある</>以下のアイテムをすぐに入手できます。\n  • コスチューム「<ItemName>Xロード</>」\n  • コスチューム「<ItemName>カタリスト</>」\n  • コスチューム「<ItemName>ティルテッドテクニーク</>」\n  • グライダー「 <ItemName>ジャンクバケット</>」\n  • ラップ「<ItemName>エモートカモ</>」\n  • コントレイル「<ItemName>リフトライトニング</>」\n  • 300 V-Bucks\n  •  ミュージックトラック「<ItemName>最終決戦</>」\n  • シーズンマッチXPの<Bold>70%ボーナス</>\n  • シーズンフレンドマッチXPの<Bold>80%ボーナス</>\n  • 他にも盛りだくさん！\n\nプレイしてバトルパスのレベルを上げると、<Bold>75個以上の報酬</>をアンロックできます(通常、プレイにかかる時間は75～150時間程度)。\n  • <Bold>さらなるコスチュームx4</>\n  • <Bold>1,000 V-Bucks</>\n  • エモートx6\n  • ラップx4\n  • 収集ツールx5\n  • ペットx1\n  • グライダーx6\n  • バックアクセサリーx7\n  • コントレイルx3\n  • スプレーx13\n  \n  • 2 ミュージックトラックx2\n  • おもちゃx1\n  • ロード画面x23  • 他にも盛りだくさん！\nもっと早く報酬を全部集めたいという方は、V-Bucksでいつでもティアを購入できます！",
                            "pl": "Sezon X: od teraz do 6 października.\n\nZgarnij od razu poniższe przedmioty <Bold>o wartości ponad 10 000 V-dolców</>.\n  • Strój <ItemName>X-Lord</>\n  • Strój <ItemName>Katalizator</>\n  • Strój <ItemName>Wykrzywiona Teknique</>\n  • Lotnia <ItemName>Złomolot</>\n  • Malowanie <ItemName>Kamuflaż emotkowy</>\n  • Smuga <ItemName>Błyskawica szczeliny</>\n  • 300 V-dolców\n  • Tło muzyczne <ItemName>Ostatnie Starcie</>\n  • Sezonowa <Bold>premia 70% PD</> za grę\n  • Sezonowa <Bold>premia 80% PD</> za grę ze znajomym\n  • I nie tylko!\n\nGraj, aby awansować karnet bojowy i zdobyć <Bold>ponad 75 nagród</> (ich zebranie zajmuje zwykle od 75 do 150 godzin gry).\n  • <Bold>4 inne stroje</>\n  • <Bold>1000 V-dolców</>\n  • 6 emotek\n  • 4 malowania\n  • 5 zbieraków\n  • 1 pupil\n  • 6 lotni\n  • 7 plecaków\n  • 3 smugi\n  • 13 graffiti\n  • 2 tła muzyczne\n  • 1 zabawka\n  • 23 ekrany wczytywania\n  • I dużo więcej!\nChcesz rozwijać się szybciej? W każdej chwili możesz kupić stopnie za V-dolce!",
                            "es-419": "Desde la temporada X hasta el 6 de octubre.\n\nObtén al instante estos objetos <Bold>que cuestan más de 10 000 monedas V</>.\n  • Atuendo <ItemName>Señor X</>\n  • Atuendo <ItemName>Catalizadora</>\n  • Atuendo <ItemName>Neotéknica</>\n  • Planeador <ItemName>Montón de chatarra</>\n  • Papel <ItemName>Camuflaje de gestos </>\n  • Estela <ItemName> Relámpago de la grieta </>\n  • 300 monedas V\n  • Pista de música <ItemName>El enfrentamiento final </>\n  • <Bold>70% de bonificación</> de PE para partidas de la temporada\n  • <Bold>80% de bonificación</> de PE para partidas con amigos en la temporada\n  • ¡Y mucho más!\n\nJuega para subir de nivel el pase de batalla y desbloquear <Bold>más de 75 recompensas</> (esto lleva entre 75 y 150 horas de juego).\n  • <Bold>4 atuendos más</>\n  • <Bold>1000 monedas V</>\n  • 6 gestos\n  • 4 papeles\n  • 5 herramientas de recolección\n  • 1 mascota\n  • 6 planeadores\n  • 7 mochilas retro\n  • 3 estelas\n  • 13 aerosoles\n  • 2 pistas de música\n  • 1 juguete\n  • 23 pantallas de carga\n  • ¡Y mucho más!\n¿Lo quieres todo más rápido? ¡Puedes usar las monedas V para comprar niveles cuando quieras!",
                            "tr": "X. Sezon: Şu andan 6 Ekim'e kadar.\n\n<Bold>10.000 V-Papel'in üzerinde değeri olan</> bu içerikleri hemen kap.\n  • <ItemName>X Lordu</> Kıyafeti\n  • <ItemName>Düz Kontak</> Kıyafeti\n  • <ItemName>Serseri Grafitici</> Kıyafeti\n  • <ItemName>Eski Toprak</> Planörü\n  • <ItemName>İfadeli Kamuflaj</> Kaplaması\n  • <ItemName>Yırtık Yıldırımı</> Dalış İzi\n  • 300 V-Papel\n  • <ItemName>Nihai Hesaplaşma</> Müzik Parçası\n  • <Bold>%70 Bonus</> Sezonluk Maç TP'si\n  • Arkadaşların için <Bold>%80 Bonus</> Sezonluk Maç TP'si\n  • ve daha fazlası!\n\nBattle Royale oynayarak Savaş Bileti'nin aşamasını yükselt ve <Bold>75'ten fazla ödülü</> aç (genelde 75 ila 150 saat oynama gerektirir).\n  • <Bold>4 Kıyafet</> daha\n  • <Bold>1.000 V-Papel</>\n  • 6 İfade\n  • 4 Kaplama\n  • 5 Toplama Aleti\n  • 1 Sadık Dost\n  • 6 Planör\n  • 7 Sırt Süsü\n  • 3 Dalış İzi\n  • 13 Sprey\n  • 2 Müzik Parçası\n  • 1 Oyuncak\n  • 23 Yükleme Ekranı\n  • ve çok daha fazlası!\nHepsini daha hızlı mı almak istiyorsun? V-Papel karşılığında istediğin zaman aşama açabilirsin!"
                        },
                        "displayAssetPath": "/Game/Catalog/DisplayAssets/DA_BR_Season10_BattlePassWithLevels.DA_BR_Season10_BattlePassWithLevels",
                        "itemGrants": []
                    },
                    {
                        "offerId": "AF1B7AC14A5F6A9ED255B88902120757",
                        "devName": "BR.Season10.SingleTier.01",
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
                        "title": {
                            "de": "Battle Pass-Stufe",
                            "ru": "Уровень боевого пропуска",
                            "ko": "배틀패스 티어",
                            "zh-hant": "英雄季卡戰階",
                            "pt-br": "Categoria de Passe de Batalha",
                            "en": "Battle Pass Tier",
                            "it": "Livello Pass battaglia",
                            "fr": "Palier du Passe de combat",
                            "zh-cn": "英雄季卡战阶",
                            "es": "Nivel del pase de batalla",
                            "ar": "Battle Pass Tier",
                            "ja": "バトルパスティア",
                            "pl": "Stopień karnetu bojowego",
                            "es-419": "Nivel de pase de batalla",
                            "tr": "Savaş Bileti Aşaması"
                        },
                        "shortDescription": "",
                        "description": {
                            "de": "Hol dir jetzt tolle Belohnungen!",
                            "ru": "Получите отличные награды!",
                            "ko": "지금 푸짐한 보상을 받아보세요!",
                            "zh-hant": "現在獲得豐厚獎勵！",
                            "pt-br": "Ganhe recompensas ótimas agora!",
                            "en": "Get great rewards now!",
                            "it": "Ricevi subito magnifiche ricompense!",
                            "fr": "Obtenez de grandes récompenses !",
                            "zh-cn": "现在获得丰厚奖励！",
                            "es": "¡Consigue recompensas increíbles!",
                            "ar": "Get great rewards now!",
                            "ja": "ステキな報酬を今すぐゲット！",
                            "pl": "Zgarnij świetne nagrody już teraz!",
                            "es-419": "¡Consigue grandes recompensas ahora!",
                            "tr": "Harika ödülleri kap!"
                        },
                        "displayAssetPath": "",
                        "itemGrants": []
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