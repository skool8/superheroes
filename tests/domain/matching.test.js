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
        dispatcher.registerHero(hero);

        // then
        const result = dispatcher.getInterventionPlan();
        expect(result).to.eql([
            {
                name: 'Batman',
                location: 'Batcave',
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
        dispatcher.registerHero(superman);
        dispatcher.registerHero(batman);

        // then
        const result = dispatcher.getInterventionPlan();
        expect(result).to.eql([
            {
                name: 'Superman',
                location: 'Batcave',
                action: 'standby'
            },
            {
                name: 'Batman',
                location: 'Batcave',
                action: 'standby'
            }
        ])
    });

    it('when a hero is registered and an event occurs find adequate intervention plan', () => {
        // given
        const dispatcher = new Dispatcher();
        const superman = {
            name: 'Superman'
        };
        const catastrophe = {
            location: 'Batcave',
            type: 'Flood'
        }

        // when
        dispatcher.registerHero(superman);
        dispatcher.registerEvent(catastrophe);

        // then
        const result = dispatcher.getInterventionPlan();
        expect(result).to.eql([
            {
                name: 'Superman',
                location: 'Batcave',
                action: 'standby'
            }
        ])
    });

});



