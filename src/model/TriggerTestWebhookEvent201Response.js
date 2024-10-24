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
 * The TriggerTestWebhookEvent201Response model module.
 * @module model/TriggerTestWebhookEvent201Response
 */
class TriggerTestWebhookEvent201Response {
    /**
     * Constructs a new <code>TriggerTestWebhookEvent201Response</code>.
     * @alias module:model/TriggerTestWebhookEvent201Response
     */
    constructor() { 
        
        TriggerTestWebhookEvent201Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TriggerTestWebhookEvent201Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TriggerTestWebhookEvent201Response} obj Optional instance to populate.
     * @return {module:model/TriggerTestWebhookEvent201Response} The populated <code>TriggerTestWebhookEvent201Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TriggerTestWebhookEvent201Response();

            if (data.hasOwnProperty('triggered')) {
                obj['triggered'] = ApiClient.convertToType(data['triggered'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TriggerTestWebhookEvent201Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TriggerTestWebhookEvent201Response</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Whether a test webhook event was successfully triggered. - `true`: The test webhook event was successfully triggered. - `false`: The test webhook event could not be triggered. 
 * @member {Boolean} triggered
 */
TriggerTestWebhookEvent201Response.prototype['triggered'] = undefined;






export default TriggerTestWebhookEvent201Response;
