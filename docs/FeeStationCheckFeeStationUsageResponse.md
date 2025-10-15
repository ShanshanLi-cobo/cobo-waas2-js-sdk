# CoboWaas2.FeeStationCheckFeeStationUsageResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token_id** | **String** | The token used to pay the gas fee for this specific transaction. You can retrieve the IDs of all supported tokens by calling [List enabled tokens](https://www.cobo.com/developers/v2/api-references/wallets/list-enabled-tokens). | 
**gas_station_type** | [**FeeStationGasStationType**](FeeStationGasStationType.md) |  | 
**is_fee_station_applicable** | **Boolean** | Indicates whether Fee Station is applied for this transfer request. | 
**is_balance_sufficient** | **Boolean** | If Fee Station is used, indicates whether its balance is sufficient to cover the required gas fee. | 
**balance** | **String** | The current token balance available in Fee Station. | 
**total_fee_amount** | **String** | The total gas amount required for this transfer request. | 
**is_sponsor_applicable** | **Boolean** | Indicates whether USDT (U) sponsorship is applied when Fee Station balance is insufficient. | 
**sponsored_fee_amount** | **String** | The amount of gas fee sponsored by USDT (U) when applicable. | 


