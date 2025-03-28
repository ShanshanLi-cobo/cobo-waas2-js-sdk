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
 * The SolContractCallAccount model module.
 * @module model/SolContractCallAccount
 */
class SolContractCallAccount {
    /**
     * Constructs a new <code>SolContractCallAccount</code>.
     * The information about the account involved in a Solana instruction.
     * @alias module:model/SolContractCallAccount
     * @param pubkey {String} The public key of the account. If the account is a signer of this transaction, this property must be the same as the value of the `source.address` property. 
     * @param is_signer {Boolean} Whether the account is the signer of this transaction: - `true`: The account is a signer. - `false`: The account is not a signer. 
     * @param is_writable {Boolean} Whether the account can be modified by the instruction: - `true`: The account can be modified by the instruction. - `false`: The account cannot be modified by the instruction. 
     */
    constructor(pubkey, is_signer, is_writable) { 
        
        SolContractCallAccount.initialize(this, pubkey, is_signer, is_writable);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pubkey, is_signer, is_writable) { 
        obj['pubkey'] = pubkey;
        obj['is_signer'] = is_signer;
        obj['is_writable'] = is_writable;
    }

    /**
     * Constructs a <code>SolContractCallAccount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SolContractCallAccount} obj Optional instance to populate.
     * @return {module:model/SolContractCallAccount} The populated <code>SolContractCallAccount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SolContractCallAccount();

            if (data.hasOwnProperty('pubkey')) {
                obj['pubkey'] = ApiClient.convertToType(data['pubkey'], 'String');
            }
            if (data.hasOwnProperty('is_signer')) {
                obj['is_signer'] = ApiClient.convertToType(data['is_signer'], 'Boolean');
            }
            if (data.hasOwnProperty('is_writable')) {
                obj['is_writable'] = ApiClient.convertToType(data['is_writable'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SolContractCallAccount</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SolContractCallAccount</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SolContractCallAccount.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['pubkey'] && !(typeof data['pubkey'] === 'string' || data['pubkey'] instanceof String)) {
            throw new Error("Expected the field `pubkey` to be a primitive type in the JSON string but got " + data['pubkey']);
        }

        return true;
    }


}

SolContractCallAccount.RequiredProperties = ["pubkey", "is_signer", "is_writable"];

/**
 * The public key of the account. If the account is a signer of this transaction, this property must be the same as the value of the `source.address` property. 
 * @member {String} pubkey
 */
SolContractCallAccount.prototype['pubkey'] = undefined;

/**
 * Whether the account is the signer of this transaction: - `true`: The account is a signer. - `false`: The account is not a signer. 
 * @member {Boolean} is_signer
 */
SolContractCallAccount.prototype['is_signer'] = undefined;

/**
 * Whether the account can be modified by the instruction: - `true`: The account can be modified by the instruction. - `false`: The account cannot be modified by the instruction. 
 * @member {Boolean} is_writable
 */
SolContractCallAccount.prototype['is_writable'] = undefined;






export default SolContractCallAccount;

