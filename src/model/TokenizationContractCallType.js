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
/**
* Enum class TokenizationContractCallType.
* @enum {}
* @readonly
*/
export default class TokenizationContractCallType {
    
        /**
         * value: "EVM_Contract"
         * @const
         */
        "EVM_Contract" = "EVM_Contract";

    
        /**
         * value: "unknown_default_open_api"
         * @const
         */
        "unknown_default_open_api" = "unknown_default_open_api";

    

    /**
    * Returns a <code>TokenizationContractCallType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/TokenizationContractCallType} The enum <code>TokenizationContractCallType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

