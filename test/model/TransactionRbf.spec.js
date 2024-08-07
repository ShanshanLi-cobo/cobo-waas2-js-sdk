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
    instance = new CoboWaas2.TransactionRbf();
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

  describe('TransactionRbf', function() {
    it('should create an instance of TransactionRbf', function() {
      // uncomment below and update the code to test TransactionRbf
      //var instance = new CoboWaas2.TransactionRbf();
      //expect(instance).to.be.a(CoboWaas2.TransactionRbf);
    });

    it('should have the property request_id (base name: "request_id")', function() {
      // uncomment below and update the code to test the property request_id
      //var instance = new CoboWaas2.TransactionRbf();
      //expect(instance).to.be();
    });

    it('should have the property fee (base name: "fee")', function() {
      // uncomment below and update the code to test the property fee
      //var instance = new CoboWaas2.TransactionRbf();
      //expect(instance).to.be();
    });

    it('should have the property source (base name: "source")', function() {
      // uncomment below and update the code to test the property source
      //var instance = new CoboWaas2.TransactionRbf();
      //expect(instance).to.be();
    });

    it('should have the property category_names (base name: "category_names")', function() {
      // uncomment below and update the code to test the property category_names
      //var instance = new CoboWaas2.TransactionRbf();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new CoboWaas2.TransactionRbf();
      //expect(instance).to.be();
    });

  });

}));
