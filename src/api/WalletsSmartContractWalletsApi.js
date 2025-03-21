/**
 * Cobo Wallet as a Service 2.0
 *
 * Contact: help@cobo.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CoboSafeDelegate from '../model/CoboSafeDelegate';
import ErrorResponse from '../model/ErrorResponse';
import SafeWalletDelegates from '../model/SafeWalletDelegates';

/**
* WalletsSmartContractWallets service.
* @module api/WalletsSmartContractWalletsApi
*/
export default class WalletsSmartContractWalletsApi {

    /**
    * Constructs a new WalletsSmartContractWalletsApi. 
    * @alias module:api/WalletsSmartContractWalletsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * List Delegates
     * This operation retrieves all available Delegates of a Safe\\{Wallet\\} for a given transfer or contract call request. 
     * @param {String} wallet_id The wallet ID.
     * @param {Object} opts Optional parameters
     * @param {module:model/SafeWalletDelegates} [SafeWalletDelegates] The request body to query the Delegates of a Safe{Wallet}.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/CoboSafeDelegate>} and HTTP response
     */
    listSafeWalletDelegatesWithHttpInfo(wallet_id, opts) {
      opts = opts || {};
      let postBody = opts['SafeWalletDelegates'];
      if (postBody && postBody.toJSON) {
          postBody = postBody.toJSON()
      }
      // verify the required parameter 'wallet_id' is set
      if (wallet_id === undefined || wallet_id === null) {
        throw new Error("Missing the required parameter 'wallet_id' when calling listSafeWalletDelegates");
      }

      let pathParams = {
        'wallet_id': wallet_id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2', 'CoboAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = [CoboSafeDelegate];
      return this.apiClient.callApi(
        '/wallets/{wallet_id}/smart_contracts/delegates', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List Delegates
     * This operation retrieves all available Delegates of a Safe\\{Wallet\\} for a given transfer or contract call request. 
     * @param {String} wallet_id The wallet ID.
     * @param {Object} opts Optional parameters
     * @param {module:model/SafeWalletDelegates} opts.SafeWalletDelegates The request body to query the Delegates of a Safe{Wallet}.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/CoboSafeDelegate>}
     */
    listSafeWalletDelegates(wallet_id, opts) {
      return this.listSafeWalletDelegatesWithHttpInfo(wallet_id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
