const {expect} = require('chai');
const rp = require('request-promise');

const partial_request_options = {
    method: 'GET',
    json: true
};

describe('index', () => {
    describe('When calling the API', () => {
        it('Should return empty object', async () => {
            const expected = {};

            const complete_request_options = Object.assign({
                uri: 'http://localhost:3000/'
            }, partial_request_options);
            const actual = await rp(complete_request_options);

            expect(actual).to.deep.equal(expected);
        })
    });
});
