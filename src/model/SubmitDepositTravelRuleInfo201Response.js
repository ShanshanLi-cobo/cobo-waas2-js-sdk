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
 * The SubmitDepositTravelRuleInfo201Response model module.
 * @module model/SubmitDepositTravelRuleInfo201Response
 */
class SubmitDepositTravelRuleInfo201Response {
    /**
     * Constructs a new <code>SubmitDepositTravelRuleInfo201Response</code>.
     * @alias module:model/SubmitDepositTravelRuleInfo201Response
     */
    constructor() { 
        
        SubmitDepositTravelRuleInfo201Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SubmitDepositTravelRuleInfo201Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubmitDepositTravelRuleInfo201Response} obj Optional instance to populate.
     * @return {module:model/SubmitDepositTravelRuleInfo201Response} The populated <code>SubmitDepositTravelRuleInfo201Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubmitDepositTravelRuleInfo201Response();

            if (data.hasOwnProperty('submitted')) {
                obj['submitted'] = ApiClient.convertToType(data['submitted'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SubmitDepositTravelRuleInfo201Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SubmitDepositTravelRuleInfo201Response</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Whether the Travel Rule information has been successfully submitted. - `true`: The information has been successfully submitted. - `false`: The information has not been submitted. 
 * @member {Boolean} submitted
 */
SubmitDepositTravelRuleInfo201Response.prototype['submitted'] = undefined;






export default SubmitDepositTravelRuleInfo201Response;

