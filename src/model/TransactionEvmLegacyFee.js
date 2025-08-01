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
import EvmLegacyFeeBasePrice from './EvmLegacyFeeBasePrice';
import FeeGasLimit from './FeeGasLimit';
import FeeType from './FeeType';

/**
 * The TransactionEvmLegacyFee model module.
 * @module model/TransactionEvmLegacyFee
 */
class TransactionEvmLegacyFee {
    /**
     * Constructs a new <code>TransactionEvmLegacyFee</code>.
     * The transaction fee actually charged by the chain that uses the legacy fee model.   The transaction fee is calculated by multiplying the gas price by the used gas. This can be expressed as: Transaction fee &#x3D; gas price * used gas units.  Switch between the tabs to display the properties for different transaction fee models. 
     * @alias module:model/TransactionEvmLegacyFee
     * @implements module:model/EvmLegacyFeeBasePrice
     * @implements module:model/FeeGasLimit
     * @param fee_type {module:model/FeeType} 
     */
    constructor(fee_type) { 
        EvmLegacyFeeBasePrice.initialize(this);FeeGasLimit.initialize(this);
        TransactionEvmLegacyFee.initialize(this, fee_type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fee_type) { 
        obj['fee_type'] = fee_type;
    }

    /**
     * Constructs a <code>TransactionEvmLegacyFee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionEvmLegacyFee} obj Optional instance to populate.
     * @return {module:model/TransactionEvmLegacyFee} The populated <code>TransactionEvmLegacyFee</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionEvmLegacyFee();
            EvmLegacyFeeBasePrice.constructFromObject(data, obj);
            FeeGasLimit.constructFromObject(data, obj);

            if (data.hasOwnProperty('gas_price')) {
                obj['gas_price'] = ApiClient.convertToType(data['gas_price'], 'String');
            }
            if (data.hasOwnProperty('gas_limit')) {
                obj['gas_limit'] = ApiClient.convertToType(data['gas_limit'], 'String');
            }
            if (data.hasOwnProperty('fee_type')) {
                obj['fee_type'] = FeeType.constructFromObject(data['fee_type']);
            }
            if (data.hasOwnProperty('token_id')) {
                obj['token_id'] = ApiClient.convertToType(data['token_id'], 'String');
            }
            if (data.hasOwnProperty('fee_used')) {
                obj['fee_used'] = ApiClient.convertToType(data['fee_used'], 'String');
            }
            if (data.hasOwnProperty('estimated_fee_used')) {
                obj['estimated_fee_used'] = ApiClient.convertToType(data['estimated_fee_used'], 'String');
            }
            if (data.hasOwnProperty('gas_used')) {
                obj['gas_used'] = ApiClient.convertToType(data['gas_used'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TransactionEvmLegacyFee</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransactionEvmLegacyFee</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TransactionEvmLegacyFee.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['gas_price'] && !(typeof data['gas_price'] === 'string' || data['gas_price'] instanceof String)) {
            throw new Error("Expected the field `gas_price` to be a primitive type in the JSON string but got " + data['gas_price']);
        }
        // ensure the json data is a string
        if (data['gas_limit'] && !(typeof data['gas_limit'] === 'string' || data['gas_limit'] instanceof String)) {
            throw new Error("Expected the field `gas_limit` to be a primitive type in the JSON string but got " + data['gas_limit']);
        }
        // ensure the json data is a string
        if (data['token_id'] && !(typeof data['token_id'] === 'string' || data['token_id'] instanceof String)) {
            throw new Error("Expected the field `token_id` to be a primitive type in the JSON string but got " + data['token_id']);
        }
        // ensure the json data is a string
        if (data['fee_used'] && !(typeof data['fee_used'] === 'string' || data['fee_used'] instanceof String)) {
            throw new Error("Expected the field `fee_used` to be a primitive type in the JSON string but got " + data['fee_used']);
        }
        // ensure the json data is a string
        if (data['estimated_fee_used'] && !(typeof data['estimated_fee_used'] === 'string' || data['estimated_fee_used'] instanceof String)) {
            throw new Error("Expected the field `estimated_fee_used` to be a primitive type in the JSON string but got " + data['estimated_fee_used']);
        }
        // ensure the json data is a string
        if (data['gas_used'] && !(typeof data['gas_used'] === 'string' || data['gas_used'] instanceof String)) {
            throw new Error("Expected the field `gas_used` to be a primitive type in the JSON string but got " + data['gas_used']);
        }

        return true;
    }


}

TransactionEvmLegacyFee.RequiredProperties = ["fee_type"];

/**
 * The gas price, in wei. The gas price represents the amount of ETH that must be paid to validators for processing transactions per gas unit used.
 * @member {String} gas_price
 */
TransactionEvmLegacyFee.prototype['gas_price'] = undefined;

/**
 * The gas limit. It represents the maximum number of gas units that you are willing to pay for the execution of a transaction or Ethereum Virtual Machine (EVM) operation. The gas unit cost of each operation varies.
 * @member {String} gas_limit
 */
TransactionEvmLegacyFee.prototype['gas_limit'] = undefined;

/**
 * @member {module:model/FeeType} fee_type
 */
TransactionEvmLegacyFee.prototype['fee_type'] = undefined;

/**
 * The token used to pay the transaction fee.
 * @member {String} token_id
 */
TransactionEvmLegacyFee.prototype['token_id'] = undefined;

/**
 * The actually charged transaction fee.
 * @member {String} fee_used
 */
TransactionEvmLegacyFee.prototype['fee_used'] = undefined;

/**
 * The estimated transaction fee.
 * @member {String} estimated_fee_used
 */
TransactionEvmLegacyFee.prototype['estimated_fee_used'] = undefined;

/**
 * The gas units used in the transaction.
 * @member {String} gas_used
 */
TransactionEvmLegacyFee.prototype['gas_used'] = undefined;


// Implement EvmLegacyFeeBasePrice interface:
/**
 * The gas price, in wei. The gas price represents the amount of ETH that must be paid to validators for processing transactions per gas unit used.
 * @member {String} gas_price
 */
EvmLegacyFeeBasePrice.prototype['gas_price'] = undefined;
// Implement FeeGasLimit interface:
/**
 * The gas limit. It represents the maximum number of gas units that you are willing to pay for the execution of a transaction or Ethereum Virtual Machine (EVM) operation. The gas unit cost of each operation varies.
 * @member {String} gas_limit
 */
FeeGasLimit.prototype['gas_limit'] = undefined;




export default TransactionEvmLegacyFee;

