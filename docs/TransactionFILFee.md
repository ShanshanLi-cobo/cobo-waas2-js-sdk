# CoboWaas2.TransactionFILFee

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gas_base** | **String** | This is the minimum fee required to include a transaction in a block. It is determined by the network&#39;s congestion level, which adjusts to maintain a target block utilization rate. The base fee is burned, reducing the total supply of Filecoin over time. | [optional] 
**gas_premium** | **String** | An optional additional fee that users can include to prioritize their transactions over others. It acts like a tip to incentivize miners to select and include your transaction over transactions with only the base fee. | [optional] 
**gas_fee_cap** | **String** | The gas_fee_cap is a user-defined limit on how much they are willing to pay per unit of gas. | [optional] 
**gas_limit** | **String** | This defines the maximum amount of computational effort that a transaction is allowed to consume. It&#39;s a way to cap the resources that a transaction can use, ensuring it doesn&#39;t consume excessive network resources. | [optional] 
**fee_type** | [**FeeType**](FeeType.md) |  | 
**token_id** | **String** | The token ID of the transaction fee. | [optional] 
**fee_used** | **String** | The transaction fee. | [optional] 
**estimated_fee_used** | **String** | The estimated transaction fee. | [optional] 
**gas_used** | **String** | The gas units used in the transaction. | [optional] 


