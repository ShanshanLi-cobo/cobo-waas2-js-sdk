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
    instance = new CoboWaas2.SwapQuote();
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

  describe('SwapQuote', function() {
    it('should create an instance of SwapQuote', function() {
      // uncomment below and update the code to test SwapQuote
      //var instance = new CoboWaas2.SwapQuote();
      //expect(instance).to.be.a(CoboWaas2.SwapQuote);
    });

    it('should have the property quote_id (base name: "quote_id")', function() {
      // uncomment below and update the code to test the property quote_id
      //var instance = new CoboWaas2.SwapQuote();
      //expect(instance).to.be();
    });

    it('should have the property pay_amount (base name: "pay_amount")', function() {
      // uncomment below and update the code to test the property pay_amount
      //var instance = new CoboWaas2.SwapQuote();
      //expect(instance).to.be();
    });

    it('should have the property receive_amount (base name: "receive_amount")', function() {
      // uncomment below and update the code to test the property receive_amount
      //var instance = new CoboWaas2.SwapQuote();
      //expect(instance).to.be();
    });

    it('should have the property fee_amount (base name: "fee_amount")', function() {
      // uncomment below and update the code to test the property fee_amount
      //var instance = new CoboWaas2.SwapQuote();
      //expect(instance).to.be();
    });

    it('should have the property min_receive_amount (base name: "min_receive_amount")', function() {
      // uncomment below and update the code to test the property min_receive_amount
      //var instance = new CoboWaas2.SwapQuote();
      //expect(instance).to.be();
    });

    it('should have the property max_pay_amount (base name: "max_pay_amount")', function() {
      // uncomment below and update the code to test the property max_pay_amount
      //var instance = new CoboWaas2.SwapQuote();
      //expect(instance).to.be();
    });

    it('should have the property quote_expired_timestamp (base name: "quote_expired_timestamp")', function() {
      // uncomment below and update the code to test the property quote_expired_timestamp
      //var instance = new CoboWaas2.SwapQuote();
      //expect(instance).to.be();
    });

  });

}));
