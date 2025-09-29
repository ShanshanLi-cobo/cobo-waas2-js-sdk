# CoboWaas2.PaymentSubscriptionPlanDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blockchain_plan_id** | **String** | The subscription plan id in blockchain. | [optional] 
**plan_id** | **String** | The plan id in cobo. | 
**developer_plan_id** | **String** | The developer plan id. | 
**period_type** | [**PaymentSubscriptionPeriodType**](PaymentSubscriptionPeriodType.md) |  | 
**periods** | **Number** |  | 
**interval** | **Number** |  | 
**amount** | **String** | The subscription plan amount.  - If &#x60;currency&#x60; is set, this represents the subscription amount in the specified fiat currency. - If &#x60;currency&#x60; isn&#39;t set, this represents the settlement amount in the specified cryptocurrency.  | 
**token_id** | **String** | The ID of the cryptocurrency you want to subscription. Supported values:  - USDC: &#x60;ETH_USDC&#x60;, &#x60;ARBITRUM_USDCOIN&#x60;, &#x60;BASE_USDC&#x60;, &#x60;MATIC_USDC2&#x60;, &#x60;BSC_USDC&#x60; - USDT: &#x60;ETH_USDT&#x60;, &#x60;ARBITRUM_USDT&#x60;, &#x60;BASE_USDT&#x60;, &#x60;MATIC_USDT&#x60;, &#x60;BSC_USDT&#x60;  | [optional] 
**currency** | **String** | The fiat currency for settling the cryptocurrency. Currently, only &#x60;USD&#x60; is supported. Specify this field when &#x60;payout_channel&#x60; is set to &#x60;OffRamp&#x60;. | [optional] 


