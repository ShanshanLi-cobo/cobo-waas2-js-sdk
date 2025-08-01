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
import WebhookEventDataType from './WebhookEventDataType';

/**
 * The PaymentAddressUpdateEventData model module.
 * @module model/PaymentAddressUpdateEventData
 */
class PaymentAddressUpdateEventData {
    /**
     * Constructs a new <code>PaymentAddressUpdateEventData</code>.
     * @alias module:model/PaymentAddressUpdateEventData
     * @implements module:model/WebhookEventDataType
     * @param data_type {module:model/PaymentAddressUpdateEventData.DataTypeEnum}  The data type of the event. - `Transaction`: The transaction event data. - `TSSRequest`: The TSS request event data. - `Addresses`: The addresses event data. - `WalletInfo`: The wallet information event data. - `MPCVault`: The MPC vault event data. - `Chains`: The enabled chain event data. - `Tokens`: The enabled token event data. - `TokenListing`: The token listing event data.        - `PaymentOrder`: The payment order event data. - `PaymentRefund`: The payment refund event data. - `PaymentSettlement`: The payment settlement event data. - `PaymentTransaction`: The payment transaction event data. - `PaymentAddressUpdate`: The payment address update event data. - `BalanceUpdateInfo`: The balance update event data. - `SuspendedToken`: The token suspension event data.
     * @param custom_payer_id {String} Unique user identifier on the merchant side, used to assign a dedicated deposit address. 
     * @param payer_id {String} Unique payer identifier on the Cobo side, auto-generated by the system. 
     * @param chain {String} Blockchain network identifier, e.g., 'ETH' for Ethereum, 'TRON' for Tron. 
     * @param previous_address {String} The previous deposit address that was assigned before update. 
     * @param updated_address {String} The new updated deposit address assigned to the user. 
     */
    constructor(data_type, custom_payer_id, payer_id, chain, previous_address, updated_address) { 
        WebhookEventDataType.initialize(this, data_type);
        PaymentAddressUpdateEventData.initialize(this, data_type, custom_payer_id, payer_id, chain, previous_address, updated_address);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, data_type, custom_payer_id, payer_id, chain, previous_address, updated_address) { 
        obj['data_type'] = data_type;
        obj['custom_payer_id'] = custom_payer_id;
        obj['payer_id'] = payer_id;
        obj['chain'] = chain;
        obj['previous_address'] = previous_address;
        obj['updated_address'] = updated_address;
    }

    /**
     * Constructs a <code>PaymentAddressUpdateEventData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PaymentAddressUpdateEventData} obj Optional instance to populate.
     * @return {module:model/PaymentAddressUpdateEventData} The populated <code>PaymentAddressUpdateEventData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentAddressUpdateEventData();
            WebhookEventDataType.constructFromObject(data, obj);

            if (data.hasOwnProperty('data_type')) {
                obj['data_type'] = ApiClient.convertToType(data['data_type'], 'String');
            }
            if (data.hasOwnProperty('custom_payer_id')) {
                obj['custom_payer_id'] = ApiClient.convertToType(data['custom_payer_id'], 'String');
            }
            if (data.hasOwnProperty('payer_id')) {
                obj['payer_id'] = ApiClient.convertToType(data['payer_id'], 'String');
            }
            if (data.hasOwnProperty('chain')) {
                obj['chain'] = ApiClient.convertToType(data['chain'], 'String');
            }
            if (data.hasOwnProperty('previous_address')) {
                obj['previous_address'] = ApiClient.convertToType(data['previous_address'], 'String');
            }
            if (data.hasOwnProperty('updated_address')) {
                obj['updated_address'] = ApiClient.convertToType(data['updated_address'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PaymentAddressUpdateEventData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PaymentAddressUpdateEventData</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PaymentAddressUpdateEventData.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['data_type'] && !(typeof data['data_type'] === 'string' || data['data_type'] instanceof String)) {
            throw new Error("Expected the field `data_type` to be a primitive type in the JSON string but got " + data['data_type']);
        }
        // ensure the json data is a string
        if (data['custom_payer_id'] && !(typeof data['custom_payer_id'] === 'string' || data['custom_payer_id'] instanceof String)) {
            throw new Error("Expected the field `custom_payer_id` to be a primitive type in the JSON string but got " + data['custom_payer_id']);
        }
        // ensure the json data is a string
        if (data['payer_id'] && !(typeof data['payer_id'] === 'string' || data['payer_id'] instanceof String)) {
            throw new Error("Expected the field `payer_id` to be a primitive type in the JSON string but got " + data['payer_id']);
        }
        // ensure the json data is a string
        if (data['chain'] && !(typeof data['chain'] === 'string' || data['chain'] instanceof String)) {
            throw new Error("Expected the field `chain` to be a primitive type in the JSON string but got " + data['chain']);
        }
        // ensure the json data is a string
        if (data['previous_address'] && !(typeof data['previous_address'] === 'string' || data['previous_address'] instanceof String)) {
            throw new Error("Expected the field `previous_address` to be a primitive type in the JSON string but got " + data['previous_address']);
        }
        // ensure the json data is a string
        if (data['updated_address'] && !(typeof data['updated_address'] === 'string' || data['updated_address'] instanceof String)) {
            throw new Error("Expected the field `updated_address` to be a primitive type in the JSON string but got " + data['updated_address']);
        }

        return true;
    }


}

PaymentAddressUpdateEventData.RequiredProperties = ["data_type", "custom_payer_id", "payer_id", "chain", "previous_address", "updated_address"];

/**
 *  The data type of the event. - `Transaction`: The transaction event data. - `TSSRequest`: The TSS request event data. - `Addresses`: The addresses event data. - `WalletInfo`: The wallet information event data. - `MPCVault`: The MPC vault event data. - `Chains`: The enabled chain event data. - `Tokens`: The enabled token event data. - `TokenListing`: The token listing event data.        - `PaymentOrder`: The payment order event data. - `PaymentRefund`: The payment refund event data. - `PaymentSettlement`: The payment settlement event data. - `PaymentTransaction`: The payment transaction event data. - `PaymentAddressUpdate`: The payment address update event data. - `BalanceUpdateInfo`: The balance update event data. - `SuspendedToken`: The token suspension event data.
 * @member {module:model/PaymentAddressUpdateEventData.DataTypeEnum} data_type
 */
PaymentAddressUpdateEventData.prototype['data_type'] = undefined;

/**
 * Unique user identifier on the merchant side, used to assign a dedicated deposit address. 
 * @member {String} custom_payer_id
 */
PaymentAddressUpdateEventData.prototype['custom_payer_id'] = undefined;

/**
 * Unique payer identifier on the Cobo side, auto-generated by the system. 
 * @member {String} payer_id
 */
PaymentAddressUpdateEventData.prototype['payer_id'] = undefined;

/**
 * Blockchain network identifier, e.g., 'ETH' for Ethereum, 'TRON' for Tron. 
 * @member {String} chain
 */
PaymentAddressUpdateEventData.prototype['chain'] = undefined;

/**
 * The previous deposit address that was assigned before update. 
 * @member {String} previous_address
 */
PaymentAddressUpdateEventData.prototype['previous_address'] = undefined;

/**
 * The new updated deposit address assigned to the user. 
 * @member {String} updated_address
 */
PaymentAddressUpdateEventData.prototype['updated_address'] = undefined;


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
PaymentAddressUpdateEventData['DataTypeEnum'] = {

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



export default PaymentAddressUpdateEventData;

