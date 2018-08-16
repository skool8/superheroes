const {expect} = require('chai');
const rp = require('request-promise');

const partial_request_options = {
    json: true
};

describe('index', () => {
    describe('When calling the API root', () => {
        it('Should return empty object', async () => {
            const expected = {};

            const complete_request_options = Object.assign({
                method: 'GET',
                uri: 'http://localhost:3000/'
            }, partial_request_options);
            const actual = await rp(complete_request_options);

            expect(actual).to.deep.equal(expected);
        })
    });
    describe('When calling the registration endpoint', () => {
        it('Should return 200 OK', async () => {
            const complete_request_options = Object.assign({
                uri: 'http://localhost:3000/registration',
                method: 'POST',
                body: { name: "Batman" },
                resolveWithFullResponse: true
            }, partial_request_options);

            const {statusCode} = await rp(complete_request_options);

            expect(statusCode).to.equals(200);
        })
    });

    describe('When calling the event endpoint', () => {
        it('Should return 200 OK', async () => {
            const complete_request_options = Object.assign({
                uri: 'http://localhost:3000/event',
                method: 'POST',
                body: { type: "Flood", location: "New York" },
                resolveWithFullResponse: true
            }, partial_request_options);

            const {statusCode} = await rp(complete_request_options);

            expect(statusCode).to.equals(200);
        })
    });
});
