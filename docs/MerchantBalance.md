# CoboWaas2.MerchantBalance

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchant_id** | **String** | The merchant ID. | 
**token_id** | **String** | The token ID, which is a unique identifier that specifies both the blockchain network and cryptocurrency token in the format &#x60;{CHAIN}_{TOKEN}&#x60;. | 
**acquiring_type** | [**AcquiringType**](AcquiringType.md) |  | 
**total_received_amount** | **String** | The total amount of the token that has been received by the merchant. | [optional] 
**settled_amount** | **String** | The total amount of the token that has been paid out from the merchant&#39;s balance. | [optional] 
**payout_amount** | **String** | The merchant payout amount. | [optional] 
**refunded_amount** | **String** | The total amount of the token that has been refunded from the merchant&#39;s balance. | [optional] 
**total_balance** | **String** |  The current balance of this token available to the merchant for payouts or refunds.  &#x60;total_balance&#x60; &#x3D; &#x60;total_received_amount&#x60; - &#x60;settled_amount&#x60; - &#x60;refunded_amount&#x60;  For more information, please refer to [Funds allocation and balances](https://www.cobo.com/payments/en/guides/amounts-and-balances)  | [optional] 
**available_balance** | **String** | The merchant available balance. | [optional] 
**locked_balance** | **String** | The merchant locked balance. | [optional] 


