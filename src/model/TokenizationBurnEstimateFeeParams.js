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

import ApiClient from '../ApiClient';
import TokenizationBurnTokenParams from './TokenizationBurnTokenParams';
import TokenizationBurnTokenParamsBurnsInner from './TokenizationBurnTokenParamsBurnsInner';
import TokenizationOperationType from './TokenizationOperationType';
import TokenizationTokenOperationSource from './TokenizationTokenOperationSource';

/**
 * The TokenizationBurnEstimateFeeParams model module.
 * @module model/TokenizationBurnEstimateFeeParams
 */
class TokenizationBurnEstimateFeeParams {
    /**
     * Constructs a new <code>TokenizationBurnEstimateFeeParams</code>.
     * @alias module:model/TokenizationBurnEstimateFeeParams
     * @implements module:model/TokenizationBurnTokenParams
     * @param source {module:model/TokenizationTokenOperationSource} 
     * @param burns {Array.<module:model/TokenizationBurnTokenParamsBurnsInner>} Details for each token burn, including amount and address to burn from.
     * @param operation_type {module:model/TokenizationOperationType} 
     * @param token_id {String} The ID of the token.
     */
    constructor(source, burns, operation_type, token_id) { 
        TokenizationBurnTokenParams.initialize(this, source, burns);
        TokenizationBurnEstimateFeeParams.initialize(this, source, burns, operation_type, token_id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, source, burns, operation_type, token_id) { 
        obj['source'] = source;
        obj['burns'] = burns;
        obj['operation_type'] = operation_type;
        obj['token_id'] = token_id;
    }

    /**
     * Constructs a <code>TokenizationBurnEstimateFeeParams</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TokenizationBurnEstimateFeeParams} obj Optional instance to populate.
     * @return {module:model/TokenizationBurnEstimateFeeParams} The populated <code>TokenizationBurnEstimateFeeParams</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TokenizationBurnEstimateFeeParams();
            TokenizationBurnTokenParams.constructFromObject(data, obj);

            if (data.hasOwnProperty('source')) {
                obj['source'] = TokenizationTokenOperationSource.constructFromObject(data['source']);
            }
            if (data.hasOwnProperty('burns')) {
                obj['burns'] = ApiClient.convertToType(data['burns'], [TokenizationBurnTokenParamsBurnsInner]);
            }
            if (data.hasOwnProperty('operation_type')) {
                obj['operation_type'] = TokenizationOperationType.constructFromObject(data['operation_type']);
            }
            if (data.hasOwnProperty('token_id')) {
                obj['token_id'] = ApiClient.convertToType(data['token_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TokenizationBurnEstimateFeeParams</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TokenizationBurnEstimateFeeParams</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TokenizationBurnEstimateFeeParams.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `source`
        if (data['source']) { // data not null
          if (!!TokenizationTokenOperationSource.validateJSON) {
            TokenizationTokenOperationSource.validateJSON(data['source']);
          }
        }
        if (data['burns']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['burns'])) {
                throw new Error("Expected the field `burns` to be an array in the JSON data but got " + data['burns']);
            }
            // validate the optional field `burns` (array)
            for (const item of data['burns']) {
                TokenizationBurnTokenParamsBurnsInner.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['token_id'] && !(typeof data['token_id'] === 'string' || data['token_id'] instanceof String)) {
            throw new Error("Expected the field `token_id` to be a primitive type in the JSON string but got " + data['token_id']);
        }

        return true;
    }


}

TokenizationBurnEstimateFeeParams.RequiredProperties = ["source", "burns", "operation_type", "token_id"];

/**
 * @member {module:model/TokenizationTokenOperationSource} source
 */
TokenizationBurnEstimateFeeParams.prototype['source'] = undefined;

/**
 * Details for each token burn, including amount and address to burn from.
 * @member {Array.<module:model/TokenizationBurnTokenParamsBurnsInner>} burns
 */
TokenizationBurnEstimateFeeParams.prototype['burns'] = undefined;

/**
 * @member {module:model/TokenizationOperationType} operation_type
 */
TokenizationBurnEstimateFeeParams.prototype['operation_type'] = undefined;

/**
 * The ID of the token.
 * @member {String} token_id
 */
TokenizationBurnEstimateFeeParams.prototype['token_id'] = undefined;


// Implement TokenizationBurnTokenParams interface:
/**
 * @member {module:model/TokenizationTokenOperationSource} source
 */
TokenizationBurnTokenParams.prototype['source'] = undefined;
/**
 * Details for each token burn, including amount and address to burn from.
 * @member {Array.<module:model/TokenizationBurnTokenParamsBurnsInner>} burns
 */
TokenizationBurnTokenParams.prototype['burns'] = undefined;




export default TokenizationBurnEstimateFeeParams;

