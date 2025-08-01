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
 * The ExchangePermissionTokenRequest model module.
 * @module model/ExchangePermissionTokenRequest
 */
class ExchangePermissionTokenRequest {
    /**
     * Constructs a new <code>ExchangePermissionTokenRequest</code>.
     * @alias module:model/ExchangePermissionTokenRequest
     * @param permission_type {String} Set the value to `payment_orders_payin`.
     */
    constructor(permission_type) { 
        
        ExchangePermissionTokenRequest.initialize(this, permission_type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, permission_type) { 
        obj['permission_type'] = permission_type;
    }

    /**
     * Constructs a <code>ExchangePermissionTokenRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExchangePermissionTokenRequest} obj Optional instance to populate.
     * @return {module:model/ExchangePermissionTokenRequest} The populated <code>ExchangePermissionTokenRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExchangePermissionTokenRequest();

            if (data.hasOwnProperty('permission_type')) {
                obj['permission_type'] = ApiClient.convertToType(data['permission_type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExchangePermissionTokenRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExchangePermissionTokenRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ExchangePermissionTokenRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['permission_type'] && !(typeof data['permission_type'] === 'string' || data['permission_type'] instanceof String)) {
            throw new Error("Expected the field `permission_type` to be a primitive type in the JSON string but got " + data['permission_type']);
        }

        return true;
    }


}

ExchangePermissionTokenRequest.RequiredProperties = ["permission_type"];

/**
 * Set the value to `payment_orders_payin`.
 * @member {String} permission_type
 */
ExchangePermissionTokenRequest.prototype['permission_type'] = undefined;






export default ExchangePermissionTokenRequest;

