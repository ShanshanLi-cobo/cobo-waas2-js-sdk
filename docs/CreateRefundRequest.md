# CoboWaas2.CreateRefundRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **String** | The request ID that is used to track a refund request. The request ID is provided by you and must be unique. | 
**merchant_id** | **String** | The merchant ID. | [optional] 
**payable_amount** | **String** | The amount to refund in cryptocurrency. The amount must be a positive number and can have up to two decimal places | 
**to_address** | **String** | The address where the refunded cryptocurrency will be sent. | [optional] 
**token_id** | **String** | The ID of the cryptocurrency used for refund. Supported values:    - USDC: &#x60;ETH_USDC&#x60;, &#x60;ARBITRUM_USDCOIN&#x60;, &#x60;SOL_USDC&#x60;, &#x60;BASE_USDC&#x60;, &#x60;MATIC_USDC2&#x60;, &#x60;BSC_USDC&#x60;   - USDT: &#x60;TRON_USDT&#x60;, &#x60;ETH_USDT&#x60;, &#x60;ARBITRUM_USDT&#x60;, &#x60;SOL_USDT&#x60;, &#x60;BASE_USDT&#x60;, &#x60;MATIC_USDT&#x60;, &#x60;BSC_USDT&#x60;  | 
**refund_type** | [**RefundType**](RefundType.md) |  | 
**order_id** | **String** | The ID of the original pay-in order associated with this refund. Use this to track refunds against specific payments. | [optional] 
**charge_merchant_fee** | **Boolean** | Whether to charge developer fee to the merchant. This field is only valid when &#x60;refund_type&#x60; is &#x60;Merchant&#x60;. For more information, please refer to [Funds allocation and balances](https://www.cobo.com/developers/v2/payments/amounts-and-balances).     - &#x60;true&#x60;: The fee amount (specified in &#x60;merchant_fee_amount&#x60;) will be deducted from the merchant&#39;s balance and added to the developer&#39;s balance    - &#x60;false&#x60;: The merchant is not charged any developer fee  When enabled, ensure both &#x60;merchant_fee_amount&#x60; and &#x60;merchant_fee_token_id&#x60; are properly specified.  | [optional] 
**merchant_fee_amount** | **String** | The developer fee amount to charge the merchant, denominated in the cryptocurrency specified by &#x60;merchant_fee_token_id&#x60;. This field is only valid when &#x60;refund_type&#x60; is &#x60;Merchant&#x60;. For more information, please refer to [Funds allocation and balances](https://www.cobo.com/developers/v2/payments/amounts-and-balances).  This field is required when &#x60;charge_merchant_fee&#x60; is &#x60;true&#x60;. Must be:   - A positive integer with up to two decimal places.   - Less than the refund amount  | [optional] 
**merchant_fee_token_id** | **String** | The ID of the cryptocurrency used for the developer fee. It must be the same as &#x60;token_id&#x60;. Supported values:   - USDC: &#x60;ETH_USDC&#x60;, &#x60;ARBITRUM_USDCOIN&#x60;, &#x60;SOL_USDC&#x60;, &#x60;BASE_USDC&#x60;, &#x60;MATIC_USDC2&#x60;, &#x60;BSC_USDC&#x60;   - USDT: &#x60;TRON_USDT&#x60;, &#x60;ETH_USDT&#x60;, &#x60;ARBITRUM_USDT&#x60;, &#x60;SOL_USDT&#x60;, &#x60;BASE_USDT&#x60;, &#x60;MATIC_USDT&#x60;, &#x60;BSC_USDT&#x60;  | [optional] 


