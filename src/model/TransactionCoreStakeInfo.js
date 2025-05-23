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
import TransactionExtraType from './TransactionExtraType';

/**
 * The TransactionCoreStakeInfo model module.
 * @module model/TransactionCoreStakeInfo
 */
class TransactionCoreStakeInfo {
    /**
     * Constructs a new <code>TransactionCoreStakeInfo</code>.
     * The extra information related to core staking operations.
     * @alias module:model/TransactionCoreStakeInfo
     * @param extra_type {module:model/TransactionExtraType} 
     */
    constructor(extra_type) { 
        
        TransactionCoreStakeInfo.initialize(this, extra_type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, extra_type) { 
        obj['extra_type'] = extra_type;
    }

    /**
     * Constructs a <code>TransactionCoreStakeInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionCoreStakeInfo} obj Optional instance to populate.
     * @return {module:model/TransactionCoreStakeInfo} The populated <code>TransactionCoreStakeInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionCoreStakeInfo();

            if (data.hasOwnProperty('extra_type')) {
                obj['extra_type'] = TransactionExtraType.constructFromObject(data['extra_type']);
            }
            if (data.hasOwnProperty('stake_amount')) {
                obj['stake_amount'] = ApiClient.convertToType(data['stake_amount'], 'String');
            }
            if (data.hasOwnProperty('timelock')) {
                obj['timelock'] = ApiClient.convertToType(data['timelock'], 'Number');
            }
            if (data.hasOwnProperty('change_address')) {
                obj['change_address'] = ApiClient.convertToType(data['change_address'], 'String');
            }
            if (data.hasOwnProperty('validator_address')) {
                obj['validator_address'] = ApiClient.convertToType(data['validator_address'], 'String');
            }
            if (data.hasOwnProperty('reward_address')) {
                obj['reward_address'] = ApiClient.convertToType(data['reward_address'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TransactionCoreStakeInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransactionCoreStakeInfo</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TransactionCoreStakeInfo.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['stake_amount'] && !(typeof data['stake_amount'] === 'string' || data['stake_amount'] instanceof String)) {
            throw new Error("Expected the field `stake_amount` to be a primitive type in the JSON string but got " + data['stake_amount']);
        }
        // ensure the json data is a string
        if (data['change_address'] && !(typeof data['change_address'] === 'string' || data['change_address'] instanceof String)) {
            throw new Error("Expected the field `change_address` to be a primitive type in the JSON string but got " + data['change_address']);
        }
        // ensure the json data is a string
        if (data['validator_address'] && !(typeof data['validator_address'] === 'string' || data['validator_address'] instanceof String)) {
            throw new Error("Expected the field `validator_address` to be a primitive type in the JSON string but got " + data['validator_address']);
        }
        // ensure the json data is a string
        if (data['reward_address'] && !(typeof data['reward_address'] === 'string' || data['reward_address'] instanceof String)) {
            throw new Error("Expected the field `reward_address` to be a primitive type in the JSON string but got " + data['reward_address']);
        }

        return true;
    }


}

TransactionCoreStakeInfo.RequiredProperties = ["extra_type"];

/**
 * @member {module:model/TransactionExtraType} extra_type
 */
TransactionCoreStakeInfo.prototype['extra_type'] = undefined;

/**
 * The original staking amount.
 * @member {String} stake_amount
 */
TransactionCoreStakeInfo.prototype['stake_amount'] = undefined;

/**
 * The Unix timestamp (in seconds) when the staking position will be unlocked and available for withdrawal.
 * @member {Number} timelock
 */
TransactionCoreStakeInfo.prototype['timelock'] = undefined;

/**
 * The change address on the Bitcoin chain. If not provided, the source wallet's address will be used as the change address.
 * @member {String} change_address
 */
TransactionCoreStakeInfo.prototype['change_address'] = undefined;

/**
 * The validator's EVM address.
 * @member {String} validator_address
 */
TransactionCoreStakeInfo.prototype['validator_address'] = undefined;

/**
 * The EVM address used to receive staking rewards.
 * @member {String} reward_address
 */
TransactionCoreStakeInfo.prototype['reward_address'] = undefined;






export default TransactionCoreStakeInfo;

