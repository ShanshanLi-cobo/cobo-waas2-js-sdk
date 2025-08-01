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
/**
* Enum class TransactionSubStatus.
* @enum {}
* @readonly
*/
export default class TransactionSubStatus {
    
        /**
         * value: "RejectedKYT"
         * @const
         */
        "RejectedKYT" = "RejectedKYT";

    
        /**
         * value: "PendingDoubleCheck"
         * @const
         */
        "PendingDoubleCheck" = "PendingDoubleCheck";

    
        /**
         * value: "PendingSpenderCheck"
         * @const
         */
        "PendingSpenderCheck" = "PendingSpenderCheck";

    
        /**
         * value: "PendingRiskControlCheck"
         * @const
         */
        "PendingRiskControlCheck" = "PendingRiskControlCheck";

    
        /**
         * value: "PendingApproverCheck"
         * @const
         */
        "PendingApproverCheck" = "PendingApproverCheck";

    
        /**
         * value: "RejectedCoboCheck"
         * @const
         */
        "RejectedCoboCheck" = "RejectedCoboCheck";

    
        /**
         * value: "RejectedByCobo"
         * @const
         */
        "RejectedByCobo" = "RejectedByCobo";

    
        /**
         * value: "RejectedWhiteList"
         * @const
         */
        "RejectedWhiteList" = "RejectedWhiteList";

    
        /**
         * value: "RejectedDoubleCheck"
         * @const
         */
        "RejectedDoubleCheck" = "RejectedDoubleCheck";

    
        /**
         * value: "RejectedSpenderAuth"
         * @const
         */
        "RejectedSpenderAuth" = "RejectedSpenderAuth";

    
        /**
         * value: "RejectedRiskControlCheck"
         * @const
         */
        "RejectedRiskControlCheck" = "RejectedRiskControlCheck";

    
        /**
         * value: "RejectedApproverAuth"
         * @const
         */
        "RejectedApproverAuth" = "RejectedApproverAuth";

    
        /**
         * value: "RejectedbyMobileCosigner"
         * @const
         */
        "RejectedbyMobileCosigner" = "RejectedbyMobileCosigner";

    
        /**
         * value: "Built"
         * @const
         */
        "Built" = "Built";

    
        /**
         * value: "PendingWaitSigner"
         * @const
         */
        "PendingWaitSigner" = "PendingWaitSigner";

    
        /**
         * value: "PendingApprovalStart"
         * @const
         */
        "PendingApprovalStart" = "PendingApprovalStart";

    
        /**
         * value: "PendingSignerApproval"
         * @const
         */
        "PendingSignerApproval" = "PendingSignerApproval";

    
        /**
         * value: "PendingSignerProcessing"
         * @const
         */
        "PendingSignerProcessing" = "PendingSignerProcessing";

    
        /**
         * value: "RejectedBySigner"
         * @const
         */
        "RejectedBySigner" = "RejectedBySigner";

    
        /**
         * value: "FailedBySigner"
         * @const
         */
        "FailedBySigner" = "FailedBySigner";

    
        /**
         * value: "FailedSignerTimeout"
         * @const
         */
        "FailedSignerTimeout" = "FailedSignerTimeout";

    
        /**
         * value: "FailedBroadcasting"
         * @const
         */
        "FailedBroadcasting" = "FailedBroadcasting";

    
        /**
         * value: "FailedOnChain"
         * @const
         */
        "FailedOnChain" = "FailedOnChain";

    
        /**
         * value: "Reverting"
         * @const
         */
        "Reverting" = "Reverting";

    
        /**
         * value: "Queue"
         * @const
         */
        "Queue" = "Queue";

    
        /**
         * value: "InsufficientBalance"
         * @const
         */
        "InsufficientBalance" = "InsufficientBalance";

    
        /**
         * value: "InsufficientBalanceFundLocked"
         * @const
         */
        "InsufficientBalanceFundLocked" = "InsufficientBalanceFundLocked";

    
        /**
         * value: "PendingSystemProcessing"
         * @const
         */
        "PendingSystemProcessing" = "PendingSystemProcessing";

    
        /**
         * value: "SystemProcessingOngoing"
         * @const
         */
        "SystemProcessingOngoing" = "SystemProcessingOngoing";

    
        /**
         * value: "PendingBlockConfirmations"
         * @const
         */
        "PendingBlockConfirmations" = "PendingBlockConfirmations";

    
        /**
         * value: "ReOrged"
         * @const
         */
        "ReOrged" = "ReOrged";

    
        /**
         * value: "ReplacedByNewTransaction"
         * @const
         */
        "ReplacedByNewTransaction" = "ReplacedByNewTransaction";

    
        /**
         * value: "CanceledBySpender"
         * @const
         */
        "CanceledBySpender" = "CanceledBySpender";

    
        /**
         * value: "CanceledByAPI"
         * @const
         */
        "CanceledByAPI" = "CanceledByAPI";

    
        /**
         * value: "OnchainRejection"
         * @const
         */
        "OnchainRejection" = "OnchainRejection";

    
        /**
         * value: "RejectedTravelRule"
         * @const
         */
        "RejectedTravelRule" = "RejectedTravelRule";

    
        /**
         * value: "RejectedTravelRuleDueToCompliance"
         * @const
         */
        "RejectedTravelRuleDueToCompliance" = "RejectedTravelRuleDueToCompliance";

    
        /**
         * value: "PendingTravelRuleInfo"
         * @const
         */
        "PendingTravelRuleInfo" = "PendingTravelRuleInfo";

    
        /**
         * value: "PendingTravelRuleCheck"
         * @const
         */
        "PendingTravelRuleCheck" = "PendingTravelRuleCheck";

    
        /**
         * value: "RejectedTravelRuleDueToUnsupportedToken"
         * @const
         */
        "RejectedTravelRuleDueToUnsupportedToken" = "RejectedTravelRuleDueToUnsupportedToken";

    
        /**
         * value: "SignatureVerificationSuccess"
         * @const
         */
        "SignatureVerificationSuccess" = "SignatureVerificationSuccess";

    
        /**
         * value: "SignatureVerificationFailed"
         * @const
         */
        "SignatureVerificationFailed" = "SignatureVerificationFailed";

    
        /**
         * value: "PendingCoboCheck"
         * @const
         */
        "PendingCoboCheck" = "PendingCoboCheck";

    
        /**
         * value: "RejectedTransactionPolicy"
         * @const
         */
        "RejectedTransactionPolicy" = "RejectedTransactionPolicy";

    
        /**
         * value: "RejectedByScreeningApp"
         * @const
         */
        "RejectedByScreeningApp" = "RejectedByScreeningApp";

    
        /**
         * value: "PendingScreeningAppCheck"
         * @const
         */
        "PendingScreeningAppCheck" = "PendingScreeningAppCheck";

    
        /**
         * value: "PendingCoboKYTCheck"
         * @const
         */
        "PendingCoboKYTCheck" = "PendingCoboKYTCheck";

    
        /**
         * value: "RejectedByCoboKYT"
         * @const
         */
        "RejectedByCoboKYT" = "RejectedByCoboKYT";

    
        /**
         * value: "PendingCoboTravelRuleCheck"
         * @const
         */
        "PendingCoboTravelRuleCheck" = "PendingCoboTravelRuleCheck";

    
        /**
         * value: "unknown_default_open_api"
         * @const
         */
        "unknown_default_open_api" = "unknown_default_open_api";

    

    /**
    * Returns a <code>TransactionSubStatus</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/TransactionSubStatus} The enum <code>TransactionSubStatus</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

