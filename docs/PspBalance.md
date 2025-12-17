# CoboWaas2.PspBalance

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token_id** | **String** | The token ID, which is a unique identifier that specifies both the blockchain network and cryptocurrency token in the format &#x60;{CHAIN}_{TOKEN}&#x60;. | 
**developer_fee_amount** | **String** | The total amount of the token that has been received as developer fee. | [optional] 
**settled_amount** | **String** | The total amount of the token that has been paid out from the developer&#39;s balance. | [optional] 
**payout_amount** | **String** | The psp payout amount. | [optional] 
**refunded_amount** | **String** | The total amount of the token that has been refunded from the developer&#39;s balance. | [optional] 
**total_balance** | **String** |  The total balance of the token available for payout or refund for the developer.  &#x60;total_balance&#x60; &#x3D; &#x60;developer_fee_amount&#x60; - &#x60;settled_amount&#x60; - &#x60;refunded_amount&#x60;  For more information, please refer to [Funds allocation and balances](https://www.cobo.com/payments/en/guides/amounts-and-balances)  | [optional] 
**available_balance** | **String** | The psp available balance. | [optional] 
**locked_balance** | **String** | The psp locked balance. | [optional] 


