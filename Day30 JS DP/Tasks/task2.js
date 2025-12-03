class gameStrategy {
    executePlan() {
        throw new Error("please select a certain strategy");
    }
}

class AttackStrategy extends gameStrategy {
    constructor() {
        super();
    }
    executePlan() {
        console.log("Team is attacking aggressively");
    }
}
class DefenseStrategy extends gameStrategy {
    constructor() {
        super();
    }
    executePlan() {
        console.log("Team is defending deeply and protecting the goal");

    }
}
class MediumStrategy extends gameStrategy {
    constructor() {
        super();
    }
    executePlan() {
        console.log("Team is playing balanced between attack and defense");
    }
}

class FootballGame {
    constructor(strategy) {
        this.strategy = strategy;
    }

    changePlanStrategy(newStrategy) {
        this.strategy = newStrategy;
        this.play();
    }

    play() {
        this.strategy.executePlan();
    }
}

console.log("--------------------------------------------------");

let game = new FootballGame(new AttackStrategy());
game.play();

game.changePlanStrategy(new DefenseStrategy());

game.changePlanStrategy(new MediumStrategy());


