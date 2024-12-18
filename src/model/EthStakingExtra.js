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
import BaseStakeExtra from './BaseStakeExtra';
import EthStakingExtraAllOfBeaconValidators from './EthStakingExtraAllOfBeaconValidators';
import StakingPoolType from './StakingPoolType';

/**
 * The EthStakingExtra model module.
 * @module model/EthStakingExtra
 */
class EthStakingExtra {
    /**
     * Constructs a new <code>EthStakingExtra</code>.
     * @alias module:model/EthStakingExtra
     * @implements module:model/BaseStakeExtra
     * @param pool_type {module:model/StakingPoolType} 
     * @param pos_chain {String} The Proof-of-Stake (PoS) chain.
     */
    constructor(pool_type, pos_chain) { 
        BaseStakeExtra.initialize(this, pool_type);
        EthStakingExtra.initialize(this, pool_type, pos_chain);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pool_type, pos_chain) { 
        obj['pool_type'] = pool_type;
        obj['pos_chain'] = pos_chain;
    }

    /**
     * Constructs a <code>EthStakingExtra</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EthStakingExtra} obj Optional instance to populate.
     * @return {module:model/EthStakingExtra} The populated <code>EthStakingExtra</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EthStakingExtra();
            BaseStakeExtra.constructFromObject(data, obj);

            if (data.hasOwnProperty('pool_type')) {
                obj['pool_type'] = StakingPoolType.constructFromObject(data['pool_type']);
            }
            if (data.hasOwnProperty('pos_chain')) {
                obj['pos_chain'] = ApiClient.convertToType(data['pos_chain'], 'String');
            }
            if (data.hasOwnProperty('beacon_validators')) {
                obj['beacon_validators'] = ApiClient.convertToType(data['beacon_validators'], [EthStakingExtraAllOfBeaconValidators]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EthStakingExtra</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EthStakingExtra</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EthStakingExtra.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['pos_chain'] && !(typeof data['pos_chain'] === 'string' || data['pos_chain'] instanceof String)) {
            throw new Error("Expected the field `pos_chain` to be a primitive type in the JSON string but got " + data['pos_chain']);
        }
        if (data['beacon_validators']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['beacon_validators'])) {
                throw new Error("Expected the field `beacon_validators` to be an array in the JSON data but got " + data['beacon_validators']);
            }
            // validate the optional field `beacon_validators` (array)
            for (const item of data['beacon_validators']) {
                EthStakingExtraAllOfBeaconValidators.validateJSON(item);
            };
        }

        return true;
    }


}

EthStakingExtra.RequiredProperties = ["pool_type", "pos_chain"];

/**
 * @member {module:model/StakingPoolType} pool_type
 */
EthStakingExtra.prototype['pool_type'] = undefined;

/**
 * The Proof-of-Stake (PoS) chain.
 * @member {String} pos_chain
 */
EthStakingExtra.prototype['pos_chain'] = undefined;

/**
 * The list of validator information.
 * @member {Array.<module:model/EthStakingExtraAllOfBeaconValidators>} beacon_validators
 */
EthStakingExtra.prototype['beacon_validators'] = undefined;


// Implement BaseStakeExtra interface:
/**
 * @member {module:model/StakingPoolType} pool_type
 */
BaseStakeExtra.prototype['pool_type'] = undefined;




export default EthStakingExtra;

