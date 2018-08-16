const Dispatcher = require('../../src/domain/Dispatcher');
const expect = require('chai').expect;

describe('Dispatch', () => {
    it('when hero is registered intervention plan is standby', () => {
        // given
        const dispatcher = new Dispatcher();
        const hero = {
            name: 'Batman'
        };

        // when
        dispatcher.register(hero);

        // then
        const result = dispatcher.getInterventionPlan();
        expect(result).to.eql([
            {
                name: 'Batman',
                action: 'standby'
            }
        ])
    });


    it('when two heroes are registered intervention plan is standby', () => {
        // given
        const dispatcher = new Dispatcher();
        const superman = {
            name: 'Superman'
        };
        const batman = {
            name: 'Batman'
        };

        // when
        dispatcher.register(superman);
        dispatcher.register(batman);

        // then
        const result = dispatcher.getInterventionPlan();
        expect(result).to.eql([
            {
                name: 'Superman',
                action: 'standby'
            },
            {
                name: 'Batman',
                action: 'standby'
            }
        ])
    });

});



