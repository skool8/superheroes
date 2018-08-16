class Dispatcher {
    constructor() {
        this.heroes = [];
    }

    register (hero) {
        this.heroes.push(hero)
    }

    getInterventionPlan() {
        return this.heroes.map(hero => ({name: hero.name, action: 'standby'}));
    }
}
module.exports = Dispatcher;