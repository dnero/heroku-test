const request = require('supertest');
const expect = require('expect');

let app = require('./server.js').app;

describe('Server tests', () => {
	
	it('should return hello world response', (done) => {
		request(app)
			.get('/')
			.expect((res) => {
				expect(res.body).toInclude({
					error: 'Page not found.'
				})
			})
			.expect(404)
			.end(done);
	});
	
	it('you should exist in the array and the status code is 200', (done) => {
		request(app)
			.get('/users')
			.expect(200)
			.expect( (res) => {
				expect(res.body).toInclude({
					name: 'DIN',
					age: 34
				})
			})
			.end(done);
	});
	
});