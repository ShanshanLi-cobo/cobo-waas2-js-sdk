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
import TransactionDestinationType from './TransactionDestinationType';
import TransactionTransferToAddressDestinationAccountOutput from './TransactionTransferToAddressDestinationAccountOutput';
import TransactionTransferToAddressDestinationUtxoOutputsInner from './TransactionTransferToAddressDestinationUtxoOutputsInner';

/**
 * The TransactionTransferToAddressDestination model module.
 * @module model/TransactionTransferToAddressDestination
 */
class TransactionTransferToAddressDestination {
    /**
     * Constructs a new <code>TransactionTransferToAddressDestination</code>.
     * Information about the transaction destination type &#x60;Address&#x60;. Refer to [Transaction sources and destinations](/v2/guides/transactions/sources-and-destinations) for a detailed introduction about the supported sources and destinations for each transaction type.  Switch between the tabs to display the properties for different transaction destinations. 
     * @alias module:model/TransactionTransferToAddressDestination
     * @param destination_type {module:model/TransactionDestinationType} 
     */
    constructor(destination_type) { 
        
        TransactionTransferToAddressDestination.initialize(this, destination_type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, destination_type) { 
        obj['destination_type'] = destination_type;
    }

    /**
     * Constructs a <code>TransactionTransferToAddressDestination</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionTransferToAddressDestination} obj Optional instance to populate.
     * @return {module:model/TransactionTransferToAddressDestination} The populated <code>TransactionTransferToAddressDestination</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionTransferToAddressDestination();

            if (data.hasOwnProperty('destination_type')) {
                obj['destination_type'] = TransactionDestinationType.constructFromObject(data['destination_type']);
            }
            if (data.hasOwnProperty('account_output')) {
                obj['account_output'] = TransactionTransferToAddressDestinationAccountOutput.constructFromObject(data['account_output']);
            }
            if (data.hasOwnProperty('utxo_outputs')) {
                obj['utxo_outputs'] = ApiClient.convertToType(data['utxo_outputs'], [TransactionTransferToAddressDestinationUtxoOutputsInner]);
            }
            if (data.hasOwnProperty('change_address')) {
                obj['change_address'] = ApiClient.convertToType(data['change_address'], 'String');
            }
            if (data.hasOwnProperty('force_internal')) {
                obj['force_internal'] = ApiClient.convertToType(data['force_internal'], 'Boolean');
            }
            if (data.hasOwnProperty('force_external')) {
                obj['force_external'] = ApiClient.convertToType(data['force_external'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TransactionTransferToAddressDestination</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransactionTransferToAddressDestination</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TransactionTransferToAddressDestination.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `account_output`
        if (data['account_output']) { // data not null
          if (!!TransactionTransferToAddressDestinationAccountOutput.validateJSON) {
            TransactionTransferToAddressDestinationAccountOutput.validateJSON(data['account_output']);
          }
        }
        if (data['utxo_outputs']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['utxo_outputs'])) {
                throw new Error("Expected the field `utxo_outputs` to be an array in the JSON data but got " + data['utxo_outputs']);
            }
            // validate the optional field `utxo_outputs` (array)
            for (const item of data['utxo_outputs']) {
                TransactionTransferToAddressDestinationUtxoOutputsInner.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['change_address'] && !(typeof data['change_address'] === 'string' || data['change_address'] instanceof String)) {
            throw new Error("Expected the field `change_address` to be a primitive type in the JSON string but got " + data['change_address']);
        }

        return true;
    }


}

TransactionTransferToAddressDestination.RequiredProperties = ["destination_type"];

/**
 * @member {module:model/TransactionDestinationType} destination_type
 */
TransactionTransferToAddressDestination.prototype['destination_type'] = undefined;

/**
 * @member {module:model/TransactionTransferToAddressDestinationAccountOutput} account_output
 */
TransactionTransferToAddressDestination.prototype['account_output'] = undefined;

/**
 * @member {Array.<module:model/TransactionTransferToAddressDestinationUtxoOutputsInner>} utxo_outputs
 */
TransactionTransferToAddressDestination.prototype['utxo_outputs'] = undefined;

/**
 * The address used to receive the remaining funds or change from the transaction.
 * @member {String} change_address
 */
TransactionTransferToAddressDestination.prototype['change_address'] = undefined;

/**
 * Whether the transaction request must be executed as a [Cobo Loop](https://manuals.cobo.com/en/portal/custodial-wallets/cobo-loop) transfer.   - `true`: The transaction request must be executed as a Cobo Loop transfer.   - `false`: The transaction request may not be executed as a Cobo Loop transfer. 
 * @member {Boolean} force_internal
 */
TransactionTransferToAddressDestination.prototype['force_internal'] = undefined;

/**
 * Whether the transaction request must not be executed as a [Cobo Loop](https://manuals.cobo.com/en/portal/custodial-wallets/cobo-loop) transfer.   - `true`: The transaction request must not be executed as a Cobo Loop transfer.   - `false`: The transaction request can be executed as a Cobo Loop transfer. 
 * @member {Boolean} force_external
 */
TransactionTransferToAddressDestination.prototype['force_external'] = undefined;






export default TransactionTransferToAddressDestination;

