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
    instance = new CoboWaas2.TransactionSigner();
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

  describe('TransactionSigner', function() {
    it('should create an instance of TransactionSigner', function() {
      // uncomment below and update the code to test TransactionSigner
      //var instance = new CoboWaas2.TransactionSigner();
      //expect(instance).to.be.a(CoboWaas2.TransactionSigner);
    });

    it('should have the property signer (base name: "signer")', function() {
      // uncomment below and update the code to test the property signer
      //var instance = new CoboWaas2.TransactionSigner();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new CoboWaas2.TransactionSigner();
      //expect(instance).to.be();
    });

    it('should have the property failed_reason (base name: "failed_reason")', function() {
      // uncomment below and update the code to test the property failed_reason
      //var instance = new CoboWaas2.TransactionSigner();
      //expect(instance).to.be();
    });

  });

}));
