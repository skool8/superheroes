const Dispatcher = require('../../src/domain/Dispatcher');
const expect = require('chai').expect;

describe('Dispatch', () => {
    it('when hero is registered intervention plan is Standby', () => {
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
                hero: 'Batman',
                location: 'Batcave',
                action: 'Standby'
            }
        ]);
    });

    it('when two heroes are registered intervention plan is Standby', () => {
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
                hero: 'Superman',
                location: 'Batcave',
                action: 'Standby'
            },
            {
                hero: 'Batman',
                location: 'Batcave',
                action: 'Standby'
            }
        ]);
    });

    it('when a hero is registered and an event occurs find adequate intervention plan', () => {
        // given
        const dispatcher = new Dispatcher();
        const superman = {
            name: 'Superman'
        };
        const catastrophe = {
            location: 'Singapour',
            type: 'Flood'
        };

        // when
        dispatcher.registerHero(superman);
        dispatcher.registerEvent(catastrophe);

        // then
        const result = dispatcher.getInterventionPlan();
        expect(result).to.eql([
            {
                hero: 'Superman',
                location: 'Singapour',
                action: 'Prevent'
            }
        ]);
    });

    it('when a hero is registered and an event occurs find adequate intervention plan in the right location', () => {
        // given
        const dispatcher = new Dispatcher();
        const superman = {
            name: 'Superman'
        };
        const catastrophe = {
            location: 'New-York',
            type: 'Flood'
        };

        // when
        dispatcher.registerHero(superman);
        dispatcher.registerEvent(catastrophe);

        // then
        const result = dispatcher.getInterventionPlan();
        expect(result).to.eql([
            {
                hero: 'Superman',
                location: 'New-York',
                action: 'Prevent'
            }
        ]);
    });

    it('when two heroes are registered and two catastrophes occur, interventions are dispatched', () => {
        // given
        const dispatcher = new Dispatcher();
        const superman = {
            name: 'Superman'
        };
        const batman = {name: "Batman"};
        const flood = {
            location: 'New-York',
            type: 'Flood'
        };
        const hurricane = {location: "Tokyo", type: "Hurricane"};

        // when
        dispatcher.registerHero(superman);
        dispatcher.registerHero(batman);
        dispatcher.registerEvent(flood);
        dispatcher.registerEvent(hurricane);

        // then
        const result = dispatcher.getInterventionPlan();
        expect(result).to.eql([
                {
                    hero: 'Superman',
                    location: 'New-York',
                    action: 'Prevent'
                },
                {
                    hero: 'Batman',
                    location: 'Tokyo',
                    action: 'Prevent'
                }
            ]
        );
    });
});



