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
import UpdateGroupAction from './UpdateGroupAction';

/**
 * The UpdateKeyShareHolderGroupByIdRequest model module.
 * @module model/UpdateKeyShareHolderGroupByIdRequest
 */
class UpdateKeyShareHolderGroupByIdRequest {
    /**
     * Constructs a new <code>UpdateKeyShareHolderGroupByIdRequest</code>.
     * @alias module:model/UpdateKeyShareHolderGroupByIdRequest
     * @param update_key_share_holder_group_action {module:model/UpdateGroupAction} 
     */
    constructor(update_key_share_holder_group_action) { 
        
        UpdateKeyShareHolderGroupByIdRequest.initialize(this, update_key_share_holder_group_action);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, update_key_share_holder_group_action) { 
        obj['update_key_share_holder_group_action'] = update_key_share_holder_group_action;
    }

    /**
     * Constructs a <code>UpdateKeyShareHolderGroupByIdRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateKeyShareHolderGroupByIdRequest} obj Optional instance to populate.
     * @return {module:model/UpdateKeyShareHolderGroupByIdRequest} The populated <code>UpdateKeyShareHolderGroupByIdRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateKeyShareHolderGroupByIdRequest();

            if (data.hasOwnProperty('update_key_share_holder_group_action')) {
                obj['update_key_share_holder_group_action'] = UpdateGroupAction.constructFromObject(data['update_key_share_holder_group_action']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateKeyShareHolderGroupByIdRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateKeyShareHolderGroupByIdRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UpdateKeyShareHolderGroupByIdRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

UpdateKeyShareHolderGroupByIdRequest.RequiredProperties = ["update_key_share_holder_group_action"];

/**
 * @member {module:model/UpdateGroupAction} update_key_share_holder_group_action
 */
UpdateKeyShareHolderGroupByIdRequest.prototype['update_key_share_holder_group_action'] = undefined;






export default UpdateKeyShareHolderGroupByIdRequest;

