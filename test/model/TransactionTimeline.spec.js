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
    instance = new CoboWaas2.TransactionTimeline();
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

  describe('TransactionTimeline', function() {
    it('should create an instance of TransactionTimeline', function() {
      // uncomment below and update the code to test TransactionTimeline
      //var instance = new CoboWaas2.TransactionTimeline();
      //expect(instance).to.be.a(CoboWaas2.TransactionTimeline);
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new CoboWaas2.TransactionTimeline();
      //expect(instance).to.be();
    });

    it('should have the property finished (base name: "finished")', function() {
      // uncomment below and update the code to test the property finished
      //var instance = new CoboWaas2.TransactionTimeline();
      //expect(instance).to.be();
    });

    it('should have the property finished_timestamp (base name: "finished_timestamp")', function() {
      // uncomment below and update the code to test the property finished_timestamp
      //var instance = new CoboWaas2.TransactionTimeline();
      //expect(instance).to.be();
    });

  });

}));
