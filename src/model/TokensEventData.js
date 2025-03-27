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
import TokenInfo from './TokenInfo';
import WebhookEventDataType from './WebhookEventDataType';

/**
 * The TokensEventData model module.
 * @module model/TokensEventData
 */
class TokensEventData {
    /**
     * Constructs a new <code>TokensEventData</code>.
     * @alias module:model/TokensEventData
     * @implements module:model/WebhookEventDataType
     * @param data_type {module:model/TokensEventData.DataTypeEnum}  The data type of the event. - `Transaction`: The transaction event data. - `TSSRequest`: The TSS request event data. - `Addresses`: The addresses event data. - `WalletInfo`: The wallet information event data. - `MPCVault`: The MPC vault event data. - `Chains`: The enabled chain event data. - `Tokens`: The enabled token event data.
     * @param tokens {Array.<module:model/TokenInfo>} The enabled tokens.
     */
    constructor(data_type, tokens) { 
        WebhookEventDataType.initialize(this, data_type);
        TokensEventData.initialize(this, data_type, tokens);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, data_type, tokens) { 
        obj['data_type'] = data_type;
        obj['tokens'] = tokens;
    }

    /**
     * Constructs a <code>TokensEventData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TokensEventData} obj Optional instance to populate.
     * @return {module:model/TokensEventData} The populated <code>TokensEventData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TokensEventData();
            WebhookEventDataType.constructFromObject(data, obj);

            if (data.hasOwnProperty('data_type')) {
                obj['data_type'] = ApiClient.convertToType(data['data_type'], 'String');
            }
            if (data.hasOwnProperty('tokens')) {
                obj['tokens'] = ApiClient.convertToType(data['tokens'], [TokenInfo]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TokensEventData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TokensEventData</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TokensEventData.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['data_type'] && !(typeof data['data_type'] === 'string' || data['data_type'] instanceof String)) {
            throw new Error("Expected the field `data_type` to be a primitive type in the JSON string but got " + data['data_type']);
        }
        if (data['tokens']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['tokens'])) {
                throw new Error("Expected the field `tokens` to be an array in the JSON data but got " + data['tokens']);
            }
            // validate the optional field `tokens` (array)
            for (const item of data['tokens']) {
                TokenInfo.validateJSON(item);
            };
        }

        return true;
    }


}

TokensEventData.RequiredProperties = ["data_type", "tokens"];

/**
 *  The data type of the event. - `Transaction`: The transaction event data. - `TSSRequest`: The TSS request event data. - `Addresses`: The addresses event data. - `WalletInfo`: The wallet information event data. - `MPCVault`: The MPC vault event data. - `Chains`: The enabled chain event data. - `Tokens`: The enabled token event data.
 * @member {module:model/TokensEventData.DataTypeEnum} data_type
 */
TokensEventData.prototype['data_type'] = undefined;

/**
 * The enabled tokens.
 * @member {Array.<module:model/TokenInfo>} tokens
 */
TokensEventData.prototype['tokens'] = undefined;


// Implement WebhookEventDataType interface:
/**
 *  The data type of the event. - `Transaction`: The transaction event data. - `TSSRequest`: The TSS request event data. - `Addresses`: The addresses event data. - `WalletInfo`: The wallet information event data. - `MPCVault`: The MPC vault event data. - `Chains`: The enabled chain event data. - `Tokens`: The enabled token event data.
 * @member {module:model/WebhookEventDataType.DataTypeEnum} data_type
 */
WebhookEventDataType.prototype['data_type'] = undefined;



/**
 * Allowed values for the <code>data_type</code> property.
 * @enum {String}
 * @readonly
 */
TokensEventData['DataTypeEnum'] = {

    /**
     * value: "Transaction"
     * @const
     */
    "Transaction": "Transaction",

    /**
     * value: "TSSRequest"
     * @const
     */
    "TSSRequest": "TSSRequest",

    /**
     * value: "Addresses"
     * @const
     */
    "Addresses": "Addresses",

    /**
     * value: "WalletInfo"
     * @const
     */
    "WalletInfo": "WalletInfo",

    /**
     * value: "MPCVault"
     * @const
     */
    "MPCVault": "MPCVault",

    /**
     * value: "Chains"
     * @const
     */
    "Chains": "Chains",

    /**
     * value: "Tokens"
     * @const
     */
    "Tokens": "Tokens",

    /**
     * value: "unknown_default_open_api"
     * @const
     */
    "unknown_default_open_api": "unknown_default_open_api"
};



export default TokensEventData;

