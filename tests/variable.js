const {
	BN, // Big Number support.
} = require("@openzeppelin/test-helpers");

const {
	zeroAddress,
	depositTypeRBTC,
	verificationTypeEveryone,
	verificationTypeByAddress,
	verificationTypeByStake,
	saleEndDurationOrTSDuration,
	saleEndDurationOrTSUntilSupply,
	transferTypeVested,
	transferTypeWaitedUnlock,
	depositTypeToken,
	saleTypeFCFS
} = require("./constants");

// Variables

let cliff = 1; // This is in 4 weeks. i.e. 1 * 4 weeks.
let duration = 11; // This is in 4 weeks. i.e. 11 * 4 weeks.

let waitedTS = 0;

let [
	firstMinAmount,
	firstMaxAmount,
	firstRemainingTokens,
	firstSaleStartTS,
	firstSaleEnd,
	firstUnlockedBP,
	firstVestOrLockCliff,
	firstVestOfLockDuration,
	firstDepositRate,
	firstDepositToken,
	firstDepositType,
	firstVerificationType,
	firstSaleEndDurationOrTS,
	firstTransferType,
	firstSaleType,
] = [
	new BN(1),
	new BN(50000),
	new BN(6000000),
	0,
	86400,
	0,
	1,
	11,
	100,
	zeroAddress,
	depositTypeRBTC,
	verificationTypeByAddress,
	saleEndDurationOrTSDuration,
	transferTypeVested,
	saleTypeFCFS,
];

let [
	secondMinAmount,
	secondMaxAmount,
	secondRemainingTokens,
	secondSaleStartTS,
	secondSaleEnd,
	secondUnlockedBP,
	secondVestOrLockCliff,
	secondVestOfLockDuration,
	secondDepositRate,
	secondDepositToken,
	secondDepositType,
	secondVerificationType,
	secondSaleEndDurationOrTS,
	secondTransferType,
	secondSaleType,
] = [
	new BN(1),
	new BN(75000),
	new BN(10000000),
	0,
	86400,
	5000,
	1,
	11,
	50,
	zeroAddress,
	depositTypeRBTC,
	verificationTypeEveryone,
	saleEndDurationOrTSDuration,
	transferTypeVested,
	saleTypeFCFS,
];

let [
	thirdMinAmount,
	thirdMaxAmount,
	thirdRemainingTokens,
	thirdSaleStartTS,
	thirdSaleEnd,
	thirdUnlockedBP,
	thirdVestOrLockCliff,
	thirdVestOfLockDuration,
	thirdDepositRate,
	thirdDepositToken,
	thirdDepositType,
	thirdVerificationType,
	thirdSaleEndDurationOrTS,
	thirdTransferType,
	thirdSaleType,
] = [
	new BN(1),
	new BN(100000),
	new BN(4000000),
	0,
	86400,
	5000,
	1,
	11,
	10,
	zeroAddress,
	depositTypeToken,
	verificationTypeByStake,
	saleEndDurationOrTSDuration,
	transferTypeWaitedUnlock,
	saleTypeFCFS,
];

let [thirdMinStake, thirdMaxStake, thirdBlockNumber, thirdDate] = [new BN(1), 0, [], []];

module.exports = {
	cliff,
	duration,
	waitedTS,

	firstMinAmount,
	firstMaxAmount,
	firstRemainingTokens,
	firstSaleStartTS,
	firstSaleEnd,
	firstUnlockedBP,
	firstVestOrLockCliff,
	firstVestOfLockDuration,
	firstDepositRate,
	firstDepositToken,
	firstDepositType,
	firstVerificationType,
	firstSaleEndDurationOrTS,
	firstTransferType,
	firstSaleType,

	secondMinAmount,
	secondMaxAmount,
	secondRemainingTokens,
	secondSaleStartTS,
	secondSaleEnd,
	secondUnlockedBP,
	secondVestOrLockCliff,
	secondVestOfLockDuration,
	secondDepositRate,
	secondDepositToken,
	secondDepositType,
	secondVerificationType,
	secondSaleEndDurationOrTS,
	secondTransferType,
	thirdSaleType,

	thirdMinAmount,
	thirdMaxAmount,
	thirdRemainingTokens,
	thirdSaleStartTS,
	thirdSaleEnd,
	thirdUnlockedBP,
	thirdVestOrLockCliff,
	thirdVestOfLockDuration,
	thirdDepositRate,
	thirdDepositToken,
	thirdDepositType,
	thirdVerificationType,
	thirdSaleEndDurationOrTS,
	thirdTransferType,
	thirdSaleType,

	thirdMinStake,
	thirdMaxStake,
	thirdBlockNumber,
	thirdDate,

	saleEndDurationOrTSUntilSupply
};
