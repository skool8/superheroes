class Dispatcher {
    constructor() {
        this.heroes = [];
        this.events = [];
    }

    registerHero (hero) {
        this.heroes.push(hero)
    }

    registerEvent (catastrophe) {
        this.events.push(catastrophe)
    }

    getInterventionPlan() {
        return this.heroes.map(hero => ({name: hero.name, location: 'Batcave', action: 'standby'}));
    }
}
module.exports = Dispatcher;