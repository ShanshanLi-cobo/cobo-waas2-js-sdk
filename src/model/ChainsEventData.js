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
import ChainInfo from './ChainInfo';
import WalletSubtype from './WalletSubtype';
import WalletType from './WalletType';
import WebhookEventDataType from './WebhookEventDataType';

/**
 * The ChainsEventData model module.
 * @module model/ChainsEventData
 */
class ChainsEventData {
    /**
     * Constructs a new <code>ChainsEventData</code>.
     * @alias module:model/ChainsEventData
     * @implements module:model/WebhookEventDataType
     * @param data_type {module:model/ChainsEventData.DataTypeEnum}  The data type of the event. - `Transaction`: The transaction event data. - `TSSRequest`: The TSS request event data. - `Addresses`: The addresses event data. - `WalletInfo`: The wallet information event data. - `MPCVault`: The MPC vault event data. - `Chains`: The enabled chain event data. - `Tokens`: The enabled token event data. - `TokenListing`: The token listing event data.        - `PaymentOrder`: The payment order event data. - `PaymentRefund`: The payment refund event data. - `PaymentSettlement`: The payment settlement event data. - `PaymentTransaction`: The payment transaction event data. - `PaymentAddressUpdate`: The payment address update event data. - `BalanceUpdateInfo`: The balance update event data. - `SuspendedToken`: The token suspension event data.
     * @param chains {Array.<module:model/ChainInfo>} The enabled chains.
     */
    constructor(data_type, chains) { 
        WebhookEventDataType.initialize(this, data_type);
        ChainsEventData.initialize(this, data_type, chains);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, data_type, chains) { 
        obj['data_type'] = data_type;
        obj['chains'] = chains;
    }

    /**
     * Constructs a <code>ChainsEventData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChainsEventData} obj Optional instance to populate.
     * @return {module:model/ChainsEventData} The populated <code>ChainsEventData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChainsEventData();
            WebhookEventDataType.constructFromObject(data, obj);

            if (data.hasOwnProperty('data_type')) {
                obj['data_type'] = ApiClient.convertToType(data['data_type'], 'String');
            }
            if (data.hasOwnProperty('chains')) {
                obj['chains'] = ApiClient.convertToType(data['chains'], [ChainInfo]);
            }
            if (data.hasOwnProperty('wallet_type')) {
                obj['wallet_type'] = WalletType.constructFromObject(data['wallet_type']);
            }
            if (data.hasOwnProperty('wallet_subtypes')) {
                obj['wallet_subtypes'] = ApiClient.convertToType(data['wallet_subtypes'], [WalletSubtype]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ChainsEventData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ChainsEventData</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ChainsEventData.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['data_type'] && !(typeof data['data_type'] === 'string' || data['data_type'] instanceof String)) {
            throw new Error("Expected the field `data_type` to be a primitive type in the JSON string but got " + data['data_type']);
        }
        if (data['chains']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['chains'])) {
                throw new Error("Expected the field `chains` to be an array in the JSON data but got " + data['chains']);
            }
            // validate the optional field `chains` (array)
            for (const item of data['chains']) {
                ChainInfo.validateJSON(item);
            };
        }
        // ensure the json data is an array
        if (!Array.isArray(data['wallet_subtypes'])) {
            throw new Error("Expected the field `wallet_subtypes` to be an array in the JSON data but got " + data['wallet_subtypes']);
        }

        return true;
    }


}

ChainsEventData.RequiredProperties = ["data_type", "chains"];

/**
 *  The data type of the event. - `Transaction`: The transaction event data. - `TSSRequest`: The TSS request event data. - `Addresses`: The addresses event data. - `WalletInfo`: The wallet information event data. - `MPCVault`: The MPC vault event data. - `Chains`: The enabled chain event data. - `Tokens`: The enabled token event data. - `TokenListing`: The token listing event data.        - `PaymentOrder`: The payment order event data. - `PaymentRefund`: The payment refund event data. - `PaymentSettlement`: The payment settlement event data. - `PaymentTransaction`: The payment transaction event data. - `PaymentAddressUpdate`: The payment address update event data. - `BalanceUpdateInfo`: The balance update event data. - `SuspendedToken`: The token suspension event data.
 * @member {module:model/ChainsEventData.DataTypeEnum} data_type
 */
ChainsEventData.prototype['data_type'] = undefined;

/**
 * The enabled chains.
 * @member {Array.<module:model/ChainInfo>} chains
 */
ChainsEventData.prototype['chains'] = undefined;

/**
 * @member {module:model/WalletType} wallet_type
 */
ChainsEventData.prototype['wallet_type'] = undefined;

/**
 * @member {Array.<module:model/WalletSubtype>} wallet_subtypes
 */
ChainsEventData.prototype['wallet_subtypes'] = undefined;


// Implement WebhookEventDataType interface:
/**
 *  The data type of the event. - `Transaction`: The transaction event data. - `TSSRequest`: The TSS request event data. - `Addresses`: The addresses event data. - `WalletInfo`: The wallet information event data. - `MPCVault`: The MPC vault event data. - `Chains`: The enabled chain event data. - `Tokens`: The enabled token event data. - `TokenListing`: The token listing event data.        - `PaymentOrder`: The payment order event data. - `PaymentRefund`: The payment refund event data. - `PaymentSettlement`: The payment settlement event data. - `PaymentTransaction`: The payment transaction event data. - `PaymentAddressUpdate`: The payment address update event data. - `BalanceUpdateInfo`: The balance update event data. - `SuspendedToken`: The token suspension event data.
 * @member {module:model/WebhookEventDataType.DataTypeEnum} data_type
 */
WebhookEventDataType.prototype['data_type'] = undefined;



/**
 * Allowed values for the <code>data_type</code> property.
 * @enum {String}
 * @readonly
 */
ChainsEventData['DataTypeEnum'] = {

    /**
     * value: "Transaction"
     * @const
     */
    "Transaction": "Transaction",

    /**
     * value: "TSSRequest"
     * @const
     */
    "TSSRequest": "TSSRequest",

    /**
     * value: "Addresses"
     * @const
     */
    "Addresses": "Addresses",

    /**
     * value: "WalletInfo"
     * @const
     */
    "WalletInfo": "WalletInfo",

    /**
     * value: "MPCVault"
     * @const
     */
    "MPCVault": "MPCVault",

    /**
     * value: "Chains"
     * @const
     */
    "Chains": "Chains",

    /**
     * value: "Tokens"
     * @const
     */
    "Tokens": "Tokens",

    /**
     * value: "TokenListing"
     * @const
     */
    "TokenListing": "TokenListing",

    /**
     * value: "PaymentOrder"
     * @const
     */
    "PaymentOrder": "PaymentOrder",

    /**
     * value: "PaymentRefund"
     * @const
     */
    "PaymentRefund": "PaymentRefund",

    /**
     * value: "PaymentSettlement"
     * @const
     */
    "PaymentSettlement": "PaymentSettlement",

    /**
     * value: "PaymentTransaction"
     * @const
     */
    "PaymentTransaction": "PaymentTransaction",

    /**
     * value: "PaymentAddressUpdate"
     * @const
     */
    "PaymentAddressUpdate": "PaymentAddressUpdate",

    /**
     * value: "BalanceUpdateInfo"
     * @const
     */
    "BalanceUpdateInfo": "BalanceUpdateInfo",

    /**
     * value: "SuspendedToken"
     * @const
     */
    "SuspendedToken": "SuspendedToken",

    /**
     * value: "unknown_default_open_api"
     * @const
     */
    "unknown_default_open_api": "unknown_default_open_api"
};



export default ChainsEventData;

