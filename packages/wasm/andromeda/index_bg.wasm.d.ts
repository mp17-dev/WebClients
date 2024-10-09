/* tslint:disable */
/* eslint-disable */
export const memory: WebAssembly.Memory;
export function __wbg_wasmaccount_free(a: number, b: number): void;
export function wasmaccount_new(a: number, b: number, c: number, d: number): void;
export function wasmaccount_markReceiveAddressesUsedTo(a: number, b: number, c: number, d: number): number;
export function wasmaccount_getNextReceiveAddress(a: number): number;
export function wasmaccount_peekReceiveAddress(a: number, b: number): number;
export function wasmaccount_owns(a: number, b: number): number;
export function wasmaccount_getBalance(a: number): number;
export function wasmaccount_getDerivationPath(a: number, b: number): void;
export function wasmaccount_getUtxos(a: number): number;
export function wasmaccount_getTransactions(a: number, b: number, c: number): number;
export function wasmaccount_getTransaction(a: number, b: number, c: number): number;
export function wasmaccount_hasSyncData(a: number): number;
export function wasmaccount_insertUnconfirmedTransaction(a: number, b: number): number;
export function wasmaccount_bumpTransactionsFees(a: number, b: number, c: number, d: number, e: number): number;
export function wasmaccount_clearStore(a: number): number;
export function __wbg_wasmtxbuilder_free(a: number, b: number): void;
export function __wbg_wasmrecipient_free(a: number, b: number): void;
export function __wbg_get_wasmrecipient_0(a: number, b: number): void;
export function __wbg_set_wasmrecipient_0(a: number, b: number, c: number): void;
export function __wbg_get_wasmrecipient_1(a: number, b: number): void;
export function __wbg_set_wasmrecipient_1(a: number, b: number, c: number): void;
export function __wbg_get_wasmrecipient_2(a: number): number;
export function __wbg_set_wasmrecipient_2(a: number, b: number): void;
export function __wbg_wasmpsbtandtxbuilder_free(a: number, b: number): void;
export function __wbg_get_wasmpsbtandtxbuilder_0(a: number): number;
export function __wbg_set_wasmpsbtandtxbuilder_0(a: number, b: number): void;
export function __wbg_get_wasmpsbtandtxbuilder_1(a: number): number;
export function __wbg_set_wasmpsbtandtxbuilder_1(a: number, b: number): void;
export function wasmtxbuilder_new(): number;
export function wasmtxbuilder_setAccount(a: number, b: number): number;
export function wasmtxbuilder_constrainRecipientAmounts(a: number): number;
export function wasmtxbuilder_clearRecipients(a: number): number;
export function wasmtxbuilder_addRecipient(a: number, b: number, c: number, d: number, e: number): number;
export function wasmtxbuilder_removeRecipient(a: number, b: number): number;
export function wasmtxbuilder_updateRecipient(a: number, b: number, c: number, d: number, e: number, f: number, g: number): void;
export function wasmtxbuilder_updateRecipientAmountToMax(a: number, b: number): number;
export function wasmtxbuilder_getRecipients(a: number, b: number): void;
export function wasmtxbuilder_addUtxoToSpend(a: number, b: number, c: number): void;
export function wasmtxbuilder_removeUtxoToSpend(a: number, b: number, c: number): void;
export function wasmtxbuilder_clearUtxosToSpend(a: number): number;
export function wasmtxbuilder_getUtxosToSpend(a: number, b: number): void;
export function wasmtxbuilder_setCoinSelection(a: number, b: number): number;
export function wasmtxbuilder_getCoinSelection(a: number): number;
export function wasmtxbuilder_enableRbf(a: number): number;
export function wasmtxbuilder_disableRbf(a: number): number;
export function wasmtxbuilder_getRbfEnabled(a: number): number;
export function wasmtxbuilder_setChangePolicy(a: number, b: number): number;
export function wasmtxbuilder_getChangePolicy(a: number): number;
export function wasmtxbuilder_setFeeRate(a: number, b: number): number;
export function wasmtxbuilder_getFeeRate(a: number, b: number): void;
export function wasmtxbuilder_addLocktime(a: number, b: number): number;
export function wasmtxbuilder_removeLocktime(a: number): number;
export function wasmtxbuilder_getLocktime(a: number): number;
export function wasmtxbuilder_createPsbt(a: number, b: number): number;
export function wasmtxbuilder_createDraftPsbt(a: number, b: number, c: number): number;
export function setPanicHook(): void;
export function __wbg_wasmnetworkclient_free(a: number, b: number): void;
export function wasmnetworkclient_getNetwork(a: number): number;
export function __wbg_wasmbalance_free(a: number, b: number): void;
export function __wbg_get_wasmbalance_immature(a: number): number;
export function __wbg_set_wasmbalance_immature(a: number, b: number): void;
export function __wbg_get_wasmbalance_trusted_pending(a: number): number;
export function __wbg_set_wasmbalance_trusted_pending(a: number, b: number): void;
export function __wbg_get_wasmbalance_untrusted_pending(a: number): number;
export function __wbg_set_wasmbalance_untrusted_pending(a: number, b: number): void;
export function __wbg_get_wasmbalance_confirmed(a: number): number;
export function __wbg_set_wasmbalance_confirmed(a: number, b: number): void;
export function __wbg_wasmutxo_free(a: number, b: number): void;
export function __wbg_get_wasmutxo_outpoint(a: number): number;
export function __wbg_set_wasmutxo_outpoint(a: number, b: number): void;
export function __wbg_get_wasmutxo_script_pubkey(a: number): number;
export function __wbg_set_wasmutxo_script_pubkey(a: number, b: number): void;
export function __wbg_get_wasmutxo_keychain(a: number): number;
export function __wbg_set_wasmutxo_keychain(a: number, b: number): void;
export function __wbg_get_wasmutxo_is_spent(a: number): number;
export function __wbg_set_wasmutxo_is_spent(a: number, b: number): void;
export function __wbg_wasmutxoarray_free(a: number, b: number): void;
export function __wbg_get_wasmutxoarray_0(a: number, b: number): void;
export function __wbg_set_wasmutxoarray_0(a: number, b: number, c: number): void;
export function __wbg_set_wasmutxo_value(a: number, b: number): void;
export function __wbg_get_wasmutxo_value(a: number): number;
export function __wbg_wasmusersettingsdata_free(a: number, b: number): void;
export function __wbg_get_wasmusersettingsdata_0(a: number): number;
export function __wbg_set_wasmusersettingsdata_0(a: number, b: number): void;
export function __wbg_wasmsettingsclient_free(a: number, b: number): void;
export function wasmsettingsclient_getUserSettings(a: number): number;
export function wasmsettingsclient_setBitcoinUnit(a: number, b: number): number;
export function wasmsettingsclient_setFiatCurrency(a: number, b: number): number;
export function wasmsettingsclient_setTwoFaThreshold(a: number, b: number): number;
export function wasmsettingsclient_setHideEmptyUsedAddresses(a: number, b: number): number;
export function wasmsettingsclient_setReceiveNotificationEmail(a: number, b: number, c: number): number;
export function wasmsettingsclient_acceptTermsAndConditions(a: number): number;
export function wasmsettingsclient_getUserWalletEligibility(a: number): number;
export function __wbg_wasmauthdata_free(a: number, b: number): void;
export function __wbg_get_wasmauthdata_access(a: number, b: number): void;
export function __wbg_set_wasmauthdata_access(a: number, b: number, c: number): void;
export function __wbg_get_wasmauthdata_refresh(a: number, b: number): void;
export function __wbg_set_wasmauthdata_refresh(a: number, b: number, c: number): void;
export function __wbg_get_wasmauthdata_scopes(a: number, b: number): void;
export function __wbg_set_wasmauthdata_scopes(a: number, b: number, c: number): void;
export function __wbg_wasmprotonwalletapiclient_free(a: number, b: number): void;
export function __wbg_wasmapiclients_free(a: number, b: number): void;
export function __wbg_get_wasmapiclients_exchange_rate(a: number): number;
export function __wbg_set_wasmapiclients_exchange_rate(a: number, b: number): void;
export function __wbg_get_wasmapiclients_email_integration(a: number): number;
export function __wbg_set_wasmapiclients_email_integration(a: number, b: number): void;
export function __wbg_get_wasmapiclients_bitcoin_address(a: number): number;
export function __wbg_set_wasmapiclients_bitcoin_address(a: number, b: number): void;
export function __wbg_get_wasmapiclients_payment_gateway(a: number): number;
export function __wbg_set_wasmapiclients_payment_gateway(a: number, b: number): void;
export function __wbg_get_wasmapiclients_price_graph(a: number): number;
export function __wbg_set_wasmapiclients_price_graph(a: number, b: number): void;
export function __wbg_get_wasmapiclients_settings(a: number): number;
export function __wbg_set_wasmapiclients_settings(a: number, b: number): void;
export function __wbg_get_wasmapiclients_network(a: number): number;
export function __wbg_set_wasmapiclients_network(a: number, b: number): void;
export function __wbg_get_wasmapiclients_invite(a: number): number;
export function __wbg_set_wasmapiclients_invite(a: number, b: number): void;
export function __wbg_get_wasmapiclients_wallet(a: number): number;
export function __wbg_set_wasmapiclients_wallet(a: number, b: number): void;
export function wasmprotonwalletapiclient_new(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number): void;
export function wasmprotonwalletapiclient_clients(a: number): number;
export function __wbg_wasmmnemonic_free(a: number, b: number): void;
export function wasmmnemonic_new(a: number, b: number): void;
export function wasmmnemonic_fromString(a: number, b: number, c: number): void;
export function wasmmnemonic_asString(a: number, b: number): void;
export function wasmmnemonic_asWords(a: number, b: number): void;
export function getWordsAutocomplete(a: number, b: number, c: number): void;
export function __wbg_wasmpaymentlink_free(a: number, b: number): void;
export function __wbg_wasmonchainpaymentlink_free(a: number, b: number): void;
export function __wbg_get_wasmonchainpaymentlink_address(a: number, b: number): void;
export function __wbg_set_wasmonchainpaymentlink_address(a: number, b: number, c: number): void;
export function __wbg_get_wasmonchainpaymentlink_amount(a: number, b: number): void;
export function __wbg_set_wasmonchainpaymentlink_amount(a: number, b: number, c: number): void;
export function __wbg_get_wasmonchainpaymentlink_message(a: number, b: number): void;
export function __wbg_set_wasmonchainpaymentlink_message(a: number, b: number, c: number): void;
export function __wbg_get_wasmonchainpaymentlink_label(a: number, b: number): void;
export function __wbg_set_wasmonchainpaymentlink_label(a: number, b: number, c: number): void;
export function wasmpaymentlink_toString(a: number, b: number): void;
export function wasmpaymentlink_toUri(a: number, b: number): void;
export function wasmpaymentlink_tryParse(a: number, b: number, c: number, d: number): void;
export function wasmpaymentlink_getKind(a: number): number;
export function wasmpaymentlink_assumeOnchain(a: number): number;
export function __wbg_wasmpsbtrecipient_free(a: number, b: number): void;
export function __wbg_set_wasmpsbtrecipient_0(a: number, b: number, c: number): void;
export function __wbg_wasmpsbt_free(a: number, b: number): void;
export function __wbg_get_wasmpsbt_recipients(a: number, b: number): void;
export function __wbg_set_wasmpsbt_recipients(a: number, b: number, c: number): void;
export function __wbg_get_wasmpsbt_total_fees(a: number): number;
export function __wbg_set_wasmpsbt_total_fees(a: number, b: number): void;
export function wasmpsbt_sign(a: number, b: number, c: number): number;
export function wasmpsbt_computeTxVbytes(a: number, b: number): void;
export function __wbg_wasmaddressinfo_free(a: number, b: number): void;
export function __wbg_get_wasmaddressinfo_index(a: number): number;
export function __wbg_set_wasmaddressinfo_index(a: number, b: number): void;
export function __wbg_get_wasmaddressinfo_address(a: number, b: number): void;
export function __wbg_set_wasmaddressinfo_address(a: number, b: number, c: number): void;
export function __wbg_get_wasmaddressinfo_keychain(a: number): number;
export function __wbg_set_wasmaddressinfo_keychain(a: number, b: number): void;
export function __wbg_get_wasmpsbtrecipient_1(a: number): number;
export function __wbg_set_wasmpsbtrecipient_1(a: number, b: number): void;
export function __wbg_set_wasmauthdata_uid(a: number, b: number, c: number): void;
export function __wbg_get_wasmpsbtrecipient_0(a: number, b: number): void;
export function __wbg_get_wasmauthdata_uid(a: number, b: number): void;
export function __wbg_wasmapiwalletbitcoinaddressdata_free(a: number, b: number): void;
export function __wbg_get_wasmapiwalletbitcoinaddressdata_Data(a: number): number;
export function __wbg_set_wasmapiwalletbitcoinaddressdata_Data(a: number, b: number): void;
export function __wbg_wasmapiwalletbitcoinaddresses_free(a: number, b: number): void;
export function __wbg_get_wasmapiwalletbitcoinaddresses_0(a: number, b: number): void;
export function __wbg_set_wasmapiwalletbitcoinaddresses_0(a: number, b: number, c: number): void;
export function __wbg_wasmapibitcoinaddresscreationpayloaddata_free(a: number, b: number): void;
export function __wbg_get_wasmapibitcoinaddresscreationpayloaddata_Data(a: number): number;
export function __wbg_set_wasmapibitcoinaddresscreationpayloaddata_Data(a: number, b: number): void;
export function __wbg_wasmapibitcoinaddressescreationpayload_free(a: number, b: number): void;
export function __wbg_get_wasmapibitcoinaddressescreationpayload_0(a: number, b: number): void;
export function __wbg_set_wasmapibitcoinaddressescreationpayload_0(a: number, b: number, c: number): void;
export function wasmapibitcoinaddressescreationpayload_new(): number;
export function wasmapibitcoinaddressescreationpayload_push(a: number, b: number): void;
export function __wbg_wasmbitcoinaddressclient_free(a: number, b: number): void;
export function wasmbitcoinaddressclient_getBitcoinAddresses(a: number, b: number, c: number, d: number, e: number, f: number): number;
export function wasmbitcoinaddressclient_getBitcoinAddressHighestIndex(a: number, b: number, c: number, d: number, e: number): number;
export function wasmbitcoinaddressclient_addBitcoinAddress(a: number, b: number, c: number, d: number, e: number, f: number): number;
export function wasmbitcoinaddressclient_updateBitcoinAddress(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number): number;
export function __wbg_wasmremainingmonthlyinvitations_free(a: number, b: number): void;
export function __wbg_get_wasmremainingmonthlyinvitations_Available(a: number): number;
export function __wbg_set_wasmremainingmonthlyinvitations_Available(a: number, b: number): void;
export function __wbg_get_wasmremainingmonthlyinvitations_Used(a: number): number;
export function __wbg_set_wasmremainingmonthlyinvitations_Used(a: number, b: number): void;
export function __wbg_wasminviteclient_free(a: number, b: number): void;
export function wasminviteclient_sendNewcomerInvite(a: number, b: number, c: number, d: number, e: number): number;
export function wasminviteclient_checkInviteStatus(a: number, b: number, c: number, d: number, e: number, f: number): number;
export function wasminviteclient_sendEmailIntegrationInvite(a: number, b: number, c: number, d: number, e: number): number;
export function wasminviteclient_getRemainingMonthlyInvitation(a: number): number;
export function __wbg_wasmpaymentgatewayclient_free(a: number, b: number): void;
export function __wbg_wasmcountriesandprovidertupple_free(a: number, b: number): void;
export function __wbg_get_wasmcountriesandprovidertupple_0(a: number): number;
export function __wbg_set_wasmcountriesandprovidertupple_0(a: number, b: number): void;
export function __wbg_get_wasmcountriesandprovidertupple_1(a: number): number;
export function __wbg_set_wasmcountriesandprovidertupple_1(a: number, b: number): void;
export function __wbg_wasmcountriesbyprovider_free(a: number, b: number): void;
export function __wbg_get_wasmcountriesbyprovider_data(a: number, b: number): void;
export function __wbg_set_wasmcountriesbyprovider_data(a: number, b: number, c: number): void;
export function __wbg_wasmfiatcurrenciesandprovidertupple_free(a: number, b: number): void;
export function __wbg_get_wasmfiatcurrenciesandprovidertupple_1(a: number): number;
export function __wbg_set_wasmfiatcurrenciesandprovidertupple_1(a: number, b: number): void;
export function __wbg_wasmfiatcurrenciesbyprovider_free(a: number, b: number): void;
export function __wbg_get_wasmfiatcurrenciesbyprovider_data(a: number, b: number): void;
export function __wbg_set_wasmfiatcurrenciesbyprovider_data(a: number, b: number, c: number): void;
export function __wbg_wasmpaymentmethodsandprovidertupple_free(a: number, b: number): void;
export function __wbg_get_wasmpaymentmethodsandprovidertupple_1(a: number): number;
export function __wbg_set_wasmpaymentmethodsandprovidertupple_1(a: number, b: number): void;
export function __wbg_wasmpaymentmethodsbyprovider_free(a: number, b: number): void;
export function __wbg_get_wasmpaymentmethodsbyprovider_data(a: number, b: number): void;
export function __wbg_set_wasmpaymentmethodsbyprovider_data(a: number, b: number, c: number): void;
export function __wbg_wasmquotesandprovidertupple_free(a: number, b: number): void;
export function __wbg_get_wasmquotesandprovidertupple_1(a: number): number;
export function __wbg_set_wasmquotesandprovidertupple_1(a: number, b: number): void;
export function __wbg_wasmquotesbyprovider_free(a: number, b: number): void;
export function __wbg_get_wasmquotesbyprovider_data(a: number, b: number): void;
export function __wbg_set_wasmquotesbyprovider_data(a: number, b: number, c: number): void;
export function wasmpaymentgatewayclient_getCountries(a: number): number;
export function wasmpaymentgatewayclient_getFiatCurrencies(a: number): number;
export function wasmpaymentgatewayclient_getPaymentMethods(a: number, b: number, c: number): number;
export function wasmpaymentgatewayclient_getQuotes(a: number, b: number, c: number, d: number, e: number, f: number): number;
export function wasmpaymentgatewayclient_createOnRampCheckout(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number): number;
export function wasmpaymentgatewayclient_signUrl(a: number, b: number, c: number, d: number): number;
export function wasmpaymentgatewayclient_getPublicApiKey(a: number, b: number): number;
export function wasmpaymentgatewayclient_getCheckoutIframeSrc(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number): void;
export function __wbg_wasmaddress_free(a: number, b: number): void;
export function wasmaddress_new(a: number, b: number, c: number, d: number): void;
export function wasmaddress_fromScript(a: number, b: number, c: number): void;
export function wasmaddress_toString(a: number, b: number): void;
export function wasmaddress_intoScript(a: number): number;
export function __wbg_wasmlocktime_free(a: number, b: number): void;
export function wasmlocktime_fromHeight(a: number): number;
export function wasmlocktime_fromSeconds(a: number): number;
export function wasmlocktime_isBlockHeight(a: number): number;
export function wasmlocktime_isBlockTime(a: number): number;
export function wasmlocktime_toConsensusU32(a: number): number;
export function __wbg_wasmscript_free(a: number, b: number): void;
export function __wbg_get_wasmscript_0(a: number, b: number): void;
export function __wbg_wasmtransaction_free(a: number, b: number): void;
export function wasmtransaction_fromPsbt(a: number, b: number): void;
export function wasmscript_toAddress(a: number, b: number, c: number): void;
export function __wbg_wasmoutpoint_free(a: number, b: number): void;
export function __wbg_get_wasmoutpoint_0(a: number, b: number): void;
export function __wbg_set_wasmoutpoint_0(a: number, b: number, c: number): void;
export function wasmoutpoint_fromString(a: number, b: number): number;
export function __wbg_wasmsequence_free(a: number, b: number): void;
export function __wbg_get_wasmsequence_0(a: number): number;
export function __wbg_set_wasmsequence_0(a: number, b: number): void;
export function __wbg_wasmdetailledtxin_free(a: number, b: number): void;
export function __wbg_get_wasmdetailledtxin_previous_output(a: number): number;
export function __wbg_set_wasmdetailledtxin_previous_output(a: number, b: number): void;
export function __wbg_get_wasmdetailledtxin_script_sig(a: number): number;
export function __wbg_set_wasmdetailledtxin_script_sig(a: number, b: number): void;
export function __wbg_get_wasmdetailledtxin_sequence(a: number): number;
export function __wbg_set_wasmdetailledtxin_sequence(a: number, b: number): void;
export function __wbg_wasmtxout_free(a: number, b: number): void;
export function __wbg_get_wasmtxout_value(a: number): number;
export function __wbg_set_wasmtxout_value(a: number, b: number): void;
export function __wbg_get_wasmtxout_script_pubkey(a: number): number;
export function __wbg_set_wasmtxout_script_pubkey(a: number, b: number): void;
export function __wbg_get_wasmtxout_is_mine(a: number): number;
export function __wbg_set_wasmtxout_is_mine(a: number, b: number): void;
export function __wbg_get_wasmtxout_address(a: number, b: number): void;
export function __wbg_set_wasmtxout_address(a: number, b: number, c: number): void;
export function __wbg_wasmtransactiondetailsdata_free(a: number, b: number): void;
export function __wbg_get_wasmtransactiondetailsdata_Data(a: number): number;
export function __wbg_set_wasmtransactiondetailsdata_Data(a: number, b: number): void;
export function __wbg_wasmtransactiondetailsarray_free(a: number, b: number): void;
export function __wbg_get_wasmtransactiondetailsarray_0(a: number, b: number): void;
export function __wbg_set_wasmtransactiondetailsarray_0(a: number, b: number, c: number): void;
export function createTransactionFromPsbt(a: number, b: number): number;
export function __wbg_wasmwallet_free(a: number, b: number): void;
export function __wbg_wasmdiscoveredaccount_free(a: number, b: number): void;
export function __wbg_get_wasmdiscoveredaccount_0(a: number): number;
export function __wbg_set_wasmdiscoveredaccount_0(a: number, b: number): void;
export function __wbg_get_wasmdiscoveredaccount_1(a: number): number;
export function __wbg_set_wasmdiscoveredaccount_1(a: number, b: number): void;
export function __wbg_get_wasmdiscoveredaccount_2(a: number): number;
export function __wbg_set_wasmdiscoveredaccount_2(a: number, b: number): void;
export function __wbg_wasmdiscoveredaccounts_free(a: number, b: number): void;
export function __wbg_get_wasmdiscoveredaccounts_data(a: number, b: number): void;
export function __wbg_set_wasmdiscoveredaccounts_data(a: number, b: number, c: number): void;
export function wasmwallet_new(a: number, b: number, c: number, d: number, e: number, f: number): void;
export function wasmwallet_addAccount(a: number, b: number, c: number, d: number, e: number): void;
export function wasmwallet_discoverAccounts(a: number, b: number): number;
export function wasmwallet_getAccount(a: number, b: number, c: number): number;
export function wasmwallet_getBalance(a: number): number;
export function wasmwallet_getTransactions(a: number, b: number, c: number): number;
export function wasmwallet_getTransaction(a: number, b: number, c: number, d: number): number;
export function wasmwallet_getFingerprint(a: number, b: number): void;
export function wasmwallet_clearStore(a: number, b: number): void;
export function __wbg_get_wasmfiatcurrenciesandprovidertupple_0(a: number): number;
export function __wbg_get_wasmpaymentmethodsandprovidertupple_0(a: number): number;
export function __wbg_get_wasmquotesandprovidertupple_0(a: number): number;
export function __wbg_set_wasmfiatcurrenciesandprovidertupple_0(a: number, b: number): void;
export function __wbg_set_wasmpaymentmethodsandprovidertupple_0(a: number, b: number): void;
export function __wbg_set_wasmquotesandprovidertupple_0(a: number, b: number): void;
export function __wbg_set_wasmscript_0(a: number, b: number, c: number): void;
export function __wbg_wasmapiwalletbitcoinaddresslookupdata_free(a: number, b: number): void;
export function __wbg_get_wasmapiwalletbitcoinaddresslookupdata_Data(a: number): number;
export function __wbg_set_wasmapiwalletbitcoinaddresslookupdata_Data(a: number, b: number): void;
export function __wbg_wasmemailintegrationclient_free(a: number, b: number): void;
export function wasmemailintegrationclient_lookupBitcoinAddress(a: number, b: number, c: number): number;
export function wasmemailintegrationclient_createBitcoinAddressesRequest(a: number, b: number, c: number): number;
export function __wbg_wasmapiexchangeratedata_free(a: number, b: number): void;
export function __wbg_get_wasmapiexchangeratedata_Data(a: number): number;
export function __wbg_set_wasmapiexchangeratedata_Data(a: number, b: number): void;
export function __wbg_wasmapifiatcurrencydata_free(a: number, b: number): void;
export function __wbg_get_wasmapifiatcurrencydata_Data(a: number): number;
export function __wbg_set_wasmapifiatcurrencydata_Data(a: number, b: number): void;
export function __wbg_wasmapifiatcurrencies_free(a: number, b: number): void;
export function __wbg_get_wasmapifiatcurrencies_0(a: number, b: number): void;
export function __wbg_set_wasmapifiatcurrencies_0(a: number, b: number, c: number): void;
export function __wbg_wasmexchangerateclient_free(a: number, b: number): void;
export function wasmexchangerateclient_getExchangeRate(a: number, b: number, c: number, d: number): number;
export function wasmexchangerateclient_getAllFiatCurrencies(a: number): number;
export function __wbg_wasmpricegraphclient_free(a: number, b: number): void;
export function __wbg_wasmwrappedpricegraph_free(a: number, b: number): void;
export function __wbg_get_wasmwrappedpricegraph_data(a: number): number;
export function __wbg_set_wasmwrappedpricegraph_data(a: number, b: number): void;
export function wasmpricegraphclient_getGraphData(a: number, b: number, c: number): number;
export function __wbg_wasmwalletclient_free(a: number, b: number): void;
export function __wbg_wasmapiwalletdata_free(a: number, b: number): void;
export function __wbg_get_wasmapiwalletdata_Wallet(a: number): number;
export function __wbg_set_wasmapiwalletdata_Wallet(a: number, b: number): void;
export function __wbg_get_wasmapiwalletdata_WalletKey(a: number): number;
export function __wbg_set_wasmapiwalletdata_WalletKey(a: number, b: number): void;
export function __wbg_get_wasmapiwalletdata_WalletSettings(a: number): number;
export function __wbg_set_wasmapiwalletdata_WalletSettings(a: number, b: number): void;
export function wasmapiwalletdata_from_parts(a: number, b: number, c: number): number;
export function __wbg_wasmwalletaccountdata_free(a: number, b: number): void;
export function __wbg_get_wasmwalletaccountdata_Data(a: number): number;
export function __wbg_set_wasmwalletaccountdata_Data(a: number, b: number): void;
export function __wbg_wasmwalletaccountaddressdata_free(a: number, b: number): void;
export function __wbg_get_wasmwalletaccountaddressdata_Data(a: number): number;
export function __wbg_set_wasmwalletaccountaddressdata_Data(a: number, b: number): void;
export function __wbg_wasmmigratedwalletaccountdata_free(a: number, b: number): void;
export function __wbg_get_wasmmigratedwalletaccountdata_Data(a: number): number;
export function __wbg_set_wasmmigratedwalletaccountdata_Data(a: number, b: number): void;
export function __wbg_wasmmigratedwalletaccounts_free(a: number, b: number): void;
export function __wbg_get_wasmmigratedwalletaccounts_0(a: number, b: number): void;
export function __wbg_set_wasmmigratedwalletaccounts_0(a: number, b: number, c: number): void;
export function wasmmigratedwalletaccounts_new(): number;
export function wasmmigratedwalletaccounts_push(a: number, b: number): void;
export function __wbg_wasmmigratedwallettransactiondata_free(a: number, b: number): void;
export function __wbg_get_wasmmigratedwallettransactiondata_Data(a: number): number;
export function __wbg_set_wasmmigratedwallettransactiondata_Data(a: number, b: number): void;
export function __wbg_wasmmigratedwallettransactions_free(a: number, b: number): void;
export function __wbg_get_wasmmigratedwallettransactions_0(a: number, b: number): void;
export function __wbg_set_wasmmigratedwallettransactions_0(a: number, b: number, c: number): void;
export function wasmmigratedwallettransactions_new(): number;
export function wasmmigratedwallettransactions_push(a: number, b: number): void;
export function __wbg_wasmapiwallettransactiondata_free(a: number, b: number): void;
export function __wbg_get_wasmapiwallettransactiondata_Data(a: number): number;
export function __wbg_set_wasmapiwallettransactiondata_Data(a: number, b: number): void;
export function __wbg_wasmapiwalletsdata_free(a: number, b: number): void;
export function __wbg_get_wasmapiwalletsdata_0(a: number, b: number): void;
export function __wbg_set_wasmapiwalletsdata_0(a: number, b: number, c: number): void;
export function __wbg_wasmapiwalletaccounts_free(a: number, b: number): void;
export function __wbg_get_wasmapiwalletaccounts_0(a: number, b: number): void;
export function __wbg_set_wasmapiwalletaccounts_0(a: number, b: number, c: number): void;
export function __wbg_wasmapiwalletaccountaddresses_free(a: number, b: number): void;
export function __wbg_get_wasmapiwalletaccountaddresses_0(a: number, b: number): void;
export function __wbg_set_wasmapiwalletaccountaddresses_0(a: number, b: number, c: number): void;
export function __wbg_wasmapiwallettransactions_free(a: number, b: number): void;
export function __wbg_get_wasmapiwallettransactions_0(a: number, b: number): void;
export function __wbg_set_wasmapiwallettransactions_0(a: number, b: number, c: number): void;
export function wasmwalletclient_getWallets(a: number): number;
export function wasmwalletclient_createWallet(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number, n: number, o: number, p: number, q: number, r: number, s: number): number;
export function wasmwalletclient_migrate(a: number, b: number, c: number, d: number, e: number, f: number): number;
export function wasmwalletclient_updateWalletName(a: number, b: number, c: number, d: number, e: number): number;
export function wasmwalletclient_disableShowWalletRecovery(a: number, b: number, c: number): number;
export function wasmwalletclient_deleteWallet(a: number, b: number, c: number): number;
export function wasmwalletclient_getWalletAccounts(a: number, b: number, c: number): number;
export function wasmwalletclient_getWalletAccountAddresses(a: number, b: number, c: number, d: number, e: number): number;
export function wasmwalletclient_createWalletAccount(a: number, b: number, c: number, d: number, e: number, f: number, g: number): number;
export function wasmwalletclient_updateWalletAccountFiatCurrency(a: number, b: number, c: number, d: number, e: number, f: number): number;
export function wasmwalletclient_updateWalletAccountLabel(a: number, b: number, c: number, d: number, e: number, f: number, g: number): number;
export function wasmwalletclient_updateWalletAccountsOrder(a: number, b: number, c: number, d: number, e: number): number;
export function wasmwalletclient_updateWalletAccountLastUsedIndex(a: number, b: number, c: number, d: number, e: number, f: number): number;
export function wasmwalletclient_addEmailAddress(a: number, b: number, c: number, d: number, e: number, f: number, g: number): number;
export function wasmwalletclient_removeEmailAddress(a: number, b: number, c: number, d: number, e: number, f: number, g: number): number;
export function wasmwalletclient_deleteWalletAccount(a: number, b: number, c: number, d: number, e: number): number;
export function wasmwalletclient_getWalletTransactions(a: number, b: number, c: number, d: number, e: number, f: number, g: number): number;
export function wasmwalletclient_getWalletTransactionsToHash(a: number, b: number, c: number, d: number, e: number): number;
export function wasmwalletclient_createWalletTransaction(a: number, b: number, c: number, d: number, e: number, f: number): number;
export function wasmwalletclient_updateWalletTransactionLabel(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number): number;
export function wasmwalletclient_updateWalletTransactionHashedTxId(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number): number;
export function wasmwalletclient_updateExternalWalletTransactionSender(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number): number;
export function wasmwalletclient_setWalletTransactionFlag(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number): number;
export function wasmwalletclient_deleteWalletTransactionFlag(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number): number;
export function wasmwalletclient_deleteWalletTransaction(a: number, b: number, c: number, d: number, e: number, f: number, g: number): number;
export function getDefaultStopGap(): number;
export function __wbg_wasmblockchainclient_free(a: number, b: number): void;
export function wasmblockchainclient_new(a: number, b: number): void;
export function wasmblockchainclient_getFeesEstimation(a: number): number;
export function wasmblockchainclient_fullSync(a: number, b: number, c: number, d: number): number;
export function wasmblockchainclient_partialSync(a: number, b: number): number;
export function wasmblockchainclient_shouldSync(a: number, b: number): number;
export function wasmblockchainclient_broadcastPsbt(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number): number;
export function __wbg_wasmderivationpath_free(a: number, b: number): void;
export function wasmderivationpath_new(a: number, b: number, c: number): void;
export function wasmderivationpath_fromParts(a: number, b: number, c: number): number;
export function wasmderivationpath_fromString(a: number, b: number, c: number): void;
export function rustsecp256k1_v0_10_0_context_create(a: number): number;
export function rustsecp256k1_v0_10_0_context_destroy(a: number): void;
export function rustsecp256k1_v0_10_0_default_illegal_callback_fn(a: number, b: number): void;
export function rustsecp256k1_v0_10_0_default_error_callback_fn(a: number, b: number): void;
export function __wbindgen_malloc(a: number, b: number): number;
export function __wbindgen_realloc(a: number, b: number, c: number, d: number): number;
export const __wbindgen_export_2: WebAssembly.Table;
export function _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hae7f392f86fe5282(a: number, b: number, c: number): void;
export function _dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h86ce8e209641a7fb(a: number, b: number): void;
export function __wbindgen_add_to_stack_pointer(a: number): number;
export function __wbindgen_free(a: number, b: number, c: number): void;
export function __wbindgen_exn_store(a: number): void;
export function wasm_bindgen__convert__closures__invoke2_mut__h95351c291133fbc8(a: number, b: number, c: number, d: number): void;
