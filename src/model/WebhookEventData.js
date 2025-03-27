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
import AddressesEventData from './AddressesEventData';
import AddressesEventDataAllOfAddresses from './AddressesEventDataAllOfAddresses';
import ChainInfo from './ChainInfo';
import ChainsEventData from './ChainsEventData';
import MPCVaultEventData from './MPCVaultEventData';
import MPCVaultType from './MPCVaultType';
import RootPubkey from './RootPubkey';
import SourceGroup from './SourceGroup';
import TSSRequestStatus from './TSSRequestStatus';
import TSSRequestWebhookEventData from './TSSRequestWebhookEventData';
import TokenInfo from './TokenInfo';
import TokensEventData from './TokensEventData';
import TransactionBlockInfo from './TransactionBlockInfo';
import TransactionDestination from './TransactionDestination';
import TransactionFee from './TransactionFee';
import TransactionFuelingInfo from './TransactionFuelingInfo';
import TransactionInitiatorType from './TransactionInitiatorType';
import TransactionRawTxInfo from './TransactionRawTxInfo';
import TransactionReplacement from './TransactionReplacement';
import TransactionResult from './TransactionResult';
import TransactionSource from './TransactionSource';
import TransactionSubStatus from './TransactionSubStatus';
import TransactionWebhookEventData from './TransactionWebhookEventData';
import WalletInfo from './WalletInfo';
import WalletInfoEventData from './WalletInfoEventData';

/**
 * The WebhookEventData model module.
 * @module model/WebhookEventData
 */
class WebhookEventData {
    /**
     * Constructs a new <code>WebhookEventData</code>.
     * @alias module:model/WebhookEventData
     * @param {(module:model/AddressesEventData|module:model/ChainsEventData|module:model/MPCVaultEventData|module:model/TSSRequestWebhookEventData|module:model/TokensEventData|module:model/TransactionWebhookEventData|module:model/WalletInfoEventData)} instance The actual instance to initialize WebhookEventData.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        var discriminatorValue = instance["data_type"];

        if (discriminatorValue) {
            switch(discriminatorValue) {
                case "Addresses":
                    this.actualInstance = AddressesEventData.constructFromObject(instance);
                    match++;
                    break;
                case "Chains":
                    this.actualInstance = ChainsEventData.constructFromObject(instance);
                    match++;
                    break;
                case "MPCVault":
                    this.actualInstance = MPCVaultEventData.constructFromObject(instance);
                    match++;
                    break;
                case "TSSRequest":
                    this.actualInstance = TSSRequestWebhookEventData.constructFromObject(instance);
                    match++;
                    break;
                case "Tokens":
                    this.actualInstance = TokensEventData.constructFromObject(instance);
                    match++;
                    break;
                case "Transaction":
                    this.actualInstance = TransactionWebhookEventData.constructFromObject(instance);
                    match++;
                    break;
                case "WalletInfo":
                    this.actualInstance = WalletInfoEventData.constructFromObject(instance);
                    match++;
                    break;
                default:
                    errorMessages.push("Unrecognized discriminator value: " + discriminatorValue);
                    break;
            }
            return;
        }

        try {
            if (instance instanceof TransactionWebhookEventData) {
                this.actualInstance = instance;
            } else if(!!TransactionWebhookEventData.validateJSON && TransactionWebhookEventData.validateJSON(instance)){
                // plain JS object
                // create TransactionWebhookEventData from JS object
                this.actualInstance = TransactionWebhookEventData.constructFromObject(instance);
            } else {
                if(TransactionWebhookEventData.constructFromObject(instance)) {
                    if (!!TransactionWebhookEventData.constructFromObject(instance).toJSON) {
                        if (TransactionWebhookEventData.constructFromObject(instance).toJSON()) {
                            this.actualInstance = TransactionWebhookEventData.constructFromObject(instance);
                        }
                    } else {
                        this.actualInstance = TransactionWebhookEventData.constructFromObject(instance);
                    }
                }

            }
            match++;
        } catch(err) {
            // json data failed to deserialize into TransactionWebhookEventData
            errorMessages.push("Failed to construct TransactionWebhookEventData: " + err)
        }

        try {
            if (instance instanceof TSSRequestWebhookEventData) {
                this.actualInstance = instance;
            } else if(!!TSSRequestWebhookEventData.validateJSON && TSSRequestWebhookEventData.validateJSON(instance)){
                // plain JS object
                // create TSSRequestWebhookEventData from JS object
                this.actualInstance = TSSRequestWebhookEventData.constructFromObject(instance);
            } else {
                if(TSSRequestWebhookEventData.constructFromObject(instance)) {
                    if (!!TSSRequestWebhookEventData.constructFromObject(instance).toJSON) {
                        if (TSSRequestWebhookEventData.constructFromObject(instance).toJSON()) {
                            this.actualInstance = TSSRequestWebhookEventData.constructFromObject(instance);
                        }
                    } else {
                        this.actualInstance = TSSRequestWebhookEventData.constructFromObject(instance);
                    }
                }

            }
            match++;
        } catch(err) {
            // json data failed to deserialize into TSSRequestWebhookEventData
            errorMessages.push("Failed to construct TSSRequestWebhookEventData: " + err)
        }

        try {
            if (instance instanceof AddressesEventData) {
                this.actualInstance = instance;
            } else if(!!AddressesEventData.validateJSON && AddressesEventData.validateJSON(instance)){
                // plain JS object
                // create AddressesEventData from JS object
                this.actualInstance = AddressesEventData.constructFromObject(instance);
            } else {
                if(AddressesEventData.constructFromObject(instance)) {
                    if (!!AddressesEventData.constructFromObject(instance).toJSON) {
                        if (AddressesEventData.constructFromObject(instance).toJSON()) {
                            this.actualInstance = AddressesEventData.constructFromObject(instance);
                        }
                    } else {
                        this.actualInstance = AddressesEventData.constructFromObject(instance);
                    }
                }

            }
            match++;
        } catch(err) {
            // json data failed to deserialize into AddressesEventData
            errorMessages.push("Failed to construct AddressesEventData: " + err)
        }

        try {
            if (instance instanceof WalletInfoEventData) {
                this.actualInstance = instance;
            } else if(!!WalletInfoEventData.validateJSON && WalletInfoEventData.validateJSON(instance)){
                // plain JS object
                // create WalletInfoEventData from JS object
                this.actualInstance = WalletInfoEventData.constructFromObject(instance);
            } else {
                if(WalletInfoEventData.constructFromObject(instance)) {
                    if (!!WalletInfoEventData.constructFromObject(instance).toJSON) {
                        if (WalletInfoEventData.constructFromObject(instance).toJSON()) {
                            this.actualInstance = WalletInfoEventData.constructFromObject(instance);
                        }
                    } else {
                        this.actualInstance = WalletInfoEventData.constructFromObject(instance);
                    }
                }

            }
            match++;
        } catch(err) {
            // json data failed to deserialize into WalletInfoEventData
            errorMessages.push("Failed to construct WalletInfoEventData: " + err)
        }

        try {
            if (instance instanceof MPCVaultEventData) {
                this.actualInstance = instance;
            } else if(!!MPCVaultEventData.validateJSON && MPCVaultEventData.validateJSON(instance)){
                // plain JS object
                // create MPCVaultEventData from JS object
                this.actualInstance = MPCVaultEventData.constructFromObject(instance);
            } else {
                if(MPCVaultEventData.constructFromObject(instance)) {
                    if (!!MPCVaultEventData.constructFromObject(instance).toJSON) {
                        if (MPCVaultEventData.constructFromObject(instance).toJSON()) {
                            this.actualInstance = MPCVaultEventData.constructFromObject(instance);
                        }
                    } else {
                        this.actualInstance = MPCVaultEventData.constructFromObject(instance);
                    }
                }

            }
            match++;
        } catch(err) {
            // json data failed to deserialize into MPCVaultEventData
            errorMessages.push("Failed to construct MPCVaultEventData: " + err)
        }

        try {
            if (instance instanceof ChainsEventData) {
                this.actualInstance = instance;
            } else if(!!ChainsEventData.validateJSON && ChainsEventData.validateJSON(instance)){
                // plain JS object
                // create ChainsEventData from JS object
                this.actualInstance = ChainsEventData.constructFromObject(instance);
            } else {
                if(ChainsEventData.constructFromObject(instance)) {
                    if (!!ChainsEventData.constructFromObject(instance).toJSON) {
                        if (ChainsEventData.constructFromObject(instance).toJSON()) {
                            this.actualInstance = ChainsEventData.constructFromObject(instance);
                        }
                    } else {
                        this.actualInstance = ChainsEventData.constructFromObject(instance);
                    }
                }

            }
            match++;
        } catch(err) {
            // json data failed to deserialize into ChainsEventData
            errorMessages.push("Failed to construct ChainsEventData: " + err)
        }

        try {
            if (instance instanceof TokensEventData) {
                this.actualInstance = instance;
            } else if(!!TokensEventData.validateJSON && TokensEventData.validateJSON(instance)){
                // plain JS object
                // create TokensEventData from JS object
                this.actualInstance = TokensEventData.constructFromObject(instance);
            } else {
                if(TokensEventData.constructFromObject(instance)) {
                    if (!!TokensEventData.constructFromObject(instance).toJSON) {
                        if (TokensEventData.constructFromObject(instance).toJSON()) {
                            this.actualInstance = TokensEventData.constructFromObject(instance);
                        }
                    } else {
                        this.actualInstance = TokensEventData.constructFromObject(instance);
                    }
                }

            }
            match++;
        } catch(err) {
            // json data failed to deserialize into TokensEventData
            errorMessages.push("Failed to construct TokensEventData: " + err)
        }

        // if (match > 1) {
        //    throw new Error("Multiple matches found constructing `WebhookEventData` with oneOf schemas AddressesEventData, ChainsEventData, MPCVaultEventData, TSSRequestWebhookEventData, TokensEventData, TransactionWebhookEventData, WalletInfoEventData. Input: " + JSON.stringify(instance));
        // } else
        if (match === 0) {
        //    this.actualInstance = null; // clear the actual instance in case there are multiple matches
        //    throw new Error("No match found constructing `WebhookEventData` with oneOf schemas AddressesEventData, ChainsEventData, MPCVaultEventData, TSSRequestWebhookEventData, TokensEventData, TransactionWebhookEventData, WalletInfoEventData. Details: " +
        //                    errorMessages.join(", "));
        return;
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>WebhookEventData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookEventData} obj Optional instance to populate.
     * @return {module:model/WebhookEventData} The populated <code>WebhookEventData</code> instance.
     */
    static constructFromObject(data, obj) {
        return new WebhookEventData(data);
    }

    /**
     * Gets the actual instance, which can be <code>AddressesEventData</code>, <code>ChainsEventData</code>, <code>MPCVaultEventData</code>, <code>TSSRequestWebhookEventData</code>, <code>TokensEventData</code>, <code>TransactionWebhookEventData</code>, <code>WalletInfoEventData</code>.
     * @return {(module:model/AddressesEventData|module:model/ChainsEventData|module:model/MPCVaultEventData|module:model/TSSRequestWebhookEventData|module:model/TokensEventData|module:model/TransactionWebhookEventData|module:model/WalletInfoEventData)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>AddressesEventData</code>, <code>ChainsEventData</code>, <code>MPCVaultEventData</code>, <code>TSSRequestWebhookEventData</code>, <code>TokensEventData</code>, <code>TransactionWebhookEventData</code>, <code>WalletInfoEventData</code>.
     * @param {(module:model/AddressesEventData|module:model/ChainsEventData|module:model/MPCVaultEventData|module:model/TSSRequestWebhookEventData|module:model/TokensEventData|module:model/TransactionWebhookEventData|module:model/WalletInfoEventData)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = WebhookEventData.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of WebhookEventData from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/WebhookEventData} An instance of WebhookEventData.
     */
    static fromJSON = function(json_string){
        return WebhookEventData.constructFromObject(JSON.parse(json_string));
    }
}

/**
 *  The data type of the event. - `Transaction`: The transaction event data. - `TSSRequest`: The TSS request event data. - `Addresses`: The addresses event data. - `WalletInfo`: The wallet information event data. - `MPCVault`: The MPC vault event data. - `Chains`: The enabled chain event data. - `Tokens`: The enabled token event data.
 * @member {module:model/WebhookEventData.DataTypeEnum} data_type
 */
WebhookEventData.prototype['data_type'] = undefined;

/**
 * The transaction ID.
 * @member {String} transaction_id
 */
WebhookEventData.prototype['transaction_id'] = undefined;

/**
 * The Cobo ID, which can be used to track a transaction.
 * @member {String} cobo_id
 */
WebhookEventData.prototype['cobo_id'] = undefined;

/**
 * The request ID that is used to track a transaction request. The request ID is provided by you and must be unique within your organization.
 * @member {String} request_id
 */
WebhookEventData.prototype['request_id'] = undefined;

/**
 * For deposit transactions, this property represents the wallet ID of the transaction destination. For transactions of other types, this property represents the wallet ID of the transaction source.
 * @member {String} wallet_id
 */
WebhookEventData.prototype['wallet_id'] = undefined;

/**
 * @member {module:model/MPCVaultType} type
 */
WebhookEventData.prototype['type'] = undefined;

/**
 * @member {module:model/TSSRequestStatus} status
 */
WebhookEventData.prototype['status'] = undefined;

/**
 * @member {module:model/TransactionSubStatus} sub_status
 */
WebhookEventData.prototype['sub_status'] = undefined;

/**
 * (This property is applicable to approval failures and signature failures only) The reason why the transaction failed.
 * @member {String} failed_reason
 */
WebhookEventData.prototype['failed_reason'] = undefined;

/**
 * The chain ID, which is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](https://www.cobo.com/developers/v2/api-references/wallets/list-enabled-chains).
 * @member {String} chain_id
 */
WebhookEventData.prototype['chain_id'] = undefined;

/**
 * The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](https://www.cobo.com/developers/v2/api-references/wallets/list-enabled-tokens).
 * @member {String} token_id
 */
WebhookEventData.prototype['token_id'] = undefined;

/**
 * (This concept applies to Exchange Wallets only) The asset ID. An asset ID is the unique identifier of the asset held within your linked exchange account.
 * @member {String} asset_id
 */
WebhookEventData.prototype['asset_id'] = undefined;

/**
 * @member {module:model/TransactionSource} source
 */
WebhookEventData.prototype['source'] = undefined;

/**
 * @member {module:model/TransactionDestination} destination
 */
WebhookEventData.prototype['destination'] = undefined;

/**
 * @member {module:model/TransactionResult} result
 */
WebhookEventData.prototype['result'] = undefined;

/**
 * @member {module:model/TransactionFee} fee
 */
WebhookEventData.prototype['fee'] = undefined;

/**
 * The transaction initiator.
 * @member {String} initiator
 */
WebhookEventData.prototype['initiator'] = undefined;

/**
 * @member {module:model/TransactionInitiatorType} initiator_type
 */
WebhookEventData.prototype['initiator_type'] = undefined;

/**
 * The number of confirmations this transaction has received.
 * @member {Number} confirmed_num
 */
WebhookEventData.prototype['confirmed_num'] = undefined;

/**
 * The minimum number of confirmations required to deem a transaction secure. The common threshold is 6 for a Bitcoin transaction.
 * @member {Number} confirming_threshold
 */
WebhookEventData.prototype['confirming_threshold'] = undefined;

/**
 * The transaction hash.
 * @member {String} transaction_hash
 */
WebhookEventData.prototype['transaction_hash'] = undefined;

/**
 * @member {module:model/TransactionBlockInfo} block_info
 */
WebhookEventData.prototype['block_info'] = undefined;

/**
 * @member {module:model/TransactionRawTxInfo} raw_tx_info
 */
WebhookEventData.prototype['raw_tx_info'] = undefined;

/**
 * @member {module:model/TransactionReplacement} replacement
 */
WebhookEventData.prototype['replacement'] = undefined;

/**
 * A custom transaction category for you to identify your transfers more easily.
 * @member {Array.<String>} category
 */
WebhookEventData.prototype['category'] = undefined;

/**
 * The description of the TSS request.
 * @member {String} description
 */
WebhookEventData.prototype['description'] = undefined;

/**
 * Whether the transaction was executed as a [Cobo Loop](https://manuals.cobo.com/en/portal/custodial-wallets/cobo-loop) transfer. - `true`: The transaction was executed as a Cobo Loop transfer. - `false`: The transaction was not executed as a Cobo Loop transfer. 
 * @member {Boolean} is_loop
 */
WebhookEventData.prototype['is_loop'] = undefined;

/**
 * A transaction category for cobo to identify your transactions.
 * @member {Array.<String>} cobo_category
 */
WebhookEventData.prototype['cobo_category'] = undefined;

/**
 * @member {module:model/TransactionFuelingInfo} fueling_info
 */
WebhookEventData.prototype['fueling_info'] = undefined;

/**
 * The vault's creation time in Unix timestamp format, measured in milliseconds.
 * @member {Number} created_timestamp
 */
WebhookEventData.prototype['created_timestamp'] = undefined;

/**
 * The time when the transaction was updated, in Unix timestamp format, measured in milliseconds.
 * @member {Number} updated_timestamp
 */
WebhookEventData.prototype['updated_timestamp'] = undefined;

/**
 * The TSS request ID.
 * @member {String} tss_request_id
 */
WebhookEventData.prototype['tss_request_id'] = undefined;

/**
 * @member {module:model/SourceGroup} source_key_share_holder_group
 */
WebhookEventData.prototype['source_key_share_holder_group'] = undefined;

/**
 * The target key share holder group ID.
 * @member {String} target_key_share_holder_group_id
 */
WebhookEventData.prototype['target_key_share_holder_group_id'] = undefined;

/**
 * A list of addresses.
 * @member {Array.<module:model/AddressesEventDataAllOfAddresses>} addresses
 */
WebhookEventData.prototype['addresses'] = undefined;

/**
 * @member {module:model/WalletInfo} wallet
 */
WebhookEventData.prototype['wallet'] = undefined;

/**
 * The vault ID.
 * @member {String} vault_id
 */
WebhookEventData.prototype['vault_id'] = undefined;

/**
 * The project ID.
 * @member {String} project_id
 */
WebhookEventData.prototype['project_id'] = undefined;

/**
 * The vault name.
 * @member {String} name
 */
WebhookEventData.prototype['name'] = undefined;

/**
 * @member {Array.<module:model/RootPubkey>} root_pubkeys
 */
WebhookEventData.prototype['root_pubkeys'] = undefined;

/**
 * The enabled chains.
 * @member {Array.<module:model/ChainInfo>} chains
 */
WebhookEventData.prototype['chains'] = undefined;

/**
 * The enabled tokens.
 * @member {Array.<module:model/TokenInfo>} tokens
 */
WebhookEventData.prototype['tokens'] = undefined;


WebhookEventData.OneOf = ["AddressesEventData", "ChainsEventData", "MPCVaultEventData", "TSSRequestWebhookEventData", "TokensEventData", "TransactionWebhookEventData", "WalletInfoEventData"];

export default WebhookEventData;

