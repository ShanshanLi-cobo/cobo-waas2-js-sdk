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
import CustodialWeb3TransferSource from './CustodialWeb3TransferSource';
import MpcSigningGroup from './MpcSigningGroup';
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
     * @param {(module:model/CustodialWeb3TransferSource|module:model/MpcTransferSource)} instance The actual instance to initialize TransactionRbfSource.
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
                case "Web3":
                    this.actualInstance = CustodialWeb3TransferSource.constructFromObject(instance);
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

        try {
            if (instance instanceof CustodialWeb3TransferSource) {
                this.actualInstance = instance;
            } else if(!!CustodialWeb3TransferSource.validateJSON && CustodialWeb3TransferSource.validateJSON(instance)){
                // plain JS object
                // create CustodialWeb3TransferSource from JS object
                this.actualInstance = CustodialWeb3TransferSource.constructFromObject(instance);
            } else {
                if(CustodialWeb3TransferSource.constructFromObject(instance)) {
                    if (!!CustodialWeb3TransferSource.constructFromObject(instance).toJSON) {
                        if (CustodialWeb3TransferSource.constructFromObject(instance).toJSON()) {
                            this.actualInstance = CustodialWeb3TransferSource.constructFromObject(instance);
                        }
                    } else {
                        this.actualInstance = CustodialWeb3TransferSource.constructFromObject(instance);
                    }
                }

            }
            match++;
        } catch(err) {
            // json data failed to deserialize into CustodialWeb3TransferSource
            errorMessages.push("Failed to construct CustodialWeb3TransferSource: " + err)
        }

        // if (match > 1) {
        //    throw new Error("Multiple matches found constructing `TransactionRbfSource` with oneOf schemas CustodialWeb3TransferSource, MpcTransferSource. Input: " + JSON.stringify(instance));
        // } else
        if (match === 0) {
        //    this.actualInstance = null; // clear the actual instance in case there are multiple matches
        //    throw new Error("No match found constructing `TransactionRbfSource` with oneOf schemas CustodialWeb3TransferSource, MpcTransferSource. Details: " +
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
     * Gets the actual instance, which can be <code>CustodialWeb3TransferSource</code>, <code>MpcTransferSource</code>.
     * @return {(module:model/CustodialWeb3TransferSource|module:model/MpcTransferSource)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>CustodialWeb3TransferSource</code>, <code>MpcTransferSource</code>.
     * @param {(module:model/CustodialWeb3TransferSource|module:model/MpcTransferSource)} obj The actual instance.
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
 * Indicates the wallet address to be used as the source of funds. - For UTXO-based chains: both `address` and `included_utxos` are optional. If both `address` and `included_utxos` are provided, the UTXOs must belong to the specified address. If neither `address` nor `included_utxos` is provided, the system will select UTXOs from the wallet associated with `wallet_id`. - For account-based chains: You need to provide `address` otherwise the token transfer will fail. However, when estimating fees for a transfer, `address` is not required.  For detailed rules on `address` and `included_utxos` in both regular and RBF transactions, see [Address and included_utxos usage](https://www.cobo.com/developers/v2/guides/transactions/sources-and-destinations#address-and-included-utxos-usage). 
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

/**
 * @member {module:model/MpcSigningGroup} mpc_used_key_share_holder_group
 */
TransactionRbfSource.prototype['mpc_used_key_share_holder_group'] = undefined;


TransactionRbfSource.OneOf = ["CustodialWeb3TransferSource", "MpcTransferSource"];

export default TransactionRbfSource;

