const assert = require('assert');
const computeTax = require('../computeTax');


assert.equal(computeTax(0), 0);
assert.equal(computeTax(2700), 0);
assert.equal(Math.ceil(computeTax(42000)), 6956);  // from http://www.impots.gouv.fr/portal/dgi/public/popup?espId=0&typePage=cpr02&docOid=documentstandard_6117
assert.equal(Math.floor(computeTax(12000)), 322);  // from http://www.impots.gouv.fr/portal/dgi/public/popup?espId=0&typePage=cpr02&docOid=documentstandard_6117


let income = 50000;
while (computeTax(income) < income * .20)
	income++;
console.log('Tax for a single person is over 20% of her income after earning more than', income, '€.');
