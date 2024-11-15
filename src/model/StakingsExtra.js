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
import BabylonStakingExtra from './BabylonStakingExtra';
import EthStakingExtra from './EthStakingExtra';
import StakingPoolType from './StakingPoolType';

/**
 * The StakingsExtra model module.
 * @module model/StakingsExtra
 */
class StakingsExtra {
    /**
     * Constructs a new <code>StakingsExtra</code>.
     * @alias module:model/StakingsExtra
     * @param {(module:model/BabylonStakingExtra|module:model/EthStakingExtra)} instance The actual instance to initialize StakingsExtra.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        var discriminatorValue = instance["pool_type"];

        if (discriminatorValue) {
            switch(discriminatorValue) {
                case "Babylon":
                    this.actualInstance = BabylonStakingExtra.constructFromObject(instance);
                    match++;
                    break;
                case "ETHBeacon":
                    this.actualInstance = EthStakingExtra.constructFromObject(instance);
                    match++;
                    break;
                default:
                    errorMessages.push("Unrecognized discriminator value: " + discriminatorValue);
                    break;
            }
            return;
        }

        try {
            if (instance instanceof BabylonStakingExtra) {
                this.actualInstance = instance;
            } else if(!!BabylonStakingExtra.validateJSON && BabylonStakingExtra.validateJSON(instance)){
                // plain JS object
                // create BabylonStakingExtra from JS object
                this.actualInstance = BabylonStakingExtra.constructFromObject(instance);
            } else {
                if(BabylonStakingExtra.constructFromObject(instance)) {
                    if (!!BabylonStakingExtra.constructFromObject(instance).toJSON) {
                        if (BabylonStakingExtra.constructFromObject(instance).toJSON()) {
                            this.actualInstance = BabylonStakingExtra.constructFromObject(instance);
                        }
                    } else {
                        this.actualInstance = BabylonStakingExtra.constructFromObject(instance);
                    }
                }

            }
            match++;
        } catch(err) {
            // json data failed to deserialize into BabylonStakingExtra
            errorMessages.push("Failed to construct BabylonStakingExtra: " + err)
        }

        try {
            if (instance instanceof EthStakingExtra) {
                this.actualInstance = instance;
            } else if(!!EthStakingExtra.validateJSON && EthStakingExtra.validateJSON(instance)){
                // plain JS object
                // create EthStakingExtra from JS object
                this.actualInstance = EthStakingExtra.constructFromObject(instance);
            } else {
                if(EthStakingExtra.constructFromObject(instance)) {
                    if (!!EthStakingExtra.constructFromObject(instance).toJSON) {
                        if (EthStakingExtra.constructFromObject(instance).toJSON()) {
                            this.actualInstance = EthStakingExtra.constructFromObject(instance);
                        }
                    } else {
                        this.actualInstance = EthStakingExtra.constructFromObject(instance);
                    }
                }

            }
            match++;
        } catch(err) {
            // json data failed to deserialize into EthStakingExtra
            errorMessages.push("Failed to construct EthStakingExtra: " + err)
        }

        // if (match > 1) {
        //    throw new Error("Multiple matches found constructing `StakingsExtra` with oneOf schemas BabylonStakingExtra, EthStakingExtra. Input: " + JSON.stringify(instance));
        // } else
        if (match === 0) {
        //    this.actualInstance = null; // clear the actual instance in case there are multiple matches
        //    throw new Error("No match found constructing `StakingsExtra` with oneOf schemas BabylonStakingExtra, EthStakingExtra. Details: " +
        //                    errorMessages.join(", "));
        return;
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>StakingsExtra</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StakingsExtra} obj Optional instance to populate.
     * @return {module:model/StakingsExtra} The populated <code>StakingsExtra</code> instance.
     */
    static constructFromObject(data, obj) {
        return new StakingsExtra(data);
    }

    /**
     * Gets the actual instance, which can be <code>BabylonStakingExtra</code>, <code>EthStakingExtra</code>.
     * @return {(module:model/BabylonStakingExtra|module:model/EthStakingExtra)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>BabylonStakingExtra</code>, <code>EthStakingExtra</code>.
     * @param {(module:model/BabylonStakingExtra|module:model/EthStakingExtra)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = StakingsExtra.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of StakingsExtra from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/StakingsExtra} An instance of StakingsExtra.
     */
    static fromJSON = function(json_string){
        return StakingsExtra.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * @member {module:model/StakingPoolType} pool_type
 */
StakingsExtra.prototype['pool_type'] = undefined;

/**
 * The Proof-of-Stake (PoS) chain.
 * @member {String} pos_chain
 */
StakingsExtra.prototype['pos_chain'] = undefined;

/**
 * The estimated time when the bitcoins will be unlocked, in Unix timestamp format, measured in milliseconds.
 * @member {Number} unlock_timestamp
 */
StakingsExtra.prototype['unlock_timestamp'] = undefined;

/**
 * The block height at which the bitcoins will be unlocked.
 * @member {Number} unlock_block_height
 */
StakingsExtra.prototype['unlock_block_height'] = undefined;

/**
 * The address receiving the staked bitcoins.
 * @member {String} stake_address
 */
StakingsExtra.prototype['stake_address'] = undefined;

/**
 * The address receiving the unlocked bitcoins.
 * @member {String} unbond_address
 */
StakingsExtra.prototype['unbond_address'] = undefined;


StakingsExtra.OneOf = ["BabylonStakingExtra", "EthStakingExtra"];

export default StakingsExtra;

