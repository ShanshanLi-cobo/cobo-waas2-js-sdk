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
    instance = new CoboWaas2.ExtendedTokenInfo();
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

  describe('ExtendedTokenInfo', function() {
    it('should create an instance of ExtendedTokenInfo', function() {
      // uncomment below and update the code to test ExtendedTokenInfo
      //var instance = new CoboWaas2.ExtendedTokenInfo();
      //expect(instance).to.be.a(CoboWaas2.ExtendedTokenInfo);
    });

    it('should have the property token_id (base name: "token_id")', function() {
      // uncomment below and update the code to test the property token_id
      //var instance = new CoboWaas2.ExtendedTokenInfo();
      //expect(instance).to.be();
    });

    it('should have the property chain_id (base name: "chain_id")', function() {
      // uncomment below and update the code to test the property chain_id
      //var instance = new CoboWaas2.ExtendedTokenInfo();
      //expect(instance).to.be();
    });

    it('should have the property asset_id (base name: "asset_id")', function() {
      // uncomment below and update the code to test the property asset_id
      //var instance = new CoboWaas2.ExtendedTokenInfo();
      //expect(instance).to.be();
    });

    it('should have the property symbol (base name: "symbol")', function() {
      // uncomment below and update the code to test the property symbol
      //var instance = new CoboWaas2.ExtendedTokenInfo();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new CoboWaas2.ExtendedTokenInfo();
      //expect(instance).to.be();
    });

    it('should have the property decimal (base name: "decimal")', function() {
      // uncomment below and update the code to test the property decimal
      //var instance = new CoboWaas2.ExtendedTokenInfo();
      //expect(instance).to.be();
    });

    it('should have the property icon_url (base name: "icon_url")', function() {
      // uncomment below and update the code to test the property icon_url
      //var instance = new CoboWaas2.ExtendedTokenInfo();
      //expect(instance).to.be();
    });

    it('should have the property token_address (base name: "token_address")', function() {
      // uncomment below and update the code to test the property token_address
      //var instance = new CoboWaas2.ExtendedTokenInfo();
      //expect(instance).to.be();
    });

    it('should have the property fee_token_id (base name: "fee_token_id")', function() {
      // uncomment below and update the code to test the property fee_token_id
      //var instance = new CoboWaas2.ExtendedTokenInfo();
      //expect(instance).to.be();
    });

    it('should have the property can_deposit (base name: "can_deposit")', function() {
      // uncomment below and update the code to test the property can_deposit
      //var instance = new CoboWaas2.ExtendedTokenInfo();
      //expect(instance).to.be();
    });

    it('should have the property can_withdraw (base name: "can_withdraw")', function() {
      // uncomment below and update the code to test the property can_withdraw
      //var instance = new CoboWaas2.ExtendedTokenInfo();
      //expect(instance).to.be();
    });

    it('should have the property dust_threshold (base name: "dust_threshold")', function() {
      // uncomment below and update the code to test the property dust_threshold
      //var instance = new CoboWaas2.ExtendedTokenInfo();
      //expect(instance).to.be();
    });

    it('should have the property custodial_minimum_deposit_threshold (base name: "custodial_minimum_deposit_threshold")', function() {
      // uncomment below and update the code to test the property custodial_minimum_deposit_threshold
      //var instance = new CoboWaas2.ExtendedTokenInfo();
      //expect(instance).to.be();
    });

    it('should have the property asset_model_type (base name: "asset_model_type")', function() {
      // uncomment below and update the code to test the property asset_model_type
      //var instance = new CoboWaas2.ExtendedTokenInfo();
      //expect(instance).to.be();
    });

  });

}));
