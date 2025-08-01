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
import TokenizationContractCallType from './TokenizationContractCallType';

/**
 * The TokenizationEvmContractCallParams model module.
 * @module model/TokenizationEvmContractCallParams
 */
class TokenizationEvmContractCallParams {
    /**
     * Constructs a new <code>TokenizationEvmContractCallParams</code>.
     * The information about the EVM contract call.
     * @alias module:model/TokenizationEvmContractCallParams
     * @param calldata {String} The data used to invoke a specific function or method within the specified contract at the destination address, with a maximum length of 65,000 characters. 
     */
    constructor(calldata) { 
        
        TokenizationEvmContractCallParams.initialize(this, calldata);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, calldata) { 
        obj['calldata'] = calldata;
    }

    /**
     * Constructs a <code>TokenizationEvmContractCallParams</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TokenizationEvmContractCallParams} obj Optional instance to populate.
     * @return {module:model/TokenizationEvmContractCallParams} The populated <code>TokenizationEvmContractCallParams</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TokenizationEvmContractCallParams();

            if (data.hasOwnProperty('type')) {
                obj['type'] = TokenizationContractCallType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('calldata')) {
                obj['calldata'] = ApiClient.convertToType(data['calldata'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TokenizationEvmContractCallParams</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TokenizationEvmContractCallParams</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TokenizationEvmContractCallParams.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['calldata'] && !(typeof data['calldata'] === 'string' || data['calldata'] instanceof String)) {
            throw new Error("Expected the field `calldata` to be a primitive type in the JSON string but got " + data['calldata']);
        }
        // ensure the json data is a string
        if (data['value'] && !(typeof data['value'] === 'string' || data['value'] instanceof String)) {
            throw new Error("Expected the field `value` to be a primitive type in the JSON string but got " + data['value']);
        }

        return true;
    }


}

TokenizationEvmContractCallParams.RequiredProperties = ["calldata"];

/**
 * @member {module:model/TokenizationContractCallType} type
 */
TokenizationEvmContractCallParams.prototype['type'] = undefined;

/**
 * The data used to invoke a specific function or method within the specified contract at the destination address, with a maximum length of 65,000 characters. 
 * @member {String} calldata
 */
TokenizationEvmContractCallParams.prototype['calldata'] = undefined;

/**
 * The transfer amount. For example, if you trade 1.5 ETH, then the value is `1.5`. 
 * @member {String} value
 */
TokenizationEvmContractCallParams.prototype['value'] = undefined;






export default TokenizationEvmContractCallParams;

