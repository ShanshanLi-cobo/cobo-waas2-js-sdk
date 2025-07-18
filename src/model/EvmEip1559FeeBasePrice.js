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
 * The EvmEip1559FeeBasePrice model module.
 * @module model/EvmEip1559FeeBasePrice
 */
class EvmEip1559FeeBasePrice {
    /**
     * Constructs a new <code>EvmEip1559FeeBasePrice</code>.
     * @alias module:model/EvmEip1559FeeBasePrice
     */
    constructor() { 
        
        EvmEip1559FeeBasePrice.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EvmEip1559FeeBasePrice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EvmEip1559FeeBasePrice} obj Optional instance to populate.
     * @return {module:model/EvmEip1559FeeBasePrice} The populated <code>EvmEip1559FeeBasePrice</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EvmEip1559FeeBasePrice();

            if (data.hasOwnProperty('max_fee_per_gas')) {
                obj['max_fee_per_gas'] = ApiClient.convertToType(data['max_fee_per_gas'], 'String');
            }
            if (data.hasOwnProperty('max_priority_fee_per_gas')) {
                obj['max_priority_fee_per_gas'] = ApiClient.convertToType(data['max_priority_fee_per_gas'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EvmEip1559FeeBasePrice</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EvmEip1559FeeBasePrice</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['max_fee_per_gas'] && !(typeof data['max_fee_per_gas'] === 'string' || data['max_fee_per_gas'] instanceof String)) {
            throw new Error("Expected the field `max_fee_per_gas` to be a primitive type in the JSON string but got " + data['max_fee_per_gas']);
        }
        // ensure the json data is a string
        if (data['max_priority_fee_per_gas'] && !(typeof data['max_priority_fee_per_gas'] === 'string' || data['max_priority_fee_per_gas'] instanceof String)) {
            throw new Error("Expected the field `max_priority_fee_per_gas` to be a primitive type in the JSON string but got " + data['max_priority_fee_per_gas']);
        }

        return true;
    }


}



/**
 * The maximum gas fee per gas unit used on the chain, in wei.
 * @member {String} max_fee_per_gas
 */
EvmEip1559FeeBasePrice.prototype['max_fee_per_gas'] = undefined;

/**
 * The maximum priority fee per gas unit used, in wei. The maximum priority fee represents the highest amount of miner tips that you are willing to pay for your transaction.
 * @member {String} max_priority_fee_per_gas
 */
EvmEip1559FeeBasePrice.prototype['max_priority_fee_per_gas'] = undefined;






export default EvmEip1559FeeBasePrice;

