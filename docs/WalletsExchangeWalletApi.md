# CoboWaas2.WalletsExchangeWalletApi

All URIs are relative to *https://api.dev.cobo.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listAssetBalancesForExchangeWallet**](WalletsExchangeWalletApi.md#listAssetBalancesForExchangeWallet) | **GET** /wallets/{wallet_id}/exchanges/assets | List asset balances
[**listExchanges**](WalletsExchangeWalletApi.md#listExchanges) | **GET** /wallets/exchanges/settings | List supported exchanges
[**listSupportedAssetsForExchange**](WalletsExchangeWalletApi.md#listSupportedAssetsForExchange) | **GET** /wallets/exchanges/{exchange_id}/assets | List supported assets
[**listSupportedChainsForExchange**](WalletsExchangeWalletApi.md#listSupportedChainsForExchange) | **GET** /wallets/exchanges/{exchange_id}/assets/{asset_id}/chains | List supported chains



## listAssetBalancesForExchangeWallet

> ListAssetBalancesForExchangeWallet200Response listAssetBalancesForExchangeWallet(wallet_id, opts)

List asset balances

This operation retrieves the asset balances in a specified Exchange Wallet. You can filter the results by trading account type or asset ID. 

### Example

```javascript
const CoboWaas2 = require('@cobo/cobo-waas2');
// Initialize the API client
const apiClient = CoboWaas2.ApiClient.instance
// Select the development environment. To use the production environment, replace `Env.DEV` with `Env.PROD`
apiClient.setEnv(CoboWaas2.Env.DEV);
// Replace `<YOUR_PRIVATE_KEY>` with your private key
apiClient.setPrivateKey("<YOUR_PRIVATE_KEY>");
// Call the API
const apiInstance = new CoboWaas2.WalletsExchangeWalletApi();
const wallet_id = "f47ac10b-58cc-4372-a567-0e02b2c3d479";
const opts = {
  'trading_account_types': "Trading,Funding",
  'asset_ids': "USDT,USDC",
  'limit': 10,
  'before': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1",
  'after': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk"
};
apiInstance.listAssetBalancesForExchangeWallet(wallet_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wallet_id** | **String**| The wallet ID. | 
 **trading_account_types** | **String**| A list of trading account types, separated by comma. You can get the the supported trading account types of an exchange by calling [List supported exchanges](/v2/api-references/wallets--exchange-wallet/list-supported-exchanges). | [optional] 
 **asset_ids** | **String**| (This concept applies to Exchange Wallets only) A list of asset IDs, separated by comma. An asset ID is the unique identifier of the asset held within your linked exchange account. | [optional] 
 **limit** | **Number**| The maximum number of objects to return. For most operations, the value range is [1, 50]. | [optional] [default to 10]
 **before** | **String**| An object ID that serves as a starting point for retrieving data in reverse chronological order. For example, if you specify &#x60;before&#x60; as &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1&#x60;, the request will retrieve a list of data objects that end before the object with the object ID &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1&#x60;. You can set this parameter to the value of &#x60;pagination.before&#x60; in the response of the previous request.  - If you set both &#x60;after&#x60; and &#x60;before&#x60;, an error will occur.  - If you leave both &#x60;before&#x60; and &#x60;after&#x60; empty, the first page of data is returned.  - If you set &#x60;before&#x60; to &#x60;infinity&#x60;, the last page of data is returned.  | [optional] 
 **after** | **String**| An object ID that acts as a starting point for retrieving data in chronological order. For example, if you specify &#x60;after&#x60; as &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;, the request will retrieve a list of data objects that start after the object with the object ID &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;. You can set this parameter to the value of &#x60;pagination.after&#x60; in the response of the previous request.  - If you set both &#x60;after&#x60; and &#x60;before&#x60;, an error will occur.  - If you leave both &#x60;before&#x60; and &#x60;after&#x60; empty, the first page of data is returned.  | [optional] 

### Return type

[**ListAssetBalancesForExchangeWallet200Response**](ListAssetBalancesForExchangeWallet200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listExchanges

> [ListExchanges200ResponseInner] listExchanges()

List supported exchanges

This operation retrieves the information about the exchanges supported by Cobo&#39;s Exchange Wallets, including exchange IDs and trading account types.

### Example

```javascript
const CoboWaas2 = require('@cobo/cobo-waas2');
// Initialize the API client
const apiClient = CoboWaas2.ApiClient.instance
// Select the development environment. To use the production environment, replace `Env.DEV` with `Env.PROD`
apiClient.setEnv(CoboWaas2.Env.DEV);
// Replace `<YOUR_PRIVATE_KEY>` with your private key
apiClient.setPrivateKey("<YOUR_PRIVATE_KEY>");
// Call the API
const apiInstance = new CoboWaas2.WalletsExchangeWalletApi();
apiInstance.listExchanges().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[ListExchanges200ResponseInner]**](ListExchanges200ResponseInner.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSupportedAssetsForExchange

> ListSupportedAssetsForExchange200Response listSupportedAssetsForExchange(exchange_id, opts)

List supported assets

This operation retrieves all the assets supported by a specified exchange.

### Example

```javascript
const CoboWaas2 = require('@cobo/cobo-waas2');
// Initialize the API client
const apiClient = CoboWaas2.ApiClient.instance
// Select the development environment. To use the production environment, replace `Env.DEV` with `Env.PROD`
apiClient.setEnv(CoboWaas2.Env.DEV);
// Replace `<YOUR_PRIVATE_KEY>` with your private key
apiClient.setPrivateKey("<YOUR_PRIVATE_KEY>");
// Call the API
const apiInstance = new CoboWaas2.WalletsExchangeWalletApi();
const exchange_id = new CoboWaas2.ExchangeId();
const opts = {
  'limit': 10,
  'before': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1",
  'after': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk"
};
apiInstance.listSupportedAssetsForExchange(exchange_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exchange_id** | [**ExchangeId**](.md)| The ID of the exchange. Possible values include:   - &#x60;binance&#x60;: Binance.   - &#x60;okx&#x60;: OKX.   - &#x60;deribit&#x60;: Deribit.   - &#x60;bybit&#x60;: Bybit.   - &#x60;gate&#x60;: Gate.io   - &#x60;bitget&#39;&#x60;: Bitget  | 
 **limit** | **Number**| The maximum number of objects to return. For most operations, the value range is [1, 50]. | [optional] [default to 10]
 **before** | **String**| An object ID that serves as a starting point for retrieving data in reverse chronological order. For example, if you specify &#x60;before&#x60; as &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1&#x60;, the request will retrieve a list of data objects that end before the object with the object ID &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1&#x60;. You can set this parameter to the value of &#x60;pagination.before&#x60; in the response of the previous request.  - If you set both &#x60;after&#x60; and &#x60;before&#x60;, an error will occur.  - If you leave both &#x60;before&#x60; and &#x60;after&#x60; empty, the first page of data is returned.  - If you set &#x60;before&#x60; to &#x60;infinity&#x60;, the last page of data is returned.  | [optional] 
 **after** | **String**| An object ID that acts as a starting point for retrieving data in chronological order. For example, if you specify &#x60;after&#x60; as &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;, the request will retrieve a list of data objects that start after the object with the object ID &#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;. You can set this parameter to the value of &#x60;pagination.after&#x60; in the response of the previous request.  - If you set both &#x60;after&#x60; and &#x60;before&#x60;, an error will occur.  - If you leave both &#x60;before&#x60; and &#x60;after&#x60; empty, the first page of data is returned.  | [optional] 

### Return type

[**ListSupportedAssetsForExchange200Response**](ListSupportedAssetsForExchange200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSupportedChainsForExchange

> [ChainInfo] listSupportedChainsForExchange(exchange_id, asset_id)

List supported chains

This operation retrieves all the chains supported by a specified exchange for a given asset.   You can use this operation to confirm whether you can transfer an asset from or to your Exchange Wallet when using a specific chain. 

### Example

```javascript
const CoboWaas2 = require('@cobo/cobo-waas2');
// Initialize the API client
const apiClient = CoboWaas2.ApiClient.instance
// Select the development environment. To use the production environment, replace `Env.DEV` with `Env.PROD`
apiClient.setEnv(CoboWaas2.Env.DEV);
// Replace `<YOUR_PRIVATE_KEY>` with your private key
apiClient.setPrivateKey("<YOUR_PRIVATE_KEY>");
// Call the API
const apiInstance = new CoboWaas2.WalletsExchangeWalletApi();
const exchange_id = new CoboWaas2.ExchangeId();
const asset_id = "USDT";
apiInstance.listSupportedChainsForExchange(exchange_id, asset_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exchange_id** | [**ExchangeId**](.md)| The ID of the exchange. Possible values include:   - &#x60;binance&#x60;: Binance.   - &#x60;okx&#x60;: OKX.   - &#x60;deribit&#x60;: Deribit.   - &#x60;bybit&#x60;: Bybit.   - &#x60;gate&#x60;: Gate.io   - &#x60;bitget&#39;&#x60;: Bitget  | 
 **asset_id** | **String**| (This concept applies to Exchange Wallets only) The asset ID. An asset ID is the unique identifier of the asset held within your linked exchange account. You can get the ID of the assets supported by an exchanges by calling [List supported assets](/v2/api-references/wallets--exchange-wallet/list-supported-assets). | 

### Return type

[**[ChainInfo]**](ChainInfo.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
