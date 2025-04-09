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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CoboWaas2);
  }
}(this, function(expect, CoboWaas2) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CoboWaas2.TransactionDetails();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('TransactionDetails', function() {
    it('should create an instance of TransactionDetails', function() {
      // uncomment below and update the code to test TransactionDetails
      //var instance = new CoboWaas2.TransactionDetails();
      //expect(instance).to.be.a(CoboWaas2.TransactionDetails);
    });

    it('should have the property transaction_id (base name: "transaction_id")', function() {
      // uncomment below and update the code to test the property transaction_id
      //var instance = new CoboWaas2.TransactionDetails();
      //expect(instance).to.be();
    });

    it('should have the property cobo_id (base name: "cobo_id")', function() {
      // uncomment below and update the code to test the property cobo_id
      //var instance = new CoboWaas2.TransactionDetails();
      //expect(instance).to.be();
    });

    it('should have the property request_id (base name: "request_id")', function() {
      // uncomment below and update the code to test the property request_id
      //var instance = new CoboWaas2.TransactionDetails();
      //expect(instance).to.be();
    });

    it('should have the property wallet_id (base name: "wallet_id")', function() {
      // uncomment below and update the code to test the property wallet_id
      //var instance = new CoboWaas2.TransactionDetails();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new CoboWaas2.TransactionDetails();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new CoboWaas2.TransactionDetails();
      //expect(instance).to.be();
    });

    it('should have the property sub_status (base name: "sub_status")', function() {
      // uncomment below and update the code to test the property sub_status
      //var instance = new CoboWaas2.TransactionDetails();
      //expect(instance).to.be();
    });

    it('should have the property failed_reason (base name: "failed_reason")', function() {
      // uncomment below and update the code to test the property failed_reason
      //var instance = new CoboWaas2.TransactionDetails();
      //expect(instance).to.be();
    });

    it('should have the property chain_id (base name: "chain_id")', function() {
      // uncomment below and update the code to test the property chain_id
      //var instance = new CoboWaas2.TransactionDetails();
      //expect(instance).to.be();
    });

    it('should have the property token_id (base name: "token_id")', function() {
      // uncomment below and update the code to test the property token_id
      //var instance = new CoboWaas2.TransactionDetails();
      //expect(instance).to.be();
    });

    it('should have the property asset_id (base name: "asset_id")', function() {
      // uncomment below and update the code to test the property asset_id
      //var instance = new CoboWaas2.TransactionDetails();
      //expect(instance).to.be();
    });

    it('should have the property source (base name: "source")', function() {
      // uncomment below and update the code to test the property source
      //var instance = new CoboWaas2.TransactionDetails();
      //expect(instance).to.be();
    });

    it('should have the property destination (base name: "destination")', function() {
      // uncomment below and update the code to test the property destination
      //var instance = new CoboWaas2.TransactionDetails();
      //expect(instance).to.be();
    });

    it('should have the property result (base name: "result")', function() {
      // uncomment below and update the code to test the property result
      //var instance = new CoboWaas2.TransactionDetails();
      //expect(instance).to.be();
    });

    it('should have the property fee (base name: "fee")', function() {
      // uncomment below and update the code to test the property fee
      //var instance = new CoboWaas2.TransactionDetails();
      //expect(instance).to.be();
    });

    it('should have the property initiator (base name: "initiator")', function() {
      // uncomment below and update the code to test the property initiator
      //var instance = new CoboWaas2.TransactionDetails();
      //expect(instance).to.be();
    });

    it('should have the property initiator_type (base name: "initiator_type")', function() {
      // uncomment below and update the code to test the property initiator_type
      //var instance = new CoboWaas2.TransactionDetails();
      //expect(instance).to.be();
    });

    it('should have the property confirmed_num (base name: "confirmed_num")', function() {
      // uncomment below and update the code to test the property confirmed_num
      //var instance = new CoboWaas2.TransactionDetails();
      //expect(instance).to.be();
    });

    it('should have the property confirming_threshold (base name: "confirming_threshold")', function() {
      // uncomment below and update the code to test the property confirming_threshold
      //var instance = new CoboWaas2.TransactionDetails();
      //expect(instance).to.be();
    });

    it('should have the property transaction_hash (base name: "transaction_hash")', function() {
      // uncomment below and update the code to test the property transaction_hash
      //var instance = new CoboWaas2.TransactionDetails();
      //expect(instance).to.be();
    });

    it('should have the property block_info (base name: "block_info")', function() {
      // uncomment below and update the code to test the property block_info
      //var instance = new CoboWaas2.TransactionDetails();
      //expect(instance).to.be();
    });

    it('should have the property raw_tx_info (base name: "raw_tx_info")', function() {
      // uncomment below and update the code to test the property raw_tx_info
      //var instance = new CoboWaas2.TransactionDetails();
      //expect(instance).to.be();
    });

    it('should have the property replacement (base name: "replacement")', function() {
      // uncomment below and update the code to test the property replacement
      //var instance = new CoboWaas2.TransactionDetails();
      //expect(instance).to.be();
    });

    it('should have the property category (base name: "category")', function() {
      // uncomment below and update the code to test the property category
      //var instance = new CoboWaas2.TransactionDetails();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new CoboWaas2.TransactionDetails();
      //expect(instance).to.be();
    });

    it('should have the property is_loop (base name: "is_loop")', function() {
      // uncomment below and update the code to test the property is_loop
      //var instance = new CoboWaas2.TransactionDetails();
      //expect(instance).to.be();
    });

    it('should have the property cobo_category (base name: "cobo_category")', function() {
      // uncomment below and update the code to test the property cobo_category
      //var instance = new CoboWaas2.TransactionDetails();
      //expect(instance).to.be();
    });

    it('should have the property extra (base name: "extra")', function() {
      // uncomment below and update the code to test the property extra
      //var instance = new CoboWaas2.TransactionDetails();
      //expect(instance).to.be();
    });

    it('should have the property fueling_info (base name: "fueling_info")', function() {
      // uncomment below and update the code to test the property fueling_info
      //var instance = new CoboWaas2.TransactionDetails();
      //expect(instance).to.be();
    });

    it('should have the property created_timestamp (base name: "created_timestamp")', function() {
      // uncomment below and update the code to test the property created_timestamp
      //var instance = new CoboWaas2.TransactionDetails();
      //expect(instance).to.be();
    });

    it('should have the property updated_timestamp (base name: "updated_timestamp")', function() {
      // uncomment below and update the code to test the property updated_timestamp
      //var instance = new CoboWaas2.TransactionDetails();
      //expect(instance).to.be();
    });

    it('should have the property approvers (base name: "approvers")', function() {
      // uncomment below and update the code to test the property approvers
      //var instance = new CoboWaas2.TransactionDetails();
      //expect(instance).to.be();
    });

    it('should have the property signers (base name: "signers")', function() {
      // uncomment below and update the code to test the property signers
      //var instance = new CoboWaas2.TransactionDetails();
      //expect(instance).to.be();
    });

    it('should have the property nonce (base name: "nonce")', function() {
      // uncomment below and update the code to test the property nonce
      //var instance = new CoboWaas2.TransactionDetails();
      //expect(instance).to.be();
    });

    it('should have the property replaced_by (base name: "replaced_by")', function() {
      // uncomment below and update the code to test the property replaced_by
      //var instance = new CoboWaas2.TransactionDetails();
      //expect(instance).to.be();
    });

    it('should have the property fueled_by (base name: "fueled_by")', function() {
      // uncomment below and update the code to test the property fueled_by
      //var instance = new CoboWaas2.TransactionDetails();
      //expect(instance).to.be();
    });

    it('should have the property token_approval (base name: "token_approval")', function() {
      // uncomment below and update the code to test the property token_approval
      //var instance = new CoboWaas2.TransactionDetails();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instance = new CoboWaas2.TransactionDetails();
      //expect(instance).to.be();
    });

    it('should have the property algorithm (base name: "algorithm")', function() {
      // uncomment below and update the code to test the property algorithm
      //var instance = new CoboWaas2.TransactionDetails();
      //expect(instance).to.be();
    });

    it('should have the property timeline (base name: "timeline")', function() {
      // uncomment below and update the code to test the property timeline
      //var instance = new CoboWaas2.TransactionDetails();
      //expect(instance).to.be();
    });

  });

}));
