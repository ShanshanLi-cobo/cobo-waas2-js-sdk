/**
 * Cobo Wallet as a Service 2.0
 *
 * Contact: support@cobo.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ChainInfo from '../model/ChainInfo';
import ErrorResponse from '../model/ErrorResponse';
import ExchangeId from '../model/ExchangeId';
import ListAssetBalancesForExchangeWallet200Response from '../model/ListAssetBalancesForExchangeWallet200Response';
import ListExchanges200ResponseInner from '../model/ListExchanges200ResponseInner';
import ListSupportedAssetsForExchange200Response from '../model/ListSupportedAssetsForExchange200Response';

/**
* WalletsExchangeWallet service.
* @module api/WalletsExchangeWalletApi
*/
export default class WalletsExchangeWalletApi {

    /**
    * Constructs a new WalletsExchangeWalletApi. 
    * @alias module:api/WalletsExchangeWalletApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * List asset balances
     * This operation retrieves the asset balances in a specified Exchange Wallet. You can filter the results by trading account type or asset ID. 
     * @param {String} wallet_id The wallet ID.
     * @param {Object} opts Optional parameters
     * @param {String} [trading_account_types] A list of trading account types, separated by comma. You can get the the supported trading account types of an exchange by calling [List supported exchanges](/v2/api-references/wallets--exchange-wallet/list-supported-exchanges).
     * @param {String} [asset_ids] (This concept applies to Exchange Wallets only) A list of asset IDs, separated by comma. An asset ID is the unique identifier of the asset held within your linked exchange account.
     * @param {Number} [limit = 10)] The maximum number of objects to return. For most operations, the value range is [1, 50].
     * @param {String} [before] An object ID that serves as a starting point for retrieving data in reverse chronological order. For example, if you specify `before` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`, the request will retrieve a list of data objects that end before the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`. You can set this parameter to the value of `pagination.before` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned.  - If you set `before` to `infinity`, the last page of data is returned. 
     * @param {String} [after] An object ID that acts as a starting point for retrieving data in chronological order. For example, if you specify `after` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`, the request will retrieve a list of data objects that start after the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`. You can set this parameter to the value of `pagination.after` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListAssetBalancesForExchangeWallet200Response} and HTTP response
     */
    listAssetBalancesForExchangeWalletWithHttpInfo(wallet_id, opts) {
      opts = opts || {};
      let postBody = null;
      if (postBody && postBody.toJSON) {
          postBody = postBody.toJSON()
      }
      // verify the required parameter 'wallet_id' is set
      if (wallet_id === undefined || wallet_id === null) {
        throw new Error("Missing the required parameter 'wallet_id' when calling listAssetBalancesForExchangeWallet");
      }

      let pathParams = {
        'wallet_id': wallet_id
      };
      let queryParams = {
        'trading_account_types': opts['trading_account_types'],
        'asset_ids': opts['asset_ids'],
        'limit': opts['limit'],
        'before': opts['before'],
        'after': opts['after']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['CoboAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListAssetBalancesForExchangeWallet200Response;
      return this.apiClient.callApi(
        '/wallets/{wallet_id}/exchanges/assets', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List asset balances
     * This operation retrieves the asset balances in a specified Exchange Wallet. You can filter the results by trading account type or asset ID. 
     * @param {String} wallet_id The wallet ID.
     * @param {Object} opts Optional parameters
     * @param {String} opts.trading_account_types A list of trading account types, separated by comma. You can get the the supported trading account types of an exchange by calling [List supported exchanges](/v2/api-references/wallets--exchange-wallet/list-supported-exchanges).
     * @param {String} opts.asset_ids (This concept applies to Exchange Wallets only) A list of asset IDs, separated by comma. An asset ID is the unique identifier of the asset held within your linked exchange account.
     * @param {Number} opts.limit The maximum number of objects to return. For most operations, the value range is [1, 50]. (default to 10)
     * @param {String} opts.before An object ID that serves as a starting point for retrieving data in reverse chronological order. For example, if you specify `before` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`, the request will retrieve a list of data objects that end before the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`. You can set this parameter to the value of `pagination.before` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned.  - If you set `before` to `infinity`, the last page of data is returned. 
     * @param {String} opts.after An object ID that acts as a starting point for retrieving data in chronological order. For example, if you specify `after` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`, the request will retrieve a list of data objects that start after the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`. You can set this parameter to the value of `pagination.after` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListAssetBalancesForExchangeWallet200Response}
     */
    listAssetBalancesForExchangeWallet(wallet_id, opts) {
      return this.listAssetBalancesForExchangeWalletWithHttpInfo(wallet_id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List supported exchanges
     * This operation retrieves the information about the exchanges supported by Cobo's Exchange Wallets, including exchange IDs and trading account types.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ListExchanges200ResponseInner>} and HTTP response
     */
    listExchangesWithHttpInfo() {
      let postBody = null;
      if (postBody && postBody.toJSON) {
          postBody = postBody.toJSON()
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['CoboAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [ListExchanges200ResponseInner];
      return this.apiClient.callApi(
        '/wallets/exchanges', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List supported exchanges
     * This operation retrieves the information about the exchanges supported by Cobo's Exchange Wallets, including exchange IDs and trading account types.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ListExchanges200ResponseInner>}
     */
    listExchanges() {
      return this.listExchangesWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List supported assets
     * This operation retrieves all the assets supported by a specified exchange.
     * @param {module:model/ExchangeId} exchange_id The ID of the exchange. Possible values include:   - `binance`: Binance.   - `okx`: OKX.   - `deribit`: Deribit.   - `bybit`: Bybit.   - `gate`: Gate.io   - `bitget'`: Bitget 
     * @param {Object} opts Optional parameters
     * @param {Number} [limit = 10)] The maximum number of objects to return. For most operations, the value range is [1, 50].
     * @param {String} [before] An object ID that serves as a starting point for retrieving data in reverse chronological order. For example, if you specify `before` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`, the request will retrieve a list of data objects that end before the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`. You can set this parameter to the value of `pagination.before` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned.  - If you set `before` to `infinity`, the last page of data is returned. 
     * @param {String} [after] An object ID that acts as a starting point for retrieving data in chronological order. For example, if you specify `after` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`, the request will retrieve a list of data objects that start after the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`. You can set this parameter to the value of `pagination.after` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ListSupportedAssetsForExchange200Response} and HTTP response
     */
    listSupportedAssetsForExchangeWithHttpInfo(exchange_id, opts) {
      opts = opts || {};
      let postBody = null;
      if (postBody && postBody.toJSON) {
          postBody = postBody.toJSON()
      }
      // verify the required parameter 'exchange_id' is set
      if (exchange_id === undefined || exchange_id === null) {
        throw new Error("Missing the required parameter 'exchange_id' when calling listSupportedAssetsForExchange");
      }

      let pathParams = {
        'exchange_id': exchange_id
      };
      let queryParams = {
        'limit': opts['limit'],
        'before': opts['before'],
        'after': opts['after']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['CoboAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ListSupportedAssetsForExchange200Response;
      return this.apiClient.callApi(
        '/wallets/exchanges/{exchange_id}/assets', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List supported assets
     * This operation retrieves all the assets supported by a specified exchange.
     * @param {module:model/ExchangeId} exchange_id The ID of the exchange. Possible values include:   - `binance`: Binance.   - `okx`: OKX.   - `deribit`: Deribit.   - `bybit`: Bybit.   - `gate`: Gate.io   - `bitget'`: Bitget 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit The maximum number of objects to return. For most operations, the value range is [1, 50]. (default to 10)
     * @param {String} opts.before An object ID that serves as a starting point for retrieving data in reverse chronological order. For example, if you specify `before` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`, the request will retrieve a list of data objects that end before the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGmk1`. You can set this parameter to the value of `pagination.before` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned.  - If you set `before` to `infinity`, the last page of data is returned. 
     * @param {String} opts.after An object ID that acts as a starting point for retrieving data in chronological order. For example, if you specify `after` as `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`, the request will retrieve a list of data objects that start after the object with the object ID `RqeEoTkgKG5rpzqYzg2Hd3szmPoj2cE7w5jWwShz3C1vyGSAk`. You can set this parameter to the value of `pagination.after` in the response of the previous request.  - If you set both `after` and `before`, an error will occur.  - If you leave both `before` and `after` empty, the first page of data is returned. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListSupportedAssetsForExchange200Response}
     */
    listSupportedAssetsForExchange(exchange_id, opts) {
      return this.listSupportedAssetsForExchangeWithHttpInfo(exchange_id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List supported chains
     * This operation retrieves all the chains supported by a specified exchange for a given asset.   You can use this operation to confirm whether you can transfer an asset from or to your Exchange Wallet when using a specific chain. 
     * @param {module:model/ExchangeId} exchange_id The ID of the exchange. Possible values include:   - `binance`: Binance.   - `okx`: OKX.   - `deribit`: Deribit.   - `bybit`: Bybit.   - `gate`: Gate.io   - `bitget'`: Bitget 
     * @param {String} asset_id (This concept applies to Exchange Wallets only) The asset ID. An asset ID is the unique identifier of the asset held within your linked exchange account. You can get the ID of the assets supported by an exchanges by calling [List supported assets](/v2/api-references/wallets--exchange-wallet/list-supported-assets).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ChainInfo>} and HTTP response
     */
    listSupportedChainsForExchangeWithHttpInfo(exchange_id, asset_id) {
      let postBody = null;
      if (postBody && postBody.toJSON) {
          postBody = postBody.toJSON()
      }
      // verify the required parameter 'exchange_id' is set
      if (exchange_id === undefined || exchange_id === null) {
        throw new Error("Missing the required parameter 'exchange_id' when calling listSupportedChainsForExchange");
      }
      // verify the required parameter 'asset_id' is set
      if (asset_id === undefined || asset_id === null) {
        throw new Error("Missing the required parameter 'asset_id' when calling listSupportedChainsForExchange");
      }

      let pathParams = {
        'exchange_id': exchange_id,
        'asset_id': asset_id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['CoboAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [ChainInfo];
      return this.apiClient.callApi(
        '/wallets/exchanges/{exchange_id}/assets/{asset_id}/chains', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List supported chains
     * This operation retrieves all the chains supported by a specified exchange for a given asset.   You can use this operation to confirm whether you can transfer an asset from or to your Exchange Wallet when using a specific chain. 
     * @param {module:model/ExchangeId} exchange_id The ID of the exchange. Possible values include:   - `binance`: Binance.   - `okx`: OKX.   - `deribit`: Deribit.   - `bybit`: Bybit.   - `gate`: Gate.io   - `bitget'`: Bitget 
     * @param {String} asset_id (This concept applies to Exchange Wallets only) The asset ID. An asset ID is the unique identifier of the asset held within your linked exchange account. You can get the ID of the assets supported by an exchanges by calling [List supported assets](/v2/api-references/wallets--exchange-wallet/list-supported-assets).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ChainInfo>}
     */
    listSupportedChainsForExchange(exchange_id, asset_id) {
      return this.listSupportedChainsForExchangeWithHttpInfo(exchange_id, asset_id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
