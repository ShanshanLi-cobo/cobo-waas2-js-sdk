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
import EstimatedEvmEip1559FeeSlow from './EstimatedEvmEip1559FeeSlow';
import FeeType from './FeeType';

/**
 * The EstimatedEvmEip1559Fee model module.
 * @module model/EstimatedEvmEip1559Fee
 */
class EstimatedEvmEip1559Fee {
    /**
     * Constructs a new <code>EstimatedEvmEip1559Fee</code>.
     * The estimated transaction fee based on the EIP-1559 fee model.
     * @alias module:model/EstimatedEvmEip1559Fee
     * @param fee_type {module:model/FeeType} 
     * @param token_id {String} The token ID of the transaction fee.
     * @param recommended {module:model/EstimatedEvmEip1559FeeSlow} 
     */
    constructor(fee_type, token_id, recommended) { 
        
        EstimatedEvmEip1559Fee.initialize(this, fee_type, token_id, recommended);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fee_type, token_id, recommended) { 
        obj['fee_type'] = fee_type;
        obj['token_id'] = token_id;
        obj['recommended'] = recommended;
    }

    /**
     * Constructs a <code>EstimatedEvmEip1559Fee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EstimatedEvmEip1559Fee} obj Optional instance to populate.
     * @return {module:model/EstimatedEvmEip1559Fee} The populated <code>EstimatedEvmEip1559Fee</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EstimatedEvmEip1559Fee();

            if (data.hasOwnProperty('fee_type')) {
                obj['fee_type'] = FeeType.constructFromObject(data['fee_type']);
            }
            if (data.hasOwnProperty('token_id')) {
                obj['token_id'] = ApiClient.convertToType(data['token_id'], 'String');
            }
            if (data.hasOwnProperty('slow')) {
                obj['slow'] = EstimatedEvmEip1559FeeSlow.constructFromObject(data['slow']);
            }
            if (data.hasOwnProperty('recommended')) {
                obj['recommended'] = EstimatedEvmEip1559FeeSlow.constructFromObject(data['recommended']);
            }
            if (data.hasOwnProperty('fast')) {
                obj['fast'] = EstimatedEvmEip1559FeeSlow.constructFromObject(data['fast']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EstimatedEvmEip1559Fee</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EstimatedEvmEip1559Fee</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EstimatedEvmEip1559Fee.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['token_id'] && !(typeof data['token_id'] === 'string' || data['token_id'] instanceof String)) {
            throw new Error("Expected the field `token_id` to be a primitive type in the JSON string but got " + data['token_id']);
        }
        // validate the optional field `slow`
        if (data['slow']) { // data not null
          EstimatedEvmEip1559FeeSlow.validateJSON(data['slow']);
        }
        // validate the optional field `recommended`
        if (data['recommended']) { // data not null
          EstimatedEvmEip1559FeeSlow.validateJSON(data['recommended']);
        }
        // validate the optional field `fast`
        if (data['fast']) { // data not null
          EstimatedEvmEip1559FeeSlow.validateJSON(data['fast']);
        }

        return true;
    }


}

EstimatedEvmEip1559Fee.RequiredProperties = ["fee_type", "token_id", "recommended"];

/**
 * @member {module:model/FeeType} fee_type
 */
EstimatedEvmEip1559Fee.prototype['fee_type'] = undefined;

/**
 * The token ID of the transaction fee.
 * @member {String} token_id
 */
EstimatedEvmEip1559Fee.prototype['token_id'] = undefined;

/**
 * @member {module:model/EstimatedEvmEip1559FeeSlow} slow
 */
EstimatedEvmEip1559Fee.prototype['slow'] = undefined;

/**
 * @member {module:model/EstimatedEvmEip1559FeeSlow} recommended
 */
EstimatedEvmEip1559Fee.prototype['recommended'] = undefined;

/**
 * @member {module:model/EstimatedEvmEip1559FeeSlow} fast
 */
EstimatedEvmEip1559Fee.prototype['fast'] = undefined;






export default EstimatedEvmEip1559Fee;

