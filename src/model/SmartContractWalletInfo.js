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
import SafeWallet from './SafeWallet';
import SmartContractInitiator from './SmartContractInitiator';
import SmartContractWalletType from './SmartContractWalletType';
import WalletSubtype from './WalletSubtype';
import WalletType from './WalletType';

/**
 * The SmartContractWalletInfo model module.
 * @module model/SmartContractWalletInfo
 */
class SmartContractWalletInfo {
    /**
     * Constructs a new <code>SmartContractWalletInfo</code>.
     * @alias module:model/SmartContractWalletInfo
     * @param {(module:model/SafeWallet)} instance The actual instance to initialize SmartContractWalletInfo.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        try {
            if (instance instanceof SafeWallet) {
                this.actualInstance = instance;
            } else if(SafeWallet.validateJSON(instance)){
                // plain JS object
                // create SafeWallet from JS object
                this.actualInstance = SafeWallet.constructFromObject(instance);
            } else {
                return;
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into SafeWallet
            errorMessages.push("Failed to construct SafeWallet: " + err)
        }

        // if (match > 1) {
        //    throw new Error("Multiple matches found constructing `SmartContractWalletInfo` with oneOf schemas SafeWallet. Input: " + JSON.stringify(instance));
        // } else
        if (match === 0) {
        //    this.actualInstance = null; // clear the actual instance in case there are multiple matches
        //    throw new Error("No match found constructing `SmartContractWalletInfo` with oneOf schemas SafeWallet. Details: " +
        //                    errorMessages.join(", "));
        return;
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>SmartContractWalletInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SmartContractWalletInfo} obj Optional instance to populate.
     * @return {module:model/SmartContractWalletInfo} The populated <code>SmartContractWalletInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        return new SmartContractWalletInfo(data);
    }

    /**
     * Gets the actual instance, which can be <code>SafeWallet</code>.
     * @return {(module:model/SafeWallet)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>SafeWallet</code>.
     * @param {(module:model/SafeWallet)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = SmartContractWalletInfo.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of SmartContractWalletInfo from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/SmartContractWalletInfo} An instance of SmartContractWalletInfo.
     */
    static fromJSON = function(json_string){
        return SmartContractWalletInfo.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * The wallet ID.
 * @member {String} wallet_id
 */
SmartContractWalletInfo.prototype['wallet_id'] = undefined;

/**
 * @member {module:model/WalletType} wallet_type
 */
SmartContractWalletInfo.prototype['wallet_type'] = undefined;

/**
 * @member {module:model/WalletSubtype} wallet_subtype
 */
SmartContractWalletInfo.prototype['wallet_subtype'] = undefined;

/**
 * The wallet name.
 * @member {String} name
 */
SmartContractWalletInfo.prototype['name'] = undefined;

/**
 * The ID of the owning organization.
 * @member {String} org_id
 */
SmartContractWalletInfo.prototype['org_id'] = undefined;

/**
 * The ID of the chain on which the wallet operates.
 * @member {String} chain_id
 */
SmartContractWalletInfo.prototype['chain_id'] = undefined;

/**
 * @member {module:model/SmartContractWalletType} smart_contract_wallet_type
 */
SmartContractWalletInfo.prototype['smart_contract_wallet_type'] = undefined;

/**
 * The Smart Contract Wallet address.
 * @member {String} safe_address
 */
SmartContractWalletInfo.prototype['safe_address'] = undefined;

/**
 * The signers of the Smart Contract Wallet.
 * @member {Array.<String>} signers
 */
SmartContractWalletInfo.prototype['signers'] = undefined;

/**
 * The minimum number of confirmations required for the Smart Contract Wallet. 
 * @member {Number} threshold
 */
SmartContractWalletInfo.prototype['threshold'] = undefined;

/**
 * The address of Cobo Safe.
 * @member {String} cobo_safe_address
 */
SmartContractWalletInfo.prototype['cobo_safe_address'] = undefined;

/**
 * @member {module:model/SmartContractInitiator} initiator
 */
SmartContractWalletInfo.prototype['initiator'] = undefined;


SmartContractWalletInfo.OneOf = ["SafeWallet"];

export default SmartContractWalletInfo;

