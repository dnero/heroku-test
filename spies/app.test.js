const expect = require('expect');
const rewire = require('rewire');


let app = rewire('./app.js');

describe('App', () => {

	var db = {
		saveUser: expect.createSpy()
	};
	app.__set__('db', db);

	it('should call the spy correctly', () =>{
		let spy = expect.createSpy();
		spy('DIN', 34);
		expect(spy).toHaveBeenCalledWith('DIN', 34);
	});

	it('should call savedUser with user object', () => {
		let email = 'dontreyenero@gmail.com',
			password = '12345';
		
		app.handleSignup(email, password);
		expect(db.saveUser).toHaveBeenCalledWith({email, password});
	});
});