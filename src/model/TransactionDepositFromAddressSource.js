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
import TransactionSourceType from './TransactionSourceType';
import WalletSubtype from './WalletSubtype';
import WalletType from './WalletType';

/**
 * The TransactionDepositFromAddressSource model module.
 * @module model/TransactionDepositFromAddressSource
 */
class TransactionDepositFromAddressSource {
    /**
     * Constructs a new <code>TransactionDepositFromAddressSource</code>.
     * Information about the transaction source type &#x60;DepositFromAddress&#x60;. 
     * @alias module:model/TransactionDepositFromAddressSource
     * @param source_type {module:model/TransactionSourceType} 
     * @param addresses {Array.<String>} A list of addresses.
     */
    constructor(source_type, addresses) { 
        
        TransactionDepositFromAddressSource.initialize(this, source_type, addresses);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, source_type, addresses) { 
        obj['source_type'] = source_type;
        obj['addresses'] = addresses;
    }

    /**
     * Constructs a <code>TransactionDepositFromAddressSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionDepositFromAddressSource} obj Optional instance to populate.
     * @return {module:model/TransactionDepositFromAddressSource} The populated <code>TransactionDepositFromAddressSource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionDepositFromAddressSource();

            if (data.hasOwnProperty('source_type')) {
                obj['source_type'] = TransactionSourceType.constructFromObject(data['source_type']);
            }
            if (data.hasOwnProperty('wallet_id')) {
                obj['wallet_id'] = ApiClient.convertToType(data['wallet_id'], 'String');
            }
            if (data.hasOwnProperty('wallet_type')) {
                obj['wallet_type'] = WalletType.constructFromObject(data['wallet_type']);
            }
            if (data.hasOwnProperty('wallet_subtype')) {
                obj['wallet_subtype'] = WalletSubtype.constructFromObject(data['wallet_subtype']);
            }
            if (data.hasOwnProperty('addresses')) {
                obj['addresses'] = ApiClient.convertToType(data['addresses'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TransactionDepositFromAddressSource</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransactionDepositFromAddressSource</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TransactionDepositFromAddressSource.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['wallet_id'] && !(typeof data['wallet_id'] === 'string' || data['wallet_id'] instanceof String)) {
            throw new Error("Expected the field `wallet_id` to be a primitive type in the JSON string but got " + data['wallet_id']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['addresses'])) {
            throw new Error("Expected the field `addresses` to be an array in the JSON data but got " + data['addresses']);
        }

        return true;
    }


}

TransactionDepositFromAddressSource.RequiredProperties = ["source_type", "addresses"];

/**
 * @member {module:model/TransactionSourceType} source_type
 */
TransactionDepositFromAddressSource.prototype['source_type'] = undefined;

/**
 * The wallet ID.
 * @member {String} wallet_id
 */
TransactionDepositFromAddressSource.prototype['wallet_id'] = undefined;

/**
 * @member {module:model/WalletType} wallet_type
 */
TransactionDepositFromAddressSource.prototype['wallet_type'] = undefined;

/**
 * @member {module:model/WalletSubtype} wallet_subtype
 */
TransactionDepositFromAddressSource.prototype['wallet_subtype'] = undefined;

/**
 * A list of addresses.
 * @member {Array.<String>} addresses
 */
TransactionDepositFromAddressSource.prototype['addresses'] = undefined;






export default TransactionDepositFromAddressSource;

