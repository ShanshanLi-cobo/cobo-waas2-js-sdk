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
import BabylonRegistrationRequestStatus from './BabylonRegistrationRequestStatus';
import StakingSource from './StakingSource';

/**
 * The BabylonStakingRegistration model module.
 * @module model/BabylonStakingRegistration
 */
class BabylonStakingRegistration {
    /**
     * Constructs a new <code>BabylonStakingRegistration</code>.
     * The details of aBabylon Phase-2 registration.
     * @alias module:model/BabylonStakingRegistration
     */
    constructor() { 
        
        BabylonStakingRegistration.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BabylonStakingRegistration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BabylonStakingRegistration} obj Optional instance to populate.
     * @return {module:model/BabylonStakingRegistration} The populated <code>BabylonStakingRegistration</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BabylonStakingRegistration();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('staking_id')) {
                obj['staking_id'] = ApiClient.convertToType(data['staking_id'], 'String');
            }
            if (data.hasOwnProperty('babylon_address')) {
                obj['babylon_address'] = StakingSource.constructFromObject(data['babylon_address']);
            }
            if (data.hasOwnProperty('btc_address')) {
                obj['btc_address'] = StakingSource.constructFromObject(data['btc_address']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = BabylonRegistrationRequestStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('staked_amount')) {
                obj['staked_amount'] = ApiClient.convertToType(data['staked_amount'], 'String');
            }
            if (data.hasOwnProperty('error_message')) {
                obj['error_message'] = ApiClient.convertToType(data['error_message'], 'String');
            }
            if (data.hasOwnProperty('created_timestamp')) {
                obj['created_timestamp'] = ApiClient.convertToType(data['created_timestamp'], 'Number');
            }
            if (data.hasOwnProperty('updated_timestamp')) {
                obj['updated_timestamp'] = ApiClient.convertToType(data['updated_timestamp'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BabylonStakingRegistration</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BabylonStakingRegistration</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['staking_id'] && !(typeof data['staking_id'] === 'string' || data['staking_id'] instanceof String)) {
            throw new Error("Expected the field `staking_id` to be a primitive type in the JSON string but got " + data['staking_id']);
        }
        // validate the optional field `babylon_address`
        if (data['babylon_address']) { // data not null
          if (!!StakingSource.validateJSON) {
            StakingSource.validateJSON(data['babylon_address']);
          }
        }
        // validate the optional field `btc_address`
        if (data['btc_address']) { // data not null
          if (!!StakingSource.validateJSON) {
            StakingSource.validateJSON(data['btc_address']);
          }
        }
        // ensure the json data is a string
        if (data['staked_amount'] && !(typeof data['staked_amount'] === 'string' || data['staked_amount'] instanceof String)) {
            throw new Error("Expected the field `staked_amount` to be a primitive type in the JSON string but got " + data['staked_amount']);
        }
        // ensure the json data is a string
        if (data['error_message'] && !(typeof data['error_message'] === 'string' || data['error_message'] instanceof String)) {
            throw new Error("Expected the field `error_message` to be a primitive type in the JSON string but got " + data['error_message']);
        }

        return true;
    }


}



/**
 * The registration ID, a unique identifier for tracking the staking registration.
 * @member {String} id
 */
BabylonStakingRegistration.prototype['id'] = undefined;

/**
 * The ID of the Phase-1 BTC staking position.
 * @member {String} staking_id
 */
BabylonStakingRegistration.prototype['staking_id'] = undefined;

/**
 * @member {module:model/StakingSource} babylon_address
 */
BabylonStakingRegistration.prototype['babylon_address'] = undefined;

/**
 * @member {module:model/StakingSource} btc_address
 */
BabylonStakingRegistration.prototype['btc_address'] = undefined;

/**
 * @member {module:model/BabylonRegistrationRequestStatus} status
 */
BabylonStakingRegistration.prototype['status'] = undefined;

/**
 * The amount of BTC that is staked.
 * @member {String} staked_amount
 */
BabylonStakingRegistration.prototype['staked_amount'] = undefined;

/**
 * The error message if the Babylon Phase-2 registration request failed.
 * @member {String} error_message
 */
BabylonStakingRegistration.prototype['error_message'] = undefined;

/**
 * The time when the registration was created, in Unix timestamp format, measured in milliseconds.
 * @member {Number} created_timestamp
 */
BabylonStakingRegistration.prototype['created_timestamp'] = undefined;

/**
 * The time when the registration was updated, in Unix timestamp format, measured in milliseconds.
 * @member {Number} updated_timestamp
 */
BabylonStakingRegistration.prototype['updated_timestamp'] = undefined;






export default BabylonStakingRegistration;

