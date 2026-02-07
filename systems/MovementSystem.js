class MovementSystem {
    update(deltaTime, game) {
        for (let entity of game.entities) {
            if (entity.position && entity.velocity) {
                const newX = entity.position.x + entity.velocity.dx * deltaTime;
                const newY = entity.position.y + entity.velocity.dy * deltaTime;


                entity.position.x = newX;
                entity.position.y = newY;
                
            }
            
            //have conveyor push other entities
            if ((entity.playercontrolled && entity.playercontrolled.isGrounded) || entity.box) {
                entity.position.x -= 2; 
            }
        }
    }
}