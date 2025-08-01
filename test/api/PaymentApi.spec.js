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


import {ApiClient, Env} from "../../src/index.js";

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
    var apiClient = new ApiClient()
    apiClient.setEnv(new Env("https://api[.xxx].cobo.com/v2"));
    apiClient.setPrivateKey("<YOUR_API_PRIVATE_KEY_IN_HEX>");
    instance = new CoboWaas2.PaymentApi(apiClient);
  });

  describe('PaymentApi', function() {
    describe('cancelRefundById', function() {
      it('should call cancelRefundById successfully', function() {
        //uncomment below and update the code to test cancelRefundById
        //instance.cancelRefundById().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('createForcedSweepRequest', function() {
      it('should call createForcedSweepRequest successfully', function() {
        //uncomment below and update the code to test createForcedSweepRequest
        //instance.createForcedSweepRequest().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('createMerchant', function() {
      it('should call createMerchant successfully', function() {
        //uncomment below and update the code to test createMerchant
        //instance.createMerchant().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('createPaymentOrder', function() {
      it('should call createPaymentOrder successfully', function() {
        //uncomment below and update the code to test createPaymentOrder
        //instance.createPaymentOrder().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('createRefund', function() {
      it('should call createRefund successfully', function() {
        //uncomment below and update the code to test createRefund
        //instance.createRefund().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('createSettlementRequest', function() {
      it('should call createSettlementRequest successfully', function() {
        //uncomment below and update the code to test createSettlementRequest
        //instance.createSettlementRequest().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('getExchangeRate', function() {
      it('should call getExchangeRate successfully', function() {
        //uncomment below and update the code to test getExchangeRate
        //instance.getExchangeRate().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('getPaymentOrderDetailById', function() {
      it('should call getPaymentOrderDetailById successfully', function() {
        //uncomment below and update the code to test getPaymentOrderDetailById
        //instance.getPaymentOrderDetailById().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('getRefundDetailById', function() {
      it('should call getRefundDetailById successfully', function() {
        //uncomment below and update the code to test getRefundDetailById
        //instance.getRefundDetailById().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('getRefunds', function() {
      it('should call getRefunds successfully', function() {
        //uncomment below and update the code to test getRefunds
        //instance.getRefunds().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('getSettlementById', function() {
      it('should call getSettlementById successfully', function() {
        //uncomment below and update the code to test getSettlementById
        //instance.getSettlementById().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('getSettlementInfoByIds', function() {
      it('should call getSettlementInfoByIds successfully', function() {
        //uncomment below and update the code to test getSettlementInfoByIds
        //instance.getSettlementInfoByIds().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('getTopUpAddress', function() {
      it('should call getTopUpAddress successfully', function() {
        //uncomment below and update the code to test getTopUpAddress
        //instance.getTopUpAddress().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('listBankAccounts', function() {
      it('should call listBankAccounts successfully', function() {
        //uncomment below and update the code to test listBankAccounts
        //instance.listBankAccounts().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('listCryptoAddresses', function() {
      it('should call listCryptoAddresses successfully', function() {
        //uncomment below and update the code to test listCryptoAddresses
        //instance.listCryptoAddresses().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('listForcedSweepRequests', function() {
      it('should call listForcedSweepRequests successfully', function() {
        //uncomment below and update the code to test listForcedSweepRequests
        //instance.listForcedSweepRequests().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('listMerchants', function() {
      it('should call listMerchants successfully', function() {
        //uncomment below and update the code to test listMerchants
        //instance.listMerchants().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('listPaymentOrders', function() {
      it('should call listPaymentOrders successfully', function() {
        //uncomment below and update the code to test listPaymentOrders
        //instance.listPaymentOrders().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('listPaymentSupportedTokens', function() {
      it('should call listPaymentSupportedTokens successfully', function() {
        //uncomment below and update the code to test listPaymentSupportedTokens
        //instance.listPaymentSupportedTokens().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('listSettlementRequests', function() {
      it('should call listSettlementRequests successfully', function() {
        //uncomment below and update the code to test listSettlementRequests
        //instance.listSettlementRequests().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('listTopUpPayers', function() {
      it('should call listTopUpPayers successfully', function() {
        //uncomment below and update the code to test listTopUpPayers
        //instance.listTopUpPayers().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('updateMerchantById', function() {
      it('should call updateMerchantById successfully', function() {
        //uncomment below and update the code to test updateMerchantById
        //instance.updateMerchantById().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('updatePaymentOrder', function() {
      it('should call updatePaymentOrder successfully', function() {
        //uncomment below and update the code to test updatePaymentOrder
        //instance.updatePaymentOrder().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('updateRefundById', function() {
      it('should call updateRefundById successfully', function() {
        //uncomment below and update the code to test updateRefundById
        //instance.updateRefundById().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
    describe('updateTopUpAddress', function() {
      it('should call updateTopUpAddress successfully', function() {
        //uncomment below and update the code to test updateTopUpAddress
        //instance.updateTopUpAddress().then(function(data) {
        //    console.log(data);
        //}, function(error) {
        //    console.error(error);
        //});
      });
    });
  });

}));
