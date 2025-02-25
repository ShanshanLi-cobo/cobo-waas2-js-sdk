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
 * The SwapSummary model module.
 * @module model/SwapSummary
 */
class SwapSummary {
    /**
     * Constructs a new <code>SwapSummary</code>.
     * @alias module:model/SwapSummary
     * @param total_usd_value {String} The total USD value of the swap activities, represented as a string.
     * @param activity_count {Number} The total number of swap activities.
     */
    constructor(total_usd_value, activity_count) { 
        
        SwapSummary.initialize(this, total_usd_value, activity_count);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, total_usd_value, activity_count) { 
        obj['total_usd_value'] = total_usd_value;
        obj['activity_count'] = activity_count;
    }

    /**
     * Constructs a <code>SwapSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SwapSummary} obj Optional instance to populate.
     * @return {module:model/SwapSummary} The populated <code>SwapSummary</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SwapSummary();

            if (data.hasOwnProperty('total_usd_value')) {
                obj['total_usd_value'] = ApiClient.convertToType(data['total_usd_value'], 'String');
            }
            if (data.hasOwnProperty('activity_count')) {
                obj['activity_count'] = ApiClient.convertToType(data['activity_count'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SwapSummary</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SwapSummary</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SwapSummary.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['total_usd_value'] && !(typeof data['total_usd_value'] === 'string' || data['total_usd_value'] instanceof String)) {
            throw new Error("Expected the field `total_usd_value` to be a primitive type in the JSON string but got " + data['total_usd_value']);
        }

        return true;
    }


}

SwapSummary.RequiredProperties = ["total_usd_value", "activity_count"];

/**
 * The total USD value of the swap activities, represented as a string.
 * @member {String} total_usd_value
 */
SwapSummary.prototype['total_usd_value'] = undefined;

/**
 * The total number of swap activities.
 * @member {Number} activity_count
 */
SwapSummary.prototype['activity_count'] = undefined;






export default SwapSummary;

