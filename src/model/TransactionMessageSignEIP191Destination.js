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
import TransactionDestinationType from './TransactionDestinationType';

/**
 * The TransactionMessageSignEIP191Destination model module.
 * @module model/TransactionMessageSignEIP191Destination
 */
class TransactionMessageSignEIP191Destination {
    /**
     * Constructs a new <code>TransactionMessageSignEIP191Destination</code>.
     * Information about the transaction destination type &#x60;EVM_EIP_191_Signature&#x60;. 
     * @alias module:model/TransactionMessageSignEIP191Destination
     * @param destination_type {module:model/TransactionDestinationType} 
     * @param message {String} The raw data of the message to be signed, encoded in Base64 format.
     */
    constructor(destination_type, message) { 
        
        TransactionMessageSignEIP191Destination.initialize(this, destination_type, message);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, destination_type, message) { 
        obj['destination_type'] = destination_type;
        obj['message'] = message;
    }

    /**
     * Constructs a <code>TransactionMessageSignEIP191Destination</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionMessageSignEIP191Destination} obj Optional instance to populate.
     * @return {module:model/TransactionMessageSignEIP191Destination} The populated <code>TransactionMessageSignEIP191Destination</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionMessageSignEIP191Destination();

            if (data.hasOwnProperty('destination_type')) {
                obj['destination_type'] = TransactionDestinationType.constructFromObject(data['destination_type']);
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TransactionMessageSignEIP191Destination</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransactionMessageSignEIP191Destination</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TransactionMessageSignEIP191Destination.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }

        return true;
    }


}

TransactionMessageSignEIP191Destination.RequiredProperties = ["destination_type", "message"];

/**
 * @member {module:model/TransactionDestinationType} destination_type
 */
TransactionMessageSignEIP191Destination.prototype['destination_type'] = undefined;

/**
 * The raw data of the message to be signed, encoded in Base64 format.
 * @member {String} message
 */
TransactionMessageSignEIP191Destination.prototype['message'] = undefined;






export default TransactionMessageSignEIP191Destination;

