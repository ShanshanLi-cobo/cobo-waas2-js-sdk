# CoboWaas2.CreateSettlementRequestRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **String** | The request ID that is used to track a settlement request. The request ID is provided by you and must be unique. | 
**acquiring_type** | [**AcquiringType**](AcquiringType.md) |  | [optional] 
**payout_channel** | [**PayoutChannel**](PayoutChannel.md) |  | [optional] 
**settlement_type** | [**SettlementType**](SettlementType.md) |  | [optional] 
**settlements** | [**[CreateSettlement]**](CreateSettlement.md) |  | 
**bank_account_id** | **String** | ｜ Only used in OffRamp payout channel. The ID of the bank account where the settled funds will be deposited. | [optional] 
**currency** | **String** | The fiat currency for the settlement request. | [optional] 
**remark** | **String** | The remark for the settlement request. | [optional] 


