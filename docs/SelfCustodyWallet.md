# CoboWaas2.SelfCustodyWallet

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_wallet_type** | [**DestinationWalletType**](DestinationWalletType.md) |  | 
**self_custody_wallet_challenge** | **String** | The message obtained from the &#x60;Retrieve transaction limitations&#x60; operation. This message is used to verify wallet ownership through signing. | 
**self_custody_wallet_address** | **String** | The address of the self-custody wallet. | 
**self_custody_wallet_sign** | **String** | The signature created by signing the challenge message with the wallet&#39;s private key. | 


