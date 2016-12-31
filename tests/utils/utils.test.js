const utils = require('./utils');
const expect = require('expect');


it('should add two numbers', () => {
	let res = utils.add(33, 11);
	
	expect(res).toBe(44).toBeA('number');
});

it('should square a number', () => {
	
	let res = utils.square(4);
	
	expect(res).toBe(16).toBeA('number');
});

it('should verify that first and last names are set', () => {
	let user = {location: 'ATL', age: 34};
	let res = utils.setName(user, 'Deon Nero');
	expect(res).toInclude({
		firstName: 'Deon',
		lastName: 'Nero'
	});
});

// it('should expect some values', () => {
// 	//expect(12).toNotBe(1);
// 	//expect({name: 'Deon'}).toEqual({name: 'Deon'});
// 	expect([2, 3, 4]).toInclude(2);
// 	expect({
// 		name: 'Deon',
// 		age: 34,
// 		location: 'ATL'
// 	}).toInclude({
// 		age: 34,
// 		name: 'Deon'
// 	})
// });