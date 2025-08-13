# CoboWaas2.SettlementInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchant_id** | **String** | The merchant ID. For developer balance, this field will be empty. | [optional] 
**token_id** | **String** | The ID of the cryptocurrency. | [optional] 
**available_amount** | **String** | This field is no longer in use and can be ignored. | 
**available_currency_balance** | **String** | This field is no longer in use and can be ignored. | [optional] 
**pending_amount** | **String** | This field is no longer in use and can be ignored. | [optional] 
**pending_currency_balance** | **String** | This field is no longer in use and can be ignored. | [optional] 
**settled_amount** | **String** | The amount already settled, in the specified cryptocurrency. | [optional] 
**available_balance** | **String** | The balance available for settlement or refund, in the specified cryptocurrency. | [optional] 
**total_balance** | **String** |  The total unsettled balance in the specified cryptocurrency, including: - Available balance that can be settled immediately - Amounts below the sweep threshold that require forced sweep before settlement  | [optional] 
**acquiring_type** | [**AcquiringType**](AcquiringType.md) |  | [optional] 
**created_timestamp** | **Number** | The creation time of the settlement, represented as a UNIX timestamp in seconds. | [optional] 
**updated_timestamp** | **Number** | The last update time of the settlement, represented as a UNIX timestamp in seconds. | [optional] 


