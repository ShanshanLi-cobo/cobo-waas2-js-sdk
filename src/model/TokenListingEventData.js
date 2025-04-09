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
import TokenInfo from './TokenInfo';
import TokenListing from './TokenListing';
import TokenListingRequestSource from './TokenListingRequestSource';
import TokenListingRequestStatus from './TokenListingRequestStatus';
import WalletSubtype from './WalletSubtype';
import WalletType from './WalletType';
import WebhookEventDataType from './WebhookEventDataType';

/**
 * The TokenListingEventData model module.
 * @module model/TokenListingEventData
 */
class TokenListingEventData {
    /**
     * Constructs a new <code>TokenListingEventData</code>.
     * @alias module:model/TokenListingEventData
     * @implements module:model/WebhookEventDataType
     * @implements module:model/TokenListing
     * @param data_type {module:model/TokenListingEventData.DataTypeEnum}  The data type of the event. - `Transaction`: The transaction event data. - `TSSRequest`: The TSS request event data. - `Addresses`: The addresses event data. - `WalletInfo`: The wallet information event data. - `MPCVault`: The MPC vault event data. - `Chains`: The enabled chain event data. - `Tokens`: The enabled token event data. - `TokenListing`: The token listing event data.
     * @param request_id {String} Unique identifier of the token listing request
     * @param chain_id {String} chain_id of the blockchain where the token exists
     * @param contract_address {String} Contract address of the token
     * @param wallet_type {module:model/WalletType} 
     * @param wallet_subtype {module:model/WalletSubtype} 
     * @param status {module:model/TokenListingRequestStatus} 
     */
    constructor(data_type, request_id, chain_id, contract_address, wallet_type, wallet_subtype, status) { 
        WebhookEventDataType.initialize(this, data_type);TokenListing.initialize(this, request_id, chain_id, contract_address, wallet_type, wallet_subtype, status);
        TokenListingEventData.initialize(this, data_type, request_id, chain_id, contract_address, wallet_type, wallet_subtype, status);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, data_type, request_id, chain_id, contract_address, wallet_type, wallet_subtype, status) { 
        obj['data_type'] = data_type;
        obj['request_id'] = request_id;
        obj['chain_id'] = chain_id;
        obj['contract_address'] = contract_address;
        obj['wallet_type'] = wallet_type;
        obj['wallet_subtype'] = wallet_subtype;
        obj['status'] = status;
    }

    /**
     * Constructs a <code>TokenListingEventData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TokenListingEventData} obj Optional instance to populate.
     * @return {module:model/TokenListingEventData} The populated <code>TokenListingEventData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TokenListingEventData();
            WebhookEventDataType.constructFromObject(data, obj);
            TokenListing.constructFromObject(data, obj);

            if (data.hasOwnProperty('data_type')) {
                obj['data_type'] = ApiClient.convertToType(data['data_type'], 'String');
            }
            if (data.hasOwnProperty('request_id')) {
                obj['request_id'] = ApiClient.convertToType(data['request_id'], 'String');
            }
            if (data.hasOwnProperty('chain_id')) {
                obj['chain_id'] = ApiClient.convertToType(data['chain_id'], 'String');
            }
            if (data.hasOwnProperty('contract_address')) {
                obj['contract_address'] = ApiClient.convertToType(data['contract_address'], 'String');
            }
            if (data.hasOwnProperty('wallet_type')) {
                obj['wallet_type'] = WalletType.constructFromObject(data['wallet_type']);
            }
            if (data.hasOwnProperty('wallet_subtype')) {
                obj['wallet_subtype'] = WalletSubtype.constructFromObject(data['wallet_subtype']);
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = TokenInfo.constructFromObject(data['token']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = TokenListingRequestStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = TokenListingRequestSource.constructFromObject(data['source']);
            }
            if (data.hasOwnProperty('feedback')) {
                obj['feedback'] = ApiClient.convertToType(data['feedback'], 'String');
            }
            if (data.hasOwnProperty('created_timestamp')) {
                obj['created_timestamp'] = ApiClient.convertToType(data['created_timestamp'], 'Number');
            }
            if (data.hasOwnProperty('updated_timestamp')) {
                obj['updated_timestamp'] = ApiClient.convertToType(data['updated_timestamp'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TokenListingEventData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TokenListingEventData</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TokenListingEventData.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['data_type'] && !(typeof data['data_type'] === 'string' || data['data_type'] instanceof String)) {
            throw new Error("Expected the field `data_type` to be a primitive type in the JSON string but got " + data['data_type']);
        }
        // ensure the json data is a string
        if (data['request_id'] && !(typeof data['request_id'] === 'string' || data['request_id'] instanceof String)) {
            throw new Error("Expected the field `request_id` to be a primitive type in the JSON string but got " + data['request_id']);
        }
        // ensure the json data is a string
        if (data['chain_id'] && !(typeof data['chain_id'] === 'string' || data['chain_id'] instanceof String)) {
            throw new Error("Expected the field `chain_id` to be a primitive type in the JSON string but got " + data['chain_id']);
        }
        // ensure the json data is a string
        if (data['contract_address'] && !(typeof data['contract_address'] === 'string' || data['contract_address'] instanceof String)) {
            throw new Error("Expected the field `contract_address` to be a primitive type in the JSON string but got " + data['contract_address']);
        }
        // validate the optional field `token`
        if (data['token']) { // data not null
          if (!!TokenInfo.validateJSON) {
            TokenInfo.validateJSON(data['token']);
          }
        }
        // ensure the json data is a string
        if (data['feedback'] && !(typeof data['feedback'] === 'string' || data['feedback'] instanceof String)) {
            throw new Error("Expected the field `feedback` to be a primitive type in the JSON string but got " + data['feedback']);
        }

        return true;
    }


}

TokenListingEventData.RequiredProperties = ["data_type", "request_id", "chain_id", "contract_address", "wallet_type", "wallet_subtype", "status"];

/**
 *  The data type of the event. - `Transaction`: The transaction event data. - `TSSRequest`: The TSS request event data. - `Addresses`: The addresses event data. - `WalletInfo`: The wallet information event data. - `MPCVault`: The MPC vault event data. - `Chains`: The enabled chain event data. - `Tokens`: The enabled token event data. - `TokenListing`: The token listing event data.
 * @member {module:model/TokenListingEventData.DataTypeEnum} data_type
 */
TokenListingEventData.prototype['data_type'] = undefined;

/**
 * Unique identifier of the token listing request
 * @member {String} request_id
 */
TokenListingEventData.prototype['request_id'] = undefined;

/**
 * chain_id of the blockchain where the token exists
 * @member {String} chain_id
 */
TokenListingEventData.prototype['chain_id'] = undefined;

/**
 * Contract address of the token
 * @member {String} contract_address
 */
TokenListingEventData.prototype['contract_address'] = undefined;

/**
 * @member {module:model/WalletType} wallet_type
 */
TokenListingEventData.prototype['wallet_type'] = undefined;

/**
 * @member {module:model/WalletSubtype} wallet_subtype
 */
TokenListingEventData.prototype['wallet_subtype'] = undefined;

/**
 * @member {module:model/TokenInfo} token
 */
TokenListingEventData.prototype['token'] = undefined;

/**
 * @member {module:model/TokenListingRequestStatus} status
 */
TokenListingEventData.prototype['status'] = undefined;

/**
 * @member {module:model/TokenListingRequestSource} source
 */
TokenListingEventData.prototype['source'] = undefined;

/**
 * Feedback provided by the admin for rejected requests
 * @member {String} feedback
 */
TokenListingEventData.prototype['feedback'] = undefined;

/**
 * Timestamp when the request was created (in milliseconds since Unix epoch)
 * @member {Number} created_timestamp
 */
TokenListingEventData.prototype['created_timestamp'] = undefined;

/**
 * Timestamp when the request was last updated (in milliseconds since Unix epoch)
 * @member {Number} updated_timestamp
 */
TokenListingEventData.prototype['updated_timestamp'] = undefined;


// Implement WebhookEventDataType interface:
/**
 *  The data type of the event. - `Transaction`: The transaction event data. - `TSSRequest`: The TSS request event data. - `Addresses`: The addresses event data. - `WalletInfo`: The wallet information event data. - `MPCVault`: The MPC vault event data. - `Chains`: The enabled chain event data. - `Tokens`: The enabled token event data. - `TokenListing`: The token listing event data.
 * @member {module:model/WebhookEventDataType.DataTypeEnum} data_type
 */
WebhookEventDataType.prototype['data_type'] = undefined;
// Implement TokenListing interface:
/**
 * Unique identifier of the token listing request
 * @member {String} request_id
 */
TokenListing.prototype['request_id'] = undefined;
/**
 * chain_id of the blockchain where the token exists
 * @member {String} chain_id
 */
TokenListing.prototype['chain_id'] = undefined;
/**
 * Contract address of the token
 * @member {String} contract_address
 */
TokenListing.prototype['contract_address'] = undefined;
/**
 * @member {module:model/WalletType} wallet_type
 */
TokenListing.prototype['wallet_type'] = undefined;
/**
 * @member {module:model/WalletSubtype} wallet_subtype
 */
TokenListing.prototype['wallet_subtype'] = undefined;
/**
 * @member {module:model/TokenInfo} token
 */
TokenListing.prototype['token'] = undefined;
/**
 * @member {module:model/TokenListingRequestStatus} status
 */
TokenListing.prototype['status'] = undefined;
/**
 * @member {module:model/TokenListingRequestSource} source
 */
TokenListing.prototype['source'] = undefined;
/**
 * Feedback provided by the admin for rejected requests
 * @member {String} feedback
 */
TokenListing.prototype['feedback'] = undefined;
/**
 * Timestamp when the request was created (in milliseconds since Unix epoch)
 * @member {Number} created_timestamp
 */
TokenListing.prototype['created_timestamp'] = undefined;
/**
 * Timestamp when the request was last updated (in milliseconds since Unix epoch)
 * @member {Number} updated_timestamp
 */
TokenListing.prototype['updated_timestamp'] = undefined;



/**
 * Allowed values for the <code>data_type</code> property.
 * @enum {String}
 * @readonly
 */
TokenListingEventData['DataTypeEnum'] = {

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
     * value: "unknown_default_open_api"
     * @const
     */
    "unknown_default_open_api": "unknown_default_open_api"
};



export default TokenListingEventData;

