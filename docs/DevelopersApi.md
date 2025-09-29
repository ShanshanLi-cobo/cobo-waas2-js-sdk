# CoboWaas2.DevelopersApi

All URIs are relative to *https://api.dev.cobo.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getApiKeyInfo**](DevelopersApi.md#getApiKeyInfo) | **GET** /developers/api_key_info | Get API key information
[**listCallbackMessages**](DevelopersApi.md#listCallbackMessages) | **GET** /developers/callback_messages | List all callback messages
[**retryCallbackMessage**](DevelopersApi.md#retryCallbackMessage) | **POST** /developers/callback_messages/{message_id}/retry | Retry callback message



## getApiKeyInfo

> GetApiKeyInfo200Response getApiKeyInfo()

Get API key information

This operation retrieves the details of the API key that you are using.

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
const apiInstance = new CoboWaas2.DevelopersApi();
apiInstance.getApiKeyInfo().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetApiKeyInfo200Response**](GetApiKeyInfo200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listCallbackMessages

> ListCallbackMessages200Response listCallbackMessages(opts)

List all callback messages

This operation retrieves all the callback messages in your organization.  For more details about how to respond to callback messages, refer to [Callback messages](https://www.cobo.com/developers/v2/guides/webhooks-callbacks/set-up-endpoint#callback-messages). 

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
const apiInstance = new CoboWaas2.DevelopersApi();
const opts = {
  'callback_message_ids': "f47ac10b-58cc-4372-a567-0e02b2c3d479,f47ac10b-58cc-4372-a567-0e02b2c3d479",
  'request_ids': "f47ac10b-58cc-4372-a567-0e02b2c3d479,f47ac10b-58cc-4372-a567-0e02b2c3d479",
  'transaction_ids': "f47ac10b-58cc-4372-a567-0e02b2c3d479,f47ac10b-58cc-4372-a567-0e02b2c3d479",
  'wallet_ids': "f47ac10b-58cc-4372-a567-0e02b2c3d479,f47ac10b-58cc-4372-a567-0e02b2c3d479",
  'status': "Approved",
  'limit': 10,
  'before': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1",
  'after': "RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk"
};
apiInstance.listCallbackMessages(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **callback_message_ids** | **String**| A list of callback message IDs, separated by commas. | [optional] 
 **request_ids** | **String**| A list of request IDs, separated by commas. The request ID is provided by you and must be unique within your organization. | [optional] 
 **transaction_ids** | **String**| A list of transaction IDs, separated by commas. | [optional] 
 **wallet_ids** | **String**| A list of wallet IDs, separated by commas. | [optional] 
 **status** | **String**| The callback message status. Possible values include &#x60;Approved&#x60;, &#x60;Denied&#x60;, and &#x60;Failed&#x60;. | [optional] 
 **limit** | **Number**| The maximum number of objects to return. For most operations, the value range is [1, 50]. | [optional] [default to 10]
 **before** | **String**| This parameter specifies an object ID as a starting point for pagination, retrieving data before the specified object relative to the current dataset.    Suppose the current data is ordered as Object A, Object B, and Object C.  If you set &#x60;before&#x60; to the ID of Object C (&#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;), the response will include Object B and Object A.    **Notes**:   - If you set both &#x60;after&#x60; and &#x60;before&#x60;, an error will occur. - If you leave both &#x60;before&#x60; and &#x60;after&#x60; empty, the first page of data is returned. - If you set it to &#x60;infinity&#x60;, the last page of data is returned.  | [optional] 
 **after** | **String**| This parameter specifies an object ID as a starting point for pagination, retrieving data after the specified object relative to the current dataset.    Suppose the current data is ordered as Object A, Object B, and Object C. If you set &#x60;after&#x60; to the ID of Object A (&#x60;RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk&#x60;), the response will include Object B and Object C.    **Notes**:   - If you set both &#x60;after&#x60; and &#x60;before&#x60;, an error will occur. - If you leave both &#x60;before&#x60; and &#x60;after&#x60; empty, the first page of data is returned.  | [optional] 

### Return type

[**ListCallbackMessages200Response**](ListCallbackMessages200Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retryCallbackMessage

> RetryCallbackMessage201Response retryCallbackMessage(message_id)

Retry callback message

This operation resends a callback message that failed previously.  If your callback endpoint doesn&#39;t respond as expected, the WaaS service will retry sending the callback message up to 30 times. After that, the callback message status will be &#x60;Failed&#x60;. Use this operation to resend the message. For more details, refer to [Webhooks and Callbacks](https://www.cobo.com/developers/v2/guides/webhooks-callbacks/set-up-endpoint#callback-messages). 

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
const apiInstance = new CoboWaas2.DevelopersApi();
const message_id = "f47ac10b-58cc-4372-a567-0e02b2c3d479";
apiInstance.retryCallbackMessage(message_id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **message_id** | **String**| The callback message ID. | 

### Return type

[**RetryCallbackMessage201Response**](RetryCallbackMessage201Response.md)

### Authorization

[OAuth2](../README.md#OAuth2), [CoboAuth](../README.md#CoboAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

