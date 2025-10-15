# CoboWaas2.PaymentApi

All URIs are relative to *https://api.dev.cobo.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelRefundById**](PaymentApi.md#cancelRefundById) | **PUT** /payments/refunds/{refund_id}/cancel | Cancel refund order
[**createCryptoAddress**](PaymentApi.md#createCryptoAddress) | **POST** /payments/crypto_addresses | Create crypto address
[**createForcedSweepRequest**](PaymentApi.md#createForcedSweepRequest) | **POST** /payments/force_sweep_requests | Create forced sweep
[**createMerchant**](PaymentApi.md#createMerchant) | **POST** /payments/merchants | Create merchant
[**createPaymentOrder**](PaymentApi.md#createPaymentOrder) | **POST** /payments/orders | Create pay-in order
[**createRefund**](PaymentApi.md#createRefund) | **POST** /payments/refunds | Create refund order
[**createSettlementRequest**](PaymentApi.md#createSettlementRequest) | **POST** /payments/settlement_requests | Create settlement request
[**deleteCryptoAddress**](PaymentApi.md#deleteCryptoAddress) | **POST** /payments/crypto_addresses/{crypto_address_id}/delete | Delete crypto address
[**getExchangeRate**](PaymentApi.md#getExchangeRate) | **GET** /payments/exchange_rates/{token_id}/{currency} | Get exchange rate
[**getPayerBalanceByAddress**](PaymentApi.md#getPayerBalanceByAddress) | **GET** /payments/balance/payer/address | Get payer balance
[**getPaymentOrderDetailById**](PaymentApi.md#getPaymentOrderDetailById) | **GET** /payments/orders/{order_id} | Get pay-in order information
[**getPspBalance**](PaymentApi.md#getPspBalance) | **GET** /payments/balance/psp | Get developer balance
[**getRefundDetailById**](PaymentApi.md#getRefundDetailById) | **GET** /payments/refunds/{refund_id} | Get refund order information
[**getRefunds**](PaymentApi.md#getRefunds) | **GET** /payments/refunds | List all refund orders
[**getSettlementById**](PaymentApi.md#getSettlementById) | **GET** /payments/settlement_requests/{settlement_request_id} | Get settlement request information
[**getSettlementInfoByIds**](PaymentApi.md#getSettlementInfoByIds) | **GET** /payments/settlement_info | Get withdrawable balances
[**getTopUpAddress**](PaymentApi.md#getTopUpAddress) | **GET** /payments/topup/address | Get top-up address
[**listBankAccounts**](PaymentApi.md#listBankAccounts) | **GET** /payments/bank_accounts | List all bank accounts
[**listCryptoAddresses**](PaymentApi.md#listCryptoAddresses) | **GET** /payments/crypto_addresses | List crypto addresses
[**listForcedSweepRequests**](PaymentApi.md#listForcedSweepRequests) | **GET** /payments/force_sweep_requests | List forced sweeps
[**listMerchantBalances**](PaymentApi.md#listMerchantBalances) | **GET** /payments/balance/merchants | List merchant balances
[**listMerchants**](PaymentApi.md#listMerchants) | **GET** /payments/merchants | List all merchants
[**listPaymentOrders**](PaymentApi.md#listPaymentOrders) | **GET** /payments/orders | List all pay-in orders
[**listPaymentSupportedTokens**](PaymentApi.md#listPaymentSupportedTokens) | **GET** /payments/supported_tokens | List all supported tokens
[**listPaymentWalletBalances**](PaymentApi.md#listPaymentWalletBalances) | **GET** /payments/balance/payment_wallets | List payment wallet balances
[**listSettlementDetails**](PaymentApi.md#listSettlementDetails) | **GET** /payments/settlement_details | List all settlement details
[**listSettlementRequests**](PaymentApi.md#listSettlementRequests) | **GET** /payments/settlement_requests | List all settlement requests
[**listTopUpPayerAccounts**](PaymentApi.md#listTopUpPayerAccounts) | **GET** /payments/topup/payer_accounts | List top-up payer accounts
[**listTopUpPayers**](PaymentApi.md#listTopUpPayers) | **GET** /payments/topup/payers | List payers
[**paymentEstimateFee**](PaymentApi.md#paymentEstimateFee) | **POST** /payments/estimate_fee | Payment estimate fee
[**updateBankAccountById**](PaymentApi.md#updateBankAccountById) | **PUT** /payments/bank_accounts/{bank_account_id} | Update bank account
[**updateMerchantById**](PaymentApi.md#updateMerchantById) | **PUT** /payments/merchants/{merchant_id} | Update merchant
[**updatePaymentOrder**](PaymentApi.md#updatePaymentOrder) | **PUT** /payments/orders/{order_id} | Update pay-in order
[**updateRefundById**](PaymentApi.md#updateRefundById) | **PUT** /payments/refunds/{refund_id} | Update refund order
[**updateTopUpAddress**](PaymentApi.md#updateTopUpAddress) | **PUT** /payments/topup/address | Update top-up address



## cancelRefundById

> Refund cancelRefundById(refund_id)

Cancel refund order

This operation cancels a specified refund order. You can only cancel refund orders that have not been processed yet. 

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
const apiInstance = new CoboWaas2.PaymentApi();
const refund_id = "R20250304-M1001-1001";
apiInstance.cancelRefundById(refund_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **refund_id** | **String**| The refund order ID. | 

### Return type

[**Refund**](Refund.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## createCryptoAddress

> CryptoAddress createCryptoAddress(opts)

Create crypto address

This operation registers a crypto address for crypto payouts.  The registered address can later be referenced by its ID when creating settlement requests. 

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
const apiInstance = new CoboWaas2.PaymentApi();
const opts = {
  'CreateCryptoAddressRequest': new CoboWaas2.CreateCryptoAddressRequest()
};
apiInstance.createCryptoAddress(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **CreateCryptoAddressRequest** | [**CreateCryptoAddressRequest**](CreateCryptoAddressRequest.md)| The request body to register a crypto address. | [optional] 

### Return type

[**CryptoAddress**](CryptoAddress.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createForcedSweepRequest

> ForcedSweep createForcedSweepRequest(opts)

Create forced sweep

&lt;Warning&gt;This operation has been deprecated.&lt;/Warning&gt; This operation creates a forced sweep to transfer funds from addresses within a specified wallet to its designated sweep-to address. 

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
const apiInstance = new CoboWaas2.PaymentApi();
const opts = {
  'ForcedSweepRequest': new CoboWaas2.ForcedSweepRequest()
};
apiInstance.createForcedSweepRequest(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ForcedSweepRequest** | [**ForcedSweepRequest**](ForcedSweepRequest.md)| The request body for forced sweep. | [optional] 

### Return type

[**ForcedSweep**](ForcedSweep.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createMerchant

> Merchant createMerchant(opts)

Create merchant

This operation creates a merchant and links it to a specified wallet. Payments to the merchant will be deposited into the linked wallet.  Upon successful creation, a merchant ID is generated and returned along with the merchant&#39;s information.  If you are a merchant (directly serving the payer), you only need to create one merchant and do not need to configure the developer fee rate. The developer fee rate only applies to platforms such as payment service providers (PSPs) that charge fees to their downstream merchants. 

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
const apiInstance = new CoboWaas2.PaymentApi();
const opts = {
  'CreateMerchantRequest': new CoboWaas2.CreateMerchantRequest()
};
apiInstance.createMerchant(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **CreateMerchantRequest** | [**CreateMerchantRequest**](CreateMerchantRequest.md)| The request body to create a merchant. | [optional] 

### Return type

[**Merchant**](Merchant.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createPaymentOrder

> Order createPaymentOrder(opts)

Create pay-in order

This operation creates a pay-in order. 

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
const apiInstance = new CoboWaas2.PaymentApi();
const opts = {
  'CreatePaymentOrderRequest': new CoboWaas2.CreatePaymentOrderRequest()
};
apiInstance.createPaymentOrder(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **CreatePaymentOrderRequest** | [**CreatePaymentOrderRequest**](CreatePaymentOrderRequest.md)| The request body to create a pay-in order. | [optional] 

### Return type

[**Order**](Order.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createRefund

> Refund createRefund(opts)

Create refund order

This operation creates a refund order to return cryptocurrency to a specified address.   When creating a refund order, you can optionally link it to an existing pay-in order for tracking and reconciliation purposes. 

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
const apiInstance = new CoboWaas2.PaymentApi();
const opts = {
  'CreateRefundRequest': new CoboWaas2.CreateRefundRequest()
};
apiInstance.createRefund(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **CreateRefundRequest** | [**CreateRefundRequest**](CreateRefundRequest.md)| The request body to create a refund order. | [optional] 

### Return type

[**Refund**](Refund.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createSettlementRequest

> Settlement createSettlementRequest(opts)

Create settlement request

This operation creates a settlement request to withdraw available balances. 

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
const apiInstance = new CoboWaas2.PaymentApi();
const opts = {
  'CreateSettlementRequestRequest': new CoboWaas2.CreateSettlementRequestRequest()
};
apiInstance.createSettlementRequest(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **CreateSettlementRequestRequest** | [**CreateSettlementRequestRequest**](CreateSettlementRequestRequest.md)| The request body to create a settlement request. | [optional] 

### Return type

[**Settlement**](Settlement.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteCryptoAddress

> DeleteCryptoAddress201Response deleteCryptoAddress(crypto_address_id)

Delete crypto address

This operation unregisters a crypto address from being used for crypto withdrawals. 

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
const apiInstance = new CoboWaas2.PaymentApi();
const crypto_address_id = "addr_ethusdt_20250506T123456_ab12cd";
apiInstance.deleteCryptoAddress(crypto_address_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **crypto_address_id** | **String**| The crypto address ID. | 

### Return type

[**DeleteCryptoAddress201Response**](DeleteCryptoAddress201Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getExchangeRate

> GetExchangeRate200Response getExchangeRate(token_id, currency)

Get exchange rate

This operation retrieves the current exchange rate between a specified currency pair. 

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
const apiInstance = new CoboWaas2.PaymentApi();
const token_id = "ETH_USDT";
const currency = "USD";
apiInstance.getExchangeRate(token_id, currency).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token_id** | **String**| The token ID, which is a unique identifier that specifies both the blockchain network and cryptocurrency token in the format &#x60;{CHAIN}_{TOKEN}&#x60;. Supported values include:   - USDC: &#x60;ETH_USDC&#x60;, &#x60;ARBITRUM_USDCOIN&#x60;, &#x60;SOL_USDC&#x60;, &#x60;BASE_USDC&#x60;, &#x60;MATIC_USDC2&#x60;, &#x60;BSC_USDC&#x60;   - USDT: &#x60;TRON_USDT&#x60;, &#x60;ETH_USDT&#x60;, &#x60;ARBITRUM_USDT&#x60;, &#x60;SOL_USDT&#x60;, &#x60;BASE_USDT&#x60;, &#x60;MATIC_USDT&#x60;, &#x60;BSC_USDT&#x60;  | 
 **currency** | **String**| The fiat currency. Currently, only &#x60;USD&#x60; is supported. | [default to &#39;USD&#39;]

### Return type

[**GetExchangeRate200Response**](GetExchangeRate200Response.md)

### Authorization

[CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPayerBalanceByAddress

> [ReceivedAmountPerAddress] getPayerBalanceByAddress(payer_id, token_id, opts)

Get payer balance

This operation retrieves the total amount received for a specific payer. The information is grouped by token and receiving address. 

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
const apiInstance = new CoboWaas2.PaymentApi();
const payer_id = "P20250619T0310056d7aa";
const token_id = "ETH_USDT";
const opts = {
  'merchant_id': "M1001"
};
apiInstance.getPayerBalanceByAddress(payer_id, token_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payer_id** | **String**| Unique payer identifier on the Cobo side, auto-generated by the system. | 
 **token_id** | **String**| The token ID, which is a unique identifier that specifies both the blockchain network and cryptocurrency token in the format &#x60;{CHAIN}_{TOKEN}&#x60;. Supported values include:   - USDC: &#x60;ETH_USDC&#x60;, &#x60;ARBITRUM_USDCOIN&#x60;, &#x60;SOL_USDC&#x60;, &#x60;BASE_USDC&#x60;, &#x60;MATIC_USDC2&#x60;, &#x60;BSC_USDC&#x60;   - USDT: &#x60;TRON_USDT&#x60;, &#x60;ETH_USDT&#x60;, &#x60;ARBITRUM_USDT&#x60;, &#x60;SOL_USDT&#x60;, &#x60;BASE_USDT&#x60;, &#x60;MATIC_USDT&#x60;, &#x60;BSC_USDT&#x60;  | 
 **merchant_id** | **String**| The merchant ID. | [optional] 

### Return type

[**[ReceivedAmountPerAddress]**](ReceivedAmountPerAddress.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPaymentOrderDetailById

> Order getPaymentOrderDetailById(order_id)

Get pay-in order information

This operation retrieves details of a specific pay-in order. 

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
const apiInstance = new CoboWaas2.PaymentApi();
const order_id = "O20250304-M1001-1001";
apiInstance.getPaymentOrderDetailById(order_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **String**| The pay-in order ID. | 

### Return type

[**Order**](Order.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPspBalance

> PspBalance getPspBalance(token_id)

Get developer balance

This operation retrieves the balance information for you as the developer. The balance information is grouped by token.  For more information, please refer to [Amounts and Balances](/v2/payments/amounts-and-balances) 

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
const apiInstance = new CoboWaas2.PaymentApi();
const token_id = "ETH_USDT";
apiInstance.getPspBalance(token_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token_id** | **String**| The token ID, which is a unique identifier that specifies both the blockchain network and cryptocurrency token in the format &#x60;{CHAIN}_{TOKEN}&#x60;. Supported values include:   - USDC: &#x60;ETH_USDC&#x60;, &#x60;ARBITRUM_USDCOIN&#x60;, &#x60;SOL_USDC&#x60;, &#x60;BASE_USDC&#x60;, &#x60;MATIC_USDC2&#x60;, &#x60;BSC_USDC&#x60;   - USDT: &#x60;TRON_USDT&#x60;, &#x60;ETH_USDT&#x60;, &#x60;ARBITRUM_USDT&#x60;, &#x60;SOL_USDT&#x60;, &#x60;BASE_USDT&#x60;, &#x60;MATIC_USDT&#x60;, &#x60;BSC_USDT&#x60;  | 

### Return type

[**PspBalance**](PspBalance.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRefundDetailById

> Refund getRefundDetailById(refund_id)

Get refund order information

This operation retrieves the detailed information about a specified refund order. 

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
const apiInstance = new CoboWaas2.PaymentApi();
const refund_id = "R20250304-M1001-1001";
apiInstance.getRefundDetailById(refund_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **refund_id** | **String**| The refund order ID. | 

### Return type

[**Refund**](Refund.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRefunds

> GetRefunds200Response getRefunds(opts)

List all refund orders

This operation retrieves the information of all refund orders. 

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
const apiInstance = new CoboWaas2.PaymentApi();
const opts = {
  'limit': 10,
  'before': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1",
  'after': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk",
  'merchant_id': "M1001",
  'request_id': "random_request_id",
  'statuses': "Pending,Processing"
};
apiInstance.getRefunds(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| The maximum number of objects to return. For most operations, the value range is [1, 50]. | [optional] [default to 10]
 **before** | **String**| A cursor indicating the position before the current page. This value is generated by Cobo and returned in the response. If you are paginating forward from the beginning, you do not need to provide it on the first request. When paginating backward (to the previous page), you should pass the before value returned from the last response.  | [optional] 
 **after** | **String**| A cursor indicating the position after the current page. This value is generated by Cobo and returned in the response. You do not need to provide it on the first request. When paginating forward (to the next page), you should pass the after value returned from the last response.  | [optional] 
 **merchant_id** | **String**| The merchant ID. | [optional] 
 **request_id** | **String**| The request ID. | [optional] 
 **statuses** | **String**| A list of order, refund or settlement statuses. You can refer to the following operations for the possible status values:  - [Get pay-in order information](https://www.cobo.com/developers/v2/api-references/payment/get-pay-in-order-information)  - [Get refund order information](https://www.cobo.com/developers/v2/api-references/payment/get-refund-order-information)  - [List all settlement details](https://www.cobo.com/developers/v2/api-references/payment/list-all-settlement-details)  | [optional] 

### Return type

[**GetRefunds200Response**](GetRefunds200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSettlementById

> Settlement getSettlementById(settlement_request_id)

Get settlement request information

This operation retrieves the information of a specific settlement request. 

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
const apiInstance = new CoboWaas2.PaymentApi();
const settlement_request_id = "S20250304-1001";
apiInstance.getSettlementById(settlement_request_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **settlement_request_id** | **String**| The settlement request ID. | 

### Return type

[**Settlement**](Settlement.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSettlementInfoByIds

> GetSettlementInfoByIds200Response getSettlementInfoByIds(opts)

Get withdrawable balances

&lt;Warning&gt;This operation has been deprecated.&lt;/Warning&gt; This operation retrieves the balances of specified merchants or the developer. 

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
const apiInstance = new CoboWaas2.PaymentApi();
const opts = {
  'merchant_ids': "M1001,M1002,M1003",
  'currency': "USD",
  'acquiring_type': new CoboWaas2.AcquiringType()
};
apiInstance.getSettlementInfoByIds(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **merchant_ids** | **String**| A list of merchant IDs to query. | [optional] 
 **currency** | **String**| The currency for the operation. Currently, only &#x60;USD&#x60; is supported. | [optional] [default to &#39;USD&#39;]
 **acquiring_type** | [**AcquiringType**](.md)|  | [optional] 

### Return type

[**GetSettlementInfoByIds200Response**](GetSettlementInfoByIds200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTopUpAddress

> TopUpAddress getTopUpAddress(token_id, custom_payer_id, opts)

Get top-up address

This operation retrieves the information of the dedicated top-up address assigned to a specific payer under a merchant on a specified chain. 

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
const apiInstance = new CoboWaas2.PaymentApi();
const token_id = "ETH_USDT";
const custom_payer_id = "payer_0001";
const opts = {
  'merchant_id': "M1001"
};
apiInstance.getTopUpAddress(token_id, custom_payer_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token_id** | **String**| The token ID, which is a unique identifier that specifies both the blockchain network and cryptocurrency token in the format &#x60;{CHAIN}_{TOKEN}&#x60;. Supported values include:   - USDC: &#x60;ETH_USDC&#x60;, &#x60;ARBITRUM_USDCOIN&#x60;, &#x60;SOL_USDC&#x60;, &#x60;BASE_USDC&#x60;, &#x60;MATIC_USDC2&#x60;, &#x60;BSC_USDC&#x60;   - USDT: &#x60;TRON_USDT&#x60;, &#x60;ETH_USDT&#x60;, &#x60;ARBITRUM_USDT&#x60;, &#x60;SOL_USDT&#x60;, &#x60;BASE_USDT&#x60;, &#x60;MATIC_USDT&#x60;, &#x60;BSC_USDT&#x60;  | 
 **custom_payer_id** | **String**| A unique identifier assigned by the developer to track and identify individual payers in their system. | 
 **merchant_id** | **String**| The merchant ID. | [optional] 

### Return type

[**TopUpAddress**](TopUpAddress.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listBankAccounts

> [BankAccount] listBankAccounts()

List all bank accounts

This operation retrieves the information of all bank accounts you have registered for payment settlement. Contact our support team at [help@cobo.com](mailto:help@cobo.com) to register a new bank account. 

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
const apiInstance = new CoboWaas2.PaymentApi();
apiInstance.listBankAccounts().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[BankAccount]**](BankAccount.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listCryptoAddresses

> [CryptoAddress] listCryptoAddresses(opts)

List crypto addresses

This operation retrieves a list of crypto addresses registered for crypto payouts.   Contact our support team at [help@cobo.com](mailto:help@cobo.com) to register a new crypto address. 

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
const apiInstance = new CoboWaas2.PaymentApi();
const opts = {
  'token_id': "ETH_USDT"
};
apiInstance.listCryptoAddresses(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token_id** | **String**| The token ID, which is a unique identifier that specifies both the blockchain network and cryptocurrency token in the format &#x60;{CHAIN}_{TOKEN}&#x60;. Supported values include:   - USDC: &#x60;ETH_USDC&#x60;, &#x60;ARBITRUM_USDCOIN&#x60;, &#x60;SOL_USDC&#x60;, &#x60;BASE_USDC&#x60;, &#x60;MATIC_USDC2&#x60;, &#x60;BSC_USDC&#x60;   - USDT: &#x60;TRON_USDT&#x60;, &#x60;ETH_USDT&#x60;, &#x60;ARBITRUM_USDT&#x60;, &#x60;SOL_USDT&#x60;, &#x60;BASE_USDT&#x60;, &#x60;MATIC_USDT&#x60;, &#x60;BSC_USDT&#x60;  | [optional] 

### Return type

[**[CryptoAddress]**](CryptoAddress.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listForcedSweepRequests

> ListForcedSweepRequests200Response listForcedSweepRequests(opts)

List forced sweeps

&lt;Warning&gt;This operation has been deprecated.&lt;/Warning&gt; This operation retrieves the information of all forced sweeps. 

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
const apiInstance = new CoboWaas2.PaymentApi();
const opts = {
  'limit': 10,
  'before': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1",
  'after': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk",
  'request_id': "random_request_id"
};
apiInstance.listForcedSweepRequests(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| The maximum number of objects to return. For most operations, the value range is [1, 50]. | [optional] [default to 10]
 **before** | **String**| A cursor indicating the position before the current page. This value is generated by Cobo and returned in the response. If you are paginating forward from the beginning, you do not need to provide it on the first request. When paginating backward (to the previous page), you should pass the before value returned from the last response.  | [optional] 
 **after** | **String**| A cursor indicating the position after the current page. This value is generated by Cobo and returned in the response. You do not need to provide it on the first request. When paginating forward (to the next page), you should pass the after value returned from the last response.  | [optional] 
 **request_id** | **String**| The request ID. | [optional] 

### Return type

[**ListForcedSweepRequests200Response**](ListForcedSweepRequests200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listMerchantBalances

> ListMerchantBalances200Response listMerchantBalances(token_id, acquiring_type, opts)

List merchant balances

 This operation retrieves the balance information for specified merchants. The balance information is grouped by token and acquiring type. If you do not specify the &#x60;merchant_ids&#x60; parameter, the balance information for all merchants will be returned.  For more information, please refer to [Amounts and Balances](/v2/payments/amounts-and-balances) 

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
const apiInstance = new CoboWaas2.PaymentApi();
const token_id = "ETH_USDT";
const acquiring_type = new CoboWaas2.AcquiringType();
const opts = {
  'merchant_ids': "M1001,M1002,M1003"
};
apiInstance.listMerchantBalances(token_id, acquiring_type, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token_id** | **String**| The token ID, which is a unique identifier that specifies both the blockchain network and cryptocurrency token in the format &#x60;{CHAIN}_{TOKEN}&#x60;. Supported values include:   - USDC: &#x60;ETH_USDC&#x60;, &#x60;ARBITRUM_USDCOIN&#x60;, &#x60;SOL_USDC&#x60;, &#x60;BASE_USDC&#x60;, &#x60;MATIC_USDC2&#x60;, &#x60;BSC_USDC&#x60;   - USDT: &#x60;TRON_USDT&#x60;, &#x60;ETH_USDT&#x60;, &#x60;ARBITRUM_USDT&#x60;, &#x60;SOL_USDT&#x60;, &#x60;BASE_USDT&#x60;, &#x60;MATIC_USDT&#x60;, &#x60;BSC_USDT&#x60;  | 
 **acquiring_type** | [**AcquiringType**](.md)| The payment acquisition type. - &#x60;Order&#x60;: Payers pay by fixed-amount orders. Ideal for specific purchases and one-time transactions. - &#x60;TopUp&#x60;: Account recharge flow where payers deposit funds to their dedicated top-up addresses. Ideal for flexible or usage-based payment models.  | 
 **merchant_ids** | **String**| A list of merchant IDs to query. | [optional] 

### Return type

[**ListMerchantBalances200Response**](ListMerchantBalances200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listMerchants

> ListMerchants200Response listMerchants(opts)

List all merchants

This operation retrieves the information of all merchants.   You can filter the results by using a keyword for fuzzy search on merchant names or by specifying a wallet ID. 

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
const apiInstance = new CoboWaas2.PaymentApi();
const opts = {
  'limit': 10,
  'before': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1",
  'after': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk",
  'keyword': "keyword",
  'wallet_id': "f47ac10b-58cc-4372-a567-0e02b2c3d479",
  'wallet_setup': new CoboWaas2.WalletSetup()
};
apiInstance.listMerchants(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| The maximum number of objects to return. For most operations, the value range is [1, 50]. | [optional] [default to 10]
 **before** | **String**| A cursor indicating the position before the current page. This value is generated by Cobo and returned in the response. If you are paginating forward from the beginning, you do not need to provide it on the first request. When paginating backward (to the previous page), you should pass the before value returned from the last response.  | [optional] 
 **after** | **String**| A cursor indicating the position after the current page. This value is generated by Cobo and returned in the response. You do not need to provide it on the first request. When paginating forward (to the next page), you should pass the after value returned from the last response.  | [optional] 
 **keyword** | **String**| A search term used for fuzzy matching of merchant names. | [optional] 
 **wallet_id** | **String**| The wallet ID. | [optional] 
 **wallet_setup** | [**WalletSetup**](.md)| WalletSetup defines the type of funds used in the merchant account, either \&quot;Shared\&quot; or \&quot;Separate\&quot; is allowed when creating a merchant: - &#x60;Default&#x60;: Wallet of psp owned default merchant. - &#x60;Shared&#x60;: Shared wallet of non-psp owned merchants. - &#x60;Separate&#x60;: Separate wallet of non-psp owned merchants.  | [optional] 

### Return type

[**ListMerchants200Response**](ListMerchants200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listPaymentOrders

> ListPaymentOrders200Response listPaymentOrders(opts)

List all pay-in orders

This operation retrieves the information of all pay-in orders. You can filter the result by merchant ID. 

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
const apiInstance = new CoboWaas2.PaymentApi();
const opts = {
  'limit': 10,
  'before': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1",
  'after': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk",
  'merchant_id': "M1001",
  'psp_order_id': "P20240201001",
  'statuses': "Pending,Processing"
};
apiInstance.listPaymentOrders(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| The maximum number of objects to return. For most operations, the value range is [1, 50]. | [optional] [default to 10]
 **before** | **String**| A cursor indicating the position before the current page. This value is generated by Cobo and returned in the response. If you are paginating forward from the beginning, you do not need to provide it on the first request. When paginating backward (to the previous page), you should pass the before value returned from the last response.  | [optional] 
 **after** | **String**| A cursor indicating the position after the current page. This value is generated by Cobo and returned in the response. You do not need to provide it on the first request. When paginating forward (to the next page), you should pass the after value returned from the last response.  | [optional] 
 **merchant_id** | **String**| The merchant ID. | [optional] 
 **psp_order_id** | **String**| A unique reference code assigned by the developer to identify this order in their system. | [optional] 
 **statuses** | **String**| A list of order, refund or settlement statuses. You can refer to the following operations for the possible status values:  - [Get pay-in order information](https://www.cobo.com/developers/v2/api-references/payment/get-pay-in-order-information)  - [Get refund order information](https://www.cobo.com/developers/v2/api-references/payment/get-refund-order-information)  - [List all settlement details](https://www.cobo.com/developers/v2/api-references/payment/list-all-settlement-details)  | [optional] 

### Return type

[**ListPaymentOrders200Response**](ListPaymentOrders200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listPaymentSupportedTokens

> [SupportedToken] listPaymentSupportedTokens()

List all supported tokens

This operation retrieves the information of all supported tokens. 

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
const apiInstance = new CoboWaas2.PaymentApi();
apiInstance.listPaymentSupportedTokens().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[SupportedToken]**](SupportedToken.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listPaymentWalletBalances

> ListPaymentWalletBalances200Response listPaymentWalletBalances(token_id, opts)

List payment wallet balances

&lt;Warning&gt;This operation has been deprecated.&lt;/Warning&gt; This operation retrieves the balance information for specified payment wallets. The balance information is grouped by token. If you do not specify the &#x60;wallet_ids&#x60; parameter, the balance information for all payment wallets will be returned. 

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
const apiInstance = new CoboWaas2.PaymentApi();
const token_id = "ETH_USDT";
const opts = {
  'wallet_ids': "f47ac10b-58cc-4372-a567-0e02b2c3d479,f47ac10b-58cc-4372-a567-0e02b2c3d472"
};
apiInstance.listPaymentWalletBalances(token_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token_id** | **String**| The token ID, which is a unique identifier that specifies both the blockchain network and cryptocurrency token in the format &#x60;{CHAIN}_{TOKEN}&#x60;. Supported values include:   - USDC: &#x60;ETH_USDC&#x60;, &#x60;ARBITRUM_USDCOIN&#x60;, &#x60;SOL_USDC&#x60;, &#x60;BASE_USDC&#x60;, &#x60;MATIC_USDC2&#x60;, &#x60;BSC_USDC&#x60;   - USDT: &#x60;TRON_USDT&#x60;, &#x60;ETH_USDT&#x60;, &#x60;ARBITRUM_USDT&#x60;, &#x60;SOL_USDT&#x60;, &#x60;BASE_USDT&#x60;, &#x60;MATIC_USDT&#x60;, &#x60;BSC_USDT&#x60;  | 
 **wallet_ids** | **String**| A list of wallet IDs to query. | [optional] 

### Return type

[**ListPaymentWalletBalances200Response**](ListPaymentWalletBalances200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSettlementDetails

> ListSettlementDetails200Response listSettlementDetails(opts)

List all settlement details

This operation retrieves the information of all settlement details. You can filter the result by merchant ID or status. 

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
const apiInstance = new CoboWaas2.PaymentApi();
const opts = {
  'limit': 10,
  'before': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1",
  'after': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk",
  'merchant_id': "M1001",
  'statuses': "Pending,Processing"
};
apiInstance.listSettlementDetails(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| The maximum number of objects to return. For most operations, the value range is [1, 50]. | [optional] [default to 10]
 **before** | **String**| A cursor indicating the position before the current page. This value is generated by Cobo and returned in the response. If you are paginating forward from the beginning, you do not need to provide it on the first request. When paginating backward (to the previous page), you should pass the before value returned from the last response.  | [optional] 
 **after** | **String**| A cursor indicating the position after the current page. This value is generated by Cobo and returned in the response. You do not need to provide it on the first request. When paginating forward (to the next page), you should pass the after value returned from the last response.  | [optional] 
 **merchant_id** | **String**| The merchant ID. | [optional] 
 **statuses** | **String**| A list of order, refund or settlement statuses. You can refer to the following operations for the possible status values:  - [Get pay-in order information](https://www.cobo.com/developers/v2/api-references/payment/get-pay-in-order-information)  - [Get refund order information](https://www.cobo.com/developers/v2/api-references/payment/get-refund-order-information)  - [List all settlement details](https://www.cobo.com/developers/v2/api-references/payment/list-all-settlement-details)  | [optional] 

### Return type

[**ListSettlementDetails200Response**](ListSettlementDetails200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSettlementRequests

> ListSettlementRequests200Response listSettlementRequests(opts)

List all settlement requests

This operation retrieves the information of all settlement requests. 

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
const apiInstance = new CoboWaas2.PaymentApi();
const opts = {
  'limit': 10,
  'before': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1",
  'after': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk",
  'request_id': "random_request_id"
};
apiInstance.listSettlementRequests(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| The maximum number of objects to return. For most operations, the value range is [1, 50]. | [optional] [default to 10]
 **before** | **String**| A cursor indicating the position before the current page. This value is generated by Cobo and returned in the response. If you are paginating forward from the beginning, you do not need to provide it on the first request. When paginating backward (to the previous page), you should pass the before value returned from the last response.  | [optional] 
 **after** | **String**| A cursor indicating the position after the current page. This value is generated by Cobo and returned in the response. You do not need to provide it on the first request. When paginating forward (to the next page), you should pass the after value returned from the last response.  | [optional] 
 **request_id** | **String**| The request ID. | [optional] 

### Return type

[**ListSettlementRequests200Response**](ListSettlementRequests200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listTopUpPayerAccounts

> ListTopUpPayerAccounts200Response listTopUpPayerAccounts(opts)

List top-up payer accounts

This operation retrieves the accounts of all payers. You can filter the result by merchant ID and payer_id. 

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
const apiInstance = new CoboWaas2.PaymentApi();
const opts = {
  'limit': 10,
  'before': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1",
  'after': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk",
  'merchant_id': "M1001",
  'payer_id': "P20250619T0310056d7aa"
};
apiInstance.listTopUpPayerAccounts(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| The maximum number of objects to return. For most operations, the value range is [1, 50]. | [optional] [default to 10]
 **before** | **String**| A cursor indicating the position before the current page. This value is generated by Cobo and returned in the response. If you are paginating forward from the beginning, you do not need to provide it on the first request. When paginating backward (to the previous page), you should pass the before value returned from the last response.  | [optional] 
 **after** | **String**| A cursor indicating the position after the current page. This value is generated by Cobo and returned in the response. You do not need to provide it on the first request. When paginating forward (to the next page), you should pass the after value returned from the last response.  | [optional] 
 **merchant_id** | **String**| The merchant ID. | [optional] 
 **payer_id** | **String**| A unique identifier assigned by Cobo to track and identify individual payers. | [optional] 

### Return type

[**ListTopUpPayerAccounts200Response**](ListTopUpPayerAccounts200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listTopUpPayers

> ListTopUpPayers200Response listTopUpPayers(opts)

List payers

This operation retrieves the information of all payers under a merchant.   You can filter the result by the payer ID. 

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
const apiInstance = new CoboWaas2.PaymentApi();
const opts = {
  'limit': 10,
  'before': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1",
  'after': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk",
  'merchant_id': "M1001",
  'payer_id': "P20250619T0310056d7aa"
};
apiInstance.listTopUpPayers(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| The maximum number of objects to return. For most operations, the value range is [1, 50]. | [optional] [default to 10]
 **before** | **String**| A cursor indicating the position before the current page. This value is generated by Cobo and returned in the response. If you are paginating forward from the beginning, you do not need to provide it on the first request. When paginating backward (to the previous page), you should pass the before value returned from the last response.  | [optional] 
 **after** | **String**| A cursor indicating the position after the current page. This value is generated by Cobo and returned in the response. You do not need to provide it on the first request. When paginating forward (to the next page), you should pass the after value returned from the last response.  | [optional] 
 **merchant_id** | **String**| The merchant ID. | [optional] 
 **payer_id** | **String**| A unique identifier assigned by Cobo to track and identify individual payers. | [optional] 

### Return type

[**ListTopUpPayers200Response**](ListTopUpPayers200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## paymentEstimateFee

> PaymentEstimateFee201Response paymentEstimateFee(opts)

Payment estimate fee

This operation to payment estimate fee. 

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
const apiInstance = new CoboWaas2.PaymentApi();
const opts = {
  'PaymentEstimateFeeRequest': new CoboWaas2.PaymentEstimateFeeRequest()
};
apiInstance.paymentEstimateFee(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **PaymentEstimateFeeRequest** | [**PaymentEstimateFeeRequest**](PaymentEstimateFeeRequest.md)| The request body to create a estimated fee request. | [optional] 

### Return type

[**PaymentEstimateFee201Response**](PaymentEstimateFee201Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateBankAccountById

> BankAccount updateBankAccountById(bank_account_id, opts)

Update bank account

This operation updates the information of an existing bank account. 

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
const apiInstance = new CoboWaas2.PaymentApi();
const bank_account_id = "f47ac10b-58cc-4372-a567-0e02b2c3d479";
const opts = {
  'UpdateBankAccountByIdRequest': new CoboWaas2.UpdateBankAccountByIdRequest()
};
apiInstance.updateBankAccountById(bank_account_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bank_account_id** | **String**| The bank account ID. | 
 **UpdateBankAccountByIdRequest** | [**UpdateBankAccountByIdRequest**](UpdateBankAccountByIdRequest.md)| The request body for updating an existing bank account. | [optional] 

### Return type

[**BankAccount**](BankAccount.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateMerchantById

> Merchant updateMerchantById(merchant_id, opts)

Update merchant

This operation updates the information of an existing merchant. 

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
const apiInstance = new CoboWaas2.PaymentApi();
const merchant_id = "M1001";
const opts = {
  'UpdateMerchantByIdRequest': new CoboWaas2.UpdateMerchantByIdRequest()
};
apiInstance.updateMerchantById(merchant_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **merchant_id** | **String**| The merchant ID. | 
 **UpdateMerchantByIdRequest** | [**UpdateMerchantByIdRequest**](UpdateMerchantByIdRequest.md)| The request body to update a merchant. | [optional] 

### Return type

[**Merchant**](Merchant.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updatePaymentOrder

> Order updatePaymentOrder(order_id, opts)

Update pay-in order

This operation updates a pay-in order. Use this operation to expire a pay-in order that is no longer needed. 

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
const apiInstance = new CoboWaas2.PaymentApi();
const order_id = "O20250304-M1001-1001";
const opts = {
  'UpdatePaymentOrderRequest': new CoboWaas2.UpdatePaymentOrderRequest()
};
apiInstance.updatePaymentOrder(order_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **String**| The pay-in order ID. | 
 **UpdatePaymentOrderRequest** | [**UpdatePaymentOrderRequest**](UpdatePaymentOrderRequest.md)| The request body to update a pay-in order. | [optional] 

### Return type

[**Order**](Order.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateRefundById

> Refund updateRefundById(refund_id, opts)

Update refund order

This operation updates a specified refund order by modifying its recipient address. You can only update the recipient address for refund orders that have not been processed yet. 

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
const apiInstance = new CoboWaas2.PaymentApi();
const refund_id = "R20250304-M1001-1001";
const opts = {
  'UpdateRefundByIdRequest': new CoboWaas2.UpdateRefundByIdRequest()
};
apiInstance.updateRefundById(refund_id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **refund_id** | **String**| The refund order ID. | 
 **UpdateRefundByIdRequest** | [**UpdateRefundByIdRequest**](UpdateRefundByIdRequest.md)| The request body to update a refund order. | [optional] 

### Return type

[**Refund**](Refund.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateTopUpAddress

> TopUpAddress updateTopUpAddress(opts)

Update top-up address

This operation updates the dedicated top-up address assigned to a specific payer under a merchant on a specified chain. 

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
const apiInstance = new CoboWaas2.PaymentApi();
const opts = {
  'UpdateTopUpAddress': new CoboWaas2.UpdateTopUpAddress()
};
apiInstance.updateTopUpAddress(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **UpdateTopUpAddress** | [**UpdateTopUpAddress**](UpdateTopUpAddress.md)| The request body to update top-up address. | [optional] 

### Return type

[**TopUpAddress**](TopUpAddress.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

