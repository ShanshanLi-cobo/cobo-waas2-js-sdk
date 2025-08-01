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

/**
 * The CreateSettlement model module.
 * @module model/CreateSettlement
 */
class CreateSettlement {
    /**
     * Constructs a new <code>CreateSettlement</code>.
     * @alias module:model/CreateSettlement
     */
    constructor() { 
        
        CreateSettlement.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateSettlement</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateSettlement} obj Optional instance to populate.
     * @return {module:model/CreateSettlement} The populated <code>CreateSettlement</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateSettlement();

            if (data.hasOwnProperty('merchant_id')) {
                obj['merchant_id'] = ApiClient.convertToType(data['merchant_id'], 'String');
            }
            if (data.hasOwnProperty('token_id')) {
                obj['token_id'] = ApiClient.convertToType(data['token_id'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
            }
            if (data.hasOwnProperty('bank_account_id')) {
                obj['bank_account_id'] = ApiClient.convertToType(data['bank_account_id'], 'String');
            }
            if (data.hasOwnProperty('crypto_address_id')) {
                obj['crypto_address_id'] = ApiClient.convertToType(data['crypto_address_id'], 'String');
            }
            if (data.hasOwnProperty('order_ids')) {
                obj['order_ids'] = ApiClient.convertToType(data['order_ids'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateSettlement</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateSettlement</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['merchant_id'] && !(typeof data['merchant_id'] === 'string' || data['merchant_id'] instanceof String)) {
            throw new Error("Expected the field `merchant_id` to be a primitive type in the JSON string but got " + data['merchant_id']);
        }
        // ensure the json data is a string
        if (data['token_id'] && !(typeof data['token_id'] === 'string' || data['token_id'] instanceof String)) {
            throw new Error("Expected the field `token_id` to be a primitive type in the JSON string but got " + data['token_id']);
        }
        // ensure the json data is a string
        if (data['currency'] && !(typeof data['currency'] === 'string' || data['currency'] instanceof String)) {
            throw new Error("Expected the field `currency` to be a primitive type in the JSON string but got " + data['currency']);
        }
        // ensure the json data is a string
        if (data['amount'] && !(typeof data['amount'] === 'string' || data['amount'] instanceof String)) {
            throw new Error("Expected the field `amount` to be a primitive type in the JSON string but got " + data['amount']);
        }
        // ensure the json data is a string
        if (data['bank_account_id'] && !(typeof data['bank_account_id'] === 'string' || data['bank_account_id'] instanceof String)) {
            throw new Error("Expected the field `bank_account_id` to be a primitive type in the JSON string but got " + data['bank_account_id']);
        }
        // ensure the json data is a string
        if (data['crypto_address_id'] && !(typeof data['crypto_address_id'] === 'string' || data['crypto_address_id'] instanceof String)) {
            throw new Error("Expected the field `crypto_address_id` to be a primitive type in the JSON string but got " + data['crypto_address_id']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['order_ids'])) {
            throw new Error("Expected the field `order_ids` to be an array in the JSON data but got " + data['order_ids']);
        }

        return true;
    }


}



/**
 * The merchant ID. Specify this field when `settlement_type` is set to `Merchant`.
 * @member {String} merchant_id
 */
CreateSettlement.prototype['merchant_id'] = undefined;

/**
 * The ID of the cryptocurrency you want to settle. Specify this field when `payout_channel` is set to `Crypto`. Supported values:  - USDC: `ETH_USDC`, `ARBITRUM_USDCOIN`, `SOL_USDC`, `BASE_USDC`, `MATIC_USDC2`, `BSC_USDC` - USDT: `TRON_USDT`, `ETH_USDT`, `ARBITRUM_USDT`, `SOL_USDT`, `BASE_USDT`, `MATIC_USDT`, `BSC_USDT` 
 * @member {String} token_id
 */
CreateSettlement.prototype['token_id'] = undefined;

/**
 * The fiat currency for settling the cryptocurrency. Currently, only `USD` is supported. Specify this field when `payout_channel` is set to `OffRamp`.
 * @member {String} currency
 */
CreateSettlement.prototype['currency'] = undefined;

/**
 * The settlement amount. When settling merchant balance from orders (`acquiring_type` is `Order` and `settlement_type` is `Merchant`), do not specify this field as the settlement amount will be automatically calculated based on the order amounts. - If `payout_channel` is set to `Crypto`, this represents the settlement amount in the specified cryptocurrency. - If `payout_channel` is set to `OffRamp`, this represents the settlement amount in the specified fiat currency. 
 * @member {String} amount
 */
CreateSettlement.prototype['amount'] = undefined;

/**
 * The ID of the bank account where the settled funds will be deposited. This field is only applicable when `payout_channel` is set to `OffRamp`. Call [List all bank accounts](/v2/api-references/payment/list-all-bank-accounts) to retrieve the IDs of registered bank accounts. 
 * @member {String} bank_account_id
 */
CreateSettlement.prototype['bank_account_id'] = undefined;

/**
 * The ID of the crypto address used for crypto withdrawal. Specify this field when `payout_channel` is set to `Crypto`.  Call [List all crypto addresses](/v2/api-references/payments/list-all-crypto-addresses) to retrieve registered crypto addresses. 
 * @member {String} crypto_address_id
 */
CreateSettlement.prototype['crypto_address_id'] = undefined;

/**
 * @member {Array.<String>} order_ids
 */
CreateSettlement.prototype['order_ids'] = undefined;






export default CreateSettlement;

