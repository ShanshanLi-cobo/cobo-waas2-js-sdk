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
import ActivityType from './ActivityType';
import BaseEstimateStakingFee from './BaseEstimateStakingFee';
import TransactionRequestFee from './TransactionRequestFee';

/**
 * The EstimateClaimFee model module.
 * @module model/EstimateClaimFee
 */
class EstimateClaimFee {
    /**
     * Constructs a new <code>EstimateClaimFee</code>.
     * @alias module:model/EstimateClaimFee
     * @implements module:model/BaseEstimateStakingFee
     * @param activity_type {module:model/ActivityType} 
     */
    constructor(activity_type) { 
        BaseEstimateStakingFee.initialize(this, activity_type);
        EstimateClaimFee.initialize(this, activity_type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, activity_type) { 
        obj['activity_type'] = activity_type;
    }

    /**
     * Constructs a <code>EstimateClaimFee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EstimateClaimFee} obj Optional instance to populate.
     * @return {module:model/EstimateClaimFee} The populated <code>EstimateClaimFee</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EstimateClaimFee();
            BaseEstimateStakingFee.constructFromObject(data, obj);

            if (data.hasOwnProperty('activity_type')) {
                obj['activity_type'] = ActivityType.constructFromObject(data['activity_type']);
            }
            if (data.hasOwnProperty('staking_id')) {
                obj['staking_id'] = ApiClient.convertToType(data['staking_id'], 'String');
            }
            if (data.hasOwnProperty('fee')) {
                obj['fee'] = TransactionRequestFee.constructFromObject(data['fee']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EstimateClaimFee</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EstimateClaimFee</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EstimateClaimFee.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['staking_id'] && !(typeof data['staking_id'] === 'string' || data['staking_id'] instanceof String)) {
            throw new Error("Expected the field `staking_id` to be a primitive type in the JSON string but got " + data['staking_id']);
        }
        // validate the optional field `fee`
        if (data['fee']) { // data not null
          if (!!TransactionRequestFee.validateJSON) {
            TransactionRequestFee.validateJSON(data['fee']);
          }
        }

        return true;
    }


}

EstimateClaimFee.RequiredProperties = ["activity_type"];

/**
 * @member {module:model/ActivityType} activity_type
 */
EstimateClaimFee.prototype['activity_type'] = undefined;

/**
 * The ID of the staking position. You can retrieve a list of staking positions by calling [List staking positions](/v2/api-references/stakings/list-staking-positions).
 * @member {String} staking_id
 */
EstimateClaimFee.prototype['staking_id'] = undefined;

/**
 * @member {module:model/TransactionRequestFee} fee
 */
EstimateClaimFee.prototype['fee'] = undefined;


// Implement BaseEstimateStakingFee interface:
/**
 * @member {module:model/ActivityType} activity_type
 */
BaseEstimateStakingFee.prototype['activity_type'] = undefined;




export default EstimateClaimFee;

