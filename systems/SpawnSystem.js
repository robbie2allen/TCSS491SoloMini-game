class SpawnSystem {
    update(deltaTime, game) {
        const MAX_BOXES = 10;
        const MAX_X = 2400;
        const MIN_X = 1400;
        const MAX_Y = 0;
        const MIN_Y = 435;
        
        let totalBoxes = 0;

        for (let entity of game.entities) {
            if (entity.box) {
                totalBoxes++;
            }
        }

        //spawn boxes off screen
        let boxSeed = Math.random();
        if(totalBoxes <= MAX_BOXES) {
            if(boxSeed >= 0.3) { //spawn small box
                if(boxSeed >= 0.8) { //fall from ceiling
                    gameEngine.addEntity(createBox((Math.random() * 1200), 0));
                }
                gameEngine.addEntity(createBox((Math.random() * (MAX_X - MIN_X) + MIN_X), (Math.random() * (MIN_Y - MAX_Y) + MAX_Y)));
            }
            else //spawn big crate
                gameEngine.addEntity(createCrate((Math.random() * (MAX_X - MIN_X) + MIN_X), (Math.random() * (MIN_Y - MAX_Y) + MAX_Y)));
            
        }
    }

    resetGame(game) {
        for (let entity of game.entities) {
            entity.removeFromWorld = true;
        }

        //re-add all entities
        gameEngine.addEntity(createPlayer(275, 595, 275, 425));
        gameEngine.addEntity(createBox(475, 515));
        gameEngine.addEntity(createBox(675, 515));
        gameEngine.addEntity(createBox(675, 515-80));
        gameEngine.addEntity(createCrate(775, 515-80));
        gameEngine.addEntity(createConveyor(0, 600));
    }
}