# CoboWaas2.MerchantBalance

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchant_id** | **String** | The merchant ID. | 
**token_id** | **String** | The token ID, which is a unique identifier that specifies both the blockchain network and cryptocurrency token in the format &#x60;{CHAIN}_{TOKEN}&#x60;. | 
**acquiring_type** | [**AcquiringType**](AcquiringType.md) |  | 
**total_received_amount** | **String** | The total amount of the token that has been received by the merchant. | [optional] 
**settled_amount** | **String** | The total amount of the token that has been settled from the merchant&#39;s balance. | [optional] 
**refunded_amount** | **String** | The total amount of the token that has been refunded from the merchant&#39;s balance. | [optional] 
**total_balance** | **String** | The total balance of the token for the merchant. | [optional] 
**available_balance** | **String** | The balance available for settlement or refund, in the specified cryptocurrency. | [optional] 


