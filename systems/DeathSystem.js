class DeathSystem {
    update(deltaTime, game) {
        for (let entity of game.entities) {
            //have game reset when player is too far left
            if (entity.playercontrolled && entity.position.x <= -59) {
                this.resetGame(game); 
            }
            else if(entity.position.x < -entity.collider.width) {
                entity.removeFromWorld = true;
            }
        }
    }

    resetGame(game) {
        for (let entity of game.entities) {
            entity.removeFromWorld = true;
        }

        //re-add all entities
        gameEngine.addEntity(createPlayer(275, 595, 275, 425));
        // gameEngine.addEntity(createBox(475, 515));
        // gameEngine.addEntity(createBox(675, 515));
        // gameEngine.addEntity(createBox(675, 515-80));
        // gameEngine.addEntity(createCrate(775, 515-80));
        gameEngine.addEntity(createConveyor(0, 600));
    }
}