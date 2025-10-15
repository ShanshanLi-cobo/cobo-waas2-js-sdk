# CoboWaas2.SwapQuote

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quote_id** | **String** | The unique identifier of the swap quote. | 
**pay_token_id** | **String** | The ID of the token to pay. | 
**pay_amount** | **String** | The amount of the token to pay. | 
**receive_token_id** | **String** | The ID of the token to receive. | 
**receive_amount** | **String** | The amount of the token to receive. | 
**fee_token_id** | **String** | The ID of the token for the service fee. | 
**fee_amount** | **String** | The amount of the token for the service fee. | 
**min_receive_amount** | **String** | The minimum amount of the token to receive if &#x60;pay_amount&#x60; is specified. | [optional] 
**max_pay_amount** | **String** | The maximum amount of the token to pay if &#x60;receive_amount&#x60; is specified. | [optional] 
**quote_expired_timestamp** | **Number** | The time when the swap quote expires, in Unix timestamp format, measured in milliseconds. | 


