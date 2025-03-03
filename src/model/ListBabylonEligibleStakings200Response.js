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
import ListBabylonEligibleStakings200ResponseDataInner from './ListBabylonEligibleStakings200ResponseDataInner';
import Pagination from './Pagination';

/**
 * The ListBabylonEligibleStakings200Response model module.
 * @module model/ListBabylonEligibleStakings200Response
 */
class ListBabylonEligibleStakings200Response {
    /**
     * Constructs a new <code>ListBabylonEligibleStakings200Response</code>.
     * @alias module:model/ListBabylonEligibleStakings200Response
     */
    constructor() { 
        
        ListBabylonEligibleStakings200Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListBabylonEligibleStakings200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListBabylonEligibleStakings200Response} obj Optional instance to populate.
     * @return {module:model/ListBabylonEligibleStakings200Response} The populated <code>ListBabylonEligibleStakings200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListBabylonEligibleStakings200Response();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [ListBabylonEligibleStakings200ResponseDataInner]);
            }
            if (data.hasOwnProperty('pagination')) {
                obj['pagination'] = Pagination.constructFromObject(data['pagination']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListBabylonEligibleStakings200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListBabylonEligibleStakings200Response</code>.
     */
    static validateJSON(data) {
        if (data['data']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['data'])) {
                throw new Error("Expected the field `data` to be an array in the JSON data but got " + data['data']);
            }
            // validate the optional field `data` (array)
            for (const item of data['data']) {
                ListBabylonEligibleStakings200ResponseDataInner.validateJSON(item);
            };
        }
        // validate the optional field `pagination`
        if (data['pagination']) { // data not null
          if (!!Pagination.validateJSON) {
            Pagination.validateJSON(data['pagination']);
          }
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/ListBabylonEligibleStakings200ResponseDataInner>} data
 */
ListBabylonEligibleStakings200Response.prototype['data'] = undefined;

/**
 * @member {module:model/Pagination} pagination
 */
ListBabylonEligibleStakings200Response.prototype['pagination'] = undefined;






export default ListBabylonEligibleStakings200Response;

