class Dispatcher {
    constructor() {
        this.heroes = [];
        this.events = [];
        this.plan = [];
    }

    registerHero(hero) {
        this.heroes.push(hero);
    }

    registerEvent(catastrophe) {
        this.events.push(catastrophe);
    }

    getInterventionPlan() {
        if (this.events.length === 0) {
            return this.heroes.map(hero => ({hero: hero.name, location: 'Batcave', action: 'Standby'}));
        }
        else {
            this.dispatch();
            return this.plan;
        }
    }

    dispatch() {
        while (this.events.length > 0) {
            const catastrophe = this.events.shift();
            const hero = this.heroes.shift();

            this.plan.push({
                hero: hero.name,
                location: catastrophe.location,
                action: 'Prevent'
            });
        }
    }
}


module.exports = Dispatcher;