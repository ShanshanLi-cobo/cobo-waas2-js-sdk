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
import ActivityInitiator from './ActivityInitiator';
import CreateStakeActivity from './CreateStakeActivity';
import CreateStakeActivityExtra from './CreateStakeActivityExtra';
import StakingPoolId from './StakingPoolId';
import StakingSource from './StakingSource';
import TransactionRequestFee from './TransactionRequestFee';

/**
 * The CreateStakeActivityRequest model module.
 * @module model/CreateStakeActivityRequest
 */
class CreateStakeActivityRequest {
    /**
     * Constructs a new <code>CreateStakeActivityRequest</code>.
     * @alias module:model/CreateStakeActivityRequest
     * @implements module:model/CreateStakeActivity
     * @implements module:model/ActivityInitiator
     * @param pool_id {module:model/StakingPoolId} 
     * @param amount {String} The amount to stake.
     * @param fee {module:model/TransactionRequestFee} 
     */
    constructor(pool_id, amount, fee) { 
        CreateStakeActivity.initialize(this, pool_id, amount, fee);ActivityInitiator.initialize(this);
        CreateStakeActivityRequest.initialize(this, pool_id, amount, fee);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pool_id, amount, fee) { 
        obj['pool_id'] = pool_id;
        obj['amount'] = amount;
        obj['fee'] = fee;
    }

    /**
     * Constructs a <code>CreateStakeActivityRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateStakeActivityRequest} obj Optional instance to populate.
     * @return {module:model/CreateStakeActivityRequest} The populated <code>CreateStakeActivityRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateStakeActivityRequest();
            CreateStakeActivity.constructFromObject(data, obj);
            ActivityInitiator.constructFromObject(data, obj);

            if (data.hasOwnProperty('request_id')) {
                obj['request_id'] = ApiClient.convertToType(data['request_id'], 'String');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = StakingSource.constructFromObject(data['source']);
            }
            if (data.hasOwnProperty('pool_id')) {
                obj['pool_id'] = StakingPoolId.constructFromObject(data['pool_id']);
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('fee')) {
                obj['fee'] = TransactionRequestFee.constructFromObject(data['fee']);
            }
            if (data.hasOwnProperty('extra')) {
                obj['extra'] = CreateStakeActivityExtra.constructFromObject(data['extra']);
            }
            if (data.hasOwnProperty('app_initiator')) {
                obj['app_initiator'] = ApiClient.convertToType(data['app_initiator'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateStakeActivityRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateStakeActivityRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateStakeActivityRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['request_id'] && !(typeof data['request_id'] === 'string' || data['request_id'] instanceof String)) {
            throw new Error("Expected the field `request_id` to be a primitive type in the JSON string but got " + data['request_id']);
        }
        // validate the optional field `source`
        if (data['source']) { // data not null
          if (!!StakingSource.validateJSON) {
            StakingSource.validateJSON(data['source']);
          }
        }
        // ensure the json data is a string
        if (data['amount'] && !(typeof data['amount'] === 'string' || data['amount'] instanceof String)) {
            throw new Error("Expected the field `amount` to be a primitive type in the JSON string but got " + data['amount']);
        }
        // validate the optional field `fee`
        if (data['fee']) { // data not null
          if (!!TransactionRequestFee.validateJSON) {
            TransactionRequestFee.validateJSON(data['fee']);
          }
        }
        // validate the optional field `extra`
        if (data['extra']) { // data not null
          if (!!CreateStakeActivityExtra.validateJSON) {
            CreateStakeActivityExtra.validateJSON(data['extra']);
          }
        }
        // ensure the json data is a string
        if (data['app_initiator'] && !(typeof data['app_initiator'] === 'string' || data['app_initiator'] instanceof String)) {
            throw new Error("Expected the field `app_initiator` to be a primitive type in the JSON string but got " + data['app_initiator']);
        }

        return true;
    }


}

CreateStakeActivityRequest.RequiredProperties = ["pool_id", "amount", "fee"];

/**
 * The request ID that is used to track a request. The request ID is provided by you and must be unique within your organization.
 * @member {String} request_id
 */
CreateStakeActivityRequest.prototype['request_id'] = undefined;

/**
 * @member {module:model/StakingSource} source
 */
CreateStakeActivityRequest.prototype['source'] = undefined;

/**
 * @member {module:model/StakingPoolId} pool_id
 */
CreateStakeActivityRequest.prototype['pool_id'] = undefined;

/**
 * The amount to stake.
 * @member {String} amount
 */
CreateStakeActivityRequest.prototype['amount'] = undefined;

/**
 * @member {module:model/TransactionRequestFee} fee
 */
CreateStakeActivityRequest.prototype['fee'] = undefined;

/**
 * @member {module:model/CreateStakeActivityExtra} extra
 */
CreateStakeActivityRequest.prototype['extra'] = undefined;

/**
 * The initiator of the staking activity. If you do not specify this property, the WaaS service will automatically designate the API key as the initiator.
 * @member {String} app_initiator
 */
CreateStakeActivityRequest.prototype['app_initiator'] = undefined;


// Implement CreateStakeActivity interface:
/**
 * The request ID that is used to track a request. The request ID is provided by you and must be unique within your organization.
 * @member {String} request_id
 */
CreateStakeActivity.prototype['request_id'] = undefined;
/**
 * @member {module:model/StakingSource} source
 */
CreateStakeActivity.prototype['source'] = undefined;
/**
 * @member {module:model/StakingPoolId} pool_id
 */
CreateStakeActivity.prototype['pool_id'] = undefined;
/**
 * The amount to stake.
 * @member {String} amount
 */
CreateStakeActivity.prototype['amount'] = undefined;
/**
 * @member {module:model/TransactionRequestFee} fee
 */
CreateStakeActivity.prototype['fee'] = undefined;
/**
 * @member {module:model/CreateStakeActivityExtra} extra
 */
CreateStakeActivity.prototype['extra'] = undefined;
// Implement ActivityInitiator interface:
/**
 * The initiator of the staking activity. If you do not specify this property, the WaaS service will automatically designate the API key as the initiator.
 * @member {String} app_initiator
 */
ActivityInitiator.prototype['app_initiator'] = undefined;




export default CreateStakeActivityRequest;

