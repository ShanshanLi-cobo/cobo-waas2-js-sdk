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
import ActivityType from './ActivityType';
import BaseEstimateStakingFee from './BaseEstimateStakingFee';
import CreateUnstakeActivity from './CreateUnstakeActivity';
import TransactionRequestFee from './TransactionRequestFee';

/**
 * The EstimateUnstakeFee model module.
 * @module model/EstimateUnstakeFee
 */
class EstimateUnstakeFee {
    /**
     * Constructs a new <code>EstimateUnstakeFee</code>.
     * @alias module:model/EstimateUnstakeFee
     * @implements module:model/BaseEstimateStakingFee
     * @implements module:model/CreateUnstakeActivity
     * @param activity_type {module:model/ActivityType} 
     * @param staking_id {String} The id of the related staking.
     */
    constructor(activity_type, staking_id) { 
        BaseEstimateStakingFee.initialize(this, activity_type);CreateUnstakeActivity.initialize(this, staking_id);
        EstimateUnstakeFee.initialize(this, activity_type, staking_id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, activity_type, staking_id) { 
        obj['activity_type'] = activity_type;
        obj['staking_id'] = staking_id;
    }

    /**
     * Constructs a <code>EstimateUnstakeFee</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EstimateUnstakeFee} obj Optional instance to populate.
     * @return {module:model/EstimateUnstakeFee} The populated <code>EstimateUnstakeFee</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EstimateUnstakeFee();
            BaseEstimateStakingFee.constructFromObject(data, obj);
            CreateUnstakeActivity.constructFromObject(data, obj);

            if (data.hasOwnProperty('activity_type')) {
                obj['activity_type'] = ActivityType.constructFromObject(data['activity_type']);
            }
            if (data.hasOwnProperty('staking_id')) {
                obj['staking_id'] = ApiClient.convertToType(data['staking_id'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('fee')) {
                obj['fee'] = TransactionRequestFee.constructFromObject(data['fee']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EstimateUnstakeFee</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EstimateUnstakeFee</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EstimateUnstakeFee.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['staking_id'] && !(typeof data['staking_id'] === 'string' || data['staking_id'] instanceof String)) {
            throw new Error("Expected the field `staking_id` to be a primitive type in the JSON string but got " + data['staking_id']);
        }
        // ensure the json data is a string
        if (data['amount'] && !(typeof data['amount'] === 'string' || data['amount'] instanceof String)) {
            throw new Error("Expected the field `amount` to be a primitive type in the JSON string but got " + data['amount']);
        }
        // validate the optional field `fee`
        if (data['fee']) { // data not null
          TransactionRequestFee.validateJSON(data['fee']);
        }

        return true;
    }


}

EstimateUnstakeFee.RequiredProperties = ["activity_type", "staking_id"];

/**
 * @member {module:model/ActivityType} activity_type
 */
EstimateUnstakeFee.prototype['activity_type'] = undefined;

/**
 * The id of the related staking.
 * @member {String} staking_id
 */
EstimateUnstakeFee.prototype['staking_id'] = undefined;

/**
 * The amount to stake
 * @member {String} amount
 */
EstimateUnstakeFee.prototype['amount'] = undefined;

/**
 * @member {module:model/TransactionRequestFee} fee
 */
EstimateUnstakeFee.prototype['fee'] = undefined;


// Implement BaseEstimateStakingFee interface:
/**
 * @member {module:model/ActivityType} activity_type
 */
BaseEstimateStakingFee.prototype['activity_type'] = undefined;
// Implement CreateUnstakeActivity interface:
/**
 * The id of the related staking.
 * @member {String} staking_id
 */
CreateUnstakeActivity.prototype['staking_id'] = undefined;
/**
 * The amount to stake
 * @member {String} amount
 */
CreateUnstakeActivity.prototype['amount'] = undefined;
/**
 * @member {module:model/TransactionRequestFee} fee
 */
CreateUnstakeActivity.prototype['fee'] = undefined;




export default EstimateUnstakeFee;

