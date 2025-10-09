# CoboWaas2.FeeStationCheckFeeStationUsage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **String** | The request ID that is used to track a transaction request. The request ID is provided by you and must be unique within your organization. | 
**amount** | **String** | The amount of tokens to be transferred in this request. | 
**token_id** | **String** | The token ID of the transferred token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](https://www.cobo.com/developers/v2/api-references/wallets/list-enabled-tokens). | 
**estimated_fee_amount** | **String** | The estimated transaction fee required for this transfer, before applying any fee station rules. | 
**from_address** | **String** | The blockchain address that initiates the transfer. | 
**from_wallet_id** | **String** | The wallet ID. | 


