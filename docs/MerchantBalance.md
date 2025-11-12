# CoboWaas2.MerchantBalance

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchant_id** | **String** | The merchant ID. | 
**token_id** | **String** | The token ID, which is a unique identifier that specifies both the blockchain network and cryptocurrency token in the format &#x60;{CHAIN}_{TOKEN}&#x60;. | 
**acquiring_type** | [**AcquiringType**](AcquiringType.md) |  | 
**total_received_amount** | **String** | The total amount of the token that has been received by the merchant. | [optional] 
**settled_amount** | **String** | The total amount of the token that has been paid out from the merchant&#39;s balance. | [optional] 
**refunded_amount** | **String** | The total amount of the token that has been refunded from the merchant&#39;s balance. | [optional] 
**total_balance** | **String** |  The total balance of the token available for payout or refund for the merchant.  &#x60;total_balance&#x60; &#x3D; &#x60;total_received_amount&#x60; - &#x60;settled_amount&#x60; - &#x60;refunded_amount&#x60;  For more information, please refer to [Funds allocation and balances](https://www.cobo.com/developers/v2/payments/amounts-and-balances)  | [optional] 
**available_balance** | **String** | This field has been deprecated. | [optional] 


