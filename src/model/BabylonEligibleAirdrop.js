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
import BabylonAirdropPop from './BabylonAirdropPop';
import BabylonRegistrationStatus from './BabylonRegistrationStatus';
import StakingSource from './StakingSource';

/**
 * The BabylonEligibleAirdrop model module.
 * @module model/BabylonEligibleAirdrop
 */
class BabylonEligibleAirdrop {
    /**
     * Constructs a new <code>BabylonEligibleAirdrop</code>.
     * The babylon airdrop eligibility.
     * @alias module:model/BabylonEligibleAirdrop
     */
    constructor() { 
        
        BabylonEligibleAirdrop.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BabylonEligibleAirdrop</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BabylonEligibleAirdrop} obj Optional instance to populate.
     * @return {module:model/BabylonEligibleAirdrop} The populated <code>BabylonEligibleAirdrop</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BabylonEligibleAirdrop();

            if (data.hasOwnProperty('btc_address')) {
                obj['btc_address'] = StakingSource.constructFromObject(data['btc_address']);
            }
            if (data.hasOwnProperty('babylon_address')) {
                obj['babylon_address'] = StakingSource.constructFromObject(data['babylon_address']);
            }
            if (data.hasOwnProperty('babylon_points')) {
                obj['babylon_points'] = ApiClient.convertToType(data['babylon_points'], 'String');
            }
            if (data.hasOwnProperty('airdrop_amount')) {
                obj['airdrop_amount'] = ApiClient.convertToType(data['airdrop_amount'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = BabylonRegistrationStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('pop')) {
                obj['pop'] = BabylonAirdropPop.constructFromObject(data['pop']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BabylonEligibleAirdrop</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BabylonEligibleAirdrop</code>.
     */
    static validateJSON(data) {
        // validate the optional field `btc_address`
        if (data['btc_address']) { // data not null
          if (!!StakingSource.validateJSON) {
            StakingSource.validateJSON(data['btc_address']);
          }
        }
        // validate the optional field `babylon_address`
        if (data['babylon_address']) { // data not null
          if (!!StakingSource.validateJSON) {
            StakingSource.validateJSON(data['babylon_address']);
          }
        }
        // ensure the json data is a string
        if (data['babylon_points'] && !(typeof data['babylon_points'] === 'string' || data['babylon_points'] instanceof String)) {
            throw new Error("Expected the field `babylon_points` to be a primitive type in the JSON string but got " + data['babylon_points']);
        }
        // ensure the json data is a string
        if (data['airdrop_amount'] && !(typeof data['airdrop_amount'] === 'string' || data['airdrop_amount'] instanceof String)) {
            throw new Error("Expected the field `airdrop_amount` to be a primitive type in the JSON string but got " + data['airdrop_amount']);
        }
        // validate the optional field `pop`
        if (data['pop']) { // data not null
          if (!!BabylonAirdropPop.validateJSON) {
            BabylonAirdropPop.validateJSON(data['pop']);
          }
        }

        return true;
    }


}



/**
 * @member {module:model/StakingSource} btc_address
 */
BabylonEligibleAirdrop.prototype['btc_address'] = undefined;

/**
 * @member {module:model/StakingSource} babylon_address
 */
BabylonEligibleAirdrop.prototype['babylon_address'] = undefined;

/**
 * The current Babylon points balance accumulated by the BTC address.
 * @member {String} babylon_points
 */
BabylonEligibleAirdrop.prototype['babylon_points'] = undefined;

/**
 * The estimated airdrop amount based on the current Babylon points balance.
 * @member {String} airdrop_amount
 */
BabylonEligibleAirdrop.prototype['airdrop_amount'] = undefined;

/**
 * @member {module:model/BabylonRegistrationStatus} status
 */
BabylonEligibleAirdrop.prototype['status'] = undefined;

/**
 * @member {module:model/BabylonAirdropPop} pop
 */
BabylonEligibleAirdrop.prototype['pop'] = undefined;






export default BabylonEligibleAirdrop;

