/**
 * Cobo Wallet as a Service 2.0
 *
 * Contact: support@cobo.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import WebhookEventType from './WebhookEventType';

/**
 * The CreateWebhookEndpointRequest model module.
 * @module model/CreateWebhookEndpointRequest
 */
class CreateWebhookEndpointRequest {
    /**
     * Constructs a new <code>CreateWebhookEndpointRequest</code>.
     * @alias module:model/CreateWebhookEndpointRequest
     * @param url {String} The webhook endpoint URL.
     * @param subscribed_events {Array.<module:model/WebhookEventType>} The event types you want to subscribe to for this webhook endpoint. You can call [Get webhook event types](/v2/api-references/developers--webhooks/get-webhook-event-types) to retrieve all available event types. 
     */
    constructor(url, subscribed_events) { 
        
        CreateWebhookEndpointRequest.initialize(this, url, subscribed_events);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, url, subscribed_events) { 
        obj['url'] = url;
        obj['subscribed_events'] = subscribed_events;
    }

    /**
     * Constructs a <code>CreateWebhookEndpointRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateWebhookEndpointRequest} obj Optional instance to populate.
     * @return {module:model/CreateWebhookEndpointRequest} The populated <code>CreateWebhookEndpointRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateWebhookEndpointRequest();

            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('subscribed_events')) {
                obj['subscribed_events'] = ApiClient.convertToType(data['subscribed_events'], [WebhookEventType]);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateWebhookEndpointRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateWebhookEndpointRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateWebhookEndpointRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['subscribed_events'])) {
            throw new Error("Expected the field `subscribed_events` to be an array in the JSON data but got " + data['subscribed_events']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }

        return true;
    }


}

CreateWebhookEndpointRequest.RequiredProperties = ["url", "subscribed_events"];

/**
 * The webhook endpoint URL.
 * @member {String} url
 */
CreateWebhookEndpointRequest.prototype['url'] = undefined;

/**
 * The event types you want to subscribe to for this webhook endpoint. You can call [Get webhook event types](/v2/api-references/developers--webhooks/get-webhook-event-types) to retrieve all available event types. 
 * @member {Array.<module:model/WebhookEventType>} subscribed_events
 */
CreateWebhookEndpointRequest.prototype['subscribed_events'] = undefined;

/**
 * The description of the webhook endpoint.
 * @member {String} description
 */
CreateWebhookEndpointRequest.prototype['description'] = undefined;






export default CreateWebhookEndpointRequest;

