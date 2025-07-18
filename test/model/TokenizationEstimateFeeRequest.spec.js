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
    instance = new CoboWaas2.TokenizationEstimateFeeRequest();
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

  describe('TokenizationEstimateFeeRequest', function() {
    it('should create an instance of TokenizationEstimateFeeRequest', function() {
      // uncomment below and update the code to test TokenizationEstimateFeeRequest
      //var instance = new CoboWaas2.TokenizationEstimateFeeRequest();
      //expect(instance).to.be.a(CoboWaas2.TokenizationEstimateFeeRequest);
    });

    it('should have the property operation_params (base name: "operation_params")', function() {
      // uncomment below and update the code to test the property operation_params
      //var instance = new CoboWaas2.TokenizationEstimateFeeRequest();
      //expect(instance).to.be();
    });

  });

}));
