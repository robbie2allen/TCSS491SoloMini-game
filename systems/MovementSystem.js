class MovementSystem {
    update(deltaTime, game) {
        const CONVEYOR_SPEED = 3;
        for (let entity of game.entities) {
            if (entity.position && entity.velocity) {
                const newX = entity.position.x + entity.velocity.dx * deltaTime;
                const newY = entity.position.y + entity.velocity.dy * deltaTime;


                entity.position.x = newX;
                entity.position.y = newY;
                
            }
            
            //have conveyor push other entities
            if ((entity.playercontrolled && entity.playercontrolled.isGrounded) || entity.box) {
                entity.position.x -= CONVEYOR_SPEED;
            }

            //block player from going to far right
            if(entity.playercontrolled && entity.position.x > 1200-entity.collider.width) {
                console.log(entity.position.x)
                entity.position.x = 1200-entity.collider.width;
            }
        }
    }
}