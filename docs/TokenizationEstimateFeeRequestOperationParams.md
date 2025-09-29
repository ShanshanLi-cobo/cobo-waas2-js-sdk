# CoboWaas2.TokenizationEstimateFeeRequestOperationParams

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chain_id** | **String** | The chain ID where the token will be issued. | 
**source** | [**TokenizationTokenOperationSource**](TokenizationTokenOperationSource.md) |  | 
**token_params** | [**TokenizationIssueTokenParamsTokenParams**](TokenizationIssueTokenParamsTokenParams.md) |  | 
**operation_type** | [**TokenizationOperationType**](TokenizationOperationType.md) |  | 
**request_id** | **String** | The request ID that is used to track a transaction request. The request ID is provided by you and must be unique within your organization. | [optional] 
**mints** | [**[TokenizationMintTokenParamsMintsInner]**](TokenizationMintTokenParamsMintsInner.md) | Details for each token mint, including amount and address to mint to. | 
**token_id** | **String** | The ID of the token. | 
**burns** | [**[TokenizationBurnTokenParamsBurnsInner]**](TokenizationBurnTokenParamsBurnsInner.md) | Details for each token burn, including amount and address to burn from. | 
**action** | [**TokenizationPermissionAction**](TokenizationPermissionAction.md) |  | 
**addresses** | [**[TokenizationUpdateBlocklistAddressesParamsAddressesInner]**](TokenizationUpdateBlocklistAddressesParamsAddressesInner.md) | A list of addresses to manage. For &#39;add&#39; operations, notes can be provided. For &#39;remove&#39; operations, notes are ignored. | 
**activation** | **Boolean** | Whether to activate the allowlist feature for the token. | 
**data** | [**TokenizationContractCallParamsData**](TokenizationContractCallParamsData.md) |  | [optional] 
**address** | **String** | The address to manage permissions for. | 
**permissions** | [**[TokenizationTokenPermissionType]**](TokenizationTokenPermissionType.md) | The list of permissions to operate on. | 


