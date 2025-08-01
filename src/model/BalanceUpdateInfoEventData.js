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
import Balance from './Balance';
import BalanceUpdateInfo from './BalanceUpdateInfo';
import WebhookEventDataType from './WebhookEventDataType';

/**
 * The BalanceUpdateInfoEventData model module.
 * @module model/BalanceUpdateInfoEventData
 */
class BalanceUpdateInfoEventData {
    /**
     * Constructs a new <code>BalanceUpdateInfoEventData</code>.
     * @alias module:model/BalanceUpdateInfoEventData
     * @implements module:model/WebhookEventDataType
     * @implements module:model/BalanceUpdateInfo
     * @param data_type {module:model/BalanceUpdateInfoEventData.DataTypeEnum}  The data type of the event. - `Transaction`: The transaction event data. - `TSSRequest`: The TSS request event data. - `Addresses`: The addresses event data. - `WalletInfo`: The wallet information event data. - `MPCVault`: The MPC vault event data. - `Chains`: The enabled chain event data. - `Tokens`: The enabled token event data. - `TokenListing`: The token listing event data.        - `PaymentOrder`: The payment order event data. - `PaymentRefund`: The payment refund event data. - `PaymentSettlement`: The payment settlement event data. - `PaymentTransaction`: The payment transaction event data. - `PaymentAddressUpdate`: The payment address update event data. - `BalanceUpdateInfo`: The balance update event data. - `SuspendedToken`: The token suspension event data.
     * @param token_id {String} The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](https://www.cobo.com/developers/v2/api-references/wallets/list-enabled-tokens).
     * @param address {String} The wallet address.
     * @param wallet_uuid {String} The wallet ID.
     * @param updated_timestamp {Number} The time when the balance updated, in Unix timestamp format, measured in milliseconds. 
     * @param balance {module:model/Balance} 
     */
    constructor(data_type, token_id, address, wallet_uuid, updated_timestamp, balance) { 
        WebhookEventDataType.initialize(this, data_type);BalanceUpdateInfo.initialize(this, token_id, address, wallet_uuid, updated_timestamp, balance);
        BalanceUpdateInfoEventData.initialize(this, data_type, token_id, address, wallet_uuid, updated_timestamp, balance);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, data_type, token_id, address, wallet_uuid, updated_timestamp, balance) { 
        obj['data_type'] = data_type;
        obj['token_id'] = token_id;
        obj['address'] = address;
        obj['wallet_uuid'] = wallet_uuid;
        obj['updated_timestamp'] = updated_timestamp;
        obj['balance'] = balance;
    }

    /**
     * Constructs a <code>BalanceUpdateInfoEventData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BalanceUpdateInfoEventData} obj Optional instance to populate.
     * @return {module:model/BalanceUpdateInfoEventData} The populated <code>BalanceUpdateInfoEventData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BalanceUpdateInfoEventData();
            WebhookEventDataType.constructFromObject(data, obj);
            BalanceUpdateInfo.constructFromObject(data, obj);

            if (data.hasOwnProperty('data_type')) {
                obj['data_type'] = ApiClient.convertToType(data['data_type'], 'String');
            }
            if (data.hasOwnProperty('token_id')) {
                obj['token_id'] = ApiClient.convertToType(data['token_id'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('wallet_uuid')) {
                obj['wallet_uuid'] = ApiClient.convertToType(data['wallet_uuid'], 'String');
            }
            if (data.hasOwnProperty('updated_timestamp')) {
                obj['updated_timestamp'] = ApiClient.convertToType(data['updated_timestamp'], 'Number');
            }
            if (data.hasOwnProperty('balance')) {
                obj['balance'] = Balance.constructFromObject(data['balance']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BalanceUpdateInfoEventData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BalanceUpdateInfoEventData</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BalanceUpdateInfoEventData.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['data_type'] && !(typeof data['data_type'] === 'string' || data['data_type'] instanceof String)) {
            throw new Error("Expected the field `data_type` to be a primitive type in the JSON string but got " + data['data_type']);
        }
        // ensure the json data is a string
        if (data['token_id'] && !(typeof data['token_id'] === 'string' || data['token_id'] instanceof String)) {
            throw new Error("Expected the field `token_id` to be a primitive type in the JSON string but got " + data['token_id']);
        }
        // ensure the json data is a string
        if (data['address'] && !(typeof data['address'] === 'string' || data['address'] instanceof String)) {
            throw new Error("Expected the field `address` to be a primitive type in the JSON string but got " + data['address']);
        }
        // ensure the json data is a string
        if (data['wallet_uuid'] && !(typeof data['wallet_uuid'] === 'string' || data['wallet_uuid'] instanceof String)) {
            throw new Error("Expected the field `wallet_uuid` to be a primitive type in the JSON string but got " + data['wallet_uuid']);
        }
        // validate the optional field `balance`
        if (data['balance']) { // data not null
          if (!!Balance.validateJSON) {
            Balance.validateJSON(data['balance']);
          }
        }

        return true;
    }


}

BalanceUpdateInfoEventData.RequiredProperties = ["data_type", "token_id", "address", "wallet_uuid", "updated_timestamp", "balance"];

/**
 *  The data type of the event. - `Transaction`: The transaction event data. - `TSSRequest`: The TSS request event data. - `Addresses`: The addresses event data. - `WalletInfo`: The wallet information event data. - `MPCVault`: The MPC vault event data. - `Chains`: The enabled chain event data. - `Tokens`: The enabled token event data. - `TokenListing`: The token listing event data.        - `PaymentOrder`: The payment order event data. - `PaymentRefund`: The payment refund event data. - `PaymentSettlement`: The payment settlement event data. - `PaymentTransaction`: The payment transaction event data. - `PaymentAddressUpdate`: The payment address update event data. - `BalanceUpdateInfo`: The balance update event data. - `SuspendedToken`: The token suspension event data.
 * @member {module:model/BalanceUpdateInfoEventData.DataTypeEnum} data_type
 */
BalanceUpdateInfoEventData.prototype['data_type'] = undefined;

/**
 * The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](https://www.cobo.com/developers/v2/api-references/wallets/list-enabled-tokens).
 * @member {String} token_id
 */
BalanceUpdateInfoEventData.prototype['token_id'] = undefined;

/**
 * The wallet address.
 * @member {String} address
 */
BalanceUpdateInfoEventData.prototype['address'] = undefined;

/**
 * The wallet ID.
 * @member {String} wallet_uuid
 */
BalanceUpdateInfoEventData.prototype['wallet_uuid'] = undefined;

/**
 * The time when the balance updated, in Unix timestamp format, measured in milliseconds. 
 * @member {Number} updated_timestamp
 */
BalanceUpdateInfoEventData.prototype['updated_timestamp'] = undefined;

/**
 * @member {module:model/Balance} balance
 */
BalanceUpdateInfoEventData.prototype['balance'] = undefined;


// Implement WebhookEventDataType interface:
/**
 *  The data type of the event. - `Transaction`: The transaction event data. - `TSSRequest`: The TSS request event data. - `Addresses`: The addresses event data. - `WalletInfo`: The wallet information event data. - `MPCVault`: The MPC vault event data. - `Chains`: The enabled chain event data. - `Tokens`: The enabled token event data. - `TokenListing`: The token listing event data.        - `PaymentOrder`: The payment order event data. - `PaymentRefund`: The payment refund event data. - `PaymentSettlement`: The payment settlement event data. - `PaymentTransaction`: The payment transaction event data. - `PaymentAddressUpdate`: The payment address update event data. - `BalanceUpdateInfo`: The balance update event data. - `SuspendedToken`: The token suspension event data.
 * @member {module:model/WebhookEventDataType.DataTypeEnum} data_type
 */
WebhookEventDataType.prototype['data_type'] = undefined;
// Implement BalanceUpdateInfo interface:
/**
 * The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](https://www.cobo.com/developers/v2/api-references/wallets/list-enabled-tokens).
 * @member {String} token_id
 */
BalanceUpdateInfo.prototype['token_id'] = undefined;
/**
 * The wallet address.
 * @member {String} address
 */
BalanceUpdateInfo.prototype['address'] = undefined;
/**
 * The wallet ID.
 * @member {String} wallet_uuid
 */
BalanceUpdateInfo.prototype['wallet_uuid'] = undefined;
/**
 * The time when the balance updated, in Unix timestamp format, measured in milliseconds. 
 * @member {Number} updated_timestamp
 */
BalanceUpdateInfo.prototype['updated_timestamp'] = undefined;
/**
 * @member {module:model/Balance} balance
 */
BalanceUpdateInfo.prototype['balance'] = undefined;



/**
 * Allowed values for the <code>data_type</code> property.
 * @enum {String}
 * @readonly
 */
BalanceUpdateInfoEventData['DataTypeEnum'] = {

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



export default BalanceUpdateInfoEventData;

