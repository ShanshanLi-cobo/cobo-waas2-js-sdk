# CoboWaas2.BabylonStakeExtra

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pool_type** | [**StakingPoolType**](StakingPoolType.md) |  | 
**finality_provider_public_key** | **String** | The public key of the finality provider. | [optional] 
**finality_provider_public_keys** | **[String]** | The public keys of the finality providers(each key for a BSN chain). | [optional] 
**stake_block_time** | **Number** | The number of blocks that need to be processed before the locked tokens are unlocked and become accessible. | [optional] 
**auto_broadcast** | **Boolean** | Whether to automatically broadcast the transaction. The default value is &#x60;true&#x60;.  - &#x60;true&#x60;: Automatically broadcast the transaction. - &#x60;false&#x60;: The transaction will not be submitted to the blockchain automatically. You can call [Broadcast signed transactions](https://www.cobo.com/developers/v2/api-references/transactions/broadcast-signed-transactions) to broadcast the transaction to the blockchain, or retrieve the signed raw transaction data &#x60;raw_tx&#x60; by calling [Get transaction information](https://www.cobo.com/developers/v2/api-references/transactions/get-transaction-information) and broadcast it yourself.  | [optional] 
**babylon_address** | [**StakingSource**](StakingSource.md) |  | [optional] 
**original_staking_id** | **String** | The original staking ID to expand. Only set this when you want to expand existing staking. | [optional] 


