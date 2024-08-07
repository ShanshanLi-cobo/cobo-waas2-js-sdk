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

import ApiClient from '../ApiClient';
import ReplaceType from './ReplaceType';

/**
 * The TransactionReplacement model module.
 * @module model/TransactionReplacement
 */
class TransactionReplacement {
    /**
     * Constructs a new <code>TransactionReplacement</code>.
     * @alias module:model/TransactionReplacement
     */
    constructor() { 
        
        TransactionReplacement.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TransactionReplacement</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionReplacement} obj Optional instance to populate.
     * @return {module:model/TransactionReplacement} The populated <code>TransactionReplacement</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionReplacement();

            if (data.hasOwnProperty('replaced_by_type')) {
                obj['replaced_by_type'] = ReplaceType.constructFromObject(data['replaced_by_type']);
            }
            if (data.hasOwnProperty('replaced_by_transaction_id')) {
                obj['replaced_by_transaction_id'] = ApiClient.convertToType(data['replaced_by_transaction_id'], 'String');
            }
            if (data.hasOwnProperty('replaced_by_transaction_hash')) {
                obj['replaced_by_transaction_hash'] = ApiClient.convertToType(data['replaced_by_transaction_hash'], 'String');
            }
            if (data.hasOwnProperty('replaced_type')) {
                obj['replaced_type'] = ReplaceType.constructFromObject(data['replaced_type']);
            }
            if (data.hasOwnProperty('replaced_transaction_id')) {
                obj['replaced_transaction_id'] = ApiClient.convertToType(data['replaced_transaction_id'], 'String');
            }
            if (data.hasOwnProperty('replaced_transaction_hash')) {
                obj['replaced_transaction_hash'] = ApiClient.convertToType(data['replaced_transaction_hash'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TransactionReplacement</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransactionReplacement</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['replaced_by_transaction_id'] && !(typeof data['replaced_by_transaction_id'] === 'string' || data['replaced_by_transaction_id'] instanceof String)) {
            throw new Error("Expected the field `replaced_by_transaction_id` to be a primitive type in the JSON string but got " + data['replaced_by_transaction_id']);
        }
        // ensure the json data is a string
        if (data['replaced_by_transaction_hash'] && !(typeof data['replaced_by_transaction_hash'] === 'string' || data['replaced_by_transaction_hash'] instanceof String)) {
            throw new Error("Expected the field `replaced_by_transaction_hash` to be a primitive type in the JSON string but got " + data['replaced_by_transaction_hash']);
        }
        // ensure the json data is a string
        if (data['replaced_transaction_id'] && !(typeof data['replaced_transaction_id'] === 'string' || data['replaced_transaction_id'] instanceof String)) {
            throw new Error("Expected the field `replaced_transaction_id` to be a primitive type in the JSON string but got " + data['replaced_transaction_id']);
        }
        // ensure the json data is a string
        if (data['replaced_transaction_hash'] && !(typeof data['replaced_transaction_hash'] === 'string' || data['replaced_transaction_hash'] instanceof String)) {
            throw new Error("Expected the field `replaced_transaction_hash` to be a primitive type in the JSON string but got " + data['replaced_transaction_hash']);
        }

        return true;
    }


}



/**
 * @member {module:model/ReplaceType} replaced_by_type
 */
TransactionReplacement.prototype['replaced_by_type'] = undefined;

/**
 * The ID of the transaction that this transaction was replaced by.
 * @member {String} replaced_by_transaction_id
 */
TransactionReplacement.prototype['replaced_by_transaction_id'] = undefined;

/**
 * The hash of the transaction that this transaction was replaced by.
 * @member {String} replaced_by_transaction_hash
 */
TransactionReplacement.prototype['replaced_by_transaction_hash'] = undefined;

/**
 * @member {module:model/ReplaceType} replaced_type
 */
TransactionReplacement.prototype['replaced_type'] = undefined;

/**
 * The ID of the transaction that this transaction replaced.
 * @member {String} replaced_transaction_id
 */
TransactionReplacement.prototype['replaced_transaction_id'] = undefined;

/**
 * The hash of the transaction that this transaction replaced.
 * @member {String} replaced_transaction_hash
 */
TransactionReplacement.prototype['replaced_transaction_hash'] = undefined;






export default TransactionReplacement;

