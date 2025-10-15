# CoboWaas2.CreateMerchantRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The merchant name. | 
**wallet_id** | **String** | The ID of the wallet linked to the merchant. | [optional] 
**developer_fee_rate** | **String** | The developer fee rate applied to this merchant. Expressed as a string in decimal format where \&quot;0.1\&quot; represents 10%. This fee is deducted from the payment amount and only applies to top-up transactions. If you are a merchant (directly serving the payer), you do not need to configure the developer fee rate. | [optional] 
**wallet_setup** | [**WalletSetup**](WalletSetup.md) |  | [optional] 


