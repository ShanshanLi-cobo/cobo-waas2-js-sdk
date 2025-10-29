# CoboWaas2.Order

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order_id** | **String** | The order ID. | 
**merchant_id** | **String** | The merchant ID. | [optional] 
**token_id** | **String** |  The ID of the cryptocurrency used for payment. Supported tokens:  - USDC: &#x60;ETH_USDC&#x60;, &#x60;ARBITRUM_USDCOIN&#x60;, &#x60;SOL_USDC&#x60;, &#x60;BASE_USDC&#x60;, &#x60;MATIC_USDC2&#x60;, &#x60;BSC_USDC&#x60; - USDT: &#x60;TRON_USDT&#x60;, &#x60;ETH_USDT&#x60;, &#x60;ARBITRUM_USDT&#x60;, &#x60;SOL_USDT&#x60;, &#x60;BASE_USDT&#x60;, &#x60;MATIC_USDT&#x60;, &#x60;BSC_USDT&#x60;  | 
**chain_id** | **String** |  The ID of the blockchain network where the payment transaction should be made. Supported chains:  - USDC: &#x60;ETH&#x60;, &#x60;ARBITRUM&#x60;, &#x60;SOL&#x60;, &#x60;BASE&#x60;, &#x60;MATIC&#x60;, &#x60;BSC&#x60; - USDT: &#x60;TRON&#x60;, &#x60;ETH&#x60;, &#x60;ARBITRUM&#x60;, &#x60;SOL&#x60;, &#x60;BASE&#x60;, &#x60;MATIC&#x60;, &#x60;BSC&#x60;  | 
**payable_amount** | **String** | The cryptocurrency amount to be paid for this order. | 
**receive_address** | **String** | The recipient wallet address to be used for the payment transaction. | 
**currency** | **String** | The fiat currency of the order. | 
**order_amount** | **String** | The base amount of the order in fiat currency, excluding the developer fee (specified in &#x60;fee_amount&#x60;). | 
**fee_amount** | **String** | The developer fee for the order in fiat currency. It is added to the base amount (&#x60;order_amount&#x60;) to determine the final charge. | 
**exchange_rate** | **String** | The exchange rate between a currency pair. Expressed as the amount of fiat currency per one unit of cryptocurrency. For example, if the cryptocurrency is USDT and the fiat currency is USD, a rate of \&quot;0.99\&quot; means 1 USDT &#x3D; 0.99 USD. | 
**expired_at** | **Number** | The expiration time of the pay-in order, represented as a UNIX timestamp in seconds. | [optional] 
**merchant_order_code** | **String** | A unique reference code assigned by the merchant to identify this order in their system. | [optional] 
**psp_order_code** | **String** | A unique reference code assigned by the developer to identify this order in their system. | 
**status** | [**OrderStatus**](OrderStatus.md) |  | 
**received_token_amount** | **String** | The total cryptocurrency amount received for this order. Updates until the expiration time. Precision matches the token standard (e.g., 6 decimals for USDT). | 
**created_timestamp** | **Number** | The creation time of the order, represented as a UNIX timestamp in seconds. | [optional] 
**updated_timestamp** | **Number** | The last update time of the order, represented as a UNIX timestamp in seconds. | [optional] 
**transactions** | [**[PaymentTransaction]**](PaymentTransaction.md) | An array of transactions associated with this pay-in order. Each transaction represents a separate blockchain operation related to the pay-in process. | [optional] 
**settlement_status** | [**SettleStatus**](SettleStatus.md) |  | [optional] 
**amount_tolerance** | **String** | Allowed amount deviation. | [optional] 


