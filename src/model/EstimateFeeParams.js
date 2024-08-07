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
import ContractCallDestination from './ContractCallDestination';
import ContractCallSource from './ContractCallSource';
import EstimateContractCallFeeParams from './EstimateContractCallFeeParams';
import EstimateFeeRequestType from './EstimateFeeRequestType';
import EstimateTransferFeeParams from './EstimateTransferFeeParams';
import FeeType from './FeeType';

/**
 * The EstimateFeeParams model module.
 * @module model/EstimateFeeParams
 */
class EstimateFeeParams {
    /**
     * Constructs a new <code>EstimateFeeParams</code>.
     * @alias module:model/EstimateFeeParams
     * @param {(module:model/EstimateContractCallFeeParams|module:model/EstimateTransferFeeParams)} instance The actual instance to initialize EstimateFeeParams.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        try {
            if (instance instanceof EstimateTransferFeeParams) {
                this.actualInstance = instance;
            } else if(EstimateTransferFeeParams.validateJSON(instance)){
                // plain JS object
                // create EstimateTransferFeeParams from JS object
                this.actualInstance = EstimateTransferFeeParams.constructFromObject(instance);
            } else {
                return;
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into EstimateTransferFeeParams
            errorMessages.push("Failed to construct EstimateTransferFeeParams: " + err)
        }

        try {
            if (instance instanceof EstimateContractCallFeeParams) {
                this.actualInstance = instance;
            } else if(EstimateContractCallFeeParams.validateJSON(instance)){
                // plain JS object
                // create EstimateContractCallFeeParams from JS object
                this.actualInstance = EstimateContractCallFeeParams.constructFromObject(instance);
            } else {
                return;
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into EstimateContractCallFeeParams
            errorMessages.push("Failed to construct EstimateContractCallFeeParams: " + err)
        }

        // if (match > 1) {
        //    throw new Error("Multiple matches found constructing `EstimateFeeParams` with oneOf schemas EstimateContractCallFeeParams, EstimateTransferFeeParams. Input: " + JSON.stringify(instance));
        // } else
        if (match === 0) {
        //    this.actualInstance = null; // clear the actual instance in case there are multiple matches
        //    throw new Error("No match found constructing `EstimateFeeParams` with oneOf schemas EstimateContractCallFeeParams, EstimateTransferFeeParams. Details: " +
        //                    errorMessages.join(", "));
        return;
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>EstimateFeeParams</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EstimateFeeParams} obj Optional instance to populate.
     * @return {module:model/EstimateFeeParams} The populated <code>EstimateFeeParams</code> instance.
     */
    static constructFromObject(data, obj) {
        return new EstimateFeeParams(data);
    }

    /**
     * Gets the actual instance, which can be <code>EstimateContractCallFeeParams</code>, <code>EstimateTransferFeeParams</code>.
     * @return {(module:model/EstimateContractCallFeeParams|module:model/EstimateTransferFeeParams)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>EstimateContractCallFeeParams</code>, <code>EstimateTransferFeeParams</code>.
     * @param {(module:model/EstimateContractCallFeeParams|module:model/EstimateTransferFeeParams)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = EstimateFeeParams.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of EstimateFeeParams from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/EstimateFeeParams} An instance of EstimateFeeParams.
     */
    static fromJSON = function(json_string){
        return EstimateFeeParams.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * The request ID that is used to track a transaction request. The request ID is provided by you and must be unique within your organization.
 * @member {String} request_id
 */
EstimateFeeParams.prototype['request_id'] = undefined;

/**
 * @member {module:model/EstimateFeeRequestType} request_type
 */
EstimateFeeParams.prototype['request_type'] = undefined;

/**
 * @member {module:model/ContractCallSource} source
 */
EstimateFeeParams.prototype['source'] = undefined;

/**
 * The token ID of the transferred token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](/v2/api-references/wallets/list-enabled-tokens).
 * @member {String} token_id
 */
EstimateFeeParams.prototype['token_id'] = undefined;

/**
 * @member {module:model/ContractCallDestination} destination
 */
EstimateFeeParams.prototype['destination'] = undefined;

/**
 * @member {module:model/FeeType} fee_type
 */
EstimateFeeParams.prototype['fee_type'] = undefined;

/**
 * The chain ID, which is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](/v2/api-references/wallets/list-enabled-chains).
 * @member {String} chain_id
 */
EstimateFeeParams.prototype['chain_id'] = undefined;


EstimateFeeParams.OneOf = ["EstimateContractCallFeeParams", "EstimateTransferFeeParams"];

export default EstimateFeeParams;

