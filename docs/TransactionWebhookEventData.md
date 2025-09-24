# CoboWaas2.TransactionWebhookEventData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_type** | **String** |  The data type of the event. - &#x60;Transaction&#x60;: The transaction event data. - &#x60;TSSRequest&#x60;: The TSS request event data. - &#x60;Addresses&#x60;: The addresses event data. - &#x60;WalletInfo&#x60;: The wallet information event data. - &#x60;MPCVault&#x60;: The MPC vault event data. - &#x60;Chains&#x60;: The enabled chain event data. - &#x60;Tokens&#x60;: The enabled token event data. - &#x60;TokenListing&#x60;: The token listing event data.        - &#x60;PaymentOrder&#x60;: The payment order event data. - &#x60;PaymentRefund&#x60;: The payment refund event data. - &#x60;PaymentSettlement&#x60;: The payment settlement event data. - &#x60;PaymentTransaction&#x60;: The payment transaction event data. - &#x60;PaymentAddressUpdate&#x60;: The payment address update event data. - &#x60;BalanceUpdateInfo&#x60;: The balance update event data. - &#x60;SuspendedToken&#x60;: The suspended token event data. - &#x60;ComplianceDisposition&#x60;: The compliance disposition event data. - &#x60;ComplianceKytScreenings&#x60;: The compliance KYT screenings event data. | 
**transaction_id** | **String** | The transaction ID. | 
**cobo_id** | **String** | The Cobo ID, which can be used to track a transaction. | [optional] 
**request_id** | **String** | The request ID that is used to track a transaction request. The request ID is provided by you and must be unique within your organization. | [optional] 
**wallet_id** | **String** | For deposit transactions, this property represents the wallet ID of the transaction destination. For transactions of other types, this property represents the wallet ID of the transaction source. | 
**type** | [**TransactionType**](TransactionType.md) |  | [optional] 
**status** | [**TransactionStatus**](TransactionStatus.md) |  | 
**sub_status** | [**TransactionSubStatus**](TransactionSubStatus.md) |  | [optional] 
**failed_reason** | **String** | (This property is applicable to approval failures and signature failures only) The reason why the transaction failed. | [optional] 
**chain_id** | **String** | The chain ID, which is the unique identifier of a blockchain. You can retrieve the IDs of all the chains you can use by calling [List enabled chains](https://www.cobo.com/developers/v2/api-references/wallets/list-enabled-chains). | [optional] 
**token_id** | **String** | The token ID, which is the unique identifier of a token. You can retrieve the IDs of all the tokens you can use by calling [List enabled tokens](https://www.cobo.com/developers/v2/api-references/wallets/list-enabled-tokens). | [optional] 
**asset_id** | **String** | (This concept applies to Exchange Wallets only) The asset ID. An asset ID is the unique identifier of the asset held within your linked exchange account. | [optional] 
**source** | [**TransactionSource**](TransactionSource.md) |  | 
**destination** | [**TransactionDestination**](TransactionDestination.md) |  | 
**result** | [**TransactionResult**](TransactionResult.md) |  | [optional] 
**fee** | [**TransactionFee**](TransactionFee.md) |  | [optional] 
**initiator** | **String** | The transaction initiator. | [optional] 
**initiator_type** | [**TransactionInitiatorType**](TransactionInitiatorType.md) |  | 
**confirmed_num** | **Number** | The number of confirmations this transaction has received. | [optional] 
**confirming_threshold** | **Number** | The minimum number of confirmations required to deem a transaction secure. The common threshold is 6 for a Bitcoin transaction. | [optional] 
**transaction_hash** | **String** | The transaction hash. | [optional] 
**block_info** | [**TransactionBlockInfo**](TransactionBlockInfo.md) |  | [optional] 
**raw_tx_info** | [**TransactionRawTxInfo**](TransactionRawTxInfo.md) |  | [optional] 
**replacement** | [**TransactionReplacement**](TransactionReplacement.md) |  | [optional] 
**category** | **[String]** | A custom transaction category for you to identify your transfers more easily. | [optional] 
**description** | **String** | The description for your transaction. | [optional] 
**is_loop** | **Boolean** | Whether the transaction was executed as a [Cobo Loop](https://manuals.cobo.com/en/portal/custodial-wallets/cobo-loop) transfer. - &#x60;true&#x60;: The transaction was executed as a Cobo Loop transfer. - &#x60;false&#x60;: The transaction was not executed as a Cobo Loop transfer.  | [optional] 
**cobo_category** | **[String]** | The transaction category defined by Cobo. Possible values include:  - &#x60;AutoSweep&#x60;: An auto-sweep transaction. - &#x60;AutoFueling&#x60;: A transaction where Fee Station pays transaction fees to an address within your wallet. - &#x60;AutoFuelingRefund&#x60;: A refund for an auto-fueling transaction. - &#x60;SafeTxMessage&#x60;: A message signing transaction to authorize a Smart Contract Wallet (Safe\\{Wallet\\}) transaction. - &#x60;BillPayment&#x60;: A transaction to pay Cobo bills through Fee Station. - &#x60;BillRefund&#x60;: A refund for a previously made bill payment. - &#x60;CommissionFeeCharge&#x60;: A transaction to charge commission fees via Fee Station. - &#x60;CommissionFeeRefund&#x60;: A refund of previously charged commission fees.  | [optional] 
**extra** | **[String]** | The transaction extra information. | [optional] 
**fueling_info** | [**TransactionFuelingInfo**](TransactionFuelingInfo.md) |  | [optional] 
**created_timestamp** | **Number** | The time when the transaction was created, in Unix timestamp format, measured in milliseconds. | 
**updated_timestamp** | **Number** | The time when the transaction was updated, in Unix timestamp format, measured in milliseconds. | 



## Enum: DataTypeEnum


* `Transaction` (value: `"Transaction"`)

* `TSSRequest` (value: `"TSSRequest"`)

* `Addresses` (value: `"Addresses"`)

* `WalletInfo` (value: `"WalletInfo"`)

* `MPCVault` (value: `"MPCVault"`)

* `Chains` (value: `"Chains"`)

* `Tokens` (value: `"Tokens"`)

* `TokenListing` (value: `"TokenListing"`)

* `PaymentOrder` (value: `"PaymentOrder"`)

* `PaymentRefund` (value: `"PaymentRefund"`)

* `PaymentSettlement` (value: `"PaymentSettlement"`)

* `PaymentTransaction` (value: `"PaymentTransaction"`)

* `PaymentAddressUpdate` (value: `"PaymentAddressUpdate"`)

* `BalanceUpdateInfo` (value: `"BalanceUpdateInfo"`)

* `SuspendedToken` (value: `"SuspendedToken"`)

* `ComplianceDisposition` (value: `"ComplianceDisposition"`)

* `ComplianceKytScreenings` (value: `"ComplianceKytScreenings"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




