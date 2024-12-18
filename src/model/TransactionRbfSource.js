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
import MpcTransferSource from './MpcTransferSource';
import TransactionUtxo from './TransactionUtxo';
import WalletSubtype from './WalletSubtype';

/**
 * The TransactionRbfSource model module.
 * @module model/TransactionRbfSource
 */
class TransactionRbfSource {
    /**
     * Constructs a new <code>TransactionRbfSource</code>.
     * @alias module:model/TransactionRbfSource
     * @param {(module:model/MpcTransferSource)} instance The actual instance to initialize TransactionRbfSource.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        var discriminatorValue = instance["source_type"];

        if (discriminatorValue) {
            switch(discriminatorValue) {
                case "Org-Controlled":
                    this.actualInstance = MpcTransferSource.constructFromObject(instance);
                    match++;
                    break;
                case "User-Controlled":
                    this.actualInstance = MpcTransferSource.constructFromObject(instance);
                    match++;
                    break;
                default:
                    errorMessages.push("Unrecognized discriminator value: " + discriminatorValue);
                    break;
            }
            return;
        }

        try {
            if (instance instanceof MpcTransferSource) {
                this.actualInstance = instance;
            } else if(!!MpcTransferSource.validateJSON && MpcTransferSource.validateJSON(instance)){
                // plain JS object
                // create MpcTransferSource from JS object
                this.actualInstance = MpcTransferSource.constructFromObject(instance);
            } else {
                if(MpcTransferSource.constructFromObject(instance)) {
                    if (!!MpcTransferSource.constructFromObject(instance).toJSON) {
                        if (MpcTransferSource.constructFromObject(instance).toJSON()) {
                            this.actualInstance = MpcTransferSource.constructFromObject(instance);
                        }
                    } else {
                        this.actualInstance = MpcTransferSource.constructFromObject(instance);
                    }
                }

            }
            match++;
        } catch(err) {
            // json data failed to deserialize into MpcTransferSource
            errorMessages.push("Failed to construct MpcTransferSource: " + err)
        }

        // if (match > 1) {
        //    throw new Error("Multiple matches found constructing `TransactionRbfSource` with oneOf schemas MpcTransferSource. Input: " + JSON.stringify(instance));
        // } else
        if (match === 0) {
        //    this.actualInstance = null; // clear the actual instance in case there are multiple matches
        //    throw new Error("No match found constructing `TransactionRbfSource` with oneOf schemas MpcTransferSource. Details: " +
        //                    errorMessages.join(", "));
        return;
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>TransactionRbfSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionRbfSource} obj Optional instance to populate.
     * @return {module:model/TransactionRbfSource} The populated <code>TransactionRbfSource</code> instance.
     */
    static constructFromObject(data, obj) {
        return new TransactionRbfSource(data);
    }

    /**
     * Gets the actual instance, which can be <code>MpcTransferSource</code>.
     * @return {(module:model/MpcTransferSource)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>MpcTransferSource</code>.
     * @param {(module:model/MpcTransferSource)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = TransactionRbfSource.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of TransactionRbfSource from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/TransactionRbfSource} An instance of TransactionRbfSource.
     */
    static fromJSON = function(json_string){
        return TransactionRbfSource.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * @member {module:model/WalletSubtype} source_type
 */
TransactionRbfSource.prototype['source_type'] = undefined;

/**
 * The wallet ID.
 * @member {String} wallet_id
 */
TransactionRbfSource.prototype['wallet_id'] = undefined;

/**
 * The wallet address. If you want to specify the UTXOs to be used, please provide the `included_utxos` property. If you specify both the `address` and `included_utxos` properties, the specified included UTXOs must belong to the address. It is recommended to specify no more than 100 included UTXOs to ensure optimal transaction processing.  You need to provide either the `address` or `included_utxos` property. If neither property is provided, the transfer will fail. 
 * @member {String} address
 */
TransactionRbfSource.prototype['address'] = undefined;

/**
 * @member {Array.<module:model/TransactionUtxo>} included_utxos
 */
TransactionRbfSource.prototype['included_utxos'] = undefined;

/**
 * @member {Array.<module:model/TransactionUtxo>} excluded_utxos
 */
TransactionRbfSource.prototype['excluded_utxos'] = undefined;


TransactionRbfSource.OneOf = ["MpcTransferSource"];

export default TransactionRbfSource;

