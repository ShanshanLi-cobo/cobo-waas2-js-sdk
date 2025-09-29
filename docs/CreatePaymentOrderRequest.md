# CoboWaas2.CreatePaymentOrderRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchant_id** | **String** | The merchant ID. | 
**token_id** | **String** | The ID of the cryptocurrency used for payment. Supported values:    - USDC: &#x60;ETH_USDC&#x60;, &#x60;ARBITRUM_USDC&#x60;, &#x60;SOL_USDC&#x60;, &#x60;BASE_USDC&#x60;, &#x60;MATIC_USDC&#x60;, &#x60;BSC_USDC&#x60;   - USDT: &#x60;TRON_USDT&#x60;, &#x60;ETH_USDT&#x60;, &#x60;ARBITRUM_USDT&#x60;, &#x60;SOL_USDT&#x60;, &#x60;BASE_USDT&#x60;, &#x60;MATIC_USDT&#x60;, &#x60;BSC_USDT&#x60;  | 
**currency** | **String** | The fiat currency of the order. | [optional] [default to &#39;&#39;]
**order_amount** | **String** | The base amount of the order in fiat currency, excluding the developer fee (specified in &#x60;fee_amount&#x60;). Values must be greater than &#x60;0&#x60; and contain two decimal places. | 
**fee_amount** | **String** | The developer fee for the order in fiat currency. It is added to the base amount (&#x60;order_amount&#x60;) to determine the final charge. For example, if order_amount is \&quot;100.00\&quot; and fee_amount is \&quot;2.00\&quot;, the customer will be charged \&quot;102.00\&quot; in total, with \&quot;100.00\&quot; being settled to the merchant and \&quot;2.00\&quot; settled to the developer. Values must be greater than 0 and contain two decimal places. | 
**merchant_order_code** | **String** | A unique reference code assigned by the merchant to identify this order in their system. | [optional] 
**psp_order_code** | **String** | A unique reference code assigned by the developer to identify this order in their system. | 
**expired_in** | **Number** | The pay-in order will expire after approximately a certain number of seconds: - The order status becomes final and cannot be changed - The &#x60;received_token_amount&#x60; field will no longer be updated - Funds received after expiration will be categorized as late payments and can only be settled from the developer balance. - A late payment will trigger a &#x60;transactionLate&#x60; webhook event.  | [optional] 
**use_dedicated_address** | **Boolean** | Indicates whether to allocate a dedicated address for this order.  If false, a shared address from the address pool will be used.  | [optional] 


