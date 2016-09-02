/** Describes each income tax “tranche” by mapping its lower bound to its effective additional percentage.
*/
const TRANCHES = {
	9700	: .14, // pre-computing manually to avoid rounding errors.
	26791	: .16, // .30 - .14
	71826	: .11,  // .41 - .30
	152108	: .04  // .45 - .41
}

module.exports = function computeTax(revenuImposable) {
	return Object.keys(TRANCHES)
		.reduce((total, lowerBound) => {
			let trancheAmount = (revenuImposable - lowerBound) * TRANCHES[lowerBound];
			return total + (trancheAmount > 0 ? trancheAmount : 0);
		}, 0);
}
