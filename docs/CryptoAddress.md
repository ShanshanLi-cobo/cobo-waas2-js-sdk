# CoboWaas2.CryptoAddress

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token_id** | **String** | The token identifier (e.g., ETH_USDT, TRON_USDT) that this address is associated with. | 
**crypto_address_id** | **String** | Unique identifier for the pre-approved crypto address, used to reference the address securely in requests. This ID is returned by the system and should be used instead of the raw blockchain address in API calls. | 
**address** | **String** | The actual blockchain address to which funds will be transferred. This is for display purposes only; external clients should always use address_id to refer to the address in secure operations. | 
**label** | **String** | A human-readable label or alias for the crypto address, set by the merchant or platform operator. This field is optional and intended to help distinguish addresses by usage or purpose (e.g., \&quot;Main Payout Wallet\&quot;, \&quot;Cold Wallet\&quot;). | [optional] 
**created_timestamp** | **Number** | The created time of the crypto address, represented as a UNIX timestamp in seconds. | [optional] 
**updated_timestamp** | **Number** | The updated time of the crypto address, represented as a UNIX timestamp in seconds. | [optional] 


